/**
 * Unified Breakpoint Hook
 *
 * Facade over useAppleStoreBreakpoints for consistent API.
 * Use this instead of importing breakpoint hooks directly.
 *
 * @example
 * const { isSmall, isMedium, isLarge, select } = useBreakpoints();
 * const cols = select({ sm: 1, md: 2, lg: 4, default: 1 });
 */

import { useAppleStoreBreakpoints } from './useAppleStoreBreakpoints';

export type BreakpointKey = 'sm' | 'md' | 'lg';

export interface ResponsiveValue<T> {
  sm?: T;
  md?: T;
  lg?: T;
  default: T;
}

export function useBreakpoints() {
  const bp = useAppleStoreBreakpoints();

  return {
    // Pass through existing properties
    ...bp,

    // Alias for consistency (sm = small, md = medium, lg = large)
    isSm: bp.isSmall,
    isMd: bp.isMedium,
    isLg: bp.isLarge,

    // Current breakpoint key
    current: bp.size as BreakpointKey,

    // Select value based on current breakpoint
    select: <T>(values: ResponsiveValue<T>): T => {
      if (bp.isLarge && values.lg !== undefined) return values.lg;
      if (bp.isMedium && values.md !== undefined) return values.md;
      if (bp.isSmall && values.sm !== undefined) return values.sm;
      return values.default;
    },
  };
}

// Re-export types for convenience
export type { DeviceSize, Orientation, AppleBreakpoint } from './useAppleStoreBreakpoints';
