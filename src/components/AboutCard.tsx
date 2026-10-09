// src/components/AboutCard.tsx
import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { personalInfo } from '../data/portfolioData';

export default function AboutCard() {
  const isMobile = useMediaQuery(768);
  const ref = useRef<HTMLDivElement>(null);
  const [avatarError, setAvatarError] = useState(false);

  // Motion values for tilt position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Convert mouse displacement into card rotation degrees
  const rotateX = useTransform(mouseY, [-120, 120], [15, -15]);
  const rotateY = useTransform(mouseX, [-120, 120], [-15, 15]);

  // Dynamic shadow displacement based on tilt
  const shadowX = useTransform(mouseX, [-120, 120], [-10, 10]);
  const shadowY = useTransform(mouseY, [-120, 120], [-10, 10]);

  // Lanyard string swing rotation
  const lanyardRotate = useTransform(mouseX, [-120, 120], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Calculate distance from center of card
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    mouseX.set(dx);
    mouseY.set(dy);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const SPRING_PHYSICS = { type: 'spring' as const, stiffness: 300, damping: 30 };

  if (isMobile) {
    // Mobile View: Clean, flat, static layout (no heavy 3D calculations or SVG)
    return (
      <div className="w-48 h-48 rounded-2xl object-cover object-center border border-zinc-800 bg-zinc-900/60 p-3 shadow-md flex flex-col justify-between select-none relative">
        <div className="relative w-full h-[70%] rounded-xl overflow-hidden bg-zinc-950">
          {!avatarError ? (
            <img
              src={personalInfo.avatar}
              alt="Raffael Aditya"
              className="w-full h-full object-cover object-center"
              onError={() => setAvatarError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-3xl font-black">
              {personalInfo.initials}
            </div>
          )}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
        </div>
        <div className="text-left mt-2">
          <p className="text-xs font-bold text-zinc-100 font-sans tracking-tight">Raffael Aditya</p>
          <p className="text-[10px] text-zinc-500 font-sans mt-0.5">Full-stack Web Developer</p>
        </div>
      </div>
    );
  }

  // Desktop View: Premium 3D tilt, magnetic pull, and physical lanyard swing animation
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center select-none cursor-pointer"
      style={{ perspective: 1000 }}
    >
      {/* ─── Physical Lanyard SVG ─── */}
      <motion.div
        style={{
          transformOrigin: 'top center',
          rotate: lanyardRotate,
        }}
        transition={SPRING_PHYSICS}
        className="w-24 h-24 absolute -top-[70px] z-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 120" className="w-full h-full text-zinc-700/60 overflow-visible">
          {/* Hang Clip Hook Anchor */}
          <circle cx="50" cy="15" r="4" fill="currentColor" />
          {/* Dual straps hanging down */}
          <path
            d="M 50 15 Q 35 60 48 100 M 50 15 Q 65 60 52 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Metal Badge clip ring */}
          <rect x="46" y="98" width="8" height="12" rx="2" fill="#52525b" />
          <circle cx="50" cy="104" r="2.5" fill="#27272a" />
        </svg>
      </motion.div>

      {/* ─── Main 3D Card frame ─── */}
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={SPRING_PHYSICS}
        className="w-48 h-64 rounded-2xl backdrop-blur-xl bg-zinc-900/40 border border-zinc-700/50 p-3 flex flex-col justify-between relative shadow-2xl z-20 group hover:border-violet-500/30"
      >
        {/* Metal clip slot highlight */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-zinc-950/80 border border-zinc-800" />

        {/* Outer Glow Inner highlights */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] rounded-2xl" />

        {/* Profile Image card container */}
        <div className="relative w-full h-[72%] rounded-xl overflow-hidden bg-zinc-950 mt-1 border border-zinc-800/60">
          {!avatarError ? (
            <img
              src={personalInfo.avatar}
              alt="Raffael Aditya"
              className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-black">
              {personalInfo.initials}
            </div>
          )}
          {/* Inset Shadow to embed image */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]" />
        </div>

        {/* Bio Info labels */}
        <div className="text-left mt-2">
          <p className="text-sm font-bold text-zinc-100 font-sans tracking-tight">Raffael Aditya</p>
          <p className="text-[10px] text-zinc-400 font-sans font-medium mt-0.5">Full-stack Web Developer</p>
        </div>

        {/* NFC Icon tag */}
        <div className="absolute bottom-3 right-3 text-[10px] text-zinc-600 font-mono tracking-widest uppercase">ID // RA</div>
      </motion.div>

      {/* ─── Dynamic 3D depth card shadow ─── */}
      <motion.div
        style={{
          x: shadowX,
          y: shadowY,
        }}
        transition={SPRING_PHYSICS}
        className="absolute inset-0 bg-black/60 rounded-2xl filter blur-xl -z-10 w-48 h-64 pointer-events-none"
      />
    </div>
  );
}
