"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { securityLab } from "@/data/portfolio";
import { Terminal, ChevronDown, Activity } from "lucide-react";

export default function SecurityLab() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="security-lab" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-cyan-900/20 text-cyan-400 rounded-full border border-cyan-400/30">
            <Activity size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Security Lab</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Practical exercises and hands-on vulnerability assessments conducted in isolated environments.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {securityLab.map((lab, i) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass border border-card-border rounded-xl overflow-hidden interactive"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between bg-card/50 hover:bg-card transition-colors text-left"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <Terminal className={activeIndex === i ? "text-cyan-400" : "text-foreground/50"} size={20} />
                  <span className="text-lg font-bold font-mono">{lab.title}</span>
                </div>
                <ChevronDown
                  className={`transition-transform duration-300 ${activeIndex === i ? "rotate-180 text-cyan-400" : "text-foreground/50"}`}
                  size={20}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-card-border"
                  >
                    <div className="p-6 md:p-8 bg-black/40 font-mono text-sm md:text-base space-y-6">
                      
                      {/* Grid layout for lab details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-cyan-400 font-bold mb-2">&gt; OBJECTIVE</h4>
                          <p className="text-foreground/80 pl-4 border-l-2 border-card-border">{lab.objective}</p>
                        </div>
                        <div>
                          <h4 className="text-cyan-400 font-bold mb-2">&gt; ENVIRONMENT</h4>
                          <p className="text-foreground/80 pl-4 border-l-2 border-card-border">{lab.environment}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-cyan-400 font-bold mb-2">&gt; TOOLS_USED</h4>
                        <div className="flex flex-wrap gap-2 pl-4">
                          {lab.tools.map(t => (
                            <span key={t} className="px-2 py-1 bg-violet-900/30 text-violet-300 border border-violet-500/30 rounded text-xs">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-violet-400 font-bold mb-2">&gt; METHODOLOGY</h4>
                          <p className="text-foreground/80 pl-4 border-l-2 border-card-border">{lab.methodology}</p>
                        </div>
                        <div>
                          <h4 className="text-violet-400 font-bold mb-2">&gt; FINDINGS</h4>
                          <p className="text-foreground/80 pl-4 border-l-2 border-card-border">{lab.findings}</p>
                        </div>
                        <div>
                          <h4 className="text-green-400 font-bold mb-2">&gt; REMEDIATION</h4>
                          <p className="text-foreground/80 pl-4 border-l-2 border-card-border">{lab.remediation}</p>
                        </div>
                        <div className="bg-cyan-950/20 p-4 border border-cyan-900/50 rounded-lg">
                          <h4 className="text-cyan-400 font-bold mb-2">&gt; WHAT_I_LEARNED</h4>
                          <p className="text-foreground/90">{lab.learned}</p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
