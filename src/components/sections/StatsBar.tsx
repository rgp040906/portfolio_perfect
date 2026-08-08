"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Award, Flag, Clock } from "lucide-react";

interface StatItemProps {
  icon: any;
  targetValue: number;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
  delay: number;
}

const StatItem = ({ icon: Icon, targetValue, suffix = "+", decimals = 0, label, description, delay }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - (1 - progress) * (1 - progress);
        const val = targetValue * easeOut;

        setCurrentValue(val);

        if (currentStep >= steps) {
          setCurrentValue(targetValue);
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  const displayVal = decimals > 0 ? currentValue.toFixed(decimals) : Math.round(currentValue);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 rounded-xl border border-white/[0.08] bg-[#080b09]/80 backdrop-blur-md hover:border-[#39ff6a]/40 hover:shadow-[0_10px_30px_-10px_rgba(57,255,106,0.15)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{label}</span>
        <div className="p-2.5 rounded-lg bg-black/50 border border-white/10 text-[#39ff6a] group-hover:scale-110 transition-transform">
          <Icon size={20} />
        </div>
      </div>

      <div className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white group-hover:text-[#39ff6a] transition-colors mb-2">
        {displayVal}
        <span className="text-[#39ff6a]">{suffix}</span>
      </div>

      <p className="text-xs text-gray-400 font-mono leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function StatsBar() {
  return (
    <section className="py-12 relative z-10 bg-[#050706]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={Code}
            targetValue={187}
            label="ALGORITHMS"
            description="LeetCode problems solved in C++, Java, & Python"
            delay={0.1}
          />
          <StatItem
            icon={Award}
            targetValue={15}
            label="CERTIFICATIONS"
            description="Industry credentials from Google, Cisco, IBM, NPTEL"
            delay={0.2}
          />
          <StatItem
            icon={Flag}
            targetValue={30}
            label="CTF CHALLENGES"
            description="Hands-on web, cryptography, & network labs"
            delay={0.3}
          />
          <StatItem
            icon={Clock}
            targetValue={68.5}
            decimals={1}
            label="TRAINING HOURS"
            description="Verified Security, Red Hat, & Cisco coursework"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
