/**
 * Button Presets - Pre-composed button style objects
 */

import { primitiveColors } from '../tokens/primitives/colors.primitive';

export const buttonPresets = {
  // Base styles shared across all button variants
  base: {
    borderRadius: 8,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexDirection: 'row' as const,
    marginTop: 12,
  },

  // Text styles
  text: {
    fontSize: 16,
    fontWeight: '500' as const,
    lineHeight: 20,
  },

  // Primary button variant
  primary: {
    light: {
      backgroundColor: primitiveColors.black,
      borderColor: 'transparent',
      borderWidth: 0,
    },
    dark: {
      backgroundColor: primitiveColors.white,
      borderColor: 'transparent',
      borderWidth: 0,
    },
  },

  // Secondary button variant
  secondary: {
    light: {
      backgroundColor: '#f8f9fa',
      borderColor: '#dee2e6',
      borderWidth: 1,
    },
    dark: {
      backgroundColor: '#3A3A3A',
      borderColor: '#48484A',
      borderWidth: 1,
    },
  },

  // Outline button variant
  outline: {
    light: {
      backgroundColor: 'transparent',
      borderColor: primitiveColors.black,
      borderWidth: 1,
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: primitiveColors.white,
      borderWidth: 1,
    },
  },

  // Inverted button variant
  inverted: {
    light: {
      backgroundColor: '#2C2C2E',
      borderColor: '#48484A',
      borderWidth: 0,
    },
    dark: {
      backgroundColor: primitiveColors.white,
      borderColor: primitiveColors.white,
      borderWidth: 0,
    },
  },

  // Disabled state
  disabled: {
    light: {
      backgroundColor: '#F0F0F0',
      borderColor: '#E0E0E0',
      opacity: 0.6,
    },
    dark: {
      backgroundColor: '#2C2C2E',
      borderColor: '#48484A',
      opacity: 0.6,
    },
  },
} as const;

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'inverted';
export type ButtonTheme = 'light' | 'dark';
