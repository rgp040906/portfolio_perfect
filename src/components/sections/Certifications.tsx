"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  cybersecurityCertifications,
  jobSimulations,
  certAchievements,
  certificationStats
} from "@/data/portfolio";
import {
  Award,
  Clock,
  Shield,
  User,
  Calendar,
  ExternalLink,
  Trophy,
  Briefcase,
  Sparkles,
  Building2
} from "lucide-react";

// Interactive Card Component with 3D Tilt and Mouse Spotlight Tracking
const InteractiveTiltCard = ({
  children,
  className = "",
  glowColor = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "violet" | "amber";
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setMousePos({ x: mouseX, y: mouseY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowBg =
    glowColor === "amber"
      ? "rgba(251, 191, 36, 0.18)"
      : glowColor === "violet"
      ? "rgba(124, 58, 237, 0.18)"
      : "rgba(0, 229, 199, 0.18)";

  const borderColor =
    glowColor === "amber"
      ? "hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]"
      : glowColor === "violet"
      ? "hover:border-violet-400/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.15)]"
      : "hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,229,199,0.15)]";

  return (
    <div className="[perspective:1000px] w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`glass rounded-xl border border-card-border transition-all duration-300 relative group interactive ${borderColor} ${className}`}
      >
        {/* Dynamic Mouse Spotlight Glow following cursor */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl z-0"
          style={{
            opacity: mousePos.opacity,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowBg}, transparent 80%)`,
          }}
        />

        <div style={{ transform: "translateZ(12px)" }} className="relative z-10 flex flex-col h-full p-6 md:p-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Professional Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mb-4"></div>
          <p className="text-foreground/70 text-base md:text-lg max-w-3xl leading-relaxed">
            Continuous learning through industry-recognized training in Cybersecurity, Ethical Hacking, Linux, and Network Security.
          </p>
        </motion.div>

        {/* Statistics Row with Interactive Mouse Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <InteractiveTiltCard glowColor="cyan">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                <Trophy size={28} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {certificationStats.totalCertifications}
                </div>
                <div className="text-xs md:text-sm font-mono text-foreground/60">
                  🏆 Total Certifications
                </div>
              </div>
            </div>
          </InteractiveTiltCard>

          <InteractiveTiltCard glowColor="violet">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400 group-hover:scale-110 transition-transform">
                <Clock size={28} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {certificationStats.totalLearningHours}
                </div>
                <div className="text-xs md:text-sm font-mono text-foreground/60">
                  ⏱ Total Learning Hours
                </div>
              </div>
            </div>
          </InteractiveTiltCard>

          <InteractiveTiltCard glowColor="cyan">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <div>
                <div className="text-sm font-semibold text-cyan-400 mb-1 flex items-center gap-1">
                  🛡 Focus Areas
                </div>
                <div className="text-xs text-foreground/80 font-mono leading-snug">
                  {certificationStats.focusAreas.join(", ")}
                </div>
              </div>
            </div>
          </InteractiveTiltCard>
        </motion.div>

        {/* --- SUB-SECTION 1: CYBERSECURITY & NETWORKING CERTIFICATIONS --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 text-cyan-400">
            <Award size={26} />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase font-mono">
              Cybersecurity & Networking Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cybersecurityCertifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="h-full"
              >
                <InteractiveTiltCard glowColor="cyan">
                  {/* Header: Icon & Source Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-background/50 rounded-lg border border-card-border text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                      <Award size={26} />
                    </div>
                    <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono rounded-full font-semibold">
                      {cert.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  {/* Meta details */}
                  <div className="space-y-2 mb-5 text-sm text-foreground/70">
                    {cert.instructor && (
                      <div className="flex items-center gap-2">
                        <User size={15} className="text-cyan-400 shrink-0" />
                        <span>
                          Instructor/Issuer: <strong className="text-foreground/90 font-medium">{cert.instructor}</strong>
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-xs font-mono text-foreground/60 flex-wrap pt-1">
                      {cert.duration && (
                        <div className="flex items-center gap-1.5 bg-background/50 px-2.5 py-1 rounded border border-card-border">
                          <Clock size={14} className="text-violet-400 shrink-0" />
                          <span>{cert.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 bg-background/50 px-2.5 py-1 rounded border border-card-border">
                        <Calendar size={14} className="text-cyan-400 shrink-0" />
                        <span>Completed: {cert.completed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 bg-background/80 border border-card-border rounded text-foreground/70 group-hover:border-cyan-400/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background/50 hover:bg-cyan-500/10 border border-card-border hover:border-cyan-400/50 text-cyan-400 hover:text-cyan-300 rounded-lg font-mono text-sm font-medium transition-all duration-300 group/btn interactive"
                  >
                    <span>View Certificate ↗</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </InteractiveTiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SUB-SECTION 2: INDUSTRY JOB SIMULATIONS --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 text-violet-400">
            <Briefcase size={26} />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase font-mono">
              Industry Job Simulations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSimulations.map((sim, i) => (
              <motion.div
                key={sim.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <InteractiveTiltCard glowColor="violet">
                  {/* Header: Icon & Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-background/50 rounded-lg border border-card-border text-violet-400 group-hover:scale-110 group-hover:border-violet-400/40 transition-all duration-300">
                      <Briefcase size={26} />
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono rounded-full font-semibold">
                      {sim.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors leading-snug">
                    {sim.title}
                  </h4>

                  {/* Company / Issuer & Date */}
                  <div className="space-y-2 mb-5 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Building2 size={15} className="text-violet-400 shrink-0" />
                      <span>
                        Company: <strong className="text-foreground/90 font-medium">{sim.instructor}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-foreground/60 bg-background/50 px-2.5 py-1 rounded border border-card-border w-fit mt-1">
                      <Calendar size={14} className="text-cyan-400 shrink-0" />
                      <span>Completed: {sim.completed}</span>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {sim.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 bg-background/80 border border-card-border rounded text-foreground/70 group-hover:border-violet-400/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <a
                    href={sim.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background/50 hover:bg-violet-500/10 border border-card-border hover:border-violet-400/50 text-violet-400 hover:text-violet-300 rounded-lg font-mono text-sm font-medium transition-all duration-300 group/btn interactive"
                  >
                    <span>View Certificate ↗</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </InteractiveTiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SUB-SECTION 3: ACHIEVEMENTS & RECOGNITION --- */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-amber-400">
            <Trophy size={26} />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground uppercase font-mono">
              Achievements & Recognition
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certAchievements.map((achieve, i) => (
              <motion.div
                key={achieve.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <InteractiveTiltCard glowColor="amber">
                  {/* Header: Trophy Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-background/50 rounded-lg border border-card-border text-amber-400 group-hover:scale-110 group-hover:border-amber-400/40 transition-all duration-300">
                      <Trophy size={26} />
                    </div>
                    <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono rounded-full font-semibold">
                      Award
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    {achieve.title}
                  </h4>

                  {/* Issuer & Date */}
                  <div className="space-y-2 mb-5 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Sparkles size={15} className="text-amber-400 shrink-0" />
                      <span>
                        Issuer: <strong className="text-foreground/90 font-medium">{achieve.issuer}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-foreground/60 bg-background/50 px-2.5 py-1 rounded border border-card-border w-fit mt-1">
                      <Calendar size={14} className="text-cyan-400 shrink-0" />
                      <span>Date: {achieve.date}</span>
                    </div>
                  </div>

                  {/* Skill / Event tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {achieve.skills.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 bg-background/80 border border-card-border rounded text-foreground/70 group-hover:border-amber-400/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </InteractiveTiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



