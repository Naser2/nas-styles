/**
 * useFormStyles - Form layout style hook
 */

import { useTheme } from '../context/ThemeContext';
import { formPresets } from '../presets/forms.presets';
import { getShadow } from '../factories/shadow.factory';
import { spacing } from '../tokens/spacing.tokens';

export function useFormStyles() {
  const { activeTheme, colors } = useTheme();

  const getFormStyle = (options: { withShadow?: boolean; compact?: boolean } = {}) => {
    const { withShadow = false, compact = false } = options;

    return {
      container: {
        ...formPresets.wrapper,
        gap: compact ? formPresets.gap.compact : formPresets.gap.default,
        backgroundColor: (colors as Record<string, any>).bg?.primary || formPresets[activeTheme].backgroundColor,
        ...(withShadow && getShadow('medium', activeTheme)),
      },
      fieldGroup: {
        marginBottom: compact ? 12 : 16,
      },
    };
  };

  const getFormWrapperStyle = () => ({
    ...formPresets.wrapper,
    backgroundColor: (colors as Record<string, any>).bg?.primary || formPresets[activeTheme].backgroundColor,
  });

  const getFormGapStyle = (size: 'default' | 'compact' | 'spacious' = 'default') => ({
    gap: formPresets.gap[size],
  });

  const getSmartInputContainerStyle = () => ({
    marginTop: formPresets.smartInput.marginTop,
    marginBottom: formPresets.smartInput.marginBottom,
  });

  return {
    getFormStyle,
    getFormWrapperStyle,
    getFormGapStyle,
    getSmartInputContainerStyle,
  };
}
