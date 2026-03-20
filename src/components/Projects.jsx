import React from 'react';
import { ArrowRight, Shield, Zap, Globe, Database, Cpu, Activity, Layout, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const spotlightProjects = [
    {
        id: "virtual-exhibition",
        tag: "Primary Exhibit",
        title: "Virtual Exhibition Platform",
        subtitle: "A high-performance, real-time virtual gallery bridging digital art and physical exhibition experiences through secure financial infrastructure.",
        timeline: "Oct 2025 - Dec 2025",
        link: "https://virtual-exhibition-platform.vercel.app/",
        github: "https://github.com/DBPB2006/virtual-exhibition-platform.git",
        highlights: [
            "Designed real-time presence tracking using Socket.io",
            "Implemented secure payment system with Razorpay",
            "Built scalable full-stack architecture using React + Node.js",
            "Developed synchronized viewing rooms for live interaction"
        ],
        whyTitle: "Why this architecture?",
        whyContent: "Built a layered architecture separating application, real-time, and financial systems to ensure scalability and maintainability under concurrent usage.",
        layers: [
            { icon: Layout, title: "Application Layer", content: "React 19 + Vite with GSAP for fluid, cinematic navigation." },
            { icon: Globe, title: "Real-Time Layer", content: "Socket.io integration for live presence tracking and group sync." },
            { icon: Zap, title: "Financial Layer", content: "Razorpay-driven checkout system with automated licensing." },
            { icon: Shield, title: "Security & RBAC", content: "Multi-tiered RBAC with Google OAuth 2.0 and reCAPTCHA v3." },
            { icon: Database, title: "Data Layer", content: "MongoDB/Mongoose for flexible exhibition schemas." }
        ],
        stack: {
            frontend: "React 19, Tailwind, Framer Motion, GSAP, Redux",
            backend: "Node.js, Express, MongoDB, Socket.io, Razorpay",
            tooling: "Vite, ESLint, Git"
        },
        outcomes: [
            "Full-stack architecture",
            "Real-time systems",
            "Secure payments",
            "Scalability improvements"
        ],
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)"
    },
    {
        id: "memory-book",
        tag: "⭐ Featured Project",
        title: "Memory Book",
        subtitle: "A full-stack digital scrapbook platform built using custom data structures to manage friendships, memories, and time-based interactions efficiently.",
        timeline: "Jul 2025 - Aug 2025",
        link: "https://github.com/DBPB2006",
        github: "http://github.com/DBPB2006/MemoryBook.git",
        highlights: [
            "Implemented adjacency matrix for friendship graph modeling",
            "Built stack-based system for time capsule unlocking",
            "Designed hash map-based user search with O(1) retrieval",
            "Developed linked list traversal for chronological memory timelines"
        ],
        whyTitle: "Why this approach?",
        whyContent: "Instead of relying on traditional databases, I used structured JSON and custom DSA implementations to simulate real-world data handling and optimize performance.",
        layers: [
            { icon: Layout, title: "Interface Architecture", content: "Tailwind CSS driven responsive design tailored for mobile-first collaboration." },
            { icon: Activity, title: "Algorithmic Core", content: "Custom Linked Lists and Stacks to handle chronological timeline sorting efficiently." },
            { icon: Globe, title: "Geospatial Layer", content: "Leaflet.js integration for absolute \"Memory Mapping\" and discovered location pins." },
            { icon: Shield, title: "Auth & Identity", content: "Stateful session management coupled with bcrypt.js protected JSON tracking." },
            { icon: Database, title: "Storage Engine", content: "High-speed flat-file NoSQL approach utilizing structured JSON data trees." }
        ],
        stack: {
            frontend: "PHP, HTML5, Tailwind, Leaflet.js",
            backend: "Custom DSA Engine, PHP 8, RESTful API",
            tooling: "XAMPP, Git"
        },
        outcomes: [
            "Custom DSA Engine",
            "Real-time graph plotting",
            "Bcrypt Encryption",
            "O(1) retrieval times"
        ],
        primaryColor: "var(--color-secondary)",
        secondaryColor: "var(--color-primary)"
    }
];

const otherProjects = [
    {
        title: "Cope Up – AI-Powered Career Counselling",
        role: "Feb 2025 - Mar 2025",
        subtitle: "Built an AI-powered career counseling platform using PHP, MySQL, and Generative AI to deliver personalized career recommendations.",
        bullets: [
            "Designed multi-layer assessment system",
            "Implemented real-time scoring engine",
            "Integrated role-based authentication for secure access"
        ],
        link: "https://github.com/DBPB2006/Career-Counselling-system",
    }
];

const ProjectCaseStudy = ({ project, isReversed }) => {
    return (
        <div className={`mb-56 opacity-0-init animate-fade-in-up`}>
            {/* TAG & TITLE SECTION */}
            <div className={`flex flex-col mb-12 ${isReversed ? 'lg:items-end' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-[var(--color-primary)] text-white text-[10px] uppercase font-black px-4 py-1 tracking-[0.2em] shadow-[4px_4px_0px_var(--color-text-bright)]">
                        {project.tag}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-[10px] font-bold uppercase tracking-widest">{project.timeline}</span>
                </div>
                <h3 className={`text-5xl md:text-8xl font-black text-[var(--color-text-bright)] mb-4 tracking-tighter leading-[0.8] ${isReversed ? 'lg:text-right' : ''}`}>
                    {project.title}
                </h3>
            </div>

            {/* CORE CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
                {/* LEFT CONTENT: Subtitle + Two Cards */}
                <div className={`lg:col-span-8 flex flex-col gap-10 ${isReversed ? 'lg:order-2' : ''}`}>
                    <p className={`text-xl md:text-2xl font-medium text-[var(--color-text-main)] leading-relaxed italic border-l-4 pl-6 opacity-90 ${isReversed ? 'lg:text-right lg:border-l-0 lg:border-r-4 lg:pl-0 lg:pr-6 border-[var(--color-primary)]' : 'border-[var(--color-secondary)]'}`}>
                        {project.subtitle}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-grow">
                        <div className="p-8 border-[1.5px] border-[var(--color-text-bright)] bg-white shadow-[8px_8px_0px_var(--color-primary)] flex flex-col h-full gap-8 justify-between">
                            <div>
                                <h4 className="font-outfit text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                                    <span>🚀</span>
                                    Engineering Highlights
                                </h4>
                                <ul className="space-y-4">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex gap-3 text-[13px] font-medium leading-relaxed opacity-90 items-start">
                                            <span className="text-[var(--color-primary)] leading-none mt-1">▹</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-[var(--color-border)]">
                                <h5 className="font-outfit text-[11px] font-black uppercase tracking-widest mb-2 opacity-60">
                                    {project.whyTitle}
                                </h5>
                                <p className="text-[13px] font-medium italic opacity-90 leading-relaxed text-[var(--color-text-bright)]">
                                    {project.whyContent}
                                </p>
                            </div>
                        </div>

                        <div className="p-8 border-[1.5px] border-[var(--color-text-bright)] bg-white shadow-[8px_8px_0px_var(--color-secondary)] flex flex-col h-full">
                            <h4 className="font-outfit text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                                <Activity className="w-5 h-5 text-[var(--color-secondary)]" />
                                Core Outcomes
                            </h4>
                            <ul className="space-y-6 flex-grow">
                                {project.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-bright)] shrink-0"></div>
                                        <span className="text-[12px] font-black uppercase tracking-widest leading-loose">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT: Architecture Layers Sidebar */}
                <div className={`lg:col-span-4 h-full flex flex-col ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="p-10 border-2 border-[var(--color-text-bright)] bg-[#f8f6f0] shadow-[12px_12px_0px_var(--color-accent)] h-full flex flex-col">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-[var(--color-text-bright)] border-b border-[var(--color-text-bright)] pb-4">
                            Architecture Layers
                        </h4>
                        <div className="space-y-8 flex-grow">
                            {project.layers.map((layer, idx) => (
                                <div key={idx} className="group/layer">
                                    <div className="flex items-center gap-3 mb-2">
                                        <layer.icon className="w-4 h-4 text-[var(--color-text-bright)]" />
                                        <h5 className="font-outfit text-[11px] font-black uppercase tracking-widest group-hover/layer:text-[var(--color-primary)] transition-colors">
                                            {layer.title}
                                        </h5>
                                    </div>
                                    <p className="text-[10px] font-medium opacity-60 leading-relaxed ml-7">{layer.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* TECH STACK & LINKS - High Contrast */}
            <div className="border-t-2 border-b-2 border-[var(--color-text-bright)] py-10 mb-12 bg-[var(--color-bg-base)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-4">
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] mb-2 block">Frontend</span>
                            <p className="text-[11px] font-bold uppercase">{project.stack.frontend}</p>
                        </div>
                        <div className="md:border-l md:border-[var(--color-border)] md:pl-8">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] mb-2 block">Backend</span>
                            <p className="text-[11px] font-bold uppercase">{project.stack.backend}</p>
                        </div>
                        <div className="md:border-l md:border-[var(--color-border)] md:pl-8">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)] mb-2 block">Tooling</span>
                            <p className="text-[11px] font-bold uppercase">{project.stack.tooling}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-3 flex lg:justify-end gap-6">
                        <a href={project.link} target="_blank" rel="noreferrer" className="p-3 border-2 border-[var(--color-text-bright)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-text-bright)] transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-3 border-2 border-[var(--color-text-bright)] bg-white hover:bg-[var(--color-secondary)] transition-colors">
                            <Github className="w-5 h-5 text-[var(--color-text-bright)]" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={`flex ${isReversed ? 'lg:justify-end' : ''}`}>
                <Link to={`/project/${project.id}`} className="inline-flex items-center gap-4 text-[var(--color-text-bright)] font-black uppercase text-xs tracking-[0.2em] hover:text-[var(--color-primary)] transition-colors group">
                    View Comprehensive Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-8 px-6 relative max-w-6xl mx-auto w-full">
            {/* Header */}
            <div className="mb-20 opacity-0-init animate-fade-in-up border-b-4 border-[var(--color-text-bright)] pb-12">
                <span className="text-[var(--color-primary)] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Strategic Engineering Synthesis</span>
                <h2 className="text-6xl md:text-[10rem] font-black text-[var(--color-text-bright)] tracking-tighter leading-[0.75]">
                    Built <br />
                    <span className="italic font-light opacity-60">Realities.</span>
                </h2>
            </div>

            {/* SPOTLIGHT PROJECTS */}
            <div className="space-y-32">
                {spotlightProjects.map((project, idx) => (
                    <ProjectCaseStudy key={idx} project={project} isReversed={idx % 2 !== 0} />
                ))}
            </div>

            {/* ARCHIVE SECTION */}
            <div className="pt-32 border-t-4 border-[var(--color-text-bright)] mb-20 opacity-0-init animate-fade-in-up">
                <div className="flex items-end justify-between gap-10">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] mb-2 block">Archive 01</span>
                        <h2 className="text-4xl md:text-6xl font-black text-[var(--color-text-bright)] uppercase tracking-tighter">Iterative Works</h2>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30 pb-2">Selected Experiments</span>
                </div>
            </div>

            <div className="space-y-0">
                {otherProjects.map((proj, idx) => (
                    <div
                        key={idx}
                        className="group border-b-2 border-[var(--color-text-bright)] py-20 flex flex-col lg:flex-row gap-12 transition-all hover:bg-[#f8f6f0] px-4 -mx-4 opacity-0-init animate-fade-in-up"
                    >
                        <div className="lg:w-1/3">
                            <h3 className="text-3xl font-black text-[var(--color-text-bright)] font-outfit uppercase tracking-tighter mb-4">
                                {proj.title}
                            </h3>
                            <span className="inline-block text-[9px] font-black text-white bg-[var(--color-text-bright)] px-3 py-1 uppercase tracking-widest">
                                {proj.role}
                            </span>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            {proj.subtitle && (
                                <p className="text-[15px] font-medium leading-relaxed text-[var(--color-text-main)] italic border-l-4 border-[var(--color-primary)] pl-6 mb-8 py-2">
                                    {proj.subtitle}
                                </p>
                            )}
                            <ul className="space-y-4 ml-6">
                                {proj.bullets.map((bullet, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--color-text-bright)] shrink-0"></div>
                                        <span className="text-[14px] font-medium leading-relaxed text-[var(--color-text-main)]">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <a href={proj.link} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-black uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors mt-8">
                                Examine Repository <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
