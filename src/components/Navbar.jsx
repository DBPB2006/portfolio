import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            const navOffset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            window.scrollTo({
                top: elementPosition - navOffset,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-[var(--color-bg-base)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-0-init animate-fade-in-up">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-outfit font-black text-2xl tracking-tighter text-[var(--color-text-bright)] text-left hover:text-[var(--color-primary)] transition-colors">
                    Prem Bhuvan<span className="text-[var(--color-primary)] text-3xl leading-none">.</span>
                </button>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-8 font-bold text-[var(--color-text-main)] text-[10px] uppercase tracking-[0.2em] font-outfit">
                    {['about', 'skills', 'projects', 'training', 'education'].map((id) => (
                        <button key={id} onClick={() => scrollTo(id)} className="hover:text-[var(--color-primary)] transition-colors border-b-2 border-transparent hover:border-[var(--color-primary)] pb-1 capitalize">
                            {id === 'about' ? 'Mind' : id === 'skills' ? 'Toolkit' : id === 'projects' ? 'Builds' : id === 'training' ? 'Credentials' : 'Journey'}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-4">
                        <a href="mailto:dbprembhuvan@gmail.com" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors p-2 hover:bg-[var(--color-border)] rounded-full">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/prem-bhuvan-doddanari-9a87b7291/" target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[#0a66c2] transition-colors p-2 hover:bg-[var(--color-border)] rounded-full">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                    
                    <a
                        href="/cv.pdf"
                        download="Prem_Bhuvan_CV.pdf"
                        className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 rounded-none font-outfit"
                    >
                        <Download className="w-4 h-4" /> CV
                    </a>

                    {/* Hamburger Button */}
                    <button 
                        className="lg:hidden p-2 text-[var(--color-text-bright)] hover:text-[var(--color-primary)] transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAV MENU */}
            <div className={`lg:hidden fixed inset-x-0 top-[72px] bg-[var(--color-bg-base)] border-b border-[var(--color-border)] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
                <nav className="flex flex-col items-center gap-6 px-6 font-outfit font-black text-xl uppercase tracking-tighter text-[var(--color-text-bright)]">
                    <button onClick={() => scrollTo('about')} className="hover:text-[var(--color-primary)] transition-colors w-full text-center py-2 border-b border-[var(--color-border)]/50">Mind</button>
                    <button onClick={() => scrollTo('skills')} className="hover:text-[var(--color-primary)] transition-colors w-full text-center py-2 border-b border-[var(--color-border)]/50">Toolkit</button>
                    <button onClick={() => scrollTo('projects')} className="hover:text-[var(--color-primary)] transition-colors w-full text-center py-2 border-b border-[var(--color-border)]/50">Builds</button>
                    <button onClick={() => scrollTo('training')} className="hover:text-[var(--color-primary)] transition-colors w-full text-center py-2 border-b border-[var(--color-border)]/50">Credentials</button>
                    <button onClick={() => scrollTo('education')} className="hover:text-[var(--color-primary)] transition-colors w-full text-center py-2">Journey</button>
                    
                    <div className="flex items-center gap-8 mt-4 pt-6 border-t border-[var(--color-border)] w-full justify-center">
                         <a href="mailto:dbprembhuvan@gmail.com" className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/prem-bhuvan-doddanari-9a87b7291/" target="_blank" rel="noreferrer" className="text-[var(--color-text-main)] hover:text-[#0a66c2] transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="/cv.pdf" download className="text-[var(--color-primary)]">
                            <Download className="w-6 h-6" />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
