/**
 * Image Size Scale
 * Standard image dimension progression
 */

export const imageSizes = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
  xxl: 56,
  '3xl': 64,
  '4xl': 72,
  '5xl': 80,
  '6xl': 88,
  '7xl': 96,
  '8xl': 104,
  '9xl': 112,
  '10xl': 120,
} as const;

export type ImageSize = keyof typeof imageSizes;

/**
 * Icon Size Scale (smaller progression)
 */
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  xxl: 32,
} as const;

export type IconSize = keyof typeof iconSizes;

/**
 * Avatar Size Scale
 */
export const avatarSizes = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  xxl: 64,
  '3xl': 80,
  '4xl': 96,
} as const;

export type AvatarSize = keyof typeof avatarSizes;
