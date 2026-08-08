"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackthebox } from "react-icons/si";

const platforms = [
  {
    name: "GitHub",
    icon: <FaGithub size={32} className="text-white" />,
    username: "Rgp040906",
    link: "https://github.com/Rgp040906",
    description: "Open-source tools, backend services, security scripts, and learning repositories.",
    stats: [
      { label: "Repos", value: "Public" },
      { label: "Focus", value: "Security & Dev" },
    ],
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={32} className="text-[#FFA116]" />,
    username: "Rgprasanna",
    link: "https://leetcode.com/u/Rgprasanna/",
    description: "Problem solving, data structures, algorithms, and technical interview preparation.",
    stats: [
      { label: "Rank", value: "886,444" },
      { label: "Solved", value: "187 Problems" },
      { label: "C++", value: "184" },
    ],
  },
  {
    name: "TryHackMe",
    icon: <SiTryhackme size={32} className="text-[#c4b5fd]" />,
    username: "XyPhor",
    link: "https://tryhackme.com/p/XyPhor",
    description: "Hands-on cyber labs, privilege escalation, web exploitation, network enumeration.",
    stats: [
      { label: "Badge Rank", value: "[0x7] ADEPT" },
      { label: "Country", value: "India 🇮🇳" },
    ],
  },
  {
    name: "Hack The Box",
    icon: <SiHackthebox size={32} className="text-[#9FEF00]" />,
    username: "@Rgprasanna",
    link: "https://app.hackthebox.com/profile/Rgprasanna",
    description: "Penetration testing labs, machine exploitation, Active Directory, and Linux targets.",
    stats: [
      { label: "Target", value: "Pwn & CTF" },
      { label: "Status", value: "Active Labs" },
    ],
  }
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-20 relative z-10 bg-[#0a0810]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a855f7] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// ONLINE_SYSTEMS_&_BENCHMARKS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            PLATFORMS & PROFILES<span className="text-[#a855f7]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-white/[0.08] border-t-white/20 bg-[#0f0b18]/85 p-6 flex flex-col justify-between card-hover-lift group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-black/50 rounded-lg border border-white/10 group-hover:scale-110 transition-transform duration-450 ease-out">
                    {platform.icon}
                  </div>
                  <span className="font-mono text-xs text-[#c4b5fd] font-bold">
                    {platform.username}
                  </span>
                </div>

                <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-[#c4b5fd] transition-colors duration-350">
                  {platform.name}
                </h3>

                <p className="text-[#9b8fa0] font-sans text-xs leading-relaxed mb-6">
                  {platform.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {platform.stats.map((stat, j) => (
                    <span key={j} className="px-2 py-1 bg-black/50 border border-white/[0.08] rounded text-[11px] font-mono">
                      <span className="text-gray-500">{stat.label}:</span>{" "}
                      <span className="text-gray-200 font-bold">{stat.value}</span>
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-black/50 border border-white/10 group-hover:border-[#a855f7] group-hover:btn-violet-gradient text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-450 ease-out mt-auto"
              >
                <span>VIEW PROFILE</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
