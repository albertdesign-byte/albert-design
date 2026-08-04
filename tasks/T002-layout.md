# T002 — Layout

## Objetivo

Construir el shell estructural de la página: inset exterior, paneles redondeados y contenedores que marcan el ritmo vertical de la landing.

## Contexto

La referencia apila paneles con inset de 8px y gap de 8px entre secciones, radios grandes y mucho aire interno.  
Este ticket crea los primitivos de layout que el resto de secciones deben reutilizar.  
Referencias: [`docs/design-system.md`](../docs/design-system.md), [`docs/design-principles.md`](../docs/design-principles.md), [`docs/architecture.md`](../docs/architecture.md), [`docs/components.md`](../docs/components.md).

## Dependencias

- `T001-foundation` completado (tokens, tipografía, globals)

## Alcance

- `SiteShell` — wrapper de página con inset 8px y fondo
- `SectionPanel` — panel redondeado (bg variable, hermanos separados por 8px)
- `Container` — ancho máximo / padding horizontal de chrome (~40–48px)
- Patrones de grid documentados listos para consumo (full, split 5/7, label+content)
- Integrar el shell en la estructura de la Home sin implementar aún el contenido de cada sección
- Comportamiento responsive básico del shell (stack / mantenimiento del inset y radios)

## Fuera de alcance

- Navbar / NavPill / BrandMark
- Hero, portfolio, clientes, contacto, footer
- Animaciones
- Contenido real de case studies
- Deploy

## Checklist

- [ ] `SiteShell` aplica inset exterior de 8px
- [ ] `SectionPanel` tiene radio grande y acepta superficie/fondo variable
- [ ] Gap entre paneles hermanos = 8px
- [ ] `Container` respeta márgenes horizontales de chrome
- [ ] Ancho de contenido desktop ≈ 1424px dentro de canvas 1440
- [ ] No se inventan wrappers distintos por sección futura
- [ ] Mobile mantiene inset/radios como firma del sistema
- [ ] Componentes viven en `components/layout/` según arquitectura

## Acceptance Criteria

- Se pueden apilar varios `SectionPanel` y el ritmo visual coincide con la referencia (aire interno + gap 8px)
- El shell se siente premium/editorial sin contenido decorativo extra
- Ninguna sección posterior necesita reimplementar inset, radio o contenedor base
- Desktop y mobile muestran el shell de forma coherente

## Definition of Done

- Primitivos de layout reutilizables y documentados por uso en el código
- Cumple checklist y acceptance criteria
- Desbloquea `T003-navbar` y el resto de secciones
