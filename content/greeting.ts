import { servicesMenu } from "@/content/navigation";

/**
 * "Envía un saludo" — contact request screen (Figma 72:13968 "Formulario").
 * Reached from the footer CTA (content/footer.ts → cta.href).
 */

export const greeting = {
  eyebrow: "Wordwide",
  heading: "Amamos crear\nproyectos",
  description: "Los mejores diseñadores y builders de LATAM",
  form: {
    fields: {
      phone: {
        name: "phone",
        countryName: "country",
        label: "Número de contacto",
        prefixLabel: "Pre-fijo",
        type: "tel",
      },
      name: { name: "name", label: "Nombre", type: "text" },
      company: { name: "company", label: "Empresa", type: "text" },
      email: { name: "email", label: "Email", type: "email" },
      service: {
        name: "service",
        label: "Servicio",
        options: servicesMenu.columns.flatMap((column) =>
          column.items.map((item) => ({
            value: item.icon,
            label: item.title,
          })),
        ),
      },
      budget: {
        name: "budget",
        label: "Presupuesto del proyecto",
        options: [
          { value: "1000-3000", label: "$1000 USD - $3000 USD" },
          { value: "4000-8000", label: "$4000 USD - $8000 USD" },
          { value: "8000+", label: "Mayor de $8000 USD" },
        ],
      },
      message: { name: "message", label: "Mensaje" },
    },
    privacy: {
      prefix: "Acepto el amigable ",
      linkLabel: "Política de Privacidad",
      href: "/privacy",
    },
    submitLabel: "Enviar",
    submittingLabel: "Enviando…",
    successMessage:
      "¡Gracias! Recibimos tu saludo — te contestaremos muy pronto.",
    errorMessage:
      "No pudimos enviar tu saludo. Inténtalo de nuevo en un momento.",
    invalidMessage: "Revisa los campos e inténtalo de nuevo.",
  },
  /**
   * Slide images (Figma 72:13968, "Hero" .. "Hero-6"), re-exported with the
   * prev/next chevron layer hidden — the slider is dot-paginated + autoplay
   * only, no arrow icons.
   */
  sliderIntervalMs: 5000,
  slides: [
    {
      id: "dashboard",
      image: {
        src: "/images/contact-slider/slide-1-dashboard.png",
        alt: "Dashboard de producto con gráficos y tarjetas de tareas",
        width: 1596,
        height: 1916,
      },
    },
    {
      id: "hand-phone",
      image: {
        src: "/images/contact-slider/slide-2-hand-phone.png",
        alt: "Mano sosteniendo un teléfono con una app de mensajería",
        width: 1596,
        height: 1884,
      },
    },
    {
      id: "zara-dark",
      image: {
        src: "/images/contact-slider/slide-3-zara-dark.png",
        alt: "Pantalla oscura de la app Zara IA seleccionando un acento",
        width: 1596,
        height: 1884,
      },
    },
    {
      id: "lapzo-hand",
      image: {
        src: "/images/contact-slider/slide-4-lapzo-hand.png",
        alt: "Mano sosteniendo un teléfono con la app Lapzo",
        width: 1596,
        height: 1884,
      },
    },
    {
      id: "purple-phones",
      image: {
        src: "/images/contact-slider/slide-5-purple-phones.png",
        alt: "Dos teléfonos mostrando pantallas moradas de Lapzo",
        width: 1596,
        height: 1884,
      },
    },
    {
      id: "gokei",
      image: {
        src: "/images/contact-slider/slide-6-gokei.png",
        alt: "Vista móvil de la página de inicio de Gokei",
        width: 1596,
        height: 1884,
      },
    },
  ],
} as const;

export type GreetingSlide = (typeof greeting.slides)[number];
