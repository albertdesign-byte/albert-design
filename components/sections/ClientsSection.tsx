import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ClientNameList } from "@/components/sections/ClientNameList";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ManifestoText } from "@/components/sections/ManifestoText";

/**
 * Clients + manifesto — centered editorial cluster (list | manifesto + logos).
 * Figma: ~1188px (325 label column + 863 content), centered in the panel.
 */
export function ClientsSection() {
  return (
    <Section id="about" className="bg-panel">
      <Container className="flex min-h-[516px] items-center py-space-24 md:py-[115px]">
        <div className="mx-auto flex w-full max-w-[1188px] flex-col gap-space-12 md:flex-row md:items-start md:gap-0">
          <ClientNameList className="shrink-0 md:w-[325px] md:pt-space-6" />

          <div className="flex min-w-0 flex-1 flex-col gap-space-10 md:max-w-[863px] md:gap-10">
            <ManifestoText className="w-full leading-[1.48]" />
            <LogoCloud />
          </div>
        </div>
      </Container>
    </Section>
  );
}
