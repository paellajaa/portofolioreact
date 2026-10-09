import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  Physics,
  RigidBody,
  BallCollider,
  CuboidCollider,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier';
import * as THREE from 'three';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

extend({ MeshLineGeometry, MeshLineMaterial });

// ---------------------------------------------------------------------------
// KONSTANTA GEOMETRI (satu sumber kebenaran supaya joint & visual selalu cocok)
// ---------------------------------------------------------------------------
const CARD_SCALE = 2.2;
const CARD_W = 1.2 * CARD_SCALE; // 2.64
const CARD_H = 1.6 * CARD_SCALE; // 3.52
const CARD_D = 0.05 * CARD_SCALE; // 0.11
const CARD_ATTACH_Y = CARD_H / 2; // titik klip = tepi atas kartu (1.76)

const ANCHOR_Y = 5.5; // di atas layar (kamera z=16, fov 35 -> tinggi tampak ~ +-5)
const ROPE_LEN = 3.8; // jarak maksimum anchor -> simpul tengah
const J1_REST_Y = ANCHOR_Y - ROPE_LEN; // 1.7
const CARD_REST_Y = J1_REST_Y - CARD_ATTACH_Y; // ~ -0.06

// Jarak maksimum pusat kartu dari anchor saat di-drag (dengan sedikit margin)
const MAX_DRAG_DIST = ROPE_LEN + CARD_ATTACH_Y - 0.4;

// 2D Neo-Brutalist Fallback ID Card with Framer Motion Drag (Preserved for safe export)
export function Fallback2DCard() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[520px] select-none">
      <div className="w-8 h-3 bg-black border-2 border-black rounded-xs mb-[-2px] z-10" />
      <div
        className="w-6 h-28 border-2 border-black shadow-[2px_2px_0px_0px_#000] z-0 overflow-hidden relative"
        style={{
          background:
            'repeating-linear-gradient(180deg, #af101a 0px, #af101a 10px, #ffd700 10px, #ffd700 20px, #0055a4 20px, #0055a4 30px, #1a1c1c 30px, #1a1c1c 40px)',
        }}
      >
        <img
          src="/lanyard-band.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-80"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="w-10 h-5 bg-[#cbd5e1] border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_#000] z-10 flex items-center justify-center mb-[-8px]">
        <div className="w-3.5 h-1.5 bg-[#1a1c1c] rounded-xs" />
      </div>

      <motion.div
        drag
        dragConstraints={{ top: -20, left: -50, right: 50, bottom: 50 }}
        dragElastic={0.2}
        whileHover={{ scale: 1.02, cursor: 'grab' }}
        whileTap={{ scale: 0.98, cursor: 'grabbing' }}
        className="relative z-20 cursor-grab active:cursor-grabbing w-72 sm:w-80 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] rounded-none overflow-hidden"
      >
        <div className="bg-[#ffd700] border-b-2 border-black px-3 py-1 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#af101a] border border-black" />
            <div className="w-3 h-3 rounded-full bg-[#0055a4] border border-black" />
          </div>
          <span className="font-mono font-bold text-[10px] text-black uppercase tracking-widest">
            LEGO ACCESS PASS
          </span>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#00852B] border border-black" />
          </div>
        </div>

        <img
          src="/lanyard web.jpeg"
          alt="Raffael Aditya Lego ID Card"
          className="w-full h-auto object-contain block pointer-events-none"
        />

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/85 text-white font-mono text-[10px] px-3 py-1 border border-white/20 pointer-events-none flex items-center gap-1.5 whitespace-nowrap shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Tarik / Drag ID Card</span>
        </div>
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1. TALI LANYARD (VISUAL)
// Melewati 3 titik nyata: anchor -> simpul tengah (j1) -> klip kartu.
// ---------------------------------------------------------------------------
function LanyardStrap({ strapTexture, anchorRef, midRef, cardRef }) {
  const lineRef = useRef();
  const clipOffset = useRef(new THREE.Vector3(0, CARD_ATTACH_Y, 0)).current;
  const tmpVec = useRef(new THREE.Vector3()).current;
  const tmpQuat = useRef(new THREE.Quaternion()).current;

  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, ANCHOR_Y, 0),
        new THREE.Vector3(0, J1_REST_Y, 0),
        new THREE.Vector3(0, CARD_REST_Y + CARD_ATTACH_Y, 0),
      ]),
    []
  );

  useFrame(() => {
    const anchor = anchorRef.current;
    const mid = midRef.current;
    const card = cardRef.current;
    if (!lineRef.current || !anchor || !mid || !card) return;

    const a = anchor.translation();
    const m = mid.translation();
    const c = card.translation();
    const r = card.rotation();
    if (![a.x, m.x, c.x, r.w].every(Number.isFinite)) return;

    // Klip = tepi atas kartu, mengikuti rotasi kartu
    tmpQuat.set(r.x, r.y, r.z, r.w);
    tmpVec.copy(clipOffset).applyQuaternion(tmpQuat).add(c);

    curve.points[0].set(a.x, a.y, a.z);
    curve.points[1].set(m.x, m.y, m.z);
    curve.points[2].copy(tmpVec);

    lineRef.current.setPoints(curve.getPoints(40));
  });

  return (
    <mesh>
      <meshLineGeometry ref={lineRef} attach="geometry" points={curve.getPoints(40)} />
      <meshLineMaterial
        attach="material"
        transparent
        opacity={1}
        depthTest
        color={0xffffff}
        map={strapTexture}
        useMap={1}
        lineWidth={0.3}
        repeat={[-1, 1]}
      />
    </mesh>
  );
}

// ---------------------------------------------------------------------------
// 2. FISIKA
// ---------------------------------------------------------------------------
function LanyardPhysics({ strapTexture, cardTexture }) {
  const anchorRef = useRef();
  const j1Ref = useRef();
  const cardRef = useRef();

  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isDraggingRef = useRef(false);
  const pendingReleaseRef = useRef(false);
  const dragOffset = useRef(new THREE.Vector3());
  const target = useRef(new THREE.Vector3());
  const lastTarget = useRef(new THREE.Vector3());
  const velocity = useRef(new THREE.Vector3());

  // Objek bantu yang dipakai ulang tiap frame (hindari alokasi di useFrame)
  const tmp = useRef({
    ray: new THREE.Vector3(),
    anchor: new THREE.Vector3(0, ANCHOR_Y, 0),
    toAnchor: new THREE.Vector3(),
    quat: new THREE.Quaternion(),
    euler: new THREE.Euler(),
  }).current;

  // Anchor -> simpul tengah (tali: jarak maksimum)
  useRopeJoint(anchorRef, j1Ref, [[0, 0, 0], [0, 0, 0], ROPE_LEN]);
  // Simpul tengah -> tepi atas kartu (bebas berputar di semua sumbu)
  useSphericalJoint(j1Ref, cardRef, [[0, 0, 0], [0, CARD_ATTACH_Y, 0]]);

  // Cursor
  useEffect(() => {
    document.body.style.cursor = dragged ? 'grabbing' : hovered ? 'grab' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered, dragged]);

  // Lepas drag di mana pun (termasuk saat kursor keluar dari kartu/canvas)
  useEffect(() => {
    const release = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      pendingReleaseRef.current = true;
      setDragged(false);
    };
    window.addEventListener('pointerup', release);
    window.addEventListener('pointercancel', release);
    return () => {
      window.removeEventListener('pointerup', release);
      window.removeEventListener('pointercancel', release);
    };
  }, []);

  // Terapkan momentum SETELAH body kembali 'dynamic'.
  // (Memanggil setLinvel saat masih kinematic membuat kecepatannya hilang -> kartu "kaku".)
  useEffect(() => {
    if (dragged || !pendingReleaseRef.current) return;
    pendingReleaseRef.current = false;

    const card = cardRef.current;
    const j1 = j1Ref.current;
    if (!card || !j1) return;

    const clamp = (v, m) => Math.max(-m, Math.min(m, v));
    const vx = clamp(velocity.current.x, 25);
    const vy = clamp(velocity.current.y, 25);

    card.wakeUp();
    card.setLinvel({ x: vx, y: vy, z: 0 }, true);
    card.setAngvel({ x: 0, y: -vx * 0.1, z: -vx * 0.25 }, true);

    j1.wakeUp();
    j1.setLinvel({ x: vx * 0.6, y: vy * 0.6, z: 0 }, true);
  }, [dragged]);

  useFrame((state, delta) => {
    const card = cardRef.current;
    if (!isDraggingRef.current || !card) return;

    // Titik kursor di bidang z = 0 (ray dari kamera)
    const { camera, pointer } = state;
    const dir = tmp.ray.set(pointer.x, pointer.y, 0.5).unproject(camera).sub(camera.position).normalize();
    const t = -camera.position.z / dir.z;
    target.current.copy(camera.position).addScaledVector(dir, t).add(dragOffset.current);
    target.current.z = 0;

    // Jangan melebihi panjang tali
    tmp.toAnchor.copy(target.current).sub(tmp.anchor);
    if (tmp.toAnchor.length() > MAX_DRAG_DIST) {
      tmp.toAnchor.setLength(MAX_DRAG_DIST);
      target.current.copy(tmp.anchor).add(tmp.toAnchor);
    }

    card.setNextKinematicTranslation(target.current);

    // Kecepatan kursor (dihaluskan) untuk lemparan saat dilepas
    if (delta > 0) {
      const inst = tmp.ray
        .copy(target.current)
        .sub(lastTarget.current)
        .divideScalar(delta);
      velocity.current.lerp(inst, 0.35);
    }
    lastTarget.current.copy(target.current);

    // Miring sedikit mengikuti arah tarikan
    tmp.euler.set(pointer.y * 0.25, 0, -pointer.x * 0.45);
    tmp.quat.setFromEuler(tmp.euler);
    card.setNextKinematicRotation(tmp.quat);

    card.wakeUp();
    j1Ref.current?.wakeUp();
  });

  const onPointerDown = (e) => {
    e.stopPropagation();
    e.target.setPointerCapture?.(e.pointerId);

    const card = cardRef.current;
    if (!card) return;

    // Simpan selisih titik klik terhadap pusat kartu supaya kartu tidak "loncat" ke kursor
    const pos = card.translation();
    dragOffset.current.set(pos.x - e.point.x, pos.y - e.point.y, 0);
    lastTarget.current.set(pos.x, pos.y, 0);
    velocity.current.set(0, 0, 0);

    isDraggingRef.current = true;
    setDragged(true);
  };

  return (
    <group>
      {/* Titik tumpu atas */}
      <RigidBody ref={anchorRef} type="fixed" position={[0, ANCHOR_Y, 0]} />

      {/* Simpul tengah tali */}
      <RigidBody
        ref={j1Ref}
        position={[0, J1_REST_Y, 0]}
        canSleep={false}
        linearDamping={0.4}
        angularDamping={0.4}
        colliders={false}
      >
        <BallCollider args={[0.1]} mass={1} />
      </RigidBody>

      {/* ID Card: kinematic saat di-drag, dynamic saat dilepas */}
      <RigidBody
        ref={cardRef}
        type={dragged ? 'kinematicPosition' : 'dynamic'}
        position={[0, CARD_REST_Y, 0]}
        canSleep={false}
        linearDamping={0.3}
        angularDamping={1.2}
        colliders={false}
      >
        <CuboidCollider args={[CARD_W / 2, CARD_H / 2, CARD_D / 2]} mass={2} />
        <group
          scale={CARD_SCALE}
          onPointerDown={onPointerDown}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.2, 1.6, 0.05]} />
            <meshStandardMaterial map={cardTexture} roughness={0.3} />
          </mesh>
        </group>
      </RigidBody>

      <LanyardStrap
        strapTexture={strapTexture}
        anchorRef={anchorRef}
        midRef={j1Ref}
        cardRef={cardRef}
      />
    </group>
  );
}

// ---------------------------------------------------------------------------
// SCENE (tekstur dimuat di dalam konteks Canvas)
// ---------------------------------------------------------------------------
function LanyardScene() {
  const strapTexture = useTexture('/lanyard-band.jpeg');
  const cardTexture = useTexture('/lanyard web.jpeg');

  useEffect(() => {
    strapTexture.wrapS = strapTexture.wrapT = THREE.RepeatWrapping;
    strapTexture.needsUpdate = true;
    cardTexture.colorSpace = THREE.SRGBColorSpace;
    cardTexture.needsUpdate = true;
  }, [strapTexture, cardTexture]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 10, 5]} intensity={2} castShadow />

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={3} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        </group>
      </Environment>

      <Physics gravity={[0, -30, 0]} timeStep="vary">
        <LanyardPhysics strapTexture={strapTexture} cardTexture={cardTexture} />
      </Physics>
    </>
  );
}

// Preload textures
useTexture.preload('/lanyard-band.jpeg');
useTexture.preload('/lanyard web.jpeg');

// ---------------------------------------------------------------------------
// 3. CANVAS UTAMA
// ---------------------------------------------------------------------------
export default function Lego3DLanyard() {
  return (
    <div
      className="relative w-full h-full min-h-[500px] flex justify-center items-center bg-transparent touch-pan-y"
      style={{ touchAction: 'pan-y' }}
    >
      <Suspense fallback={<div className="text-center font-bold p-10 font-mono text-sm">Loading 3D Lego...</div>}>
        <Canvas
          camera={{ position: [0, 0, 16], fov: 35 }}
          shadows
          gl={{ alpha: true }}
          style={{ background: 'transparent', touchAction: 'pan-y' }}
        >
          <Suspense fallback={null}>
            <LanyardScene />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
}
