import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="bg-lego-dots py-20 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          {/* Lego Studs */}
          <div className="flex gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
          </div>
          {/* Section Yellow Badge */}
          <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-lg md:text-xl uppercase">
            EXPERIENCE & ROLES
          </div>
        </motion.div>

        {/* Experience Cards Grid with Scroll Entrance & Lego Brick Lift Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 rounded-none relative flex flex-col justify-between group cursor-default"
            >
              {/* Stud Row Top */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                </div>
                <span className="font-mono text-[10px] font-bold border-2 border-black bg-[#FFD500] px-3 py-1 shadow-[2px_2px_0px_0px_#000] uppercase">
                  {exp.type}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#af101a] font-bold uppercase mb-1.5">
                  <Briefcase size={15} />
                  <span>{exp.company}</span>
                </div>
                <h3 className="font-mono font-bold text-lg md:text-xl uppercase mb-3 text-black group-hover:text-[#af101a] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="border-t-2 border-black pt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] font-bold border border-black bg-gray-100 px-2 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-xs font-bold flex items-center gap-1.5 text-gray-700">
                  <Calendar size={13} />
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
