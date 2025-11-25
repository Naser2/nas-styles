/**
 * nas-styles Hooks
 * Responsive breakpoint and layout hooks + SRP style hooks
 */

// Responsive/Breakpoint hooks
export { useAppleStoreBreakpoints, useContainerWidth, useResponsivePadding, responsive, APPLE_BREAKPOINTS } from './useAppleStoreBreakpoints';
export type { DeviceSize, Orientation, AppleBreakpoint } from './useAppleStoreBreakpoints';

export { useBreakpoints } from './useBreakpoints';
export type { BreakpointKey, ResponsiveValue } from './useBreakpoints';

export { useResponsiveLayout, APPLE_BREAKPOINTS as BREAKPOINTS } from './useResponsiveLayout';
export type { ResponsiveLayoutResult, WidthRatios, DeviceType } from './useResponsiveLayout';

// SRP Style hooks
export { useThemedStyles } from './useThemedStyles';
export { useButtonStyles } from './useButtonStyles';
export { useInputStyles } from './useInputStyles';
export { useFormStyles } from './useFormStyles';
