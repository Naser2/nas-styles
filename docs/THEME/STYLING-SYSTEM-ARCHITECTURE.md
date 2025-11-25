# nas-styles: Complete Styling System Architecture

**Version:** 1.0.0
**Date:** November 2024
**Author:** Naser Sanou

---

## Executive Summary

`nas-styles` is a type-safe React Native styling system featuring:
- **Grid simulation** via Flexbox (`cols` prop) - unique feature not in Restyle/NativeWind
- **Tailwind-like responsive props** (`p={4} md={{ p: 6 }} lg={{ p: 8 }}`)
- **Semantic typography variants** (`section.heading`, `card.title`, `cta.primary`)
- **Apple-standard breakpoints** (734/1068/1069px)

---

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         TIER 1: TOKENS                          │
│  (Single Source of Truth)                                       │
├─────────────────────────────────────────────────────────────────┤
│  spacing.tokens.ts    │ 8px base grid (0-32 scale)              │
│  typography.tokens.ts │ Font sizes, weights, semantic variants  │
│  colors.tokens.ts     │ Semantic color palette                  │
│  borders.tokens.ts    │ Border radii, widths                    │
│  shadows.tokens.ts    │ Elevation system                        │
│  breakpoints.tokens.ts│ Apple breakpoints (734/1068/1069)       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     TIER 2: HOOKS (Brain + Ruler)               │
├─────────────────────────────────────────────────────────────────┤
│  useAppleStoreBreakpoints │ Core breakpoint detection           │
│  useBreakpoints           │ Facade with select() helper         │
│  useResponsiveLayout      │ Consolidated hook (width + category)│
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   TIER 3: PRIMITIVES (Components)               │
├─────────────────────────────────────────────────────────────────┤
│  Box.tsx  │ Layout primitive with grid, spacing, responsive     │
│  Text.tsx │ Typography primitive with semantic variants         │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                     TIER 4: THEME CONTEXT                       │
├─────────────────────────────────────────────────────────────────┤
│  ThemeProvider │ Light/dark mode, color access                  │
│  useTheme      │ Hook to access theme colors                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## File Structure for npm Package

```
nas-styles/
├── src/
│   ├── tokens/
│   │   ├── spacing.tokens.ts
│   │   ├── typography.tokens.ts
│   │   ├── colors.tokens.ts
│   │   ├── borders.tokens.ts
│   │   ├── shadows.tokens.ts
│   │   ├── breakpoints.tokens.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useAppleStoreBreakpoints.ts
│   │   ├── useBreakpoints.ts
│   │   ├── useResponsiveLayout.ts
│   │   └── index.ts
│   ├── primitives/
│   │   ├── Box/
│   │   │   ├── Box.tsx
│   │   │   ├── Box.types.ts
│   │   │   └── index.ts
│   │   ├── Text/
│   │   │   ├── Text.tsx
│   │   │   ├── Text.types.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── index.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

---

## Token System Details

### 1. Spacing Tokens (8px base grid)

```typescript
export const spacing = {
  0: 0,
  1: 4,     // 0.25rem
  2: 8,     // 0.5rem
  3: 12,    // 0.75rem
  4: 16,    // 1rem
  5: 20,    // 1.25rem
  6: 24,    // 1.5rem
  8: 32,    // 2rem
  10: 40,   // 2.5rem
  12: 48,   // 3rem
  16: 64,   // 4rem
  20: 80,   // 5rem
  24: 96,   // 6rem
  32: 128,  // 8rem
} as const;
```

**Usage:**
```tsx
<Box p={4} />        // padding: 16px
<Box gap={2} />      // gap: 8px
<Box m={6} />        // margin: 24px
```

### 2. Typography Tokens

**Base Variants:**
- `display` (40px) - Hero headlines
- `displayMedium` (32px) - Section headers
- `h1` (21px) - Card titles
- `h2` (19px) - Subheadings
- `body` (17px) - Body text
- `bodySmall` (14px) - Secondary text
- `caption` (12px) - Labels

**Semantic Variants (Unique Feature):**
```typescript
export const typographyStyles = {
  // Screen level
  'screen.title': { fontSize: 40, fontWeight: '600' },
  'screen.subtitle': { fontSize: 17, fontWeight: '400' },

  // Section level
  'section.heading': { fontSize: 32, fontWeight: '600' },
  'section.subheading': { fontSize: 19, fontWeight: '600' },

  // Card level
  'card.title': { fontSize: 21, fontWeight: '600' },
  'card.subtitle': { fontSize: 14, fontWeight: '400' },
  'card.body': { fontSize: 17, fontWeight: '400' },

  // CTA
  'cta.primary': { fontSize: 16, fontWeight: '600' },
  'cta.secondary': { fontSize: 14, fontWeight: '500' },

  // Links
  'link.default': { fontSize: 14 },
  'link.nav': { fontSize: 14 },
};
```

### 3. Breakpoint Tokens (Apple Standard)

```typescript
export const breakpoints = {
  small: 734,   // <= 734px (mobile)
  medium: 1068, // 735px - 1068px (tablet)
  large: 1069,  // >= 1069px (desktop)
} as const;

export const containerWidths = {
  small: 335,   // Mobile max content
  medium: 692,  // Tablet max content
  large: 980,   // Desktop max content
} as const;
```

### 4. Border Tokens

```typescript
export const borderRadii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  '2xl': 32,
  full: 9999,
} as const;

export const borderWidths = {
  none: 0,
  hairline: 1,
  thin: 2,
  medium: 4,
  thick: 6,
} as const;
```

---

## Hooks System

### useAppleStoreBreakpoints (The Brain)

Core breakpoint detection with Apple-standard breakpoints:

```typescript
export function useAppleStoreBreakpoints(): AppleBreakpoint {
  const { width, height } = useWindowDimensions();

  return {
    size: 'small' | 'medium' | 'large',
    width,
    height,
    isSmall: boolean,
    isMedium: boolean,
    isLarge: boolean,
    isPortrait: boolean,
    isLandscape: boolean,
    responsive: <T>(values) => T,
    scale: (baseValue, options) => number,
  };
}
```

### useBreakpoints (Facade)

Simplified interface with Tailwind-like `select()`:

```typescript
export function useBreakpoints() {
  const bp = useAppleStoreBreakpoints();

  return {
    ...bp,
    isSm: bp.isSmall,
    isMd: bp.isMedium,
    isLg: bp.isLarge,
    current: 'sm' | 'md' | 'lg',
    select: <T>(values: { sm?: T; md?: T; lg?: T; default: T }) => T,
  };
}
```

### useResponsiveLayout (Consolidated)

Combines categorical + width calculation:

```typescript
export function useResponsiveLayout() {
  return {
    // Breakpoint state
    isSm, isMd, isLg,
    current: 'sm' | 'md' | 'lg',
    width, height,

    // Selection helpers
    select: <T>(values) => T,
    scale: (baseValue, options) => number,

    // Width calculation
    getWidth: (ratios: { sm?: number; md?: number; lg?: number }) => number,
    containerWidth: number,

    // Device info
    deviceType: 'mobile' | 'tablet' | 'desktop',
    padding: { horizontal: number; vertical: number },
  };
}
```

---

## Box Primitive

### Features

1. **Spacing Props** - `m`, `p`, `mx`, `my`, `px`, `py`, etc.
2. **Flexbox Props** - `flex`, `direction`, `align`, `justify`, `wrap`, `gap`
3. **Grid Props** - `cols`, `colSpan` (unique feature!)
4. **Responsive Props** - `sm`, `md`, `lg` breakpoint overrides
5. **Color Props** - `bg`, `borderColor`
6. **Border Props** - `borderRadius`, `borderWidth`
7. **Shadow Props** - `shadow`

### Grid System (Unique Feature)

```tsx
// Basic 3-column grid
<Box cols={3} gap={4}>
  <Box colSpan={1}>1/3 width</Box>
  <Box colSpan={2}>2/3 width</Box>
</Box>

// Responsive grid
<Box
  cols={1}
  sm={{ cols: 1 }}
  md={{ cols: 2 }}
  lg={{ cols: 4 }}
  gap={4}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  <Box>Item 4</Box>
</Box>
```

### Responsive Spacing (Tailwind-like)

```tsx
// Padding scales with breakpoint
<Box
  p={2}
  sm={{ p: 2 }}
  md={{ p: 4 }}
  lg={{ p: 8 }}
>
  Content with responsive padding
</Box>

// Multiple responsive props
<Box
  direction="column"
  sm={{ direction: 'column' }}
  md={{ direction: 'row' }}
  lg={{ direction: 'row-reverse' }}
>
  <Box flex={1}>A</Box>
  <Box flex={1}>B</Box>
</Box>
```

### ResponsiveBoxProps Interface

```typescript
export interface ResponsiveBoxProps {
  // Grid
  cols?: 1 | 2 | 3 | 4 | 6 | 12;

  // Flexbox
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  flex?: number;

  // Spacing (Tailwind-like responsive spacing)
  gap?: SpacingKey | number;
  m?: SpacingKey | number;
  mx?: SpacingKey | number;
  my?: SpacingKey | number;
  mt?: SpacingKey | number;
  mr?: SpacingKey | number;
  mb?: SpacingKey | number;
  ml?: SpacingKey | number;
  p?: SpacingKey | number;
  px?: SpacingKey | number;
  py?: SpacingKey | number;
  pt?: SpacingKey | number;
  pr?: SpacingKey | number;
  pb?: SpacingKey | number;
  pl?: SpacingKey | number;

  // Layout
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  maxWidth?: ViewStyle['maxWidth'];
}
```

---

## Text Primitive

### Features

```tsx
// Basic typography
<Text variant="body">Regular text</Text>
<Text variant="h1">Heading</Text>

// Semantic variants (unique feature)
<Text variant="screen.title">Page Title</Text>
<Text variant="section.heading">Section</Text>
<Text variant="card.title">Card Name</Text>
<Text variant="card.subtitle">Subtitle</Text>
<Text variant="cta.primary">Get Started</Text>
<Text variant="link.default">Learn more</Text>

// With color
<Text variant="body" color="textSecondary">Muted text</Text>
<Text variant="h1" color="primary">Branded</Text>
```

### TextProps Interface

```typescript
export interface TextProps {
  children?: React.ReactNode;
  variant?: TypographyStyleName;
  color?: string;
  align?: TextStyle['textAlign'];
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  style?: StyleProp<TextStyle>;
}
```

---

## Competitive Advantages

### vs NativeWind

| Feature | nas-styles | NativeWind |
|---------|------------|------------|
| Type safety | ✅ Full TypeScript | ❌ String-based |
| Grid simulation | ✅ `cols` prop | ❌ Manual |
| Semantic typography | ✅ `card.title` | ❌ No |
| Breakpoints | ✅ Apple standard | ⚠️ Tailwind web |
| Bundle size | ✅ Lightweight | ⚠️ Heavier |

### vs Restyle

| Feature | nas-styles | Restyle |
|---------|------------|---------|
| Grid simulation | ✅ `cols` + `colSpan` | ❌ Not built-in |
| Semantic typography | ✅ Context-aware | ⚠️ Basic variants |
| Responsive syntax | ✅ `md={{ p: 4 }}` | ⚠️ Different syntax |
| Apple breakpoints | ✅ 734/1068/1069 | ⚠️ Arbitrary |

### vs Tamagui

| Feature | nas-styles | Tamagui |
|---------|------------|---------|
| Learning curve | ✅ Simple | ❌ Complex |
| Grid simulation | ✅ Native | ⚠️ Extra config |
| Bundle size | ✅ ~10KB | ❌ ~50KB+ |
| Cross-platform | ⚠️ RN focused | ✅ Universal |

---

## Usage Examples

### Complete App Setup

```tsx
// App.tsx
import { ThemeProvider, Box, Text } from 'nas-styles';

export default function App() {
  return (
    <ThemeProvider>
      <Box p={4} bg="background">
        <Text variant="screen.title" color="text">
          Welcome to My App
        </Text>

        <Box
          cols={1}
          sm={{ cols: 1 }}
          md={{ cols: 2 }}
          lg={{ cols: 3 }}
          gap={4}
          mt={6}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
```

### Product Card Example

```tsx
function ProductCard() {
  return (
    <Box
      bg="surface"
      p={4}
      borderRadius="lg"
      shadow="medium"
    >
      <Text variant="card.title" color="text">
        Product Name
      </Text>
      <Text variant="card.subtitle" color="textSecondary">
        $99.99
      </Text>
      <Box mt={4}>
        <Text variant="cta.primary" color="primary">
          Add to Cart
        </Text>
      </Box>
    </Box>
  );
}
```

### Responsive Dashboard Layout

```tsx
function Dashboard() {
  return (
    <Box
      p={4}
      sm={{ p: 4 }}
      md={{ p: 6 }}
      lg={{ p: 8 }}
    >
      <Text variant="screen.title">Dashboard</Text>

      {/* Stats Grid */}
      <Box
        cols={1}
        sm={{ cols: 2 }}
        md={{ cols: 2 }}
        lg={{ cols: 4 }}
        gap={4}
        mt={6}
      >
        <StatCard title="Users" value="1,234" />
        <StatCard title="Revenue" value="$12,345" />
        <StatCard title="Orders" value="567" />
        <StatCard title="Growth" value="+12%" />
      </Box>

      {/* Main Content */}
      <Box
        cols={1}
        md={{ cols: 12 }}
        gap={6}
        mt={8}
      >
        <Box colSpan={8}>
          <ChartSection />
        </Box>
        <Box colSpan={4}>
          <ActivityFeed />
        </Box>
      </Box>
    </Box>
  );
}
```

---

## API Reference Summary

### Box Props

| Prop | Type | Description |
|------|------|-------------|
| `cols` | `1\|2\|3\|4\|6\|12` | Grid column count |
| `colSpan` | `1\|2\|3\|4\|6\|12\|'full'` | Grid column span |
| `p`, `px`, `py`, etc. | `SpacingKey\|number` | Padding |
| `m`, `mx`, `my`, etc. | `SpacingKey\|number` | Margin |
| `gap` | `SpacingKey\|number` | Flex gap |
| `direction` | `'row'\|'column'\|...` | Flex direction |
| `align` | `ViewStyle['alignItems']` | Align items |
| `justify` | `ViewStyle['justifyContent']` | Justify content |
| `bg` | `string` | Background color |
| `borderRadius` | `BorderRadius\|number` | Border radius |
| `shadow` | `ShadowKey` | Box shadow |
| `sm`, `md`, `lg` | `ResponsiveBoxProps` | Breakpoint overrides |

### Text Props

| Prop | Type | Description |
|------|------|-------------|
| `variant` | `TypographyStyleName` | Typography style |
| `color` | `string` | Text color |
| `align` | `TextStyle['textAlign']` | Text alignment |
| `numberOfLines` | `number` | Line clamp |
| `ellipsizeMode` | `string` | Truncation mode |

### Hooks

| Hook | Returns | Use Case |
|------|---------|----------|
| `useBreakpoints()` | `{ isSm, isMd, isLg, select }` | Conditional rendering |
| `useResponsiveLayout()` | `{ getWidth, containerWidth, ... }` | Width calculations |
| `useTheme()` | `{ colors, getShadow, ... }` | Theme access |

---

## Migration Guide

### From Plain React Native

```tsx
// Before
<View style={{ padding: 16, flexDirection: 'row', gap: 8 }}>
  <Text style={{ fontSize: 21, fontWeight: '600' }}>Title</Text>
</View>

// After
<Box p={4} direction="row" gap={2}>
  <Text variant="card.title">Title</Text>
</Box>
```

### From NativeWind

```tsx
// Before (NativeWind)
<View className="p-4 md:p-6 lg:p-8 flex-row gap-2">
  <Text className="text-xl font-semibold">Title</Text>
</View>

// After (nas-styles)
<Box p={4} md={{ p: 6 }} lg={{ p: 8 }} direction="row" gap={2}>
  <Text variant="card.title">Title</Text>
</Box>
```

---

## Next Steps

See `BUILD-GUIDE.md` for instructions on building and publishing the npm package.
