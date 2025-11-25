/**
 * Layout Constants - Actual values for UI layout
 *
 * This file contains the actual layout values that components use.
 * The interfaces are defined in UIThemeKeys.ts
 *
 * ARCHITECTURE NOTE:
 * - Spacing values now sourced from tokens (SSOT)
 * - Export shape unchanged for backwards compatibility
 * - 300+ components depend on this file - DO NOT change export structure
 */

import { BaseColorTokens } from './BaseColorTokens';
import { spacing as tokenSpacing } from './tokens/spacing.tokens';

// Typography system matching the original app
export const Typography = {
  fontFamily: {
    regular: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    medium: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
    bold: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 15,      // Original app's base font size
    lg: 16,
    xl: 18,        // Header titles
    '2xl': 20,
    '3xl': 24,
    '4xl': 32,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// Layout constants matching the original app
export const Layout = {
  buttonHeight: 54,        // Consistent button height - updated to match form inputs
  headerHeight: 40,        // iOS header height from original
  borderRadius: {
    none: 0,              // Primary buttons had no radius
    sm: 4,                // Social buttons had 4px radius
    md: 8,
    lg: 12,
    full: 9999,
  },
  // Spacing values from unified token system (SSOT)
  // Maps semantic names to numeric token keys
  spacing: {
    xs: tokenSpacing[1],   // 4px
    sm: tokenSpacing[2],   // 8px
    md: tokenSpacing[4],   // 16px
    lg: tokenSpacing[6],   // 24px
    xl: tokenSpacing[8],   // 32px
    xxl: tokenSpacing[16], // 64px
  },
  container: {
    padding: 10,          // Original content padding
  },
  // Flex layout utilities
  row: {
    flexDirection: 'row' as const,
  },
  col: {
    flexDirection: 'column' as const,
  },
  wrap: {
    flexWrap: 'wrap' as const,
  },
  // Button-specific layout constants
  button: {
    borderWidth: 1,       // Standard border width
    borderRadius: 8,      // Rounded corners as requested (8px)
    marginTop: 12,        // Margin from the top of the preceding element
    elevation: 0,         // No Android shadow by default
    shadowOpacity: 0,     // No iOS shadow by default
    activeOpacity: 0.8,   // Touch feedback opacity
    container: {
      width: '100%',
      marginTop: 16,      // Layout.spacing.md
    },
  },
  // Absolute positioning utilities
  absolute: {
    right: {
      position: 'absolute' as const,
      top: 0,
      right: 5,
      padding: 3,
    },
    left: {
      position: 'absolute' as const,
      top: 0,
      left: 5,
      padding: 5,
    },
    center: {
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    topCenter: {
      position: 'absolute' as const,
      top: 0,
      left: '50%',
      transform: [{ translateX: -50 }],
      padding: 5,
    },
    bottomCenter: {
      position: 'absolute' as const,
      bottom: 0,
      left: '50%',
      transform: [{ translateX: -50 }],
      padding: 5,
    },
    topLeft: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      padding: 5,
    },
    topRight: {
      position: 'absolute' as const,
      top: 0,
      right: 0,
      padding: 5,
    },
    bottomLeft: {
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      padding: 5,
    },
    bottomRight: {
      position: 'absolute' as const,
      bottom: 0,
      right: 0,
      padding: 5,
    },
  },
  // Gray color utilities
  gray: {
    15: BaseColorTokens.offWhite5,
    25: BaseColorTokens.offWhite3,
    50: BaseColorTokens.gray50,
    100: BaseColorTokens.gray100,
    200: BaseColorTokens.gray200,
    300: BaseColorTokens.gray300,
    400: BaseColorTokens.gray400,
    500: BaseColorTokens.gray500,
    600: BaseColorTokens.gray600,
    700: BaseColorTokens.gray700,
    800: BaseColorTokens.gray800,
    900: BaseColorTokens.gray900,
  },
} as const; 