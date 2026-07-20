"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, Key, Mail, Lock, Database } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Shield, Key, Mail, Lock, Database
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="font-mono text-cyan-400 text-2xl md:text-4xl mr-4">{"// 03_"}</span>
              PROJECTS
            </h2>
            <div className="w-20 h-1 bg-gradient-accent"></div>
          </div>
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
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden glass rounded-xl border border-card-border p-8 h-full flex flex-col interactive ${
                  project.featured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-cyan-900/10" : ""
                }`}
              >
                {/* Hover Scan Reveal Effect */}
                <div className="absolute inset-0 bg-cyan-400/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out border-t-2 border-cyan-400 z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-background/50 rounded-lg border border-card-border text-cyan-400">
                      <Icon size={28} />
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="text-foreground/50 hover:text-cyan-400 transition-colors">
                        <FaGithub size={22} />
                      </a>
                      <a href="#" className="text-foreground/50 hover:text-violet-400 transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  
                  <p className="text-foreground/70 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Impact reveal on hover */}
                  <div className="overflow-hidden mb-6 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-mono text-cyan-300 border-l-2 border-cyan-400 pl-3 py-1 bg-cyan-950/30">
                      &gt; {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs font-mono px-2 py-1 bg-background/80 border border-card-border rounded text-foreground/60 group-hover:border-cyan-400/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
