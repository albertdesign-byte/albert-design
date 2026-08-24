/** Pure scroll→scene math. Keep UI components free of timing constants. */

export const CONTACT_SCENE_COUNT = 3;

/** Tall track so scene crossfades feel slow and editorial. */
export const CONTACT_SCROLL_VH = 360;

export function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/**
 * Opacities for the three contact scenes from pinned-scroll progress (0→1).
 * Wide, overlapping windows = soft editorial dissolve, not a carousel snap.
 */
export function getSceneOpacities(progress: number): [number, number, number] {
  const p = clamp01(progress);
  const scene0 = 1 - smoothstep(0.18, 0.42, p);
  const scene1 =
    smoothstep(0.18, 0.42, p) * (1 - smoothstep(0.52, 0.76, p));
  const scene2 = smoothstep(0.52, 0.76, p);
  return [scene0, scene1, scene2];
}

/** Subtle rise while a scene enters (px). */
export function getSceneTranslateY(opacity: number): number {
  return (1 - opacity) * 10;
}
