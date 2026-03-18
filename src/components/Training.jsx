import React from 'react';
import { ExternalLink } from 'lucide-react';

const Training = () => {
    return (
        <section id="training" className="py-16 px-4 relative max-w-5xl mx-auto w-full group">
            <div className="flex flex-col md:flex-row gap-12 items-start border-t-2 border-[var(--color-text-bright)] pt-12">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4 block">Specialization</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-none tracking-tight mb-8">Professional <br />Training</h2>
                </div>

                <div className="md:w-2/3">
                    <div className="bg-white border border-[var(--color-border)] p-8 relative overflow-hidden transition-all hover:border-[var(--color-primary)] shadow-sm">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)] opacity-10 rounded-bl-full translate-x-8 -translate-y-8"></div>

                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 relative z-10">
                            <div>
                                <h4 className="text-xl md:text-2xl font-serif font-bold text-[var(--color-text-bright)] mb-2 italic">Mastering Data Structures and Algorithms</h4>
                                <p className="text-[var(--color-text-main)] font-bold uppercase tracking-widest text-xs">LPU (CPE) | Certificate</p>
                            </div>
                            <span className="text-xs font-black text-[var(--color-primary)] bg-[var(--color-bg-base)] border border-[var(--color-border)] px-3 py-1 self-start whitespace-nowrap">
                                Jun 2025 - Jul 2025
                            </span>
                        </div>

                        <ul className="space-y-3 mb-6 relative z-10 w-full md:w-5/6">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mt-2 shrink-0"></div>
                                <p className="text-[var(--color-text-main)] text-sm font-medium leading-relaxed">
                                    Completed a 6-week intensive DSA program covering arrays, linked lists, trees, graphs, hashing, and complexity analysis.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full mt-2 shrink-0"></div>
                                <p className="text-[var(--color-text-main)] text-sm font-medium leading-relaxed">
                                    Earned Grade ‘A’ through tests and project-based evaluations.
                                </p>
                            </li>
                        </ul>

                        <div className="pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs font-bold uppercase tracking-widest">
                                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                                Course Proficiency Certified
                            </div>
                            <a href="https://drive.google.com/file/d/1kVh7dvl2jVK_ZFOAXmT6QJADKDr6BTpG/view?usp=drive_link" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-text-bright)] transition-colors group/link">
                                Verify <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;
