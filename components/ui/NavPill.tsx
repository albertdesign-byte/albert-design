"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/content/navigation";
import { cn } from "@/lib/cn";

type NavPillProps = {
  className?: string;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  const pathOnly = href.split("#")[0] || "/";
  if (pathOnly === "/") return false;
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

/** "/" → the Hero's own id; "/#about" → "about"; anything else → null. */
function sectionIdFromHref(href: string): string | null {
  if (href === "/") return "hero";
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? null : href.slice(hashIndex + 1);
}

/** In document order, so scanning stops on the last one already scrolled past. */
const SECTION_IDS = navItems
  .map((item) => sectionIdFromHref(item.href))
  .filter((id): id is string => id !== null);

/** Past this scroll offset the glass panel fades in behind the nav links. */
const GLASS_SCROLL_THRESHOLD = 8;

/** A section becomes "active" once its top scrolls above this line — just
 *  below the fixed pill, so the highlight flips right as a section's
 *  content starts appearing under the nav. */
const ACTIVE_SECTION_LINE_PX = 160;

/** Mobile: dock to the top once the hero's bottom (where the pill sat)
 *  has scrolled up to this line. */
const MOBILE_PIN_LINE_PX = 80;

function useIsScrolled(threshold: number): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return scrolled;
}

/**
 * True after the homepage hero has scrolled far enough that a bottom-docked
 * pill would have passed the top of the screen — then it pins up there.
 * Inner routes have no full-viewport hero, so they start pinned.
 */
function usePastHero(enabled: boolean): boolean {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    const update = () => {
      setPastHero(hero.getBoundingClientRect().bottom <= MOBILE_PIN_LINE_PX);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled]);

  return pastHero;
}

/**
 * Scroll-spy: tracks which of the page's anchor sections is currently under
 * the nav, so the active pill follows scroll position (and, since the same
 * listener fires during the smooth-scroll from a click, follows clicks too)
 * instead of staying stuck on whichever route we last navigated to.
 */
function useActiveSectionId(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const update = () => {
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= ACTIVE_SECTION_LINE_PX) {
          current = el.id;
        }
      }
      setActiveId(current ?? elements[0]!.id);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return activeId;
}

export function NavPill({ className }: NavPillProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useIsScrolled(GLASS_SCROLL_THRESHOLD);
  const pastHero = usePastHero(isHome);
  const activeSectionId = useActiveSectionId(SECTION_IDS);
  const dockAtBottom = isHome && !pastHero;

  return (
    <nav
      aria-label="Primary"
      data-dock={dockAtBottom ? "bottom" : "top"}
      className={cn(
        "fixed top-0 left-1/2 z-50",
        "-translate-x-1/2 translate-y-4 md:translate-y-5 lg:translate-y-6",
        "max-md:data-[dock=bottom]:translate-y-[calc(100dvh-100%-max(1rem,env(safe-area-inset-bottom)))]",
        "flex items-center rounded-pill p-1 shadow-lg ring-1",
        "transition-[transform,background-color,backdrop-filter,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        scrolled
          ? "bg-white/70 shadow-black/[0.08] ring-black/5 backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent shadow-transparent ring-transparent",
        className,
      )}
    >
      {navItems.map((item) => {
        // On the homepage, scroll position drives the highlight; on any
        // other route (e.g. /work/gokei), fall back to the path match.
        const active =
          pathname === "/"
            ? activeSectionId === sectionIdFromHref(item.href)
            : isActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-pill px-2.5 py-2.5 font-chrome text-[11px] leading-none transition-colors md:px-3 md:text-[12px] lg:px-4 lg:py-3",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
              active
                ? "bg-footer text-footer-foreground"
                : "text-foreground hover:bg-muted",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
