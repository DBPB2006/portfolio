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
import WhatIDo from './components/WhatIDo';

function MainLayout() {
  return (
    <div className="bg-[var(--color-bg-base)] min-h-screen text-[var(--color-text-main)] antialiased relative selection:bg-[var(--color-primary)] selection:text-white">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-32 mix-blend-multiply pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <Navbar />

      <main className="relative z-10 flex flex-col pt-24">
        {/* Hero Section */}
        <header id="hero" className="mb-20">
          <Hero />
        </header>

        {/* ROW 1: About & What I Do */}
        <section className="max-w-7xl mx-auto px-4 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Column: About */}
            <div id="about" className="h-full scroll-mt-32">
              <About />
            </div>
            
            {/* Right Column: What I Do */}
            <div id="whatido" className="h-full scroll-mt-32">
              <WhatIDo />
            </div>
          </div>
        </section>

        {/* ROW 2: Toolkit & Tool Categories (Wrapped inside SkillsBox) */}
        <section id="skills" className="max-w-7xl mx-auto px-4 py-12 w-full mb-12 scroll-mt-32">
          <SkillsBox />
        </section>

        {/* Remaining Sections */}
        <div className="flex flex-col space-y-20 py-20">
          <section id="projects" className="scroll-mt-32"><Projects /></section>
          <section id="training" className="scroll-mt-32"><Training /></section>
          <section id="certifications" className="scroll-mt-32"><Certifications /></section>
          <section id="extracurricular" className="scroll-mt-32"><ExtraCurriculars /></section>
          <section id="education" className="scroll-mt-32"><Education /></section>
        </div>
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
