# Research: Creating a Publishable React Native Styling System

**Goal:** Evaluate feasibility of packaging our token-based architecture as an npm library that others can install and use, similar to Tailwind, NativeWind, or Shopify Restyle.

**Date:** November 2024

---

## Executive Summary

**Verdict: YES, this is feasible and strategically valuable.**

Our current architecture (token-based Box/Text primitives with TypeScript enforcement) closely mirrors Shopify Restyle's proven approach. With targeted modifications, we can publish `@getitdone/restyle` or similar as a standalone npm package.

---

## 1. Market Landscape Analysis

### Current Popular Libraries (2024)

| Library | Weekly Downloads | Approach | Strengths | Weaknesses |
|---------|-----------------|----------|-----------|------------|
| **NativeWind** | 433,051 | Tailwind utility classes | Familiar to web devs, lightweight | String-based (less type-safe), parsing overhead |
| **Tamagui** | 81,249 | Universal compiler + tokens | Cross-platform, optimizing compiler | Complex, steep learning curve, heavy docs |
| **Restyle** | 34,788 | Type-enforced tokens + factories | Simple, type-safe, themeable | No grid simulation, smaller ecosystem |
| **Unistyles** | Growing | StyleSheet enhancement | Fast, simple API | Newer, less proven |

**Source:** [npm trends comparison](https://npmtrends.com/@emotion/native-vs-@shopify/restyle-vs-nativewind-vs-react-native-unistyles-vs-tamagui-vs-twrnc)

### Key Insight
Libraries that focus **solely on styling** (not full UI kits) are gaining popularity. NativeWind, Unistyles, and twrnc don't ship components—they just provide styling utilities. This validates our approach of shipping primitives (Box, Text) rather than complex components.

**Source:** [State of React Native 2024: Styling](https://results.stateofreactnative.com/en-US/styling/)

---

## 2. Architecture Comparison: Our System vs Restyle

### Shopify Restyle Architecture

```
createTheme() → Theme Object → ThemeProvider → Context
                                    ↓
createBox() → Factory Function → Box Component (uses theme)
createText() → Factory Function → Text Component (uses theme)
                                    ↓
useTheme() → Hook to access theme in custom components
useRestyle() → Hook to transform restyle props → RN props
```

**How Restyle Works Internally:**
- `createTheme()` enforces type shape but preserves user-specific values
- `createBox()` wraps `View` with `createRestyleComponent()` + restyle functions
- Props like `backgroundColor="cardPrimary"` are type-checked against theme keys
- Responsive props: `flexDirection={{phone: 'column', tablet: 'row'}}`

**Source:** [Restyle createBox.ts source](https://github.com/Shopify/restyle/blob/master/src/createBox.ts)

### Our Current Architecture

```
tokens/ → Design Tokens (colors, spacing, typography)
                    ↓
ThemeContext → ThemeProvider → Context
                    ↓
Box.tsx → Primitive Component (manual prop handling)
Text.tsx → Primitive Component (manual prop handling)
                    ↓
useTheme() → Hook to access theme
```

### Gap Analysis

| Feature | Restyle | Our System | Gap |
|---------|---------|------------|-----|
| Type-enforced theme | ✅ `createTheme()` | ⚠️ Manual types | Need factory |
| Factory functions | ✅ `createBox/Text` | ❌ Direct components | Need factories |
| Responsive breakpoint props | ✅ `{{phone: x, tablet: y}}` | ⚠️ Separate sm/md/lg | Different syntax |
| Restyle functions (spacing, colors) | ✅ Composable | ⚠️ Hardcoded | Need function composition |
| Grid simulation | ❌ Not built-in | 🎯 **Our addition** | Competitive advantage |
| Semantic variants | ⚠️ Basic | 🎯 **Our addition** | Competitive advantage |

---

## 3. Technical Requirements for npm Package

### Package Structure

```
@getitdone/ui/
├── src/
│   ├── theme/
│   │   ├── createTheme.ts        # Theme factory with type enforcement
│   │   ├── ThemeProvider.tsx     # React Context provider
│   │   ├── useTheme.ts           # Hook to access theme
│   │   └── defaultTheme.ts       # Default token values
│   ├── primitives/
│   │   ├── createBox.ts          # Box factory function
│   │   ├── createText.ts         # Text factory function
│   │   ├── Box.tsx               # Pre-configured Box component
│   │   └── Text.tsx              # Pre-configured Text component
│   ├── hooks/
│   │   ├── useBreakpoints.ts     # Responsive breakpoint hook
│   │   ├── useRestyle.ts         # Transform restyle props → RN styles
│   │   └── useResponsiveValue.ts # Pick value based on breakpoint
│   ├── functions/
│   │   ├── spacing.ts            # Spacing restyle function
│   │   ├── backgroundColor.ts    # Color restyle function
│   │   ├── typography.ts         # Typography restyle function
│   │   ├── layout.ts             # Flex/layout restyle function
│   │   └── grid.ts               # Grid simulation function (OUR UNIQUE)
│   └── index.ts                  # Public exports
├── package.json
├── tsconfig.json
├── rollup.config.js              # Bundle for ESM/CJS
└── README.md
```

### package.json Configuration

```json
{
  "name": "@getitdone/ui",
  "version": "1.0.0",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "files": ["dist"],
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-native": ">=0.70.0"
  },
  "scripts": {
    "build": "rollup -c",
    "prepare": "yarn build",
    "release": "npm publish --access public"
  }
}
```

**Source:** [React Native - Create a Library](https://reactnative.dev/docs/the-new-architecture/create-module-library)

### Publishing Process

1. **Setup:** Use `npx create-react-native-library` for boilerplate
2. **Build:** `yarn prepare` compiles TypeScript
3. **Test locally:** `npm pack` creates .tgz for local testing
4. **Publish:** `npm login && npm publish`

**Source:** [How to publish React Native component to NPM](https://www.freecodecamp.org/news/how-to-publish-a-react-native-component-to-npm-its-easier-than-you-think-51f6ae1ef850/)

---

## 4. Our Competitive Advantages

### 4.1 Grid Simulation (Unique Feature)

**Problem:** React Native does NOT support `display: 'grid'`. Restyle, NativeWind, and Tamagui all require manual grid implementation.

**Our Solution:** Built-in `cols` prop with Flexbox math.

```tsx
// Other libraries: User must calculate manually
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <View style={{ width: '50%' }} />
  <View style={{ width: '50%' }} />
</View>

// Our library: Declarative grid
<Box cols={2} gap={4}>
  <Box />
  <Box />
</Box>
```

### 4.2 Semantic Typography Variants

**Problem:** Most libraries require users to define their own variant mappings.

**Our Solution:** Pre-built semantic context variants.

```tsx
// Other libraries: Must map manually
const variants = { h1: {...}, h2: {...} };
<Text variant="h1">

// Our library: Semantic context
<Text variant="section.heading">   // Maps to h1 styles
<Text variant="card.title">        // Maps to h2 styles
<Text variant="hero.subtitle">     // Maps to body + opacity
```

### 4.3 Responsive Props with Apple Breakpoints

**Problem:** Restyle uses arbitrary breakpoints. NativeWind uses Tailwind's web breakpoints.

**Our Solution:** Apple-standard breakpoints (734/1068/1069) matching iOS design guidelines.

```tsx
<Box
  cols={1}
  sm={{ cols: 1 }}   // < 734px (iPhone)
  md={{ cols: 2 }}   // 734-1068px (iPad Portrait)
  lg={{ cols: 4 }}   // > 1068px (iPad Landscape/Mac)
/>
```

---

## 5. Implementation Roadmap

### Phase A: Extract Core (Week 1-2)

1. Create `/packages/ui/` directory in monorepo
2. Move token definitions to package
3. Create `createTheme()` factory with type enforcement
4. Create `createBox()` and `createText()` factories

### Phase B: Implement Restyle Functions (Week 2-3)

1. `spacingFunction` - transforms m, p, mx, py, etc.
2. `backgroundColorFunction` - transforms bg props
3. `typographyFunction` - transforms variant prop
4. `layoutFunction` - transforms flex, align, justify props
5. `gridFunction` - transforms cols, colSpan props (UNIQUE)

### Phase C: Responsive System (Week 3-4)

1. `useBreakpoints()` hook with Apple breakpoints
2. `useResponsiveValue()` for conditional values
3. Integrate responsive prop handling into factories

### Phase D: Package & Publish (Week 4-5)

1. Setup build with Rollup/tsup
2. Write comprehensive README
3. Create example app demonstrating usage
4. Publish to npm as `@getitdone/ui`

---

## 6. API Design Preview

### Consumer Usage (After Publishing)

```tsx
// Installation
// npm install @getitdone/ui

// Setup (App.tsx)
import { ThemeProvider, createTheme } from '@getitdone/ui';

const theme = createTheme({
  colors: {
    primary: '#007AFF',
    background: '#FFFFFF',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider>
  );
}

// Usage (Screen.tsx)
import { Box, Text } from '@getitdone/ui';

function ProductGrid() {
  return (
    <Box
      cols={1}
      sm={{ cols: 1 }}
      md={{ cols: 2 }}
      lg={{ cols: 4 }}
      gap="md"
      p="lg"
    >
      <Box bg="background" p="md" borderRadius={8}>
        <Text variant="card.title">Product Name</Text>
        <Text variant="card.body">$99.99</Text>
      </Box>
    </Box>
  );
}
```

### Customization (Advanced Users)

```tsx
import { createBox, createText, spacingFunction, gridFunction } from '@getitdone/ui';

// Create custom Box with only needed functions
const MyBox = createBox({
  functions: [spacingFunction, gridFunction],
  baseComponent: Animated.View, // Use Animated.View instead
});

// Create custom Text with brand variants
const MyText = createText({
  variants: {
    'brand.hero': { fontSize: 48, fontWeight: '900' },
    'brand.tagline': { fontSize: 18, fontStyle: 'italic' },
  },
});
```

---

## 7. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Maintenance burden | Medium | High | Start with minimal API, expand based on demand |
| Competition from big players | High | Medium | Focus on unique features (grid, semantic variants) |
| Breaking changes in RN | Low | High | Pin peer dependencies, test against multiple versions |
| Adoption challenges | Medium | Medium | Excellent docs, example app, migration guide |

---

## 8. Conclusion & Recommendation

### Should We Build This?

**YES**, with caveats:

1. **Short-term (Now):** Implement the internal architecture first (current plan)
2. **Medium-term (After validation):** Extract to separate package when patterns stabilize
3. **Long-term (If successful):** Open-source and publish to npm

### Unique Value Proposition

> "@getitdone/ui is a type-safe React Native styling system with built-in grid simulation and semantic typography variants. Unlike NativeWind (string-based) or Tamagui (complex), it offers the simplicity of Restyle with features neither provides: declarative grid layouts via `cols` prop and contextual text variants like `section.heading`."

### Next Steps

1. ✅ Complete current implementation plan (FINAL-IMPLEMENTATION-PLAN.md)
2. 🔲 Validate architecture in production use
3. 🔲 Document extraction plan for npm package
4. 🔲 Create `create-react-native-library` scaffold
5. 🔲 Publish beta to npm

---

## Sources

- [Shopify Restyle GitHub](https://github.com/Shopify/restyle)
- [Tamagui Official](https://tamagui.dev/)
- [State of React Native 2024: Styling](https://results.stateofreactnative.com/en-US/styling/)
- [npm trends comparison](https://npmtrends.com/@emotion/native-vs-@shopify/restyle-vs-nativewind-vs-react-native-unistyles-vs-tamagui-vs-twrnc)
- [React Native - Create a Library](https://reactnative.dev/docs/the-new-architecture/create-module-library)
- [Restyle createBox.ts source](https://github.com/Shopify/restyle/blob/master/src/createBox.ts)
- [Creating a reusable Design System with Tamagui](https://dev.to/alvarogfn/creating-a-reusable-design-system-between-react-and-react-native-with-tamagui-4ke6)
- [How to publish React Native component to NPM](https://www.freecodecamp.org/news/how-to-publish-a-react-native-component-to-npm-its-easier-than-you-think-51f6ae1ef850/)
- [NativeWind npm](https://www.npmjs.com/package/nativewind/v/4.1.10)
- [Design tokens in NativeBase](https://docs.nativebase.io/design-tokens)
