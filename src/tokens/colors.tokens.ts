/**
 * Unified Color Token System
 * Tier 1: Primitive → Tier 2: Semantic → Tier 3: Component
 *
 * Based on Apple Design System Architecture
 * Integrates AppleStoreColors + BaseColorTokens into single source of truth
 */

// ==================== TIER 1: PRIMITIVE COLORS ====================
// Raw color values - never use directly in components

export const primitiveColors = {
  // Neutrals (Apple grayscale)
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F5F5F7',
  gray100: '#E8E8ED',
  gray200: '#D2D2D7',
  gray300: '#B0B0B5',
  gray400: '#86868B',
  gray500: '#6E6E73',
  gray600: '#555555',
  gray700: '#424245',
  gray800: '#2C2C2E',
  gray900: '#1D1D1F',
  gray950: '#0F1113',

  // Blues (Apple interactive)
  blue50: '#E0F2FE',
  blue100: '#BAE6FD',
  blue200: '#7DD3FC',
  blue300: '#38BDF8',
  blue400: '#0EA5E9',
  blue500: '#0071E3', // Apple primary blue
  blue600: '#06C',    // Apple link blue
  blue700: '#0056B3',
  blue800: '#004080',
  blue900: '#002952',

  // Purples (Theme primary)
  purple50: '#F3E8FF',
  purple100: '#E9D5FF',
  purple200: '#D8B4FE',
  purple300: '#C084FC',
  purple400: '#A855F7',
  purple500: '#8b3dff', // App primary
  purple600: '#7C3AED',
  purple700: '#6D28D9',
  purple800: '#5B21B6',
  purple900: '#4C1D95',

  // Greens (Success)
  green400: '#4ADE80',
  green500: '#22C55E',
  green600: '#16A34A',
  green700: '#15803D',
  green800: '#28A745', // Apple success

  // Reds (Error/Danger)
  red400: '#F87171',
  red500: '#EF4444',
  red600: '#ed2f2f',  // Apple input error
  red700: '#DC3545',  // Apple semantic error
  red800: '#B91C1C',

  // Yellows (Warning)
  yellow400: '#FACC15',
  yellow500: '#F0AD4E', // Apple warning
  yellow600: '#d6a200', // Warning text
  yellow700: '#CA8A04',

  // Special (Canva-inspired)
  cyan400: '#22D3EE',
  cyan500: '#06B6D4',
  cyan600: '#0891B2',
  teal400: '#2DD4BF',
  teal500: '#14B8A6',
  orange400: '#FB923C',
  orange500: '#F97316',
  pink400: '#F472B6',
  pink500: '#EC4899',
} as const;

// ==================== TIER 2: SEMANTIC COLORS ====================
// Contextual mapping - use in components via theme

export const semanticColors = {
  light: {
    // Backgrounds
    bg: {
      primary: primitiveColors.white,
      secondary: primitiveColors.gray50,
      tertiary: primitiveColors.gray100,
      surface: primitiveColors.white,
      overlay: primitiveColors.gray200,
    },

    // Text
    text: {
      primary: primitiveColors.gray900,
      secondary: primitiveColors.gray500,
      tertiary: primitiveColors.gray400,
      onPrimary: primitiveColors.gray50,
      onAccent: primitiveColors.white,
      disabled: primitiveColors.gray300,
    },

    // Interactive
    interactive: {
      primary: primitiveColors.purple500,
      primaryHover: primitiveColors.purple600,
      primaryPress: primitiveColors.purple700,
      secondary: primitiveColors.blue500,
      secondaryHover: primitiveColors.blue600,
      link: primitiveColors.blue600,
      linkHover: primitiveColors.blue500,
      focus: primitiveColors.blue500,
    },

    // Borders
    border: {
      default: primitiveColors.gray400,
      light: primitiveColors.gray100,
      divider: primitiveColors.gray200,
      focus: primitiveColors.blue500,
      error: primitiveColors.red600,
    },

    // States
    state: {
      success: primitiveColors.green800,
      warning: primitiveColors.yellow500,
      error: primitiveColors.red700,
      info: primitiveColors.blue500,
    },

    // Inputs
    input: {
      bg: primitiveColors.white,
      bgOverlay: 'rgba(255, 255, 255, 0.8)',
      border: primitiveColors.gray400,
      borderError: primitiveColors.red600,
      text: primitiveColors.gray900,
      placeholder: primitiveColors.gray500,
      icon: primitiveColors.gray400,
    },

    // Cards
    card: {
      bg: primitiveColors.white,
      bgSecondary: primitiveColors.gray50,
      shadow: 'rgba(0, 0, 0, 0.04)',
      imagePlaceholder: primitiveColors.gray100,
      border: primitiveColors.white,
    },

    // Ribbons
    ribbon: {
      bg: primitiveColors.white,
      bgInitial: primitiveColors.blue500,
      text: primitiveColors.gray900,
      textInitial: primitiveColors.gray50,
      link: primitiveColors.blue600,
      linkInitial: primitiveColors.gray50,
    },
  },

  dark: {
    // Backgrounds
    bg: {
      primary: primitiveColors.black,
      secondary: primitiveColors.gray900,
      tertiary: primitiveColors.gray800,
      surface: primitiveColors.gray800,
      overlay: primitiveColors.gray700,
    },

    // Text
    text: {
      primary: primitiveColors.white,
      secondary: primitiveColors.gray300,
      tertiary: primitiveColors.gray400,
      onPrimary: primitiveColors.gray900,
      onAccent: primitiveColors.white,
      disabled: primitiveColors.gray600,
    },

    // Interactive
    interactive: {
      primary: primitiveColors.purple400,
      primaryHover: primitiveColors.purple500,
      primaryPress: primitiveColors.purple600,
      secondary: primitiveColors.blue400,
      secondaryHover: primitiveColors.blue500,
      link: primitiveColors.blue400,
      linkHover: primitiveColors.blue300,
      focus: primitiveColors.blue400,
    },

    // Borders
    border: {
      default: primitiveColors.gray600,
      light: primitiveColors.gray700,
      divider: primitiveColors.gray700,
      focus: primitiveColors.blue400,
      error: primitiveColors.red500,
    },

    // States
    state: {
      success: primitiveColors.green500,
      warning: primitiveColors.yellow400,
      error: primitiveColors.red500,
      info: primitiveColors.blue400,
    },

    // Inputs
    input: {
      bg: primitiveColors.gray800,
      bgOverlay: 'rgba(28, 28, 30, 0.8)',
      border: primitiveColors.gray600,
      borderError: primitiveColors.red500,
      text: primitiveColors.white,
      placeholder: primitiveColors.gray400,
      icon: primitiveColors.gray400,
    },

    // Cards
    card: {
      bg: primitiveColors.gray800,
      bgSecondary: primitiveColors.gray900,
      shadow: 'rgba(0, 0, 0, 0.3)',
      imagePlaceholder: primitiveColors.gray700,
      border: primitiveColors.gray700,
    },

    // Ribbons
    ribbon: {
      bg: primitiveColors.gray800,
      bgInitial: primitiveColors.blue500,
      text: primitiveColors.white,
      textInitial: primitiveColors.white,
      link: primitiveColors.blue400,
      linkInitial: primitiveColors.white,
    },
  },
} as const;

// ==================== TIER 3: COMPONENT TOKENS ====================
// Component-specific color assignments

export const componentColors = {
  storeCard: {
    bg: 'card.bg',
    shadow: 'card.shadow',
    imagePlaceholder: 'card.imagePlaceholder',
    title: 'text.primary',
    address: 'text.secondary',
    status: 'text.secondary',
    borderRadius: 18,
  },

  searchBar: {
    bg: 'input.bgOverlay',
    border: 'input.border',
    text: 'input.text',
    placeholder: 'input.placeholder',
    icon: 'input.icon',
    borderRadius: 10,
  },

  ribbon: {
    bg: 'ribbon.bg',
    bgInitial: 'ribbon.bgInitial',
    text: 'ribbon.text',
    textInitial: 'ribbon.textInitial',
    link: 'ribbon.link',
    linkInitial: 'ribbon.linkInitial',
  },

  promoCard: {
    bg: 'card.bgSecondary',
    border: 'card.border',
    title: 'text.primary',
    subtitle: 'text.secondary',
  },

  appleMessage: {
    error: {
      bg: '#fcf2f2',
      text: primitiveColors.red600,
      pointer: '#fcf2f2',
    },
    warning: {
      bg: '#fff9e6',
      text: primitiveColors.yellow600,
      pointer: '#fff9e6',
    },
  },
} as const;

// ==================== TYPE EXPORTS ====================

export type PrimitiveColor = keyof typeof primitiveColors;
export type ThemeMode = 'light' | 'dark';
export type SemanticColorKey = keyof typeof semanticColors.light;
export type ComponentColorKey = keyof typeof componentColors;
