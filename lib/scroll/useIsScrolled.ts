"use client";

import { useEffect, useState } from "react";

/** Past this point the nav glass fades in. Tiny jitter at the top stays clear. */
const SCROLLED_PX = 8;

/**
 * True once the page has left the top. SSR and first paint stay `false`
 * so the nav matches the hero until the listener runs.
 */
export function useIsScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > SCROLLED_PX);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrolled;
}
