import React from 'react';

const About = () => {
    return (
        <div className="opacity-0-init animate-fade-in-up flex flex-col justify-center h-full">
            <h2 className="text-5xl md:text-7xl font-black text-[var(--color-text-bright)] mb-6 tracking-tighter leading-[0.9]">
                Systematic <br />
                <span className="italic font-light text-[var(--color-primary)]">Engineering</span>
            </h2>

            <div className="w-20 h-1 bg-[var(--color-primary)] mb-8"></div>

            <p className="text-[var(--color-text-main)] text-lg md:text-xl leading-relaxed font-medium opacity-90 mb-10 max-w-xl">
                Specializing in high-performance architectures and algorithmic problem solving.
                My approach balances technical rigor with adaptability, ensuring robust and
                secure user experiences.
            </p>

            <div className="flex gap-8 opacity-60">
                <div className="flex flex-col items-start border-l-2 border-[var(--color-border)] pl-4">
                    <span className="text-3xl font-black text-[var(--color-text-bright)]">05+</span>
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold mt-1">Languages</span>
                </div>
                <div className="flex flex-col items-start border-l-2 border-[var(--color-border)] pl-4">
                    <span className="text-3xl font-black text-[var(--color-text-bright)]">03+</span>
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold mt-1">Databases</span>
                </div>
                <div className="flex flex-col items-start border-l-2 border-[var(--color-border)] pl-4">
                    <span className="text-3xl font-black text-[var(--color-text-bright)]">10+</span>
                    <span className="text-[8px] uppercase tracking-[0.3em] font-bold mt-1">Tools</span>
                </div>
            </div>
        </div>
    );
};

export default About;
