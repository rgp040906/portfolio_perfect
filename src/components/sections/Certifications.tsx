"use client";

import { motion } from "framer-motion";
import { certifications, achievements } from "@/data/portfolio";
import { Award, Trophy, Star } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Credentials</h2>
          <div className="w-20 h-1 bg-gradient-accent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications List */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-cyan-400">
              <Award size={28} />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-5 rounded-lg border border-card-border flex items-center justify-between group hover:border-cyan-400/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform"></div>
                    <div>
                      <h4 className="font-bold text-foreground/90">{cert.name}</h4>
                      <p className="text-sm text-foreground/50">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Workshops */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-violet-400">
              <Trophy size={28} />
              <h3 className="text-2xl font-bold text-foreground">Recognition & Workshops</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-5 rounded-lg border border-card-border flex items-start gap-4 group hover:border-violet-500/50 transition-colors"
                >
                  <Star className="text-violet-500 mt-1 shrink-0" size={18} />
                  <p className="text-foreground/80 font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
