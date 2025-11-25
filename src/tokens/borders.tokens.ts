/**
 * Unified Border Token System
 * Border widths, radii, and styles
 */

// ==================== BORDER WIDTHS ====================

export const borderWidths = {
  none: 0,
  hairline: 1,
  thin: 2,
  medium: 4,
  thick: 6,
} as const;

// ==================== BORDER RADII ====================

export const borderRadii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  full: 9999,

  // Apple-specific
  storeCard: 18,
  searchBar: 10,
  appleInput: 33,
  appleMessage: 8,
  navButton: 22,
  button: 24,
} as const;

// ==================== BORDER STYLES ====================

export const borderStyles = {
  solid: 'solid',
  dashed: 'dashed',
  dotted: 'dotted',
} as const;

// ==================== COMPONENT BORDERS ====================

export const componentBorders = {
  storeCard: {
    width: borderWidths.none,
    radius: borderRadii.storeCard,
  },

  appleCard: {
    width: borderWidths.thick,
    radius: borderRadii.none,
  },

  searchBar: {
    width: borderWidths.hairline,
    radius: borderRadii.searchBar,
  },

  appleInput: {
    width: borderWidths.hairline,
    radius: borderRadii.appleInput,
  },

  appleMessage: {
    width: borderWidths.none,
    radius: borderRadii.appleMessage,
  },

  button: {
    width: borderWidths.none,
    radius: borderRadii.button,
  },
} as const;

// ==================== TYPE EXPORTS ====================

export type BorderWidth = keyof typeof borderWidths;
export type BorderRadius = keyof typeof borderRadii;
export type BorderStyle = keyof typeof borderStyles;
