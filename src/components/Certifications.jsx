import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 px-4 relative max-w-7xl mx-auto w-full border-t border-[var(--color-border)]">
            <div className="flex flex-col items-center text-center mb-16 opacity-0-init animate-fade-in-up">
                <span className="text-[var(--color-primary)] font-black tracking-[0.3em] uppercase text-xs mb-4 border-b-2 border-[var(--color-primary)] pb-2 inline-block">Qualifications</span>
                <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] leading-tight tracking-tighter">
                    Verified <span className="italic font-light text-[var(--color-primary)]">Certificates</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Cloud Computing", org: "NPTEL", date: "Apr 2025", link: "https://ibb.co/jmSMh03" },
                    { title: "Programming with JavaScript", org: "Coursera", date: "Aug 2024", link: "https://coursera.org/share/90ae1efac2b0dc88d41902df89587bd9" },
                    { title: "Legacy Responsive Web Design V8", org: "Free Code Camp", date: "Oct 2023", link: "https://freecodecamp.org/certification/bhuvan2006/responsive-web-design" }
                ].map((cert, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white border-2 border-[var(--color-text-bright)] p-8 shadow-[8px_8px_0px_var(--color-border)] hover:shadow-[12px_12px_0px_var(--color-primary)] transition-all flex flex-col justify-between group transform hover:-translate-y-2 relative opacity-0-init animate-fade-in-up"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        {/* Decorative Pin */}
                        <div className="absolute top-5 right-5 w-3 h-3 bg-[var(--color-primary)] border-2 border-[var(--color-text-bright)] rounded-full"></div>
                        
                        <div className="mb-12 pt-4">
                            <h4 className="text-2xl font-black text-[var(--color-text-bright)] uppercase tracking-tight mb-6 leading-snug">{cert.title}</h4>
                            <div className="w-10 h-1.5 bg-[var(--color-secondary)] mb-6"></div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1">Issued By</p>
                            <p className="text-sm font-black uppercase tracking-widest text-[var(--color-primary)]">{cert.org}</p>
                        </div>

                        <div className="border-t-2 border-[var(--color-text-bright)]/10 pt-6 flex items-center justify-between">
                            <span className="text-[10px] font-black text-[var(--color-text-bright)] uppercase tracking-widest bg-[var(--color-border)] px-3 py-1.5">
                                {cert.date}
                            </span>
                            <a href={cert.link} className="inline-flex items-center justify-center w-12 h-12 border-2 border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-white hover:text-[var(--color-primary)] transition-all shadow-[4px_4px_0px_var(--color-primary)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
