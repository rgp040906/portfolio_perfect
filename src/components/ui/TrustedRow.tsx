"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "GOOGLE", tag: "Security Cert" },
  { name: "IBM", tag: "Infosec" },
  { name: "CISCO", tag: "Network Sec" },
  { name: "NPTEL", tag: "Ethical Hacking" },
  { name: "MICROSOFT", tag: "Identity & Compliance" },
  { name: "RED HAT", tag: "Linux Admin" },
  { name: "OPSWAT", tag: "Critical Infrastructure" },
  { name: "MASTERCARD", tag: "Job Sim" },
  { name: "TATA", tag: "IAM Analyst Sim" },
  { name: "DELOITTE", tag: "Cyber Sim" },
];

export default function TrustedRow() {
  return (
    <div className="w-full border-y border-white/[0.08] bg-black/40 py-8 my-12">
      <div className="container mx-auto px-6">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">
          TRAINED & CERTIFIED ACROSS ENTERPRISE SECURITY PLATFORMS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center p-3 rounded-lg border border-transparent hover:border-[#39FF88]/30 hover:bg-[#39FF88]/5 transition-all cursor-default"
            >
              <span className="font-mono font-bold text-sm md:text-base text-gray-400 group-hover:text-[#39FF88] transition-colors tracking-wider">
                {brand.name}
              </span>
              <span className="font-mono text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors mt-0.5">
                {brand.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
