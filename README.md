# nas-styles

Type-safe React Native styling system with grid simulation, responsive breakpoints, and semantic typography.

![npm](https://img.shields.io/npm/v/nas-styles)
![license](https://img.shields.io/npm/l/nas-styles)

## Features

- 🎯 **Grid Simulation** - CSS Grid-like `cols` and `colSpan` props via Flexbox
- 📱 **Responsive Props** - Tailwind-like `p={4} md={{ p: 6 }} lg={{ p: 8 }}`
- 🔤 **Semantic Typography** - Context-aware variants like `card.title`, `section.heading`
- 🍎 **Apple Breakpoints** - Standard 734/1068/1069px breakpoints
- 🎨 **Dark Mode** - Built-in theme support with light/dark modes
- 📦 **Type-Safe** - Full TypeScript support with autocomplete

## Installation

```bash
npm install nas-styles
# or
yarn add nas-styles
```

## Quick Start

```tsx
import { ThemeProvider, Box, Text } from 'nas-styles';

export default function App() {
  return (
    <ThemeProvider>
      <Box p={4} bg="surface">
        <Text variant="screen.title">Welcome</Text>

        <Box
          cols={1}
          md={{ cols: 2 }}
          lg={{ cols: 4 }}
          gap={4}
        >
          <Box bg="primary" p={4} borderRadius="md">
            <Text color="#fff">Item 1</Text>
          </Box>
          <Box bg="primary" p={4} borderRadius="md">
            <Text color="#fff">Item 2</Text>
          </Box>
          <Box bg="primary" p={4} borderRadius="md">
            <Text color="#fff">Item 3</Text>
          </Box>
          <Box bg="primary" p={4} borderRadius="md">
            <Text color="#fff">Item 4</Text>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
```

## Box Component

### Grid System

```tsx
// 3-column grid
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
>
  <Box>Item</Box>
</Box>
```

### Responsive Spacing

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
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| `cols` | `1\|2\|3\|4\|6\|12` | Grid column count |
| `colSpan` | `1\|2\|3\|4\|6\|12\|'full'` | Grid column span |
| `p`, `px`, `py`, etc. | `number` | Padding (token scale) |
| `m`, `mx`, `my`, etc. | `number` | Margin (token scale) |
| `gap` | `number` | Flex gap |
| `direction` | `'row'\|'column'` | Flex direction |
| `bg` | `string` | Background color |
| `borderRadius` | `string\|number` | Border radius |
| `sm`, `md`, `lg` | `ResponsiveBoxProps` | Breakpoint overrides |

## Text Component

### Semantic Variants

```tsx
<Text variant="screen.title">Page Title</Text>
<Text variant="section.heading">Section</Text>
<Text variant="card.title">Card Name</Text>
<Text variant="card.subtitle">Subtitle</Text>
<Text variant="cta.primary">Get Started</Text>
```

### Available Variants

**Screen Level:**
- `screen.title` (40px)
- `screen.subtitle` (17px)

**Section Level:**
- `section.heading` (32px)
- `section.subheading` (19px)

**Card Level:**
- `card.title` (21px)
- `card.subtitle` (14px)
- `card.body` (17px)

**CTA:**
- `cta.primary` (16px semibold)
- `cta.secondary` (14px medium)

**Links:**
- `link.default` (14px)
- `link.nav` (14px)

## Hooks

### useBreakpoints

```tsx
import { useBreakpoints } from 'nas-styles';

function MyComponent() {
  const { isSm, isMd, isLg, select } = useBreakpoints();

  const columns = select({ sm: 1, md: 2, lg: 4, default: 1 });

  return (
    <View>
      {isLg && <DesktopSidebar />}
      {isSm && <MobileMenu />}
    </View>
  );
}
```

### useResponsiveLayout

```tsx
import { useResponsiveLayout } from 'nas-styles';

function Modal() {
  const { getWidth, containerWidth } = useResponsiveLayout();

  // Modal is 90% on mobile, 60% on tablet, 40% on desktop
  const modalWidth = getWidth({ sm: 0.9, md: 0.6, lg: 0.4 });

  return <View style={{ width: modalWidth }} />;
}
```

## Spacing Scale

The spacing system uses an 8px base grid:

| Token | Value |
|-------|-------|
| `0` | 0px |
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `5` | 20px |
| `6` | 24px |
| `8` | 32px |
| `10` | 40px |
| `12` | 48px |
| `16` | 64px |

## Breakpoints

Using Apple's standard breakpoints:

| Name | Width | Use Case |
|------|-------|----------|
| `sm` | ≤734px | Mobile devices |
| `md` | 735-1068px | Tablets |
| `lg` | ≥1069px | Desktop |

## Comparison

### vs NativeWind

| Feature | nas-styles | NativeWind |
|---------|------------|------------|
| Type safety | ✅ Full TypeScript | ❌ String-based |
| Grid simulation | ✅ `cols` prop | ❌ Manual |
| Semantic typography | ✅ `card.title` | ❌ No |

### vs Restyle

| Feature | nas-styles | Restyle |
|---------|------------|---------|
| Grid simulation | ✅ Built-in | ❌ Not included |
| Semantic typography | ✅ Context-aware | ⚠️ Basic variants |
| Responsive syntax | ✅ `md={{ p: 4 }}` | ⚠️ Different syntax |

## License

MIT © Naser Sanou
