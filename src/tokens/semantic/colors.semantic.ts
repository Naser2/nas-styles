/**
 * Semantic Color Tokens - Theme-aware color mappings
 * Maps primitive colors to semantic purposes
 */

import { primitiveColors } from '../primitives/colors.primitive';

export const semanticColors = {
  light: {
    // Backgrounds
    bg: {
      primary: primitiveColors.white,
      secondary: primitiveColors.gray50,
      surface: primitiveColors.white,
      surfaceVariant: '#e9ecef',
      card: primitiveColors.white,
      elevated: primitiveColors.white,
      muted: primitiveColors.offWhite3,
      smoke: '#F5F5F7',
    },

    // Text
    text: {
      primary: '#11181C',
      secondary: '#888',
      muted: '#687076',
      inverse: primitiveColors.white,
      disabled: '#ced4da',
    },

    // Interactive
    interactive: {
      primary: primitiveColors.black,
      primaryHover: '#333333',
      accent: primitiveColors.brandPrimary,
      accentHover: primitiveColors.brandPrimaryDark,
      focus: primitiveColors.brandPrimary,
    },

    // State
    state: {
      success: '#28a745',
      successBg: '#d1e7dd',
      successText: '#0f5132',
      warning: '#ffc107',
      warningBg: 'rgba(245,133,32,0.08)',
      warningText: 'rgba(245,133,32,1)',
      error: '#dc3545',
      errorBg: '#fff2f4',
      errorText: '#e30000',
      info: '#29B6F6',
    },

    // Borders
    border: {
      default: primitiveColors.gray200,
      muted: '#dee2e6',
      card: '#E5E7EB',
      input: primitiveColors.gray50,
      focus: primitiveColors.brandPrimary,
    },

    // Icons
    icon: {
      primary: '#11181C',
      secondary: '#687076',
      accent: primitiveColors.brandPrimary,
      muted: '#B0B0B0',
    },

    // Buttons
    button: {
      primaryBg: primitiveColors.black,
      primaryText: primitiveColors.white,
      primaryBorder: 'transparent',
      secondaryBg: '#f8f9fa',
      secondaryText: '#11181C',
      secondaryBorder: '#dee2e6',
      outlineBg: 'transparent',
      outlineText: primitiveColors.black,
      outlineBorder: primitiveColors.black,
      disabledBg: '#F0F0F0',
      disabledText: '#A0A0A0',
      disabledBorder: '#E0E0E0',
    },

    // Input
    input: {
      bg: primitiveColors.gray50,
      text: '#11181C',
      placeholder: '#545353',
      border: primitiveColors.gray50,
      label: primitiveColors.gray750,
    },

    // Status tones
    status: {
      approvedBg: '#d1e7dd',
      approvedText: '#0f5132',
      pendingBg: '#fff3cd',
      pendingText: '#664d03',
      rejectedBg: '#f8d7da',
      rejectedText: '#842029',
    },

    // Role tones
    role: {
      rider: '#b197fc',
      driver: '#0d6efd',
      guide: '#20c997',
      admin: '#6610f2',
    },

    // Accents
    accent: {
      gold: '#D4AF37',
      silver: '#B8C2CC',
      delivery: '#D4AF37',
    },

    // Navigation
    nav: {
      activeIcon: primitiveColors.deepPurple,
      activeBg: '#a370fc26',
    },

    // Gradients
    gradient: {
      primaryStart: '#00a0a8',
      primaryEnd: '#7d2ae8',
      secondaryStart: '#667eea',
      secondaryEnd: '#764ba2',
    },

    // Prose/Content
    prose: {
      primary: 'hsl(0deg 0% 92.9%)',
      surface200: 'hsl(0deg 0% 95.3%)',
      surface300: 'rgba(26, 26, 26, 0.9)',
    },

    // Common
    divider: '#dee2e6',
    separator: '#EDEDED',
    sidebarLine: '#dee2e6',

    // Canva palette
    canva: {
      lightBlue: primitiveColors.canvaBlue,
      lightGreen: primitiveColors.canvaGreen,
      lightPurple: primitiveColors.canvaLightPurple,
      peachBackground: primitiveColors.canvaPeach,
      offWhiteBackground: primitiveColors.canvaOffWhite,
      primaryBlue: primitiveColors.canvaPrimaryBlue,
      border: primitiveColors.canvaBorderLight,
      divider: primitiveColors.canvaDivider,
      textSecondary: primitiveColors.canvaTextSecondary,
      vibrantPurple: primitiveColors.canvaVibrantPurple,
    },
  },

  dark: {
    // Backgrounds
    bg: {
      primary: primitiveColors.gray50Dark,
      secondary: '#232323',
      surface: '#2C2C2C',
      surfaceVariant: '#49454e',
      card: primitiveColors.gray900,
      elevated: '#2C2C2C',
      muted: '#1a1a1a',
      smoke: '#232325',
    },

    // Text
    text: {
      primary: primitiveColors.white,
      secondary: '#ECEDEE',
      muted: '#B0B0B0',
      inverse: '#121212',
      disabled: '#666666',
    },

    // Interactive
    interactive: {
      primary: primitiveColors.white,
      primaryHover: '#e0e0e0',
      accent: primitiveColors.brandPrimary,
      accentHover: primitiveColors.brandPrimaryLight,
      focus: primitiveColors.brandPrimary,
    },

    // State
    state: {
      success: '#4CAF50',
      successBg: '#0f5132',
      successText: '#d1e7dd',
      warning: '#FFEB3B',
      warningBg: '#3d3419',
      warningText: '#ffeb3b',
      error: '#EF5350',
      errorBg: '#3d1319',
      errorText: '#ef5350',
      info: '#29B6F6',
    },

    // Borders
    border: {
      default: '#3A3A3A',
      muted: '#3A3A3A',
      card: 'rgba(255,255,255,0.10)',
      input: primitiveColors.gray50,
      focus: primitiveColors.brandPrimary,
    },

    // Icons
    icon: {
      primary: primitiveColors.white,
      secondary: '#B0B0B0',
      accent: primitiveColors.white,
      muted: '#B0B0B0',
    },

    // Buttons
    button: {
      primaryBg: primitiveColors.white,
      primaryText: primitiveColors.white,
      primaryBorder: 'transparent',
      secondaryBg: '#3A3A3A',
      secondaryText: primitiveColors.white,
      secondaryBorder: '#48484A',
      outlineBg: 'transparent',
      outlineText: primitiveColors.white,
      outlineBorder: primitiveColors.white,
      disabledBg: '#2C2C2E',
      disabledText: '#666666',
      disabledBorder: '#48484A',
    },

    // Input
    input: {
      bg: primitiveColors.gray950,
      text: primitiveColors.white,
      placeholder: '#5E5E5E',
      border: primitiveColors.gray50,
      label: primitiveColors.gray750,
    },

    // Status tones
    status: {
      approvedBg: '#0f5132',
      approvedText: '#d1e7dd',
      pendingBg: '#664d03',
      pendingText: '#fff3cd',
      rejectedBg: '#842029',
      rejectedText: '#f8d7da',
    },

    // Role tones
    role: {
      rider: '#b197fc',
      driver: '#0d6efd',
      guide: '#20c997',
      admin: '#6610f2',
    },

    // Accents
    accent: {
      gold: '#D4AF37',
      silver: '#B8C2CC',
      delivery: '#D4AF37',
    },

    // Navigation
    nav: {
      activeIcon: primitiveColors.deepPurple,
      activeBg: '#a370fc26',
    },

    // Gradients
    gradient: {
      primaryStart: '#00a0a8',
      primaryEnd: '#7d2ae8',
      secondaryStart: '#667eea',
      secondaryEnd: '#764ba2',
    },

    // Prose/Content
    prose: {
      primary: 'hsl(0deg 0% 9%)',
      surface200: 'hsl(0deg 0% 15%)',
      surface300: 'rgba(19, 19, 19, 0.4)',
    },

    // Common
    divider: '#3A3A3A',
    separator: 'rgba(255,255,255,0.20)',
    sidebarLine: 'rgba(255,255,255,0.10)',

    // Canva palette
    canva: {
      lightBlue: primitiveColors.canvaBlue,
      lightGreen: primitiveColors.canvaGreen,
      lightPurple: primitiveColors.canvaLightPurple,
      peachBackground: primitiveColors.canvaPeach,
      offWhiteBackground: primitiveColors.canvaOffWhite,
      primaryBlue: primitiveColors.canvaPrimaryBlue,
      border: primitiveColors.canvaBorderLight,
      divider: primitiveColors.canvaDivider,
      textSecondary: primitiveColors.canvaTextSecondary,
      vibrantPurple: primitiveColors.canvaVibrantPurple,
    },
  },
} as const;

export type SemanticColorTheme = keyof typeof semanticColors;
export type SemanticColors = typeof semanticColors.light;
