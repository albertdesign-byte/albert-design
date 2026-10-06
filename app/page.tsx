import { SiteShell } from "@/components/layout/SiteShell";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FooterCta } from "@/components/sections/FooterCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestWorkSection } from "@/components/sections/LatestWorkSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />

      <PortfolioSection />

      <ClientsSection />

      <LatestWorkSection />

      <FooterCta />
    </SiteShell>
  );
}
