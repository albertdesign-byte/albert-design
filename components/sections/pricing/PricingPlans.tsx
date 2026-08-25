import Link from "next/link";

import { pricingPlans } from "@/content/pricing";
import { cn } from "@/lib/cn";

function CheckIcon({ className }: { className?: string }) {
  return (
    <span className={cn("relative size-8 shrink-0 overflow-clip", className)}>
      <img
        src="/images/pricing/check-dark.svg"
        alt=""
        width={32}
        height={32}
        className="size-full"
      />
    </span>
  );
}

function planLinkProps(href: string) {
  return href.startsWith("http")
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

function CheckRow({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-2">
      <CheckIcon />
      <span className="font-sans text-[16px] leading-[1.28] text-foreground">
        {children}
      </span>
    </li>
  );
}

/**
 * Three plan cards (Figma 106:4555). Outer panel `#fafafa`, inner white
 * quote card, then a check-list. Same 8px gap as the page shell.
 */
export function PricingPlans() {
  return (
    <section id="planes" className="grid grid-cols-1 gap-space-2 md:grid-cols-3">
      {pricingPlans.map((plan) => (
        <article
          key={plan.name}
          className="flex flex-col gap-space-2 overflow-clip rounded-[16px] bg-panel p-space-2"
        >
          <div className="flex flex-col gap-6 rounded-lg bg-background p-space-4">
            <div className="flex flex-col gap-space-2">
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.28] text-foreground">
                {plan.name}
              </h2>
              <p className="whitespace-pre-line font-sans text-[16px] leading-[1.58] text-muted-foreground">
                {plan.description}
              </p>
              <p className="font-display leading-[1.28] text-foreground">
                <span className="text-[clamp(1.75rem,4vw,2.5rem)]">
                  {plan.price}
                </span>
                <span className="text-[16px] text-muted-foreground">
                  {plan.period}
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-space-4">
              <Link
                href={plan.primary.href}
                {...planLinkProps(plan.primary.href)}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-space-4 font-sans text-[16px] leading-6 text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
              >
                {plan.primary.label}
              </Link>
            </div>
          </div>

          <ul className="flex flex-col gap-space-4 px-5 py-3">
            {plan.features.map((feature) => (
              <CheckRow key={feature}>{feature}</CheckRow>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}