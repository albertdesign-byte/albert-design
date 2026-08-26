"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

import { ServicesMegaMenu } from "@/components/ui/ServicesMegaMenu";
import { navCtas, navItems, servicesMenu } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { useIsScrolled } from "@/lib/scroll/useIsScrolled";

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

/** A section becomes "active" once its top scrolls above this line — just
 *  below the fixed pill, so the highlight flips right as a section's
 *  content starts appearing under the nav. */
const ACTIVE_SECTION_LINE_PX = 160;

/** Mobile: dock to the top once the hero's bottom (where the pill sat)
 *  has scrolled up to this line. */
const MOBILE_PIN_LINE_PX = 80;

/**
 * True after the homepage hero has scrolled far enough that a bottom-docked
 * pill would have passed the top of the screen — then it pins up there.
 * Inner routes without a full-viewport `#hero` start pinned.
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

/** True when hover is a real pointing device — not a touch screen that
 *  synthesizes mouseenter after a tap (which would fight tap-to-toggle). */
function useHoverOpen(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return enabled;
}

export function NavPill({ className }: NavPillProps) {
  const pathname = usePathname();
  const hasViewportHero = pathname === "/" || pathname === "/precio";
  const pastHero = usePastHero(hasViewportHero);
  const activeSectionId = useActiveSectionId(SECTION_IDS);
  const dockAtBottom = hasViewportHero && !pastHero;
  const hoverOpen = useHoverOpen();
  const scrolled = useIsScrolled();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesPathname, setServicesPathname] = useState(pathname);
  const menuId = "services-mega-menu";
  const closeTimer = useRef<number>(0);

  if (pathname !== servicesPathname) {
    setServicesPathname(pathname);
    setServicesOpen(false);
  }

  const openServices = () => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(false);
  };

  const scheduleCloseServices = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 160);
  };

  const onServicesHoverEnter = hoverOpen ? openServices : undefined;
  const onServicesHoverLeave = hoverOpen ? scheduleCloseServices : undefined;

  useEffect(() => {
    if (!servicesOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!document.getElementById(menuId)?.contains(target)) {
        const trigger = document.getElementById(`${menuId}-trigger`);
        if (!trigger?.contains(target)) setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [servicesOpen, menuId]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const linkClass = (active: boolean) =>
    cn(
      "inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-full px-5 font-sans text-[11px] leading-[12px] transition-colors md:text-[12px]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
      active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-white/60",
    );

  return (
    <nav
      aria-label="Primary"
      data-dock={dockAtBottom ? "bottom" : "top"}
      className={cn(
        "group/nav z-50",
        // No translate on mobile: a transform on this node would make the
        // mega-menu's `fixed` inset relative to the pill, not the viewport.
        "max-md:fixed max-md:inset-x-0 max-md:top-4 max-md:z-50 max-md:flex max-md:justify-center",
        "max-md:data-[dock=bottom]:top-auto max-md:data-[dock=bottom]:bottom-[max(1rem,env(safe-area-inset-bottom))]",
        "md:relative",
        className,
      )}
    >
      {servicesOpen ? (
        <ServicesMegaMenu
          id={menuId}
          onMouseEnter={onServicesHoverEnter}
          onMouseLeave={onServicesHoverLeave}
        />
      ) : null}
      <div
        onMouseLeave={onServicesHoverLeave}
        className="relative z-10 flex max-md:max-w-[calc(100%-2rem)] items-center gap-0 overflow-visible rounded-full p-1 md:gap-3 min-[1440px]:gap-6"
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-full bg-white/50 backdrop-blur-[6px] transition-opacity duration-300 ease-out motion-reduce:transition-none",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="relative z-10 flex items-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
          {navItems.map((item, index) => {
            const active =
              pathname === "/"
                ? activeSectionId === sectionIdFromHref(item.href)
                : isActive(pathname, item.href);

            return (
              <Fragment key={item.href}>
                {index === 1 ? (
                  <button
                    id={`${menuId}-trigger`}
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls={menuId}
                    aria-haspopup="menu"
                    onMouseEnter={onServicesHoverEnter}
                    onClick={() => {
                      window.clearTimeout(closeTimer.current);
                      if (hoverOpen) {
                        setServicesOpen(true);
                        return;
                      }
                      setServicesOpen((open) => !open);
                    }}
                    className={cn(
                      "relative z-10 inline-flex h-10 shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-5 font-sans text-[11px] leading-[12px] transition-colors md:text-[12px]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
                      servicesOpen
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-white/60",
                    )}
                  >
                    {servicesMenu.label}
                    <span className="relative size-3.5 shrink-0 overflow-clip md:size-4">
                      <img
                        src="/images/nav/chevron.svg"
                        alt=""
                        width={16}
                        height={16}
                        className={cn(
                          "size-full",
                          servicesOpen && "brightness-0 invert",
                        )}
                      />
                    </span>
                  </button>
                ) : null}
                <Link
                  href={item.href}
                  aria-current={active && !servicesOpen ? "page" : undefined}
                  onMouseEnter={hoverOpen ? closeServices : undefined}
                  className={linkClass(active && !servicesOpen)}
                >
                  {item.label}
                </Link>
              </Fragment>
            );
          })}
        </div>

        <div className="relative z-10 hidden items-center gap-2 lg:flex min-[1440px]:gap-4">
          {navCtas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              {...(cta.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onMouseEnter={hoverOpen ? closeServices : undefined}
              className={cn(
                "inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 font-sans text-[12px] leading-6 transition-opacity hover:opacity-90 min-[1440px]:px-6",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25 focus-visible:ring-offset-2",
                cta.variant === "primary"
                  ? "bg-primary text-primary-foreground"
                  : "bg-[#f0f0f0] text-[#020507]",
              )}
            >
              {cta.label}
              <span className="relative size-5 shrink-0 overflow-clip">
                <img
                  src={
                    cta.icon === "calendar"
                      ? "/images/nav/calendar.svg"
                      : "/images/nav/chat.svg"
                  }
                  alt=""
                  width={20}
                  height={20}
                  className="size-full"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
