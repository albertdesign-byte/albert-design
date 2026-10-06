import type { Metadata } from "next";

import { FrustAudience } from "@/components/frust/FrustAudience";
import { FrustControl } from "@/components/frust/FrustControl";
import { FrustFaq } from "@/components/frust/FrustFaq";
import { FrustFooter } from "@/components/frust/FrustFooter";
import { FrustHeader } from "@/components/frust/FrustHeader";
import { FrustHero } from "@/components/frust/FrustHero";
import { FrustMarketplace } from "@/components/frust/FrustMarketplace";
import { FrustPolicy } from "@/components/frust/FrustPolicy";
import { FrustPricing } from "@/components/frust/FrustPricing";
import { FrustStats } from "@/components/frust/FrustStats";
import { FrustSteps } from "@/components/frust/FrustSteps";
import { Section } from "@/components/layout/Section";
import { SiteShell } from "@/components/layout/SiteShell";
import { frust } from "@/content/frust";

export const metadata: Metadata = {
  title: "Frust",
  description: frust.hero.body,
};

export default function FrustPage() {
  return (
    <SiteShell>
      <Section className="overflow-hidden bg-[#fafaf9]">
        <FrustHeader />
        <FrustHero />
        <FrustStats />
      </Section>

      <Section id="how-it-works" className="overflow-hidden bg-[#fafaf9]">
        <FrustSteps />
      </Section>

      <Section className="overflow-hidden bg-[#fafaf9]">
        <FrustPricing />
      </Section>

      <Section className="overflow-hidden bg-[#fafaf9]">
        <FrustAudience />
        <FrustControl />
        <FrustPolicy />
        <FrustMarketplace />
        <FrustFaq />
      </Section>

      <FrustFooter />
    </SiteShell>
  );
}
