// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Detect active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b-2 border-black shadow-[0_4px_0_0_#000]' : 'bg-white/90 border-b-2 border-black'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 group"
        >
          <span className="font-mono font-bold text-lg tracking-tight border-2 border-black px-2 py-0.5 bg-white group-hover:bg-lego-yellow transition-colors duration-150 uppercase">
            <span className="text-lego-red">{personalInfo.shortName.split(' ')[0]}</span>
            {' '}
            <span className="text-black">{personalInfo.shortName.split(' ').slice(1).join(' ')}</span>
          </span>
          <span className="text-[10px] font-mono font-bold border border-black px-1 bg-lego-blue text-white">
            .DEV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-mono font-bold text-sm uppercase px-4 py-2 border-2 transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-lego-yellow border-black shadow-[3px_3px_0px_0px_#000]'
                    : 'bg-transparent border-transparent hover:border-black hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Download CV Button */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.cv}
            download
            className="hidden md:flex nb-btn nb-btn-red px-4 py-2 text-sm no-underline"
          >
            <Download size={16} />
            DOWNLOAD CV
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden nb-btn nb-btn-black p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t-2 border-black px-4 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-mono font-bold text-sm uppercase px-4 py-3 border-2 text-left transition-all duration-150 ${
                    isActive
                      ? 'bg-lego-yellow border-black shadow-[3px_3px_0px_0px_#000]'
                      : 'bg-white border-black'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href={personalInfo.cv}
              download
              className="nb-btn nb-btn-red px-4 py-3 text-sm no-underline justify-center mt-2"
            >
              <Download size={16} />
              DOWNLOAD CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
