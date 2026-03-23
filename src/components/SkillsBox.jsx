import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript, SiHtml5, SiCss, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPhp, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiLinux, SiPostman, SiXampp,
  SiCplusplus, SiC, SiOpenjdk
} from 'react-icons/si';

export const skillsData = [

  // OUTER ARC — Frameworks / Libraries
  { id: 'react', name: 'React', icon: SiReact, tier: 0, category: 'frontend' },
  { id: 'node', name: 'Node.js', icon: SiNodedotjs, tier: 0, category: 'backend' },
  { id: 'express', name: 'Express.js', icon: SiExpress, tier: 0, category: 'backend' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss, tier: 0, category: 'frontend' },

  // SECOND ARC — Web Technologies
  { id: 'html', name: 'HTML5', icon: SiHtml5, tier: 1, category: 'frontend' },
  { id: 'css', name: 'CSS3', icon: SiCss, tier: 1, category: 'frontend' },
  { id: 'js', name: 'JavaScript', icon: SiJavascript, tier: 1, category: 'frontend' },

  // THIRD ARC — Programming Languages
  { id: 'php', name: 'PHP', icon: SiPhp, tier: 2, category: 'backend' },
  { id: 'cpp', name: 'C++', icon: SiCplusplus, tier: 2, category: 'core' },
  { id: 'java', name: 'Java', icon: SiOpenjdk, tier: 2, category: 'core' },
  { id: 'c', name: 'C', icon: SiC, tier: 2, category: 'core' },

  // FOURTH ARC — Databases
  { id: 'mongo', name: 'MongoDB', icon: SiMongodb, tier: 3, category: 'data' },
  { id: 'pgsql', name: 'PostgreSQL', icon: SiPostgresql, tier: 3, category: 'data' },
  { id: 'mysql', name: 'MySQL', icon: SiMysql, tier: 3, category: 'data' },

  // INNER ARC — Tools
  { id: 'git', name: 'Git', icon: SiGit, tier: 4, category: 'workflow' },
  { id: 'github', name: 'GitHub', icon: SiGithub, tier: 4, category: 'workflow' },
  { id: 'linux', name: 'Linux CLI', icon: SiLinux, tier: 4, category: 'workflow' },
  { id: 'postman', name: 'Postman', icon: SiPostman, tier: 4, category: 'workflow' },
  { id: 'xampp', name: 'XAMPP', icon: SiXampp, tier: 4, category: 'workflow' },

];

export const skillCategories = [
  {
    id: "frontend",
    title: "Interactive Frontend Systems",
    tools: "React, Tailwind, HTML, CSS, JS",
    description: "Building dynamic, accessible, and responsive user interfaces."
  },
  {
    id: "backend",
    title: "Scalable Backend Systems",
    tools: "Node.js, Express, PHP",
    description: "Architecting secure, robust APIs and server-side logic."
  },
  {
    id: "data",
    title: "Data Management & Storage",
    tools: "MySQL, MongoDB, PostgreSQL",
    description: "Designing structured schemas and optimizing query performance."
  },
  {
    id: "core",
    title: "Core Logic & Performance",
    tools: "C, C++, Java",
    description: "Implementing optimized algorithms and complex data structures."
  },
  {
    id: "workflow",
    title: "Development Workflow",
    tools: "Git, GitHub, Linux, Postman",
    description: "Ensuring reliable version control, API testing, and deployment."
  }
];

export default function SkillsBox() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const containerRef = React.useRef(null);
  const [containerWidth, setContainerWidth] = useState(
    typeof window !== 'undefined' ? (window.innerWidth < 640 ? 260 : window.innerWidth < 1024 ? 320 : 380) : 380
  );

  const isDesktop = windowWidth > 1024;
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth <= 1024;

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }

    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
        if (containerRef.current) {
          setContainerWidth(containerRef.current.getBoundingClientRect().width);
        }
      }, 100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Extract the active category globally based on the hovered icon
  const activeCategory = useMemo(() => {
    if (!hoveredIconId) return null;
    const item = skillsData.find(s => s.id === hoveredIconId);
    return item ? item.category : null;
  }, [hoveredIconId]);

  // Deterministic physics for the popcorn effect
  const skillsWithPhysics = useMemo(() => skillsData.map((skill) => {
    const arcX = (Math.random() - 0.5) * 200;
    const arcHeight = -180 - Math.random() * 120;
    const duration = 3.5 + Math.random() * 2; // Slower animation speed
    const delay = Math.random() * 5;
    const rotation = (Math.random() - 0.5) * 60;

    return { ...skill, arcX, arcHeight, duration, delay, rotation };
  }), []);

  // Precompute all skill targets in a concentric arc layout
  const allSkillsWithTargets = useMemo(() => {
    // 1. Density Control: Simplify elements logically per device space
    const visibleCount = isMobile ? 12 : isTablet ? 16 : skillsWithPhysics.length;
    const itemsToDisplay = skillsWithPhysics.slice(0, visibleCount);

    // 2. Container Geometry: Scale radius safely against container dimension constraints
    const radius = isMobile ? containerWidth * 0.7 : containerWidth * 0.6;

    // 3. Spread configuration: Adjust tightly without crowding to prevent horizontal clipping
    const spread = isMobile ? 1.1 : 1.3;
    const centerAngle = Math.PI / 2; // Start neutrally

    return itemsToDisplay.map((skill, i) => {
      const step = itemsToDisplay.length === 1 ? 0.5 : i / (itemsToDisplay.length - 1);
      const angle = centerAngle - spread + (spread * 2) * step;

      // 4. Stable Vertical Position based purely off geometric trigonometric endpoints
      return {
        ...skill,
        targetX: Math.cos(angle) * radius,
        targetY: -Math.sin(angle) * radius,
      };
    });
  }, [skillsWithPhysics, containerWidth, isMobile, isTablet]);

  return (
    <div
      onMouseEnter={() => isDesktop && setIsHovered(true)}
      onMouseLeave={() => isDesktop && setIsHovered(false)}
      onTouchStart={() => !isDesktop && setIsHovered(true)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-start w-full select-none pt-10 lg:pt-20 px-4 mb-20 md:mb-0"
    >
      {/* LEFT COLUMN: Toolkit Arc + Box */}
      <div className="relative w-full flex flex-col items-center justify-center pt-8 pb-12 overflow-visible">
        {/* Editorial Header - Compact */}
        <div className="z-50 text-center mb-16 lg:mb-24 pointer-events-none">
          <h2 className="text-3xl md:text-4xl font-black font-outfit text-[var(--color-text-bright)] mb-2 tracking-tighter uppercase italic opacity-95">
            Toolkit
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-6 bg-[var(--color-text-muted)] opacity-20"></div>
            <p className="text-[var(--color-text-muted)] text-[7px] font-bold tracking-[0.4em] uppercase">
              TECH STACK
            </p>
            <div className="h-px w-6 bg-[var(--color-text-muted)] opacity-20"></div>
          </div>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center pt-32 sm:pt-44 md:pt-56 lg:pt-64 overflow-visible">
          {/* Structural Wrapper: Anchors both the toolbox and the icon arc */}
          <div
            ref={containerRef}
            className="
              relative
              w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px]
              h-[180px] sm:h-[220px] md:h-[240px]
              flex flex-col items-center justify-center
              mb-4 mx-auto
            "
          >

            {/* 3D SOLID PRISM TOOLBOX */}
            <div className="absolute inset-0 z-40 shadow-2xl"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>

              {/* BOX INTERIOR BASE */}
              <div className="absolute inset-x-[2px] top-0 bottom-[2px] bg-[#6b4428] opacity-50 transform translateZ(-74px)"></div>
              <div className="absolute inset-x-0 top-0 bottom-0 bg-black/40 blur-md transform translateZ(-73px)"></div>


              {/* SIDES OF THE PRISM */}
              {/* BACK WALL */}
              <div className="absolute inset-0 bg-[#bd8e5e] border-[1px] border-[var(--color-text-bright)]/20 transform translate-z-[-75px] z-10">
                <div className="absolute top-0 inset-x-0 h-[100px] bg-[#bd8e5e] border-[1px] border-[var(--color-text-bright)]/20 origin-top shadow-sm"
                  style={{ transform: 'rotateX(110deg)' }}></div>
              </div>

              {/* LEFT WALL */}
              <div className="absolute inset-y-0 left-0 w-[150px] bg-[#a67c51] border-[1px] border-[var(--color-text-bright)]/10 origin-left transform rotateY(-90deg) translateZ(0px) z-20">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-0 inset-x-0 h-[100px] bg-[#a67c51] border-[1px] border-[var(--color-text-bright)]/20 origin-top shadow-sm"
                  style={{ transform: 'rotateX(-115deg)' }}></div>
              </div>

              {/* RIGHT WALL */}
              <div className="absolute inset-y-0 right-0 w-[150px] bg-[#a67c51] border-[1px] border-[var(--color-text-bright)]/10 origin-right transform rotateY(90deg) translateZ(0px) z-20">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute top-0 inset-x-0 h-[100px] bg-[#a67c51] border-[1px] border-[var(--color-text-bright)]/20 origin-top shadow-sm"
                  style={{ transform: 'rotateX(-115deg)' }}></div>
              </div>

              {/* FRONT WALL */}
              <div className="absolute inset-0 bg-[#deb887] border-[1px] border-[var(--color-text-bright)] z-50 flex items-center justify-center shadow-2xl overflow-hidden"
                style={{
                  transform: 'translateZ(75px)',
                  backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 6px)'
                }}>
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '100% 3px' }}></div>
                <div className="px-10 py-4 border-[2px] border-[var(--color-text-bright)]/20 rounded-sm bg-[var(--color-bg-base)]/5 z-10 shadow-inner">
                  <span className="text-[var(--color-text-bright)] font-black tracking-[0.5em] text-2xl uppercase italic opacity-80">TOOLKIT</span>
                </div>
                <div className="absolute top-0 inset-x-0 h-[120px] bg-[#d2a679] border-[1px] border-[var(--color-text-bright)] origin-top shadow-md z-50"
                  style={{ transform: 'rotateX(-125deg)' }}></div>
              </div>

              {/* INTENSE GROUND SHADOW */}
              <div className="absolute -bottom-12 left-[-25%] w-[150%] h-10 bg-black/10 blur-3xl rounded-[100%] z-0"></div>
            </div>

            {/* Skill Icons Stage - Origin point perfectly mapping to the visual toolbox lid */}
            <div className="absolute top-[15px] left-1/2 w-0 h-0 z-[60] pointer-events-none">
              {allSkillsWithTargets.map((skill, idx) => {
                const variants = {
                  arc: {
                    x: skill.targetX,
                    y: skill.targetY,
                    rotate: 0,
                    scale: 1, // Uniform scaling for all icons
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 220,
                      damping: 28,
                      mass: 0.8,
                      delay: idx * 0.03
                    }
                  },
                  popcorn: {
                    x: [0, skill.arcX, skill.arcX * 0.8],
                    y: [0, skill.arcHeight, 0],
                    rotate: [0, skill.rotation * 0.2, 0],
                    scale: [0.8, 1.1, 0.9],
                    opacity: [0, 1, 0],
                    transition: {
                      duration: skill.duration,
                      repeat: Infinity,
                      delay: skill.delay,
                      ease: [0.23, 1, 0.32, 1],
                      times: [0, 0.45, 1]
                    }
                  }
                };

                return (
                  <motion.div
                    key={skill.id}
                    className="absolute h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                    style={{ translateX: '-50%', translateY: '-100%', zIndex: hoveredIconId === skill.id ? 100 : 70 }}
                    initial={{ opacity: 0, scale: 0.1, x: 0, y: 0 }}
                    animate={isDesktop ? (isHovered ? "arc" : "popcorn") : "arc"}
                    variants={variants}
                  >
                    <motion.div
                      className="relative w-full h-full flex items-center justify-center bg-[var(--color-bg-surface)] border-[1.5px] border-[var(--color-text-bright)] rounded-full shadow-sm cursor-pointer pointer-events-auto group"
                      onMouseEnter={() => setHoveredIconId(skill.id)}
                      onMouseLeave={() => setHoveredIconId(null)}
                      onTouchStart={() => setHoveredIconId(skill.id)}
                      whileHover={isDesktop ? {
                        backgroundColor: 'var(--color-primary)',
                        scale: 1.1,
                        y: -8,
                        transition: { duration: 0.2 }
                      } : {}}
                    >
                      <motion.div
                        animate={isHovered ? { rotate: 0 } : {}}
                        whileHover={isHovered ? { scale: 1.25, rotate: 6 } : {}}
                        className="text-xl sm:text-2xl text-[var(--color-text-bright)] group-hover:text-white transition-colors duration-200"
                      >
                        <skill.icon />
                      </motion.div>

                      <AnimatePresence>
                        {isHovered && hoveredIconId === skill.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 0 }}
                            animate={{ opacity: 1, scale: 1, y: -48 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            className="absolute pointer-events-none bg-[var(--color-text-bright)] text-[var(--color-bg-base)] text-[8px] font-black px-3 py-1.5 rounded-none uppercase tracking-[0.2em] whitespace-nowrap shadow-xl z-50"
                          >
                            {skill.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Capability-based Tool Categories */}
      <div className="w-full pt-8">
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-text-bright)] mb-24 text-center lg:text-left">
          What I build with these tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            const isDimmed = activeCategory && !isActive;

            return (
              <div
                key={category.id}
                className={`relative p-6 border border-[var(--color-border)] bg-[var(--color-bg-surface)] group flex flex-col justify-between card-glow
                  ${isActive ? 'elevation-active z-10 scale-105' : 'elevation-base hover:elevation-hover'}
                  ${isDimmed ? 'opacity-40' : 'opacity-100'}
                  transition-all duration-300
                `}
              >
                <div className="card-accent-line"></div>
                <div className="space-y-3 mb-4">
                  <span className={`text-[10px] font-black block uppercase tracking-wide transition-all duration-300
                    ${isActive ? 'text-[var(--color-primary)] tracking-widest' : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:tracking-widest'}
                  `}>
                    {category.title}
                  </span>
                  <h4 className={`text-[14px] font-bold transition-colors duration-300
                    ${isActive ? 'text-[var(--color-text-bright)]' : 'text-[var(--color-text-main)] group-hover:text-[var(--color-text-bright)]'}
                  `}>
                    {category.tools}
                  </h4>
                </div>
                <p className={`text-[12px] font-medium leading-relaxed transition-colors duration-300
                  ${isActive ? 'text-[var(--color-text-main)]' : 'text-[var(--color-text-muted)]'}
                `}>
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
