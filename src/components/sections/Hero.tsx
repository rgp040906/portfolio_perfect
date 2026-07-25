"use client";

import { motion } from "framer-motion";
import { Terminal, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackthebox } from "react-icons/si";
import NodeNetwork from "../ui/NodeNetwork";
import { useEffect, useState } from "react";

const roles = ["Ethical Hacker", "Security Researcher", "Backend Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <NodeNetwork />
      
      {/* Background Gradient/Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-cyan-400 font-mono mb-6"
          >
            <Terminal size={18} />
            <span>SYSTEM_READY // GUEST_LOGIN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            Guru Prasanna R<span className="text-violet-500">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6 h-10"
          >
            I am a <span className="text-gradient font-semibold">{roles[roleIndex]}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed"
          >
            Cybersecurity student passionate about ethical hacking, vulnerability assessment, web security, and secure application development. Building security-focused projects and solving real-world security scenarios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="interactive group relative px-8 py-3 bg-foreground text-background font-semibold rounded-none overflow-hidden">
              <div className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
              <span className="relative z-10 group-hover:text-background">View Projects</span>
            </a>
            
            <a href="#" className="interactive px-8 py-3 border border-card-border glass text-foreground font-semibold hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors">
              <span className="flex items-center gap-2"><FileText size={18}/> Resume</span>
            </a>

            <div className="flex items-center gap-3 ml-4">
              <a href="https://github.com/rgp040906" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full glass border border-card-border hover:border-foreground/50 hover:text-foreground transition-colors" title="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://leetcode.com/u/Rgprasanna/" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full glass border border-card-border hover:border-[#FFA116]/50 hover:text-[#FFA116] transition-colors" title="LeetCode">
                <SiLeetcode size={20} />
              </a>
              <a href="https://tryhackme.com/p/XyPhor" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full glass border border-card-border hover:border-white/50 hover:text-white transition-colors" title="TryHackMe">
                <SiTryhackme size={20} />
              </a>
              <a href="https://app.hackthebox.com/profile/Rgprasanna" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full glass border border-card-border hover:border-[#9FEF00]/50 hover:text-[#9FEF00] transition-colors" title="Hack The Box">
                <SiHackthebox size={20} />
              </a>
              <a href="https://www.linkedin.com/in/guru-prasanna-r-492b66327" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full glass border border-card-border hover:border-violet-400/50 hover:text-violet-400 transition-colors" title="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#contact" className="interactive p-3 rounded-full glass border border-card-border hover:border-cyan-400/50 hover:text-cyan-400 transition-colors" title="Contact">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
