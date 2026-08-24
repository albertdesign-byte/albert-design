# Contenido

Copy estructural, listas y tono aplicado al texto.  
Visión y tono de marca → [vision.md](./vision.md).  
Dónde vive en código (`content/`) → [architecture.md](./architecture.md).

---

## Principios de copy

- Español como idioma principal
- Claro, directo, premium, humano
- Una idea por párrafo
- Sin clichés de agencia ni emojis en UI/copy principal
- Identificadores de código en inglés; strings de producto en español

### Jerarquía de copy en página

1. Marca / nombre (señal en chrome)
2. Un titular
3. Una frase o bloque de apoyo
4. Grupo de CTAs / contacto
5. El resto, sección a sección

El primer viewport no debe competir consigo mismo.

### Ejemplos de tono

| Evitar | Preferir |
|---|---|
| Creamos experiencias digitales innovadoras para potenciar tu marca. | Diseñamos identidades y productos digitales con dirección clara. |
| Somos apasionados del diseño. | Cuidamos tipografía, espacio y detalle hasta que el resultado se sostiene solo. |
| Contáctanos para una solución a medida. | Cuéntanos tu proyecto. Empezamos por entender el problema. |

---

## Navegación

- Home
- Case Studies
- About
- Contacts

Social:

- Label: `Social:`
- Enlace: `BE` (Behance)

Brand mark:

- `Albert Design`
- Subtítulo: `Worldwide`

---

## Hero

**Headline**

> Diseñadores, Product y Design engineer aquí en LATAM

**Bio (referencia)**

> 12 años de experiencia creando productos, diseños y hoy, no solo las interfaces, también participando de la construcción de MVP a través de vibe coding con herramientas como Claude, Cursor y Codex.

---

## Clientes

Label: `Algunos clientes`

Lista de referencia:

- Gokei
- Zara AI
- Lolotec
- Oquea
- Enjoy
- Frust
- Heredemos
- Mi lista de novios
- Plaza Vea
- Belcorp
- Lapzo

**Manifiesto (referencia)**

> Ayudamos a compañías y startups a seguir creciendo sin perder el tiempo, combinamos el buen gusto con la construcción de productos como SaaS, Apps, websites y landingpages en días y no meses.

Logo cloud: logotipos de clientes/partners (Lapzo y otros según assets finales).

---

## Solicitud

Label: `Envía tu solicitud`

UI visual del formulario:

- Título: `Solicitud`
- Campo / prompt: `Escribe el proyecto`
- Acción: `Enviar`

**Aside (referencia)**

> Envíanos exactamente que es lo que necesitas, no es necesario que lo especifiques pero si que sepas lo que quieres recibir.

---

## Últimos trabajos

Título de sección: `Últimos trabajos`

| Proyecto | Año |
|---|---|
| Lolotec - Ecommerce | 2026 |
| Indurama | 2026 |
| Oquea | 2026 |
| Medmo Health | 2026 |
| Trama | 2026 |
| BBVA | 2025 |

---

## Footer CTA

- Meta superior: `2026` (izq.) · `Albert Design` (centro)
- Prompt: `¿Tienes algún proyecto?`
- CTA: `Envía un saludo`
- Nota: coordenadas en Figma están ocultas; no se renderizan

---

## Case studies (estructura de contenido)

Cada case study en `content/projects.ts` (cuando se cree) debería poder expresar:

- slug / id
- nombre
- año
- superficie de color (propia del proyecto)
- layout: `full` | `split`
- media (mockups, fotos)
- enlace (ruta interna o externa)

Los colores y tipografías *dentro* del mockup pertenecen al producto mostrado; el chrome de Albert vuelve al sistema de marca.

---

## Archivos de contenido previstos

```text
content/
├── site.ts        ← nav, brand, social, footer
├── clients.ts     ← nombres + logos
└── projects.ts    ← case studies + últimos trabajos
```
