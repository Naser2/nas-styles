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

// ============ SRP ARCHITECTURE (NEW) ============

// Primitive tokens
export {
  primitiveColors,
} from './tokens/primitives';
export type { PrimitiveColor } from './tokens/primitives';

// Semantic tokens
export {
  semanticColors,
  primitiveGradients,
  cssGradients,
  semanticGradients,
} from './tokens/semantic';
export type {
  SemanticColorTheme,
  SemanticColors,
  CssGradientKey,
  SemanticGradientKey,
} from './tokens/semantic';

// Scales
export {
  imageSizes,
  iconSizes,
  avatarSizes,
} from './tokens/scales';
export type { ImageSize, IconSize, AvatarSize } from './tokens/scales';

// Presets
export {
  shadowPresets,
  buttonPresets,
  inputPresets,
  formPresets,
} from './presets';
export type {
  ShadowSize,
  ShadowTheme,
  ButtonVariant,
  ButtonTheme,
  InputState,
  InputTheme,
} from './presets';

// Factories
export {
  getShadow as getShadowFactory,
  getAppleShadow as getAppleShadowFactory,
  getButtonStyle,
  getButtonTextStyle,
  getDisabledButtonStyle,
  getInputStyle,
  getLabelStyle,
  getErrorStyle,
  getPlaceholderColor,
  getImageSize,
  getIconSize,
  getAvatarSize,
  getImageDimension,
  getIconDimension,
  getGradient as getGradientFactory,
  getCssGradient as getCssGradientFactory,
  createGradient as createGradientFactory,
  getDirectionalGradient,
} from './factories';

// Style Hooks
export {
  useThemedStyles,
  useButtonStyles,
  useInputStyles,
  useFormStyles,
} from './hooks';
