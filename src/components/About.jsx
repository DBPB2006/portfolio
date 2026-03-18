import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
    return (
        <div className="w-full flex flex-col relative opacity-0-init animate-fade-in-up">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                <div>
                    <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4 border-b-2 border-[var(--color-primary)] pb-1 inline-block">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-bright)] tracking-tight mb-8">Full-Stack <br /><span className="italic font-light">System Builder</span></h2>
                    <p className="text-[16px] font-medium text-[var(--color-text-main)] leading-relaxed mb-8 opacity-90 max-w-md">
                        I am an engineer focused on designing and implementing practical, efficient, and robust applications from the database up to the user interface.
                    </p>
                </div>
                <div className="bg-white/50 border-[1.5px] border-[var(--color-text-bright)] p-8 md:p-10 shadow-[8px_8px_0px_var(--color-border)] hover:shadow-[8px_8px_0px_var(--color-primary)] transition-all">
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <ChevronRight className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span className="text-[14px] font-medium text-[var(--color-text-bright)] leading-relaxed">Expertise in <strong>Full-stack development</strong> across modern ecosystems (React, Node.js, PHP).</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <ChevronRight className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span className="text-[14px] font-medium text-[var(--color-text-bright)] leading-relaxed">Deep understanding of <strong>Data Structures & Algorithms</strong> to write high-performance code.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <ChevronRight className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span className="text-[14px] font-medium text-[var(--color-text-bright)] leading-relaxed">Focus on architecting <strong>Scalable systems</strong> that handle complex data interactions securely.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <ChevronRight className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span className="text-[14px] font-medium text-[var(--color-text-bright)] leading-relaxed">Proven ability to deliver complete <strong>Real-world projects</strong> entirely from scratch.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
