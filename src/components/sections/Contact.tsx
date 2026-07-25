"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackthebox } from "react-icons/si";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate network request
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-2">Initialize Connection</h2>
              <div className="w-20 h-1 bg-gradient-accent mb-6"></div>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <a href="mailto:guruprasannargp2006@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-cyan-400 transition-colors interactive group w-fit">
                <div className="p-3 bg-card border border-card-border rounded-lg group-hover:border-cyan-400/50 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-mono">guruprasannargp2006@gmail.com</span>
              </a>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://github.com/rgp040906" target="_blank" rel="noreferrer" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-foreground hover:border-foreground/50 transition-all" title="GitHub">
                  <FaGithub size={24} />
                </a>
                <a href="https://leetcode.com/u/Rgprasanna/" target="_blank" rel="noreferrer" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-[#FFA116] hover:border-[#FFA116]/50 transition-all" title="LeetCode">
                  <SiLeetcode size={24} />
                </a>
                <a href="https://tryhackme.com/p/XyPhor" target="_blank" rel="noreferrer" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-white hover:border-white/50 transition-all" title="TryHackMe">
                  <SiTryhackme size={24} />
                </a>
                <a href="https://app.hackthebox.com/profile/Rgprasanna" target="_blank" rel="noreferrer" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-[#9FEF00] hover:border-[#9FEF00]/50 transition-all" title="Hack The Box">
                  <SiHackthebox size={24} />
                </a>
                <a href="https://www.linkedin.com/in/guru-prasanna-r-492b66327" target="_blank" rel="noreferrer" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-violet-400 hover:border-violet-500/50 transition-all" title="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="mailto:guruprasannargp2006@gmail.com" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-all" title="Email">
                  <Mail size={24} />
                </a>
                <a href="#" className="interactive p-3 bg-card border border-card-border rounded-lg text-foreground/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-all flex items-center gap-2 px-6">
                  <FileText size={20} />
                  <span className="font-semibold">Resume</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border border-card-border relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6 font-mono text-cyan-400">SECURE_MESSAGE_TRANSMIT</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-foreground/60 mb-2">NAME // ALIAS</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  disabled={formState === "submitting"}
                  className="w-full bg-black/30 border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400/70 transition-colors disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-foreground/60 mb-2">CONTACT // EMAIL</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  disabled={formState === "submitting"}
                  className="w-full bg-black/30 border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400/70 transition-colors disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-foreground/60 mb-2">PAYLOAD // MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  disabled={formState === "submitting"}
                  className="w-full bg-black/30 border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-cyan-400/70 transition-colors resize-none disabled:opacity-50"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState !== "idle"}
                className={`w-full py-4 rounded-lg font-bold font-mono transition-all flex items-center justify-center gap-2 interactive ${
                  formState === "idle" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20" : 
                  formState === "submitting" ? "bg-violet-500/20 text-violet-400 border border-violet-500/50" :
                  formState === "success" ? "bg-green-500/20 text-green-400 border border-green-500/50" :
                  "bg-red-500/20 text-red-400 border border-red-500/50"
                }`}
              >
                {formState === "idle" && <><Send size={18} /> TRANSMIT_DATA</>}
                {formState === "submitting" && <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Send size={18} /></motion.div> ENCRYPTING...</>}
                {formState === "success" && <><CheckCircle size={18} /> TRANSMISSION_SUCCESSFUL</>}
                {formState === "error" && <><AlertCircle size={18} /> TRANSMISSION_FAILED</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
