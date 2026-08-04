# Principios de diseño

Cómo debe sentirse y comportarse la experiencia visual.  
Tokens y escalas concretas → [design-system.md](./design-system.md).  
Visión de marca → [vision.md](./vision.md).

---

## Dirección

Minimalista. Editorial. Muchísimo espacio en blanco. Premium.  
Inspirado en estudios de diseño europeos.

---

## Atributos

| Atributo | Aplicación |
|---|---|
| Minimalista | Pocos elementos por viewport; tipografía y espacio hacen el trabajo |
| Editorial | Titulares serif grandes; labels sans pequeños; asimetría deliberada |
| Espacio en blanco | Respiración generosa dentro de secciones; paneles aireados |
| Premium | Detalle tipográfico, radios consistentes, mockups nítidos, sin ruido |
| Europeo | Quiet luxury: confianza silenciosa, no “startup SaaS template” |

---

## Análisis de composición (referencia)

### Composición observada

- Lienzo blanco con paneles internos casi a sangre y **inset exterior de 8px**
- Hero asimétrico: bio estrecha a la izquierda, titular serif monumental abajo-derecha
- Portfolio como **bloques grandes redondeados** apilados con gap de **8px** (full-bleed o split ~38/62)
- Secciones editoriales posteriores en dos o tres columnas (label estrecho + contenido)
- Cierre en dos actos: lista tipográfica “Últimos trabajos” + footer CTA oscuro con mucho aire

### Jerarquía visual

1. Titular serif del hero
2. Mockups / superficies de case studies
3. Manifiesto y CTAs tipográficos
4. Bio, nav, listas y labels secundarios

### Ritmo vertical

Secciones altas (~530–940px en desktop), separación mínima entre paneles (8px) y mucho vacío *dentro* de cada bloque.  
El lujo está en el aire interno, no en bordes decorativos.

---

## Principios operativos

1. **Intención antes que decoración**  
   Si un elemento no ayuda a entender, sentir o actuar, sobra.

2. **Jerarquía brutalmente clara**  
   El ojo debe saber qué leer primero, segundo y tercero.

3. **Una sección, un trabajo**  
   No mezclar prueba social, servicios, agenda y CTA en el mismo bloque sin razón.

4. **Consistencia > novedad local**  
   Un patrón repetido con cuidado supera cinco inventos distintos.

5. **Restricción creativa**  
   Pocos tipos de botón, pocos radios, pocos pesos tipográficos. Variar con composición, no con inventario infinito.

6. **Marca primero en el hero**  
   El nombre Albert Design debe leerse como señal de chrome clara; el titular serif es el ancla emocional del primer viewport, sin competir con clutter secundario.

7. **Una composición, no un dashboard**  
   El primer viewport es una pieza: marca, bio, headline, nav — sin stats, agendas ni promos.

8. **Imagen como ancla en cases**  
   Los mockups y fotos son el contenido; no decoración abstracta suelta.

9. **Full-bleed / panel dominante en portfolio**  
   Los case studies viven como planos grandes redondeados, no como cards pequeñas flotando en un grid denso.

10. **Sin overlays decorativos en el hero**  
    No badges, stickers, chips ni callouts flotando sobre el espacio principal del hero.

11. **Cards con frugalidad**  
    Cards solo donde el bloque es un escenario de proyecto o una interacción (formulario, lista).

12. **Accesibilidad no negociable**  
    Contraste, foco visible, semántica HTML, targets táctiles, motion respetuoso (`prefers-reduced-motion`).

13. **Performance es diseño**  
    Imágenes pesadas, fuentes de más y animaciones costosas degradan la marca.

14. **El sitio es el portfolio**  
    Cada decisión debe poder defenderse como trabajo de Albert Design.

---

## Geometría

- Paneles de sección con **radios grandes** (sensación de hoja / card suave)
- Nav central en **pill**
- Por defecto, sin sombras multi-capa ni glows
- Sin badges flotantes sobre el hero
- Cards solo donde el bloque es un escenario de proyecto o una interacción (formulario, lista)

---

## Evitar

- Looks genéricos de IA (purple gradients, cream+terracotta por defecto, broadsheet denso)
- Stats strips, pill clusters, icon rows en el hero
- Copiar mockups píxel a píxel; preservar proporción y distribución
- Dark mode incompleto o inconsistente (si se adopta, se adopta entero; si no, no fingirlo)
- Nuevos radios, sombras o colores “solo para esta sección” sin razón
- Múltiples CTAs compitiendo con el mismo peso visual sin jerarquía
