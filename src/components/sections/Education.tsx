"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const StatBox = ({ value, label, isString = false, colorClass = "text-cyan-400" }: { value: number | string, label: string, isString?: boolean, colorClass?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isString && typeof value === 'number' && isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(10, Math.floor(duration / value));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, isString]);

  return (
    <div ref={ref} className="text-center p-6 glass rounded-xl border border-card-border flex flex-col justify-center min-h-[140px]">
      <div className={`text-3xl md:text-4xl lg:text-5xl font-bold font-mono ${colorClass} mb-2 break-words`}>
        {isString ? value : `${count}+`}
      </div>
      <div className="text-foreground/70 font-medium uppercase tracking-wider text-xs md:text-sm">{label}</div>
    </div>
  );
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-2">Education</h2>
              <div className="w-20 h-1 bg-gradient-accent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl border border-card-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <GraduationCap size={120} />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 rounded-full text-sm font-mono mb-4">
                  2024 - 2028
                </span>
                <h3 className="text-2xl font-bold mb-2">B.E. Computer Science and Engineering</h3>
                <h4 className="text-xl text-violet-400 mb-4">(Cyber Security)</h4>
                <p className="text-foreground/70 mb-6">Sri Krishna College of Engineering and Technology, Coimbatore, Tamil Nadu</p>
                
                <div className="pt-6 border-t border-card-border">
                  <div className="flex items-center gap-2 mb-4 text-foreground/90 font-semibold">
                    <BookOpen size={18} className="text-cyan-400" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Ethical Hacking", "Classical Cryptography", "Cyber Law & Digital Forensics", "Machine Learning", "IT Infrastructure Auditing", "Security Assessment and Risk Analysis", "Web Exploitation and Defence", "Cloud Security", "Cloud Infrastructure and Services Management"].map(course => (
                      <span key={course} className="px-3 py-1 bg-background/50 border border-card-border rounded text-sm text-foreground/80">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-2">By The Numbers</h2>
              <div className="w-20 h-1 bg-gradient-accent"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatBox value={187} label="LeetCode Solved" colorClass="text-[#FFA116]" />
              <StatBox value="ADEPT" label="TryHackMe Rank" isString={true} colorClass="text-white" />
              <StatBox value="PROFILE" label="Hack The Box" isString={true} colorClass="text-[#9FEF00]" />
              <StatBox value={30} label="CTF Challenges" colorClass="text-violet-400" />
              <StatBox value={50} label="Security Labs" colorClass="text-cyan-400" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-foreground/50 text-sm">
                Track my progress on <a href="https://github.com/rgp040906" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub</a> and <a href="#" className="text-violet-400 hover:underline">TryHackMe</a>.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
