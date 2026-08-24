import { BrandMark } from "@/components/brand/BrandMark";
import { NavPill } from "@/components/ui/NavPill";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  className?: string;
};

/**
 * Top chrome: brand · social. NavPill is position:fixed and docks to the
 * bottom of the homepage hero on mobile, then pins to the top after scroll
 * (see components/ui/NavPill.tsx).
 * Server wrapper; NavPill is the only client island.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "grid grid-cols-2 items-center px-space-6 py-space-6 md:grid-cols-3 md:px-space-8 lg:px-space-12",
        className,
      )}
    >
      <BrandMark className="justify-self-start" />

      <NavPill />

      <SocialLinks className="justify-self-end md:col-start-3 md:row-start-1" />
    </header>
  );
}
