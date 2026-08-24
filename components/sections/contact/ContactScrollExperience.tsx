"use client";

import { useEffect, useRef, useState } from "react";

import { ApprovedScene } from "@/components/sections/contact/ApprovedScene";
import { DeliveryScene } from "@/components/sections/contact/DeliveryScene";
import { RequestScene } from "@/components/sections/contact/RequestScene";
import {
  CONTACT_SCROLL_VH,
  getSceneOpacities,
  getSceneTranslateY,
} from "@/lib/scroll/sceneProgress";
import { usePinnedScrollProgress } from "@/lib/scroll/usePinnedScrollProgress";
import { cn } from "@/lib/cn";

const scenes = [
  { id: "request", Scene: RequestScene },
  { id: "approved", Scene: ApprovedScene },
  { id: "delivery", Scene: DeliveryScene },
] as const;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

/**
 * Pinned scroll storytelling: three scenes dissolve via opacity.
 * Section surface stays panel light — dark tone lives only in the center visuals.
 */
export function ContactScrollExperience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const progress = usePinnedScrollProgress(trackRef);
  const opacities = getSceneOpacities(progress);

  return (
    <div
      ref={trackRef}
      id="contact"
      className="relative"
      style={
        reducedMotion ? undefined : { height: `${CONTACT_SCROLL_VH}vh` }
      }
    >
      <div
        className={cn(
          "flex items-center overflow-hidden rounded-panel bg-panel",
          reducedMotion
            ? "relative h-auto py-space-24"
            : "sticky top-space-2 h-[calc(100svh-1rem)]",
        )}
        aria-label="Experiencia de contacto"
      >
        {reducedMotion ? (
          <div className="flex w-full flex-col gap-space-24">
            <RequestScene />
            <ApprovedScene />
            <DeliveryScene />
          </div>
        ) : (
          <div className="relative w-full">
            {scenes.map(({ id, Scene }, index) => {
              const opacity = opacities[index] ?? 0;
              const translateY = getSceneTranslateY(opacity);
              const active = opacity > 0.05;

              return (
                <div
                  key={id}
                  className="absolute inset-x-0 top-1/2 w-full will-change-[opacity,transform]"
                  style={{
                    opacity,
                    transform: `translate3d(0, calc(-50% + ${translateY}px), 0)`,
                    pointerEvents: active ? "auto" : "none",
                  }}
                  aria-hidden={!active}
                >
                  <Scene />
                </div>
              );
            })}
            <div className="invisible" aria-hidden>
              <RequestScene />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
