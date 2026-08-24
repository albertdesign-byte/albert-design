import { extendTailwindMerge } from "tailwind-merge";

type ClassValue = string | false | null | undefined | 0;

/**
 * Teach tailwind-merge about the custom theme scales declared in
 * `app/globals.css` (`@theme`) so it can resolve conflicts on our
 * semantic utilities (`text-manifesto`, `gap-space-6`, `rounded-panel`…)
 * the same way it already does for standard Tailwind classes.
 * Custom colors (`bg-panel`, `text-footer-foreground`, …) need no
 * extra config — tailwind-merge accepts any color name out of the box.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "cta", "manifesto", "section", "list", "body", "body-sm", "meta"],
      font: ["display", "chrome"],
      spacing: [
        "space-1",
        "space-2",
        "space-3",
        "space-4",
        "space-6",
        "space-8",
        "space-12",
        "space-16",
        "space-24",
        "space-32",
      ],
      radius: ["panel", "pill"],
    },
  },
});

/**
 * className composer — filters falsy values and resolves conflicting
 * Tailwind utilities (e.g. a passed-in `bg-*` overriding a component's
 * default `bg-*`) so the last one wins deterministically, instead of
 * depending on Tailwind's generated CSS source order.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(inputs.filter(Boolean).join(" "));
}
