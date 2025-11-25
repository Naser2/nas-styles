/**
 * Unified Responsive Layout Hook
 *
 * Consolidates useBreakpoints (categorical) + useDeviceWidthAndOrientation (width calculation)
 * into a single hook for complete responsive layout control.
 *
 * BACKWARDS COMPATIBLE: Old properties (isLargeScreen, screenWidth, etc.) still work.
 *
 * @example
 * const { isMd, select, getWidth, containerWidth } = useResponsiveLayout();
 *
 * // Categorical selection (like Tailwind breakpoints)
 * const cols = select({ sm: 1, md: 2, lg: 4, default: 1 });
 *
 * // Width calculation (element sizing as % of screen)
 * const modalWidth = getWidth({ sm: 0.9, md: 0.6, lg: 0.4 });
 *
 * // Pre-calculated container widths
 * <View style={{ width: containerWidth }} />
 */

import { useEffect, useState } from 'react';
import { LayoutAnimation, Platform, UIManager, useWindowDimensions } from 'react-native';
import { useAppleStoreBreakpoints, APPLE_BREAKPOINTS } from './useAppleStoreBreakpoints';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type BreakpointKey = 'sm' | 'md' | 'lg';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveValue<T> {
  sm?: T;
  md?: T;
  lg?: T;
  default: T;
}

export interface WidthRatios {
  sm?: number;  // mobile width ratio (e.g., 0.9 = 90% of screen)
  md?: number;  // tablet width ratio (e.g., 0.6 = 60%)
  lg?: number;  // desktop width ratio (e.g., 0.4 = 40%)
}

export interface ResponsiveLayoutResult {
  // ============ LEGACY PROPS (backwards compatibility) ============
  /** @deprecated Use isLg instead */
  isLargeScreen: boolean;
  /** @deprecated Use isMd instead */
  isMediumScreen: boolean;
  /** @deprecated Use isSm instead */
  isSmallScreen: boolean;
  /** @deprecated Use width instead */
  screenWidth: number;
  /** @deprecated Use height instead */
  screenHeight: number;

  // ============ FROM useAppleStoreBreakpoints ============

  /** Current breakpoint key */
  current: BreakpointKey;

  /** Raw window width */
  width: number;

  /** Raw window height */
  height: number;

  /** Is small screen (0-734px) */
  isSm: boolean;
  isSmall: boolean;

  /** Is medium screen (735-1068px) */
  isMd: boolean;
  isMedium: boolean;

  /** Is large screen (1069px+) */
  isLg: boolean;
  isLarge: boolean;

  /** Is portrait orientation */
  isPortrait: boolean;

  /** Is landscape orientation */
  isLandscape: boolean;

  /** Select value based on breakpoint (like Tailwind) */
  select: <T>(values: ResponsiveValue<T>) => T;

  /** Scale base value by breakpoint multiplier */
  scale: (baseValue: number, options?: { sm: number; md: number; lg: number }) => number;

  // ============ FROM useDeviceWidthAndOrientation ============

  /** Device type (mobile/tablet/desktop) */
  deviceType: DeviceType;

  /**
   * Calculate width as percentage of screen for each breakpoint
   * @example getWidth({ sm: 0.9, md: 0.6, lg: 0.4 }) // 90% on mobile, 60% tablet, 40% desktop
   */
  getWidth: (ratios: WidthRatios) => number;

  /**
   * Pre-calculated container widths matching Apple's content widths
   * - sm: min(width - 32, 335)
   * - md: min(width - 44, 692)
   * - lg: min(width, 980)
   */
  containerWidth: number;

  // ============ UTILITY HELPERS ============

  /**
   * Get responsive padding values
   * @returns { horizontal, vertical } padding for current breakpoint
   */
  padding: { horizontal: number; vertical: number };

  /**
   * Breakpoint values for reference
   */
  breakpoints: typeof APPLE_BREAKPOINTS;
}

export function useResponsiveLayout(): ResponsiveLayoutResult {
  const { width, height } = useWindowDimensions();
  const bp = useAppleStoreBreakpoints();

  // Device type calculation (generic breakpoints for compatibility)
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');

  useEffect(() => {
    let type: DeviceType = 'mobile';
    if (width >= 1024) {
      type = 'desktop';
    } else if (width >= 768) {
      type = 'tablet';
    }

    if (type !== deviceType) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDeviceType(type);
    }
  }, [width]);

  // Select value based on current breakpoint
  const select = <T,>(values: ResponsiveValue<T>): T => {
    if (bp.isLarge && values.lg !== undefined) return values.lg;
    if (bp.isMedium && values.md !== undefined) return values.md;
    if (bp.isSmall && values.sm !== undefined) return values.sm;
    return values.default;
  };

  // Calculate width as percentage of screen
  const getWidth = (ratios: WidthRatios): number => {
    const defaultRatios = { sm: 0.9, md: 0.6, lg: 0.4 };
    let ratio = ratios.sm ?? defaultRatios.sm;

    if (bp.isLarge && ratios.lg !== undefined) {
      ratio = ratios.lg;
    } else if (bp.isMedium && ratios.md !== undefined) {
      ratio = ratios.md;
    }

    // Adjust for landscape (reduce by 20%)
    if (bp.isLandscape) {
      ratio *= 0.8;
    }

    return Math.round(width * ratio);
  };

  // Apple's content max-widths
  const containerWidth = bp.isLarge
    ? Math.min(width, 980)
    : bp.isMedium
      ? Math.min(width - 44, 692)
      : Math.min(width - 32, 335);

  // Responsive padding values
  const padding = bp.isLarge
    ? { horizontal: 0, vertical: 8 }
    : bp.isMedium
      ? { horizontal: 22, vertical: 8 }
      : { horizontal: 16, vertical: 22 };

  // Scale helper with breakpoint multipliers
  const scale = (
    baseValue: number,
    options: { sm: number; md: number; lg: number } = { sm: 1, md: 1.15, lg: 1.3 }
  ): number => {
    const multiplier = bp.isLarge ? options.lg : bp.isMedium ? options.md : options.sm;
    return Math.round(baseValue * multiplier);
  };

  return {
    // ============ LEGACY (backwards compatibility) ============
    isLargeScreen: bp.isLarge,
    isMediumScreen: bp.isMedium,
    isSmallScreen: bp.isSmall,
    screenWidth: width,
    screenHeight: height,

    // ============ NEW API ============
    // Breakpoint state
    current: bp.size as BreakpointKey,
    width,
    height,

    // Boolean helpers
    isSm: bp.isSmall,
    isSmall: bp.isSmall,
    isMd: bp.isMedium,
    isMedium: bp.isMedium,
    isLg: bp.isLarge,
    isLarge: bp.isLarge,
    isPortrait: bp.isPortrait,
    isLandscape: bp.isLandscape,

    // Functions
    select,
    scale,
    getWidth,

    // Computed values
    deviceType,
    containerWidth,
    padding,
    breakpoints: APPLE_BREAKPOINTS,
  };
}

// Re-export types
export type { DeviceSize, Orientation, AppleBreakpoint } from './useAppleStoreBreakpoints';
export { APPLE_BREAKPOINTS } from './useAppleStoreBreakpoints';
