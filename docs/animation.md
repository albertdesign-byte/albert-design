# Animación

Recomendaciones de motion. Sin implementar aún.  
Principios visuales → [design-principles.md](./design-principles.md).

---

## Animaciones recomendadas

1. **Entrada del hero** — bio y headline con fade + leve rise; stagger corto (headline después de bio)
2. **NavPill** — transición suave del chip activo (background / color)
3. **Case studies al scroll** — reveal suave del panel (opacity + translateY pequeño); media con scale muy sutil opcional
4. **Contact scroll experience** — tres escenas con dissolve por opacidad; sección en panel claro; oscuro solo en el visual central; sin carrusel
5. **WorkListItem hover** — desplazamiento leve o cambio de opacidad/underline; year puede reaccionar
6. **Footer CTA** — hover en “Envía un saludo” (color o underline editorial)

---

## Principios de motion

- Usar motion para crear presencia y jerarquía, no ruido
- 2–3 motions intencionales bastan en el primer ship
- Duraciones cortas (≈200–500ms); easing suave
- Respetar `prefers-reduced-motion`
- Nada de parallax agresivo, counters, ni confetti
- Ship al menos 2–3 motions intencionales en superficies visuales lideradas (entrada, hover, transición de sección)

---

## Prioridad de implementación

| Prioridad | Motion | Momento |
|---|---|---|
| Alta | Entrada del hero | Tras tener Hero estable |
| Alta | Hover WorkList / Footer CTA | Tras listas y footer |
| Media | Reveal de case studies al scroll | Tras portfolio básico |
| Media | Transición NavPill activa | Con header interactivo |

Detalle de cuándo encaja en el build → [roadmap.md](./roadmap.md).
