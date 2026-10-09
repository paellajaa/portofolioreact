// src/components/mobile/MobileProjects.tsx
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
  Play,
} from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { GithubIcon } from '../icons/BrandIcons';

export default function MobileProjects() {
  return (
    <div className="space-y-6">
      {projects.map((proj, idx) => (
        <motion.div
          key={proj.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.08 }}
          className="border border-zinc-800/50 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl overflow-hidden shadow-lg"
        >
          {/* Project Image Preview */}
          <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/40 bg-zinc-950">
            <img
              src={proj.image}
              alt={`${proj.name} screenshot`}
              className="w-full h-full object-cover object-center opacity-90 transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/09090b/3f3f46?text=' + encodeURIComponent(proj.name);
              }}
            />
          </div>

          <div className="p-5 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5">
                {idx % 2 === 0 ? (
                  <AlertCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-bold text-zinc-100 text-sm leading-snug tracking-tight">{proj.name}</h3>
                  <span className="text-[10px] text-zinc-500 font-mono">#{idx + 1} opened by raffaeladitya</span>
                </div>
              </div>
              <span className="text-xl select-none">{proj.emoji}</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-medium">{proj.description}</p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-[9px] bg-zinc-950 border border-zinc-800/50 text-zinc-300 font-mono"
                  style={{ color: proj.accentColor }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-zinc-800/40 text-[10px] text-zinc-500 font-mono">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{idx * 2 + 3} comments</span>
              </div>
              
              {/* Conditional Rendering of Buttons */}
              <div className="flex gap-2">
                {proj.links.video ? (
                  <a
                    href={proj.links.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500/20 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-rose-400" />
                    <span className="text-[9px]">Watch Video</span>
                  </a>
                ) : (
                  <a
                    href={proj.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/50 text-zinc-300 hover:text-white transition-colors"
                  >
                    <GithubIcon size={12} />
                    <span className="text-[9px]">Repo</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
