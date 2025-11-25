/**
 * Semantic Gradient Tokens
 * Named gradient purposes and React Native gradient arrays
 */

// Raw gradient color arrays for expo-linear-gradient
export const primitiveGradients = {
  primary: ['#667eea', '#764ba2'] as const,
  secondary: ['#f093fb', '#f5576c'] as const,
  adp: ['#d0768c', '#bf46a5', '#7029b2', '#341d8c'] as const,
  warm: ['#fa709a', '#fee140'] as const,
  sunset: ['#ff6b6b', '#feca57'] as const,
  ocean: ['#667eea', '#764ba2'] as const,
  sky: ['#89f7fe', '#66a6ff'] as const,
  purple: ['#667eea', '#764ba2'] as const,
  pink: ['#f093fb', '#f5576c'] as const,
  blue: ['#4facfe', '#00f2fe'] as const,
  green: ['#43e97b', '#38f9d7'] as const,
  orange: ['#fa709a', '#fee140'] as const,
  imageShadowOverlay: ['rgba(0, 0, 0, 0.65)', 'rgba(0, 0, 0, 0)'] as const,
  heroOverlay: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.2)'] as const,
  glass: ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)'] as const,
  glassDark: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.05)'] as const,
} as const;

// CSS gradient strings for web
export const cssGradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  adp: 'linear-gradient(170deg, #d0768c 0%, #bf46a5 10%, #7029b2 50%, #341d8c 100%)',
  sscCard: 'radial-gradient(circle at 50% -10%, #46e0ff 0%, #211d60 43%, rgba(11, 8, 33, 0.45) 80%, transparent 85%), linear-gradient(to bottom, transparent 90%, #000 100%)',
  imageShadowOverlay: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)',
  heroOverlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
  warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  sunset: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
  ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  sky: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
  purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  pink: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  blue: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  green: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  orange: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  glassDark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
} as const;

// Semantic gradient mappings
export const semanticGradients = {
  hero: primitiveGradients.ocean,
  card: primitiveGradients.glass,
  overlay: primitiveGradients.imageShadowOverlay,
  heroOverlay: primitiveGradients.heroOverlay,
  accent: primitiveGradients.adp,
  cta: primitiveGradients.primary,
} as const;

export type GradientKey = keyof typeof primitiveGradients;
export type CssGradientKey = keyof typeof cssGradients;
export type SemanticGradientKey = keyof typeof semanticGradients;
