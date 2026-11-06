"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

type AnimationPhase = "hidden" | "entering" | "exiting";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const [phase, setPhase] = useState<AnimationPhase>("hidden");

  const characters = Array.from(title);

  // Animation settings
  const stagger = 45;
  const duration = 280;
  const holdDuration = 1200;
  const pauseDuration = 700;

  useEffect(() => {
    let nextTimer: ReturnType<typeof setTimeout>;
    let isCancelled = false;

    const enterTime = characters.length * stagger;
    const exitTime = characters.length * stagger;

    const animate = () => {
      if (isCancelled) return;

      // 1. Show characters one by one
      setPhase("entering");

      // 2. Wait until all characters appear
      nextTimer = setTimeout(() => {
        if (isCancelled) return;

        // 3. Hide characters one by one
        setPhase("exiting");

        // 4. Wait until all characters disappear
        nextTimer = setTimeout(() => {
          if (isCancelled) return;

          // 5. Keep the title space empty
          setPhase("hidden");

          // 6. Restart animation
          nextTimer = setTimeout(() => {
            animate();
          }, pauseDuration);

        }, exitTime + duration);

      }, enterTime + holdDuration);
    };

    const startTimer: ReturnType<typeof setTimeout> = setTimeout(animate, 100);

    return () => {
      isCancelled = true;
      clearTimeout(startTimer);
      clearTimeout(nextTimer);
    };
  }, [title,characters.length]);

  return (
    <div
      className={cn(
        "relative max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {/* Eyebrow */}
      <div
        className={cn(
          "mb-5 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-7 bg-primary/70" />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>

        {align === "center" && (
          <span className="h-px w-7 bg-primary/70" />
        )}
      </div>

      {/* Animated Title */}
      <h2
        aria-label={title}
        className="text-balance text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
      >
        <span aria-hidden="true">
          {characters.map((char, index) => {
            const isVisible = phase === "entering";

            const delay =
              phase === "entering"
                ? index * stagger
                : phase === "exiting"
                  ? (characters.length - index - 1) * stagger
                  : 0;

            return (
              <span
                key={`${index}-${char}`}
                className="inline-block transition-[opacity,transform] duration-[280ms] ease-out motion-reduce:transition-none"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(8px)",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </span>
      </h2>

      {/* Description */}
      <p
        className={cn(
          "mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8",
          align === "center" && "mx-auto"
        )}
      >
        {description}
      </p>

      {/* Decorative Accent */}
      <div
        className={cn(
          "mt-7 flex items-center gap-1.5",
          align === "center" && "justify-center"
        )}
        aria-hidden="true"
      >
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="h-px w-8 bg-border" />
      </div>
    </div>
  );
}