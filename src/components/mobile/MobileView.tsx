// src/components/mobile/MobileView.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Calendar,
  GitPullRequest,
  Sparkles,
  Mail,
  User,
  AlertCircle,
} from 'lucide-react';

import {
  personalInfo,
  internships,
  skills,
  stats,
} from '../../data/portfolioData';

import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import MobileProjects from './MobileProjects';
import SpotifyCard from '../SpotifyCard';
import AboutCard from '../AboutCard';

type TabId = 'profile' | 'issues' | 'experience' | 'skills' | 'contact';

export default function MobileView() {
  const [activeTab, setActiveTab] = useState<TabId>('profile');

  // Simple responsive contribution graph for mobile (fewer columns)
  const renderMobileContributionGraph = () => {
    const cols = 22; // Fits mobile width perfectly
    const rows = 7;
    const colors = [
      'bg-zinc-900 border-zinc-800/40',
      'bg-emerald-950/60 border-emerald-900/20',
      'bg-emerald-900 border-emerald-800/40',
      'bg-emerald-700 border-emerald-600/40',
      'bg-emerald-500 border-emerald-400/40',
    ];

    const grid = [];
    for (let c = 0; c < cols; c++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        const seed = Math.random() * 100;
        let colorIdx = 0;
        if (seed > 92) colorIdx = 4;
        else if (seed > 80) colorIdx = 3;
        else if (seed > 60) colorIdx = 2;
        else if (seed > 35) colorIdx = 1;
        col.push(colorIdx);
      }
      grid.push(col);
    }

    return (
      <div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-xl mt-4">
        <div className="flex items-center justify-between mb-2.5 text-[10px] text-zinc-500 font-mono">
          <span className="flex items-center gap-1"><GithubIcon size={12} className="text-zinc-500" /> Contributions Grid</span>
          <span>342 commits</span>
        </div>
        <div className="flex gap-[3px] justify-center overflow-x-auto pb-1">
          {grid.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-[3px]">
              {col.map((val, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`w-[8px] h-[8px] rounded-[1px] border ${colors[val]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans text-zinc-300">
      
      {/* ─── Top Header (GitHub Mobile Bar) ─── */}
      <header className="sticky top-0 z-40 bg-zinc-950 border-b border-zinc-900 px-4 py-3 flex justify-between items-center select-none">
        <div className="flex items-center gap-2">
          <GithubIcon size={20} className="text-white" />
          <span className="font-mono text-xs font-bold tracking-tight text-white">raffaeladitya</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available
        </div>
      </header>

      {/* ─── Main Content View Feed ─── */}
      <main className="flex-1 px-4 py-6 overflow-y-auto space-y-4">
        <SpotifyCard />
        <AnimatePresence mode="wait">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex justify-center w-full">
                <AboutCard />
              </div>

              <div className="space-y-4">
                <p className="text-violet-400 font-mono text-xs font-bold">&gt; {personalInfo.headline}</p>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">{personalInfo.bio}</p>
              </div>

              <div className="space-y-2 text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Education: {personalInfo.education.school}</span>
                </div>
              </div>

              {/* GitHub Stats Feed */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="border border-zinc-900 bg-zinc-900/30 rounded-xl p-3.5">
                    <span className="text-xl font-bold text-white block">{stat.value}</span>
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Contribution Graph */}
              {renderMobileContributionGraph()}
            </motion.div>
          )}

          {/* ISSUES (PROJECTS) TAB */}
          {activeTab === 'issues' && (
            <motion.div
              key="issues"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono">Projects (Issues feed)</h2>
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 font-mono">3 Open</span>
              </div>

              <div className="space-y-3">
                <MobileProjects />
              </div>
            </motion.div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono">Releases / Experience</h2>
              </div>

              <div className="space-y-4">
                {internships.map((intern) => (
                  <div key={intern.id} className="border border-zinc-900 bg-zinc-900/20 rounded-xl overflow-hidden">
                    <div className="bg-zinc-900/40 border-b border-zinc-900 px-4 py-3 flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{intern.logo}</span>
                        <div>
                          <span className="px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/30 text-[9px] text-violet-400 font-semibold font-mono">v1.0.0</span>
                          <h3 className="font-bold text-white text-xs mt-0.5">{intern.company}</h3>
                        </div>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">{intern.period}</span>
                    </div>

                    <div className="p-4 space-y-3">
                      <h4 className="font-semibold text-zinc-300 text-xs font-mono">{intern.role}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{intern.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {intern.highlights.map((h) => (
                          <span key={h} className="px-2 py-0.5 rounded-full text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono">Skills & Proficiency</h2>
              </div>

              <div className="space-y-3">
                {skills.map((group) => (
                  <div key={group.category} className="border border-zinc-900 bg-zinc-900/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <span>{group.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-200 font-mono">{group.category}</span>
                    </div>
                    <div className="space-y-2.5">
                      {group.items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-[11px] text-zinc-400 mb-0.5">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-1 rounded-full bg-zinc-900 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8 }}
                              className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-zinc-900">
                <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 font-mono">Contact Details</h2>
              </div>

              <div className="border border-zinc-900 bg-zinc-900/20 p-5 rounded-xl text-center space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mx-auto">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">Let's build together</h3>
                <p className="text-xs text-zinc-500 leading-relaxed max-w-xs mx-auto">
                  If you need front-end templates, Laravel libraries, or automated dashboard integrations, drop a message!
                </p>

                <div className="space-y-2 pt-2">
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-violet-600 text-white font-semibold text-xs"
                  >
                    <Mail className="w-4 h-4" />
                    Mail directly
                  </a>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-900 bg-zinc-900 text-xs font-semibold text-zinc-300"
                  >
                    <GithubIcon size={14} />
                    GitHub Profile
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-900 bg-zinc-900 text-xs font-semibold text-zinc-300"
                  >
                    <LinkedinIcon size={14} />
                    LinkedIn Connection
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* ─── Bottom Navigation Bar (GitHub App Style) ─── */}
      <nav className="sticky bottom-0 z-40 bg-zinc-950 border-t border-zinc-900 px-2 py-2 safe-area-pb select-none">
        <div className="flex justify-around items-center">
          
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-lg relative ${activeTab === 'profile' ? 'text-violet-400' : 'text-zinc-600'}`}
          >
            <User className="w-4.5 h-4.5" />
            <span className="text-[9px] font-mono font-medium">Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('issues')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-lg relative ${activeTab === 'issues' ? 'text-violet-400' : 'text-zinc-600'}`}
          >
            <AlertCircle className="w-4.5 h-4.5" />
            <span className="text-[9px] font-mono font-medium">Issues</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-lg relative ${activeTab === 'experience' ? 'text-violet-400' : 'text-zinc-600'}`}
          >
            <GitPullRequest className="w-4.5 h-4.5" />
            <span className="text-[9px] font-mono font-medium">Releases</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-lg relative ${activeTab === 'skills' ? 'text-violet-400' : 'text-zinc-600'}`}
          >
            <Sparkles className="w-4.5 h-4.5" />
            <span className="text-[9px] font-mono font-medium">Skills</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`flex flex-col items-center gap-1 py-1.5 px-3 rounded-lg relative ${activeTab === 'contact' ? 'text-violet-400' : 'text-zinc-600'}`}
          >
            <Mail className="w-4.5 h-4.5" />
            <span className="text-[9px] font-mono font-medium">Contact</span>
          </button>

        </div>
      </nav>

    </div>
  );
}
