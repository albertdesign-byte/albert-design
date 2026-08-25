export type WorkSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type WorkProject = {
  name: string;
  year: string;
  /** Desktop hover preview slides. Autoplay is 3s while the row stays hovered. */
  slides: readonly WorkSlide[];
};

/** Interval between hover-preview slides (Figma portafolio lolotec). */
export const workPreviewIntervalMs = 3000;

const lolotecSlideSize = { width: 1000, height: 1336 } as const;

const lolotecSlides: readonly WorkSlide[] = [
  {
    src: "/images/latest-work/lolotec-1.png",
    alt: "Lolotec Ecommerce — home en mobile",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/lolotec-2.png",
    alt: "Lolotec Ecommerce — listado de celulares",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/lolotec-3.png",
    alt: "Lolotec Ecommerce — ficha de producto",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/lolotec-4.png",
    alt: "Lolotec Ecommerce — selector de grado",
    ...lolotecSlideSize,
  },
];

const induramaSlides: readonly WorkSlide[] = [
  {
    src: "/images/latest-work/indurama-1.png",
    alt: "Indurama — home en mobile con categorías",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/indurama-2.png",
    alt: "Indurama — ficha de Cocina Bilbao",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/indurama-3.png",
    alt: "Indurama — sugerencias de búsqueda y comparador",
    ...lolotecSlideSize,
  },
];

const oqueaSlides: readonly WorkSlide[] = [
  {
    src: "/images/latest-work/oquea-1.png",
    alt: "Oquea — collage de marca con palabras y fotos",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/oquea-2.png",
    alt: "Oquea — iPhone sobre foto de buceo con el tagline",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/oquea-3.png",
    alt: "Oquea — app en un iPhone sostenido con la mano",
    ...lolotecSlideSize,
  },
  {
    src: "/images/latest-work/oquea-4.png",
    alt: "Oquea — hoodie con el wordmark",
    ...lolotecSlideSize,
  },
];

const bbvaSlides: readonly WorkSlide[] = [
  {
    src: "/images/latest-work/bbva-1.png",
    alt: "BBVA — selects de producto en collages",
    ...lolotecSlideSize,
  },
];

const tramaSlides: readonly WorkSlide[] = [
  {
    src: "/images/latest-work/trama-1.png",
    alt: "Trama — silueta y marca sobre patrón geométrico",
    ...lolotecSlideSize,
  },
];

export const latestWork = {
  title: "Ultimos trabajos",
  projects: [
    { name: "Lolotec - Ecommerce", year: "2026", slides: lolotecSlides },
    { name: "Indurama", year: "2026", slides: induramaSlides },
    { name: "Trama", year: "2026", slides: tramaSlides },
    { name: "Oquea", year: "2025", slides: oqueaSlides },
    { name: "BBVA", year: "2025", slides: bbvaSlides },
  ] satisfies readonly WorkProject[],
} as const;
