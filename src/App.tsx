// src/App.tsx
import './index.css';
import Navbar from './components/Navbar';
import ScrollExperience from './components/ScrollExperience';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen lego-dot-bg">
      <Navbar />
      {/* 1. GSAP ScrollTrigger Pinned & Scrubbed Experience */}
      <section id="home" className="mb-0">
        <ScrollExperience />
      </section>

      {/* 2. Main Content */}
      <main className="flex-1 flex-grow pt-0 pb-0 relative z-40 lego-dot-bg overflow-x-clip mt-0">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
