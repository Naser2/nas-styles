import type React from 'react';
import { ViewProps, ViewStyle, StyleProp } from 'react-native';
import type { SpacingKey } from '../../tokens/spacing.tokens';
import type { SemanticShadowKey } from '../../tokens/shadows.tokens';
import type { BorderRadius, BorderWidth } from '../../tokens/borders.tokens';

// ============ RESPONSIVE PROPS ============

/**
 * Props that can be overridden per breakpoint.
 * Used with sm, md, lg props for responsive layouts.
 *
 * Supports Tailwind-like responsive patterns:
 * @example
 * <Box p={4} md={{ p: 6 }} lg={{ p: 8 }} />
 * // Equivalent to Tailwind: "p-4 md:p-6 lg:p-8"
 */
export interface ResponsiveBoxProps {
  // Grid
  cols?: 1 | 2 | 3 | 4 | 6 | 12;

  // Flexbox
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  flex?: number;

  // Spacing (NEW - Tailwind-like responsive spacing)
  gap?: SpacingKey | number;
  m?: SpacingKey | number;
  mx?: SpacingKey | number;
  my?: SpacingKey | number;
  mt?: SpacingKey | number;
  mr?: SpacingKey | number;
  mb?: SpacingKey | number;
  ml?: SpacingKey | number;
  p?: SpacingKey | number;
  px?: SpacingKey | number;
  py?: SpacingKey | number;
  pt?: SpacingKey | number;
  pr?: SpacingKey | number;
  pb?: SpacingKey | number;
  pl?: SpacingKey | number;

  // Layout
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  maxWidth?: ViewStyle['maxWidth'];
}

// ============ BOX PROPS ============

export interface BoxProps extends Omit<ViewProps, 'style'> {
  children?: React.ReactNode;

  // ============ SPACING PROPS ============
  // Can be token key (e.g., 4) or number (e.g., 16)

  m?: SpacingKey | number;
  mx?: SpacingKey | number;
  my?: SpacingKey | number;
  mt?: SpacingKey | number;
  mr?: SpacingKey | number;
  mb?: SpacingKey | number;
  ml?: SpacingKey | number;

  p?: SpacingKey | number;
  px?: SpacingKey | number;
  py?: SpacingKey | number;
  pt?: SpacingKey | number;
  pr?: SpacingKey | number;
  pb?: SpacingKey | number;
  pl?: SpacingKey | number;

  gap?: SpacingKey | number;

  // ============ FLEXBOX PROPS ============

  flex?: number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];

  // ============ COLOR PROPS ============
  // Can be semantic color path or hex

  bg?: string;
  borderColor?: string;

  // ============ BORDER PROPS ============

  borderRadius?: BorderRadius | number;
  borderWidth?: BorderWidth | number;
  borderTopLeftRadius?: BorderRadius | number;
  borderTopRightRadius?: BorderRadius | number;
  borderBottomLeftRadius?: BorderRadius | number;
  borderBottomRightRadius?: BorderRadius | number;

  // ============ SHADOW ============

  shadow?: SemanticShadowKey;

  // ============ LAYOUT ============

  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  minWidth?: ViewStyle['minWidth'];
  minHeight?: ViewStyle['minHeight'];
  maxWidth?: ViewStyle['maxWidth'];
  maxHeight?: ViewStyle['maxHeight'];

  // ============ POSITION ============

  position?: ViewStyle['position'];
  top?: ViewStyle['top'];
  right?: ViewStyle['right'];
  bottom?: ViewStyle['bottom'];
  left?: ViewStyle['left'];
  zIndex?: ViewStyle['zIndex'];

  // ============ OVERFLOW ============

  overflow?: ViewStyle['overflow'];

  // ============ CUSTOM STYLE ============
  // Escape hatch - accepts single style, array, or nested arrays

  style?: StyleProp<ViewStyle>;

  // ============ GRID PROPS (NEW) ============

  /**
   * Number of columns for grid layout.
   * When set, Box uses flexDirection: 'row' and flexWrap: 'wrap'.
   * Children should use colSpan to define their width.
   *
   * @example
   * <Box cols={3} gap={4}>
   *   <Box colSpan={1}>1/3 width</Box>
   *   <Box colSpan={2}>2/3 width</Box>
   * </Box>
   */
  cols?: 1 | 2 | 3 | 4 | 6 | 12;

  /**
   * Column span for grid children.
   * Defines how many columns this Box spans within a parent grid.
   * 'full' = spans all columns (100% width)
   *
   * @example
   * <Box cols={4}>
   *   <Box colSpan={1}>25% width</Box>
   *   <Box colSpan={2}>50% width</Box>
   *   <Box colSpan="full">100% width</Box>
   * </Box>
   */
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12 | 'full';

  // ============ RESPONSIVE PROPS (NEW) ============

  /**
   * Responsive overrides for small screens (0-734px mobile)
   *
   * @example
   * <Box cols={1} sm={{ cols: 1 }} md={{ cols: 2 }} lg={{ cols: 4 }}>
   */
  sm?: ResponsiveBoxProps;

  /**
   * Responsive overrides for medium screens (735-1068px tablet)
   */
  md?: ResponsiveBoxProps;

  /**
   * Responsive overrides for large screens (1069px+ desktop)
   */
  lg?: ResponsiveBoxProps;
}
