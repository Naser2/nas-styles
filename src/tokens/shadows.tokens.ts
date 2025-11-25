/**
 * Unified Shadow Token System
 * Platform-specific shadow definitions
 *
 * Based on Apple Design System Architecture
 */

import { ViewStyle, Platform } from 'react-native';

// ==================== TIER 1: PRIMITIVE SHADOWS ====================

interface ShadowToken {
  ios: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
  };
  android: {
    elevation: number;
  };
  web?: {
    boxShadow: string;
  };
}

/**
 * Shadow scale
 */
export const shadows = {
  none: {
    ios: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    android: {
      elevation: 0,
    },
    web: {
      boxShadow: 'none',
    },
  },

  xs: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: 1,
    },
    web: {
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    },
  },

  sm: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {
      elevation: 2,
    },
    web: {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
  },

  md: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },
    android: {
      elevation: 4,
    },
    web: {
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    },
  },

  lg: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
    },
    android: {
      elevation: 6,
    },
    web: {
      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.2)',
    },
  },

  xl: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 16,
    },
    android: {
      elevation: 8,
    },
    web: {
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
    },
  },
} as const;

// ==================== TIER 2: SEMANTIC SHADOWS ====================

export const semanticShadows = {
  card: shadows.md,
  button: shadows.sm,
  modal: shadows.xl,
  dropdown: shadows.lg,
  tooltip: shadows.sm,
} as const;

// ==================== TIER 3: COMPONENT SHADOWS ====================

/**
 * Apple-specific shadows (very subtle)
 */
export const appleShadows = {
  storeCard: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.04,
      shadowRadius: 8,
    },
    android: {
      elevation: 4,
    },
    web: {
      boxShadow: '0 6px 16px -8px rgba(0, 0, 0, 0.04)',
    },
  },

  navButton: {
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {
      elevation: 4,
    },
    web: {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
  },
} as const;

// ==================== HELPER FUNCTIONS ====================

/**
 * Get platform-specific shadow style
 */
export function getShadow(
  shadowToken: ShadowToken
): ViewStyle {
  if (Platform.OS === 'ios') {
    return shadowToken.ios;
  } else if (Platform.OS === 'android') {
    return shadowToken.android;
  } else if (Platform.OS === 'web' && shadowToken.web) {
    return { boxShadow: shadowToken.web.boxShadow } as any;
  }
  return {};
}

/**
 * Get Apple component shadow
 */
export function getAppleShadow(
  componentName: keyof typeof appleShadows
): ViewStyle {
  return getShadow(appleShadows[componentName]);
}

// ==================== TYPE EXPORTS ====================

export type ShadowSize = keyof typeof shadows;
export type SemanticShadowKey = keyof typeof semanticShadows;
export type AppleShadowKey = keyof typeof appleShadows;
export type { ShadowToken };
