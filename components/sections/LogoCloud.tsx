import Image from "next/image";
import { clients } from "@/content/clients";
import { cn } from "@/lib/cn";

type LogoCloudProps = {
  className?: string;
};

/**
 * Client logos as optimized SVG (not rasterized).
 * Served from public/images/logos/ — unoptimized keeps vectors intact.
 */
export function LogoCloud({ className }: LogoCloudProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-space-3 gap-y-space-4",
        className,
      )}
    >
      {clients.logos.map((logo) => (
        <li key={logo.name} className="flex h-9 w-[107px] items-center">
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            unoptimized
            className="h-auto max-h-7 w-auto max-w-full"
          />
        </li>
      ))}
    </ul>
  );
}
