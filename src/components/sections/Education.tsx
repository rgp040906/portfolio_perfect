"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Terminal } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10 bg-[#050706]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#39ff6a] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// ACADEMIC_BACKGROUND</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            EDUCATION<span className="text-[#39ff6a]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#39ff6a] mt-3"></div>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/[0.08] bg-[#080b09]/85 p-8 relative overflow-hidden card-hover-lift"
          >
            <div className="absolute top-4 right-4 p-4 opacity-5 text-[#39ff6a]">
              <GraduationCap size={140} />
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#39ff6a]/10 text-[#39ff6a] border border-[#39ff6a]/30 rounded-full text-xs font-mono font-bold mb-4">
                2024 — 2028 (IN PROGRESS)
              </span>

              <h3 className="text-2xl font-mono font-bold text-white mb-1">
                B.E. Computer Science and Engineering
              </h3>
              <h4 className="text-lg font-mono font-semibold text-[#39ff6a] mb-4">
                (Specialization: Cyber Security)
              </h4>

              <p className="text-gray-300 font-sans text-base mb-8">
                Sri Krishna College of Engineering and Technology (SKCET), Coimbatore, Tamil Nadu
              </p>

              <div className="pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 mb-4 text-white font-mono text-xs font-bold uppercase tracking-wider">
                  <BookOpen size={16} className="text-[#39ff6a]" />
                  <span>SPECIALIZED COURSEWORK</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Ethical Hacking",
                    "Classical Cryptography",
                    "Cyber Law & Digital Forensics",
                    "Machine Learning",
                    "IT Infrastructure Auditing",
                    "Security Assessment & Risk Analysis",
                    "Web Exploitation & Defence",
                    "Cloud Security & Infrastructure",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-black/50 border border-white/[0.08] rounded text-xs font-mono text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
