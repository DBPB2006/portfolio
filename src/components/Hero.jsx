import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Side: Text Focus */}
                <div className="flex flex-col items-start order-2 md:order-1 text-left opacity-0-init animate-fade-in-up">
                    <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-6 border-b-2 border-[var(--color-primary)] pb-1 inline-block">
                        Prem Bhuvan — Full Stack Developer
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 text-[var(--color-text-bright)] leading-[1.15] opacity-0-init animate-fade-in-up animate-delay-100 tracking-tight">
                        Full Stack Developer <br />
                        <span className="text-[var(--color-primary)] font-light italic opacity-90">& System Builder</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--color-text-main)] max-w-2xl leading-relaxed mb-6 opacity-0-init animate-fade-in-up animate-delay-200 font-medium">
                        I build complete, end-to-end applications. <br />
                        From designing clean user interfaces to architecting robust backend logic and managing efficient data structures.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 opacity-0-init animate-fade-in-up animate-delay-300">
                        <a href="#projects" className="btn-editorial btn-primary">
                            View Projects →
                        </a>
                        <a href="mailto:dbprembhuvan@gmail.com" className="btn-editorial btn-secondary flex items-center gap-2">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-4 opacity-0-init animate-fade-in-up animate-delay-300">
                        <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-text-muted)]">Codebase</span>
                        <div className="w-8 h-px bg-[var(--color-border)]"></div>
                        <a href="https://github.com/DBPB2006" target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[#24292e] transition-colors p-2 hover:bg-[var(--color-border)] rounded-full border border-transparent hover:border-[var(--color-border)]">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Photo Framework & Layout */}
                <div className="relative order-1 md:order-2 w-full flex justify-center lg:justify-end items-center opacity-0-init animate-fade-in-up animate-delay-200">

                    {/* Modern Architectural Shape & Photo Container */}
                    <div className="relative w-full max-w-[420px] h-[450px] md:h-[550px] lg:h-[600px] flex flex-col items-end justify-end mt-8 md:mt-0">

                        {/* Main Wireframe Box - Acts as a frame for the photo */}
                        <div className="absolute inset-0 border-2 border-[var(--color-text-bright)] bg-[var(--color-bg-surface)] shadow-[16px_16px_0px_var(--color-primary)] transform transition-transform hover:-translate-y-2 hover:-translate-x-2 duration-500 overflow-hidden">

                            {/* Graphic Overlay Grid behind the person */}
                            <div className="absolute inset-0 border border-[var(--color-border)] pointer-events-none z-0 opacity-60 bg-[linear-gradient(to_right,#e6e4df_2px,transparent_2px),linear-gradient(to_bottom,#e6e4df_2px,transparent_2px)] bg-[size:48px_48px]"></div>

                            {/* Profile Photo - Transparent PNG generated via rembg */}
                            <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
                                <img
                                    src="/profile.png"
                                    alt="Prem Bhuvan"
                                    className="h-[95%] w-auto object-contain object-bottom drop-shadow-[5px_5px_8px_rgba(0,0,0,0.15)] origin-bottom transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                        </div>

                        {/* Accent Overlays & Architectural Details */}
                        <div className="absolute top-[-18px] right-[-18px] w-18 h-18 bg-[var(--color-secondary)] border-2 border-[var(--color-text-bright)] z-0 transition-transform duration-500 hover:rotate-6 opacity-70"></div>
                        <div className="absolute top-[30%] left-[-16px] w-9 h-9 bg-white border-2 border-[var(--color-text-bright)] z-20 shadow-[4px_4px_0px_var(--color-text-bright)] flex items-center justify-center">
                            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                        </div>

                        {/* Title Badge overlapping the bottom left */}
                        <div className="relative z-30 bg-white p-6 border-y-2 border-r-2 border-[var(--color-text-bright)] max-w-[260px] self-start ml-[-10px] md:ml-[-40px] mb-8 shadow-sm">
                            <h3 className="font-outfit text-[1.4rem] font-black mb-2 tracking-tight uppercase leading-[1.1]">SYSTEM BUILDER</h3>
                            <p className="font-sans text-xs text-[var(--color-text-main)] leading-relaxed font-bold uppercase tracking-wider opacity-80 decoration-2 underline decoration-[var(--color-secondary)] underline-offset-4">Turning logic into real-world products</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
