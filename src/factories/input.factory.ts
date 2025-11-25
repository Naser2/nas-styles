/**
 * Input Factory - Functions that return input styles
 */

import { inputPresets, InputState, InputTheme } from '../presets/inputs.presets';

/**
 * Get input container style for a state and theme
 */
export function getInputStyle(state: InputState = 'default', theme: InputTheme = 'light') {
  const themeStyles = inputPresets[theme];
  const stateStyles = themeStyles[state] ?? themeStyles.default;
  const defaultStyles = themeStyles.default;

  return {
    ...inputPresets.container,
    ...inputPresets.text,
    backgroundColor: (stateStyles as Record<string, any>).backgroundColor ?? defaultStyles.backgroundColor,
    borderColor: (stateStyles as Record<string, any>).borderColor ?? defaultStyles.borderColor,
    color: defaultStyles.color,
    ...((stateStyles as Record<string, any>).opacity && { opacity: (stateStyles as Record<string, any>).opacity }),
  };
}

/**
 * Get label style for a theme
 */
export function getLabelStyle(theme: InputTheme = 'light') {
  return {
    ...inputPresets.label,
    color: inputPresets[theme].default.labelColor,
  };
}

/**
 * Get error text style for a theme
 */
export function getErrorStyle(theme: InputTheme = 'light') {
  const errorColor = theme === 'light' ? '#dc3545' : '#EF5350';

  return {
    ...inputPresets.error,
    color: errorColor,
  };
}

/**
 * Get placeholder color for a theme
 */
export function getPlaceholderColor(theme: InputTheme = 'light') {
  return inputPresets[theme].default.placeholderColor;
}
