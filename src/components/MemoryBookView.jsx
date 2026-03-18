import React from 'react';
import { ArrowLeft, Github, Database, Layers, Layout, Map, Archive } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const MemoryBookView = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const screens = [
        {
            title: "Custom Algorithmic Backend",
            description: "Built to ensure lightning-fast retrieval of your most cherished moments. By engineering a custom backend utilizing PHP Linked Lists and a Network Matrix rather than a standard database, the application securely and instantly maps complex real-world friendships.",
            tag: "DSA Architecture",
            icon: Layers,
            color: "var(--color-primary)",
            image: "/projects/memory-book/mb-backend.png"
        },
        {
            title: "Interactive Network Visualizations",
            description: "Designed to bring your social circle to life. A custom graph algorithm tracks connections between friends, surfacing shared activities and top memories within an elegant, glassmorphic dashboard so you never lose touch with what matters.",
            tag: "Social Graph",
            icon: Database,
            color: "var(--color-secondary)",
            image: "/projects/memory-book/mb-network.png"
        },
        {
            title: "Rich Media & Geospatial Pinning",
            description: "Memories are tied to places and voices, not just text. Integrated with LocationIQ for precise tagging and live in-browser media recording, users can intuitively drop audio, video, and photos directly onto an interactive personal map.",
            tag: "Mapping & Media",
            icon: Map,
            color: "var(--color-text-bright)",
            image: "/projects/memory-book/mb-map.png"
        },
        {
            title: "Time-Locked Memory Capsules",
            description: "Simulating natural human recollection, the system uses a Last-In-First-Out (LIFO) stack to surface recent memories first. This same logic powers 'Memory Capsules', securely locking shared moments to create a highly anticipated unboxing experience in the future.",
            tag: "Capsule Logic",
            icon: Archive,
            color: "var(--color-border)",
            image: "/projects/memory-book/mb-capsule.png"
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-text-main)] font-outfit selection:bg-[var(--color-secondary)] selection:text-white">
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg-base)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-6">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/#projects" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] hover:text-[var(--color-secondary)] transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Exit Exhibit
                    </Link>
                    <div className="flex items-center gap-6">
                        <a href="https://github.com/DBPB2006/MemoryBook.git" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-secondary)] hover:text-[var(--color-text-bright)] transition-colors">
                            View Source <Github className="w-4 h-4" />
                        </a>
                        <span className="h-4 w-px bg-[var(--color-border)]"></span>
                        <h1 className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-secondary)]">System Blueprint: Case Study</h1>
                    </div>
                </div>
            </nav>

            {/* Hero Header */}
            <header className="relative pt-40 pb-20 px-6 border-b border-[var(--color-border)] bg-[#fcfbf9] overflow-hidden">
                {/* Massive Background Logo Overlay */}
                <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none mix-blend-multiply flex items-center justify-center overflow-hidden">
                    <img
                        src={logo}
                        alt="Background Logo Plating"
                        className="w-[100%] md:w-[100%] h-auto object-cover sm:object-contain transform translate-x-10 -translate-y-8 lg:translate-x-32 lg:-translate-y-12"
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <div className="bg-white/40 backdrop-blur-sm p-8 -ml-8 rounded-2xl border border-white/50 shadow-sm">
                            <span className="text-[var(--color-secondary)] font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Deep-Dive Spotlight</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-[var(--color-text-bright)] drop-shadow-sm">Memory <br /><span className="italic font-light opacity-30">Book</span></h2>
                            <p className="text-xl md:text-2xl text-[var(--color-text-main)] font-medium leading-relaxed max-w-xl italic border-l-4 border-[var(--color-primary)] pl-8 mb-10 drop-shadow-sm">
                                Engineering a Data Structures and Algorithms driven web application for collaborative digital scrapbooking and geospatial memory pinning.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <a href="https://github.com/DBPB2006" target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 px-10 py-4 bg-[var(--color-secondary)] text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[var(--color-text-bright)] transition-all shadow-[12px_12px_0px_var(--color-primary)] hover:shadow-none translate-y-[-4px] hover:translate-y-0 backdrop-blur-md">
                                    View Repository <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pb-4">
                            <div className="border border-[var(--color-border)] p-6 bg-white/80 backdrop-blur-md hover:border-[var(--color-secondary)] transition-colors shadow-sm">
                                <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-secondary)] block mb-1">Architecture</span>
                                <span className="text-sm font-bold uppercase">PHP / JSON NoSQL</span>
                            </div>
                            <div className="border border-[var(--color-border)] p-6 bg-white/80 backdrop-blur-md hover:border-[var(--color-secondary)] transition-colors shadow-sm">
                                <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-secondary)] block mb-1">Core Logic</span>
                                <span className="text-sm font-bold uppercase">Custom DSA Engine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Visual Gallery */}
            <main className="max-w-7xl mx-auto px-6 py-32 space-y-48">
                {screens.map((screen, idx) => (
                    <section key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center animate-fade-in-up`} style={{ animationDelay: `${idx * 150}ms` }}>

                        {/* IMAGE / PLACEHOLDER BLOCK FOR SCREENSHOTS */}
                        <div className="lg:w-[65%] w-full relative group">
                            <div className="absolute -inset-4 opacity-0 group-hover:opacity-10 transition-opacity blur-3xl" style={{ backgroundColor: screen.color }}></div>

                            <div className="relative border-2 border-[var(--color-text-bright)] bg-white h-full flex flex-col items-center justify-center transition-all duration-500 overflow-hidden" style={{ boxShadow: `16px 16px 0px ${screen.color}` }}>

                                {screen.image ? (
                                    <>
                                        <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-[var(--color-text-bright)] text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest z-20 shadow-xl">
                                            {screen.tag}
                                        </div>
                                        <div className="w-full h-full relative z-10 bg-[var(--color-bg-base)]">
                                            <img src={screen.image} alt={screen.tag} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-12 min-h-[400px] w-full flex flex-col items-center justify-center">
                                        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,1)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]"></div>

                                        <screen.icon className="w-24 h-24 mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110" style={{ color: screen.color }} />

                                        <p className="text-xs font-black uppercase tracking-widest text-[var(--color-text-muted)] text-center relative z-10">
                                            [ Image Placeholder ]<br />
                                            <span className="font-medium opacity-60 mt-2 block">{screen.tag} Screenshot</span>
                                        </p>

                                        <div className="absolute top-8 right-8 bg-[var(--color-text-bright)] text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest z-10">
                                            {screen.tag}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:w-[35%] w-full space-y-8">
                            <span className="text-8xl font-black text-[var(--color-text-bright)] opacity-15 font-outfit leading-none mb-4 block group-hover:text-[var(--color-secondary)] transition-colors">0{idx + 1}</span>
                            <div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-[var(--color-text-bright)] mb-4">{screen.title}</h3>
                                <div className="h-1 w-16 mb-8" style={{ backgroundColor: screen.color }}></div>
                                <p className="text-lg text-[var(--color-text-main)] leading-relaxed font-medium opacity-80 italic">
                                    "{screen.description}"
                                </p>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <span className="px-4 py-2 text-white text-[9px] font-black uppercase tracking-widest border border-[var(--color-text-bright)]" style={{ backgroundColor: screen.color }}>Architecture Verified</span>
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            {/* Closing */}
            <footer className="py-40 px-6 border-t border-[var(--color-border)] bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h4 className="text-5xl md:text-6xl font-black tracking-tighter text-[var(--color-text-bright)]">Preserving memories through <br /><span className="text-[var(--color-secondary)]">Algorithmic Design.</span></h4>
                    <p className="text-[var(--color-text-main)] opacity-60 text-lg font-medium max-w-2xl mx-auto italic">
                        This architecture represents an experiment in taking theoretical computer science concepts and applying them to a consumer-facing social product.
                    </p>
                    <div className="pt-10">
                        <Link to="/#projects" className="inline-flex items-center gap-6 px-12 py-5 bg-[var(--color-text-bright)] text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[var(--color-secondary)] transition-all shadow-[12px_12px_0px_var(--color-accent)] hover:shadow-none translate-y-[-4px] hover:translate-y-0">
                            Back to Primary Exhibit <ArrowLeft className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MemoryBookView;
