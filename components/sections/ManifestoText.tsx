import { clients } from "@/content/clients";
import { cn } from "@/lib/cn";

type ManifestoTextProps = {
  className?: string;
};

export function ManifestoText({ className }: ManifestoTextProps) {
  return (
    <p
      className={cn(
        "font-display text-manifesto text-foreground",
        className,
      )}
    >
      {clients.manifesto}
    </p>
  );
}
