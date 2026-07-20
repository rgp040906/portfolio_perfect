"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Shield, Wrench, Code, Server, Container } from "lucide-react";

const TiltCard = ({ title, items, icon: Icon, delay }: { title: string, items: string[], icon: any, delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="[perspective:1000px] w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass p-6 rounded-xl border border-card-border h-full interactive relative group"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-violet-500/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-violet-500/5 group-hover:to-transparent transition-all duration-500 rounded-xl" />
        
        <div className="flex items-center gap-3 mb-6" style={{ transform: "translateZ(30px)" }}>
          <div className="p-2 bg-background rounded-lg border border-card-border text-cyan-400">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(20px)" }}>
          {items.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm bg-background/50 border border-card-border rounded-full text-foreground/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TiltCard title="Cybersecurity" items={skills.cybersecurity} icon={Shield} delay={0.1} />
          <TiltCard title="Tools" items={skills.tools} icon={Wrench} delay={0.2} />
          <TiltCard title="Programming" items={skills.programming} icon={Code} delay={0.3} />
          <TiltCard title="Backend & Dev" items={skills.backend} icon={Server} delay={0.4} />
          <TiltCard title="DevOps & Env" items={skills.devops} icon={Container} delay={0.5} />
        </div>
      </div>
    </section>
  );
}
