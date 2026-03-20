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
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[6px_6px_0px_var(--color-primary)] transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <Layers className="w-8 h-8 text-[var(--color-primary)] group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">scalable</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Ship Full-Stack Applications</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Crafting professional React, Node.js, and PHP ecosystems with a strong focus on component reusability and scalable state management.
                    </p>
                </div>

                {/* Capability 2 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-secondary)] hover:shadow-[6px_6px_0px_var(--color-secondary)] transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <Database className="w-8 h-8 text-[var(--color-primary)] group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">reliable</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Architect Backend Foundations</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Designing high-performance MySQL/MongoDB schemas and secure RESTful environments for complex data flows.
                    </p>
                </div>

                {/* Capability 3 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-text-bright)] hover:shadow-[6px_6px_0px_var(--color-text-bright)] transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <Cpu className="w-8 h-8 text-[var(--color-primary)] group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">optimal</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">Optimization & DSA Mastery</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Leveraging advanced data structures to solve real-world latency issues—shifting O(n²) to O(log n).
                    </p>
                </div>

                {/* Capability 4 */}
                <div className="p-8 bg-white/50 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[6px_6px_0px_var(--color-primary)] transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <Layout className="w-8 h-8 text-[var(--color-primary)] group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">intentional</span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-bright)] mb-3">High-Intent UI Design</h3>
                    <p className="text-[14px] font-medium text-[var(--color-text-main)] leading-relaxed opacity-90">
                        Creating editorial-grade layouts that provide clarity to complex engineering concepts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
