/**
 * Unified Gradient Token System
 * Merges namedGradients + Apple presets
 */

// ==================== TIER 1: PRIMITIVE GRADIENTS ====================

/**
 * Gradient definitions (for expo-linear-gradient)
 */
export const gradients = {
  // ===== PRIMARY GRADIENTS =====
  primary: ['#667eea', '#764ba2'],
  secondary: ['#f093fb', '#f5576c'],

  // ===== APPLE-STYLE GRADIENTS =====
  appleMacOS: ['#0EA5E9', '#3B82F6', '#8B5CF6'],
  appleIPhone: ['#06B6D4', '#10B981', '#34D399'],
  appleIPad: ['#8B5CF6', '#A855F7', '#EC4899'],
  appleSunrise: ['#F59E0B', '#F97316', '#EC4899', '#8B5CF6'],
  appleSunset: ['#FB923C', '#F472B6', '#A78BFA', '#60A5FA'],
  appleOcean: ['#06B6D4', '#3B82F6', '#6366F1', '#8B5CF6'],
  appleForest: ['#22C55E', '#10B981', '#14B8A6', '#06B6D4'],
  appleMidnight: ['#1E293B', '#334155', '#475569', '#64748B'],
  appleWarmth: ['#FDE047', '#FACC15', '#FB923C', '#F87171'],
  appleCool: ['#E0F2FE', '#BAE6FD', '#7DD3FC', '#38BDF8'],

  // ===== CARD GRADIENTS =====
  sscRadialInner: ['#46e0ff', '#211d60', 'rgba(11, 8, 33, 0.45)', 'transparent'],
  sscBottomFade: ['transparent', '#000000'],
  imageShadowOverlay: ['rgba(0, 0, 0, 0.65)', 'rgba(0, 0, 0, 0)'],
  heroOverlay: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.2)'],
  adp: ['#d0768c', '#bf46a5', '#7029b2', '#341d8c'],

  // ===== GLASS EFFECTS =====
  glassLight: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)'],
  glassDark: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.05)'],
} as const;

/**
 * CSS gradient strings (for web)
 */
export const cssGradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  appleMacOS: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #8B5CF6 100%)',
  // ... (all others follow same pattern)
  sscRadial: 'radial-gradient(circle at 50% -10%, #46e0ff 0%, #211d60 43%, rgba(11, 8, 33, 0.45) 80%, transparent 85%)',
  sscBottom: 'linear-gradient(to bottom, transparent 90%, #000 100%)',
} as const;

// ==================== TIER 2: SEMANTIC GRADIENTS ====================

export const semanticGradients = {
  // Backgrounds
  pageBg: gradients.appleCool,
  heroBg: gradients.appleOcean,
  cardBg: gradients.glassLight,

  // Overlays
  imageOverlay: gradients.imageShadowOverlay,
  heroOverlay: gradients.heroOverlay,

  // Special effects
  glass: gradients.glassLight,
  glassDark: gradients.glassDark,
} as const;

// ==================== TIER 3: COMPONENT GRADIENTS ====================

export const componentGradients = {
  sscCard: {
    radialInner: gradients.sscRadialInner,
    bottomFade: gradients.sscBottomFade,
    radialInnerStart: { x: 0.5, y: 0 },
    radialInnerEnd: { x: 0.5, y: 0.6 },
    bottomFadeStart: { x: 0, y: 0 },
    bottomFadeEnd: { x: 0, y: 1 },
  },

  meetWithAppleCard: {
    shadowOverlay: gradients.imageShadowOverlay,
    start: { x: 0, y: 1 },
    end: { x: 0, y: 0 },
  },

  heroSection: {
    overlay: gradients.heroOverlay,
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },

  ribbon: {
    // Ribbon uses solid colors, no gradient
    // (kept for completeness)
  },
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Get gradient colors by name
 */
export function getGradient(
  gradientName: keyof typeof gradients
): string[] {
  return [...gradients[gradientName]];
}

/**
 * Get CSS gradient string
 */
export function getCssGradient(
  gradientName: keyof typeof cssGradients
): string {
  return cssGradients[gradientName];
}

/**
 * Create custom gradient
 */
export function createGradient(colors: string[]): string[] {
  return colors;
}

/**
 * Type exports
 */
export type GradientName = keyof typeof gradients;
export type CssGradientName = keyof typeof cssGradients;
