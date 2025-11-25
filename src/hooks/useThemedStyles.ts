/**
 * useThemedStyles - Theme-aware style generation hook
 * Wraps factories with current theme context
 */

import { useTheme } from '../context/ThemeContext';
import { getShadow, getAppleShadow } from '../factories/shadow.factory';
import { getButtonStyle, getButtonTextStyle, getDisabledButtonStyle } from '../factories/button.factory';
import { getInputStyle, getLabelStyle, getErrorStyle } from '../factories/input.factory';
import { getImageSize, getIconSize, getAvatarSize } from '../factories/image.factory';
import { getGradient, getCssGradient } from '../factories/gradient.factory';
import type { ShadowSize } from '../presets/shadows.presets';
import type { ButtonVariant } from '../presets/buttons.presets';
import type { InputState } from '../presets/inputs.presets';
import type { ImageSize, IconSize, AvatarSize } from '../tokens/scales/images.scale';
import type { GradientKey, CssGradientKey } from '../tokens/semantic/gradients.semantic';

export function useThemedStyles() {
  const { activeTheme } = useTheme();

  return {
    // Shadows
    getShadow: (size: ShadowSize) => getShadow(size, activeTheme),
    getAppleShadow: (size: ShadowSize) => getAppleShadow(size, activeTheme),

    // Buttons
    getButtonStyle: (variant: ButtonVariant) => getButtonStyle(variant, activeTheme),
    getButtonTextStyle: (variant: ButtonVariant) => getButtonTextStyle(variant, activeTheme),
    getDisabledButtonStyle: () => getDisabledButtonStyle(activeTheme),

    // Inputs
    getInputStyle: (state?: InputState) => getInputStyle(state, activeTheme),
    getLabelStyle: () => getLabelStyle(activeTheme),
    getErrorStyle: () => getErrorStyle(activeTheme),

    // Sizes (theme-independent but included for convenience)
    getImageSize: (size: ImageSize) => getImageSize(size),
    getIconSize: (size: IconSize) => getIconSize(size),
    getAvatarSize: (size: AvatarSize) => getAvatarSize(size),

    // Gradients (theme-independent)
    getGradient: (key: GradientKey) => getGradient(key),
    getCssGradient: (key: CssGradientKey) => getCssGradient(key),
  };
}
