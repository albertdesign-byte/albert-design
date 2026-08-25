import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/SiteShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingCompare } from "@/components/sections/pricing/PricingCompare";
import { PricingFooter } from "@/components/sections/pricing/PricingFooter";
import { PricingPlans } from "@/components/sections/pricing/PricingPlans";
import { pricingHero } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Precio",
};

/**
 * Pricing — Figma 106:2878. Hero reuses the home shell (locked viewport,
 * same header) with this page's tag + headline. Plans, comparison, and
 * footer follow the artboard.
 */
export default function PrecioPage() {
  return (
    <SiteShell>
      <HeroSection
        bio={null}
        headline={pricingHero.headline}
        eyebrow={
          <Link
            href="#planes"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-space-4 py-3 font-sans text-[12px] leading-3 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
          >
            <span className="relative size-[18px] shrink-0 overflow-clip">
              <img
                src="/images/pricing/planes-diamond.svg"
                alt=""
                width={18}
                height={18}
                className="size-full"
              />
            </span>
            {pricingHero.eyebrow}
          </Link>
        }
      />

      <PricingPlans />
      <PricingCompare />
      <PricingFooter />
    </SiteShell>
  );
}