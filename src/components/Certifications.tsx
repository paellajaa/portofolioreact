// src/components/Certifications.tsx
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-lego-dots py-20 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          {/* Lego Studs */}
          <div className="flex gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
            <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
          </div>
          {/* Section Yellow Badge */}
          <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-lg md:text-xl uppercase">
            LICENSES & CERTIFICATIONS
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 rounded-none relative group flex flex-col justify-between cursor-default"
            >
              {/* Stud Row */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  </div>
                  <span className="font-mono text-[10px] font-bold border-2 border-black bg-[#FFD500] px-2.5 py-0.5 uppercase shadow-[2px_2px_0px_0px_#000]">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Image */}
                <div className="relative border-4 border-black overflow-hidden mb-4 aspect-[4/3] bg-gray-100 shadow-[2px_2px_0px_0px_#000]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black text-white font-mono text-[9px] font-bold px-2 py-0.5 border border-white">
                    VERIFIED
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[#af101a] font-mono text-xs font-bold uppercase mb-1">
                  <Award size={14} />
                  <span>{cert.issuer}</span>
                </div>

                <h3 className="font-mono font-bold text-base uppercase mb-2 text-black group-hover:text-[#af101a] transition-colors">
                  {cert.title}
                </h3>

                <p className="font-mono text-[10px] text-gray-500 mb-4 font-bold">
                  ID: {cert.credentialId}
                </p>
              </div>

              <div className="border-t-2 border-black pt-3 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] font-bold border border-black bg-gray-100 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="font-mono font-bold text-[10px] border-2 border-black bg-white hover:bg-[#FFD500] px-2.5 py-1 shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] flex items-center gap-1 uppercase transition-all cursor-pointer">
                  DETAILS <ExternalLink size={10} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
