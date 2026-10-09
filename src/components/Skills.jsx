import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';

const SKILL_ICONS = {
  'HTML5': 'https://cdn.simpleicons.org/html5',
  'CSS3': 'https://cdn.simpleicons.org/css3',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  'Bootstrap 5': 'https://cdn.simpleicons.org/bootstrap',
  'Bootstrap': 'https://cdn.simpleicons.org/bootstrap',
  'React.js': 'https://cdn.simpleicons.org/react',
  'React': 'https://cdn.simpleicons.org/react',
  'Laravel': 'https://cdn.simpleicons.org/laravel',
  'Web UI/UX Design': 'https://cdn.simpleicons.org/figma',
  'Figma': 'https://cdn.simpleicons.org/figma',
  'Canva': 'https://cdn.simpleicons.org/canva',
  'Desain Grafis': 'https://cdn.simpleicons.org/figma',
  'CapCut': 'https://cdn.simpleicons.org/capcut',
  'Video Editing': 'https://cdn.simpleicons.org/capcut',
  'Git / GitHub': 'https://cdn.simpleicons.org/git',
  'Git': 'https://cdn.simpleicons.org/git',
  'VS Code': 'https://cdn.simpleicons.org/visualstudiocode',
};

const FALLBACK_ICONS = {
  'CSS3': 'https://cdn.jsdelivr.net/npm/simple-icons/icons/css3.svg',
  'VS Code': 'https://cdn.jsdelivr.net/npm/simple-icons/icons/visualstudiocode.svg',
  'Bootstrap 5': 'https://cdn.jsdelivr.net/npm/simple-icons/icons/bootstrap.svg',
};

const CATEGORIES = ['All', 'Development', 'Design', 'Tools'];

// Staggered grid container variants
const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Skill item entrance variants
const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="bg-lego-dots py-20 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          {/* Lego Studs */}
          <div className="flex gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
          </div>
          {/* Yellow Header Badge */}
          <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-lg md:text-xl uppercase">
            SKILLS & TOOLS
          </div>
          <p className="font-mono text-xs uppercase text-gray-600 font-bold mt-2">
            TECHNICAL ARSENAL // CERTIFIED TOOLKIT
          </p>
        </motion.div>

        {/* Filter Buttons with Spring Bounce */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05, x: 2, y: -2 }}
              whileTap={{ scale: 0.95, x: 2, y: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className={`font-mono font-bold text-xs uppercase px-4 py-2 border-4 border-black transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#FFD500] text-black shadow-[4px_4px_0px_0px_#000]'
                  : 'bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Cards Grid with Staggered Entrance & Smooth Layout Transition */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconUrl = SKILL_ICONS[skill.name] || 'https://cdn.simpleicons.org/codefactor';
              return (
                <motion.div
                  key={skill.name}
                  layout
                  variants={skillItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 rounded-none relative flex flex-col justify-between group cursor-pointer"
                >
                  {/* Stud Row on Card Top */}
                  <div className="flex gap-2 mb-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  </div>

                  {/* SVG Icon via SimpleIcons CDN with Pop-up & Wiggle Hover */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-gray-50 border-2 border-black flex items-center justify-center mb-4 p-2.5 shadow-[2px_2px_0px_0px_#000]"
                  >
                    <img
                      src={iconUrl}
                      alt={skill.name}
                      className="w-full h-full object-contain pointer-events-none"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.retried) {
                          e.currentTarget.dataset.retried = 'true';
                          if (FALLBACK_ICONS[skill.name]) {
                            e.currentTarget.src = FALLBACK_ICONS[skill.name];
                            return;
                          }
                        }
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <div>
                    <h4 className="font-mono font-bold text-sm uppercase leading-tight mb-2 text-black">
                      {skill.name}
                    </h4>

                    {/* Category Pill */}
                    <span
                      className={`font-mono text-[9px] font-bold border border-black px-2 py-0.5 uppercase inline-block ${
                        skill.category === 'Development'
                          ? 'bg-[#0055a4] text-white'
                          : skill.category === 'Design'
                          ? 'bg-[#af101a] text-white'
                          : 'bg-black text-white'
                      }`}
                    >
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
