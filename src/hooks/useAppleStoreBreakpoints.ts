/**
 * Apple Store Breakpoints Hook
 * Matches Apple's exact media query breakpoints from their CSS
 *
 * Breakpoints:
 * - Small: <= 734px (mobile devices)
 * - Medium: 735px - 1068px (tablets)
 * - Large: >= 1069px (desktop)
 */

import { useEffect, useState } from 'react';
import { useWindowDimensions, LayoutAnimation, Platform, UIManager } from 'react-native';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/**
 * Apple Store breakpoints matching their CSS media queries
 */
export const APPLE_BREAKPOINTS = {
  SMALL: 734,   // max-width: 734px
  MEDIUM: 1068, // max-width: 1068px
  LARGE: 1069,  // >= 1069px
} as const;

export type DeviceSize = 'small' | 'medium' | 'large';
export type Orientation = 'portrait' | 'landscape';

export interface AppleBreakpoint {
  /**
   * Current device size category
   */
  size: DeviceSize;

  /**
   * Current orientation
   */
  orientation: Orientation;

  /**
   * Window width
   */
  width: number;

  /**
   * Window height
   */
  height: number;

  /**
   * Boolean helpers for conditional rendering
   */
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isPortrait: boolean;
  isLandscape: boolean;

  /**
   * Responsive value selector
   * Usage: breakpoint.responsive({ small: 16, medium: 20, large: 24 })
   */
  responsive: <T>(values: { small: T; medium: T; large: T }) => T;

  /**
   * Get scaled value based on current breakpoint
   * Usage: breakpoint.scale(100) // Returns scaled value
   */
  scale: (baseValue: number, options?: { small: number; medium: number; large: number }) => number;
}

/**
 * Hook to get current Apple Store breakpoint
 */
export function useAppleStoreBreakpoints(): AppleBreakpoint {
  const { width, height } = useWindowDimensions();
  const [deviceSize, setDeviceSize] = useState<DeviceSize>('small');

  useEffect(() => {
    let newSize: DeviceSize = 'small';

    if (width >= APPLE_BREAKPOINTS.LARGE) {
      newSize = 'large';
    } else if (width >= APPLE_BREAKPOINTS.SMALL + 1) {
      newSize = 'medium';
    }

    if (newSize !== deviceSize) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDeviceSize(newSize);
    }
  }, [width]);

  const orientation: Orientation = width > height ? 'landscape' : 'portrait';

  const breakpoint: AppleBreakpoint = {
    size: deviceSize,
    orientation,
    width,
    height,
    isSmall: deviceSize === 'small',
    isMedium: deviceSize === 'medium',
    isLarge: deviceSize === 'large',
    isPortrait: orientation === 'portrait',
    isLandscape: orientation === 'landscape',

    responsive: <T,>(values: { small: T; medium: T; large: T }): T => {
      return values[deviceSize];
    },

    scale: (
      baseValue: number,
      options: { small: number; medium: number; large: number } = {
        small: 1,
        medium: 1.15,
        large: 1.3,
      }
    ): number => {
      const multiplier = options[deviceSize];
      return Math.round(baseValue * multiplier);
    },
  };

  return breakpoint;
}

/**
 * Get container width based on Apple's responsive grid
 * Matches Apple's CSS max-width values
 */
export function useContainerWidth(): number {
  const { size, width } = useAppleStoreBreakpoints();

  // Apple's content max-widths from CSS
  const containerWidths = {
    small: Math.min(width - 32, 335),  // 16px padding on each side, max 335px content
    medium: Math.min(width - 44, 692), // 22px padding on each side, max 692px content
    large: Math.min(width, 980),       // Max 980px content, or up to 1018px
  };

  return containerWidths[size];
}

/**
 * Get padding values based on Apple's responsive padding
 * Matches Apple's CSS padding-inline values
 */
export function useResponsivePadding() {
  const { size } = useAppleStoreBreakpoints();

  const padding = {
    small: {
      horizontal: 16,
      vertical: 22,
    },
    medium: {
      horizontal: 22,
      vertical: 8,
    },
    large: {
      horizontal: 0,
      vertical: 8,
    },
  };

  return padding[size];
}

/**
 * Helper to get responsive value without using the hook
 * Useful for StyleSheet.create
 */
export const responsive = <T,>(
  width: number,
  values: { small: T; medium: T; large: T }
): T => {
  if (width >= APPLE_BREAKPOINTS.LARGE) {
    return values.large;
  } else if (width >= APPLE_BREAKPOINTS.SMALL + 1) {
    return values.medium;
  }
  return values.small;
};

/**
 * Usage Examples:
 *
 * Basic usage:
 * const breakpoint = useAppleStoreBreakpoints();
 * <View style={{ padding: breakpoint.responsive({ small: 16, medium: 22, large: 0 }) }}>
 *
 * Conditional rendering:
 * {breakpoint.isLarge && <DesktopSidebar />}
 * {breakpoint.isSmall && <MobileMenu />}
 *
 * Scaled values:
 * const fontSize = breakpoint.scale(16); // Auto-scales based on device size
 *
 * Container width:
 * const containerWidth = useContainerWidth();
 * <View style={{ width: containerWidth }}>
 *
 * Responsive padding:
 * const padding = useResponsivePadding();
 * <View style={{ paddingHorizontal: padding.horizontal }}>
 */

export default useAppleStoreBreakpoints;
