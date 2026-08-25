import { pricingCompare } from "@/content/pricing";
import { cn } from "@/lib/cn";

function CheckIcon({ light }: { light?: boolean }) {
  return (
    <span className="relative size-8 shrink-0 overflow-clip">
      <img
        src={
          light
            ? "/images/pricing/check-light.svg"
            : "/images/pricing/check-dark.svg"
        }
        alt=""
        width={32}
        height={32}
        className="size-full"
      />
    </span>
  );
}

/**
 * "¿Por qué suscribirte?" comparison (Figma 106:4837): brand column
 * on `--primary` (`#23120B`), then freelance / contrato / otras plataformas.
 */
export function PricingCompare() {
  return (
    <section className="overflow-clip rounded-[16px] bg-panel p-space-6">
      <div className="flex flex-col gap-6">
        <h2 className="max-w-[863px] font-display text-[clamp(1.75rem,4vw,2.25rem)] leading-[1.48] text-foreground">
          {pricingCompare.heading}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingCompare.columns.map((column) => {
            const isBrand = column.kind === "brand";

            return (
              <div
                key={isBrand ? "brand" : column.title}
                className={cn(
                  "flex flex-col gap-6 overflow-clip rounded-[16px] p-5",
                  isBrand ? "bg-primary" : "bg-background",
                )}
              >
                {isBrand ? (
                  <span className="relative h-6 w-[142px] shrink-0 overflow-clip">
                    <img
                      src="/images/pricing/albeeert-white-wide.svg"
                      alt="albeeert"
                      width={142}
                      height={24}
                      className="size-full"
                    />
                  </span>
                ) : (
                  <p className="font-sans text-[16px] leading-[1.28] text-foreground">
                    {column.title}
                  </p>
                )}

                <ul className="flex flex-col gap-space-4">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon light={isBrand} />
                      <span
                        className={cn(
                          "min-w-0 font-sans text-[16px] leading-[1.28]",
                          isBrand ? "text-[#fff9f6]" : "text-foreground",
                        )}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}