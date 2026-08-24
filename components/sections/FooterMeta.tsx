import { footer } from "@/content/footer";
import { cn } from "@/lib/cn";

type FooterMetaProps = {
  className?: string;
};

/**
 * Top chrome of the footer panel — year · brand (three-column centering).
 * Coordinates exist in Figma but are hidden; right column stays empty for balance.
 */
export function FooterMeta({ className }: FooterMetaProps) {
  return (
    <div
      className={cn(
        "flex w-full items-end justify-between font-chrome text-footer-foreground",
        className,
      )}
    >
      <p className="min-w-0 flex-1 text-[11px] leading-[16.5px]">{footer.year}</p>
      <p className="min-w-0 flex-1 text-center text-[14px] leading-[21px]">
        {footer.brand}
      </p>
      <div className="min-w-0 flex-1" aria-hidden />
    </div>
  );
}
