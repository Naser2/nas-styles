/**
 * Form Presets - Pre-composed form layout style objects
 */

export const formPresets = {
  // Form wrapper/container styles
  wrapper: {
    paddingTop: 40,
    paddingRight: 24,
    paddingBottom: 40,
    paddingLeft: 24,
    borderRadius: 12,
  },

  // Form gap between fields
  gap: {
    default: 24,
    compact: 16,
    spacious: 32,
  },

  // Smart input container margins
  smartInput: {
    marginTop: 8,
    marginBottom: 8,
  },

  // Theme-specific wrapper backgrounds
  light: {
    backgroundColor: '#FFFFFF',
  },

  dark: {
    backgroundColor: '#F1EEE8',
  },
} as const;
