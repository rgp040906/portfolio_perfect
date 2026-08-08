"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

const sections = [
  { id: "home", label: "01_PRIMARY_HERO" },
  { id: "about", label: "02_PROFILE_TELEMETRY" },
  { id: "certifications", label: "03_CREDENTIAL_VERIFY" },
  { id: "skills", label: "04_TECHNICAL_ARSENAL" },
  { id: "projects", label: "05_DEPLOYMENTS_SHOWCASE" },
  { id: "security-lab", label: "06_VULNERABILITY_LABS" },
  { id: "experience", label: "07_WORK_CHRONOLOGY" },
  { id: "education", label: "08_ACADEMIC_BACKGROUND" },
  { id: "platforms", label: "09_ONLINE_BENCHMARKS" },
  { id: "contact", label: "10_INITIALIZE_COMMUNICATION" },
];

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSector, setCurrentSector] = useState("01_PRIMARY_HERO");
  const [flashTag, setFlashTag] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.8, // Heavy, fluid, cinematic scroll pacing
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85, // Weightier scroll feel
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Handle scroll progress & section tracking
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(window.scrollY / scrollHeight);
      }

      // Check current visible section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (currentSector !== section.label) {
              setCurrentSector(section.label);
              setFlashTag(true);
              setTimeout(() => setFlashTag(false), 2000);
            }
            break;
          }
        }
      }
    };

    lenis.on("scroll", handleScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intercept internal anchor link clicks for Lenis smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        const targetEl = document.querySelector(anchor.hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, { offset: -60, duration: 1.8 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, [currentSector]);

  return (
    <>
      {/* Top Scroll Progress Line Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#a855f7] z-[1000] origin-left shadow-[0_0_12px_#a855f7] pointer-events-none transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Fixed Bottom-Left Live Sector Readout */}
      <div className="fixed bottom-6 left-6 z-[990] hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#0a0810]/95 border border-[#a855f7]/30 font-mono text-[11px] text-[#a855f7] shadow-2xl backdrop-blur-xl pointer-events-none">
        <span className={`w-2 h-2 rounded-full bg-[#a855f7] ${flashTag ? "animate-ping" : "animate-pulse"}`} />
        <span className="text-[#9b8fa0]">SECTOR:</span>
        <span className={`font-bold transition-all duration-500 ${flashTag ? "text-white scale-105" : "text-[#c4b5fd]"}`}>
          //{currentSector}
        </span>
      </div>

      {children}
    </>
  );
}
