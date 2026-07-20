"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const bootLines = [
    "INITIALIZING SECURE KERNEL...",
    "LOADING MODULES: [ETHICAL_HACKING, WEB_SECURITY, PENTESTING]",
    "ESTABLISHING ENCRYPTED CONNECTION...",
    "BYPASSING FIREWALL...",
    "ACCESS GRANTED.",
    "WELCOME, GUEST."
  ];

  useEffect(() => {
    // Check reduced motion or if user already visited
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (prefersReducedMotion || hasVisited) {
      setIsVisible(false);
      onComplete();
      return;
    }

    sessionStorage.setItem("hasVisited", "true");

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setLines((prev) => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500); // Wait for exit animation
        }, 800);
      }
    }, 400);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-background flex flex-col justify-center px-8 sm:px-24 font-mono text-cyan-400 text-sm sm:text-lg"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={() => {
          setIsVisible(false);
          onComplete();
        }}
      >
        <div className="max-w-3xl">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-2"
            >
              <span className="text-foreground mr-2">{">"}</span>
              {line}
            </motion.div>
          ))}
          {lines.length < bootLines.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-cyan-400 mt-2"
            />
          )}
        </div>
        <div className="absolute bottom-8 left-8 sm:left-24 text-foreground/50 text-xs">
          Click anywhere to skip
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
