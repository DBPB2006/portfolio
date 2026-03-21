import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import {
  SiJavascript, SiHtml5, SiCss, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiLinux, SiPostman, SiXampp,
  SiCplusplus, SiC, SiOpenjdk
} from 'react-icons/si';

const drawerSkills = [
  // Frontend
  { id: 'react', name: 'React', icon: SiReact, category: 'frontend', description: 'Interactive & state-driven UI', example: 'MemoryBook' },
  { id: 'tailwind', name: 'Tailwind', icon: SiTailwindcss, category: 'frontend', description: 'Utility-first CSS framework', example: 'Portfolio Design' },
  { id: 'js', name: 'JavaScript', icon: SiJavascript, category: 'frontend', description: 'Dynamic client-side logic', example: 'Interactions' },
  { id: 'html', name: 'HTML5', icon: SiHtml5, category: 'frontend', description: 'Semantic content structures', example: 'Web Foundation' },
  { id: 'css', name: 'CSS3', icon: SiCss, category: 'frontend', description: 'Custom animations & themes', example: 'Advanced Styling' },

  // Backend
  { id: 'node', name: 'Node.js', icon: SiNodedotjs, category: 'backend', description: 'Scalable backend runtimes', example: 'API Processing' },
  { id: 'express', name: 'Express', icon: SiExpress, category: 'backend', description: 'Robust REST APIs', example: 'API Routing' },
  { id: 'php', name: 'PHP', icon: SiPhp, category: 'backend', description: 'Server-side rendering', example: 'Web Forms' },

  // Core
  { id: 'cpp', name: 'C++', icon: SiCplusplus, category: 'core', description: 'Performance critical logic', example: 'Core Algorithms' },
  { id: 'java', name: 'Java', icon: SiOpenjdk, category: 'core', description: 'Object-oriented programming', example: 'Secure Backends' },
  { id: 'c', name: 'C', icon: SiC, category: 'core', description: 'Low-level memory management', example: 'System Computing' },

  // Data
  { id: 'mongo', name: 'MongoDB', icon: SiMongodb, category: 'data', description: 'Flexible NoSQL documents', example: 'Unstructured Data' },
  { id: 'pgsql', name: 'PostgreSQL', icon: SiPostgresql, category: 'data', description: 'ACID relational queries', example: 'Secure Database' },
  { id: 'mysql', name: 'MySQL', icon: SiMysql, category: 'data', description: 'Reliable relational models', example: 'Standard DB' },

  // Tools
  { id: 'git', name: 'Git', icon: SiGit, category: 'workflow', description: 'Version control software', example: 'Source tracking' },
  { id: 'github', name: 'GitHub', icon: SiGithub, category: 'workflow', description: 'Cloud repository management', example: 'CI/CD Workflows' },
  { id: 'linux', name: 'Linux', icon: SiLinux, category: 'workflow', description: 'Server administration', example: 'VPS Hosting' },
  { id: 'postman', name: 'Postman', icon: SiPostman, category: 'workflow', description: 'API endpoint validation', example: 'Endpoint Testing' },
  { id: 'xampp', name: 'XAMPP', icon: SiXampp, category: 'workflow', description: 'Local server simulation', example: 'Local dev & DB' }
];

const CATEGORIES = [
  { id: 'frontend', title: 'Frontend' },
  { id: 'backend', title: 'Backend' },
  { id: 'core', title: 'Core Base' },
  { id: 'data', title: 'Data Tier' },
  { id: 'workflow', title: 'Workflow' }
];

export default function ToolDrawer() {
  const [activeToolId, setActiveToolId] = useState(null);

  return (
    <div className="w-full flex flex-col items-center select-none pt-10 pb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black font-outfit text-[var(--color-text-bright)] mb-2 tracking-tighter uppercase italic opacity-95">
          Toolkit Rows
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-6 bg-[var(--color-text-muted)] opacity-20"></div>
          <p className="text-[var(--color-text-muted)] text-[8px] md:text-[10px] font-bold tracking-[0.3em] uppercase">
            Expand to inspect inline
          </p>
          <div className="h-px w-6 bg-[var(--color-text-muted)] opacity-20"></div>
        </div>
      </div>

      {/* Wardrobe Outer Frame Container (Themed) */}
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Flat Minimalist Wardrobe Structure globally mapped to existing editorial theme */}
        <div className="relative w-full p-4 sm:p-6 md:p-10 border-[1.5px] border-[var(--color-border)] rounded-xl bg-[var(--color-bg-base)] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Layer 4: Content */}
          <div className="relative z-10 w-full flex flex-col">
            {CATEGORIES.map((category, index) => {
              const categoryTools = drawerSkills.filter(t => t.category === category.id);
              if (categoryTools.length === 0) return null;

              return (
                <div 
                  key={category.id} 
                  className="relative flex flex-col md:flex-row md:items-end gap-3 md:gap-8 pt-4 pb-6 md:pb-8"
                >
                  {/* Subtle Themed Shelf Divider */}
                  {index !== CATEGORIES.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--color-border)] opacity-60 pointer-events-none z-0"></div>
                  )}

                  {/* Category Label */}
                  <div className="w-full md:w-32 shrink-0 flex items-center md:items-end md:justify-end pb-1 md:pb-2 relative z-10">
                    <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[var(--color-text-muted)] text-left md:text-right">
                      {category.title}
                    </h3>
                  </div>

                  {/* Tools Row */}
                  <div className="w-full overflow-x-auto pb-4 md:pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <LayoutGroup>
                      {/* Flex items-end positions icons like they are sitting on the shelf */}
                      <div className="flex flex-nowrap items-end gap-2 sm:gap-3 w-max md:w-full">
                        {categoryTools.map((tool) => {
                          const isActive = activeToolId === tool.id;
                          const anyActive = activeToolId !== null;

                          return (
                            <motion.div
                              layout
                              key={tool.id}
                              onClick={() => setActiveToolId(isActive ? null : tool.id)}
                              className={`
                                relative cursor-pointer flex items-center overflow-hidden
                                rounded-sm border-[1.5px] transition-shadow duration-300
                                ${isActive 
                                  ? 'bg-[var(--color-bg-surface)] border-[var(--color-primary)] shadow-[0_8px_16px_rgba(0,0,0,0.08),_0_4px_8px_rgba(223,152,112,0.15)] z-30' 
                                  : 'bg-[var(--color-bg-surface)] border-[var(--color-border)] shadow-sm hover:shadow-md z-10'
                                }
                              `}
                              initial={false}
                              animate={{
                                height: 56, // Fixed height limits any accidental vertical expansion
                                width: isActive ? (typeof window !== 'undefined' && window.innerWidth < 640 ? 260 : 320) : 56, // Expand horizontally inline
                                opacity: isActive ? 1 : (anyActive ? 0.6 : 1)
                              }}
                              transition={{
                                layout: { type: 'spring', stiffness: 350, damping: 30 },
                                opacity: { duration: 0.2 }
                              }}
                            >
                              {/* Absolute Width internal box ensures expanding width doesn't cause word wrap jitters */}
                              <div className="flex items-center h-full w-[320px]">
                                
                                {/* Collapsed Knob / Icon Base */}
                                <motion.div 
                                  layout="position"
                                  className={`w-[56px] h-full flex items-center justify-center shrink-0 border-r ${isActive ? 'border-[var(--color-border)] opacity-100' : 'border-[var(--color-border)]/60'} bg-[var(--color-bg-surface)] relative z-20`}
                                >
                                  <div className={`text-2xl transition-colors duration-300 drop-shadow-sm ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-bright)]'}`}>
                                    <tool.icon />
                                  </div>
                                </motion.div>

                                {/* Unmasked expanded Content */}
                                <AnimatePresence>
                                  {isActive && (
                                    <motion.div
                                      className="flex flex-col justify-center px-4 shrink-0"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      transition={{ duration: 0.25, delay: 0.1 }}
                                    >
                                      <div className="flex items-center gap-2 mb-0.5">
                                        <h4 className="text-[13px] sm:text-[14px] font-bold text-[var(--color-text-bright)] truncate">
                                          {tool.name}
                                        </h4>
                                      </div>
                                      <p className="text-[11px] sm:text-xs font-medium text-[var(--color-text-main)] truncate max-w-[180px] sm:max-w-[220px]">
                                        {tool.description}
                                      </p>
                                      {tool.example && (
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                          <div className="w-[3px] h-[3px] rounded-full bg-[var(--color-primary)] shrink-0"></div>
                                          <p className="text-[9px] sm:text-[10px] font-semibold text-[var(--color-text-muted)] italic truncate">
                                            {tool.example}
                                          </p>
                                        </div>
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                                
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </LayoutGroup>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
