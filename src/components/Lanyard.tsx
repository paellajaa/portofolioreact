// @ts-nocheck
/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// import card model and lanyard texture from assets folder
import cardGLB from '../assets/card.glb';
import lanyard from '../assets/lanyard.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

// 1x1 transparent pixel — lets useTexture be called unconditionally when a
// front/back image isn't supplied.
const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// The card model's front face is UV-mapped to the LEFT half of the texture
// atlas and the back face to the RIGHT half (measured from card.glb). Each
// custom image is composited into its own half so the two faces render
// independently, aspect-preserving (no stretching).
const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1
}: {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: new THREE.Vector3(...position), fov: fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI * 0.7} />
        <pointLight position={[0, 4, 8]} intensity={Math.PI * 1.5} decay={1.5} />
        <spotLight position={[0, 6, 12]} angle={0.25} penumbra={1} intensity={Math.PI * 2.5} castShadow />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1
}: {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: 'cover' | 'contain';
  lanyardImage?: string | null;
  lanyardWidth?: number;
}) {
  const band = useRef<any>(),
    fixed = useRef<any>(),
    j1 = useRef<any>(),
    j2 = useRef<any>(),
    j3 = useRef<any>(),
    card = useRef<any>();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic' as const, canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyardImage || lanyard);
  // useTexture must be called unconditionally; use a blank pixel when an image
  // isn't supplied for a given face, then skip compositing it below.
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  // Draw custom info-rich layout onto a high-res 2048x2048 canvas texture atlas.
  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    const baseImg = baseMap.image;

    // Use a high-res 2K texture for super crisp text rendering on 3D models
    const W = 2048;
    const H = 2048;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;

    // Keep the original baked atlas for the card edges and any untouched face.
    if (baseImg) {
      ctx.drawImage(baseImg, 0, 0, W, H);
    }

    const drawFrontFace = () => {
      const rx = FRONT_UV_RECT.x * W;
      const ry = FRONT_UV_RECT.y * H;
      const rw = FRONT_UV_RECT.w * W;
      const rh = FRONT_UV_RECT.h * H;

      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();

      // 1. Background (zinc-950)
      ctx.fillStyle = '#09090b';
      ctx.fillRect(rx, ry, rw, rh);

      // 2. Card borders
      ctx.strokeStyle = '#a855f7'; // Neon purple
      ctx.lineWidth = 12;
      ctx.strokeRect(rx + 20, ry + 20, rw - 40, rh - 40);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 4;
      ctx.strokeRect(rx + 32, ry + 32, rw - 64, rh - 64);

      // VS Code Active Tab Indicator: Vertical purple accent bar on the left edge
      ctx.fillStyle = '#a855f7';
      ctx.fillRect(rx + 24, ry + 24, 12, rh - 48);

      // 3. Top Header: ID Card Chip
      const chipX = rx + 80;
      const chipY = ry + 80;
      const chipW = 100;
      const chipH = 80;
      ctx.fillStyle = '#3f3f46'; // zinc-700
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(chipX, chipY, chipW, chipH, 12);
      } else {
        ctx.rect(chipX, chipY, chipW, chipH);
      }
      ctx.fill();
      ctx.strokeStyle = '#a1a1aa'; // zinc-400
      ctx.lineWidth = 4;
      ctx.stroke();

      // Chip internal circuit lines
      ctx.beginPath();
      ctx.moveTo(chipX + 33, chipY); ctx.lineTo(chipX + 33, chipY + chipH);
      ctx.moveTo(chipX + 66, chipY); ctx.lineTo(chipX + 66, chipY + chipH);
      ctx.moveTo(chipX, chipY + 40); ctx.lineTo(chipX + chipW, chipY + 40);
      ctx.stroke();

      // Header text labels
      ctx.fillStyle = '#71717a'; // zinc-500
      ctx.font = 'bold 32px monospace';
      ctx.textAlign = 'right';
      ctx.fillText('ACCESS BADGE', rx + rw - 80, ry + 115);

      ctx.fillStyle = '#a855f7';
      ctx.font = '16px monospace';
      ctx.fillText('ID: 011731DA', rx + rw - 80, ry + 145);

      // 4. Profile Photo (pp3.jpeg)
      const imgSize = 420;
      const imgX = rx + (rw - imgSize) / 2;
      const imgY = ry + 240;

      // Photo background border
      ctx.fillStyle = '#18181b'; // zinc-900
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(imgX - 10, imgY - 10, imgSize + 20, imgSize + 20, 24);
      } else {
        ctx.rect(imgX - 10, imgY - 10, imgSize + 20, imgSize + 20);
      }
      ctx.fill();
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 4;
      ctx.stroke();

      if (frontTex.image) {
        ctx.save();
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(imgX, imgY, imgSize, imgSize, 16);
        } else {
          ctx.rect(imgX, imgY, imgSize, imgSize);
        }
        ctx.clip();

        const img = frontTex.image as any;
        const scale = Math.max(imgSize / img.width, imgSize / img.height);
        const dw = img.width * scale;
        const dh = img.height * scale;
        const dx = imgX + (imgSize - dw) / 2;
        const dy = imgY + (imgSize - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);

        ctx.restore();
      } else {
        // Fallback RA block
        ctx.fillStyle = '#8b5cf6';
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(imgX, imgY, imgSize, imgSize, 16);
        } else {
          ctx.rect(imgX, imgY, imgSize, imgSize);
        }
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 150px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('RA', imgX + imgSize/2, imgY + imgSize/2);
        ctx.textBaseline = 'alphabetic';
      }

      // 5. Middle: Name "Raffael Aditya"
      ctx.fillStyle = '#f4f4f5'; // zinc-100
      ctx.font = 'bold 72px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Raffael Aditya', rx + rw / 2, ry + 780);

      // 6. Subtitle: "Full-Stack Developer" in Purple
      ctx.fillStyle = '#a855f7';
      ctx.font = 'bold 40px monospace';
      ctx.fillText('Full-Stack Developer', rx + rw / 2, ry + 850);

      // 7. Location: Tangerang, Indonesia
      ctx.fillStyle = '#a1a1aa'; // zinc-400
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('Tangerang, Indonesia', rx + rw / 2, ry + 930);

      // 8. Barcode Graphic
      const barcodeX = rx + 200;
      const barcodeY = ry + 990;
      const barcodeW = rw - 400;
      const barcodeH = 90;
      ctx.fillStyle = '#27272a';
      ctx.fillRect(barcodeX, barcodeY, barcodeW, barcodeH);

      ctx.fillStyle = '#ffffff';
      let currentX = barcodeX + 15;
      const endX = barcodeX + barcodeW - 15;
      let toggle = true;
      while (currentX < endX) {
        const lineW = Math.floor(Math.random() * 8) + 2;
        if (toggle) {
          ctx.fillRect(currentX, barcodeY + 10, lineW, barcodeH - 20);
        }
        currentX += lineW + (Math.floor(Math.random() * 4) + 1);
        toggle = !toggle;
      }

      ctx.fillStyle = '#71717a'; // zinc-500
      ctx.font = '22px monospace';
      ctx.fillText('VERIFIED 2026 // RA-011731DA', rx + rw / 2, ry + 1120);

      ctx.restore();
    };

    const drawBackFace = () => {
      const rx = BACK_UV_RECT.x * W;
      const ry = BACK_UV_RECT.y * H;
      const rw = BACK_UV_RECT.w * W;
      const rh = BACK_UV_RECT.h * H;

      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();

      // Zinc-950 back
      ctx.fillStyle = '#09090b';
      ctx.fillRect(rx, ry, rw, rh);

      // Borders
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 12;
      ctx.strokeRect(rx + 20, ry + 20, rw - 40, rh - 40);

      // Big logo text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 80px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('RA', rx + rw / 2, ry + rh / 2 - 20);

      ctx.fillStyle = '#71717a';
      ctx.font = 'bold 30px monospace';
      ctx.fillText('GITHUB.COM/PAELLAJAA', rx + rw / 2, ry + rh / 2 + 80);

      ctx.restore();
    };

    drawFrontFace();
    drawBackFace();

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<any>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, -0.5]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={4.0}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#a855f7"
          depthTest={true}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}
