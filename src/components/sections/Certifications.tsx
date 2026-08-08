"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate
} from "framer-motion";
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
  Building2,
  Terminal
} from "lucide-react";

const InteractiveTiltCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotOpacity = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 18, mass: 0.4 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-7deg", "7deg"]);
  const opacitySpring = useSpring(spotOpacity, { stiffness: 200, damping: 25 });

  const spotlightBackground = useMotionTemplate`radial-gradient(380px circle at ${spotX}px ${spotY}px, rgba(57, 255, 136, 0.16), transparent 80%)`;

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
    <div className="[perspective:1000px] w-full h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -5 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`rounded-xl border border-white/[0.09] bg-[#0d131d]/80 transition-colors duration-300 relative group overflow-hidden hover:border-[#39FF88]/40 hover:shadow-[0_10px_30px_-10px_rgba(57,255,136,0.15)] ${className}`}
      >
        {/* Dynamic Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl z-0"
          style={{
            opacity: opacitySpring,
            background: spotlightBackground,
          }}
        />

        <div style={{ transform: "translateZ(14px)" }} className="relative z-10 flex flex-col h-full p-6 md:p-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#39FF88] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// CREDENTIALS_&_VERIFICATION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            PROFESSIONAL CERTIFICATIONS<span className="text-[#39FF88]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#39FF88] mt-3 mb-4"></div>
          <p className="text-gray-400 max-w-3xl font-sans text-base">
            Verified industry training in Ethical Hacking, Penetration Testing, Cisco Security, Red Hat Linux, and Risk Management.
          </p>
        </motion.div>

        {/* --- SUB-SECTION 1: CYBERSECURITY & NETWORKING CERTIFICATIONS --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 text-[#39FF88]">
            <Award size={24} />
            <h3 className="text-lg md:text-xl font-mono font-bold uppercase text-white tracking-wider">
              CYBERSECURITY & NETWORKING CREDENTIALS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cybersecurityCertifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="h-full"
              >
                <InteractiveTiltCard>
                  {/* Badge Row */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-[#39FF88] group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <span className="px-3 py-1 bg-[#39FF88]/10 border border-[#39FF88]/30 text-[#39FF88] text-xs font-mono rounded-full font-bold">
                      {cert.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-mono font-bold text-white mb-3 group-hover:text-[#39FF88] transition-colors leading-snug">
                    {cert.title}
                  </h4>

                  {/* Details */}
                  <div className="space-y-2 mb-5 text-xs font-mono text-gray-400">
                    {cert.instructor && (
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-[#39FF88]" />
                        <span>Issuer/Instructor: <strong className="text-gray-200">{cert.instructor}</strong></span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 flex-wrap pt-1">
                      {cert.duration && (
                        <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded border border-white/10">
                          <Clock size={13} className="text-[#39FF88]" />
                          <span>{cert.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded border border-white/10">
                        <Calendar size={13} className="text-[#39FF88]" />
                        <span>Completed: {cert.completed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-1 bg-black/40 border border-white/[0.08] rounded text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Link Button */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-black/40 hover:bg-[#39FF88] border border-white/10 hover:border-[#39FF88] text-[#39FF88] hover:text-[#0a0e14] rounded-lg font-mono text-xs font-bold transition-all duration-300 group/btn"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <ExternalLink size={14} />
                  </a>
                </InteractiveTiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SUB-SECTION 2: INDUSTRY JOB SIMULATIONS --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 text-[#39FF88]">
            <Briefcase size={24} />
            <h3 className="text-lg md:text-xl font-mono font-bold uppercase text-white tracking-wider">
              INDUSTRY JOB SIMULATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobSimulations.map((sim, i) => (
              <motion.div
                key={sim.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <InteractiveTiltCard>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-[#39FF88]">
                      <Briefcase size={24} />
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/15 text-gray-300 text-xs font-mono rounded-full font-bold">
                      {sim.platform}
                    </span>
                  </div>

                  <h4 className="text-base font-mono font-bold text-white mb-2 group-hover:text-[#39FF88] transition-colors leading-snug">
                    {sim.title}
                  </h4>

                  <div className="space-y-1.5 mb-5 text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-[#39FF88]" />
                      <span>Company: <strong className="text-gray-200">{sim.instructor}</strong></span>
                    </div>
                    <div className="text-[11px] text-gray-500">Completed: {sim.completed}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {sim.skills.map((skill) => (
                      <span key={skill} className="text-[11px] font-mono px-2 py-0.5 bg-black/40 border border-white/[0.08] rounded text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={sim.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-black/40 hover:bg-[#39FF88] border border-white/10 hover:border-[#39FF88] text-[#39FF88] hover:text-[#0a0e14] rounded-lg font-mono text-xs font-bold transition-all duration-300"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ExternalLink size={14} />
                  </a>
                </InteractiveTiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SUB-SECTION 3: ACHIEVEMENTS & RECOGNITION --- */}
        <div>
          <div className="flex items-center gap-3 mb-8 text-[#39FF88]">
            <Trophy size={24} />
            <h3 className="text-lg md:text-xl font-mono font-bold uppercase text-white tracking-wider">
              ACHIEVEMENTS & AWARDS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certAchievements.map((achieve, i) => (
              <motion.div
                key={achieve.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full"
              >
                <InteractiveTiltCard>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-black/40 rounded-lg border border-white/10 text-amber-400">
                      <Trophy size={24} />
                    </div>
                    <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono rounded-full font-bold">
                      AWARD
                    </span>
                  </div>

                  <h4 className="text-base font-mono font-bold text-white mb-2 group-hover:text-[#39FF88] transition-colors leading-snug">
                    {achieve.title}
                  </h4>

                  <div className="space-y-1.5 mb-5 text-xs font-mono text-gray-400">
                    <div>Issuer: <strong className="text-gray-200">{achieve.issuer}</strong></div>
                    <div className="text-[11px] text-gray-500">Date: {achieve.date}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {achieve.skills.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2 py-0.5 bg-black/40 border border-white/[0.08] rounded text-gray-300">
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
