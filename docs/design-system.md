# Design system

Tokens, grid, tipografía, color y espaciado.  
Principios cualitativos → [design-principles.md](./design-principles.md).

---

## Superficies y color

### Shell de marca

- Fondo página: blanco / gris muy claro (`#FFFFFF`, `#F5F5F5`, `#FAFAFA`)
- Texto principal: carbón casi negro (`#131417`)
- Texto secundario / labels: gris medio (`#828283`, `#9FA0A3`)
- Nav activa: píldora oscura sobre track claro
- Footer CTA: bloque oscuro cálido (`#23120B`) con tipografía clara

### Case studies

Cada proyecto puede tener su propia superficie de color (naranja, lavanda, verde, azul…).  
Esos colores pertenecen al **trabajo mostrado**, no a la marca shell.

### Tokens CSS (intención)

Definir en `app/globals.css` desde el inicio, por ejemplo:

- `--background`, `--foreground`
- `--muted`, `--muted-foreground`
- `--panel`, `--footer`
- `--accent` (uso escaso en chrome; no competir con superficies de cases)

Preferir tokens semánticos sobre colores crudos en UI recurrente.

---

## Grid

### Canvas

- Breakpoint de diseño: **1440px**
- Contenido útil: **1424px** (inset exterior **8px** a cada lado)
- Los paneles de sección viven dentro de ese ancho y se apilan en columna

### Sistema propuesto

```text
[ 8px inset ]
┌──────────────────────────────────────────────┐
│  Container max-width ≈ 1424 (o 100% - 16px)  │
│                                              │
│  Desktop: 12 columnas conceptuales           │
│  Gutter interno de sección: 8–24px           │
│  Margen horizontal de chrome: 40–48px        │
└──────────────────────────────────────────────┘
```

### Patrones de layout

| Patrón | Uso | Proporción aprox. |
|---|---|---|
| Hero asimétrico | Bio izquierda + headline derecha | ~2 / 6 columnas de contenido + vacío |
| Case full | Un panel a ancho completo | 12/12 |
| Case split | Media + media | ~545 / 8 / 871 → ≈ **5 / 7** del content width |
| Label + content | Clientes, solicitud, últimos trabajos | Label ~325px (clientes) / ~180–320px + resto |
| Footer centrado | CTA final | Una columna centrada, mucho padding |

### Responsive (intención)

- Mobile-first en implementación
- Mobile: apilar; headline serif conserva presencia; splits pasan a stack vertical
- Mantener el inset / radios de panel como firma del sistema
- Nav pill puede colapsar a menú, pero conservar el carácter “cápsula”
- Probar composición del hero y navegación en viewport estrecho desde el primer corte visual

---

## Espaciados

Escala base **4px**. Preferir tokens semánticos en Tailwind/CSS.

### Escala

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 4px | Micro gaps, nav pad interno fino |
| `space-2` | 8px | **Gap entre paneles de sección**; gutters de split |
| `space-3` | 12px | Padding de links en nav; gaps UI compactos |
| `space-4` | 16px | Padding horizontal de items nav |
| `space-6` | 24px | Padding de banner / labels con margin-top |
| `space-8` | 32px | Separaciones medias dentro de sección |
| `space-12` | 48px | Padding horizontal de header/chrome |
| `space-16` | 64px | Aire medio-alto |
| `space-24` | 96px | Padding vertical de secciones editoriales |
| `space-32` | 128px+ | Hero y footer CTA (macro whitespace) |

### Ritmo vertical

- Separación **entre** paneles: siempre **8px** (casi continuo, con radio grande)
- Altura de bloques case study en desktop: ~530–650px
- Hero desktop: ~900–950px de presencia
- Filas de “Últimos trabajos”: ~96px de alto con padding interno generoso
- El espacio vacío *dentro* del hero es parte del diseño; no compactar

---

## Tipografía

Pareja principal de marca (shell del sitio):

| Rol | Familia | Comportamiento |
|---|---|---|
| Display | **Instrument Serif** | Titulares hero y manifiestos; gran tamaño; leading cómodo; tracking neutro/ligero |
| Sans UI | **Instrument Sans** | Bio, listas de trabajos, CTAs tipográficos, textos de apoyo |
| Sans chrome | **Gilroy** (o fallback geométrico cercano si no hay licencia web) | Logo, nav, labels pequeños (“Worldwide”, “Social”, “Algunos clientes”) |

### Escala observada → tokens

| Token | Tamaño ref. | Uso |
|---|---|---|
| `text-display` | ~96px | Hero headline |
| `text-cta` | ~56px | “Envía un saludo” |
| `text-manifesto` | ~36px | Párrafo manifiesto clientes |
| `text-section` | ~28px | “Envía tu solicitud”, “Últimos trabajos” |
| `text-list` | ~25px | Filas de proyectos |
| `text-body` | ~12–20px | Bio, apartados, copy de solicitud |
| `text-meta` | ~11–12px | Nav, labels, year, social |

### Comportamiento

- El display serif es el ancla emocional; no competir con otro bloque del mismo peso
- Body y meta: sans, alta legibilidad, line-height generoso
- En el hero, el titular puede vivir abajo-derecha; la bio, media-izquierda — la asimetría es intencional
- Los case studies pueden conservar tipografías propias del producto mostrado; el chrome de Albert vuelve siempre a Instrument + Gilroy/Instrument Sans
- No usar Inter / Roboto / Arial / system como tipografía de marca
- Definir roles claros: Display, Sans, Mono (opcional para datos/labels técnicos)

---

## Radios y forma

- Paneles de sección: radio grande (firma del sistema)
- Nav: pill (`rounded-full` solo donde el patrón pill es intencional — nav/chip activo)
- Listas y reglas: sin radio innecesario; divisores 1px
- Evitar inventario infinito de radios distintos por sección

---

## Imagen y media

- Priorizar fotografía o mockups con contexto real de producto
- Tratar el media como parte de la composición, no como relleno
- Optimizar con el pipeline de Next.js (`next/image`) cuando aplique
- Alt text descriptivo y útil
- Preservar proporción y distribución de la referencia; no clonar píxel a píxel
- Portfolio / mockups / fotos: **PNG @2x** → `public/images/portfolio/`
- Logos de clientes y marca: **SVG optimizado** → `public/images/logos/` (nunca rasterizar a PNG)
- Iconografía: SVG — ver [`engineering.md`](./engineering.md)
