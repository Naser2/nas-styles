/**
 * useInputStyles - Input-specific style hook
 */

import { useTheme } from '../context/ThemeContext';
import { inputPresets } from '../presets/inputs.presets';
import { getInputStyle, getLabelStyle, getErrorStyle, getPlaceholderColor } from '../factories/input.factory';

export function useInputStyles() {
  const { activeTheme, colors } = useTheme();

  return {
    getInputStyle: (focused = false, error = false, disabled = false) => {
      const state = disabled ? 'disabled' : error ? 'error' : focused ? 'focused' : 'default';
      return getInputStyle(state, activeTheme);
    },

    getLabelStyle: () => getLabelStyle(activeTheme),

    getErrorStyle: () => getErrorStyle(activeTheme),

    getPlaceholderColor: () => getPlaceholderColor(activeTheme),

    // Get complete form field style set
    getFieldStyles: (focused = false, error = false, disabled = false) => ({
      container: {
        marginBottom: 16,
      },
      label: getLabelStyle(activeTheme),
      input: getInputStyle(
        disabled ? 'disabled' : error ? 'error' : focused ? 'focused' : 'default',
        activeTheme
      ),
      error: error ? getErrorStyle(activeTheme) : null,
      placeholderColor: getPlaceholderColor(activeTheme),
    }),
  };
}
