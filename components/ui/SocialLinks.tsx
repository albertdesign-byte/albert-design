import { social } from "@/content/navigation";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-end gap-1.5 font-chrome text-[12px]",
        className,
      )}
    >
      <span className="leading-[18px] text-muted-foreground">{social.label}</span>
      <ul className="flex flex-col items-end gap-1">
        {social.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="font-medium leading-none text-foreground transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
