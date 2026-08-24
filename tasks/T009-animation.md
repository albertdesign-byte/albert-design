# T009 — Animation

## Objetivo

Añadir motion intencional y sobrio que refuerce jerarquía y presencia, sin ruido.

## Contexto

Docs piden 2–3 motions con propósito: entrada de hero, estados de nav/lista/footer, reveal suave de cases.  
Respetar `prefers-reduced-motion`.  
Referencias: [`docs/animation.md`](../docs/animation.md), [`docs/design-principles.md`](../docs/design-principles.md), [`docs/roadmap.md`](../docs/roadmap.md).

## Dependencias

- `T004-hero`
- `T005-portfolio`
- `T008-footer`
- `T003-navbar` (para transición del chip activo)
- Home estructuralmente completa en contenido

## Alcance

- Entrada del hero: fade + leve rise; stagger corto (bio → headline)
- Transición suave del estado activo en `NavPill`
- Reveal al scroll de case study panels (opacity + translateY pequeño; scale de media opcional y sutil)
- Hover de `WorkListItem` y CTA “Envía un saludo”
- Duraciones ≈200–500ms, easing suave
- Respeto total a `prefers-reduced-motion` (desactivar o simplificar)
- Preferir CSS / APIs nativas; no añadir librerías pesadas salvo necesidad justificada y acordada

## Fuera de alcance

- Parallax agresivo, counters, confetti, loaders ornamentales
- Rediseño de layout o nuevos componentes de sección
- Micro-interacciones en cada elemento del DOM
- Deploy — `T010`
- Lottie / videos decorativos

## Checklist

- [ ] Hero entrance implementada y sutil
- [ ] NavPill active transition suave
- [ ] Case studies revelan al scroll sin jank evidente
- [ ] Work list + footer CTA tienen hover editorial
- [ ] `prefers-reduced-motion` verificado
- [ ] No más motion del necesario (evitar ruido)
- [ ] Performance aceptable en mobile
- [ ] Sin dependencias de animación injustificadas

## Acceptance Criteria

- Se perciben al menos 2–3 motions intencionales que mejoran la presencia
- Con reduced motion, la experiencia sigue siendo completa y estática-amigable
- Nada distrae del contenido ni parece template genérico
- La landing se siente más viva sin perder quiet luxury

## Definition of Done

- Motion documentado en `docs/animation.md` y código alineados
- Cumple checklist y acceptance criteria
- Desbloquea cierre de calidad para `T010-deploy`
