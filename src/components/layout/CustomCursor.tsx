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

  // Smooth trailing spring physics for the target lock ring
  const springConfig = { stiffness: 180, damping: 18, mass: 0.4 };
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
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80] pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.6 : isHoveringInteractive ? 1.4 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* 2. Trailing Radar Target Lock Ring with Continuous Rotating Dashed Border */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Rotating Outer Radar Dashed Ring (Signature Touch) */}
        <motion.div
          className={`absolute inset-0 rounded-full border border-dashed transition-all duration-300 ${
            isHoveringInteractive
              ? "border-[#4ade80] bg-[#4ade80]/15 scale-125"
              : isHoveringCard
              ? "border-[#4ade80]/70 bg-[#4ade80]/5 scale-110"
              : "border-[#4ade80]/40 bg-transparent"
          }`}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: isHoveringInteractive ? 2 : 6,
            ease: "linear",
          }}
        />

        {/* Crosshair Cardinal Tick Marks (on card hover) */}
        {isHoveringCard && (
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-[1px] h-1.5 bg-[#4ade80]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-[1px] h-1.5 bg-[#4ade80]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1.5 h-[1px] bg-[#4ade80]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-1.5 h-[1px] bg-[#4ade80]" />
          </div>
        )}
      </motion.div>

      {/* 3. Click Scan Ripple Effect */}
      {clickRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.2, opacity: 0.9 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onAnimationComplete={() => {
            setClickRipples((prev) => prev.filter((r) => r.id !== ripple.id));
          }}
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#4ade80] shadow-[0_0_12px_#4ade80] pointer-events-none z-[9997]"
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
