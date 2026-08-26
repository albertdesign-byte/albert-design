import Link from "next/link";

import { footer } from "@/content/footer";
import { pricingFooter } from "@/content/pricing";

/**
 * Pricing close (Figma 108:1270): dark panel, year + wordmark, then a
 * centered subscription line and a white pill CTA.
 */
export function PricingFooter() {
  return (
    <section className="overflow-clip rounded-[16px] bg-footer text-footer-foreground lg:h-[730px]">
      <div className="mx-auto flex h-full w-full max-w-[1340px] flex-col px-space-6 py-space-12 md:px-space-8 lg:px-space-12 lg:py-[99px]">
        <div className="flex w-full items-end justify-between">
          <p className="min-w-0 flex-1 font-chrome text-[11px] leading-[16.5px]">
            {footer.year}
          </p>
          <span className="relative mx-auto block h-5 w-[118px] shrink-0 overflow-clip">
            <img
              src="/images/pricing/albeeert-white.svg"
              alt="albeeert"
              width={118}
              height={20}
              className="size-full"
            />
          </span>
          <div className="min-w-0 flex-1" aria-hidden />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3 py-space-24 md:py-space-16 lg:py-0">
          <p className="max-w-[648px] text-center font-sans text-[clamp(1.25rem,3vw,2rem)] leading-[1.48] text-[#828283]">
            {pricingFooter.body}
          </p>
          <Link
            href={pricingFooter.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-space-4 rounded-full bg-background px-6 py-3 font-sans text-[16px] leading-6 text-footer transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-footer"
          >
            {pricingFooter.cta.label}
            <span className="relative size-6 shrink-0 overflow-clip">
              <img
                src="/images/pricing/chat.svg"
                alt=""
                width={24}
                height={24}
                className="size-full"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}