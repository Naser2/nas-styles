/**
 * Unified Typography Token System
 * Merges AppleStore Typography + LayoutConstants Typography
 *
 * Based on Apple Design System Architecture
 * Provides consistent typography across all components
 */

import { TextStyle } from 'react-native';

// ==================== TIER 1: PRIMITIVE TYPOGRAPHY ====================

/**
 * Font Families
 */
export const fontFamilies = {
  // Apple SF Pro fonts (for Apple-style components)
  sfProDisplay: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  sfProText: 'SF Pro Text, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  sfProIcons: 'SF Pro Icons, -apple-system, sans-serif',

  // App fonts (for general app)
  regular: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  medium: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  bold: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',

  // System fallback
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
} as const;

/**
 * Font Sizes (px)
 * Unified scale from both systems
 */
export const fontSizes = {
  // Extra small
  xs: 12,

  // Small
  sm: 14,

  // Base/Medium
  base: 15,
  md: 16,
  body: 17,

  // Large
  lg: 18,
  h2: 19,

  // Extra large
  xl: 20,
  h1: 21,

  // 2xl
  '2xl': 24,

  // 3xl
  '3xl': 32,
  displayMedium: 32,

  // 4xl
  '4xl': 40,
  display: 40,

  // 5xl
  '5xl': 48,

  // Giant (for overlays)
  giant: 540,
} as const;

/**
 * Line Heights
 * Calculated as ratios or fixed values
 */
export const lineHeights = {
  // Tight (1.25)
  tight: 1.25,

  // Normal (1.5)
  normal: 1.5,

  // Relaxed (1.75)
  relaxed: 1.75,

  // Fixed values (Apple-specific)
  display: 44,        // for fontSize 40
  displayMedium: 36,  // for fontSize 32
  h1: 25,             // for fontSize 21
  h2: 23,             // for fontSize 19
  bodyLarge: 25,      // for fontSize 17
  bodyMedium: 21,     // for fontSize 17
  bodySmall: 20,      // for fontSize 14
  caption: 16,        // for fontSize 12
  linkText: 20,       // for fontSize 14
} as const;

/**
 * Font Weights
 */
export const fontWeights = {
  regular: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  semibold: '600' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
} as const;

/**
 * Letter Spacing (px)
 * Apple uses precise letter spacing
 */
export const letterSpacing = {
  tight: -0.374,      // for 17px body
  normal: 0,
  wide: 0.128,        // for 32px display
  h1: 0.231,          // for 21px h1
  h2: 0.228,          // for 19px h2
  body: -0.374,       // for 17px
  bodySmall: -0.224,  // for 14px
} as const;

// ==================== TIER 2: SEMANTIC TYPOGRAPHY ====================

export interface TypographyStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: TextStyle['fontWeight'];
  letterSpacing: number;
}

/**
 * Typography Styles
 * Named styles for different use cases
 */
export const typographyStyles = {
  // ===== DISPLAY STYLES (Apple SF Pro Display) =====

  /**
   * Display - Hero text (40px)
   * Use for: Main headlines, hero sections
   */
  display: {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.display,
    lineHeight: lineHeights.display,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Display Medium (32px)
   * Use for: Section headings, page titles
   */
  displayMedium: {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.displayMedium,
    lineHeight: lineHeights.displayMedium,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.wide,
  },

  // ===== HEADING STYLES =====

  /**
   * H1 - Large headings (21px)
   * Use for: Card titles, section headers
   */
  h1: {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.h1,
    lineHeight: lineHeights.h1,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.h1,
  },

  /**
   * H2 - Medium headings (19px)
   * Use for: Subheadings, card subtitles
   */
  h2: {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.h2,
    lineHeight: lineHeights.h2,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.h2,
  },

  // ===== BODY STYLES (Apple SF Pro Text) =====

  /**
   * Body - Standard text (17px)
   * Use for: Default body text
   */
  body: {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.body,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.body,
  },

  /**
   * Body Medium - Input text (17px)
   * Use for: Form inputs, interactive text
   */
  bodyMedium: {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.body,
    lineHeight: lineHeights.bodyMedium,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.body,
  },

  /**
   * Body Small - Secondary text (14px)
   * Use for: Captions, metadata, descriptions
   */
  bodySmall: {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.bodySmall,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.bodySmall,
  },

  /**
   * Caption - Smallest text (12px)
   * Use for: Labels, hints, fine print
   */
  caption: {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.caption,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },

  // ===== LINK STYLES =====

  /**
   * Link Text (14px)
   * Use for: Links, CTAs in ribbons
   */
  linkText: {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.linkText,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.bodySmall,
  },

  // ===== APP-SPECIFIC STYLES (UberMoveText) =====

  /**
   * App Body - App default text (15px)
   * Use for: General app content
   */
  appBody: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.base,
    lineHeight: fontSizes.base * lineHeights.normal,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * App Heading - App headings (18px)
   * Use for: App screen titles
   */
  appHeading: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.lg,
    lineHeight: fontSizes.lg * lineHeights.tight,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },

  // ===== SPECIAL STYLES =====

  /**
   * Giant Overlay - Huge decorative text (540px)
   * Use for: YearOverlay, decorative backdrops
   */
  giantOverlay: {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.giant,
    lineHeight: fontSizes.giant * 1.1,
    fontWeight: fontWeights.bold,
    letterSpacing: letterSpacing.normal,
  },

  // ============ SEMANTIC TYPOGRAPHY VARIANTS (NEW) ============
  // Context-aware typography for common UI patterns

  // ----- SCREEN-LEVEL TYPOGRAPHY -----

  /**
   * Screen Title - Main screen header (40px)
   * Use for: Screen titles, page headers
   */
  'screen.title': {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.display,
    lineHeight: lineHeights.display,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Screen Subtitle - Secondary screen text (17px)
   * Use for: Screen descriptions, subtitles
   */
  'screen.subtitle': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.body,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.body,
  },

  // ----- SECTION-LEVEL TYPOGRAPHY -----

  /**
   * Section Heading - Section title (32px)
   * Use for: Section headers, category titles
   */
  'section.heading': {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.displayMedium,
    lineHeight: lineHeights.displayMedium,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.wide,
  },

  /**
   * Section Subheading - Section subtitle (19px)
   * Use for: Section subtitles, descriptions
   */
  'section.subheading': {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.h2,
    lineHeight: lineHeights.h2,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.h2,
  },

  // ----- CARD-LEVEL TYPOGRAPHY -----

  /**
   * Card Title - Card header (21px)
   * Use for: Card titles, item names
   */
  'card.title': {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.h1,
    lineHeight: lineHeights.h1,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.h1,
  },

  /**
   * Card Subtitle - Card secondary text (14px)
   * Use for: Card subtitles, metadata
   */
  'card.subtitle': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.bodySmall,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.bodySmall,
  },

  /**
   * Card Body - Card content text (17px)
   * Use for: Card descriptions, body text
   */
  'card.body': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.body,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.body,
  },

  // ----- HERO-LEVEL TYPOGRAPHY -----

  /**
   * Hero Title - Hero section title (40px, white)
   * Use for: Hero headlines on dark backgrounds
   */
  'hero.title': {
    fontFamily: fontFamilies.sfProDisplay,
    fontSize: fontSizes.display,
    lineHeight: lineHeights.display,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Hero Subtitle - Hero section subtitle (17px, white)
   * Use for: Hero descriptions on dark backgrounds
   */
  'hero.subtitle': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.body,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.body,
  },

  // ----- CTA TYPOGRAPHY -----

  /**
   * CTA Primary - Primary button text (16px)
   * Use for: Primary action buttons
   */
  'cta.primary': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.md,
    lineHeight: 20,
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.normal,
  },

  /**
   * CTA Secondary - Secondary button text (14px)
   * Use for: Secondary action buttons, links
   */
  'cta.secondary': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.sm,
    lineHeight: 18,
    fontWeight: fontWeights.medium,
    letterSpacing: letterSpacing.normal,
  },

  // ----- LINK TYPOGRAPHY -----

  /**
   * Link Default - Standard link text (14px)
   * Use for: Inline links, navigation links
   */
  'link.default': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.linkText,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.bodySmall,
  },

  /**
   * Link Nav - Navigation link text (14px)
   * Use for: Navigation menu links
   */
  'link.nav': {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.bodySmall,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.bodySmall,
  },
} as const;

// ==================== TIER 3: COMPONENT TYPOGRAPHY ====================

export const componentTypography = {
  storeCard: {
    title: 'h2',
    address: 'bodySmall',
    status: 'bodySmall',
  },

  searchBar: {
    input: 'bodyMedium',
  },

  ribbon: {
    text: 'linkText',
    link: 'linkText',
  },

  promoCard: {
    title: 'display',
    subtitle: 'bodySmall',
    cta: 'linkText',
  },

  button: {
    text: 'bodyMedium',
  },

  yearOverlay: {
    text: 'giantOverlay',
  },
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Create custom typography style
 */
export function createTypographyStyle(
  overrides: Partial<TypographyStyle>
): TypographyStyle {
  return {
    fontFamily: fontFamilies.sfProText,
    fontSize: fontSizes.md,
    lineHeight: fontSizes.md * lineHeights.normal,
    fontWeight: fontWeights.regular,
    letterSpacing: letterSpacing.normal,
    ...overrides,
  };
}

/**
 * Get typography style by name
 */
export function getTypographyStyle(
  styleName: keyof typeof typographyStyles
): TypographyStyle {
  return typographyStyles[styleName];
}

// ==================== TYPE EXPORTS ====================

export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type LineHeight = keyof typeof lineHeights;
export type FontWeight = keyof typeof fontWeights;
export type LetterSpacing = keyof typeof letterSpacing;
export type TypographyStyleName = keyof typeof typographyStyles;
export type ComponentTypographyKey = keyof typeof componentTypography;
