import Image from "next/image";
import Link from "next/link";

import type { PortfolioImage } from "@/content/projects";
import { cn } from "@/lib/cn";

type CaseStudyCardProps = {
  href: string;
  name: string;
  surface: string;
  image: PortfolioImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Fill the grid cell height (split bands). */
  fill?: boolean;
};

export function CaseStudyCard({
  href,
  name,
  surface,
  image,
  className,
  priority = false,
  sizes = "100vw",
  fill = false,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Case study: ${name}`}
      className={cn(
        "group relative block overflow-hidden rounded-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2",
        fill && "h-full min-h-[280px] md:min-h-[653px]",
        className,
      )}
      style={{ backgroundColor: surface }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className={cn(
          "transition-transform duration-500 ease-out group-hover:scale-[1.015]",
          fill
            ? "absolute inset-0 h-full w-full object-cover object-center"
            : "h-auto w-full object-cover",
        )}
      />
    </Link>
  );
}
