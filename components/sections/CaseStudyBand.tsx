import type { PortfolioBand } from "@/content/projects";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { cn } from "@/lib/cn";

type CaseStudyBandProps = {
  band: PortfolioBand;
  priority?: boolean;
  className?: string;
};

export function CaseStudyBand({
  band,
  priority = false,
  className,
}: CaseStudyBandProps) {
  if (band.layout === "full") {
    return (
      <div className={cn(className)}>
        <CaseStudyCard
          href={band.href}
          name={band.name}
          surface={band.surface}
          image={band.image}
          priority={priority}
          comingSoon={band.comingSoon}
          sizes="(min-width: 1440px) 1424px, 100vw"
        />
      </div>
    );
  }

  // Figma: Frame 121 = 545|871; Frame 122 = 871|545; gap 8
  const gridCols =
    band.splitRatio === "wide-narrow"
      ? "lg:grid-cols-[871fr_545fr]"
      : "lg:grid-cols-[545fr_871fr]";

  const leftSizes =
    band.splitRatio === "wide-narrow"
      ? "(min-width: 1440px) 871px, 100vw"
      : "(min-width: 1440px) 545px, 100vw";

  const rightSizes =
    band.splitRatio === "wide-narrow"
      ? "(min-width: 1440px) 545px, 100vw"
      : "(min-width: 1440px) 871px, 100vw";

  return (
    <div className={cn("grid gap-space-2", gridCols, className)}>
      <CaseStudyCard
        href={band.href}
        name={band.name}
        surface={band.left.surface}
        image={band.left.image}
        priority={priority}
        comingSoon={band.comingSoon}
        fill
        sizes={leftSizes}
      />
      <CaseStudyCard
        href={band.href}
        name={band.name}
        surface={band.right.surface}
        image={band.right.image}
        priority={priority}
        comingSoon={band.comingSoon}
        fill
        sizes={rightSizes}
      />
    </div>
  );
}
