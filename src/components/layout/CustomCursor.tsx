"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Softer spring physics for fluid 180-250ms trailing delay
  const springConfig = { stiffness: 90, damping: 22, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch / mobile devices or if user prefers reduced motion
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive") ||
        target.classList.contains("cursor-pointer");

      const isCard =
        target.closest(".card-hover-lift") ||
        target.closest(".group") ||
        target.tagName.toLowerCase() === "article";

      setIsHoveringInteractive(!!isInteractive);
      setIsHoveringCard(!!isCard && !isInteractive);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClickRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Precision Center Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7] pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHoveringInteractive ? 1.4 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* 2. Trailing Radar Target Lock Ring with Continuous Slow Rotating Dashed Border */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Slow, Deliberate Outer Radar Dashed Ring (6s default -> 3.5s hover) */}
        <motion.div
          className={`absolute inset-0 rounded-full border border-dashed transition-all duration-500 ease-out ${
            isHoveringInteractive
              ? "border-[#a855f7] bg-[#a855f7]/15 scale-125"
              : isHoveringCard
              ? "border-[#a855f7]/70 bg-[#a855f7]/5 scale-110"
              : "border-[#a855f7]/40 bg-transparent"
          }`}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: isHoveringInteractive ? 3.5 : 6,
            ease: "linear",
          }}
        />

        {/* Crosshair Cardinal Tick Marks (on card hover) */}
        {isHoveringCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-[1px] h-1.5 bg-[#a855f7]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-[1px] h-1.5 bg-[#a855f7]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-[1px] bg-[#a855f7]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-1.5 h-[1px] bg-[#a855f7]" />
          </motion.div>
        )}
      </motion.div>

      {/* 3. Slow Gentle Click Scan Pulse Effect (450ms) */}
      {clickRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.2, opacity: 0.85 }}
          animate={{ scale: 2.8, opacity: 0 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            setClickRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#a855f7] shadow-[0_0_14px_#a855f7] pointer-events-none z-[9997]"
          style={{
            left: ripple.x,
            top: ripple.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}
    </>
  );
}
