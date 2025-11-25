/**
 * nas-styles Token System
 * Central export for all design tokens
 */

// Legacy token exports (backwards compatibility)
export * from './colors.tokens';
export * from './typography.tokens';
export * from './spacing.tokens';
export * from './shadows.tokens';
export * from './gradients.tokens';
export * from './breakpoints.tokens';
export * from './animations.tokens';
export * from './borders.tokens';
export * from './BaseColorTokens';

// Re-export commonly used functions (backwards compatibility)
export { createTypographyStyle, getTypographyStyle } from './typography.tokens';
export { getShadow, getAppleShadow } from './shadows.tokens';
export { getGradient, getCssGradient, createGradient } from './gradients.tokens';

// NEW SRP Architecture exports (use aliases to avoid naming conflicts with legacy)
export { primitiveColors as srpPrimitiveColors } from './primitives';
export type { PrimitiveColor as SrpPrimitiveColor } from './primitives';

export { semanticColors as srpSemanticColors, primitiveGradients as srpGradients } from './semantic';
export { cssGradients as srpCssGradients, semanticGradients as srpSemanticGradients } from './semantic';
export type { SemanticColorTheme, SemanticColors, CssGradientKey, SemanticGradientKey } from './semantic';

export { imageSizes, iconSizes, avatarSizes } from './scales';
export type { ImageSize, IconSize, AvatarSize } from './scales';
