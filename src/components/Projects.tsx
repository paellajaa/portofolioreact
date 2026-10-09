// src/components/Projects.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { projects, type ProjectCategory } from '../data/portfolio';

// GitHub SVG icon (brand icon removed from lucide-react v1+)
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const categories: ProjectCategory[] = ['All', 'Web', 'Video', 'Design'];

const categoryColors: Record<ProjectCategory, string> = {
  All: 'bg-lego-yellow text-black',
  Web: 'bg-lego-blue text-white',
  Video: 'bg-lego-red text-white',
  Design: 'bg-black text-white',
};

const tagColors: Record<string, string> = {
  HTML: 'bg-orange-100 text-orange-800 border-orange-300',
  CSS: 'bg-blue-100 text-blue-800 border-blue-300',
  Bootstrap: 'bg-purple-100 text-purple-800 border-purple-300',
  CapCut: 'bg-gray-100 text-gray-800 border-gray-300',
  'Video Editing': 'bg-red-100 text-red-800 border-red-300',
  Storytelling: 'bg-pink-100 text-pink-800 border-pink-300',
  Canva: 'bg-cyan-100 text-cyan-800 border-cyan-300',
  'Desain Poster': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'Event Design': 'bg-amber-100 text-amber-800 border-amber-300',
};

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-white border-3 border-black shadow-[8px_8px_0px_0px_#000] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{ border: '3px solid #000' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-lego-red border-b-2 border-black px-6 py-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="lego-stud-sm" style={{ background: '#FFD500' }} />
            <div className="lego-stud-sm" style={{ background: '#FFD500' }} />
            <div className="lego-stud-sm" style={{ background: '#FFD500' }} />
          </div>
          <span className="font-mono font-bold text-xs text-white uppercase">PROJECT DETAILS</span>
          <button
            onClick={onClose}
            className="text-white hover:text-lego-yellow transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Project Image */}
        <div className="border-b-2 border-black overflow-hidden" style={{ maxHeight: '280px' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ maxHeight: '280px' }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs font-bold border px-2 py-0.5 ${tagColors[tag] ?? 'bg-gray-100 text-gray-700 border-gray-300'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-mono font-bold text-xl uppercase mb-3">{project.title}</h3>
          <p className="text-sm leading-relaxed text-gray-700 mb-6">{project.longDescription}</p>

          <div className="flex gap-3 flex-wrap">
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-red px-5 py-2.5 text-xs no-underline"
              >
                <ExternalLink size={14} />
                LIVE DEMO
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nb-btn nb-btn-black px-5 py-2.5 text-xs no-underline"
              >
                <GithubIcon size={14} />
                SOURCE CODE
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>('All');
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-[#F5F5F5] py-20 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
          </div>
          <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-lg md:text-xl uppercase">
            FEATURED PROJECTS
          </div>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05, x: 2, y: -2 }}
              whileTap={{ scale: 0.95, x: 2, y: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className={`font-mono font-bold text-xs uppercase px-4 py-2 border-2 border-black transition-colors cursor-pointer ${
                active === cat
                  ? `${categoryColors[cat]} shadow-[3px_3px_0px_0px_#000]`
                  : 'bg-white text-black shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] rounded-none group cursor-pointer relative"
                onClick={() => setSelected(project)}
              >
                {/* Stud row */}
                <div className="flex gap-2 p-4 pb-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                </div>

                {/* Image with grayscale effect */}
                <div className="relative overflow-hidden border-y-2 border-black mx-3 mt-2" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img w-full h-full object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-lego-yellow/0 group-hover:bg-lego-yellow/10 transition-all duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono font-bold text-xs uppercase bg-black text-white px-3 py-1.5 border border-white">
                      VIEW DETAILS →
                    </span>
                  </div>
                  {/* Category badge */}
                  <div className={`absolute top-2 right-2 font-mono text-[10px] font-bold border border-black px-2 py-0.5 uppercase ${categoryColors[project.category]}`}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[10px] font-bold border px-1.5 py-0.5 ${tagColors[tag] ?? 'bg-gray-100 text-gray-700 border-gray-300'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-mono font-bold text-sm uppercase mb-2 group-hover:text-lego-red transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between border-t-2 border-black pt-3">
                    <span className="font-mono text-[10px] font-bold text-gray-500 uppercase">
                      {project.year}
                    </span>
                    <button className="font-mono font-bold text-[10px] uppercase border-2 border-black px-3 py-1.5 bg-white hover:bg-lego-yellow transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-1">
                      DETAILS <ArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
