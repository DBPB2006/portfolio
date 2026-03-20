import React from 'react';
import { ExternalLink, Activity } from 'lucide-react';

const ExtraCurriculars = () => {
    return (
        <section id="extracurricular" className="py-20 px-4 relative max-w-7xl mx-auto w-full border-t border-[var(--color-border)]">
            <div className="mb-16 opacity-0-init animate-fade-in-up">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="text-[var(--color-primary)] font-black tracking-[0.3em] uppercase text-xs mb-4 border-b-2 border-[var(--color-primary)] pb-2 inline-block">Engagement</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-tight tracking-tighter">
                            Experience & <span className="italic font-light text-[var(--color-primary)]">Leadership</span>
                        </h2>
                    </div>
                    <p className="text-sm font-medium text-[var(--color-text-muted)] leading-relaxed max-w-sm md:text-right">
                        Applying technical skills and problem-solving in fast-paced environments and real-world rural initiatives.
                    </p>
                </div>
            </div>

            {/* Stark Editorial Rows instead of Boxes */}
            <div className="flex flex-col border-t-4 border-[var(--color-text-bright)]">
                {[
                    {
                        title: "Rural Education & Watershed Management",
                        org: "Chaitanya Trust Hindupur",
                        dateYear: "2024",
                        dateMonth: "JUN",
                        points: [
                            "Collaborated on field-level problem solving in rural development.",
                            "Gained experience working in resource-constrained environments.",
                            "Strengthened decision-making and teamwork skills."
                        ]
                    },
                    {
                        title: "\"Code-A-Haunt\" 24-Hour Hackathon",
                        org: "Coding Blocks LPU",
                        dateYear: "2024",
                        dateMonth: "FEB",
                        points: [
                            "Built and shipped a working prototype within 24 hours.",
                            "Practiced rapid development and system design under pressure."
                        ],
                        certificate: "https://drive.google.com/file/d/1Mv_7t-mZjK4bYi0nAd8o1qgTttM5oGvK/view?usp=sharing"
                    }
                ].map((act, idx) => (
                    <div 
                        key={idx} 
                        className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 border-b border-[var(--color-border)] group opacity-0-init animate-fade-in-up"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        {/* Left: Giant Date Marker */}
                        <div className="md:w-1/4 shrink-0 flex flex-col items-start">
                            <h3 className="text-5xl md:text-7xl font-black text-[var(--color-border)] group-hover:text-[var(--color-primary)] transition-colors tracking-tighter leading-none mb-4">
                                {act.dateYear}
                            </h3>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-bright)] border border-[var(--color-text-bright)] px-4 py-1.5">
                                {act.dateMonth}
                            </span>
                        </div>

                        {/* Right: Stark Content list */}
                        <div className="md:w-3/4 flex flex-col justify-center">
                            <h4 className="text-2xl md:text-3xl font-black text-[var(--color-text-bright)] uppercase tracking-tight leading-snug mb-2 group-hover:text-[var(--color-text-bright)] transition-colors">
                                {act.title}
                            </h4>
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-8">
                                {act.org}
                            </p>
                            
                            <ul className="space-y-4 mb-6">
                                {act.points.map((p, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-4">
                                        <div className="w-6 h-[2px] bg-[var(--color-text-bright)] mt-2.5 shrink-0 opacity-20 group-hover:opacity-100 group-hover:bg-[var(--color-primary)] transition-all"></div>
                                        <p className="text-[15px] font-medium text-[var(--color-text-main)] leading-relaxed">{p}</p>
                                    </li>
                                ))}
                            </ul>

                            {act.certificate && (
                                <div className="mt-4">
                                    <a href={act.certificate} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-wider text-[var(--color-text-bright)] border-b-2 border-transparent hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors pb-1 group/link">
                                        View Certificate <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExtraCurriculars;
