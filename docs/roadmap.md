# Roadmap

Orden de construcción y definición de hecho.  
Arquitectura → [architecture.md](./architecture.md).  
Componentes → [components.md](./components.md).  
Secciones → [sections.md](./sections.md).

---

## Antes de escribir UI

1. Releer `docs/` (empezar por [vision.md](./vision.md) y [design-principles.md](./design-principles.md))
2. Confirmar qué sección se construye y cuál es su único trabajo
3. Reutilizar tokens, tipografía y componentes existentes antes de crear variantes

No crear todos los componentes el día 1.  
Empezar por shell, hero, `SectionPanel`, un `CaseStudyCard` y `WorkList`.

---

## Orden de construcción sugerido

1. **Tokens** en `globals.css` (color, type, space, radius) — ver [design-system.md](./design-system.md)
2. **`SiteShell` + `SectionPanel` + `SiteHeader` / `NavPill`**
3. **`HeroSection`** (`HeroBio`, `HeroHeadline`, `BrandMark`, `SocialLinks`)
4. **Un `CaseStudyCard` full + un split** (`CaseStudyBand`, `DeviceMockup` / media)
5. **Clientes / manifiesto / logos**
6. **Solicitud**
7. **Últimos trabajos + Footer CTA**
8. **Motion** y contenido real de proyectos — ver [animation.md](./animation.md) y [content.md](./content.md)

### Proceso de crecimiento

1. Fundaciones — tokens, tipografía, layout shell, BrandMark
2. Home — hero + pocas secciones con oficio
3. Páginas clave — trabajo, about, contacto (según prioridad)
4. Sistema — documentar patrones recurrentes en componentes
5. Refino — motion, performance, contenido real, SEO

---

## Checklist de UI nueva

- [ ] ¿La marca / jerarquía sigue siendo clara?
- [ ] ¿Hay una sola idea dominante en el bloque?
- [ ] ¿Se evitaron cards innecesarias, pills y clutter?
- [ ] ¿Tipografía y color usan tokens del sistema?
- [ ] ¿Funciona en mobile y desktop?
- [ ] ¿Hay estado hover/focus accesible?
- [ ] ¿El motion (si existe) aporta jerarquía?
- [ ] ¿El copy suena a Albert Design (claro, directo, sin clichés)?

---

## Anti-patrones prohibidos (salvo decisión explícita documentada)

- Hero con stats, agendas, direcciones o promos secundarias
- Overlays decorativos sobre media principal del hero
- Múltiples CTAs compitiendo con el mismo peso visual sin jerarquía
- Nuevos radios, sombras o colores “solo para esta sección”
- Dependencias de UI pesadas sin necesidad real
- Dark mode incompleto o inconsistente
- Copiar layouts genéricos de templates SaaS
- Esclavitud píxel a píxel respecto a Figma (preservar experiencia, no clonar)

---

## Definition of Done (landing)

La Home está lista cuando:

1. Reproduce la experiencia de la referencia (composición y ritmo), sin esclavitud píxel a píxel
2. Tipografía, espacio y paneles se sienten premium y europeos
3. Funciona en desktop y mobile
4. Accesibilidad básica (semántica, foco, contraste, reduced motion)
5. Podría mostrarse como trabajo de Albert Design sin disclaimers

---

## Cambios a la documentación

`docs/` evoluciona con la marca, pero no se reescribe a la ligera.

- Actualizar cuando cambie posicionamiento, tono, tokens o arquitectura real
- Si el código y estos documentos divergen, o se alinea el código o se actualiza la docs — nunca dos verdades
- Decisiones puntuales de implementación viven en el código; decisiones de marca y sistema viven aquí
