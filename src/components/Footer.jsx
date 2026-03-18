import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 mt-20 relative z-10 bg-[var(--color-bg-surface)] border-t border-[var(--color-border)]">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

                <div className="w-full max-w-2xl mx-auto mb-20 opacity-0-init animate-fade-in-up">
                    <h3 className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-8 flex items-center justify-center gap-3">
                        <span className="text-lg">🚀</span> What I Bring
                    </h3>
                    <ul className="text-[var(--color-text-main)] text-[15px] font-medium leading-relaxed space-y-4 mx-auto max-w-lg">
                        <li className="flex gap-4 items-start border-l-2 border-[var(--color-border)] pl-4 hover:border-[var(--color-primary)] transition-colors">
                            <span>Strong foundation in Data Structures & Algorithms</span>
                        </li>
                        <li className="flex gap-4 items-start border-l-2 border-[var(--color-border)] pl-4 hover:border-[var(--color-primary)] transition-colors">
                            <span>Experience building full-stack systems from scratch</span>
                        </li>
                        <li className="flex gap-4 items-start border-l-2 border-[var(--color-border)] pl-4 hover:border-[var(--color-primary)] transition-colors">
                            <span>Focus on scalable and efficient architectures</span>
                        </li>
                    </ul>
                </div>

                <div className="w-24 h-[1px] bg-[var(--color-border)] mx-auto mb-16 opacity-0-init animate-fade-in-up"></div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-bright)] mb-6 text-center tracking-tight opacity-0-init animate-fade-in-up">Let's Build Scalable <br /><span className="italic font-light">Systems Together.</span></h2>
                <p className="text-[var(--color-text-main)] font-medium text-center mb-12 opacity-0-init animate-fade-in-up animate-delay-100 uppercase tracking-widest text-xs">Open to internships and full-stack engineering roles.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-10 opacity-0-init animate-fade-in-up animate-delay-100">
                    <a href="mailto:dbprembhuvan@gmail.com" className="group flex items-center gap-4 text-[var(--color-text-main)] hover:text-[var(--color-primary)] font-bold text-lg transition-colors">
                        <span className="p-3 border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-primary)] transition-colors">
                            <Mail className="w-5 h-5" />
                        </span>
                        dbprembhuvan@gmail.com
                    </a>
                    <a href="tel:+9188472262327" className="group flex items-center gap-4 text-[var(--color-text-main)] hover:text-[var(--color-secondary)] font-bold text-lg transition-colors">
                        <span className="p-3 border border-[var(--color-border)] rounded-full group-hover:border-[var(--color-secondary)] transition-colors">
                            <Phone className="w-5 h-5" />
                        </span>
                        +91 88472 262327
                    </a>
                </div>

                <div className="flex items-center justify-center gap-6 mb-16 opacity-0-init animate-fade-in-up animate-delay-200">
                    <a href="https://github.com/DBPB2006" target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[#24292e] transition-colors p-3 border border-[var(--color-border)] rounded-full hover:border-[#24292e]">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/prem-bhuvan-doddanari-9a87b7291/" target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[#0a66c2] transition-colors p-3 border border-[var(--color-border)] rounded-full hover:border-[#0a66c2]">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

                <div className="h-px w-full max-w-4xl bg-[var(--color-border)] mb-12 opacity-0-init animate-fade-in-up animate-delay-200"></div>

                <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)] opacity-0-init animate-fade-in-up animate-delay-300">
                    <p>© {new Date().getFullYear()} D B Prem Bhuvan.</p>
                    <p>Designed with Intent.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
