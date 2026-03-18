import React from 'react';
import { ExternalLink, Activity } from 'lucide-react';

const ExtraCurriculars = () => {
    return (
        <section id="extracurricular" className="py-16 px-4 relative max-w-5xl mx-auto w-full group">
            <div className="flex flex-col md:flex-row gap-12 items-start border-t-2 border-[var(--color-text-bright)] pt-12">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4 block">Engagement</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-none tracking-tight mb-8">Leadership & <br />Experience</h2>
                </div>

                <div className="md:w-2/3">
                    <div className="relative border-l border-[var(--color-border)] ml-[9px] pl-10 space-y-16 py-4">
                        {/* Activity 1 */}
                        <div className="relative group">
                            <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[var(--color-bg-base)] border-[2px] border-[var(--color-text-bright)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-all"></div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                <h4 className="text-lg font-bold text-[var(--color-text-bright)]">Rural Education & Watershed Management</h4>
                                <span className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Jun 2024</span>
                            </div>
                            <p className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-4">Chaitanya Trust Hindupur</p>
                            <ul className="text-[var(--color-text-main)] text-[14px] font-medium leading-relaxed max-w-2xl space-y-2 list-disc list-inside">
                                <li>Collaborated on field-level problem solving in rural development</li>
                                <li>Gained experience working in resource-constrained environments</li>
                                <li>Strengthened decision-making and teamwork skills</li>
                            </ul>
                        </div>

                        {/* Activity 2 */}
                        <div className="relative group">
                            <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[var(--color-bg-base)] border-[2px] border-[var(--color-text-bright)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-all"></div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                <h4 className="text-lg font-bold text-[var(--color-text-bright)]">"Code-A-Haunt" 24-Hour Hackathon</h4>
                                <span className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Feb 2024</span>
                            </div>
                            <p className="text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-4">Coding Blocks LPU</p>
                            <ul className="text-[var(--color-text-main)] text-[14px] font-medium leading-relaxed max-w-2xl space-y-2 list-disc list-inside mb-6">
                                <li>Built and shipped a working prototype within 24 hours</li>
                                <li>Practiced rapid development and system design under pressure</li>
                            </ul>
                            <a href="https://drive.google.com/file/d/1Mv_7t-mZjK4bYi0nAd8o1qgTttM5oGvK/view?usp=sharing" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[var(--color-text-bright)] hover:text-[var(--color-primary)] transition-colors inline-block mt-4">
                                View Certificate <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraCurriculars;
