import React from 'react';
import { motion } from 'framer-motion';
import LegoPhotoFrame from './LegoPhotoFrame';

const ROLES = [
  'Web Developer & UI/UX Designer',
  'Front-End Developer',
  'SMKN 4 Tangerang (Rekayasa Perangkat Lunak)',
  'Creative Coder',
];

const ROLE_HOVERS = [
  'hover:bg-[#FFD500] hover:text-black',
  'hover:bg-[#af101a] hover:text-white',
  'hover:bg-[#0055a4] hover:text-white',
  'hover:bg-[#00852B] hover:text-white',
];

const MARQUEE_ITEMS = [
  'BUILD', 'CODE', 'DESIGN',
  'BUILD', 'CODE', 'DESIGN',
  'BUILD', 'CODE', 'DESIGN',
  'BUILD', 'CODE', 'DESIGN',
];

// Staggered entrance variants for Hero section
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="about-hero" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-24 pt-6 mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Identity & Bio (7 cols) with Staggered Entrance */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Studs over Status */}
            <motion.div variants={heroItemVariants}>
              <div className="flex gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFD500] border-4 border-black shadow-[4px_4px_0px_0px_#000] w-fit font-bold font-mono text-xs">
                <span className="w-3 h-3 rounded-full bg-[#af101a] animate-pulse border-2 border-black" />
                <span className="text-black uppercase tracking-wider">
                  STATUS: READY TO BUILD
                </span>
              </div>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              variants={heroItemVariants}
              className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#1a1c1c] uppercase font-black leading-tight"
            >
              RAFFAEL ADITYA
              <br />
              <span className="text-[#af101a]">AL FACHRY</span>
            </motion.h1>

            {/* Bio Card - Neo-Brutalist White Card with Lift Hover Effect */}
            <motion.div
              variants={heroItemVariants}
              whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 rounded-none relative max-w-xl cursor-default"
            >
              {/* Stud Row */}
              <div className="flex gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
              </div>

              <p className="font-body-lg text-body-lg text-[#1a1c1c] leading-relaxed">
                Siswa RPL SMKN 4 Tangerang yang passionate dalam membangun pengalaman digital yang menarik — dari desain UI/UX yang estetik hingga kode front-end yang bersih, responsif, dan interaktif.
              </p>

              {/* Roles Badges */}
              <div className="flex flex-wrap gap-2.5 mt-5">
                {ROLES.map((role, idx) => {
                  const hoverStyle = ROLE_HOVERS[idx % ROLE_HOVERS.length];
                  return (
                    <motion.span
                      key={role}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`inline-block px-3 py-1.5 bg-[#F5F5F5] border-2 border-black font-mono text-[11px] font-bold text-black cursor-pointer select-none transition-colors duration-200 ${hoverStyle}`}
                    >
                      {role}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Buttons with Spring Bounce and Lego Press Effect */}
            <motion.div variants={heroItemVariants} className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#projects"
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, x: 2, y: -2 }}
                whileTap={{ scale: 0.95, x: 4, y: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#af101a] text-white font-mono text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] uppercase relative cursor-pointer"
              >
                {/* 3 Red Studs on Button Header */}
                <div className="absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#af101a] border border-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#af101a] border border-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#af101a] border border-black" />
                </div>
                <span>VIEW PROJECTS</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </motion.a>

              <motion.a
                href="mailto:raffaeladitya354@gmail.com"
                whileHover={{ scale: 1.05, x: 2, y: -2 }}
                whileTap={{ scale: 0.95, x: 4, y: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] uppercase relative cursor-pointer hover:bg-[#FFD500]"
              >
                <span>GET IN TOUCH</span>
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Lego Photo Frame (Phase 2 - Main Hero Profile) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full min-h-[520px]">
            <LegoPhotoFrame />
          </div>
        </div>
      </section>

      {/* Infinite Seamless Marquee Ticker Strip below Hero */}
      <div className="w-full border-y-4 border-black bg-[#FFD500] py-3.5 overflow-hidden mb-0 flex select-none shadow-[4px_4px_0px_0px_#000]">
        <motion.div
          className="flex w-max shrink-0 items-center gap-8 whitespace-nowrap font-mono text-xs font-bold text-black uppercase"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 16, repeat: Infinity }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8 shrink-0">
              <span>{item}</span>
              <span className="material-symbols-outlined text-[14px]">grid_view</span>
            </span>
          ))}
        </motion.div>
      </div>
    </>
  );
}
