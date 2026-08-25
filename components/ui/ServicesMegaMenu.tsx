import Link from "next/link";

import { ServiceIcon } from "@/components/ui/ServiceIcons";
import { servicesMenu } from "@/content/navigation";
import { cn } from "@/lib/cn";

type ServicesMegaMenuProps = {
  id: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

/**
 * Servicios sheet (Figma 96:2632 on desktop): one liquid-glass panel.
 * The Servicios chip lives in the nav and sits on top of this panel;
 * padding clears the pill so columns never sit under it.
 *
 * On mobile, when the nav is docked at the bottom of the hero
 * (`group-data-[dock=bottom]/nav`), the sheet grows upward.
 */
export function ServicesMegaMenu({
  id,
  onMouseEnter,
  onMouseLeave,
}: ServicesMegaMenuProps) {
  return (
    <div
      id={id}
      role="menu"
      aria-label="Servicios"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        // Viewport-fixed. Top: 8px from the window (top-2).
        // Sides: 16px from the window (left-4/right-4) so 8px of the hero
        // shows on each side. left-2 matches the 8px shell, so the white
        // glass sits flush with the hero and the side gap disappears.
        "fixed top-2 left-4 right-4 z-0 w-auto max-w-none translate-x-0",
        "max-md:group-data-[dock=bottom]/nav:bottom-[max(1rem,env(safe-area-inset-bottom))]",
      )}
    >
      <div
        className={cn(
          "overflow-y-auto overscroll-contain rounded-[18px] bg-white/80",
          "max-h-[calc(100dvh-1.5rem)] lg:h-[642px] lg:max-h-[642px] lg:overflow-clip",
          "shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.12),0_8px_40px_rgba(19,20,23,0.08)]",
          "ring-1 ring-white/50 backdrop-blur-[18px] backdrop-saturate-150",
        )}
      >
        <div
          className={cn(
            "grid grid-cols-1 pt-14 pb-4 md:grid-cols-3 md:pt-[101px] md:pb-6 lg:h-full lg:pb-0",
            "max-md:group-data-[dock=bottom]/nav:pt-4 max-md:group-data-[dock=bottom]/nav:pb-16",
          )}
        >
          {servicesMenu.columns.map((column) => (
            <div key={column.heading} className="flex flex-col">
              <p className="px-4 py-3 font-sans text-[14px] leading-[1.4] text-label uppercase">
                {column.heading}
              </p>
              {column.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  role="menuitem"
                  className="mx-2 flex flex-col gap-2 rounded-[12px] px-3 py-3 transition-colors hover:bg-white/70 focus-visible:bg-white/70 focus-visible:outline-none active:bg-white/70"
                >
                  <ServiceIcon name={item.icon} />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="flex flex-wrap items-center gap-1">
                      <span className="font-sans text-[14px] font-semibold leading-[1.4] text-foreground">
                        {item.title}
                      </span>
                      {item.popular ? (
                        <span className="inline-flex items-center rounded-[2px] bg-foreground px-1 py-0.5 font-sans text-[8px] leading-3 text-white">
                          Popular
                        </span>
                      ) : null}
                    </span>
                    <span className="font-sans text-[14px] leading-[1.4] text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
