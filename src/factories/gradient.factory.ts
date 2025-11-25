/**
 * Gradient Factory - Functions that return gradient values
 */

import {
  primitiveGradients,
  cssGradients,
  GradientKey,
  CssGradientKey
} from '../tokens/semantic/gradients.semantic';

/**
 * Get React Native gradient array for expo-linear-gradient
 */
export function getGradient(key: GradientKey): readonly string[] {
  return primitiveGradients[key];
}

/**
 * Get CSS gradient string for web
 */
export function getCssGradient(key: CssGradientKey): string {
  return cssGradients[key];
}

/**
 * Create a custom gradient array
 */
export function createGradient(...colors: string[]): readonly string[] {
  return colors as readonly string[];
}

/**
 * Get gradient with custom direction (for CSS)
 */
export function getDirectionalGradient(
  key: GradientKey,
  direction: string = '135deg'
): string {
  const colors = primitiveGradients[key];
  const stops = colors.map((color, i) =>
    `${color} ${Math.round((i / (colors.length - 1)) * 100)}%`
  ).join(', ');

  return `linear-gradient(${direction}, ${stops})`;
}
