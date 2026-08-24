export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PortfolioPanel = {
  surface: string;
  image: PortfolioImage;
};

/** Figma split ratios: 545/871 (~38/62) — order varies per band. */
export type SplitRatio = "narrow-wide" | "wide-narrow";

export type PortfolioBand =
  | {
      id: string;
      slug: string;
      name: string;
      href: string;
      layout: "full";
      surface: string;
      image: PortfolioImage;
      /** True when the case study isn't live yet — hover says "Muy pronto". */
      comingSoon?: boolean;
    }
  | {
      id: string;
      slug: string;
      name: string;
      href: string;
      layout: "split";
      /** narrow-wide = 545|871; wide-narrow = 871|545 (Figma Frame 122) */
      splitRatio: SplitRatio;
      left: PortfolioPanel;
      right: PortfolioPanel;
      comingSoon?: boolean;
    };

/**
 * Portfolio bands — media is PNG @2x from Figma (see docs/engineering.md).
 * Surfaces match project colors from the reference, not the brand shell.
 *
 * href → "/work/gokei" on bands without a real detail page yet. `slug` is
 * kept pointing at each project's own placeholder route (app/work/[slug])
 * so those pages still exist once we build out their real content — only
 * the live link target changes. "Product dashboard" (media shows Lapzo's
 * own product, see split-a-left.png) links to /work/lapzo, and "Zara AI"
 * links to /work/zara-ia (content/zara-ia.ts) — both 1:1 name/media
 * matches with a real detail page. Medmo Health and Diving platform don't
 * have a matching homepage card yet.
 */
export const portfolioBands: PortfolioBand[] = [
  {
    id: "medmo",
    slug: "medmo-health",
    name: "Medmo Health",
    href: "/work/gokei",
    layout: "full",
    surface: "#ff4910",
    image: {
      src: "/images/portfolio/medmo-full.png",
      alt: "Medmo Health — tablet and mobile product mockups on vermilion",
      width: 2848,
      height: 1066,
    },
  },
  {
    id: "split-a",
    slug: "product-dashboard",
    name: "Product dashboard",
    href: "/work/lapzo",
    layout: "split",
    splitRatio: "narrow-wide",
    left: {
      surface: "#ddd9fb",
      image: {
        src: "/images/portfolio/split-a-left.png",
        alt: "Lapzo — hand holding a phone with the Lapzo product interface",
        width: 1090,
        height: 1306,
      },
    },
    right: {
      surface: "#ddd9fb",
      image: {
        src: "/images/portfolio/split-a-right.png",
        alt: "Lapzo — desktop dashboard UI showing competency reports on a lavender surface",
        width: 1742,
        height: 1306,
      },
    },
  },
  {
    id: "split-b",
    slug: "zara-ai",
    name: "Zara AI",
    href: "/work/zara-ia",
    layout: "split",
    splitRatio: "wide-narrow",
    left: {
      surface: "#101010",
      image: {
        src: "/images/portfolio/split-b-left.png",
        alt: "Zara AI — three mobile screens on a dark green surface",
        width: 1742,
        height: 1306,
      },
    },
    right: {
      surface: "#f3f2ed",
      image: {
        src: "/images/portfolio/split-b-right.png",
        alt: "Hand holding a phone with the Zara welcome screen",
        width: 1090,
        height: 1306,
      },
    },
  },
  {
    id: "diving",
    slug: "diving-platform",
    name: "Diving platform",
    href: "/work/gokei",
    comingSoon: true,
    layout: "full",
    surface: "#f1f6fd",
    image: {
      src: "/images/portfolio/diving-full.png",
      alt: "Diving platform marketing screen with phone mockup",
      width: 2848,
      height: 1264,
    },
  },
];
