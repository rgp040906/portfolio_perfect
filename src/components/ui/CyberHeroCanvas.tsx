"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  type: "server" | "node" | "threat";
}

export default function CyberHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const nodesCount = 28;
    const nodes: Node[] = [];

    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        baseAlpha: Math.random() * 0.6 + 0.3,
        type: i === 5 ? "threat" : i % 6 === 0 ? "server" : "node",
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Radar Geometry Center
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.42;

      // Radar Concentric Rings (Low Opacity Green/White)
      ctx.strokeStyle = "rgba(57, 255, 106, 0.08)";
      ctx.lineWidth = 1;
      for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (maxRadius / 3) * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Radar Conic Sweep Gradient (Strict Green -> Transparent)
      angle += 0.015;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      const sweepGradient = ctx.createConicGradient(0, 0, 0);
      sweepGradient.addColorStop(0, "rgba(57, 255, 106, 0.28)");
      sweepGradient.addColorStop(0.12, "rgba(57, 255, 106, 0.06)");
      sweepGradient.addColorStop(0.3, "transparent");
      sweepGradient.addColorStop(1, "transparent");

      ctx.fillStyle = sweepGradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, 0, Math.PI * 0.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Render Node Connections (Green Lines)
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.25;
            ctx.strokeStyle = `rgba(57, 255, 106, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Render Nodes (All Green, 1 Alert Red Dot)
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.type === "server") {
          ctx.fillStyle = "#39ff6a";
          ctx.shadowColor = "rgba(57, 255, 106, 0.8)";
          ctx.shadowBlur = 10;
        } else if (node.type === "threat") {
          ctx.fillStyle = "rgba(255, 77, 77, 0.9)";
          ctx.shadowColor = "rgba(255, 77, 77, 0.7)";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(57, 255, 106, ${node.baseAlpha})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Center Core Beacon
      ctx.strokeStyle = "rgba(57, 255, 106, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#39ff6a";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden rounded-xl border border-[#39ff6a]/25 bg-[#080b09]/90 shadow-[inset_0_0_20px_rgba(57,255,106,0.08)]">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Top Left Sharp Telemetry Label */}
      <div className="absolute top-4 left-4 font-mono text-[11px] font-bold text-[#39ff6a] bg-[#050706]/90 px-3 py-1.5 rounded border border-[#39ff6a]/30 flex items-center gap-2 shadow-md">
        <span className="w-2 h-2 rounded-full bg-[#39ff6a] animate-pulse"></span>
        <span>TELEMETRY_FEED // ACTIVE</span>
      </div>

      {/* Bottom Right Latency Readout */}
      <div className="absolute bottom-4 right-4 font-mono text-[10px] font-bold text-[#39ff6a]/90 bg-[#050706]/90 px-3 py-1.5 rounded border border-[#39ff6a]/30 shadow-md">
        NODES: 28 | LATENCY: 12ms
      </div>
    </div>
  );
}
