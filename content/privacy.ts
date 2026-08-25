/**
 * Política de Privacidad — texto aprobado (Albert_Design_Politica_de_Privacidad.pdf).
 * No resumir, no ampliar, no reinterpretar.
 */

export const CONTACT_EMAIL = "hola.albertdesign@gmail.com";

export type PrivacyParagraph = { type: "p"; text: string };
export type PrivacyList = { type: "ul"; items: readonly string[] };
export type PrivacyLines = { type: "lines"; items: readonly string[] };
export type PrivacyLabeled = {
  type: "labeled";
  items: readonly { label: string; text: string }[];
};

export type PrivacyBlock =
  | PrivacyParagraph
  | PrivacyList
  | PrivacyLines
  | PrivacyLabeled;

export type PrivacySection = {
  heading: string;
  blocks: readonly PrivacyBlock[];
};

export const privacyPolicy = {
  title: "Política de Privacidad",
  lastUpdatedLabel: "Última actualización: 24 de agosto de 2026",
  lastUpdatedIso: "2026-08-24",
  intro:
    "En Albert Design, una marca operada por Opportunie E.I.R.L., respetamos la privacidad de las personas que se ponen en contacto con nosotros a través de nuestro sitio web. Esta Política de Privacidad explica qué información recopilamos cuando utilizas nuestro formulario de contacto, para qué la utilizamos y cuáles son tus derechos respecto de tus datos personales.",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      blocks: [
        {
          type: "p",
          text: "El responsable del tratamiento de los datos personales recopilados a través de este sitio web es:",
        },
        {
          type: "lines",
          items: [
            "Opportunie E.I.R.L.",
            "Marca: Albert Design",
            `Correo de contacto: ${CONTACT_EMAIL}`,
          ],
        },
      ],
    },
    {
      heading: "2. Información que recopilamos",
      blocks: [
        {
          type: "p",
          text: "Cuando utilizas nuestro formulario de contacto, podemos solicitar la siguiente información:",
        },
        {
          type: "ul",
          items: [
            "Nombre.",
            "Número de teléfono.",
            "Correo electrónico.",
            "Empresa u organización.",
            "Mensaje o información relacionada con el proyecto.",
            "Presupuesto estimado del proyecto, cuando decidas proporcionarlo. Este campo es opcional.",
          ],
        },
        {
          type: "p",
          text: "No solicitamos información personal que no sea necesaria para atender tu solicitud.",
        },
      ],
    },
    {
      heading: "3. ¿Para qué utilizamos tus datos?",
      blocks: [
        {
          type: "p",
          text: "Utilizamos la información que proporcionas exclusivamente para atender y dar seguimiento a la solicitud que realizaste a través de nuestro sitio web.",
        },
        {
          type: "p",
          text: "En particular, podemos utilizar tus datos para:",
        },
        {
          type: "ul",
          items: [
            "Identificarte y saber cómo dirigirnos a ti.",
            "Responder a tu solicitud.",
            "Contactarte mediante el número de teléfono que proporcionaste.",
            "Contactarte mediante correo electrónico.",
            "Enviarte una invitación o información relacionada con una posible reunión o conversación sobre tu proyecto.",
            "Comprender las características generales de tu proyecto.",
            "Conocer, cuando lo hayas proporcionado voluntariamente, el presupuesto estimado para entender mejor el alcance de tu solicitud y preparar una propuesta adecuada.",
          ],
        },
        {
          type: "p",
          text: "El número de teléfono, correo electrónico y demás información proporcionada no serán utilizados para enviarte publicidad, newsletters o comunicaciones comerciales no relacionadas con la solicitud que realizaste, salvo que posteriormente nos otorgues un consentimiento específico para ello o exista otra base legal que permita dicho tratamiento.",
        },
      ],
    },
    {
      heading: "4. El presupuesto del proyecto",
      blocks: [
        {
          type: "p",
          text: "El campo correspondiente al presupuesto estimado es opcional.",
        },
        {
          type: "p",
          text: "Si decides proporcionar esta información, la utilizaremos únicamente para comprender mejor el alcance de tu proyecto y evaluar cómo podemos ayudarte.",
        },
        {
          type: "p",
          text: "No es necesario proporcionar un presupuesto para enviar el formulario de contacto.",
        },
      ],
    },
    {
      heading: "5. Cómo recibimos y utilizamos la información",
      blocks: [
        {
          type: "p",
          text: "La información enviada mediante el formulario puede ser recibida en nuestro correo electrónico:",
        },
        {
          type: "lines",
          items: [CONTACT_EMAIL],
        },
        {
          type: "p",
          text: "El acceso a esta información está limitado a las personas que participan en la gestión de las solicitudes y proyectos de Albert Design.",
        },
        {
          type: "p",
          text: "No vendemos ni comercializamos tus datos personales.",
        },
      ],
    },
    {
      heading: "6. Conservación de los datos",
      blocks: [
        {
          type: "p",
          text: "Conservaremos tus datos personales durante el tiempo necesario para atender tu solicitud, mantener la comunicación relacionada con ella y, cuando corresponda, evaluar o desarrollar una posible relación profesional.",
        },
        {
          type: "p",
          text: "Cuando los datos ya no sean necesarios para estas finalidades, podremos eliminarlos o anonimizarlos, salvo que exista una obligación legal que requiera conservarlos durante un período adicional.",
        },
      ],
    },
    {
      heading: "7. Protección de la información",
      blocks: [
        {
          type: "p",
          text: "Adoptamos medidas razonables para proteger la información que nos proporcionas frente a accesos no autorizados, pérdida, alteración o uso indebido.",
        },
        {
          type: "p",
          text: "Sin embargo, ningún sistema de transmisión o almacenamiento de información por Internet puede garantizar una seguridad absoluta.",
        },
      ],
    },
    {
      heading: "8. Compartición de información",
      blocks: [
        {
          type: "p",
          text: "No vendemos, alquilamos ni comercializamos tus datos personales.",
        },
        {
          type: "p",
          text: "Podemos utilizar servicios tecnológicos necesarios para operar nuestro sitio web y gestionar las comunicaciones relacionadas con las solicitudes recibidas. Cuando dichos servicios intervengan en el tratamiento de información personal, procuraremos que el uso de los datos se limite a las finalidades necesarias para prestar dichos servicios y de acuerdo con la normativa aplicable.",
        },
        {
          type: "p",
          text: "Cuando corresponda, cualquier tratamiento o transferencia de datos a terceros se realizará conforme a la legislación peruana aplicable en materia de protección de datos personales.",
        },
      ],
    },
    {
      heading: "9. Transferencias internacionales",
      blocks: [
        {
          type: "p",
          text: "Algunos servicios tecnológicos utilizados para operar sitios web, gestionar comunicaciones o almacenar información pueden encontrarse fuera del Perú.",
        },
        {
          type: "p",
          text: "En caso de que el tratamiento de datos personales implique un flujo transfronterizo, este se realizará de acuerdo con las condiciones y garantías establecidas por la legislación peruana aplicable.",
        },
      ],
    },
    {
      heading: "10. Tus derechos sobre tus datos personales",
      blocks: [
        {
          type: "p",
          text: "De acuerdo con la legislación peruana sobre protección de datos personales, puedes ejercer los derechos que correspondan respecto de tus datos personales, incluyendo:",
        },
        {
          type: "labeled",
          items: [
            {
              label: "Acceso",
              text: "conocer qué datos personales tenemos sobre ti y cómo los estamos utilizando.",
            },
            {
              label: "Rectificación",
              text: "solicitar la corrección o actualización de información que sea incorrecta, inexacta o incompleta.",
            },
            {
              label: "Cancelación",
              text: "solicitar la eliminación de tus datos personales cuando corresponda.",
            },
            {
              label: "Oposición",
              text: "oponerte al tratamiento de tus datos personales en los casos previstos por la normativa aplicable.",
            },
          ],
        },
        {
          type: "p",
          text: "Estos derechos son conocidos como derechos ARCO.",
        },
      ],
    },
    {
      heading: "11. ¿Cómo puedes ejercer tus derechos?",
      blocks: [
        {
          type: "p",
          text: "Si deseas consultar, actualizar, corregir, cancelar u oponerte al tratamiento de tus datos personales, puedes escribirnos a:",
        },
        {
          type: "lines",
          items: [CONTACT_EMAIL],
        },
        {
          type: "p",
          text: "En tu solicitud, te recomendamos indicar claramente el derecho que deseas ejercer y proporcionar la información necesaria para que podamos identificar la solicitud correspondiente.",
        },
        {
          type: "p",
          text: "Atenderemos las solicitudes conforme a los plazos y condiciones establecidos por la legislación peruana aplicable.",
        },
      ],
    },
    {
      heading: "12. Cookies y tecnologías similares",
      blocks: [
        {
          type: "p",
          text: "Nuestro sitio web puede utilizar tecnologías necesarias para su funcionamiento y, dependiendo de las funcionalidades implementadas, herramientas destinadas a comprender cómo se utiliza el sitio.",
        },
        {
          type: "p",
          text: "En caso de incorporar herramientas de analítica, publicidad, seguimiento u otras tecnologías que impliquen un tratamiento adicional de datos personales, actualizaremos esta Política de Privacidad cuando corresponda.",
        },
      ],
    },
    {
      heading: "13. Enlaces a otros sitios web",
      blocks: [
        {
          type: "p",
          text: "Nuestro sitio web puede contener enlaces hacia sitios web o servicios de terceros.",
        },
        {
          type: "p",
          text: "Esta Política de Privacidad se aplica únicamente a la información recopilada por Albert Design a través de nuestro sitio web. No somos responsables de las prácticas de privacidad, contenido o tratamiento de datos realizado por sitios web de terceros.",
        },
        {
          type: "p",
          text: "Te recomendamos revisar las políticas de privacidad de dichos sitios antes de proporcionarles información personal.",
        },
      ],
    },
    {
      heading: "14. Cambios a esta Política de Privacidad",
      blocks: [
        {
          type: "p",
          text: "Podemos actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios en nuestras prácticas, servicios, tecnologías utilizadas o en la legislación aplicable.",
        },
        {
          type: "p",
          text: "Cuando realicemos cambios, actualizaremos la fecha indicada al inicio de esta página.",
        },
      ],
    },
    {
      heading: "15. Contacto",
      blocks: [
        {
          type: "p",
          text: "Si tienes alguna pregunta sobre esta Política de Privacidad, sobre la forma en que tratamos tus datos personales o deseas ejercer alguno de tus derechos, puedes contactarnos en:",
        },
        {
          type: "lines",
          items: [
            "Opportunie E.I.R.L. — Albert Design",
            CONTACT_EMAIL,
          ],
        },
      ],
    },
  ],
} as const satisfies {
  title: string;
  lastUpdatedLabel: string;
  lastUpdatedIso: string;
  intro: string;
  sections: readonly PrivacySection[];
};
