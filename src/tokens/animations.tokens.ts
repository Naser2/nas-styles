/**
 * Unified Animation Token System
 * Timing, easing, durations
 */

// ==================== TIMING FUNCTIONS ====================

/**
 * Easing curves
 */
export const easing = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy spring effect
  appleEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Apple's default easing
} as const;

// ==================== DURATIONS ====================

/**
 * Animation durations (ms)
 */
export const durations = {
  instant: 0,
  fast: 150,
  normal: 200,
  medium: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,

  // Apple-specific
  ribbon: 3000,      // Ribbon color transition
  ribbonDelay: 1000, // Delay before ribbon animates
  cardSlideIn: 700,  // Card slide-in animation
  cardStagger: 90,   // Stagger delay between cards
  imageScale: 200,   // Image scale on press
} as const;

// ==================== SPRING CONFIGS ====================

/**
 * React Native Animated spring configs
 */
export const springConfigs = {
  gentle: {
    stiffness: 120,
    damping: 14,
    mass: 1,
  },
  medium: {
    stiffness: 170,
    damping: 26,
    mass: 1,
  },
  bouncy: {
    stiffness: 230,
    damping: 22,
    mass: 1,
  },
  stiff: {
    stiffness: 260,
    damping: 20,
    mass: 1,
  },
} as const;

// ==================== COMPONENT ANIMATIONS ====================

export const componentAnimations = {
  ribbon: {
    duration: durations.ribbon,
    delay: durations.ribbonDelay,
    easing: easing.appleEase,
  },

  storeCard: {
    slideIn: {
      duration: durations.cardSlideIn,
      stagger: durations.cardStagger,
      easing: easing.appleEase,
    },
    imageScale: {
      duration: durations.imageScale,
      easing: easing.spring,
    },
  },

  floatingLabel: {
    duration: durations.normal,
    easing: easing.easeOut,
  },

  appleMessage: {
    fadeIn: durations.fast,
    easing: easing.easeOut,
  },
} as const;

// ==================== TYPE EXPORTS ====================

export type EasingFunction = keyof typeof easing;
export type Duration = keyof typeof durations;
export type SpringConfig = keyof typeof springConfigs;
