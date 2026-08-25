"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { workPreviewIntervalMs, type WorkSlide } from "@/content/latest-work";
import { cn } from "@/lib/cn";

type WorkPreviewProps = {
  slides: readonly WorkSlide[];
  className?: string;
};

/**
 * Desktop hover preview (Figma 500×668). While the row stays hovered,
 * slides advance every 3s. Dots track the active frame.
 */
export function WorkPreview({ slides, className }: WorkPreviewProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, workPreviewIntervalMs);

    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-[668px] w-[500px] overflow-hidden rounded-[16px]",
        className,
      )}
    >
      {slides.map((slide, slideIndex) => (
        <Image
          key={`${slide.src}-${slideIndex}`}
          src={slide.src}
          alt=""
          width={slide.width}
          height={slide.height}
          sizes="500px"
          priority={slideIndex === 0}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-top",
            !reduceMotion && "transition-opacity duration-500 ease-out",
            slideIndex === index
              ? "z-[1] opacity-100"
              : "z-0 opacity-0",
          )}
        />
      ))}
      {slides.length > 1 ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-[7px] z-10 flex justify-center">
          <div
            className={cn(
              "flex h-4 items-center gap-1.5 rounded-full bg-white px-1",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset]",
              "backdrop-blur-[6px]",
            )}
          >
            {slides.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={cn(
                  "size-2 shrink-0 rounded-full",
                  dotIndex === index ? "bg-primary" : "bg-[#d9d9d9]",
                )}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
