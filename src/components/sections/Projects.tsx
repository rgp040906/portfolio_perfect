"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Key, Mail, Lock, Database, Terminal, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Shield, Key, Mail, Lock, Database
};

// Typewriter Component for Terminal Eyebrow & Impact
const TypewriterText = ({ text, speed = 40, delay = 0, className = "" }: { text: string; speed?: number; delay?: number; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {!isTypingComplete && (
        <span className="inline-block w-2 h-3.5 bg-[#a855f7] ml-1 animate-pulse align-middle" />
      )}
    </span>
  );
};

// Individual Project Card Component
const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const Icon = iconMap[project.icon] || Shield;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative rounded-xl border border-t-white/20 bg-[#0f0b18]/85 p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        project.featured
          ? "md:col-span-2 lg:col-span-2 border-[#a855f7]/60 shadow-[0_0_30px_rgba(168,85,247,0.18)] animate-pulse-slow"
          : "border-white/[0.08] hover:border-[#a855f7]/50 hover:border-t-2 hover:border-t-[#a855f7] hover:shadow-[0_12px_36px_-8px_rgba(168,85,247,0.22)]"
      }`}
    >
      {/* Hover Scanline Sweep Line */}
      <div className="pointer-events-none absolute inset-x-0 h-[2px] bg-[#a855f7] shadow-[0_0_12px_#a855f7] opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-[450px] transition-all duration-700 ease-in-out z-20" />

      {/* Featured System Shimmer Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/40 text-[#c4b5fd] font-mono text-[10px] font-bold tracking-wider overflow-hidden group/badge">
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping" />
            <span>FEATURED_SYSTEM</span>
          </span>
          {/* Metallic Sheen Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
      )}

      <div className="relative z-10">
        {/* Top Header Row: Icon & Links */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3.5 bg-black/50 rounded-xl border border-white/10 text-[#a855f7] group-hover:scale-110 group-hover:bg-[#a855f7]/15 group-hover:border-[#a855f7]/50 transition-all duration-300 shadow-md">
            <Icon size={26} />
          </div>

          <div className="flex items-center gap-3">
            {/* GitHub Button */}
            <motion.a
              href="https://github.com/rgp040906"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-2.5 rounded-lg border border-white/10 bg-black/50 text-gray-400 hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] transition-colors"
              title="Repository"
            >
              <FaGithub size={18} />
            </motion.a>

            {/* Demo Link Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-2.5 rounded-lg border border-white/10 bg-black/50 text-gray-400 hover:bg-[#a855f7] hover:text-white hover:border-[#a855f7] transition-colors"
              title="Live Terminal"
            >
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-3 group-hover:text-[#c4b5fd] transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#9b8fa0] text-sm leading-relaxed mb-6 font-sans">
          {project.description}
        </p>

        {/* IMPACT CRT Flicker Box with Typewriter */}
        <div className="mb-6 p-3.5 rounded-lg bg-black/70 border-l-2 border-[#a855f7] font-mono text-xs text-[#c4b5fd] relative overflow-hidden shadow-inner">
          <div className="flex items-center gap-1.5 mb-1 font-bold text-gray-300">
            <span className="text-[#a855f7]">&gt;</span>
            <span>SYSTEM_IMPACT:</span>
          </div>
          <p className="text-gray-300 font-sans text-xs leading-relaxed">
            <TypewriterText text={project.impact} speed={25} delay={300 + index * 100} />
          </p>
        </div>
      </div>

      {/* Tech Stack Pills (Horizontal Stagger Reveal) */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.08] relative z-10">
        {project.stack.map((tech, techIdx) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + techIdx * 0.04 }}
            className="text-xs font-mono px-2.5 py-1 bg-black/50 border border-white/[0.08] rounded text-gray-300 hover:border-[#a855f7]/50 hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.35)] transition-all cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden bg-[#0a0810]">
      
      {/* Background Floating Ambient Particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#a855f7]/20 animate-ping" />
        <div className="absolute bottom-1/3 right-12 w-3 h-3 rounded-full bg-[#a855f7]/15 animate-pulse" />
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a855f7] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/25 shadow-[0_0_12px_rgba(168,85,247,0.15)]">
              <Terminal size={14} />
              <TypewriterText text="// DEPLOYMENTS & REPOSITORIES" speed={35} />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-white tracking-tight"
            >
              PROJECTS & CASE STUDIES<span className="text-[#a855f7]">.</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-[#a855f7] mt-4 rounded-full shadow-[0_0_12px_#a855f7]"
            />
          </div>

          {/* Heartbeat Status Indicator */}
          <div className="flex items-center gap-2.5 font-mono text-xs text-gray-400 bg-black/50 px-3.5 py-2 rounded-lg border border-white/10 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a855f7]"></span>
            </span>
            <span>SYSTEM_SHOWCASE // ACTIVE</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
