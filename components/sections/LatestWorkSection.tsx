import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { WorkList } from "@/components/sections/WorkList";
import { latestWork } from "@/content/latest-work";

/**
 * Latest projects — typographic index.
 * Title left, ruled list right (Figma 7:3066).
 */
export function LatestWorkSection() {
  return (
    <Section id="latest-work" className="relative overflow-hidden bg-panel">
      <Container className="py-space-24 md:py-space-24 lg:py-[111px]">
        <div className="mx-auto flex w-full max-w-[1225px] flex-col gap-space-12 lg:flex-row lg:items-start lg:gap-0">
          <h2 className="shrink-0 font-display text-section text-foreground lg:w-[320px]">
            {latestWork.title}
          </h2>

          <WorkList className="lg:ml-auto lg:w-[752px]" />
        </div>
      </Container>
    </Section>
  );
}
