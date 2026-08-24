import { clients } from "@/content/clients";
import { cn } from "@/lib/cn";

type ClientNameListProps = {
  className?: string;
};

export function ClientNameList({ className }: ClientNameListProps) {
  return (
    <div className={cn("font-sans text-[12px] leading-[18px]", className)}>
      <p className="text-muted-foreground">{clients.label}</p>
      <ul className="mt-space-1 text-foreground">
        {clients.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
