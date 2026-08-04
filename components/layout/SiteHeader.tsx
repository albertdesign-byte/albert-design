import { BrandMark } from "@/components/brand/BrandMark";
import { NavPill } from "@/components/ui/NavPill";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  className?: string;
};

/**
 * Top chrome: brand · centered nav pill · social.
 * Server wrapper; NavPill is the only client island.
 */
export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "grid grid-cols-3 items-center px-space-6 py-space-6 md:px-space-12",
        className,
      )}
    >
      <BrandMark className="justify-self-start" />

      <NavPill className="col-span-3 row-start-2 mt-space-3 justify-self-center md:col-span-1 md:col-start-2 md:row-start-1 md:mt-0" />

      <SocialLinks className="col-start-3 row-start-1 justify-self-end" />
    </header>
  );
}
