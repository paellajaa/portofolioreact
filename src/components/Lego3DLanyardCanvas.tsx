import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useTexture, Environment, Lightformer, Html } from "@react-three/drei";
import {
  Physics,
  RigidBody,
  BallCollider,
  CuboidCollider,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import lanyardStrapImg from "../assets/lanyard.png";

// Extend R3F with MeshLine component
extend({ MeshLineGeometry, MeshLineMaterial });

// Physics props for each rope segment
const segmentProps = {
  type: "dynamic" as const,
  canSleep: false,
  colliders: false,
  angularDamping: 4,
  linearDamping: 4,
};

function LegoLanyardBand({ maxSpeed = 50, minSpeed = 10 }: { maxSpeed?: number; minSpeed?: number }) {
  const bandRef = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = useRef(new THREE.Vector3()).current;
  const dir = useRef(new THREE.Vector3()).current;
  const ang = useRef(new THREE.Vector3()).current;
  const rot = useRef(new THREE.Vector3()).current;

  const [dragged, setDragged] = useState<THREE.Vector3 | false>(false);
  const [hovered, setHovered] = useState(false);

  // Load textures for ID card & Lego strap
  const cardTexture = useTexture("/lanyard web.jpeg");
  const strapTexture = useTexture(lanyardStrapImg);

  // Strap texture repeat settings
  strapTexture.wrapS = strapTexture.wrapT = THREE.RepeatWrapping;
  if (cardTexture) {
    cardTexture.colorSpace = THREE.SRGBColorSpace;
  }

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  curve.curveType = "chordal";

  // Physics Joints connecting fixed top anchor to the ID card
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.9]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.9]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.9]);

  // Spherical Joint for clip holder on top of ID card
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 0.65, 0],
  ]);

  // Mouse cursor feedback on hover / drag
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !bandRef.current ||
      !card.current
    )
      return;

    // Drag physics logic
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());

      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    } else {
      // Natural pendulum physics & spring dampening on release
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel(
        { x: ang.x * 0.94, y: ang.y - rot.y * 0.3, z: ang.z * 0.94 },
        false
      );
    }

    // Update rope curve points
    const fixedPos = fixed.current.translation();
    const j1Pos = j1.current.translation();
    const j2Pos = j2.current.translation();
    const j3Pos = j3.current.translation();

    curve.points[0].copy(j3Pos);
    curve.points[1].copy(j2Pos);
    curve.points[2].copy(j1Pos);
    curve.points[3].copy(fixedPos);

    if (bandRef.current && bandRef.current.geometry) {
      bandRef.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  return (
    <>
      <group position={[0, 4.2, 0]}>
        {/* Fixed Top Anchor */}
        <RigidBody ref={fixed} type="fixed" position={[0, 0, 0]} colliders={false} />

        {/* Rope Segments */}
        <RigidBody position={[0.2, -0.8, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[0.4, -1.6, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[0.6, -2.4, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>

        {/* ID Card Rigid Body */}
        <RigidBody
          position={[0.8, -3.2, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          {/* Card Collider */}
          <CuboidCollider args={[0.4, 0.6, 0.025]} />

          {/* Interactive Card Mesh Group */}
          <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerDown={(e: any) => {
              e.stopPropagation();
              e.target.setPointerCapture(e.pointerId);
              if (card.current) {
                const translation = card.current.translation();
                setDragged(
                  new THREE.Vector3()
                    .copy(e.point)
                    .sub(new THREE.Vector3(translation.x, translation.y, translation.z))
                );
              }
            }}
            onPointerUp={(e: any) => {
              e.stopPropagation();
              e.target.releasePointerCapture(e.pointerId);
              setDragged(false);
            }}
          >
            {/* Main ID Card Mesh (0.8 x 1.2 x 0.05) */}
            <mesh>
              <boxGeometry args={[0.8, 1.2, 0.05]} />

              {/* Material: Sides lego yellow/red, Front & Back loaded with lanyard web.jpeg */}
              <meshStandardMaterial attach="material-0" color="#e11d48" roughness={0.3} />
              <meshStandardMaterial attach="material-1" color="#e11d48" roughness={0.3} />
              <meshStandardMaterial attach="material-2" color="#facc15" roughness={0.3} />
              <meshStandardMaterial attach="material-3" color="#facc15" roughness={0.3} />
              <meshStandardMaterial
                attach="material-4"
                map={cardTexture}
                roughness={0.2}
                metalness={0.1}
              />
              <meshStandardMaterial
                attach="material-5"
                map={cardTexture}
                roughness={0.2}
                metalness={0.1}
              />
            </mesh>

            {/* Lego Card Holder Clip (Black Plastic Housing) */}
            <mesh position={[0, 0.62, 0]}>
              <boxGeometry args={[0.18, 0.08, 0.08]} />
              <meshStandardMaterial color="#18181b" roughness={0.2} metalness={0.3} />
            </mesh>

            {/* Metal Ring Hook */}
            <mesh position={[0, 0.68, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.045, 0.012, 16, 32]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.1} />
            </mesh>

            {/* Lego Stud Accents on Top Clip */}
            <mesh position={[-0.05, 0.67, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.03, 16]} />
              <meshStandardMaterial color="#e11d48" roughness={0.2} />
            </mesh>
            <mesh position={[0.05, 0.67, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.03, 16]} />
              <meshStandardMaterial color="#facc15" roughness={0.2} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* MeshLine Lanyard Strap */}
      <mesh ref={bandRef}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#ffffff"
          depthTest={false}
          resolution={new THREE.Vector2(1000, 1000)}
          useMap={1}
          map={strapTexture}
          repeat={new THREE.Vector2(-1, 1)}
          lineWidth={0.35}
        />
      </mesh>
    </>
  );
}

// Fallback Loading Spinner
function LegoFallbackLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-2xl text-white">
        <div className="w-10 h-10 border-4 border-yellow-400 border-t-red-500 rounded-full animate-spin mb-3"></div>
        <span className="text-xs font-bold tracking-wider uppercase text-yellow-400">
          Loading 3D Lego Lanyard...
        </span>
      </div>
    </Html>
  );
}

export default function Lego3DLanyardCanvas() {
  return (
    <div className="w-full h-[500px] lg:h-[600px] relative select-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent", touchAction: "pan-y" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={1.6} color="#fff7ed" castShadow />
        <directionalLight position={[-5, 5, -2]} intensity={0.6} color="#e0f2fe" />
        <pointLight position={[0, -2, 4]} intensity={0.9} color="#fef08a" />

        <Suspense fallback={<LegoFallbackLoader />}>
          <Physics gravity={[0, -32, 0]} interpolate timeStep={1 / 60}>
            <LegoLanyardBand />
          </Physics>

          <Environment blur={0.75}>
            <Lightformer
              intensity={2.5}
              color="#ffffff"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="#fef08a"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="#ef4444"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
          </Environment>
        </Suspense>
      </Canvas>

      {/* Floating Interactive Prompt Badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-black/40 backdrop-blur-md text-white text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#000] animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Drag card to pull & swing</span>
        </div>
      </div>
    </div>
  );
}
