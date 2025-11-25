/**
 * nas-styles
 * Type-safe React Native styling system with grid simulation and responsive breakpoints
 *
 * @packageDocumentation
 */

// ============ PRIMITIVES ============
export { Box } from './primitives/Box';
export type { BoxProps, ResponsiveBoxProps } from './primitives/Box/Box.types';

export { Text } from './primitives/Text';
export type { TextProps } from './primitives/Text/Text.types';

// ============ HOOKS ============
export {
  useBreakpoints,
  useAppleStoreBreakpoints,
  useResponsiveLayout,
  useContainerWidth,
  useResponsivePadding,
  responsive,
  APPLE_BREAKPOINTS,
} from './hooks';

export type {
  BreakpointKey,
  ResponsiveValue,
  DeviceSize,
  Orientation,
  AppleBreakpoint,
  ResponsiveLayoutResult,
  WidthRatios,
  DeviceType,
} from './hooks';

// ============ CONTEXT ============
export {
  ThemeProvider,
  useTheme,
  useThemeColor,
  useColorScheme,
} from './context';

export type {
  ThemeMode,
  ActiveTheme,
  ThemeContextType,
  CanvaPalette,
} from './context';

// ============ TOKENS ============
export {
  // Spacing
  spacing,
  semanticSpacing,
  componentSpacing,
  responsiveSpacing,

  // Typography
  typographyStyles,
  fontFamilies,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacing,

  // Colors
  BaseColorTokens,
  BrandColors,
  ColorCategories,
  DarkColorCategories,
  baseGradientTokens,
  nativeGradientArrays,

  // Borders
  borderRadii,
  borderWidths,
  borderStyles,
  componentBorders,

  // Breakpoints
  breakpoints,
  containerWidths,
  responsivePadding,
  scaleMultipliers,
  deviceTypes,

  // Shadows
  shadows,
  getShadow,
  getAppleShadow,

  // Gradients
  getGradient,
  getCssGradient,
  createGradient,
} from './tokens';

export type {
  SpacingKey,
  SemanticSpacingKey,
  ComponentSpacingKey,
  TypographyStyleName,
  FontFamily,
  FontSize,
  LineHeight,
  FontWeight,
  LetterSpacing,
  BorderWidth,
  BorderRadius,
  BorderStyle,
  Breakpoint,
  BaseColorToken,
  ColorScale,
  ColorFamily,
  DarkColorFamily,
  GradientKey,
} from './tokens';
