import React from 'react';
import { Layers, Database, Cpu, Layout } from 'lucide-react';

const WhatIDo = () => {
    return (
        <div className="w-full relative opacity-0-init animate-fade-in-up animate-delay-200 h-full flex flex-col">
            <div className="flex flex-col items-start mb-6">
                <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-xs mb-4 border-b-2 border-[var(--color-primary)] pb-1 inline-block">Capabilities</span>
                <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-bright)] tracking-tight">What I Do</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow items-stretch">
                {/* Capability 1 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] hover:shadow-[4px_4px_0px_var(--color-text-bright)] transition-all group flex flex-col">
                    <Layers className="w-8 h-8 text-[var(--color-primary)] mb-6 group-hover:-translate-y-1 transition-transform" />
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Build full-stack applications</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Developing end-to-end systems from responsive frontends to scalable, secure backends.
                    </p>
                </div>

                {/* Capability 2 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] hover:shadow-[4px_4px_0px_var(--color-text-bright)] transition-all group flex flex-col">
                    <Database className="w-8 h-8 text-[var(--color-primary)] mb-6 group-hover:-translate-y-1 transition-transform" />
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Design backend systems</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Architecting databases, REST APIs, and event-driven logic that handles complex concurrency and data integrity.
                    </p>
                </div>

                {/* Capability 3 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] hover:shadow-[4px_4px_0px_var(--color-text-bright)] transition-all group flex flex-col">
                    <Cpu className="w-8 h-8 text-[var(--color-primary)] mb-6 group-hover:-translate-y-1 transition-transform" />
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Implement DSA for real problems</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Using optimal data structures and algorithms to dramatically reduce latency and server computations.
                    </p>
                </div>

                {/* Capability 4 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] hover:shadow-[4px_4px_0px_var(--color-text-bright)] transition-all group flex flex-col">
                    <Layout className="w-8 h-8 text-[var(--color-primary)] mb-6 group-hover:-translate-y-1 transition-transform" />
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Create clean, responsive UI</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Translating complex engineering concepts into highly functional and accessible user interfaces.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
