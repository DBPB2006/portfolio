import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Training from './components/Training';
import Certifications from './components/Certifications';
import ExtraCurriculars from './components/ExtraCurriculars';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProjectView from './components/ProjectView';
import MemoryBookView from './components/MemoryBookView';
import SkillsBox from './components/SkillsBox';

function MainLayout() {
  return (
    <div className="bg-[var(--color-bg-base)] min-h-screen text-[var(--color-text-main)] antialiased relative selection:bg-[var(--color-primary)] selection:text-white">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-32 mix-blend-multiply pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <Navbar />

      <main className="relative z-10 flex flex-col pt-24">
        <div id="hero"><Hero /></div>

        {/* Mind & Toolkit: 40/60 Matrix Layout */}
        <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 w-full flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          <div id="about" className="w-full md:basis-[40%] flex flex-col min-h-[680px]">
            <About />
          </div>
          <div id="skills" className="w-full md:basis-[60%] relative flex justify-center items-center min-h-[680px]">
            <SkillsBox />
          </div>
        </section>

        <div id="projects"><Projects /></div>
        <div id="training"><Training /></div>
        <div id="certifications"><Certifications /></div>
        <div id="extracurricular"><ExtraCurriculars /></div>
        <div id="education"><Education /></div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/project/virtual-exhibition" element={<ProjectView />} />
        <Route path="/project/memory-book" element={<MemoryBookView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
