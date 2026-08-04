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
    <Section id="latest-work" className="bg-panel">
      <Container className="py-space-24 md:py-[111px]">
        <div className="mx-auto flex w-full max-w-[1225px] flex-col gap-space-12 md:flex-row md:items-start md:gap-0">
          <h2 className="shrink-0 font-display text-section text-foreground md:w-[320px]">
            {latestWork.title}
          </h2>

          <WorkList className="md:ml-auto md:w-[752px]" />
        </div>
      </Container>
    </Section>
  );
}
