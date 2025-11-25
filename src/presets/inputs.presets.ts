/**
 * Input Presets - Pre-composed input style objects
 */

import { primitiveColors } from '../tokens/primitives/colors.primitive';

export const inputPresets = {
  // Base container styles
  container: {
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'solid' as const,
    overflow: 'hidden' as const,
    width: '100%' as const,
    height: 50,
    paddingHorizontal: 16,
  },

  // Text styles
  text: {
    fontSize: 16,
    fontWeight: 'normal' as const,
    lineHeight: 24,
  },

  // Label styles
  label: {
    fontSize: 17,
    fontWeight: 'normal' as const,
    lineHeight: 20,
    marginBottom: 4,
    paddingLeft: 8,
  },

  // Error text styles
  error: {
    fontSize: 13,
    fontWeight: 'normal' as const,
    lineHeight: 16,
    marginTop: 2,
  },

  // Theme-specific styles
  light: {
    default: {
      backgroundColor: primitiveColors.gray100,
      borderColor: primitiveColors.gray50,
      color: '#11181C',
      placeholderColor: '#545353',
      labelColor: primitiveColors.gray750,
    },
    focused: {
      borderColor: primitiveColors.brandPrimary,
    },
    error: {
      borderColor: '#dc3545',
    },
    disabled: {
      backgroundColor: '#F0F0F0',
      borderColor: '#E0E0E0',
      opacity: 0.6,
    },
  },

  dark: {
    default: {
      backgroundColor: primitiveColors.gray950,
      borderColor: primitiveColors.gray50,
      color: primitiveColors.white,
      placeholderColor: '#5E5E5E',
      labelColor: primitiveColors.gray750,
    },
    focused: {
      borderColor: primitiveColors.brandPrimary,
    },
    error: {
      borderColor: '#EF5350',
    },
    disabled: {
      backgroundColor: '#2C2C2E',
      borderColor: '#48484A',
      opacity: 0.6,
    },
  },
} as const;

export type InputState = 'default' | 'focused' | 'error' | 'disabled';
export type InputTheme = 'light' | 'dark';
