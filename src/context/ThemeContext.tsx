import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { BaseColorTokens, baseGradientTokens, nativeGradientArrays, GradientKey } from '../tokens/BaseColorTokens';
import { Typography } from '../tokens/LayoutConstants';

// AsyncStorage mock - consumers should provide their own implementation
const AsyncStorage = {
  getItem: async (_key: string): Promise<string | null> => null,
  setItem: async (_key: string, _value: string): Promise<void> => {},
};
import { Appearance, ColorSchemeName } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ActiveTheme = 'light' | 'dark';

const tintColorLight = '#000000';
const tintColorDark = '#fff';

export interface CanvaPalette {
  lightBlue: string;
  lightGreen: string;
  lightPurple: string;
  peachBackground: string;
  offWhiteBackground: string;
  subtlePurple: string;
  primaryGradientStart: string;
  primaryGradientEnd: string;
  secondaryGradientStart: string;
  secondaryGradientEnd: string;
  backgroundGradientStart: string;
  backgroundGradientEnd: string;
  primaryShadow: string;
  darkTextAlpha: string;
  textInverse: string;
  darkText: string;
  border: string;
  textSecondary: string;
  textDisabled: string;
  purpleAlpha: string;
  darkPurple: string;
  lightPurpleAlpha: string;
  purpleHover: string;
  lightPurpleBg: string;
  divider: string;
  whiteAlpha: string;
  whiteAlphaStrong: string;
  primaryBlue: string;
  primaryLightBlue: string;
  cardShadow: string;
  darkRed: string;
  lightRed: string;
  orange: string;
  vibrantPurple: string;
}

interface ThemeColors {
  primary: string;
  themePrimary: string;
  accent1: string;
  accent2: string;
  tertiary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  onPrimary: string;
  onSurface: string;
  outline: string;
  background: string;
  card: string;
  surface: string;
  surfaceVariant: string;
  text: string;
  textMuted: string;
  textInverse: string;
  textSecondary: string;
  textSecondaryLowLight: string;
  secondaryTextMuted: string;
  tierceryTextMuted: string;
  quadiaryTextMuted: string;
  border: string;
  divider: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  // Apple-style error/warning colors
  bgError: string;
  bgErrorBorder: string;
  fgError: string;
  bgWarning: string;
  bgWarningBorder: string;
  fgWarning: string;
  iconPrimary: string;
  iconAccent: string;
  iconMuted: string;
  buttonPrimaryBackground: string;
  buttonPrimaryText: string;
  buttonPrimaryBorder: string;
  buttonSecondaryBackground: string;
  buttonSecondaryText: string;
  buttonSecondaryBorder: string;
  buttonOutlineBackground: string;
  buttonOutlineText: string;
  buttonOutlineBorder: string;
  buttonInvertedBackground: string;
  buttonInvertedText: string;
  buttonInvertedBorder: string;
  // Gradient colors
  gradientPrimaryStart: string;
  gradientPrimaryEnd: string;
  gradientSecondaryStart: string;
  gradientSecondaryEnd: string;
  // Named gradients
  gradientAdp: string[];
  // Button disabled states
  buttonDisabledBackground: string;
  buttonDisabledBorder: string;
  buttonDisabledText: string;
  selectionControl: string;
  inputBackground: string;
  inputText: string;
  inputPlaceholder: string;
  inputBorder: string;
  inputFontFamily: string;
  inputFontSize: number;
  inputFontWeight: string;
  inputLineHeight: number;
  labelColor: string;
  labelFontFamily: string;
  labelFontSize: number;
  labelFontWeight: string;
  labelLineHeight: number;
  // Form styling
  errorTextColor: string;
  errorTextFontSize: number;
  errorTextFontFamily: string;
  errorTextFontWeight: string;
  errorTextLineHeight: number;
  formGap: number;
  labelMarginBottom: number;
  labelPaddingLeft: number;
  smartInputMarginTop: number;
  smartInputMarginBottom: number;
  // Form wrapper styling
  formWrapperPaddingTop: number;
  formWrapperPaddingRight: number;
  formWrapperPaddingBottom: number;
  formWrapperPaddingLeft: number;
  formBackground: string; // Add form background color
  // legacy tokens for compatibility
  secondary: string;
  secondaryLight: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  activeTintColor: string; // Active tab icon color
  activeNavigationBackground: string; // Active navigation background color
  mainSecondaryColor: string; // Main secondary color
  disabled: string;
  // --- ADDED ---
  cardBorder: string;
  separator: string;
  topText: string;
  secondaryText: string;
  smoke: string; // Add smoke color
  baseGray05: string;
  baseGray80: string;
  // status tones
  statusApprovedBg: string;
  statusApprovedText: string;
  statusPendingBg: string;
  statusPendingText: string;
  statusRejectedBg: string;
  statusRejectedText: string;
  // role tones
  riderTone: string;
  driverTone: string;
  guideTone: string;
  adminTone: string;
  // delivery accent for special status
  deliveryAccent: string;
  // component visuals
  sidebarLine: string;
  // border radius
  borderRadius: number;
  // font sizes
  backgroundSurface200: string;
  backgroundSurface300: string;
  backgroundSurface400: string;
  backgroundSurface500: string;
  font: {
    size: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  };
  // prose styles
  prose: {
    color_primary: string;
  };

  // image sizes
  image: {
    size: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      '3xl': number;
      '4xl': number;
      '5xl': number;
      '6xl': number;
      '7xl': number;
      '8xl': number;
      '9xl': number;
      '10xl': number;
    };
  };
  canva: CanvaPalette;
  // Post-specific colors
  postPrimary: string;
  postBackground: string;
  postSurface: string;
  postGrey: string;
  // Common colors
  white: string;
  black: string;
}

export interface ThemeContextType {
  mode: ThemeMode;
  activeTheme: ActiveTheme;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (mode: ThemeMode) => void;
  getShadow: (size: 'small' | 'medium' | 'large') => object;
  getInputStyle: () => object;
  getLabelStyle: () => object;
  getDefaultButtonStyle: () => object;
  getErrorTextStyle: () => object;
  getFormGapStyle: () => object;
  getSmartInputContainerStyle: () => object;
  getFormWrapperStyle: () => object;
  getTextXsStyle: () => object;
  getProseColorPrimaryStyle: () => object;
  getHighlightProseStyle: () => object;
  getDefaultBorderStyle: () => object;
  getImageSizeStyle: (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl') => { width: number; height: number };
  toggleTheme: () => void;
  // Gradient helper functions
  getGradient: (gradientKey: GradientKey) => readonly string[];
  getGradientString: (gradientKey: keyof typeof baseGradientTokens) => string;
}

// GetItDone Theme Colors with #8b3dff as primary
const Colors = {
  light: {
    text: BaseColorTokens.text,
    textMuted: BaseColorTokens.textMuted,
    textSecondaryLowLight: BaseColorTokens.gray200,
    textSecondary: BaseColorTokens.secondaryText,
    tint: BaseColorTokens.tint,
    icon: BaseColorTokens.icon,
    tabIconDefault: BaseColorTokens.tabIconDefault,
    secondary: BaseColorTokens.secondary,
    secondaryLight: BaseColorTokens.secondaryLight,
    warning: BaseColorTokens.warning,
    warning_bg:'rgba(245,133,32,0.08)',
    warning_color:'rgba(245,133,32,1)',
    success_border_color:'#cbf3ec',
    success_background_color:'#cbf3ec',
    success_color: '#25694f',
    error: BaseColorTokens.error,
    success: BaseColorTokens.success,
    // Apple-style error/warning colors
    bgError: '#fff2f4',
    bgErrorBorder: '#e30000',
    fgError: '#e30000',
    bgWarning: '#fae9a3',
    bgWarningBorder: '#c9a33b',
    fgWarning: '#856404',
    surface: BaseColorTokens.surface,
    disabled: BaseColorTokens.disabled,
    // new tokens for compatibility
    accent1: BaseColorTokens.accent1, // gold for status/promos
    accent2: BaseColorTokens.accent2, // silver/platinum for status
    tertiary: BaseColorTokens.tertiary, // tertiary color
    surfaceVariant: BaseColorTokens.surfaceVariant, // variant surface
    primaryContainer: BaseColorTokens.primaryContainer, // light purple container
    onPrimaryContainer: BaseColorTokens.onPrimaryContainer, // text on primary container
    onPrimary: BaseColorTokens.onPrimary, // text on primary background
    onSurface: BaseColorTokens.onSurface, // text on surface
    outline: BaseColorTokens.outline, // outline color for borders
    textInverse: BaseColorTokens.textInverse,
    divider: BaseColorTokens.divider,
    info: BaseColorTokens.info,
    iconPrimary: BaseColorTokens.iconPrimary,
    iconAccent: BaseColorTokens.iconAccent,
    iconMuted: BaseColorTokens.iconMuted,
    buttonPrimaryBackground: '#000', // Use primary color
    buttonPrimaryText: BaseColorTokens.buttonPrimaryText,
    buttonPrimaryBorder: 'transparent',
    buttonSecondaryBackground: BaseColorTokens.buttonSecondaryBackground,
    buttonSecondaryText: BaseColorTokens.buttonSecondaryText,
    buttonSecondaryBorder: BaseColorTokens.buttonSecondaryBorder,
    buttonOutlineBackground: BaseColorTokens.buttonOutlineBackground,
    buttonOutlineText: '#000', // Use primary color
    buttonOutlineBorder: '#000', // Use primary color
    buttonInvertedBackground: BaseColorTokens.buttonInvertedBackground,
    buttonInvertedText: BaseColorTokens.buttonInvertedText,
    buttonInvertedBorder: BaseColorTokens.buttonInvertedBorder,
    // Button disabled states
    buttonDisabledBackground: BaseColorTokens.buttonDisabledBackground,
    buttonDisabledBorder: BaseColorTokens.buttonDisabledBorder,
    buttonDisabledText: BaseColorTokens.buttonDisabledText,
    selectionControl: '#8b3dff', // Updated to new theme color
    inputText: BaseColorTokens.inputText,
    inputPlaceholder: '#545353',
    cardBorder: BaseColorTokens.cardBorder,
    separator: BaseColorTokens.separator,
    topText: BaseColorTokens.topText,
    secondaryText: BaseColorTokens.secondaryText,
    secondaryTextMuted: BaseColorTokens.gray200,
    tierceryTextMuted: BaseColorTokens.gray300,
    quadiaryTextMuted: BaseColorTokens.gray400,
    // status tones
    statusApprovedBg: BaseColorTokens.statusApprovedBg,
    statusApprovedText: BaseColorTokens.statusApprovedText,
    statusPendingBg: BaseColorTokens.statusPendingBg,
    statusPendingText: BaseColorTokens.statusPendingText,
    statusRejectedBg: BaseColorTokens.statusRejectedBg,
    statusRejectedText: BaseColorTokens.statusRejectedText,
    // role tones
    riderTone: BaseColorTokens.riderTone,
    driverTone: BaseColorTokens.driverTone,
    guideTone: BaseColorTokens.guideTone,
    adminTone: BaseColorTokens.adminTone,
    // delivery accent for special status
    deliveryAccent: BaseColorTokens.accent1, // Gold for delivery status
    // UI visual helpers
    sidebarLine: BaseColorTokens.sidebarLine,
    smoke: BaseColorTokens.smoke, // very light gray for light mode
    background: BaseColorTokens.offWhite3,
    tabIconSelected: '#4a2e7e', // Active navigation color
    activeTintColor: BaseColorTokens.deepPurple, // Active tab icon color
    activeNavigationBackground: '#a370fc26', // Active navigation background color
    themePrimary: '#8b3dff', // Updated to new theme color
    primary:'#000',
    mainSecondaryColor: BaseColorTokens.mainSecondaryColor, // Main secondary color
    border: BaseColorTokens.gray200,
    card: BaseColorTokens.white,
    inputBackground: BaseColorTokens.gray50,
    inputBorder: BaseColorTokens.gray50,
    inputFontFamily: Typography.fontFamily.medium,
    inputFontSize: 16,
    inputFontWeight: 'normal',
    inputLineHeight: 24,
    labelColor: BaseColorTokens.gray750,
    labelFontFamily: Typography.fontFamily.medium,
    labelFontSize: 17,
    labelFontWeight: 'normal',
    labelLineHeight: 20,
    // Form styling
    errorTextColor: BaseColorTokens.error,
    errorTextFontSize: 13,
    errorTextFontFamily: Typography.fontFamily.regular,
    errorTextFontWeight: 'normal',
    errorTextLineHeight: 16,
    formGap: 24,
    labelMarginBottom: 4,
    labelPaddingLeft: 8,
    smartInputMarginTop: 8,
    smartInputMarginBottom: 8,
    // Form wrapper styling
    formWrapperPaddingTop: 40,
    formWrapperPaddingRight: 24,
    formWrapperPaddingBottom: 40,
    formWrapperPaddingLeft: 24,
    formBackground: BaseColorTokens.white, // Light gray background for forms
    baseGray05: BaseColorTokens.baseGray05,
    baseGray80: BaseColorTokens.baseGray80,
    // border radius
    borderRadius: 11,
    // font sizes
    font: {
      size: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
      },
    },
    // prose styles
    prose: {
      color_primary: 'hsl(0deg 0% 92.9%)',
    },
    //  // Post-specific colors
    //  postPrimary: '#8b3dff',
    //  postBackground: BaseColorTokens.white,
    //  postSurface: '#1a1d21',
    //  postGrey: '#9BA1A6',
    // Gradient colors
    gradientPrimaryStart: '#00a0a8',
    gradientPrimaryEnd: '#7d2ae8',
    gradientSecondaryStart: '#667eea',
    gradientSecondaryEnd: '#764ba2',
    // Named gradients
    gradientAdp: ['#d0768c', '#bf46a5', '#7029b2', '#341d8c'],
    // background surface colors for prose highlighting
    backgroundSurface200: 'hsl(0deg 0% 95.3%)',
    backgroundSurface300: 'rgba(26, 26, 26, 0.9)',
    backgroundSurface400: 'rgba(40, 40, 40, 0.4)',
    backgroundSurface500: 'rgba(31, 31, 31, 0.9)',
    // image sizes
    image: {
      size: {
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
      },
    },
    // Canva nested palette (non-breaking addition)
    canva: {
      lightBlue: BaseColorTokens.canvaBlue,
      lightGreen: BaseColorTokens.canvaGreen,
      lightPurple: BaseColorTokens.canvaLightPurple,
      peachBackground: BaseColorTokens.canvaPeach,
      offWhiteBackground: BaseColorTokens.canvaOffWhite,
      subtlePurple: BaseColorTokens.canvaLightPurpleAlpha,
      primaryGradientStart: BaseColorTokens.canvaPrimaryGradientStart,
      primaryGradientEnd: BaseColorTokens.canvaPrimaryGradientEnd,
      secondaryGradientStart: BaseColorTokens.canvaPrimaryGradientEnd,
      secondaryGradientEnd: BaseColorTokens.canvaSecondaryGradientEnd,
      backgroundGradientStart: BaseColorTokens.canvaBackgroundGradientStart,
      backgroundGradientEnd: BaseColorTokens.canvaBackgroundGradientEnd,
      primaryShadow: BaseColorTokens.canvaCardShadow,
      darkTextAlpha: BaseColorTokens.canvaTextPrimaryAlpha,
      textInverse: BaseColorTokens.canvaTextInverse,
      darkText: BaseColorTokens.canvaTextDark,
      border: BaseColorTokens.canvaBorderLight,
      textSecondary: BaseColorTokens.canvaTextSecondary,
      textDisabled: BaseColorTokens.canvaTextDisabled,
      purpleAlpha: BaseColorTokens.canvaPurpleAlpha,
      darkPurple: BaseColorTokens.canvaDarkPurple,
      lightPurpleAlpha: BaseColorTokens.canvaPurpleLightAlpha,
      purpleHover: BaseColorTokens.canvaPurpleHover,
      lightPurpleBg: BaseColorTokens.canvaPurpleLight,
      divider: BaseColorTokens.canvaDivider,
      whiteAlpha: BaseColorTokens.canvaWhiteAlpha,
      whiteAlphaStrong: BaseColorTokens.canvaWhiteAlphaStrong,
      primaryBlue: BaseColorTokens.canvaPrimaryBlue,
      primaryLightBlue: BaseColorTokens.canvaPrimaryLightBlue,
      cardShadow: '0px 0px 0px 0.5px ' + BaseColorTokens.canvaShadowGradientStart + ', 0px 1px 2px 0px #182c5923, 0px 2px 4px 0px #182c5923',
      darkRed: BaseColorTokens.canvaDarkRed,
      lightRed: BaseColorTokens.canvaLightRed,
      orange: BaseColorTokens.canvaOrange,
      vibrantPurple: BaseColorTokens.canvaVibrantPurple,
    },
    // Post-specific colors
    postPrimary: '#8b3dff',
    postBackground: BaseColorTokens.offWhite1,
    postSurface: '#1a1d21',
    postGrey: '#9BA1A6',
    // Common colors
    white: BaseColorTokens.white,
    black: '#000000',
  },
  dark: {
    canva: {
      lightBlue: BaseColorTokens.canvaBlue,
      lightGreen: BaseColorTokens.canvaGreen,
      lightPurple: BaseColorTokens.canvaLightPurple,
      peachBackground: BaseColorTokens.canvaPeach,
      offWhiteBackground: BaseColorTokens.canvaOffWhite,
      subtlePurple: BaseColorTokens.canvaLightPurpleAlpha,
      primaryGradientStart: BaseColorTokens.canvaPrimaryGradientStart,
      primaryGradientEnd: BaseColorTokens.canvaPrimaryGradientEnd,
      secondaryGradientStart: BaseColorTokens.canvaPrimaryGradientEnd,
      secondaryGradientEnd: BaseColorTokens.canvaSecondaryGradientEnd,
      backgroundGradientStart: BaseColorTokens.canvaBackgroundGradientStart,
      backgroundGradientEnd: BaseColorTokens.canvaBackgroundGradientEnd,
      primaryShadow: BaseColorTokens.canvaCardShadow,
      darkTextAlpha: BaseColorTokens.canvaTextPrimaryAlpha,
      textInverse: BaseColorTokens.canvaTextInverse,
      darkText: BaseColorTokens.canvaTextDark,
      border: BaseColorTokens.canvaBorderLight,
      textSecondary: BaseColorTokens.canvaTextSecondary,
      textDisabled: BaseColorTokens.canvaTextDisabled,
      purpleAlpha: BaseColorTokens.canvaPurpleAlpha,
      darkPurple: BaseColorTokens.canvaDarkPurple,
      lightPurpleAlpha: BaseColorTokens.canvaPurpleLightAlpha,
      purpleHover: BaseColorTokens.canvaPurpleHover,
      lightPurpleBg: BaseColorTokens.canvaPurpleLight,
      divider: BaseColorTokens.canvaDivider,
      whiteAlpha: BaseColorTokens.canvaWhiteAlpha,
      whiteAlphaStrong: BaseColorTokens.canvaWhiteAlphaStrong,
      primaryBlue: BaseColorTokens.canvaPrimaryBlue,
      primaryLightBlue: BaseColorTokens.canvaPrimaryLightBlue,
      cardShadow: '0px 0px 0px 0.5px ' + BaseColorTokens.canvaShadowGradientStart + ', 0px 1px 2px 0px #182c5923, 0px 2px 4px 0px #182c5923',
      darkRed: BaseColorTokens.canvaDarkRed,
      lightRed: BaseColorTokens.canvaLightRed,
      orange: BaseColorTokens.canvaOrange,
      vibrantPurple: BaseColorTokens.canvaVibrantPurple,
    },
    primary:"#FFFF",
    themePrimary: '#8b3dff',      // Updated to new theme color
    accent1: '#D4AF37',      // Gold/Bronze (Strong positive status, main rewards/promos)
    accent2: '#B8C2CC',      // Silver/Platinum (Subtle positive status, approved, secondary rewards)
    tertiary: '#9ea3a8',     // Lighter tertiary for dark mode
    primaryContainer: '#4a2e7e', // Darker purple container for dark mode
    onPrimaryContainer: '#e6d9ff', // Light text on dark primary container
    onPrimary: '#ffffff',    // White text on primary background
    onSurface: '#e6e1e5',    // Light text on dark surface
    outline: '#938f99',      // Lighter outline for dark mode
    surface: '#2C2C2C',      // Even lighter, for elevated sheets/modals if needed
    surfaceVariant: '#49454e', // Variant surface for dark mode
    textMuted: '#B0B0B0',    // Lighter muted grey for secondary text, descriptions, placeholders
    textInverse: '#121212',  // Text that goes on accent backgrounds (e.g., black text on gold badge)
    border: '#3A3A3A',       // Subtle borders
    divider: '#3A3A3A',      // Same as border for horizontal lines
    success: '#4CAF50',      // Traditional green for explicit "Success!" messages
    warning: '#FFEB3B',      // Yellow for caution
    error: '#EF5350',        // Red for errors, delete actions
    info: '#29B6F6',         // Light blue for informational messages
    // Apple-style error/warning colors (adjusted for dark mode)
    bgError: '#3d1319',
    bgErrorBorder: '#ef5350',
    fgError: '#ef5350',
    bgWarning: '#3d3419',
    bgWarningBorder: '#ffeb3b',
    fgWarning: '#ffeb3b',
    iconAccent: '#FFFF',   // Use primary color
    iconMuted: '#B0B0B0',    // Muted grey for inactive icons, chevrons
    buttonPrimaryBackground: '#FFFF', // Use primary color
    buttonPrimaryText: BaseColorTokens.white,
    buttonPrimaryBorder: 'transparent',
    buttonSecondaryBackground: '#3A3A3A',
    buttonSecondaryText: BaseColorTokens.white,
    textSecondary: BaseColorTokens.gray250,
    textSecondaryLowLight: BaseColorTokens.gray200,
    secondaryTextMuted: BaseColorTokens.gray250,
    tierceryTextMuted: BaseColorTokens.gray300,
    quadiaryTextMuted: BaseColorTokens.gray400,
    buttonSecondaryBorder: '#48484A',
    buttonOutlineBackground: 'transparent',
    buttonOutlineText: '#FFFF', // Use primary color
    buttonOutlineBorder: '#FFFF', // Use primary color you heard about that I see it yeah
    buttonInvertedBackground: '#FFFFFF',
    buttonInvertedText: '#000000',
    buttonInvertedBorder: '#FFFFFF',
    // Button disabled states
    buttonDisabledBackground: '#2C2C2E',
    buttonDisabledBorder: '#48484A',
    buttonDisabledText: '#666666',
    selectionControl: '#8b3dff', // Updated to new theme color
    inputBackground: BaseColorTokens.gray950,
    inputBorder: BaseColorTokens.gray50,
    inputFontFamily: Typography.fontFamily.medium,
    inputFontSize: 16,
    inputFontWeight: 'normal',
    inputLineHeight: 24,
    labelColor: BaseColorTokens.gray750,
    labelFontFamily: Typography.fontFamily.medium,
    labelFontSize: 14,
    labelFontWeight: 'normal',
    labelLineHeight: 20,
    // Form styling
    errorTextColor: BaseColorTokens.error,
    errorTextFontSize: 13,
    errorTextFontFamily: Typography.fontFamily.regular,
    errorTextFontWeight: 'normal',
    errorTextLineHeight: 16,
    formGap: 24,
    labelMarginBottom: 1,
    labelPaddingLeft: 12,
    smartInputMarginTop: 8,
    smartInputMarginBottom: 8,
    // Form wrapper styling
    formWrapperPaddingTop: 40,
    formWrapperPaddingRight: 24,
    formWrapperPaddingBottom: 40,
    formWrapperPaddingLeft: 24,
    formBackground: BaseColorTokens.background, // Dark gray background for forms
    inputPlaceholder: '#5E5E5E',
    // legacy tokens for compatibility
    secondary: '#232323', // neutral dark grey for legacy
    secondaryLight: '#2C2C2C', // slightly lighter for legacy
    tint: '#8b3dff', // Updated to new theme color

    tabIconDefault: '#B0B0B0',
    tabIconSelected: '#4a2e7e', // Active navigation color
    activeTintColor: BaseColorTokens.deepPurple, // Active tab icon color
    activeNavigationBackground: '#a370fc26', // Active navigation background color
    mainSecondaryColor: BaseColorTokens.mainSecondaryColor, // Main secondary color
    disabled: '#666666',
    cardBorder: 'rgba(255,255,255,0.10)',
    separator: 'rgba(255,255,255,0.20)',
    topText: '#FFF',
    secondaryText: '#ECEDEE',
    // status tones
    statusApprovedBg: '#0f5132',
    statusApprovedText: '#d1e7dd',
    statusPendingBg: '#664d03',
    statusPendingText: '#fff3cd',
    statusRejectedBg: '#842029',
    statusRejectedText: '#f8d7da',
    // role tones
    riderTone: '#b197fc',
    driverTone: '#0d6efd',
    guideTone: '#20c997',
    adminTone: '#6610f2',
    // delivery accent for special status
    deliveryAccent: '#D4AF37', // Gold for delivery status (same as light)
    // UI visual helpers
    sidebarLine: 'rgba(255,255,255,0.10)',
    smoke: '#232325', // lighter than secondary for dark mode
    text: BaseColorTokens.white,   
    background: BaseColorTokens.gray50Dark,   // main bg (Uber dark)
    card: BaseColorTokens.gray900,         // card bg (Uber dark)
    iconPrimary: BaseColorTokens.white,  // White for most active/main icons
    inputText: BaseColorTokens.white,
    icon: BaseColorTokens.white,
    baseGray05: BaseColorTokens.baseGray05,
    baseGray80: BaseColorTokens.baseGray80,
    // Gradient colors
    gradientPrimaryStart: '#00a0a8',
    gradientPrimaryEnd: '#7d2ae8',
    gradientSecondaryStart: '#667eea',
    gradientSecondaryEnd: '#764ba2',
    // Named gradients
    gradientAdp: ['#d0768c', '#bf46a5', '#7029b2', '#341d8c'],
    // border radius
    borderRadius: 13,
    // font sizes
    font: {
      size: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
      },
    },
    // prose styles
    prose: {
      color_primary: 'hsl(0deg 0% 9%)',
    },
    // background surface colors for prose highlighting
    backgroundSurface200: 'hsl(0deg 0% 15%)',
    backgroundSurface300: 'rgba(19, 19, 19, 0.4)',
    backgroundSurface400: 'rgba(40, 40, 40, 0.4)',
    backgroundSurface500: 'rgba(31, 31, 31, 0.9)',
    // image sizes
    image: {
      size: {
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
      },
    },
    // Post-specific colors
    postPrimary: '#8b3dff',
    postBackground: '#0f1113',
    postSurface: '#1a1d21',
    postGrey: '#9BA1A6',
    // Common colors
    white: BaseColorTokens.white,
    black: '#000000',
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = '@theme_mode';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [systemTheme, setSystemTheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );
  const [isDark, setIsDark] = useState(false);

  // Determine active theme based on mode and system preference
  const activeTheme: ActiveTheme = useMemo(() => 
    mode === 'system' 
      ? (systemTheme === 'dark' ? 'dark' : 'light')
      : mode === 'dark' 
        ? 'dark' 
        : 'light'
  , [mode, systemTheme]);

  // Get colors for current theme - MEMOIZED
  const colors = useMemo(() => 
    activeTheme === 'dark' ? Colors.dark : Colors.light
  , [activeTheme]);

  // Shadow helper function - MEMOIZED
  const getShadow = useCallback((size: 'small' | 'medium' | 'large') => {
    const shadowStyles = {
      small: {
        shadowColor: activeTheme === 'dark' ? '#000' : '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: activeTheme === 'dark' ? 0.3 : 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
      medium: {
        shadowColor: activeTheme === 'dark' ? '#000' : '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: activeTheme === 'dark' ? 0.4 : 0.15,
        shadowRadius: 4,
        elevation: 4,
      },
      large: {
        shadowColor: activeTheme === 'dark' ? '#000' : '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: activeTheme === 'dark' ? 0.5 : 0.2,
        shadowRadius: 8,
        elevation: 8,
      },
    };
    return shadowStyles[size];
  }, [activeTheme]);

  // Input style helper function - MEMOIZED
  const getInputStyle = useCallback(() => {
    return {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      borderLeftWidth: 2,
      borderRightWidth: 2,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftColor: colors.inputBorder,
      borderRightColor: colors.inputBorder,
      borderTopColor: colors.inputBorder,
      borderBottomColor: colors.inputBorder,
      backgroundColor: BaseColorTokens.gray100,
      color: colors.inputText,
      paddingHorizontal: 16,
      paddingBottom:'2.6%',
      fontSize: colors.inputFontSize,
      fontFamily: colors.inputFontFamily,
      fontWeight: colors.inputFontWeight,
      lineHeight: colors.inputLineHeight,
      height: 50,
      position: 'relative',
      boxSizing: 'border-box',
    };
  }, [colors]);

  // Label style helper function - MEMOIZED
  const getLabelStyle = useCallback(() => {
    return {
      color: colors.labelColor,
      fontFamily: colors.labelFontFamily,
      fontSize: colors.labelFontSize,
      fontWeight: colors.labelFontWeight,
      lineHeight: colors.labelLineHeight,
      margin: 0,
      marginBottom: colors.labelMarginBottom,
      paddingLeft: colors.labelPaddingLeft,
    };
  }, [colors]);

  // Default button style helper function - MEMOIZED
  const getDefaultButtonStyle = useCallback(() => {
    return {
      // Shape properties
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 20,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      paddingTop: 18, // Decreased from 20 to 18 (-2)
      paddingBottom: 18, // Decreased from 20 to 18 (-2)
      paddingLeft: 25,
      paddingRight: 25,
      marginLeft: 0,
      marginTop: 12,
      marginRight: 0,
      marginBottom: 0,
      // Transition properties
      transitionProperty: 'background',
      transitionDuration: 200,
      transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
      cursor: 'pointer',
      // Colors
      color: colors.buttonPrimaryText,
      backgroundColor: colors.buttonPrimaryBackground,
      // Layout properties
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // Border properties
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftStyle: 'none',
      borderTopStyle: 'none',
      borderRightStyle: 'none',
      borderBottomStyle: 'none',
      outline: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      // Appearance
      WebkitAppearance: 'none',
      // Font family
      fontFamily: Typography.fontFamily.medium,
    };
  }, [colors]);

  // Error text style helper function - MEMOIZED
  const getErrorTextStyle = useCallback(() => {
    return {
      color: colors.errorTextColor,
      fontSize: colors.errorTextFontSize,
      fontFamily: colors.errorTextFontFamily,
      fontWeight: colors.errorTextFontWeight,
      lineHeight: colors.errorTextLineHeight,
      marginTop: 2,
    };
  }, [colors]);

  // Form gap style helper function - MEMOIZED
  const getFormGapStyle = useCallback(() => {
    return {
      gap: colors.formGap,
    };
  }, [colors]);

  // SmartInput container style helper function - MEMOIZED
  const getSmartInputContainerStyle = useCallback(() => {
    return {
      marginTop: colors.smartInputMarginTop,
      marginBottom: colors.smartInputMarginBottom,
    };
  }, [colors]);

  // Form wrapper style helper function - MEMOIZED
  const getFormWrapperStyle = useCallback(() => {
    return {
      paddingTop: colors.formWrapperPaddingTop,
      paddingRight: colors.formWrapperPaddingRight,
      paddingBottom: colors.formWrapperPaddingBottom,
      paddingLeft: colors.formWrapperPaddingLeft,
      backgroundColor: colors.formBackground,
      borderRadius: 12, // rounded-lg equivalent
    };
  }, [colors]);

  // Text XS style helper function - MEMOIZED
  const getTextXsStyle = useCallback(() => {
    return {
      fontSize: 12, // .75rem
      lineHeight: 16, // 1rem
    };
  }, []);

  // Prose color primary style helper function - MEMOIZED
  const getProseColorPrimaryStyle = useCallback(() => {
    return {
      color: colors.prose.color_primary,
    };
  }, [colors.prose.color_primary]);

  // Highlight prose style helper function - MEMOIZED
  const getHighlightProseStyle = useCallback(() => {
    return {
      color: 'var(--tw-prose-code)',
      fontWeight: '400',
      fontSize: 14, // .875em
      padding: 3.2, // .2rem .4rem
      backgroundColor: colors.backgroundSurface200,
      borderWidth: 1,
      borderColor: colors.backgroundSurface300,
      borderRadius: 8, // .5rem
    };
  }, [colors.backgroundSurface200, colors.backgroundSurface300]);

  // Default border style helper function - MEMOIZED
  const getDefaultBorderStyle = useCallback(() => {
    return {
      borderWidth: 1,
      borderColor: colors.backgroundSurface300,
      borderStyle: 'solid',
    };
  }, [colors.backgroundSurface300]);

  // Image size style helper function - MEMOIZED
  const getImageSizeStyle = useCallback((size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl'): { width: number; height: number } => {
    const imageSizes = colors.image.size;
    switch (size) {
      case 'xs':
        return { width: imageSizes.xs, height: imageSizes.xs };
      case 'sm':
        return { width: imageSizes.sm, height: imageSizes.sm };
      case 'md':
        return { width: imageSizes.md, height: imageSizes.md };
      case 'lg':
        return { width: imageSizes.lg, height: imageSizes.lg };
      case 'xl':
        return { width: imageSizes.xl, height: imageSizes.xl };
      case 'xxl':
        return { width: imageSizes.xxl, height: imageSizes.xxl };
      case '3xl':
        return { width: imageSizes['3xl'], height: imageSizes['3xl'] };
      case '4xl':
        return { width: imageSizes['4xl'], height: imageSizes['4xl'] };
      case '5xl':
        return { width: imageSizes['5xl'], height: imageSizes['5xl'] };
      case '6xl':
        return { width: imageSizes['6xl'], height: imageSizes['6xl'] };
      case '7xl':
        return { width: imageSizes['7xl'], height: imageSizes['7xl'] };
      case '8xl':
        return { width: imageSizes['8xl'], height: imageSizes['8xl'] };
      case '9xl':
        return { width: imageSizes['9xl'], height: imageSizes['9xl'] };
      case '10xl':
        return { width: imageSizes['10xl'], height: imageSizes['10xl'] };
      default:
        return { width: imageSizes.md, height: imageSizes.md }; // Default to md
    }
  }, [colors.image.size]);

  // Load saved theme preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
          setMode(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };

    loadTheme();
  }, []);

  // Listen to system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme);
    });

    return () => subscription?.remove();
  }, []);

  // Save theme preference - MEMOIZED
  const setTheme = useCallback(async (newMode: ThemeMode) => {
    try {
      setMode(newMode);
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newMode);
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);
  }, [isDark]);

  // Gradient helper functions - MEMOIZED
  const getGradient = useCallback((gradientKey: GradientKey): readonly string[] => {
    return nativeGradientArrays[gradientKey];
  }, []);

  const getGradientString = useCallback((gradientKey: keyof typeof baseGradientTokens): string => {
    return baseGradientTokens[gradientKey];
  }, []);

  // MEMOIZE THE CONTEXT VALUE TO PREVENT UNNECESSARY RE-RENDERS
  const value: ThemeContextType = useMemo(() => ({
    mode,
    activeTheme,
    colors,
    isDark,
    setTheme,
    getShadow,
    getInputStyle,
    getLabelStyle,
    getDefaultButtonStyle,
    getErrorTextStyle,
    getFormGapStyle,
    getSmartInputContainerStyle,
    getFormWrapperStyle,
    getTextXsStyle,
    getProseColorPrimaryStyle,
    getHighlightProseStyle,
    getDefaultBorderStyle,
    getImageSizeStyle,
    toggleTheme,
    getGradient,
    getGradientString,
  }), [
    mode,
    activeTheme,
    colors,
    isDark,
    setTheme,
    getShadow,
    getInputStyle,
    getLabelStyle,
    getDefaultButtonStyle,
    getErrorTextStyle,
    getFormGapStyle,
    getSmartInputContainerStyle,
    getFormWrapperStyle,
    getTextXsStyle,
    getProseColorPrimaryStyle,
    getHighlightProseStyle,
    getDefaultBorderStyle,
    getImageSizeStyle,
    toggleTheme,
    getGradient,
    getGradientString,
  ]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Additional helper hooks
export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { activeTheme, colors } = useTheme();
  const colorFromProps = props[activeTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors[colorName];
  }
}

export function useColorScheme(): ActiveTheme {
  const { activeTheme } = useTheme();
  return activeTheme;
} 