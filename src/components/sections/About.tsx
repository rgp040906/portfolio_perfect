"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-2">About Me</h2>
              <div className="w-20 h-1 bg-gradient-accent mb-8"></div>
              
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-mono text-sm sm:text-base">
                <p>
                  <span className="text-cyan-400">const</span> <span className="text-violet-400">profile</span> = {"{"}
                </p>
                <div className="pl-6 border-l border-card-border space-y-4">
                  <p><span className="text-foreground/90">status:</span> "3rd Year Cybersecurity student at SKCET",</p>
                  <p><span className="text-foreground/90">focus:</span> ["Hands-on learning", "Practical exploitation"],</p>
                  <p><span className="text-foreground/90">interests:</span> ["Web Security", "Network Security", "Vulnerability Assessment"],</p>
                  <p><span className="text-foreground/90">activities:</span> ["Security Labs", "CTF Challenges", "Bug Bounty"]</p>
                </div>
                <p>{"}"};</p>
              </div>

              <p className="mt-8 text-foreground/80 leading-relaxed">
                I am deeply interested in Cybersecurity and Ethical Hacking. My approach is highly practical—I believe the best way to understand security is by dissecting how systems fail. I regularly hone my skills through capture-the-flag (CTF) challenges and isolated lab environments.
              </p>
            </motion.div>
          </div>

          {/* Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="aspect-square max-w-md mx-auto glass rounded-xl overflow-hidden relative group"
            >
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,229,199,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400/50 z-20 shadow-[0_0_15px_rgba(0,229,199,0.5)] animate-scan"></div>
              
              <div className="p-8 h-full flex flex-col justify-center items-center text-center relative z-0">
                <Terminal size={64} className="text-violet-500 mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">Analyzing System...</h3>
                <p className="text-foreground/50 font-mono text-sm">No critical vulnerabilities found.</p>
                
                {/* Decorative nodes */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00E5C7]"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-violet-500 rounded-full shadow-[0_0_10px_#7C3AED]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
