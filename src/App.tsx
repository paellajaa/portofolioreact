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
    <div className="min-h-screen lego-dot-bg">
      <Navbar />
      {/* 1. GSAP ScrollTrigger Pinned & Scrubbed Experience */}
      <section id="home">
        <ScrollExperience />
      </section>

      {/* 2. Main Content */}
      <main className="pb-32 pt-0 relative z-40 lego-dot-bg overflow-x-clip">
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
