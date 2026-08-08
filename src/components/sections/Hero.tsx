"use client";

import { motion } from "framer-motion";
import { Terminal, FileText, ArrowRight, ShieldCheck, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackthebox } from "react-icons/si";
import CyberHeroCanvas from "../ui/CyberHeroCanvas";
import { useEffect, useState } from "react";

const roles = [
  "ETHICAL HACKER",
  "SECURITY RESEARCHER",
  "VULNERABILITY ANALYST",
  "SECURE BACKEND DEV",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Enterprise Container Frame */}
        <div className="relative rounded-2xl border border-white/[0.09] bg-[#0d131d]/75 backdrop-blur-xl p-6 md:p-12 shadow-2xl shadow-black/80 overflow-hidden cyber-grid">
          
          {/* Subtle Accent Radial Behind Card */}
          <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#39FF88]/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Eyebrow Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#39FF88]/30 bg-[#39FF88]/10 text-[#39FF88] font-mono text-xs font-semibold tracking-wider mb-6 w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse"></span>
                <span>SYSTEM_ONLINE // SECURE_NODE</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-mono font-extrabold tracking-tight text-white mb-4 leading-none"
              >
                GURU PRASANNA R<span className="text-[#39FF88]">.</span>
              </motion.h1>

              {/* Dynamic Role Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl font-mono font-semibold text-gray-300 mb-6 flex items-center gap-2 h-8"
              >
                <span className="text-[#39FF88]">&gt;</span>
                <span>ROLE:</span>
                <span className="text-[#39FF88] font-bold tracking-wider">{roles[roleIndex]}</span>
              </motion.div>

              {/* Subtext Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-sans"
              >
                Cybersecurity student specializing in ethical hacking, vulnerability assessment, web exploitation, and secure system architecture. Building battle-tested security tools and analyzing real-world attack vectors.
              </motion.p>

              {/* CTA Buttons & Social Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                {/* Primary CTA */}
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-lg bg-[#39FF88] text-[#0a0e14] font-mono text-sm font-bold tracking-wider hover:scale-105 hover:shadow-[0_0_24px_rgba(57,255,136,0.5)] transition-all flex items-center gap-2"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight size={16} />
                </a>

                {/* Secondary CTA */}
                <a
                  href="https://drive.google.com/file/d/1Z5LX9f_gJpq_Vh9YFfoRbZmMu1WF85Fq/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-lg border border-white/15 bg-white/[0.04] text-white font-mono text-sm font-semibold tracking-wider hover:border-[#39FF88]/50 hover:bg-[#39FF88]/10 hover:text-[#39FF88] transition-all flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>VIEW RESUME</span>
                </a>

                {/* Social Icons */}
                <div className="flex items-center gap-2.5 ml-0 sm:ml-2 mt-2 sm:mt-0">
                  <a
                    href="https://github.com/rgp040906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-white/10 bg-black/40 text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
                    title="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://leetcode.com/u/Rgprasanna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-white/10 bg-black/40 text-gray-300 hover:text-[#FFA116] hover:border-[#FFA116]/40 transition-all"
                    title="LeetCode"
                  >
                    <SiLeetcode size={18} />
                  </a>
                  <a
                    href="https://tryhackme.com/p/XyPhor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-white/10 bg-black/40 text-gray-300 hover:text-white hover:border-white/40 transition-all"
                    title="TryHackMe"
                  >
                    <SiTryhackme size={18} />
                  </a>
                  <a
                    href="https://app.hackthebox.com/profile/Rgprasanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-white/10 bg-black/40 text-gray-300 hover:text-[#9FEF00] hover:border-[#9FEF00]/40 transition-all"
                    title="Hack The Box"
                  >
                    <SiHackthebox size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guru-prasanna-r-492b66327"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-white/10 bg-black/40 text-gray-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
                    title="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Canvas Visual */}
            <div className="lg:col-span-5 h-full">
              <CyberHeroCanvas />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
