import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-4 relative max-w-6xl mx-auto w-full group">
            <div className="flex flex-col md:flex-row gap-12 items-start border-t-2 border-[var(--color-text-bright)] pt-12">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4 block">Qualifications</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-none tracking-tight mb-8">Verified <br />Certificates</h2>
                </div>

                <div className="md:w-2/3 space-y-4">
                    {/* Certificate 1 */}
                    <div className="bg-white shadow-sm border border-[var(--color-text-bright)]/20 p-6 hover:border-[var(--color-primary)] transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                        <div>
                            <h4 className="text-lg font-bold text-[var(--color-text-bright)]">Cloud Computing</h4>
                            <p className="text-[var(--color-text-main)] text-xs font-bold uppercase tracking-widest mt-1">NPTEL</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-xs font-bold text-[var(--color-text-muted)] whitespace-nowrap">Jun 2025</span>
                            <a href="https://ibb.co/jmSMh03" className="inline-flex items-center gap-2 text-xs border border-[var(--color-primary)] px-4 py-2 font-black uppercase tracking-wider text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                View <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Certificate 2 */}
                    <div className="bg-white shadow-sm border border-[var(--color-text-bright)]/20 p-6 hover:border-[var(--color-primary)] transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                        <div>
                            <h4 className="text-lg font-bold text-[var(--color-text-bright)]">Programming with JavaScript</h4>
                            <p className="text-[var(--color-text-main)] text-xs font-bold uppercase tracking-widest mt-1">Coursera</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-xs font-bold text-[var(--color-text-muted)] whitespace-nowrap">Aug 2024</span>
                            <a href="https://coursera.org/share/90ae1efac2b0dc88d41902df89587bd9" className="inline-flex items-center gap-2 text-xs border border-[var(--color-primary)] px-4 py-2 font-black uppercase tracking-wider text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                View <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Certificate 3 */}
                    <div className="bg-white shadow-sm border border-[var(--color-text-bright)]/20 p-6 hover:border-[var(--color-primary)] transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                        <div>
                            <h4 className="text-lg font-bold text-[var(--color-text-bright)]">Legacy Responsive Web Design V8</h4>
                            <p className="text-[var(--color-text-main)] text-xs font-bold uppercase tracking-widest mt-1">Free Code Camp</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-xs font-bold text-[var(--color-text-muted)] whitespace-nowrap">Oct 2023</span>
                            <a href="https://freecodecamp.org/certification/bhuvan2006/responsive-web-design" className="inline-flex items-center gap-2 text-xs border border-[var(--color-primary)] px-4 py-2 font-black uppercase tracking-wider text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                View <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
