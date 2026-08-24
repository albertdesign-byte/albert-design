export type LapzoImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Lapzo case study — second fully-built project detail page (Figma
 * node 71:572). Same convention as content/gokei.ts: media is PNG @2x
 * exported flat from Figma (each section is a single composed frame in
 * the design, not individual layers).
 */
export const lapzo = {
  name: "Lapzo",
  heading: "Lapzo",
  /**
   * Blog-style pagination below the last image (Figma 71:4226): the next
   * case study ("Zara IA") doesn't have real content yet, so this links to
   * the generic placeholder at /work/[slug] instead of a dead link.
   */
  nextProject: {
    name: "Zara IA",
    label: "siguiente",
    href: "/work/zara-ia",
  },
  hero: {
    src: "/images/portfolio/lapzo/lapzo-hero.png",
    alt: "Lapzo — mockup principal del producto con el logo de la marca",
    width: 2720,
    height: 1368,
  },
  sections: [
    {
      src: "/images/portfolio/lapzo/lapzo-logo-gradient.png",
      alt: "Lapzo — isotipo de la marca y paleta de gradiente morada",
      width: 2720,
      height: 1324,
    },
    {
      src: "/images/portfolio/lapzo/lapzo-text-photo.png",
      alt: "Lapzo — descripción del servicio de RH junto a retrato de una colaboradora",
      width: 2720,
      height: 988,
    },
    {
      src: "/images/portfolio/lapzo/lapzo-photo-dashboard.png",
      alt: "Lapzo — retrato de usuaria con métricas de curso y tarjeta de dashboard con calificación",
      width: 2720,
      height: 1602,
    },
    {
      src: "/images/portfolio/lapzo/lapzo-image-4.png",
      alt: "Lapzo — mockup de la app móvil con tarjetas flotantes de resultados",
      width: 2720,
      height: 1368,
    },
    {
      src: "/images/portfolio/lapzo/lapzo-mobile-mockups.png",
      alt: "Lapzo — mano sosteniendo un iPhone y pantalla de iPad con la plataforma",
      width: 2720,
      height: 1602,
    },
    {
      src: "/images/portfolio/lapzo/lapzo-steps.png",
      alt: "Lapzo — tres beneficios clave del proceso de capacitación",
      width: 2720,
      height: 1084,
    },
    {
      src: "/images/portfolio/lapzo/lapzo-macbook-iphones.png",
      alt: "Lapzo — MacBook Air y dos iPhones mostrando la plataforma",
      width: 2720,
      height: 1602,
    },
  ] as LapzoImage[],
} as const;
