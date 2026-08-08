"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiTryhackme, SiHackthebox } from "react-icons/si";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate encryption & packet transmission
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => setFormState("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-[#0a0810]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#a855f7] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>// SECURE_COMMUNICATION_CHANNEL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white tracking-tight">
            INITIALIZE CONNECTION<span className="text-[#a855f7]">.</span>
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[#9b8fa0] font-sans text-base leading-relaxed">
              Whether you want to discuss potential internship opportunities, security research collaborations, or technical projects, feel free to transmit a message or reach out directly.
            </p>

            {/* Email Card */}
            <a
              href="mailto:guruprasannargp2006@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.08] border-t-white/20 bg-[#0f0b18]/85 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/5 transition-all group shadow-lg"
            >
              <div className="p-3.5 rounded-lg bg-black/50 border border-white/10 text-[#a855f7] group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <div className="font-mono text-xs text-[#9b8fa0] uppercase tracking-wider">PRIMARY_EMAIL</div>
                <div className="font-mono text-base font-bold text-white group-hover:text-[#c4b5fd] transition-colors">
                  guruprasannargp2006@gmail.com
                </div>
              </div>
            </a>

            {/* Social Grid */}
            <div className="pt-2">
              <div className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4">
                SECURE_NETWORKS // PROFILES
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/rgp040906"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-lg border border-white/10 bg-[#0f0b18] text-gray-300 hover:text-white hover:border-white/40 transition-all flex items-center gap-2"
                  title="GitHub"
                >
                  <FaGithub size={20} />
                  <span className="font-mono text-xs font-bold">GitHub</span>
                </a>
                <a
                  href="https://leetcode.com/u/Rgprasanna/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-lg border border-white/10 bg-[#0f0b18] text-gray-300 hover:text-[#FFA116] hover:border-[#FFA116]/40 transition-all flex items-center gap-2"
                  title="LeetCode"
                >
                  <SiLeetcode size={20} />
                  <span className="font-mono text-xs font-bold">LeetCode</span>
                </a>
                <a
                  href="https://tryhackme.com/p/XyPhor"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-lg border border-white/10 bg-[#0f0b18] text-gray-300 hover:text-[#c4b5fd] hover:border-[#a855f7]/50 transition-all flex items-center gap-2"
                  title="TryHackMe"
                >
                  <SiTryhackme size={20} />
                  <span className="font-mono text-xs font-bold">TryHackMe</span>
                </a>
                <a
                  href="https://app.hackthebox.com/profile/Rgprasanna"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-lg border border-white/10 bg-[#0f0b18] text-gray-300 hover:text-[#9FEF00] hover:border-[#9FEF00]/40 transition-all flex items-center gap-2"
                  title="Hack The Box"
                >
                  <SiHackthebox size={20} />
                  <span className="font-mono text-xs font-bold">HTB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/guru-prasanna-r-492b66327"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-lg border border-white/10 bg-[#0f0b18] text-gray-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all flex items-center gap-2"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} />
                  <span className="font-mono text-xs font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/[0.08] border-t-white/20 bg-[#0f0b18]/90 p-8 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-6 font-mono text-sm font-bold text-[#a855f7]">
              <Terminal size={18} />
              <span>SECURE_PAYLOAD_TRANSMITTER</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-[#9b8fa0] mb-2 uppercase tracking-wider">
                  NAME // SENDER_ALIAS
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  disabled={formState === "submitting"}
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all disabled:opacity-50"
                  placeholder="e.g. Alex Mercer"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-[#9b8fa0] mb-2 uppercase tracking-wider">
                  CONTACT // EMAIL_ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={formState === "submitting"}
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all disabled:opacity-50"
                  placeholder="e.g. alex@enterprise.sec"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#9b8fa0] mb-2 uppercase tracking-wider">
                  PAYLOAD // MESSAGE_BODY
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  disabled={formState === "submitting"}
                  className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white font-sans text-sm focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none disabled:opacity-50"
                  placeholder="Type your transmission message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={formState !== "idle"}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-mono text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2 ${
                  formState === "idle"
                    ? "btn-violet-gradient cursor-pointer"
                    : formState === "submitting"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                    : formState === "success"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                {formState === "idle" && (
                  <>
                    <Send size={16} />
                    <span>TRANSMIT DATA</span>
                  </>
                )}
                {formState === "submitting" && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send size={16} />
                    </motion.div>
                    <span>ENCRYPTING & TRANSMITTING...</span>
                  </>
                )}
                {formState === "success" && (
                  <>
                    <CheckCircle size={16} />
                    <span>TRANSMISSION SUCCESSFUL</span>
                  </>
                )}
                {formState === "error" && (
                  <>
                    <AlertCircle size={16} />
                    <span>TRANSMISSION FAILED</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
