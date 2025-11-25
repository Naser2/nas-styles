/**
 * Unified Spacing Token System
 * 8px base grid system
 *
 * Based on Apple Design System Architecture
 */

// ==================== TIER 1: PRIMITIVE SPACING ====================

/**
 * Base spacing scale (multiples of 4px)
 */
export const spacing = {
  0: 0,
  1: 4,     // 0.25rem
  2: 8,     // 0.5rem
  3: 12,    // 0.75rem
  4: 16,    // 1rem
  5: 20,    // 1.25rem
  6: 24,    // 1.5rem
  7: 28,    // 1.75rem
  8: 32,    // 2rem
  9: 36,    // 2.25rem
  10: 40,   // 2.5rem
  11: 44,   // 2.75rem
  12: 48,   // 3rem
  14: 56,   // 3.5rem
  16: 64,   // 4rem
  20: 80,   // 5rem
  24: 96,   // 6rem
  28: 112,  // 7rem
  32: 128,  // 8rem
} as const;

// ==================== TIER 2: SEMANTIC SPACING ====================

/**
 * Semantic spacing names
 */
export const semanticSpacing = {
  // Padding
  paddingXs: spacing[1],      // 4px
  paddingSm: spacing[2],      // 8px
  paddingMd: spacing[4],      // 16px
  paddingLg: spacing[6],      // 24px
  paddingXl: spacing[8],      // 32px
  padding2xl: spacing[16],    // 64px

  // Margins
  marginXs: spacing[1],       // 4px
  marginSm: spacing[2],       // 8px
  marginMd: spacing[4],       // 16px
  marginLg: spacing[6],       // 24px
  marginXl: spacing[8],       // 32px
  margin2xl: spacing[16],     // 64px

  // Gaps (for flexbox/grid)
  gapXs: spacing[1],          // 4px
  gapSm: spacing[2],          // 8px
  gapMd: spacing[4],          // 16px
  gapLg: spacing[6],          // 24px
  gapXl: spacing[8],          // 32px

  // Container padding
  containerPaddingSm: spacing[4],   // 16px (mobile)
  containerPaddingMd: 22,           // 22px (tablet)
  containerPaddingLg: spacing[0],   // 0px (desktop, uses max-width)
} as const;

// ==================== TIER 3: COMPONENT SPACING ====================

export const componentSpacing = {
  storeCard: {
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 30,
    minHeight: 120,
    gap: 4,
  },

  storeGallery: {
    cardSpacingSm: 30,
    cardSpacingMd: 30,
    cardSpacingLg: 40,
    paddingVertical: 20,
    paddingBottom: 20,
  },

  searchBar: {
    height: 37,
    borderRadius: 10,
    paddingHorizontal: 12,
    iconSpacing: 8,
  },

  ribbon: {
    paddingVertical: 14,
    paddingHorizontalSm: 16,
    paddingHorizontalMd: 22,
    paddingHorizontalLg: 0,
    linkMarginLeft: 6,
  },

  findStoreScreen: {
    searchSectionPaddingVertical: 8,
    searchInputMarginTop: 16,
    searchInputMarginBottom: 8,
    resultsMarginTopSm: 36,
    resultsMarginTopMd: 44,
    galleryMarginTopSm: 35,
    galleryMarginTopMd: 44,
  },

  promoCard: {
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 40,
    logoMarginBottom: 24,
    titleMarginBottom: 8,
    subtitleMarginBottom: 16,
    ctaMarginTop: 8,
  },

  appleInput: {
    borderRadius: 33,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 50,
    labelPaddingTop: 12,
  },

  appleMessage: {
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 16,
    marginTop: 8,
    pointerSize: 8,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 24,
    gap: 16,
  },

  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    offset: -22, // half outside container
  },
} as const;

/**
 * Responsive spacing helpers
 */
export const responsiveSpacing = {
  container: {
    paddingHorizontal: (breakpoint: 'small' | 'medium' | 'large') => {
      const map = {
        small: semanticSpacing.containerPaddingSm,
        medium: semanticSpacing.containerPaddingMd,
        large: semanticSpacing.containerPaddingLg,
      };
      return map[breakpoint];
    },
  },

  section: {
    marginTop: (breakpoint: 'small' | 'medium' | 'large') => {
      const map = {
        small: spacing[9],  // 36px
        medium: spacing[11], // 44px
        large: spacing[11],  // 44px
      };
      return map[breakpoint];
    },
  },
} as const;

// ==================== TYPE EXPORTS ====================

export type SpacingKey = keyof typeof spacing;
export type SemanticSpacingKey = keyof typeof semanticSpacing;
export type ComponentSpacingKey = keyof typeof componentSpacing;
