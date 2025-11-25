Update Todos
 Research web on React Native computed styles and StyleSheet performance
 Read existing codebase files (ThemeContext, LayoutConstants, Box, Text, tokens)
 Analyzing Box component naming conventions
 Analyze Text component and propose unified typography system
 Research grid system and breakpoint naming best practices
 Propose centralization strategy for tokens, colors, and constants
 Write final research report with recommendations
Now let me compile the comprehensive research report based on all my findings:

Deep Research Report: React Native Styling System Architecture
Executive Summary
This report provides fact-based analysis and recommendations for creating a scalable, centralized design system for your React Native app, covering Box/Text primitives, grid systems, breakpoint naming, and token consolidation.

Part A: Impact of Computed Styles in React Native
Key Research Findings
Based on web research from Stack Overflow, Medium, and Theodo:

Approach	Performance Impact	Recommendation
StyleSheet.create	✅ Optimized - Styles converted to IDs at build time	Use for static styles
Inline styles	⚠️ 300-400ms TTI increase, 15-18 FPS with animations	Avoid in hot paths
Objects outside render	✅ Same as StyleSheet (no difference)	Acceptable
useMemo + dynamic styles	✅ Efficient when dependencies don't change	Use for dynamic styles
StyleSheet.flatten	❌ Removes optimization benefits	Avoid
Critical Insight for Your Architecture
Your current ThemeContext approach is VALID and PERFORMANT:

// ThemeContext pattern - GOOD
const getInputStyle = useCallback(() => {
  return { /* styles */ };
}, [colors]);

React Native bundler does NOT pre-compute styles at bundle time - all styles are evaluated at runtime. The optimization from StyleSheet.create is that it converts style objects to numeric IDs for faster native bridge communication. However, for dynamic/themed styles, using useCallback + memoization is the correct approach.

Performance-critical finding: NativeWind processes styles at build time and only applies reactive styles at runtime, achieving near-native performance (NativeWind docs).

Part B: Style Variables Naming - Function vs Static
Analysis: Cols(2) vs cols2
Syntax	Pros	Cons	Performance
cols={2}	Type-safe, dynamic	Requires number parsing	✅ Same
cols="2" or cols2	Simple, static	No validation	✅ Same
cols={Cols(2)}	Reusable function	Extra function call	⚠️ Negligible overhead
lg:cols-2 (string)	Tailwind-like, familiar	Requires string parsing	❌ Parsing overhead
RECOMMENDED APPROACH: Object Props with Number Values
// ✅ RECOMMENDED - Clean, type-safe, performant
<Box cols={2} lg={{ cols: 3 }} xl={{ cols: 4 }} />

// ❌ AVOID - String parsing overhead  
<Box grid="lg:cols-3 xl:cols-4" />

// ❌ AVOID - Unnecessary function wrapper
<Box cols={Cols(2)} /> // Cols() adds nothing vs cols={2}

Why numbers over functions:

Zero parsing overhead
TypeScript autocomplete works
JSX native prop passing
Matches React Native style conventions
Part C: Box Component - Proposed Naming System
Current State Analysis
Your Box.tsx already supports:

Spacing: m, mx, my, mt, mr, mb, ml, p, px, py, etc.
Flexbox: flex, direction, align, justify, wrap, gap
Layout: width, height, position, overflow
Proposed Enhanced BoxProps
interface BoxProps extends ViewProps {
  children?: React.ReactNode;
  
  // ============ SPACING (existing - keep) ============
  m?: SpacingKey | number;
  p?: SpacingKey | number;
  // ... (keep all existing)
  
  // ============ DISPLAY MODE ============
  display?: 'flex' | 'block' | 'inline-flex' | 'grid' | 'none';
  
  // ============ GRID SYSTEM (new) ============
  // Column count per breakpoint
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  sm?: ResponsiveProps;  // 0-734px (mobile)
  md?: ResponsiveProps;  // 735-1068px (tablet) 
  lg?: ResponsiveProps;  // 1069px+ (desktop)
  
  // Grid span (for children)
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  colStart?: number;
  colEnd?: number;
  
  // Row span
  rowSpan?: number;
  
  // ============ SEMANTIC VARIANTS ============
  variant?: 'container' | 'card' | 'section' | 'row' | 'stack';
}

interface ResponsiveProps {
  cols?: number;
  colSpan?: number;
  gap?: SpacingKey | number;
  display?: 'flex' | 'grid' | 'block';
}

Usage Examples
// Simple margin bottom (existing - works)
<Box mb={20}>...</Box>

// Grid layout - 2 cols on mobile, 3 on tablet, 4 on desktop
<Box 
  display="grid" 
  cols={2}
  md={{ cols: 3 }}
  lg={{ cols: 4 }}
  gap={4}
>
  <Box colSpan={2}>Wide item</Box>
  <Box>Item</Box>
</Box>

// Card variant
<Box variant="card" p={4} shadow="medium">
  ...
</Box>

Part D: Text Component - Unified Typography System
Current Fragmentation Analysis
File	Typography Approach
primitives/Text/Text.tsx	Uses typographyStyles[variant]
src/components/global/text.tsx	Hardcoded h1-h6, dark prop
constants/tokens/typography.tokens.ts	SF Pro + UberMove fonts
Apple components	Inline styles.title, styles.subtitle
Proposed Unified TextProps
type TextVariant = 
  // Display (hero, large headings)
  | 'display' | 'displayMedium'
  // Headings
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  // Body
  | 'body' | 'bodyMedium' | 'bodySmall' | 'caption'
  // Semantic/Contextual
  | 'screen.title' | 'screen.subtitle'
  | 'section.heading' | 'section.subheading'
  | 'card.title' | 'card.subtitle' | 'card.body'
  | 'hero.title' | 'hero.subtitle'
  | 'cta.primary' | 'cta.secondary'
  | 'link' | 'label' | 'error';

interface TextProps extends Omit<RNTextProps, 'style'> {
  children?: React.ReactNode;
  
  // Typography variant (replaces as="h1" pattern)
  variant?: TextVariant;
  
  // Shortcuts for common variants
  heading?: boolean;      // = variant="h1"
  subheading?: boolean;   // = variant="h2"
  
  // Color
  color?: keyof ThemeColors | string;
  muted?: boolean;        // = color="textMuted"
  inverse?: boolean;      // = color="textInverse"
  
  // Alignment
  align?: 'left' | 'center' | 'right';
  
  // Weight override
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  
  // Size override (use sparingly)
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  
  style?: StyleProp<TextStyle>;
}

Typography Style Map Implementation
// constants/tokens/typography.semantic.ts

export const semanticTypography = {
  // Screen-level
  'screen.title': typographyStyles.display,
  'screen.subtitle': typographyStyles.body,
  
  // Section-level
  'section.heading': typographyStyles.displayMedium,
  'section.subheading': typographyStyles.h2,
  
  // Card-level
  'card.title': typographyStyles.h1,
  'card.subtitle': typographyStyles.bodySmall,
  'card.body': typographyStyles.body,
  
  // Hero-level
  'hero.title': {
    ...typographyStyles.display,
    color: '#ffffff',
  },
  'hero.subtitle': {
    ...typographyStyles.body,
    color: '#ffffff',
    opacity: 0.9,
  },
  
  // CTA
  'cta.primary': {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
  },
  'cta.secondary': {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
  },
} as const;

Usage Examples
// Before (scattered)
<Text style={[styles.sectionTitle, { color: colors.text, ...typographyStyles.h1 }]}>
  Vercel Hero
</Text>

// After (unified)
<Text variant="section.heading">Vercel Hero</Text>

// Or using shortcuts
<Text heading>Vercel Hero</Text>

// Card context
<Text variant="card.title">Store Name</Text>
<Text variant="card.subtitle" muted>123 Main St</Text>

Part E: Centralization Strategy
Current State (Fragmented)
constants/
├── BaseColorTokens.ts      ← 871 lines, 486+ tokens
├── LayoutConstants.ts      ← 153 lines, Layout + Typography
├── AppleStoreColors.ts     ← 147 lines (duplicate)
├── Typography.ts           ← 219 lines (duplicate)
└── tokens/
    ├── spacing.tokens.ts   ← 187 lines (Apple spacing)
    ├── typography.tokens.ts← 364 lines (Apple typography)
    ├── colors.tokens.ts    ← (exists?)
    └── ...

Proposed Unified Architecture
constants/
├── tokens/
│   ├── index.ts              ← Single export point
│   ├── colors.tokens.ts      ← ALL colors (merged)
│   ├── typography.tokens.ts  ← ALL typography (merged)
│   ├── spacing.tokens.ts     ← ALL spacing (unified 4px grid)
│   ├── breakpoints.tokens.ts ← Responsive breakpoints
│   ├── shadows.tokens.ts     ← Shadow presets
│   ├── borders.tokens.ts     ← Border radii/widths
│   └── gradients.tokens.ts   ← All gradients
│
├── LayoutConstants.ts        ← DEPRECATED (re-exports from tokens)
├── BaseColorTokens.ts        ← DEPRECATED (re-exports from tokens)
└── AppleStoreColors.ts       ← DEPRECATED (re-exports from tokens)

contexts/
└── ThemeContext.tsx          ← Uses tokens/, provides theme-aware access

Migration Strategy (Non-Breaking)
Phase 1: Create Unified Tokens (No Changes to Consumers)

// constants/tokens/spacing.unified.ts

// Import from existing (preserve all values)
import { Layout } from '../LayoutConstants';
import { spacing as appleSpacing, semanticSpacing } from './spacing.tokens';

// Unified export
export const spacing = {
  // Numeric scale (4px base)
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  // ... (from appleSpacing)
  
  // Named aliases for LayoutConstants compatibility
  xs: 4,   // = Layout.spacing.xs
  sm: 8,   // = Layout.spacing.sm
  md: 16,  // = Layout.spacing.md
  lg: 24,  // = Layout.spacing.lg
  xl: 32,  // = Layout.spacing.xl
  xxl: 64, // = Layout.spacing.xxl
} as const;

// Re-export for backwards compatibility
export { Layout }; // Consumers can still import { Layout }

Phase 2: Deprecation Markers

// constants/LayoutConstants.ts

/**
 * @deprecated Use `import { spacing } from '@/constants/tokens'` instead
 */
export { spacing as Layout_spacing } from './tokens';

// Keep full export for backwards compatibility
export const Layout = { /* existing */ };

Phase 3: Update Imports Gradually

Use codemod or find-replace:

# Find all imports
grep -r "from '@/constants/LayoutConstants'" src/

ThemeContext Integration
// contexts/ThemeContext.tsx

import { 
  spacing, 
  typography, 
  colors as tokenColors,
  shadows,
  gradients,
} from '@/constants/tokens';

// Merge token colors with theme variants
const Colors = {
  light: {
    ...tokenColors.light,
    // Theme-specific overrides
  },
  dark: {
    ...tokenColors.dark,
    // Theme-specific overrides
  },
};

// Expose tokens through context
export interface ThemeContextType {
  // Existing...
  colors: ThemeColors;
  
  // NEW: Direct token access
  tokens: {
    spacing: typeof spacing;
    typography: typeof typography;
    shadows: typeof shadows;
    gradients: typeof gradients;
  };
  
  // Helpers
  getSpacing: (key: SpacingKey) => number;
  getTypography: (variant: TypographyStyleName) => TextStyle;
}

Part F: Grid System & Breakpoint Consolidation
Current Breakpoint Hooks Analysis
Hook	Breakpoints	Device Types
useAppleStoreBreakpoints	734/1068/1069	small/medium/large
useDeviceWidthAndOrientation	768/1024	mobile/tablet/desktop
useResponsiveLayout	480/768	small/medium/large
Recommended: Single Unified Hook
// hooks/useBreakpoints.ts

import { useWindowDimensions } from 'react-native';
import { breakpoints, ResponsiveValue } from '@/constants/tokens';

export type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl';

interface BreakpointState {
  // Current breakpoint
  current: BreakpointKey;
  
  // Boolean helpers
  isMobile: boolean;   // sm
  isTablet: boolean;   // md
  isDesktop: boolean;  // lg or xl
  
  // Orientation
  isPortrait: boolean;
  isLandscape: boolean;
  
  // Dimensions
  width: number;
  height: number;
  
  // Responsive value selector
  select: <T>(values: Partial<ResponsiveValue<T>> & { default: T }) => T;
  
  // Grid helpers
  getGridCols: (config: ResponsiveValue<number>) => number;
}

export function useBreakpoints(): BreakpointState {
  const { width, height } = useWindowDimensions();
  
  const current: BreakpointKey = 
    width >= 1069 ? 'lg' :
    width >= 735 ? 'md' : 'sm';
  
  return {
    current,
    isMobile: current === 'sm',
    isTablet: current === 'md',
    isDesktop: current === 'lg' || current === 'xl',
    isPortrait: height > width,
    isLandscape: width > height,
    width,
    height,
    
    select: (values) => values[current] ?? values.default,
    
    getGridCols: (config) => config[current],
  };
}

Usage
function ProductGrid() {
  const bp = useBreakpoints();
  
  const cols = bp.select({ sm: 1, md: 2, lg: 4, default: 1 });
  
  return (
    <Box display="grid" cols={cols} gap={4}>
      {products.map(p => <ProductCard key={p.id} />)}
    </Box>
  );
}

Summary: Recommended Naming Conventions
Breakpoints
Name	Width	Use Case
sm	0-734px	Mobile phones
md	735-1068px	Tablets
lg	1069px+	Desktop
xl	1440px+	Large desktop (optional)
Box Props
Prop	Type	Example
cols	number	cols={2}
sm/md/lg	ResponsiveProps	lg={{ cols: 4 }}
colSpan	number	colSpan={2}
gap	SpacingKey or number	gap={4} or gap="md"
Text Variants
Context	Variant
Screen headers	screen.title, screen.subtitle
Section headers	section.heading, section.subheading
Cards	card.title, card.subtitle, card.body
Hero	hero.title, hero.subtitle
Buttons	cta.primary, cta.secondary
Implementation Priority
Low Risk: Create unified tokens in constants/tokens/ with backwards-compatible exports
Medium Risk: Extend Box with grid props (cols, sm, md, lg)
Medium Risk: Extend Text with semantic variants (section.heading, etc.)
High Risk: Deprecate and remove old imports (requires testing)
Sources:

React Native Inline Styles Performance - Stack Overflow
Styles and Performance in React Native - Medium
Why Use RN StyleSheets - Theodo
NativeWind Overview
Performance Benchmarks - Gluestack
Tailwind Grid Template Columns
Update Todos
 Research web on React Native computed styles and StyleSheet performance
 Read existing codebase files (ThemeContext, LayoutConstants, Box, Text, tokens)
 Analyze Box component and propose optimal props/naming conventions
 Analyze Text component and propose unified typography system
 Research grid system and breakpoint naming best practices
 Propose centralization strategy for tokens, colors, and constants
 Write final research report with recommendations
The research is complete. Let me commit this to the branch:

Bash
git status
On branch claude/research-react-native-styling-01DHvFv2sNVjRpDzgy44jxei
nothing to commit, working tree clean
I've completed the comprehensive research. Here's a summary of the key findings:

Key Recommendations
1. Computed Styles Performance (Fact-Based)
StyleSheet.create optimizes by converting to numeric IDs - use for static styles
Your ThemeContext pattern with useCallback is correct for dynamic/themed styles
Inline styles add 300-400ms TTI; avoid in animation-heavy components
React Native does NOT pre-compile styles at bundle time - all evaluated at runtime
2. Naming Conventions: Use Numbers, Not Functions
// ✅ RECOMMENDED
<Box cols={2} md={{ cols: 3 }} lg={{ cols: 4 }} />

// ❌ AVOID (unnecessary overhead)
<Box cols={Cols(2)} />  // Cols() wrapper adds nothing
<Box grid="lg:cols-3" /> // String parsing overhead

3. Breakpoint Naming Standard
Name	Width	Description
sm	0-734px	Mobile
md	735-1068px	Tablet
lg	1069px+	Desktop
4. Centralization Strategy (Non-Breaking)
Create unified exports in constants/tokens/
Add backwards-compatible re-exports from LayoutConstants.ts and BaseColorTokens.ts
Gradually migrate imports using codemod
5. Text Semantic Variants
<Text variant="section.heading">...</Text>
<Text variant="card.title">...</Text>
<Text variant="hero.subtitle">...</Text>

Would you like me to:

Create a markdown file with this research saved to the repo?
Start implementing the Box grid system with the proposed API?