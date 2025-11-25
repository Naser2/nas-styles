import type React from 'react';
import { TextProps as RNTextProps, TextStyle, StyleProp } from 'react-native';
import type { TypographyStyleName } from '../../tokens/typography.tokens';

export interface TextProps extends Omit<RNTextProps, 'style'> {
  children?: React.ReactNode;

  /**
   * Typography variant from the token system.
   *
   * **Base variants:**
   * - display, displayMedium
   * - h1, h2
   * - body, bodyMedium, bodySmall
   * - caption, linkText
   * - appBody, appHeading
   * - giantOverlay
   *
   * **Semantic variants (NEW):**
   * - screen.title, screen.subtitle
   * - section.heading, section.subheading
   * - card.title, card.subtitle, card.body
   * - hero.title, hero.subtitle
   * - cta.primary, cta.secondary
   * - link.default, link.nav
   *
   * @example
   * <Text variant="section.heading">Section Title</Text>
   * <Text variant="card.title">Card Name</Text>
   * <Text variant="cta.primary">Get Started</Text>
   */
  variant?: TypographyStyleName;

  /**
   * Text color - can be semantic color key or hex value
   * @example
   * color="text" // Uses theme color
   * color="#ff0000" // Direct hex
   */
  color?: string;

  /**
   * Text alignment
   */
  align?: TextStyle['textAlign'];

  /**
   * Maximum number of lines before truncation
   */
  numberOfLines?: number;

  /**
   * Truncation mode when numberOfLines is exceeded
   */
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';

  /**
   * Custom style override (escape hatch)
   */
  style?: StyleProp<TextStyle>;
}
