"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Key, Mail, Lock, Database, Terminal, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Shield, Key, Mail, Lock, Database
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#39FF88] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// DEPLOYMENTS & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            PROJECTS & CASE STUDIES<span className="text-[#39FF88]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#39FF88] mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Shield;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.09] bg-[#0d131d]/75 p-7 flex flex-col justify-between card-hover-lift ${
                  project.featured ? "md:col-span-2 lg:col-span-2 bg-[#0d131d]/90 border-[#39FF88]/30" : ""
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#39FF88]/10 border border-[#39FF88]/30 text-[#39FF88] font-mono text-[10px] font-bold tracking-wider">
                    FEATURED_SYSTEM
                  </div>
                )}

                <div>
                  {/* Top Row: Icon & Links */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black/50 rounded-lg border border-white/10 text-[#39FF88] group-hover:scale-110 group-hover:border-[#39FF88]/40 transition-all">
                      <Icon size={26} />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://github.com/rgp040906"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                        title="Repository"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded border border-white/10 text-gray-400 hover:text-[#39FF88] hover:border-[#39FF88]/40 transition-colors"
                        title="Live Demo"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-mono font-bold text-white mb-3 group-hover:text-[#39FF88] transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Impact Highlight Banner */}
                  <div className="mb-6 p-3 rounded bg-black/40 border-l-2 border-[#39FF88] font-mono text-xs text-[#39FF88]">
                    &gt; IMPACT: {project.impact}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.08]">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 bg-black/40 border border-white/[0.08] rounded text-gray-300 group-hover:border-[#39FF88]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
