import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-16 px-4 relative max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center mb-10 opacity-0-init animate-fade-in-up">
                <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4 border-b-2 border-[var(--color-primary)] pb-1 inline-block">Education</span>
                <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] mb-2 tracking-tight text-center">Academic <span className="italic font-light">History</span></h2>
            </div>

            <div className="flex flex-col space-y-6 w-full opacity-0-init animate-fade-in-up animate-delay-100">
                {/* LPU */}
                <div className="p-6 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] transition-all bg-white/50 group">
                    <h3 className="text-xl font-bold text-[var(--color-text-bright)] mb-2 uppercase tracking-tight group-hover:text-[var(--color-primary)] transition-colors">Lovely Professional University</h3>
                    <p className="text-[var(--color-text-main)] text-sm font-semibold tracking-wide">B.Tech CSE <span className="text-gray-300 mx-2">|</span> CGPA: 8.45 <span className="text-gray-300 mx-2">|</span> 2023–Present</p>
                </div>

                {/* SBJC */}
                <div className="p-6 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] transition-all bg-white/50 group">
                    <h3 className="text-xl font-bold text-[var(--color-text-bright)] mb-2 uppercase tracking-tight group-hover:text-[var(--color-primary)] transition-colors">Suvarna Bharathi Jr College</h3>
                    <p className="text-[var(--color-text-main)] text-sm font-semibold tracking-wide">Intermediate <span className="text-gray-300 mx-2">|</span> 95.6%</p>
                </div>

                {/* LRG */}
                <div className="p-6 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] transition-all bg-white/50 group">
                    <h3 className="text-xl font-bold text-[var(--color-text-bright)] mb-2 uppercase tracking-tight group-hover:text-[var(--color-primary)] transition-colors">LRG Vidyalayam</h3>
                    <p className="text-[var(--color-text-main)] text-sm font-semibold tracking-wide">Matriculation <span className="text-gray-300 mx-2">|</span> 98%</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
