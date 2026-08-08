"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Shield, Wrench, Code, Server, Container, Terminal } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  items: string[];
  icon: any;
  delay: number;
  badgeStyle: {
    bg: string;
    text: string;
    border: string;
    glow: string;
    iconHoverAnim: string;
  };
}

const categoryStyles = [
  {
    bg: "bg-[#a855f7]/15",
    text: "text-[#a855f7]",
    border: "border-[#a855f7]/30",
    glow: "rgba(168, 85, 247, 0.28)",
    iconHoverAnim: "group-hover:scale-110 group-hover:-rotate-6",
  },
  {
    bg: "bg-[#c4b5fd]/15",
    text: "text-[#c4b5fd]",
    border: "border-[#c4b5fd]/30",
    glow: "rgba(196, 181, 253, 0.25)",
    iconHoverAnim: "group-hover:scale-110 group-hover:rotate-12",
  },
  {
    bg: "bg-[#7c3aed]/15",
    text: "text-[#c4b5fd]",
    border: "border-[#7c3aed]/35",
    glow: "rgba(124, 58, 237, 0.28)",
    iconHoverAnim: "group-hover:scale-115 group-hover:-translate-y-1",
  },
  {
    bg: "bg-[#8b5cf6]/15",
    text: "text-[#a855f7]",
    border: "border-[#8b5cf6]/30",
    glow: "rgba(139, 92, 246, 0.25)",
    iconHoverAnim: "group-hover:scale-110 group-hover:translate-y-0.5",
  },
  {
    bg: "bg-[#d8b4fe]/15",
    text: "text-[#d8b4fe]",
    border: "border-[#d8b4fe]/30",
    glow: "rgba(216, 180, 254, 0.25)",
    iconHoverAnim: "group-hover:scale-110 group-hover:rotate-6",
  },
];

const SkillCard = ({ title, items, icon: Icon, delay, badgeStyle }: SkillCategoryProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotOpacity = useMotionValue(0);

  const springConfig = { stiffness: 140, damping: 18 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const opacitySpring = useSpring(spotOpacity, { stiffness: 200, damping: 25 });
  const spotlightBackground = useMotionTemplate`radial-gradient(360px circle at ${spotX}px ${spotY}px, ${badgeStyle.glow}, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    rawX.set(mouseX / rect.width - 0.5);
    rawY.set(mouseY / rect.height - 0.5);
    spotX.set(mouseX);
    spotY.set(mouseY);
    spotOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    spotOpacity.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      className="[perspective:1000px] w-full h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -4 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-xl border border-white/[0.08] border-t-white/20 bg-[#0f0b18]/85 p-6 md:p-7 h-full flex flex-col justify-between overflow-hidden group hover:border-[#a855f7]/50 hover:shadow-[0_12px_32px_-8px_rgba(168,85,247,0.25)] transition-all duration-300 shadow-xl"
      >
        {/* Top Highlight Inner Border Glow */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#a855f7]/60 transition-colors" />

        {/* Dynamic Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl z-0"
          style={{
            opacity: opacitySpring,
            background: spotlightBackground,
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(16px)" }}>
          {/* Card Header & Icon Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg border ${badgeStyle.bg} ${badgeStyle.border} ${badgeStyle.text} ${badgeStyle.iconHoverAnim} transition-transform duration-300 shadow-sm`}>
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-mono font-bold text-white tracking-wider uppercase group-hover:text-[#c4b5fd] transition-colors">
                  {title}
                </h3>
                <span className="font-mono text-[10px] text-[#9b8fa0] uppercase tracking-widest">
                  {items.length} MODULES
                </span>
              </div>
            </div>
            
            {/* Corner Terminal Dot */}
            <div className="w-2 h-2 rounded-full bg-[#a855f7]/30 group-hover:bg-[#a855f7] group-hover:shadow-[0_0_8px_#a855f7] transition-all" />
          </div>

          {/* Interactive Skill Tags Grid */}
          <div className="flex flex-wrap gap-2.5">
            {items.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: delay + idx * 0.02 }}
                className="px-3 py-1.5 text-xs font-mono bg-black/60 border border-white/[0.08] rounded-md text-gray-300 cursor-default hover:bg-[#a855f7]/15 hover:border-[#a855f7]/50 hover:text-white hover:scale-[1.04] hover:shadow-[0_0_12px_rgba(168,85,247,0.25)] transition-all duration-150 flex items-center gap-1.5 group/tag"
              >
                <span className="w-1 h-1 rounded-full bg-gray-500 group-hover/tag:bg-[#a855f7] transition-colors" />
                <span>{item}</span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom Card Telemetry Bar */}
        <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between text-[11px] font-mono text-[#9b8fa0] relative z-10" style={{ transform: "translateZ(10px)" }}>
          <span className="group-hover:text-gray-300 transition-colors">&gt; STATUS: VERIFIED</span>
          <span className="text-[#c4b5fd]/80 group-hover:text-[#c4b5fd] transition-colors">100% READY</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const categoryData = [
    { title: "Cybersecurity", items: skills.cybersecurity, icon: Shield },
    { title: "Security Tools", items: skills.tools, icon: Wrench },
    { title: "Programming", items: skills.programming, icon: Code },
    { title: "Backend & Dev", items: skills.backend, icon: Server },
    { title: "DevOps & Env", items: skills.devops, icon: Container },
  ];

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden bg-[#0a0810]">
      {/* Background Animated Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(168,85,247,0.02)_50%)] bg-[length:100%_6px] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 font-mono text-xs text-[#a855f7] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/25 shadow-[0_0_12px_rgba(168,85,247,0.15)]"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-[#a855f7] relative" />
            </div>
            <Terminal size={14} />
            <span>// CAPABILITIES_&_ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-mono font-extrabold text-white tracking-tight flex items-center flex-wrap"
          >
            <span>TECHNICAL ARSENAL</span>
            <span className="text-[#a855f7]">.</span>
            {/* Terminal Blinking Cursor Prompt */}
            <span className="inline-block w-3 h-8 md:h-10 bg-[#a855f7] ml-3 animate-pulse align-middle rounded-sm shadow-[0_0_10px_#a855f7]" />
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4.5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#a855f7] mt-4 rounded-full shadow-[0_0_12px_#a855f7]"
          />
        </div>

        {/* 5-Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {categoryData.map((cat, index) => (
            <SkillCard
              key={cat.title}
              title={cat.title}
              items={cat.items}
              icon={cat.icon}
              delay={index * 0.1}
              badgeStyle={categoryStyles[index % categoryStyles.length]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
