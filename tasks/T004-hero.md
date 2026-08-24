# T004 — Hero

## Objetivo

Construir el primer viewport editorial: bio estrecha a la izquierda y titular serif monumental, integrados con el header existente.

## Contexto

El hero es la pieza de marca. Asimetría deliberada, muchísimo espacio en blanco, sin stats ni overlays.  
Trabajo único: presentar marca, posicionamiento y presencia tipográfica.  
Referencias: [`docs/sections.md`](../docs/sections.md), [`docs/content.md`](../docs/content.md), [`docs/design-principles.md`](../docs/design-principles.md), [`docs/design-system.md`](../docs/design-system.md).

## Dependencias

- `T001-foundation`
- `T002-layout`
- `T003-navbar` (`SiteHeader` disponible)

## Alcance

- `HeroSection` que compone header + contenido
- `HeroBio` — párrafo de experiencia (columna estrecha)
- `HeroHeadline` — titular Instrument Serif
- Composición asimétrica desktop (bio media-izquierda, headline abajo-derecha)
- Presencia vertical generosa (~900–950px en desktop como guía, no obligación rígida)
- Copy desde `content/` según `docs/content.md`
- Responsive: apilar conservando presencia del serif
- Un único `h1` semántico en la página

## Fuera de alcance

- Animación de entrada (fade/rise) — `T009`
- Case studies / portfolio
- Clientes, solicitud, footer
- Dark mode
- Deploy

## Checklist

- [ ] Headline usa Instrument Serif / token `text-display`
- [ ] Bio usa sans de sistema y columna estrecha
- [ ] Asimetría desktop legible y intencional
- [ ] Sin stats, agendas, promos ni badges flotantes
- [ ] Header integrado sin competir con el titular
- [ ] Copy alineado a tono Albert Design
- [ ] Mobile: stack claro, headline con presencia
- [ ] Contraste y semántica correctos (`h1` único)

## Acceptance Criteria

- El primer viewport se lee como una sola composición editorial, no como dashboard
- La jerarquía coincide con la referencia: serif dominante, bio secundaria, chrome quiet
- Hay mucho aire interno; no se compactó el vacío del hero
- Funciona en desktop y mobile

## Definition of Done

- Hero completo según alcance, sin anti-patrones de docs
- Cumple checklist y acceptance criteria
- Desbloquea `T005-portfolio`
