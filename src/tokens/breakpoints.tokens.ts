/**
 * Unified Breakpoint Token System
 * Apple-style responsive breakpoints
 */

// ==================== PRIMITIVE BREAKPOINTS ====================

/**
 * Apple Store breakpoints (px)
 * Matches Apple's exact media query breakpoints
 */
export const breakpoints = {
  small: 734,   // <= 734px (mobile devices)
  medium: 1068, // 735px - 1068px (tablets)
  large: 1069,  // >= 1069px (desktop)
} as const;

/**
 * Container max-widths at each breakpoint (px)
 */
export const containerWidths = {
  small: 335,  // Max content width on mobile
  medium: 692, // Max content width on tablet
  large: 980,  // Max content width on desktop (can go up to 1018px)
} as const;

/**
 * Responsive padding (px)
 */
export const responsivePadding = {
  small: {
    horizontal: 16,
    vertical: 22,
  },
  medium: {
    horizontal: 22,
    vertical: 8,
  },
  large: {
    horizontal: 0,  // Desktop uses max-width instead
    vertical: 8,
  },
} as const;

/**
 * Scale multipliers for responsive sizing
 */
export const scaleMultipliers = {
  small: 1,
  medium: 1.15,
  large: 1.3,
} as const;

// ==================== SEMANTIC BREAKPOINTS ====================

export const deviceTypes = {
  mobile: 'small',
  tablet: 'medium',
  desktop: 'large',
} as const;

// ==================== HELPER TYPES ====================

export type Breakpoint = keyof typeof breakpoints;
export type DeviceType = 'small' | 'medium' | 'large';
export type Orientation = 'portrait' | 'landscape';

export interface ResponsiveValue<T> {
  small: T;
  medium: T;
  large: T;
}
