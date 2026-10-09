import React from 'react';
import { motion } from 'framer-motion';

export default function LegoPhotoFrame() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      whileHover={{ y: -14, x: -2, scale: 1.02, boxShadow: '14px 14px 0px 0px #000' }}
      className="relative w-[340px] md:w-[420px] aspect-[4/5] bg-black p-3 border-4 border-black shadow-[10px_10px_0px_0px_#000] select-none cursor-pointer"
    >
      {/* ================= STUDS LEGO DI SEKELILING BINGKAI ================= */}
      {/* 1. Top Border Studs */}
      <div className="absolute -top-3 left-4 right-4 flex justify-between pointer-events-none z-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={`top-stud-${i}`}
            className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)] ${
              i % 2 === 0 ? 'bg-[#FFD500]' : 'bg-[#E3000B]'
            }`}
          />
        ))}
      </div>

      {/* 2. Bottom Border Studs */}
      <div className="absolute -bottom-3 left-4 right-4 flex justify-between pointer-events-none z-20">
        {[...Array(9)].map((_, i) => (
          <div
            key={`bottom-stud-${i}`}
            className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)] ${
              i % 2 === 0 ? 'bg-[#E3000B]' : 'bg-[#FFD500]'
            }`}
          />
        ))}
      </div>

      {/* 3. Left Border Studs */}
      <div className="absolute top-4 bottom-4 -left-3 flex flex-col justify-between pointer-events-none z-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={`left-stud-${i}`}
            className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)] ${
              i % 2 === 0 ? 'bg-[#FFD500]' : 'bg-[#E3000B]'
            }`}
          />
        ))}
      </div>

      {/* 4. Right Border Studs */}
      <div className="absolute top-4 bottom-4 -right-3 flex flex-col justify-between pointer-events-none z-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={`right-stud-${i}`}
            className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)] ${
              i % 2 === 0 ? 'bg-[#E3000B]' : 'bg-[#FFD500]'
            }`}
          />
        ))}
      </div>

      {/* ================= FOTO PROFIL DALAM BINGKAI ================= */}
      <div className="relative w-full h-full bg-[#1a1c1c] overflow-hidden border-2 border-black">
        <img
          src="/profile-hero.jpg"
          alt="Raffael Aditya Al Fachry"
          className="object-cover w-full h-full block"
          onError={(e) => {
            e.currentTarget.src = '/profile.jpg';
          }}
        />

        {/* Subtle Glass Sheen Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
      </div>

      {/* ================= BADGES DI POJOK BINGKAI ================= */}
      {/* Pojok Kanan Atas: Badge Miring ⚡ UI/UX & DEV */}
      <div className="absolute -top-3 -right-3 rotate-3 z-30 pointer-events-none">
        <div className="bg-[#FFD500] text-black text-xs font-black font-mono px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase tracking-wider flex items-center gap-1">
          <span>⚡ UI/UX & DEV</span>
        </div>
      </div>

      {/* Pojok Kiri Bawah: Badge 📍 RPL STUDENT */}
      <div className="absolute -bottom-3 -left-3 -rotate-2 z-30 pointer-events-none">
        <div className="bg-[#E3000B] text-white text-xs font-black font-mono px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase tracking-wider flex items-center gap-1">
          <span>📍 RPL STUDENT</span>
        </div>
      </div>
    </motion.div>
  );
}
