import { BrandMark } from "@/components/brand/BrandMark";
import { MobileNav } from "@/components/ui/MobileNav";
import { NavPill } from "@/components/ui/NavPill";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  className?: string;
};

/**
 * Top chrome: wordmark + glass nav (Figma 108:1350 desktop,
 * 114:1947 Menu-1/2/3 on mobile and tablet).
 *
 * Desktop (lg+): fixed wordmark + pill. Mobile/tablet: logo+hamburger
 * pill and a sticky WhatsApp CTA — see MobileNav.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <>
      <div className="hidden h-[104px] shrink-0 lg:block" aria-hidden />
      <div className="h-[94px] shrink-0 lg:hidden" aria-hidden />
      <header
        className={cn(
          "relative z-50 hidden items-center justify-between lg:fixed lg:inset-x-2 lg:top-2 lg:flex lg:h-[104px] lg:px-10",
          className,
        )}
      >
        <BrandMark className="relative z-10 shrink-0" />
        <NavPill />
      </header>
      <MobileNav />
    </>
  );
}
