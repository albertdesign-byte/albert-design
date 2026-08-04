"use client";

import { type RefObject, useEffect, useState } from "react";

import { clamp01 } from "@/lib/scroll/sceneProgress";

/**
 * Progress 0→1 while `trackRef` scrolls through the viewport (sticky pin pattern).
 * Decoupled from any specific section content.
 */
export function usePinnedScrollProgress(
  trackRef: RefObject<HTMLElement | null>,
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const measure = () => {
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      setProgress(clamp01(-rect.top / scrollable));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [trackRef]);

  return progress;
}
