import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Code2, Heart } from 'lucide-react';
import { personalInfo, education } from '../data/portfolio';

// Common Card Motion Variants/Props as requested
const cardMotionProps = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, type: 'spring', stiffness: 100 },
  whileHover: { y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' },
};

export default function About() {
  return (
    <section id="about" className="bg-[#F5F5F5] pt-6 pb-20 border-t-0 mt-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          {/* Lego Studs */}
          <div className="flex gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
          </div>
          {/* Header Yellow Badge */}
          <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-lg md:text-xl uppercase">
            ABOUT ME
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT — Profile Card & Stats */}
          <div className="flex flex-col gap-6">
            {/* Main About Card with Scroll Entrance and Lego Brick Lift Hover */}
            <motion.div
              {...cardMotionProps}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 rounded-none relative cursor-default"
            >
              {/* Stud Row on Card Top */}
              <div className="flex gap-2 mb-3">
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
              </div>

              <p className="text-[#af101a] font-mono font-bold text-sm uppercase mb-3 tracking-wide">
                I BUILD DIGITAL EXPERIENCES.
              </p>
              <p className="text-base leading-relaxed text-gray-800 mb-4">
                Halo! Saya <strong>Raffael Aditya Al Fachry</strong>, siswa{' '}
                <strong>Rekayasa Perangkat Lunak (RPL)</strong> di SMKN 4 Tangerang.
                Saya memiliki passion yang besar dalam dunia <em>Web Development</em>{' '}
                dan <em>UI/UX Design</em> — selalu berusaha menghadirkan antarmuka
                yang estetik, fungsional, dan user-friendly.
              </p>
              <p className="text-base leading-relaxed text-gray-800">
                Selain coding, saya juga menggeluti desain grafis dan video editing —
                memadukan kemampuan teknis dan kreativitas untuk menghasilkan karya
                digital yang bernilai tinggi.
              </p>

              <div className="border-t-2 border-black mt-6 pt-4 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-sm font-mono font-bold">
                  <MapPin size={16} className="text-[#af101a] flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold">
                  <Mail size={16} className="text-[#af101a] flex-shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-[#af101a] transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold">
                  <Phone size={16} className="text-[#af101a] flex-shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-[#af101a] transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards Grid with Scroll Entrance & Hover Lift */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '3+', Icon: Code2, color: 'bg-[#0055a4]' },
                { label: 'RPL Student', value: 'SMK', Icon: GraduationCap, color: 'bg-[#af101a]' },
                { label: 'Passion', value: '100%', Icon: Heart, color: 'bg-[#FFD500]' },
              ].map(({ label, value, Icon, color }, idx) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-4 text-center rounded-none relative cursor-default"
                >
                  <div className="flex gap-1.5 justify-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#FFD500] border border-black shadow-xs" />
                    <div className="w-3 h-3 rounded-full bg-[#FFD500] border border-black shadow-xs" />
                  </div>
                  <div className={`w-10 h-10 ${color} border-2 border-black flex items-center justify-center mx-auto mb-2 shadow-[2px_2px_0px_0px_#000]`}>
                    <Icon size={18} className={color === 'bg-[#FFD500]' ? 'text-black' : 'text-white'} />
                  </div>
                  <p className="font-mono font-bold text-xl">{value}</p>
                  <p className="font-mono text-[10px] uppercase text-gray-600 font-bold">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Education Section with Scroll Entrance & Hover Lift */}
          <div className="flex flex-col gap-6">
            <div>
              {/* Stud Row */}
              <div className="flex gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
              </div>
              <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-base uppercase mb-6 flex items-center gap-2">
                <GraduationCap size={18} />
                EDUCATION
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 rounded-none relative group cursor-default"
                >
                  {/* Card Stud Row Top */}
                  <div className="flex gap-2 mb-3">
                    <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                    <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                    <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xl">{edu.icon}</span>
                        <span
                          className={`font-mono text-[10px] font-bold border border-black px-2 py-0.5 uppercase ${
                            edu.status === 'Current'
                              ? 'bg-[#FFD500] text-black shadow-[1px_1px_0px_0px_#000]'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3 className="font-mono font-bold text-base md:text-lg uppercase text-black">
                        {edu.school}
                      </h3>
                      <p className="text-[#af101a] font-mono font-bold text-xs uppercase mt-0.5">
                        {edu.major}
                      </p>
                    </div>
                    <span className="font-mono font-bold text-xs border-2 border-black bg-[#FFD500] px-2.5 py-1 shadow-[2px_2px_0px_0px_#000] whitespace-nowrap flex-shrink-0">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
