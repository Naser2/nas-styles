/**
 * Shadow Factory - Functions that return shadow styles
 */

import { shadowPresets, ShadowSize, ShadowTheme } from '../presets/shadows.presets';

/**
 * Get shadow style for a given size and theme
 */
export function getShadow(size: ShadowSize, theme: ShadowTheme = 'light') {
  return shadowPresets[theme][size];
}

/**
 * Get Apple-style shadow (slightly different opacity curve)
 */
export function getAppleShadow(size: ShadowSize, theme: ShadowTheme = 'light') {
  const baseShadow = shadowPresets[theme][size];
  return {
    ...baseShadow,
    shadowOpacity: baseShadow.shadowOpacity * 0.8,
    shadowRadius: baseShadow.shadowRadius * 1.2,
  };
}
