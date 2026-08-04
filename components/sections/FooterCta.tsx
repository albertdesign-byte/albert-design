import { Container } from "@/components/layout/Container";
import { FooterMeta } from "@/components/sections/FooterMeta";
import { footer } from "@/content/footer";

/**
 * Editorial footer close — dark warm panel, macro whitespace, typographic CTA.
 * Figma 7:3181 — solid surface `#23120b` (`bg-footer`).
 *
 * Uses a raw <section> (not layout/Section) so `bg-muted` cannot override
 * the footer fill — `cn` does not merge conflicting Tailwind utilities.
 */
export function FooterCta() {
  return (
    <section
      id="footer-cta"
      className="rounded-panel bg-footer text-footer-foreground"
    >
      <Container className="flex min-h-[640px] flex-col md:min-h-[730px] md:max-w-[1340px] md:py-[99px]">
        <FooterMeta className="shrink-0 pt-space-12 md:pt-0" />

        <div className="flex flex-1 flex-col items-center justify-center gap-5 py-space-24 md:py-0">
          {/* text-footer-foreground/50, not text-muted-foreground: that
              token is tuned for light surfaces (see globals.css) and would
              fail contrast on this dark panel. */}
          <p className="font-sans text-[11px] leading-[16.5px] text-footer-foreground/50">
            {footer.prompt}
          </p>

          <a
            href={footer.cta.href}
            className="font-sans text-cta leading-none text-footer-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-footer-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-footer"
          >
            {footer.cta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
