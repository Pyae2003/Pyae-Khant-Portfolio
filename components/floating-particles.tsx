"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "16%", size: 5, duration: 7, delay: 0 },
  { left: "22%", top: "72%", size: 3, duration: 8, delay: 1.4 },
  { left: "43%", top: "22%", size: 4, duration: 9, delay: 0.8 },
  { left: "69%", top: "68%", size: 5, duration: 10, delay: 2.2 },
  { left: "84%", top: "20%", size: 3, duration: 8, delay: 0.5 },
  { left: "94%", top: "54%", size: 4, duration: 11, delay: 1.7 },
] as const;

export function FloatingParticles() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-primary/50 shadow-[0_0_18px_rgba(250,204,21,0.4)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={
            reduceMotion
              ? { opacity: 0.35 }
              : { y: [0, -18, 0], x: [0, index % 2 === 0 ? 8 : -8, 0], opacity: [0.25, 0.8, 0.25] }
          }
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
