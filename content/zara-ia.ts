export type ZaraImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Zara IA case study — third fully-built project detail page (Figma
 * node 71:7535). Same convention as content/gokei.ts and content/lapzo.ts:
 * media is PNG @2x exported flat from Figma (each section is a single
 * composed frame in the design, not individual layers).
 */
export const zaraIa = {
  name: "Zara IA",
  heading: "Zara IA",
  /**
   * Blog-style pagination below the last image (Figma 71:7922): unlike
   * Gokei→Lapzo and Lapzo→Zara IA, the next case study ("Oquea") is
   * explicitly marked "muy pronto" in Figma instead of "siguiente" — it's
   * not built yet and not meant to be clickable, just a preview of what's
   * coming. See components/sections/NextProjectLink's `disabled` prop.
   */
  nextProject: {
    name: "Oquea",
    label: "muy pronto",
    disabled: true,
  },
  hero: {
    src: "/images/portfolio/zara-ia/zara-hero.png",
    alt: "Zara IA — mockup principal con el titular 'AI COACH' y la app en un iPhone",
    width: 2720,
    height: 1368,
  },
  sections: [
    {
      src: "/images/portfolio/zara-ia/zara-hand-gradient.png",
      alt: "Zara IA — mano sosteniendo un iPhone junto a pantallas de la app sobre fondo degradado",
      width: 2720,
      height: 1324,
    },
    {
      src: "/images/portfolio/zara-ia/zara-typography.png",
      alt: "Zara IA — especificación tipográfica (Space Grotesk, Gilroy) y paleta de color de la marca",
      width: 2720,
      height: 988,
    },
    {
      src: "/images/portfolio/zara-ia/zara-phones-1.png",
      alt: "Zara IA — dos mockups de iPhone mostrando pantallas de la app",
      width: 2720,
      height: 1602,
    },
    {
      src: "/images/portfolio/zara-ia/zara-image-5.png",
      alt: "Zara IA — mockups de iPhone con pantallas de la app sobre fondo con formas curvas",
      width: 2720,
      height: 1368,
    },
    {
      src: "/images/portfolio/zara-ia/zara-phones-2.png",
      alt: "Zara IA — dos mockups adicionales de iPhone con pantallas de la app",
      width: 2720,
      height: 1602,
    },
    {
      src: "/images/portfolio/zara-ia/zara-suggestions.png",
      alt: "Zara IA — panel de sugerencias de conversación de la app",
      width: 2720,
      height: 1084,
    },
    {
      src: "/images/portfolio/zara-ia/zara-onboarding.png",
      alt: "Zara IA — pantallas de bienvenida e inicio de sesión de la app",
      width: 2720,
      height: 1602,
    },
  ] as ZaraImage[],
} as const;
