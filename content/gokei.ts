export type GokeiImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Gokei case study — first fully-built project detail page (Figma
 * node 66:512). Media is PNG @2x exported flat from Figma (each section
 * is a single composed frame in the design, not individual layers), same
 * convention as the homepage Portfolio bands (see content/projects.ts).
 */
export const gokei = {
  name: "Gokei",
  heading: "Gokei",
  /**
   * Blog-style pagination below the last image (Figma 69:19506): the next
   * case study doesn't have real content yet, so this links to the generic
   * placeholder at /work/[slug] (see app/work/[slug]/page.tsx) instead of
   * a dead link.
   */
  nextProject: {
    name: "Lapzo",
    label: "siguiente",
    href: "/work/lapzo",
  },
  hero: {
    src: "/images/portfolio/gokei/gokei-hero.png",
    alt: "Gokei — mockup principal del proyecto",
    width: 2720,
    height: 1368,
  },
  sections: [
    {
      src: "/images/portfolio/gokei/gokei-typography.png",
      alt: "Gokei — especificación tipográfica de la marca",
      width: 2720,
      height: 1324,
    },
    {
      src: "/images/portfolio/gokei/gokei-image-2.png",
      alt: "Gokei — pantalla del producto",
      width: 2720,
      height: 1368,
    },
    {
      src: "/images/portfolio/gokei/gokei-app-screens.png",
      alt: "Gokei — pantallas de la app móvil",
      width: 2720,
      height: 1602,
    },
    {
      src: "/images/portfolio/gokei/gokei-image-3.png",
      alt: "Gokei — pantalla del producto",
      width: 2720,
      height: 1368,
    },
    {
      src: "/images/portfolio/gokei/gokei-forms.png",
      alt: "Gokei — formularios de cotización",
      width: 2720,
      height: 1602,
    },
  ] as GokeiImage[],
} as const;
