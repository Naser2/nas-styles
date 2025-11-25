/**
 * useButtonStyles - Button-specific style hook
 */

import { useTheme } from '../context/ThemeContext';
import { buttonPresets, ButtonVariant } from '../presets/buttons.presets';
import { getShadow } from '../factories/shadow.factory';

export function useButtonStyles() {
  const { activeTheme, colors } = useTheme();

  const getButtonStyle = (
    variant: ButtonVariant = 'primary',
    options: { inverted?: boolean; withShadow?: boolean } = {}
  ) => {
    const { inverted = false, withShadow = false } = options;
    const base = buttonPresets.base;
    const variantStyle = buttonPresets[variant]?.[activeTheme] ?? {};

    const containerStyle = {
      ...base,
      ...variantStyle,
      ...(inverted && {
        backgroundColor: (colors as Record<string, any>).button?.invertedBg || '#2C2C2E',
        borderColor: (colors as Record<string, any>).button?.invertedBorder || '#48484A',
      }),
      ...(withShadow && getShadow('medium', activeTheme)),
    };

    const textStyle = {
      ...buttonPresets.text,
      color: inverted
        ? '#FFFFFF'
        : variant === 'primary'
          ? activeTheme === 'light' ? '#FFFFFF' : '#000000'
          : variant === 'secondary'
            ? activeTheme === 'light' ? '#11181C' : '#FFFFFF'
            : activeTheme === 'light' ? '#000000' : '#FFFFFF',
    };

    return { container: containerStyle, text: textStyle };
  };

  return { getButtonStyle };
}
