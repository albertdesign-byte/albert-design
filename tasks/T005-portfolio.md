# T005 — Portfolio

## Objetivo

Implementar las bandas de case studies (full y split) como planos visuales dominantes del scroll, con superficies propias por proyecto.

## Contexto

El portfolio es el cuerpo visual de la landing: paneles redondeados grandes, gap 8px, mockups nítidos.  
Patrones: full 12/12 y split ≈ 5/7. Los colores pertenecen al trabajo mostrado, no al shell.  
Referencias: [`docs/sections.md`](../docs/sections.md), [`docs/components.md`](../docs/components.md), [`docs/content.md`](../docs/content.md), [`docs/design-system.md`](../docs/design-system.md).

## Dependencias

- `T001-foundation`
- `T002-layout` (`SectionPanel` / ritmos)
- `T004-hero` (flujo de Home ya montado arriba del portfolio)

## Alcance

- `CaseStudyBand`, `CaseStudyCard`, `CaseStudyMedia`, `DeviceMockup` (según necesidad real)
- Al menos un case **full** y un case **split** (ideal: las 4 bandas de la referencia)
- Datos tipados en `content/projects.ts` (slug, layout, color de superficie, media, año, nombre)
- Uso de `next/image` para media
- Cada card/banda como link (ruta placeholder o futura OK)
- Alturas/presencia generosas (~530–650px guía desktop)
- Responsive: splits apilan en mobile

## Fuera de alcance

- Páginas detalle de case study completas
- Animaciones de reveal al scroll — `T009`
- Sección de clientes / manifiesto
- Formulario de contacto
- Footer / últimos trabajos
- Deploy

## Checklist

- [ ] Existe patrón full y patrón split reutilizables
- [ ] Gap 8px entre paneles hermanos respetado
- [ ] Superficies de color por proyecto (no tokens shell forzados)
- [ ] Media con proporciones/distribución fieles a la experiencia de referencia
- [ ] Contenido no hardcodeado dentro del primitivo UI
- [ ] Imágenes optimizadas (`next/image`) con alt útil
- [ ] Hover/focus de link accesible
- [ ] Mobile stack coherente

## Acceptance Criteria

- El scroll del portfolio se siente como planos grandes editoriales, no como grid de cards pequeñas
- Full y split se entienden y reutilizan
- No hay esclavitud píxel a píxel, pero sí ritmo, proporción y distribución correctas
- Desktop y mobile mantienen oficio premium

## Definition of Done

- Bandas de portfolio integradas en la Home bajo el hero
- Cumple checklist y acceptance criteria
- Desbloquea `T006-clients`
