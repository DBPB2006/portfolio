import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-bg-base)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center opacity-0-init animate-fade-in-up">
                <button onClick={() => window.scrollTo(0, 0)} className="font-outfit font-black text-2xl tracking-tighter text-[var(--color-text-bright)] text-left hover:text-[var(--color-primary)] transition-colors">
                    prem<span className="text-[var(--color-primary)] text-3xl leading-none">.</span>
                </button>

                <nav className="hidden lg:flex items-center gap-6 font-medium text-[var(--color-text-main)] text-[10px] uppercase tracking-[0.2em] font-outfit">
                    <button onClick={() => scrollTo('about')} className="hover:text-[var(--color-primary)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1">Mind</button>
                    <button onClick={() => scrollTo('skills')} className="hover:text-[var(--color-primary)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1">Toolkit</button>
                    <button onClick={() => scrollTo('projects')} className="hover:text-[var(--color-primary)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1">Builds</button>
                    <button onClick={() => scrollTo('training')} className="hover:text-[var(--color-primary)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1">Credentials</button>
                    <button onClick={() => scrollTo('education')} className="hover:text-[var(--color-primary)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1">Journey</button>
                </nav>

                <div className="flex items-center gap-5">
                    <a href="mailto:dbprembhuvan@gmail.com" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors p-2 hover:bg-[var(--color-border)] rounded-full">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/prem-bhuvan-doddanari-9a87b7291/" target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[#0a66c2] transition-colors p-2 hover:bg-[var(--color-border)] rounded-full">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="/cv.pdf"
                        download="Prem_Bhuvan_CV.pdf"
                        className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 rounded-none font-outfit"
                    >
                        <Download className="w-3.5 h-3.5" /> CV
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
