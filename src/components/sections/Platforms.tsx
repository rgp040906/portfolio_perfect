"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackthebox } from "react-icons/si";

const platforms = [
  {
    name: "GitHub",
    icon: <FaGithub size={36} className="text-foreground" />,
    username: "Rgp040906",
    link: "https://github.com/Rgp040906",
    description: "Open-source projects, backend development, cybersecurity tools, and learning repositories.",
    stats: [],
    borderColor: "hover:border-foreground/50",
    buttonColor: "bg-foreground text-background hover:bg-foreground/80",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={36} className="text-[#FFA116]" />,
    username: "Rgprasanna",
    link: "https://leetcode.com/u/Rgprasanna/",
    description: "Practicing Data Structures, Algorithms, and Problem Solving.",
    stats: [
      { label: "Rank", value: "886,444" },
      { label: "Solved", value: "187" },
      { label: "C++", value: "184" },
      { label: "Java", value: "2" },
      { label: "Python", value: "1" },
    ],
    borderColor: "hover:border-[#FFA116]/50",
    buttonColor: "bg-[#FFA116]/10 text-[#FFA116] border border-[#FFA116]/50 hover:bg-[#FFA116]/20",
  },
  {
    name: "TryHackMe",
    icon: <SiTryhackme size={36} className="text-white" />,
    username: "XyPhor",
    link: "https://tryhackme.com/p/XyPhor",
    description: "Hands-on cybersecurity labs, CTFs, web exploitation, networking, privilege escalation, and penetration testing.",
    stats: [
      { label: "Rank", value: "[0x7] ADEPT" },
      { label: "Country", value: "India 🇮🇳" },
      { label: "Role", value: "Student" },
    ],
    borderColor: "hover:border-white/50",
    buttonColor: "bg-white/10 text-white border border-white/50 hover:bg-white/20",
  },
  {
    name: "Hack The Box",
    icon: <SiHackthebox size={36} className="text-[#9FEF00]" />,
    nameAlt: "Guru Prasanna R",
    username: "@Rgprasanna",
    link: "https://app.hackthebox.com/profile/Rgprasanna",
    description: "Practicing penetration testing, machine exploitation, Active Directory, Linux, Windows, and web security labs.",
    stats: [],
    borderColor: "hover:border-[#9FEF00]/50",
    buttonColor: "bg-[#9FEF00]/10 text-[#9FEF00] border border-[#9FEF00]/50 hover:bg-[#9FEF00]/20",
  }
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Coding & Cybersecurity Platforms</h2>
          <div className="w-20 h-1 bg-gradient-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-6 rounded-xl border border-card-border flex flex-col group transition-colors relative overflow-hidden ${platform.borderColor}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-black/30 rounded-lg group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-1">{platform.name}</h3>
              <div className="font-mono text-sm text-foreground/60 mb-4 h-10">
                {platform.nameAlt ? (
                  <>
                    <span className="text-foreground/80">{platform.nameAlt}</span><br />
                    <span>{platform.username}</span>
                  </>
                ) : (
                  <span>{platform.username}</span>
                )}
              </div>
              
              <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed">
                {platform.description}
              </p>
              
              {platform.stats.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {platform.stats.map((stat, j) => (
                    <span key={j} className="px-2 py-1 bg-black/40 border border-card-border rounded text-xs font-mono">
                      <span className="text-foreground/50">{stat.label}:</span> <span className="text-foreground/90">{stat.value}</span>
                    </span>
                  ))}
                </div>
              )}
              
              <a 
                href={platform.link} 
                target="_blank" 
                rel="noreferrer"
                className={`w-full py-2.5 rounded font-bold text-sm flex items-center justify-center gap-2 transition-all mt-auto interactive ${platform.buttonColor}`}
              >
                View {platform.name} <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
