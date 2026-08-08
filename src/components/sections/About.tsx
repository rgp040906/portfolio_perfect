"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 bg-[#0a0810]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a855f7] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// PROFILE_TELEMETRY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            ABOUT ME<span className="text-[#a855f7]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Code Profile Object */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/[0.08] border-t-white/20 bg-[#0f0b18]/85 backdrop-blur-md p-6 md:p-8 font-mono text-sm leading-relaxed shadow-xl"
            >
              {/* Code Editor Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#a855f7]/80"></div>
                </div>
                <span className="text-xs text-[#9b8fa0]">profile_spec.ts</span>
              </div>

              <div className="space-y-3">
                <p>
                  <span className="text-[#a855f7]">const</span>{" "}
                  <span className="text-[#c4b5fd]">securityEngineer</span> = {"{"}
                </p>
                
                <div className="pl-6 space-y-2 border-l-2 border-[#a855f7]/25">
                  <p>
                    <span className="text-[#9b8fa0]">identity:</span>{" "}
                    <span className="text-purple-200">"Guru Prasanna R"</span>,
                  </p>
                  <p>
                    <span className="text-[#9b8fa0]">academicStatus:</span>{" "}
                    <span className="text-purple-200">"3rd Year B.E. CS & Engineering (Cyber Security)"</span>,
                  </p>
                  <p>
                    <span className="text-[#9b8fa0]">institution:</span>{" "}
                    <span className="text-purple-200">"Sri Krishna College of Engineering & Tech (SKCET)"</span>,
                  </p>
                  <p>
                    <span className="text-[#9b8fa0]">coreFocus:</span> [
                    <span className="text-purple-200">"Web Security"</span>,{" "}
                    <span className="text-purple-200">"Ethical Hacking"</span>,{" "}
                    <span className="text-purple-200">"Vulnerability Assessment"</span>
                    ],
                  </p>
                  <p>
                    <span className="text-[#9b8fa0]">methodology:</span>{" "}
                    <span className="text-purple-200">"Practical Exploitation & Remediation Labs"</span>
                  </p>
                </div>

                <p>{"}"};</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] text-gray-300 font-sans text-base leading-relaxed">
                I approach cybersecurity with a hands-on mindset: the most reliable way to defend enterprise infrastructure is to deeply understand how vulnerabilities are discovered, exploited, and patched. I regularly practice CTFs, vulnerability scans, and lab exercises using industry tools like Nmap, Nessus, Burp Suite, and Kali Linux.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive System Monitor Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-white/[0.08] border-t-white/20 bg-[#0f0b18]/90 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#a855f7]/40 transition-colors shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="text-[#a855f7]" size={20} />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">SYSTEM_HEALTH</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/30 font-mono text-[10px] font-bold">
                  OPTIMAL
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs my-4">
                <div className="p-3 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between">
                  <span className="text-[#9b8fa0]">LAB_VULNERABILITY_SCANS</span>
                  <span className="text-[#a855f7] font-bold">PASSED (0 Critical)</span>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between">
                  <span className="text-[#9b8fa0]">ENCRYPTION_STANDARDS</span>
                  <span className="text-white font-bold">AES-256 / RSA-4096</span>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/5 flex items-center justify-between">
                  <span className="text-[#9b8fa0]">NETWORK_MONITORING</span>
                  <span className="text-[#a855f7] font-bold">ACTIVE // 100% UP</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#9b8fa0]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#a855f7]" />
                  <span>AUDIT_LOG_VERIFIED</span>
                </span>
                <span>SKCET // CYBER_DEPT</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
