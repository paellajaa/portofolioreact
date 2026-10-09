import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <section id="contact" className="bg-blue-600 py-20 border-t-4 border-black">
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
            {/* Yellow Header Badge */}
            <div className="bg-[#FFD500] border-4 border-black px-4 py-1 font-bold inline-block shadow-[4px_4px_0px_0px_#000] font-mono text-lg md:text-xl uppercase text-black">
              CONTACT ME
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* LEFT — Info & Socials */}
            <div>
              <h2 className="font-mono font-bold text-3xl md:text-4xl uppercase mb-1.5 text-white">
                LET'S BUILD
              </h2>
              <h2 className="font-mono font-bold text-3xl md:text-4xl uppercase text-white mb-6">
                SOMETHING GREAT.
              </h2>
              <p className="text-slate-100 mb-8 leading-relaxed font-sans text-base">
                Mau kolaborasi, diskusi project, atau sekadar ngobrol seputar web development & UI/UX design?
                Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk ide dan peluang baru!
              </p>

              {/* Contact Info Cards with Scroll Entrance & Lego Lift Hover */}
              <div className="flex flex-col gap-4 mb-8">
                {[
                  { Icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { Icon: Phone, label: 'WhatsApp', value: personalInfo.phone, href: `https://wa.me/6285885938827` },
                  { Icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
                ].map(({ Icon, label, value, href }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
                    className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-4 rounded-none relative flex items-center gap-4 cursor-default"
                  >
                    <div className="w-11 h-11 bg-[#FFD500] border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                      <Icon size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="font-mono font-bold text-[10px] uppercase text-gray-500">{label}</p>
                      {href ? (
                        <a href={href} className="font-mono text-sm font-bold text-black hover:text-[#af101a] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-mono text-sm font-bold text-black">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Buttons with Spring Bounce */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 2, y: -2 }}
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-mono text-xs font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] uppercase hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <InstagramIcon size={16} />
                  <span>@SIPAELL</span>
                </motion.a>
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 2, y: -2 }}
                  whileTap={{ scale: 0.95, x: 2, y: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-xs font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] uppercase hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <GithubIcon size={16} />
                  <span>GITHUB</span>
                </motion.a>
              </div>
            </div>

            {/* RIGHT — Form Card with Scroll Entrance & Lego Lift Hover */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -6, x: -2, boxShadow: '8px 8px 0px 0px #000' }}
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 sm:p-8 rounded-none relative"
              >
                {/* Lego Studs on Card Top */}
                <div className="flex gap-2 mb-6">
                  <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                  <div className="w-4 h-4 rounded-full bg-[#FFD500] border-2 border-black shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.4)]" />
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center text-center py-10 gap-4">
                    <div className="w-16 h-16 bg-[#FFD500] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000]">
                      <CheckCircle size={32} className="text-black" />
                    </div>
                    <h3 className="font-mono font-bold text-xl uppercase">PESAN TERKIRIM!</h3>
                    <p className="text-gray-700 text-sm">
                      Terima kasih! Pesan kamu sudah diterima dan akan dibalas secepatnya. 🧱
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 2, y: -2 }}
                      whileTap={{ scale: 0.95, x: 4, y: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', message: '' });
                      }}
                      className="mt-2 px-6 py-2.5 bg-black text-white font-mono text-xs font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] uppercase hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      KIRIM LAGI
                    </motion.button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="font-mono font-bold text-xs uppercase mb-1.5 block text-black">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Contoh: Budi Santoso"
                        className="w-full border-4 border-black p-3 font-mono text-sm outline-none bg-white focus:bg-yellow-50 focus:border-[#0055a4] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono font-bold text-xs uppercase mb-1.5 block text-black">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="nama@email.com"
                        className="w-full border-4 border-black p-3 font-mono text-sm outline-none bg-white focus:bg-yellow-50 focus:border-[#0055a4] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-mono font-bold text-xs uppercase mb-1.5 block text-black">
                        Pesan *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Hai Raffael, saya ingin mendiskusikan project..."
                        className="w-full border-4 border-black p-3 font-mono text-sm outline-none bg-white focus:bg-yellow-50 focus:border-[#0055a4] transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.03, x: 2, y: -2 }}
                      whileTap={{ scale: 0.95, x: 4, y: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#af101a] text-white font-mono text-sm font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000] uppercase transition-colors cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>MENGIRIM...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>KIRIM PESAN</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#af101a] border-t-4 border-black py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Stud row */}
          <div className="flex gap-2.5 mb-6 justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border-2 border-black bg-red-700 shadow-[0_2px_0_rgba(0,0,0,0.5)]"
              />
            ))}
          </div>

          <div className="text-center mb-6">
            <h2 className="font-mono font-bold text-2xl md:text-4xl text-white uppercase mb-2">
              READY TO BUILD?
            </h2>
            <p className="text-white/80 font-mono text-xs md:text-sm">
              Let's create something amazing together. 🧱
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t-2 border-black/30 pt-6 text-white font-mono text-xs">
            <span className="font-bold uppercase tracking-wider">
              RAFFAEL ADITYA AL FACHRY
            </span>
            <p className="text-white/80 uppercase">
              SMKN 4 TANGERANG // REKAYASA PERANGKAT LUNAK
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
