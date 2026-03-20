import React from 'react';
import { ExternalLink } from 'lucide-react';

const Training = () => {
    return (
        <section id="training" className="py-20 px-4 relative max-w-7xl mx-auto w-full border-t border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[var(--color-primary)] font-black tracking-[0.3em] uppercase text-xs mb-6 border-b-2 border-[var(--color-primary)] pb-2 inline-block">Specialization</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-tight tracking-tighter">
                        Technical <br />
                        <span className="italic font-light text-[var(--color-primary)]">Intensives</span>
                    </h2>
                </div>

                <div className="md:w-2/3 w-full">
                    <div className="bg-white border-2 border-[var(--color-text-bright)] p-8 relative overflow-hidden transition-all hover:shadow-[12px_12px_0px_var(--color-primary)] shadow-[8px_8px_0px_var(--color-border)] group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)] opacity-10 rounded-bl-full translate-x-8 -translate-y-8"></div>

                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 relative z-10">
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black text-[var(--color-text-bright)] mb-2 uppercase tracking-tight">Mastering DSA</h4>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest bg-[var(--color-primary)] text-white px-2 py-0.5">LPU (CPE)</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">Verified Certificate</span>
                                </div>
                            </div>
                            <span className="text-[10px] font-black text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-3 py-1 self-start whitespace-nowrap shadow-[3px_3px_0px_var(--color-primary)] bg-white">
                                Jun 2025 - Jul 2025
                            </span>
                        </div>

                        <ul className="space-y-4 mb-8 relative z-10 w-full md:w-5/6">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-[var(--color-secondary)] mt-1.5 shrink-0"></div>
                                <p className="text-[15px] font-medium text-[var(--color-text-main)] leading-relaxed">
                                    Completed a 6-week intensive DSA program covering arrays, linked lists, trees, graphs, and complexity analysis.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 bg-[var(--color-secondary)] mt-1.5 shrink-0"></div>
                                <p className="text-[15px] font-medium text-[var(--color-text-main)] leading-relaxed">
                                    Earned Grade ‘A’ through high-complexity technical evaluations and code implementations.
                                </p>
                            </li>
                        </ul>

                        <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                            <div className="flex items-center gap-3 text-[var(--color-text-muted)] text-[10px] font-black uppercase tracking-[0.2em]">
                                <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                                Verified Proficiency
                            </div>
                            <a href="https://drive.google.com/file/d/1kVh7dvl2jVK_ZFOAXmT6QJADKDr6BTpG/view?usp=drive_link" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-text-bright)] transition-colors group/link">
                                Certificate <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;
