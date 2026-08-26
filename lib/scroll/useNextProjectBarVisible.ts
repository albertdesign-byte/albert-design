"use client";

import { useEffect, useState } from "react";

export const NEXT_PROJECT_SENTINEL_ID = "next-project";

/**
 * Sticky "siguiente proyecto" bar: past halfway down the page, and hidden
 * again once the in-page next-project block (`#next-project`) is on screen.
 * Stays false when that sentinel is missing (placeholder work pages).
 */
export function useNextProjectBarVisible(
  sentinelId: string = NEXT_PROJECT_SENTINEL_ID,
): boolean {
  const [hasSentinel, setHasSentinel] = useState(false);
  const [pastHalfway, setPastHalfway] = useState(false);
  const [endInView, setEndInView] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPastHalfway(max > 0 ? window.scrollY / max > 0.5 : false);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const el = document.getElementById(sentinelId);
    setHasSentinel(Boolean(el));
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEndInView(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [sentinelId]);

  return hasSentinel && pastHalfway && !endInView;
}
