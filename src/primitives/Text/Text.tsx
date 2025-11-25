/**
 * Text - Typography Component
 * Replaces: React Native Text with typography styles
 *
 * Features:
 * - Typography variants (display, h1, h2, body, etc.)
 * - Color props (semantic or hex)
 * - Alignment props
 * - Truncation props
 */

import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { typographyStyles } from '../../tokens';
import type { TextProps } from './Text.types';

export function Text({
  children,
  variant = 'body',
  color,
  align,
  numberOfLines,
  ellipsizeMode,
  style,
  ...textProps
}: TextProps) {
  const { colors } = useTheme();

  // Get typography style
  const typographyStyle = typographyStyles[variant];

  // Build style object
  const textStyle: TextStyle = {
    ...typographyStyle,
    ...(color && { color: (colors as Record<string, any>)[color] || color }),
    ...(align && { textAlign: align }),
  };

  return (
    <RNText
      style={[textStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...textProps}
    >
      {children}
    </RNText>
  );
}

Text.displayName = 'Text';
