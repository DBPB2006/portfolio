import React from 'react';
import { ArrowLeft, Github, Layout, Shield, Cpu, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectView = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const screens = [
        {
            title: "Curation Index",
            description: "Memories are tied to places and voices, not just text. Integrated with LocationIQ for precise tagging and live in-browser media recording, users can intuitively drop audio, video, and photos directly onto an interactive personal map.",
            img: "/projects/virtual-exhibit/screen-1.png",
            tag: "Navigation & Entry"
        },
        {
            title: "Immersive Gallery View",
            description: "A dark-mode specialized viewing environment designed for deep focus on high-resolution digital artifacts, with real-time presence indicators.",
            img: "/projects/virtual-exhibit/screen-2.png",
            tag: "Visitor Experience"
        },
        {
            title: "Artifact Deep-Dive",
            description: "Detailed information layer providing historical context, technical metadata, and acquisition options for individual works.",
            img: "/projects/virtual-exhibit/screen-3.png",
            tag: "Information Layer"
        },
        {
            title: "Secure Checkout Flow",
            description: "Integrated Razorpay payment gateway with automated verification and digital certificate issuance.",
            img: "/projects/virtual-exhibit/screen-4.png",
            tag: "Financial Layer"
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)] font-outfit selection:bg-[var(--color-primary)] selection:text-white">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg-base)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-6">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] hover:text-[var(--color-primary)] transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Exit Exhibit
                    </Link>
                    <div className="flex items-center gap-6">
                        <a href="https://github.com/DBPB2006/virtual-exhibition-platform.git" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-primary)] hover:text-[var(--color-text-bright)] transition-colors">
                            View Source <Github className="w-4 h-4" />
                        </a>
                        <span className="h-4 w-px bg-[var(--color-border)]"></span>
                        <a href="https://virtual-exhibition-platform.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-primary)] hover:text-[var(--color-text-bright)] transition-colors">
                            Visit Live Site <ExternalLink className="w-4 h-4" />
                        </a>
                        <span className="h-4 w-px bg-[var(--color-border)]"></span>
                        <h1 className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-primary)]">System Blueprint: Case Study</h1>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <header className="relative pt-40 pb-20 px-6 border-b border-[var(--color-border)] bg-white overflow-hidden">
                {/* Background Watermark Logo - Grand & Rotated */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, x: 150, rotate: -5 }}
                    animate={{ opacity: 0.25, scale: 1, x: 0, rotate: -12 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute -right-48 -top-32 w-[900px] md:w-[1200px] lg:w-[1500px] pointer-events-none z-0"
                >
                    <img 
                        src="/original_logo.jpg" 
                        alt="" 
                        className="w-full h-auto opacity-40 contrast-125 brightness-110" 
                    />
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <span className="text-[var(--color-primary)] font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Deep-Dive Spotlight</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-[var(--color-text-bright)]">Virtual <br /><span className="italic font-light opacity-20">Exhibit</span></h2>
                            <p className="text-xl md:text-2xl text-[var(--color-text-main)] font-medium leading-relaxed max-w-xl italic border-l-4 border-[var(--color-secondary)] pl-8 mb-10">
                                Engineering a high-performance, real-time bridge between digital curation and physical art logistics.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <a href="https://virtual-exhibition-platform.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 px-10 py-4 bg-[var(--color-primary)] text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[var(--color-text-bright)] transition-all shadow-[12px_12px_0px_var(--color-accent)] hover:shadow-none translate-y-[-4px] hover:translate-y-0">
                                    Launch Live Exhibit <ExternalLink className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/DBPB2006" target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 px-10 py-4 border-2 border-[var(--color-text-bright)] text-[var(--color-text-bright)] font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-[12px_12px_0px_var(--color-primary)] hover:shadow-none translate-y-[-4px] hover:translate-y-0">
                                    View Repository <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 pb-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-[var(--color-border)] p-6 bg-[var(--color-bg-base)] hover:border-[var(--color-primary)] transition-colors">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] block mb-1">Architecture</span>
                                    <span className="text-sm font-bold uppercase">MERN Full-Stack</span>
                                </div>
                                <div className="border border-[var(--color-border)] p-6 bg-[var(--color-bg-base)] hover:border-[var(--color-primary)] transition-colors">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] block mb-1">Real-Time</span>
                                    <span className="text-sm font-bold uppercase">Socket.io + Redux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Visual Gallery */}
            <main className="max-w-7xl mx-auto px-6 py-32 space-y-48">
                {screens.map((screen, idx) => (
                    <section key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center animate-fade-in-up`} style={{ animationDelay: `${idx * 150}ms` }}>
                        <div className="lg:w-[65%] w-full relative group">
                            <div className="absolute -inset-4 bg-[var(--color-primary)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative border-2 border-[var(--color-text-bright)] bg-white p-4 shadow-[16px_16px_0px_var(--color-accent)] group-hover:shadow-none transition-all duration-500">
                                <img src={screen.img} alt={screen.title} className="w-full h-auto" />
                                <div className="absolute top-8 right-8 bg-[var(--color-text-bright)] text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest">
                                    {screen.tag}
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[35%] w-full space-y-8">
                            <span className="text-8xl font-black text-[var(--color-text-bright)] opacity-15 font-outfit leading-none mb-4 block group-hover:text-[var(--color-primary)] transition-colors">0{idx + 1}</span>
                            <div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-[var(--color-text-bright)] mb-4">{screen.title}</h3>
                                <div className="h-1 w-16 bg-[var(--color-primary)] mb-8"></div>
                                <p className="text-lg text-[var(--color-text-main)] leading-relaxed font-medium opacity-80 italic">
                                    "{screen.description}"
                                </p>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <span className="px-4 py-2 bg-[var(--color-secondary)] text-[9px] font-black uppercase tracking-widest border border-[var(--color-text-bright)]">System Verified</span>
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            {/* Closing */}
            <footer className="py-40 px-6 border-t border-[var(--color-border)] bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h4 className="text-5xl md:text-6xl font-black tracking-tighter text-[var(--color-text-bright)]">Engineering the future of <br /><span className="text-[var(--color-primary)]">Digital Ownership.</span></h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-lg font-medium max-w-2xl mx-auto italic">
                        This architecture represents a commitment to high-availability, real-time engagement, and secure financial settlements.
                    </p>
                    <div className="pt-10">
                        <Link to="/" className="inline-flex items-center gap-6 px-12 py-5 bg-[var(--color-text-bright)] text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[var(--color-primary)] transition-all shadow-[12px_12px_0px_var(--color-accent)] hover:shadow-none translate-y-[-4px] hover:translate-y-0">
                            Back to Primary Exhibit <ArrowLeft className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProjectView;
