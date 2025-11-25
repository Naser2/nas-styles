/**
 * Button Factory - Functions that return button styles
 */

import { buttonPresets, ButtonVariant, ButtonTheme } from '../presets/buttons.presets';

/**
 * Get complete button container style for a variant and theme
 */
export function getButtonStyle(variant: ButtonVariant, theme: ButtonTheme = 'light') {
  const variantStyle = buttonPresets[variant]?.[theme] ?? buttonPresets.primary[theme];

  return {
    ...buttonPresets.base,
    ...variantStyle,
  };
}

/**
 * Get button text style for a variant and theme
 */
export function getButtonTextStyle(variant: ButtonVariant, theme: ButtonTheme = 'light') {
  const isLightVariant = variant === 'secondary' || variant === 'outline';
  const isLightTheme = theme === 'light';

  return {
    ...buttonPresets.text,
    color: isLightVariant && isLightTheme
      ? '#11181C'
      : isLightTheme
        ? '#FFFFFF'
        : variant === 'primary'
          ? '#000000'
          : '#FFFFFF',
  };
}

/**
 * Get disabled button style
 */
export function getDisabledButtonStyle(theme: ButtonTheme = 'light') {
  return {
    ...buttonPresets.base,
    ...buttonPresets.disabled[theme],
  };
}
