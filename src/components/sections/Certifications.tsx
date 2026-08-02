"use client";

import { motion } from "framer-motion";
import { professionalCertifications, certificationStats } from "@/data/portfolio";
import { Award, Clock, Shield, User, Calendar, ExternalLink, Trophy } from "lucide-react";

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

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass p-6 rounded-xl border border-card-border flex items-center gap-4 hover:border-cyan-400/40 transition-colors">
            <div className="p-3.5 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-400">
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

          <div className="glass p-6 rounded-xl border border-card-border flex items-center gap-4 hover:border-violet-400/40 transition-colors">
            <div className="p-3.5 bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400">
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

          <div className="glass p-6 rounded-xl border border-card-border flex items-center gap-4 hover:border-cyan-400/40 transition-colors">
            <div className="p-3.5 bg-cyan-400/10 border border-cyan-400/20 rounded-xl text-cyan-400">
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
        </motion.div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalCertifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 md:p-8 rounded-xl border border-card-border hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,229,199,0.12)] transition-all duration-300 relative group flex flex-col justify-between interactive"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Icon & Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-background/50 rounded-lg border border-card-border text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    <Award size={28} />
                  </div>
                  <span className="px-3 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono rounded-full font-semibold">
                    {cert.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Meta details */}
                <div className="space-y-2 mb-5 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-cyan-400 shrink-0" />
                    <span>
                      Instructor: <strong className="text-foreground/90 font-medium">{cert.instructor}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-foreground/60 flex-wrap pt-1">
                    <div className="flex items-center gap-1.5 bg-background/50 px-2.5 py-1 rounded border border-card-border">
                      <Clock size={14} className="text-violet-400 shrink-0" />
                      <span>{cert.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-background/50 px-2.5 py-1 rounded border border-card-border">
                      <Calendar size={14} className="text-cyan-400 shrink-0" />
                      <span>Completed: {cert.completed}</span>
                    </div>
                  </div>
                </div>

                {/* Skills tags */}
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

                {/* Button */}
                <a
                  href={cert.credentialUrl}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background/50 hover:bg-cyan-500/10 border border-card-border hover:border-cyan-400/50 text-cyan-400 hover:text-cyan-300 rounded-lg font-mono text-sm font-medium transition-all duration-300 group/btn"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

