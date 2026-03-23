import React from 'react';

const Education = () => {
    const educationData = [
        {
            institution: "Lovely Professional University",
            degree: "B.Tech Computer Science Engineering",
            info: "CGPA: 8.45",
            period: "Since August 2023",
            location: "Phagwara, Punjab"
        },
        {
            institution: "Suvarna Bharathi Jr College",
            degree: "Intermediate Education",
            info: "95.6%",
            period: "2021 – 2023",
            location: "Andhra Pradesh"
        },
        {
            institution: "LRG Vidyalayam",
            degree: "Matriculation (10th)",
            info: "98%",
            period: "2020 – 2021",
            location: "Andhra Pradesh"
        }
    ];

    return (
        <section id="education" className="py-20 px-4 relative max-w-7xl mx-auto w-full border-t border-[var(--color-border)] mt-20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                {/* Left: Section Label */}
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[var(--color-primary)] font-black tracking-[0.3em] uppercase text-xs mb-6 border-b-2 border-[var(--color-primary)] pb-2 inline-block">Academic Journey</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-tight tracking-tighter">
                        Foundation of <br />
                        <span className="italic font-light text-[var(--color-primary)]">Engineering</span>
                    </h2>
                    <p className="mt-8 text-sm font-medium text-[var(--color-text-muted)] leading-relaxed max-w-xs">
                        Defining technical strength through rigorous academic excellence and a continuous pursuit of knowledge.
                    </p>
                </div>

                {/* Right: Timeline-style Cards */}
                <div className="md:w-2/3 flex flex-col space-y-12 w-full">
                    {educationData.map((edu, idx) => (
                        <div 
                            key={idx} 
                            className="group relative flex flex-col md:flex-row items-start gap-8 opacity-0-init animate-fade-in-up"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Marker / Year Column */}
                            <div className="hidden md:flex flex-col items-center pt-2">
                                <div className="w-12 h-12 rounded-none border-2 border-[var(--color-text-bright)] flex items-center justify-center font-black text-xs bg-white shadow-[4px_4px_0px_var(--color-text-bright)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                                    {idx + 1}
                                </div>
                                <div className="w-px h-full bg-[var(--color-border)] mt-4 group-last:hidden"></div>
                            </div>

                            {/* Content Card */}
                            <div className="flex-grow bg-white border-2 border-[var(--color-text-bright)] p-8 shadow-[8px_8px_0px_var(--color-border)] hover:shadow-[12px_12px_0px_var(--color-primary)] transition-all transform hover:-translate-y-1">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                    <div className="px-3 py-1 bg-[var(--color-secondary)]/30 border border-[var(--color-text-bright)] text-[10px] font-black uppercase tracking-widest text-[var(--color-text-bright)]">
                                        {edu.period}
                                    </div>
                                    <div className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-widest bg-white border-2 border-[var(--color-primary)] px-3 py-1 shadow-[2px_2px_0px_var(--color-primary)]">
                                        {edu.info}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl md:text-2xl font-black text-[var(--color-text-bright)] mb-2 uppercase tracking-tight">
                                    {edu.institution}
                                </h3>
                                
                                <p className="text-sm md:text-md font-bold text-[var(--color-primary)] mb-4">
                                    {edu.degree}
                                </p>
                                
                                <div className="flex items-center gap-2 pt-4 border-t border-[var(--color-border)]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]"></div>
                                    <span className="text-[10px] uppercase font-black tracking-widest text-[var(--color-text-muted)]">
                                        {edu.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
