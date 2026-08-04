export const contactScenes = [
  {
    id: "request",
    label: "Envía tu solicitud",
    aside:
      "Envíanos exactamente que es lo que necesitas, no es necesario que lo especifiques pero si que sepas lo que quieres recibir.",
    visual: {
      src: "/images/contact/request-form.png",
      alt: "Interfaz de solicitud con campo de proyecto y botón Enviar",
      width: 529,
      height: 353,
    },
    tone: "on-light" as const,
  },
  {
    id: "approved",
    label: "Solicitud aprobada",
    aside:
      "Te contestará un integrante de nuestra agencia para empezar a trabajar.",
    visual: {
      src: "/images/contact/approved-team.png",
      alt: "Equipo de la agencia en avatares solapados",
      width: 529,
      height: 353,
    },
    tone: "on-light" as const,
  },
  {
    id: "delivery",
    label: "Entrega de tareas",
    aside:
      "Tendrás un tablero para que puedas ver los avances del equipo y un PO que te ayudará a revisar el tablero.",
    visual: {
      src: "/images/contact/task-board.png",
      alt: "Board de tareas con tarjetas de trabajo",
      width: 529,
      height: 353,
    },
    tone: "on-light" as const,
  },
] as const;

export type ContactScene = (typeof contactScenes)[number];
