"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { securityLab } from "@/data/portfolio";
import { Terminal, ChevronDown, Activity, ShieldAlert, Wrench, CheckCircle } from "lucide-react";

export default function SecurityLab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="security-lab" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#39FF88] uppercase tracking-widest mb-2">
            <Activity size={14} />
            <span>// VULNERABILITY_ASSESSMENT_LABS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            SECURITY LAB<span className="text-[#39FF88]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#39FF88] mt-3 mb-4"></div>
          <p className="text-gray-400 max-w-2xl font-sans text-base">
            Hands-on vulnerability scanning, network enumeration, and web exploitation scenarios conducted in isolated sandbox environments.
          </p>
        </motion.div>

        <div className="max-w-4xl space-y-4">
          {securityLab.map((lab, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-white/[0.09] bg-[#0d131d]/80 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between bg-black/30 hover:bg-black/50 transition-colors text-left font-mono"
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <Terminal className={isOpen ? "text-[#39FF88]" : "text-gray-500"} size={20} />
                    <span className="text-base md:text-lg font-bold text-white tracking-wide">
                      {lab.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#39FF88]" : "text-gray-500"
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/[0.08] bg-black/40"
                    >
                      <div className="p-6 md:p-8 font-mono text-sm space-y-6">
                        
                        {/* Grid for Objective & Environment */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                            <h4 className="text-[#39FF88] font-bold mb-2 flex items-center gap-2">
                              <span>&gt; OBJECTIVE</span>
                            </h4>
                            <p className="text-gray-300 font-sans text-sm leading-relaxed">{lab.objective}</p>
                          </div>

                          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                            <h4 className="text-[#39FF88] font-bold mb-2 flex items-center gap-2">
                              <span>&gt; ENVIRONMENT</span>
                            </h4>
                            <p className="text-gray-300 font-sans text-sm leading-relaxed">{lab.environment}</p>
                          </div>
                        </div>

                        {/* Tools Used */}
                        <div>
                          <h4 className="text-gray-400 font-bold mb-2 text-xs uppercase tracking-wider">&gt; TOOLS_UTILIZED</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1 bg-[#39FF88]/10 text-[#39FF88] border border-[#39FF88]/30 rounded text-xs font-bold"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Methodology, Findings, Remediation */}
                        <div className="space-y-4 pt-2">
                          <div className="pl-4 border-l-2 border-[#39FF88]/40">
                            <h4 className="text-white font-bold mb-1">&gt; METHODOLOGY</h4>
                            <p className="text-gray-400 font-sans text-sm">{lab.methodology}</p>
                          </div>

                          <div className="pl-4 border-l-2 border-amber-500/40">
                            <h4 className="text-amber-400 font-bold mb-1">&gt; FINDINGS</h4>
                            <p className="text-gray-400 font-sans text-sm">{lab.findings}</p>
                          </div>

                          <div className="pl-4 border-l-2 border-emerald-400/40">
                            <h4 className="text-emerald-400 font-bold mb-1">&gt; REMEDIATION</h4>
                            <p className="text-gray-400 font-sans text-sm">{lab.remediation}</p>
                          </div>

                          <div className="p-4 rounded-lg bg-[#39FF88]/5 border border-[#39FF88]/20 mt-4">
                            <h4 className="text-[#39FF88] font-bold mb-1 flex items-center gap-2">
                              <CheckCircle size={16} />
                              <span>&gt; KEY_LEARNING_OUTCOME</span>
                            </h4>
                            <p className="text-gray-200 font-sans text-sm">{lab.learned}</p>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
