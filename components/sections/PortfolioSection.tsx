import { portfolioBands } from "@/content/projects";
import { CaseStudyBand } from "@/components/sections/CaseStudyBand";

export function PortfolioSection() {
  return (
    <div id="case-studies" className="flex flex-col gap-space-2">
      {portfolioBands.map((band, index) => (
        <CaseStudyBand
          key={band.id}
          band={band}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
