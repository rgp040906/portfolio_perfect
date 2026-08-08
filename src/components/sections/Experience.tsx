"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase, Terminal } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10 bg-[#050706]">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#39ff6a] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// CHRONOLOGY_&_ROLES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            WORK EXPERIENCE<span className="text-[#39ff6a]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#39ff6a] mt-3"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#39ff6a] before:via-[#39ff6a]/40 before:to-transparent">
          {experience.map((exp, index) => (
            <div key={exp.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Timeline Marker Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#39ff6a] bg-[#050706] text-[#39ff6a] shadow-[0_0_15px_rgba(57,255,106,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-xl border border-white/[0.08] bg-[#080b09]/85 card-hover-lift"
              >
                <div className="mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#39ff6a]/10 text-[#39ff6a] font-mono text-[11px] font-bold border border-[#39ff6a]/30">
                    INTERNSHIP
                  </span>
                  <h3 className="text-xl font-mono font-bold text-white mt-2">{exp.role}</h3>
                  <h4 className="text-sm font-mono text-gray-400">@ {exp.company}</h4>
                </div>
                
                <div className="space-y-4 pt-2 border-t border-white/[0.08]">
                  {exp.timeline.map((step, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-[#39ff6a]/30">
                      <h5 className="font-mono font-bold text-xs text-white uppercase tracking-wider">{step.title}</h5>
                      <p className="text-xs text-gray-400 font-sans mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
