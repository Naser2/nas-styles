# nas-styles: Single Responsibility Principal Architecture

**Goal:** Clean separation of concerns where each file does ONE thing well.

---

## Naming Convention for Multi-Property Objects

The objects that return multiple style properties have a specific name in design systems:

| What You Called It | Proper Name | Description |
|-------------------|-------------|-------------|
| "stuff that returns multiple things" | **Style Presets** or **Style Recipes** | Pre-composed style objects |
| `{ small: {}, medium: {}, large: {} }` | **Variant Map** | Keyed variations of a style |
| `interactive: { bg: { primary: {} } }` | **Nested Token Map** | Hierarchical token structure |
| `getShadow('medium')` | **Style Factory** | Function that returns style |
| `getButtonStyle('primary')` | **Component Style Hook** | Hook returning component styles |

---

## Final Directory Structure

```
nas-styles/src/
├── tokens/                          # TIER 1: Raw values (SSOT)
│   ├── primitives/                  # Atomic values
│   │   ├── colors.primitive.ts      # Raw hex colors only
│   │   ├── spacing.primitive.ts     # Raw spacing scale
│   │   ├── typography.primitive.ts  # Raw font values
│   │   ├── borders.primitive.ts     # Raw border values
│   │   └── index.ts
│   │
│   ├── semantic/                    # Contextual mappings
│   │   ├── colors.semantic.ts       # light/dark color assignments
│   │   ├── spacing.semantic.ts      # paddingMd, marginLg, etc.
│   │   ├── typography.semantic.ts   # card.title, section.heading
│   │   ├── shadows.semantic.ts      # small/medium/large shadows
│   │   ├── gradients.semantic.ts    # semantic gradient names
│   │   └── index.ts
│   │
│   ├── scales/                      # Size scales
│   │   ├── images.scale.ts          # xs, sm, md... 10xl
│   │   ├── icons.scale.ts           # icon sizes
│   │   └── index.ts
│   │
│   └── index.ts                     # Re-exports all tokens
│
├── presets/                         # TIER 2: Style Presets (multi-property objects)
│   ├── shadows.presets.ts           # { small: {...}, medium: {...} }
│   ├── buttons.presets.ts           # { primary: {...}, secondary: {...} }
│   ├── inputs.presets.ts            # { default: {...}, focused: {...} }
│   ├── cards.presets.ts             # { elevated: {...}, flat: {...} }
│   ├── interactive.presets.ts       # { hover: {...}, press: {...} }
│   └── index.ts
│
├── factories/                       # TIER 3: Style Factories (functions)
│   ├── shadow.factory.ts            # getShadow(size, theme)
│   ├── button.factory.ts            # getButtonStyle(variant, theme)
│   ├── input.factory.ts             # getInputStyle(state, theme)
│   ├── card.factory.ts              # getCardStyle(variant, theme)
│   ├── gradient.factory.ts          # getGradient(name)
│   ├── image.factory.ts             # getImageSize(scale)
│   └── index.ts
│
├── hooks/                           # TIER 4: React Hooks
│   ├── useBreakpoints.ts            # Responsive breakpoint state
│   ├── useResponsiveLayout.ts       # Width calculations
│   ├── useThemedStyles.ts           # Theme-aware style generation
│   ├── useButtonStyles.ts           # Button variant styles
│   ├── useInputStyles.ts            # Input state styles
│   ├── useCardStyles.ts             # Card variant styles
│   └── index.ts
│
├── primitives/                      # TIER 5: Components
│   ├── Box/
│   ├── Text/
│   └── index.ts
│
├── context/                         # Provider
│   ├── ThemeContext.tsx             # ONLY theme state + colors
│   └── index.ts
│
└── index.ts                         # Main exports
```

---

## Merge Strategy

### 1. Colors: `BaseColorTokens.ts` → Split into:

**`tokens/primitives/colors.primitive.ts`** (raw hex values only):
```typescript
export const primitiveColors = {
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F5F5F7',
  gray100: '#E8E8ED',
  // ... all raw colors from BaseColorTokens

  // Purples (from BrandColors)
  purple500: '#8b3dff',
  purple600: '#7C3AED',

  // All Canva colors
  canvaBlue: '#6ba9ff',
  canvaGreen: '#008008',
  // ...
} as const;
```

**`tokens/semantic/colors.semantic.ts`** (theme-aware mappings):
```typescript
import { primitiveColors } from '../primitives/colors.primitive';

export const semanticColors = {
  light: {
    bg: {
      primary: primitiveColors.white,
      secondary: primitiveColors.gray50,
      surface: primitiveColors.white,
    },
    text: {
      primary: primitiveColors.gray900,
      secondary: primitiveColors.gray500,
      muted: primitiveColors.gray400,
    },
    interactive: {
      primary: primitiveColors.purple500,
      primaryHover: primitiveColors.purple600,
      // ...
    },
    state: {
      success: primitiveColors.green800,
      warning: primitiveColors.yellow500,
      error: primitiveColors.red700,
      info: primitiveColors.blue500,
    },
  },
  dark: {
    // Mirror structure with dark values
  },
} as const;
```

**DELETE:** `colors.tokens.ts` (merge into above)
**DELETE:** `BaseColorTokens.ts` (merge into above)
**DELETE:** `AppleStoreColors.ts` (merge into above)

---

### 2. Gradients: `baseGradientTokens` → `tokens/semantic/gradients.semantic.ts`

**`tokens/primitives/gradients.primitive.ts`**:
```typescript
// Raw gradient color arrays only
export const primitiveGradients = {
  primary: ['#667eea', '#764ba2'],
  secondary: ['#f093fb', '#f5576c'],
  adp: ['#d0768c', '#bf46a5', '#7029b2', '#341d8c'],
  // ... all arrays from nativeGradientArrays
} as const;
```

**`tokens/semantic/gradients.semantic.ts`**:
```typescript
import { primitiveGradients } from '../primitives/gradients.primitive';

export const semanticGradients = {
  // Named purposes
  hero: primitiveGradients.appleOcean,
  card: primitiveGradients.glassLight,
  overlay: primitiveGradients.imageShadowOverlay,
} as const;

// CSS strings for web
export const cssGradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  // ...
} as const;
```

**DELETE:** `gradients.tokens.ts` (merge into above)

---

### 3. Image Sizes: New file `tokens/scales/images.scale.ts`

```typescript
export const imageSizes = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
  xxl: 56,
  '3xl': 64,
  '4xl': 72,
  '5xl': 80,
  '6xl': 88,
  '7xl': 96,
  '8xl': 104,
  '9xl': 112,
  '10xl': 120,
} as const;

export type ImageSize = keyof typeof imageSizes;
```

---

### 4. Style Presets (the "multi-property objects")

**`presets/shadows.presets.ts`**:
```typescript
// These are PRESETS - pre-composed style objects
export const shadowPresets = {
  light: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  dark: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    },
  },
} as const;

export type ShadowSize = 'small' | 'medium' | 'large';
```

**`presets/buttons.presets.ts`**:
```typescript
import { primitiveColors } from '../tokens/primitives/colors.primitive';

export const buttonPresets = {
  base: {
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 25,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    flexDirection: 'row' as const,
  },

  primary: {
    light: {
      backgroundColor: primitiveColors.black,
      borderColor: 'transparent',
    },
    dark: {
      backgroundColor: primitiveColors.white,
      borderColor: 'transparent',
    },
  },

  secondary: {
    light: {
      backgroundColor: primitiveColors.gray50,
      borderColor: primitiveColors.gray200,
    },
    dark: {
      backgroundColor: primitiveColors.gray800,
      borderColor: primitiveColors.gray600,
    },
  },

  outline: {
    light: {
      backgroundColor: 'transparent',
      borderColor: primitiveColors.black,
      borderWidth: 1,
    },
    dark: {
      backgroundColor: 'transparent',
      borderColor: primitiveColors.white,
      borderWidth: 1,
    },
  },
} as const;
```

**`presets/interactive.presets.ts`**:
```typescript
// State-based interactive presets
export const interactivePresets = {
  light: {
    primary: {
      default: { backgroundColor: '#000' },
      hover: { backgroundColor: '#333' },
      press: { backgroundColor: '#555' },
      inactive: { backgroundColor: '#ccc', opacity: 0.5 },
    },
    secondary: {
      default: { backgroundColor: '#f8f9fa' },
      hover: { backgroundColor: '#e9ecef' },
      press: { backgroundColor: '#dee2e6' },
      inactive: { backgroundColor: '#f8f9fa', opacity: 0.5 },
    },
    accent: {
      default: { backgroundColor: '#8b3dff' },
      hover: { backgroundColor: '#7c3aed' },
      press: { backgroundColor: '#6d28d9' },
      inactive: { backgroundColor: '#8b3dff', opacity: 0.5 },
    },
  },
  dark: {
    // Mirror structure
  },
} as const;
```

---

### 5. Style Factories (functions that return styles)

**`factories/shadow.factory.ts`**:
```typescript
import { shadowPresets, ShadowSize } from '../presets/shadows.presets';

type Theme = 'light' | 'dark';

export function getShadow(size: ShadowSize, theme: Theme = 'light') {
  return shadowPresets[theme][size];
}
```

**`factories/button.factory.ts`**:
```typescript
import { buttonPresets } from '../presets/buttons.presets';

type Theme = 'light' | 'dark';
type ButtonVariant = 'primary' | 'secondary' | 'outline';

export function getButtonStyle(variant: ButtonVariant, theme: Theme = 'light') {
  return {
    ...buttonPresets.base,
    ...buttonPresets[variant][theme],
  };
}
```

**`factories/image.factory.ts`**:
```typescript
import { imageSizes, ImageSize } from '../tokens/scales/images.scale';

export function getImageSize(size: ImageSize) {
  const dimension = imageSizes[size];
  return { width: dimension, height: dimension };
}
```

---

### 6. Hooks (React-specific, theme-aware)

**`hooks/useThemedStyles.ts`**:
```typescript
import { useTheme } from '../context';
import { getShadow } from '../factories/shadow.factory';
import { getButtonStyle } from '../factories/button.factory';
import { getImageSize } from '../factories/image.factory';

export function useThemedStyles() {
  const { activeTheme } = useTheme();

  return {
    getShadow: (size: 'small' | 'medium' | 'large') =>
      getShadow(size, activeTheme),

    getButtonStyle: (variant: 'primary' | 'secondary' | 'outline') =>
      getButtonStyle(variant, activeTheme),

    getImageSize,
  };
}
```

**`hooks/useButtonStyles.ts`**:
```typescript
import { useTheme } from '../context';
import { buttonPresets } from '../presets/buttons.presets';
import { getShadow } from '../factories/shadow.factory';

export function useButtonStyles() {
  const { activeTheme, colors } = useTheme();

  const getButtonStyle = (
    variant: 'primary' | 'secondary' | 'outline' | 'link',
    inverted = false
  ) => {
    const base = buttonPresets.base;
    const variantStyle = buttonPresets[variant]?.[activeTheme] ?? {};

    return {
      container: {
        ...base,
        ...variantStyle,
        ...(inverted && {
          backgroundColor: colors.buttonInvertedBackground,
          borderColor: colors.buttonInvertedBorder,
        }),
      },
      text: {
        color: inverted ? colors.buttonInvertedText : colors.buttonPrimaryText,
        fontSize: 16,
        fontWeight: '500',
      },
    };
  };

  return { getButtonStyle };
}
```

**`hooks/useInputStyles.ts`**:
```typescript
import { useTheme } from '../context';

export function useInputStyles() {
  const { colors } = useTheme();

  const getInputStyle = (focused = false, error = false) => ({
    borderRadius: 8,
    borderWidth: 2,
    borderColor: error
      ? colors.error
      : focused
        ? colors.interactive.focus
        : colors.inputBorder,
    backgroundColor: colors.inputBackground,
    color: colors.inputText,
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 50,
  });

  const getLabelStyle = () => ({
    color: colors.labelColor,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    paddingLeft: 8,
  });

  const getErrorStyle = () => ({
    color: colors.error,
    fontSize: 13,
    marginTop: 4,
  });

  return { getInputStyle, getLabelStyle, getErrorStyle };
}
```

**`hooks/useFormStyles.ts`**:
```typescript
import { useTheme } from '../context';
import { useThemedStyles } from './useThemedStyles';
import { spacing } from '../tokens';

export function useFormStyles() {
  const { colors } = useTheme();
  const { getShadow } = useThemedStyles();

  const getFormStyle = () => ({
    container: {
      gap: 24,
      paddingVertical: spacing[6],
      paddingHorizontal: spacing[6],
      backgroundColor: colors.formBackground,
      borderRadius: 12,
      ...getShadow('medium'),
    },
    fieldGroup: {
      marginBottom: 16,
    },
  });

  return { getFormStyle };
}
```

---

### 7. Simplified ThemeContext

**`context/ThemeContext.tsx`** (ONLY theme state + semantic colors):
```typescript
import { createContext, useContext, useState, useMemo } from 'react';
import { semanticColors } from '../tokens/semantic/colors.semantic';

type ThemeMode = 'light' | 'dark' | 'system';
type ActiveTheme = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  activeTheme: ActiveTheme;
  colors: typeof semanticColors.light;
  isDark: boolean;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  const activeTheme: ActiveTheme = mode === 'system'
    ? systemTheme
    : mode === 'dark' ? 'dark' : 'light';

  const colors = useMemo(() =>
    semanticColors[activeTheme],
    [activeTheme]
  );

  const value = useMemo(() => ({
    mode,
    activeTheme,
    colors,
    isDark: activeTheme === 'dark',
    setTheme: setMode,
  }), [mode, activeTheme, colors]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be within ThemeProvider');
  return context;
};
```

---

## Usage Examples

### Before (messy ThemeContext):
```typescript
// ThemeContext had 20+ functions
const {
  colors,
  getShadow,
  getInputStyle,
  getButtonStyle,
  getFormStyle,
  getImageSizeStyle,
  // ... 15 more
} = useTheme();
```

### After (clean separation):
```typescript
// ThemeContext: ONLY theme state
const { colors, activeTheme, isDark } = useTheme();

// Style hooks: specific to needs
const { getShadow } = useThemedStyles();
const { getButtonStyle } = useButtonStyles();
const { getInputStyle, getLabelStyle } = useInputStyles();
const { getFormStyle } = useFormStyles();
const { getImageSize } = useThemedStyles();

// Or use factories directly (non-React)
import { getShadow } from 'nas-styles/factories';
const shadow = getShadow('medium', 'light');
```

---

## Summary Table

| Layer | Purpose | Example |
|-------|---------|---------|
| **Primitives** | Raw values | `#8b3dff`, `16`, `'600'` |
| **Semantic** | Named mappings | `colors.light.text.primary` |
| **Scales** | Size progressions | `imageSizes.xl` → `48` |
| **Presets** | Multi-property objects | `shadowPresets.light.medium` |
| **Factories** | Functions returning styles | `getShadow('medium', 'dark')` |
| **Hooks** | Theme-aware React hooks | `useButtonStyles().getButtonStyle('primary')` |
| **Context** | Theme state ONLY | `{ colors, activeTheme, setTheme }` |
| **Primitives (Components)** | UI Components | `<Box>`, `<Text>` |

---

## Migration Steps

1. Create new folder structure
2. Split `BaseColorTokens.ts` → `colors.primitive.ts` + `colors.semantic.ts`
3. Split `gradients.tokens.ts` → `gradients.primitive.ts` + `gradients.semantic.ts`
4. Create `scales/images.scale.ts` from ThemeContext image sizes
5. Create presets from inline style objects
6. Create factories from ThemeContext getter functions
7. Create hooks that wrap factories with theme awareness
8. Simplify ThemeContext to ONLY theme state + colors
9. Update all imports in consuming code
10. Delete old files
