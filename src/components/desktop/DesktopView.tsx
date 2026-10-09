// src/components/desktop/DesktopView.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Prism from 'prismjs';
// Import the requested VSC Dark Plus theme stylesheet from prism-themes package
import 'prism-themes/themes/prism-vsc-dark-plus.min.css';

import {
  Folder, FolderOpen, FileCode, FileText, Play, PlayCircle,
  Terminal as TerminalIcon, Copy, Check, Settings, Search,
  GitBranch, ChevronRight, ChevronDown, X, Compass, Mail,
  ExternalLink, BookOpen, Calendar, ArrowUpRight, Zap,
  Code2, Star, GitFork, Eye,
} from 'lucide-react';

import { personalInfo, internships, projects, skills, stats } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import SpotifyCard from '../SpotifyCard';
import Lanyard from '../Lanyard';

interface OpenTab {
  id: string;
  name: string;
  type: 'md' | 'code' | 'json' | 'html';
  icon: React.ReactNode;
  folder: string;
}

// ─── 1. Physics-based Motion Tokens per STYLE_GUIDE.md 1.1 ───────────────────
const SPRING_NAV = { type: 'spring' as const, stiffness: 100, damping: 20 };
const SPRING_HOVER = { type: 'spring' as const, stiffness: 150, damping: 20 };

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } }, // Stagger delay fixed at 0.05s
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: SPRING_NAV,
  },
};

const liftHover = {
  y: -6,
  scale: 1.02, // On hover, project cards should scale to 1.02
  transition: SPRING_HOVER,
};

// Slide-and-Blur tab content transition per STYLE_GUIDE.md 1.3/3
const tabContentVariants = {
  hidden: { opacity: 0, x: 10, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: SPRING_NAV,
  },
  exit: {
    opacity: 0,
    x: -10,
    filter: 'blur(5px)',
    transition: SPRING_NAV,
  },
};

// ─── 2.1 Magnetic Icon Wrapper per STYLE_GUIDE.md 2.1 ────────────────────────
function MagneticIcon({
  children,
  className,
  onClick,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const RADIUS = 20;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const clampedDistance = Math.min(distance, RADIUS);
    const angle = Math.atan2(dy, dx);
    setPos({
      x: Math.cos(angle) * clampedDistance,
      y: Math.sin(angle) * clampedDistance,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={SPRING_HOVER}
      className="inline-block"
    >
      <button
        onClick={onClick}
        className={className}
        title={title}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </button>
    </motion.div>
  );
}

// ─── 2.2 Mouse-Reactive Ambient Glow per STYLE_GUIDE.md 2.2 ──────────────────
function AmbientGlow() {
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let frameId: number;
    const handleMove = (e: MouseEvent) => {
      frameId = requestAnimationFrame(() => {
        setGlow({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition-[background] duration-300 ease-out"
      style={{
        background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(63,63,70,0.15), transparent 70%)`,
      }}
    />
  );
}

// Global glass panel class helper
const gc = 'border border-zinc-800/40 backdrop-blur-xl bg-zinc-900/40 hover:border-zinc-700/50 hover:bg-zinc-900/60 transition-colors';

// ============================== Component ===================================
export default function DesktopView() {
  const [folders, setFolders] = useState({
    about: true, projects: true, skills: true, experience: true, contact: true,
  });
  const toggleFolder = (k: keyof typeof folders) =>
    setFolders((p) => ({ ...p, [k]: !p[k] }));

  const filesList = [
    { id: 'readme',     name: 'README.md',           type: 'md',   folder: 'about',      icon: <FileText className="w-4 h-4 text-emerald-400" /> },
    { id: 'bibliox',   name: 'BookController.php',   type: 'code', folder: 'projects',   icon: <FileCode className="w-4 h-4 text-sky-400" />,     projectIndex: 0 },
    { id: 'dicatet',   name: 'NoteEditor.tsx',        type: 'code', folder: 'projects',   icon: <FileCode className="w-4 h-4 text-blue-400" />,    projectIndex: 1 },
    { id: 'vantage',   name: 'TelemetryService.ts',  type: 'code', folder: 'projects',   icon: <FileCode className="w-4 h-4 text-cyan-400" />,    projectIndex: 2 },
    { id: 'wedding',   name: 'RsvpForm.vue',          type: 'code', folder: 'projects',   icon: <FileCode className="w-4 h-4 text-rose-400" />,    projectIndex: 3 },
    { id: 'skills',    name: 'skills.json',           type: 'json', folder: 'skills',     icon: <FileCode className="w-4 h-4 text-orange-400" /> },
    { id: 'experience',name: 'experience.md',         type: 'md',   folder: 'experience', icon: <FileText className="w-4 h-4 text-purple-400" /> },
    { id: 'contact',   name: 'contact.html',          type: 'html', folder: 'contact',    icon: <FileCode className="w-4 h-4 text-rose-400" /> },
  ];

  const [activeActivity, setActiveActivity] = useState<'explorer'|'search'|'github'>('explorer');
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([
    { id: 'readme', name: 'README.md', type: 'md', folder: 'about', icon: <FileText className="w-4 h-4 text-emerald-400" /> },
  ]);
  const [activeTabId, setActiveTabId]     = useState<string>('readme');
  const [terminalOpen, setTerminalOpen]   = useState(true);
  const [terminalLogs, setTerminalLogs]   = useState<string[]>([
    'Initializing portfolio workspace...',
    'Loading profile data for: Raffael Aditya Al Fachry',
    'Vite Dev Server running at http://localhost:5173/',
    'Type "help" or run "npm run dev" to see commands.',
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const [copiedState, setCopiedState]     = useState<Record<string, boolean>>({});
  const [avatarError, setAvatarError]     = useState(false);

  useEffect(() => { Prism.highlightAll(); }, [activeTabId, openTabs]);
  useEffect(() => { terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [terminalLogs]);

  const handleOpenFile = (fileId: string) => {
    const file = filesList.find((f) => f.id === fileId);
    if (!file) return;
    if (!openTabs.some((t) => t.id === fileId))
      setOpenTabs([...openTabs, { id: file.id, name: file.name, type: file.type as any, icon: file.icon, folder: file.folder }]);
    setActiveTabId(fileId);
  };

  const handleCloseTab = (e: React.MouseEvent, fileId: string) => {
    e.stopPropagation();
    const next = openTabs.filter((t) => t.id !== fileId);
    setOpenTabs(next);
    if (activeTabId === fileId && next.length > 0) setActiveTabId(next[next.length - 1].id);
  };

  const handleCopyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedState((p) => ({ ...p, [key]: true }));
    setTimeout(() => setCopiedState((p) => ({ ...p, [key]: false })), 1500);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cmd  = terminalInput.trim().toLowerCase();
    const logs = [...terminalLogs, `$ ${terminalInput}`];
    if (cmd === 'help') {
      logs.push('Available commands:', '  about     - Output background biography',
        '  projects  - List major software engineering projects',
        '  skills    - List tech stack proficiencies',
        '  clear     - Clear the terminal console screen',
        '  exit      - Close the integrated terminal');
    } else if (cmd === 'about') {
      logs.push(`Bio: ${personalInfo.bio}`,
        `Education: ${personalInfo.education.school} - ${personalInfo.education.major} (${personalInfo.education.grade})`);
    } else if (cmd === 'projects') {
      projects.forEach((p) => logs.push(`- ${p.name}: ${p.subtitle} (${p.tech.join(', ')})`));
    } else if (cmd === 'skills') {
      skills.forEach((g) => logs.push(`[${g.category}]: ${g.items.map((s) => `${s.name} (${s.level}%)`).join(', ')}`));
    } else if (cmd === 'clear') { setTerminalLogs([]); setTerminalInput(''); return; }
    else if (cmd === 'exit') { setTerminalOpen(false); }
    else { logs.push(`Command not found: "${terminalInput}". Type "help" for a list of commands.`); }
    setTerminalLogs(logs);
    setTerminalInput('');
  };

  const renderContributionGraph = () => {
    const COLORS = [
      'bg-zinc-900 border-zinc-800/40', 'bg-purple-950/60 border-purple-900/20',
      'bg-purple-900 border-purple-800/40', 'bg-purple-700 border-purple-600/40',
      'bg-purple-500 border-purple-400/40',
    ];
    const grid = Array.from({ length: 48 }, () =>
      Array.from({ length: 7 }, () => {
        const s = Math.random() * 100;
        return s > 90 ? 4 : s > 75 ? 3 : s > 50 ? 2 : s > 25 ? 1 : 0;
      })
    );
    return (
      <div className="border border-zinc-800/40 bg-zinc-900/30 backdrop-blur-sm p-4 rounded-xl mt-6">
        <div className="flex items-center justify-between mb-3 text-xs text-zinc-500 font-mono">
          <span className="flex items-center gap-1.5"><GithubIcon size={14} className="text-zinc-500" /> 342 contributions in the last year</span>
          <span className="text-[10px]">Contributions Settings</span>
        </div>
        <div className="flex gap-[3px] overflow-x-auto pb-1 select-none">
          {grid.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[3px]">
              {col.map((v, ri) => (
                <div key={ri} className={`w-[10px] h-[10px] rounded-[1px] border ${COLORS[v]} hover:ring-1 hover:ring-emerald-400/30 transition-all cursor-default`} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 text-[10px] text-zinc-500 mt-2 font-mono">
          <span>Less</span>
          {['bg-zinc-900','bg-emerald-950','bg-emerald-900','bg-emerald-700','bg-emerald-500'].map((c) => <div key={c} className={`w-2 h-2 ${c}`} />)}
          <span>More</span>
        </div>
      </div>
    );
  };

  const activeFile    = filesList.find((f) => f.id === activeTabId);
  const activeProject = activeFile?.projectIndex !== undefined ? projects[activeFile.projectIndex] : null;

  // activity bar items
  const activityItems = [
    { id: 'explorer' as const, icon: <Compass className="w-5 h-5" />,  label: 'Explorer' },
    { id: 'search'   as const, icon: <Search   className="w-5 h-5" />,  label: 'Search Profile' },
    { id: 'github'   as const, icon: <GithubIcon size={20} />,          label: 'GitHub Activity Feed' },
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-950 font-sans overflow-hidden text-zinc-200 relative">
      
      {/* 2.2 Ambient Glow parallax mouse reactive element */}
      <AmbientGlow />

      {/* Global Grain noise overlay - fixed, z-index 50, opacity 0.03 */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 select-none"
        style={{
          zIndex: 50,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Top Window Bar */}
      <div className="bg-zinc-950 border-b border-zinc-900/80 px-3 py-1.5 flex justify-between items-center text-xs select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors cursor-pointer" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors cursor-pointer" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors cursor-pointer" />
          <span className="ml-2.5 text-zinc-500 font-medium font-mono text-[10px] tracking-wider">RA_WORKSPACE</span>
        </div>
        <div className="text-zinc-500 font-mono text-[11px] bg-zinc-900/80 border border-zinc-800/40 px-8 py-0.5 rounded-md max-w-md truncate tracking-tight">
          Raffael Aditya Al Fachry — IDE Portfolio
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800/40">Vite</span>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">

        {/* Activity Bar — magnetic icons */}
        <div className="w-12 bg-zinc-950 border-r border-zinc-900/80 flex flex-col justify-between items-center py-4 select-none">
          <div className="flex flex-col gap-5 items-center w-full">
            {activityItems.map(({ id, icon, label }) => (
              <MagneticIcon
                key={id}
                onClick={() => setActiveActivity(id)}
                className={`p-2 rounded-xl transition-colors relative ${activeActivity === id ? 'text-violet-400 bg-violet-500/10' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}`}
                title={label}
              >
                {activeActivity === id && (
                  <motion.div
                    layoutId="activityIndicator"
                    className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-violet-500 rounded-full"
                    transition={SPRING_NAV}
                  />
                )}
                {icon}
              </MagneticIcon>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center w-full">
            <MagneticIcon className="relative p-0.5 rounded-full ring-1 ring-zinc-800 hover:ring-violet-500/50 transition-all" title={personalInfo.name}>
              {!avatarError ? (
                <img src={personalInfo.avatar} alt={personalInfo.name}
                  className="w-7 h-7 rounded-full object-cover object-center"
                  onError={() => setAvatarError(true)} />
              ) : (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-[10px] font-black">
                  {personalInfo.initials}
                </div>
              )}
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-purple-500 border border-zinc-950" />
            </MagneticIcon>
            <MagneticIcon className="text-zinc-500 hover:text-zinc-300 p-2 rounded-xl hover:bg-zinc-900/50 transition-all" title="Settings">
              <Settings className="w-5 h-5" />
            </MagneticIcon>
          </div>
        </div>

        {/* Sidebar panels */}
        <AnimatePresence mode="wait">
          {activeActivity === 'explorer' && (
            <motion.div key="explorer"
              initial={{ width: 0, opacity: 0 }} animate={{ width: 240, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
              transition={SPRING_NAV}
              className="bg-zinc-950 border-r border-zinc-900/80 flex flex-col font-mono text-xs select-none overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-zinc-900/80 text-zinc-400 font-bold uppercase tracking-widest text-[10px] flex justify-between items-center">
                <span>Explorer</span>
                <Code2 className="w-3.5 h-3.5 text-zinc-600" />
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                {/* Mini profile card */}
                <div className="mx-3 mb-3 p-3 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/40 flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    {!avatarError ? (
                      <img src={personalInfo.avatar} alt={personalInfo.name}
                        className="w-10 h-10 rounded-xl object-cover object-center ring-1 ring-violet-500/30 border border-zinc-700/40"
                        onError={() => setAvatarError(true)} />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-sm font-black ring-1 ring-violet-500/30">
                        {personalInfo.initials}
                      </div>
                    )}
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-purple-500 border-2 border-zinc-950" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-zinc-100 font-bold text-xs truncate leading-tight tracking-tight">raffaeladitya</p>
                    <p className="text-zinc-500 text-[10px] truncate mt-0.5">Student · Tangerang, ID</p>
                  </div>
                </div>
                <div className="mx-3 mb-2 h-px bg-zinc-900" />

                {/* Folder tree — built from filesList groupings with sliding vertical indicators */}
                {(['about','projects','skills','experience','contact'] as const).map((folderKey) => {
                  const folderFiles = filesList.filter((f) => f.folder === folderKey);
                  return (
                    <div key={folderKey}>
                      <div onClick={() => toggleFolder(folderKey)}
                        className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-zinc-900/60 cursor-pointer text-zinc-400 font-medium mt-1 transition-colors">
                        {folders[folderKey] ? <ChevronDown className="w-3.5 h-3.5 text-zinc-500" /> : <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />}
                        {folders[folderKey] ? <FolderOpen className="w-4 h-4 text-violet-400" /> : <Folder className="w-4 h-4 text-violet-400" />}
                        <span>{folderKey}</span>
                      </div>
                      {folders[folderKey] && (
                        <div className="pl-6">
                          {folderFiles.map((f) => {
                            const isActive = activeTabId === f.id;
                            return (
                              <div key={f.id} onClick={() => handleOpenFile(f.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 hover:bg-zinc-800/50 cursor-pointer transition-colors rounded-sm relative ${isActive ? 'bg-zinc-800/50 text-purple-300 font-semibold pl-[12px]' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                {isActive && (
                                  <motion.div
                                    layoutId="activeFileIndicator"
                                    className="absolute left-0 top-1 bottom-1 w-[2px] bg-purple-500 rounded-full"
                                    transition={SPRING_NAV}
                                  />
                                )}
                                {f.icon}
                                <span>{f.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="p-3 border-t border-zinc-900/80">
                <SpotifyCard />
              </div>
            </motion.div>
          )}

          {activeActivity === 'search' && (
            <motion.div key="search"
              initial={{ width: 0, opacity: 0 }} animate={{ width: 240, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
              transition={SPRING_NAV}
              className="bg-zinc-950 border-r border-zinc-900/80 p-4 font-mono text-xs flex flex-col gap-4 select-none overflow-hidden"
            >
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Search Profile</span>
              <div className="relative">
                <input type="text" readOnly value="Tangerang, Indonesia" placeholder="Search..."
                  className="w-full bg-zinc-900/60 border border-zinc-800/40 rounded-md p-2 text-zinc-300 pr-8 backdrop-blur-sm outline-none" />
                <Search className="w-4 h-4 absolute right-2.5 top-2.5 text-zinc-500" />
              </div>
              <div className="text-zinc-500 text-[10px]">
                <p className="font-bold text-zinc-400 mb-1">Results (1 file found):</p>
                <div onClick={() => handleOpenFile('readme')}
                  className="hover:bg-zinc-900/60 p-1.5 rounded cursor-pointer border border-zinc-800/40 transition-colors">
                  <span className="text-violet-400 font-semibold">README.md</span>
                  <p className="line-clamp-2 mt-1">Location: Tangerang, Indonesia</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeActivity === 'github' && (
            <motion.div key="github"
              initial={{ width: 0, opacity: 0 }} animate={{ width: 240, opacity: 1 }} exit={{ width: 0, opacity: 0 }}
              transition={SPRING_NAV}
              className="bg-zinc-950 border-r border-zinc-900/80 p-4 font-mono text-xs flex flex-col gap-3 select-none overflow-hidden"
            >
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">GitHub Repository</span>
              <div className="flex flex-col gap-2.5">
                {[
                  { name: 'SMK Negeri 4',   desc: 'Grade XII Software Engineering projects dashboard.', badge: 'Public',   bc: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
                  { name: 'GadingPro Intern',desc: 'Creative campaign component and UI library builds.', badge: 'Creative', bc: 'bg-violet-500/10 border-violet-500/30 text-violet-400' },
                ].map((r) => (
                  <div key={r.name} className="border border-zinc-800/40 rounded-lg p-2.5 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-700 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-zinc-300 font-bold">{r.name}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[9px] border font-semibold ${r.bc}`}>{r.badge}</span>
                    </div>
                    <p className="text-zinc-500 text-[10px] leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editor + Terminal */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Tab Bar — spring layoutId underline */}
          <div className="bg-zinc-950 border-b border-zinc-900/80 flex justify-between items-center overflow-x-auto select-none min-h-[35px]">
            <div className="flex items-center">
              {openTabs.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <motion.div key={tab.id} onClick={() => setActiveTabId(tab.id)}
                    whileHover={{ backgroundColor: isActive ? undefined : 'rgba(39,39,42,0.3)' }}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs border-r border-zinc-900/80 cursor-pointer transition-colors relative min-w-[120px] font-mono ${isActive ? 'bg-zinc-900/80 text-zinc-200 font-semibold' : 'text-zinc-500 hover:text-zinc-400'}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBar"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500"
                        transition={SPRING_NAV}
                      />
                    )}
                    {tab.icon}
                    <span className="truncate">{tab.name}</span>
                    <button onClick={(e) => handleCloseTab(e, tab.id)}
                      className="ml-auto p-0.5 rounded-md hover:bg-zinc-800 hover:text-rose-400 transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
            <span className="text-[10px] text-zinc-600 font-mono pr-4">Workspace: Ready</span>
          </div>

          {/* Editor content */}
          <div className="flex-1 overflow-y-auto bg-zinc-950/80 relative">
            
            {openTabs.length === 0 ? (
              <div className="h-full flex flex-col justify-center items-center gap-3 text-zinc-600 font-mono text-xs relative z-10">
                <Compass className="w-12 h-12 text-zinc-800 stroke-[1.5]" />
                <span>No active file open in workspace editor.</span>
                <span className="text-[10px] text-zinc-700">Click a file in the sidebar explorer to open.</span>
              </div>
            ) : (
              <div className="p-10 max-w-4xl mx-auto relative z-10">
                <AnimatePresence mode="wait">

                  {/* README.md */}
                  {activeTabId === 'readme' && (
                    <motion.div key="readme" variants={tabContentVariants} initial="hidden" animate="show" exit="exit"
                      className="font-sans leading-relaxed text-zinc-300">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/40 mb-6">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-zinc-500" />
                          <span className="font-mono text-xs text-zinc-400 font-semibold tracking-tight">README.md</span>
                        </div>
                        <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-zinc-800/40 bg-zinc-900/60 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all backdrop-blur-sm">
                          <GithubIcon size={12} /> GitHub Profile
                        </a>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Column (40% width - spans 5 columns on large screens) */}
                        <div className="lg:col-span-5 w-full flex flex-col items-center justify-start lg:sticky lg:top-4 py-2">
                          <div className="w-full h-[580px] relative overflow-hidden bg-zinc-900/10 border border-zinc-800/40 rounded-2xl shadow-inner select-none flex items-center justify-center">
                            <Lanyard
                              position={[0, 0, 25]}
                              gravity={[0, -45, 0]}
                              frontImage={personalInfo.avatar}
                              transparent={true}
                              fov={20}
                            />
                          </div>
                        </div>

                        {/* Right Column (60% width - spans 7 columns on large screens) */}
                        <div className="lg:col-span-7 space-y-10 text-left">
                          {/* Bio Info */}
                          <div className="space-y-4">
                            <div>
                              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-2 font-sans">{personalInfo.name}</h1>
                              <p className="text-purple-400 font-mono text-sm font-semibold tracking-tight">&gt; {personalInfo.headline}</p>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl font-medium">{personalInfo.bio}</p>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-semibold select-none backdrop-blur-sm">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                              {personalInfo.status}
                            </div>
                          </div>

                          <div className="h-px bg-zinc-800/30" />

                          {/* Stats — glass */}
                          <motion.div className="grid grid-cols-4 gap-4 md:gap-8" variants={containerVariants} initial="hidden" animate="show">
                            {stats.map((stat) => (
                              <motion.div key={stat.label} variants={cardVariants} whileHover={liftHover}
                                className={`${gc} rounded-xl p-5 flex flex-col justify-center hover:shadow-lg hover:shadow-zinc-900/60 group cursor-default`}>
                                <span className="text-2xl font-semibold tracking-tight text-zinc-100 mb-0.5 group-hover:text-purple-300 transition-colors">{stat.value}</span>
                                <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest">{stat.label}</span>
                              </motion.div>
                            ))}
                          </motion.div>

                          <div className="h-px bg-zinc-800/30" />

                          {/* Pinned Projects — glass & inset image shadow */}
                          <div className="space-y-6">
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 font-mono flex items-center gap-2">
                              <Star className="w-4 h-4 text-zinc-500" /> Pinned Repositories
                            </h3>
                            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate="show">
                              {projects.map((proj) => (
                                <motion.div key={proj.id} variants={cardVariants} whileHover={liftHover}
                                  className={`${gc} rounded-xl overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-zinc-900/60`}>
                                  <div>
                                    <div className="aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/30 relative">
                                      <img src={proj.image} alt={`${proj.name} preview`}
                                        className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/09090b/3f3f46?text=' + encodeURIComponent(proj.name); }} />
                                      {/* Embed image shadow */}
                                      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
                                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                                      <span className="absolute bottom-2 left-3 text-xl select-none">{proj.emoji}</span>
                                    </div>
                                    <div className="p-5 space-y-2">
                                      <div className="flex justify-between items-center">
                                        <span className="text-sm font-semibold tracking-tight text-zinc-100 font-mono">{proj.name}</span>
                                        <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-zinc-800/40 text-zinc-400 bg-zinc-950/80 font-mono">Public</span>
                                      </div>
                                      <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 font-medium">{proj.description}</p>
                                    </div>
                                  </div>
                                  <div className="px-5 pb-5 space-y-3">
                                    <div className="flex flex-wrap gap-1.5">
                                      {proj.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-950/80 border border-zinc-800/40 text-zinc-400 font-mono">{t}</span>
                                      ))}
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                                      <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 4</span>
                                        <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> 1</span>
                                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 12</span>
                                      </div>
                                      {proj.links.video ? (
                                        <a href={proj.links.video} target="_blank" rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/50 hover:text-rose-300 transition-all">
                                          <PlayCircle className="w-3 h-3 fill-rose-500/20" />
                                          <span>Watch Video</span>
                                        </a>
                                      ) : (
                                        <a href={proj.links.github} target="_blank" rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-900/80 border border-zinc-800/40 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all">
                                          <GithubIcon size={10} />
                                          <span>Repo</span>
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </div>

                          <div className="h-px bg-zinc-800/30" />
                          {renderContributionGraph()}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Code editor — project files */}
                  {activeFile?.type === 'code' && activeProject && (
                    <motion.div key={activeTabId} variants={tabContentVariants} initial="hidden" animate="show" exit="exit">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/40 mb-4 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">File:</span>
                          <span className="text-violet-300 font-bold tracking-tight">{activeProject.codeSnippet.filename}</span>
                          <span className="text-zinc-700">|</span>
                          <span className="text-zinc-500 uppercase tracking-wider text-[10px]">{activeProject.codeSnippet.language}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {activeProject.links.video ? (
                            <a href={activeProject.links.video} target="_blank" rel="noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-rose-500/30 bg-rose-500/10 text-xs font-semibold text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 transition-all">
                              <PlayCircle className="w-3.5 h-3.5 fill-rose-500/20" /> Watch Video
                            </a>
                          ) : (
                            activeProject.links.github && (
                              <a href={activeProject.links.github} target="_blank" rel="noreferrer"
                                className="p-1.5 rounded-md border border-zinc-800/40 bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all" title="View Repository">
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )
                          )}
                          <button onClick={() => handleCopyCode(activeProject.codeSnippet.code, activeTabId)}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-zinc-800/40 bg-zinc-900/60 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all backdrop-blur-sm">
                            {copiedState[activeTabId]
                              ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
                              : <><Copy className="w-3.5 h-3.5" /><span>Copy Code</span></>}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-6 mb-6">
                        <div className="col-span-3 space-y-4">
                          <div>
                            <h2 className="text-xl font-semibold text-zinc-100 mb-1 tracking-tight">{activeProject.name}</h2>
                            <p className="text-xs text-zinc-500 font-medium font-mono">{activeProject.subtitle}</p>
                          </div>
                          <p className="text-sm text-zinc-400 leading-relaxed">{activeProject.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {activeProject.tech.map((t) => (
                              <span key={t} className="px-2.5 py-0.5 rounded-full text-xs backdrop-blur-xl bg-zinc-900/40 border border-zinc-800/40 text-zinc-300"
                                style={{ color: activeProject.accentColor }}>{t}</span>
                            ))}
                          </div>
                          <div className="pt-2">
                            <a href={activeProject.links.github} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg backdrop-blur-xl bg-zinc-900/40 border border-zinc-800/40 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 font-mono text-xs font-semibold transition-all group">
                              <GithubIcon size={14} /> Repository Link
                              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                            </a>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <motion.div
                            whileHover={{ scale: 1.02, transition: SPRING_HOVER }}
                            className="aspect-video w-full overflow-hidden bg-zinc-950 border border-zinc-800/40 rounded-xl shadow-xl shadow-zinc-900/50 relative"
                          >
                            <img src={activeProject.image} alt={`${activeProject.name} screenshot`}
                              className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-all duration-300"
                              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/09090b/3f3f46?text=' + encodeURIComponent(activeProject.name); }} />
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] rounded-xl" />
                          </motion.div>
                        </div>
                      </div>

                      <div className="relative rounded-lg border border-zinc-800/40 backdrop-blur-xl bg-zinc-950/80 font-mono text-xs overflow-hidden shadow-inner max-h-[380px] overflow-y-auto">
                        <pre className="p-4 leading-relaxed"><code className={`language-${activeProject.codeSnippet.language}`}>{activeProject.codeSnippet.code}</code></pre>
                      </div>
                    </motion.div>
                  )}

                  {/* skills.json dashboard */}
                  {activeTabId === 'skills' && (
                    <motion.div key="skills" variants={tabContentVariants} initial="hidden" animate="show" exit="exit">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/40 mb-6 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-orange-400" />
                          <span className="text-zinc-500">JSON Editor:</span>
                          <span className="text-violet-300 font-bold tracking-tight">skills.json</span>
                        </div>
                        <button onClick={() => handleCopyCode(JSON.stringify(skills, null, 2), 'skills')}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-zinc-800/40 bg-zinc-900/60 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all backdrop-blur-sm">
                          {copiedState['skills']
                            ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
                            : <><Copy className="w-3.5 h-3.5" /><span>Copy JSON</span></>}
                        </button>
                      </div>

                      <motion.div className="grid grid-cols-3 gap-6 mb-8" variants={containerVariants} initial="hidden" animate="show">
                        {skills.map((group) => {
                          const isDesignGroup = group.category === 'Design & Workflows';
                          return (
                            <motion.div
                              key={group.category}
                              variants={cardVariants}
                              whileHover={liftHover}
                              className={isDesignGroup
                                ? `rounded-xl p-5 border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-xl transition-colors hover:border-purple-500/40 flex flex-col justify-between group`
                                : `${gc} p-5 rounded-xl flex flex-col justify-between group`}
                            >
                              <div>
                                <div className="flex items-center gap-2 mb-4">
                                  <span className="text-lg">{group.icon}</span>
                                  <span className="text-xs font-semibold uppercase tracking-widest text-zinc-200">{group.category}</span>
                                </div>
                                <div className="space-y-4">
                                  {group.items.map((skill) => (
                                    <div key={skill.name} className={isDesignGroup ? "rounded-full px-3.5 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex flex-col gap-1.5" : "space-y-1"}>
                                      <div className="flex justify-between text-xs text-zinc-400 mb-0.5 px-1 font-medium">
                                        <span>{skill.name}</span>
                                        <span className={isDesignGroup ? "text-pink-400 font-mono font-bold" : "text-zinc-500 font-mono"}>{skill.level}%</span>
                                      </div>
                                      <div className={isDesignGroup ? "h-1.5 rounded-full bg-zinc-950/60 overflow-hidden" : "h-1 rounded-full bg-zinc-900 overflow-hidden"}>
                                        <motion.div
                                          initial={{ width: 0 }}
                                          whileInView={{ width: `${skill.level}%` }}
                                          viewport={{ once: true, margin: "-50px" }}
                                          transition={SPRING_NAV}
                                          className={isDesignGroup
                                            ? `h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.3)]`
                                            : `h-full rounded-full bg-gradient-to-r ${group.color}`}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>

                      <div className="relative rounded-lg border border-zinc-800/40 backdrop-blur-xl bg-zinc-950/80 font-mono text-xs overflow-hidden max-h-[300px] overflow-y-auto">
                        <pre className="p-4"><code className="language-json">{JSON.stringify(skills, null, 2)}</code></pre>
                      </div>
                    </motion.div>
                  )}

                  {/* experience.md */}
                  {activeTabId === 'experience' && (
                    <motion.div key="experience" variants={tabContentVariants} initial="hidden" animate="show" exit="exit">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/40 mb-6 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-purple-400" />
                          <span className="text-zinc-500">Document:</span>
                          <span className="text-violet-300 font-bold tracking-tight">experience.md</span>
                        </div>
                      </div>
                      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="show">
                        {internships.map((intern) => (
                          <motion.div key={intern.id} variants={cardVariants} className={`${gc} rounded-xl overflow-hidden`}>
                            <div className="border-b border-zinc-800/40 bg-zinc-900/30 px-5 py-3.5 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{intern.logo}</span>
                                <div>
                                  <h3 className="font-semibold text-zinc-100 text-sm tracking-tight">{intern.role}</h3>
                                  <span className="text-xs text-violet-300 font-semibold">{intern.company}</span>
                                </div>
                              </div>
                              <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" /> {intern.period}
                              </span>
                            </div>
                            <div className="p-5 space-y-4">
                              <p className="text-sm text-zinc-400 leading-relaxed">{intern.description}</p>
                              <div>
                                <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest block mb-2">Key Competencies</span>
                                <div className="flex flex-wrap gap-2">
                                  {intern.highlights.map((h) => (
                                    <span key={h} className="px-2 py-0.5 rounded-full text-xs backdrop-blur-xl bg-zinc-900/40 border border-zinc-800/40 text-zinc-300 hover:border-violet-500/30 hover:text-violet-300 transition-colors">{h}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* contact.html */}
                  {activeTabId === 'contact' && (
                    <motion.div key="contact" variants={tabContentVariants} initial="hidden" animate="show" exit="exit">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800/40 mb-6 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <FileCode className="w-3.5 h-3.5 text-rose-400" />
                          <span className="text-zinc-500">HTML View:</span>
                          <span className="text-violet-300 font-bold tracking-tight">contact.html</span>
                        </div>
                      </div>
                      <motion.div variants={cardVariants} initial="hidden" animate="show"
                        className={`${gc} rounded-xl p-8 flex flex-col items-center text-center max-w-lg mx-auto`}>
                        <div className="mb-5 relative">
                          {!avatarError ? (
                            <>
                              <img src={personalInfo.avatar} alt={personalInfo.name}
                                className="w-16 h-16 rounded-2xl object-cover object-center ring-2 ring-violet-500/20 shadow-xl shadow-violet-500/10"
                                onError={() => setAvatarError(true)} />
                              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] rounded-2xl" />
                            </>
                          ) : (
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white text-xl font-black ring-2 ring-violet-500/20">
                              {personalInfo.initials}
                            </div>
                          )}
                          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-100 mb-1 tracking-tight">Connect with Raffael</h3>
                        <p className="text-xs text-zinc-500 max-w-sm mb-6 leading-relaxed">
                          I am currently open to internship positions, local project commissions, and frontend collaborations.
                        </p>
                        <div className="w-full space-y-3">
                          <a href={`mailto:${personalInfo.socials.email}`}
                            className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30">
                            <Mail className="w-4 h-4" /> Send email directly
                          </a>
                          <div className="grid grid-cols-2 gap-3">
                            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer"
                              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-zinc-800/40 backdrop-blur-xl bg-zinc-900/40 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all">
                              <GithubIcon size={14} /> GitHub
                            </a>
                            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer"
                              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-zinc-800/40 backdrop-blur-xl bg-zinc-900/40 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all">
                              <LinkedinIcon size={14} /> LinkedIn
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Terminal */}
          {terminalOpen && (
            <div className="h-56 border-t border-zinc-900/80 bg-zinc-950 flex flex-col font-mono text-xs overflow-hidden">
              <div className="bg-zinc-950/80 border-b border-zinc-900/60 px-4 py-1.5 flex justify-between items-center text-zinc-400 select-none backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <TerminalIcon className="w-4 h-4 text-zinc-500" />
                  <span className="font-semibold text-[10px] uppercase tracking-widest text-zinc-500">Terminal Panel</span>
                  <span className="text-[10px] text-zinc-700 font-mono">bash</span>
                </div>
                <button onClick={() => setTerminalOpen(false)} className="p-0.5 rounded-md hover:bg-zinc-900 transition-colors">
                  <X className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 transition-colors" />
                </button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-zinc-400">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={`whitespace-pre-wrap leading-relaxed ${log.startsWith('$') ? 'text-violet-300' : ''}`}>{log}</div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              <form onSubmit={handleTerminalSubmit} className="border-t border-zinc-900/60 bg-zinc-950/40 px-4 py-2 flex items-center gap-1.5">
                <span className="text-violet-400 font-bold select-none">&gt;</span>
                <input type="text" value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Enter help, about, skills, projects, clear..."
                  className="flex-1 bg-transparent text-zinc-300 outline-none placeholder-zinc-700" />
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-violet-950/10 border-t border-zinc-900/80 px-4 py-1 flex justify-between items-center text-[10px] text-zinc-400 font-mono select-none backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 font-semibold border border-violet-500/20">
            <Play className="w-3 h-3" /> Live
          </div>
          <span className="flex items-center gap-1.5 text-zinc-500"><GitBranch className="w-3 h-3 text-zinc-500" /> main</span>
          <span className="text-zinc-600 flex items-center gap-1"><Zap className="w-3 h-3" /> Vite 5</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
          <span className="text-violet-400 font-semibold">TypeScript JSX</span>
        </div>
      </div>

    </div>
  );
}
