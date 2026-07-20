"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-gradient-accent"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-transparent">
          {experience.map((exp, index) => (
            <div key={exp.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-cyan-400 text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 glass border border-card-border rounded-xl"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                  <h4 className="text-lg text-foreground/80 font-medium">{exp.company}</h4>
                </div>
                
                <div className="space-y-4">
                  {exp.timeline.map((step, i) => (
                    <div key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-violet-500 before:rounded-full">
                      <h5 className="font-bold text-sm text-foreground/90">{step.title}</h5>
                      <p className="text-sm text-foreground/70 mt-1">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
