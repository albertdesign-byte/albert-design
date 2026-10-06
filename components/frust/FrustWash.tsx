import { cn } from "@/lib/cn";

type FrustWashProps = {
  className?: string;
};

/** Soft watercolor blobs from the Frust artboard, clipped by the parent. */
export function FrustWash({ className }: FrustWashProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <img
        src="/images/frust/wash-3.svg"
        alt=""
        className="absolute -top-12 -left-24 h-[435px] w-[598px] max-w-none"
      />
      <img
        src="/images/frust/wash-1.svg"
        alt=""
        className="absolute -right-16 -bottom-16 h-[270px] w-[437px] max-w-none"
      />
      <img
        src="/images/frust/wash-2.svg"
        alt=""
        className="absolute top-1/2 -right-20 h-[270px] w-[437px] max-w-none -translate-y-1/2 rotate-[170deg]"
      />
    </div>
  );
}
