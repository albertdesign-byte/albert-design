"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { greeting } from "@/content/greeting";
import { cn } from "@/lib/cn";

type GreetingSliderProps = {
  slides: (typeof greeting)["slides"];
  intervalMs: number;
  className?: string;
};

/**
 * Autoplaying carousel beside the contact form (Figma 72:13968, "Hero" ..
 * "Hero-6"). Dot-paginated, no prev/next icons — each export was re-rendered
 * with the chevron layer hidden (only slide 1 actually had one; the rest
 * never did, see content/greeting.ts). Autoplay pauses on hover so it
 * doesn't fight a visitor who's actively browsing the dots.
 */
export function GreetingSlider({
  slides,
  intervalMs,
  className,
}: GreetingSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [paused, slides.length, intervalMs]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      {slides.map((item, itemIndex) => (
        <Image
          key={item.id}
          src={item.image.src}
          alt={item.image.alt}
          fill
          priority={itemIndex === 0}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={cn(
            "object-cover transition-opacity duration-700 ease-out",
            itemIndex === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2">
        {slides.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Ir a la imagen ${itemIndex + 1}`}
            aria-current={itemIndex === index}
            onClick={() => setIndex(itemIndex)}
            className="p-1.5 focus-visible:outline-none"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full bg-white shadow-[0_0_1px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out",
                itemIndex === index ? "w-6 opacity-100" : "w-1.5 opacity-50",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
