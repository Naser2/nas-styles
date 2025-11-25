# nas-styles: NPM Package Build Guide

**Goal:** Package the styling system as `nas-styles` on npm.

---

## Prerequisites

- Node.js >= 18
- npm or yarn
- GitHub account (already set up: https://github.com/Naser2/nas-styles)

---

## Step 1: Initialize Package

```bash
cd /Users/nassersanou/nas-styles

# Initialize package.json
npm init -y
```

Then update `package.json`:

```json
{
  "name": "nas-styles",
  "version": "1.0.0",
  "description": "Type-safe React Native styling system with grid simulation and responsive breakpoints",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./tokens": {
      "import": "./dist/esm/tokens/index.js",
      "require": "./dist/cjs/tokens/index.js",
      "types": "./dist/types/tokens/index.d.ts"
    },
    "./hooks": {
      "import": "./dist/esm/hooks/index.js",
      "require": "./dist/cjs/hooks/index.js",
      "types": "./dist/types/hooks/index.d.ts"
    },
    "./primitives": {
      "import": "./dist/esm/primitives/index.js",
      "require": "./dist/cjs/primitives/index.js",
      "types": "./dist/types/primitives/index.d.ts"
    }
  },
  "scripts": {
    "build": "npm run build:esm && npm run build:cjs && npm run build:types",
    "build:esm": "tsc --project tsconfig.esm.json",
    "build:cjs": "tsc --project tsconfig.cjs.json",
    "build:types": "tsc --project tsconfig.types.json",
    "clean": "rm -rf dist",
    "prepublishOnly": "npm run clean && npm run build",
    "release": "npm publish --access public"
  },
  "keywords": [
    "react-native",
    "styling",
    "design-system",
    "grid",
    "responsive",
    "typescript",
    "tailwind-like",
    "restyle-alternative"
  ],
  "author": "Naser Sanou",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Naser2/nas-styles.git"
  },
  "bugs": {
    "url": "https://github.com/Naser2/nas-styles/issues"
  },
  "homepage": "https://github.com/Naser2/nas-styles#readme",
  "peerDependencies": {
    "react": ">=17.0.0",
    "react-native": ">=0.70.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-native": "^0.72.0",
    "typescript": "^5.0.0"
  }
}
```

---

## Step 2: TypeScript Configuration

Create three TypeScript config files:

### tsconfig.base.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020"],
    "jsx": "react",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### tsconfig.esm.json

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "module": "ESNext",
    "outDir": "./dist/esm",
    "declaration": false
  }
}
```

### tsconfig.cjs.json

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "./dist/cjs",
    "declaration": false
  }
}
```

### tsconfig.types.json

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "module": "ESNext",
    "outDir": "./dist/types",
    "declaration": true,
    "emitDeclarationOnly": true
  }
}
```

---

## Step 3: Fix Import Paths

The source files use `@/` import aliases. You need to update them for the npm package.

### Option A: Manual Updates

Replace all `@/` imports with relative paths:

```typescript
// Before
import { spacing } from '@/constants/tokens';
import { useTheme } from '@/contexts/ThemeContext';
import { useBreakpoints } from '@/hooks/useBreakpoints';

// After
import { spacing } from '../tokens';
import { useTheme } from '../context';
import { useBreakpoints } from '../hooks';
```

### Option B: Use tsconfig-paths

Add `tsconfig-paths` to resolve aliases during build:

```bash
npm install -D tsconfig-paths
```

Then add paths resolution to your build scripts.

### Files to Update

1. **src/primitives/Box/Box.tsx**
   - Change `@/constants/tokens` → `../../tokens`
   - Change `@/contexts/ThemeContext` → `../../context`
   - Change `@/hooks/useBreakpoints` → `../../hooks`

2. **src/primitives/Box/Box.types.ts**
   - Change `@/constants/tokens/spacing.tokens` → `../../tokens/spacing.tokens`
   - Change `@/constants/tokens/shadows.tokens` → `../../tokens/shadows.tokens`
   - Change `@/constants/tokens/borders.tokens` → `../../tokens/borders.tokens`

3. **src/primitives/Text/Text.tsx**
   - Change `@/contexts/ThemeContext` → `../../context`
   - Change `@/constants/tokens` → `../../tokens`

4. **src/primitives/Text/Text.types.ts**
   - Change `@/constants/tokens/typography.tokens` → `../../tokens/typography.tokens`

5. **src/hooks/useResponsiveLayout.ts**
   - Change `./useAppleStoreBreakpoints` → `./useAppleStoreBreakpoints` (already correct)

6. **src/context/ThemeContext.tsx**
   - Change `@/constants/BaseColorTokens` → `../tokens/BaseColorTokens`
   - Change `@/constants/LayoutConstants` → `../tokens/LayoutConstants`

7. **src/tokens/LayoutConstants.ts**
   - Change `./BaseColorTokens` → `./BaseColorTokens` (already correct)
   - Change `./tokens/spacing.tokens` → `./spacing.tokens`

---

## Step 4: Create README.md

```bash
cat > /Users/nassersanou/nas-styles/README.md << 'EOF'
# nas-styles

Type-safe React Native styling system with grid simulation, responsive breakpoints, and semantic typography.

## Features

- 🎯 **Grid Simulation** - CSS Grid-like `cols` and `colSpan` props via Flexbox
- 📱 **Responsive Props** - Tailwind-like `p={4} md={{ p: 6 }} lg={{ p: 8 }}`
- 🔤 **Semantic Typography** - Context-aware variants like `card.title`, `section.heading`
- 🍎 **Apple Breakpoints** - Standard 734/1068/1069px breakpoints
- 🎨 **Dark Mode** - Built-in theme support with light/dark modes
- 📦 **Type-Safe** - Full TypeScript support with autocomplete

## Installation

\`\`\`bash
npm install nas-styles
# or
yarn add nas-styles
\`\`\`

## Quick Start

\`\`\`tsx
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
          <Box>Item 1</Box>
          <Box>Item 2</Box>
          <Box>Item 3</Box>
          <Box>Item 4</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
\`\`\`

## Box Props

| Prop | Type | Description |
|------|------|-------------|
| \`cols\` | \`1\|2\|3\|4\|6\|12\` | Grid column count |
| \`colSpan\` | \`1\|2\|3\|4\|6\|12\|'full'\` | Grid column span |
| \`p\`, \`px\`, \`py\`, etc. | \`number\` | Padding (token scale) |
| \`m\`, \`mx\`, \`my\`, etc. | \`number\` | Margin (token scale) |
| \`gap\` | \`number\` | Flex gap |
| \`direction\` | \`'row'\|'column'\` | Flex direction |
| \`bg\` | \`string\` | Background color |
| \`sm\`, \`md\`, \`lg\` | \`ResponsiveBoxProps\` | Breakpoint overrides |

## Text Variants

### Semantic Variants
- \`screen.title\`, \`screen.subtitle\`
- \`section.heading\`, \`section.subheading\`
- \`card.title\`, \`card.subtitle\`, \`card.body\`
- \`cta.primary\`, \`cta.secondary\`
- \`link.default\`, \`link.nav\`

### Base Variants
- \`display\`, \`displayMedium\`
- \`h1\`, \`h2\`
- \`body\`, \`bodySmall\`
- \`caption\`

## Responsive Design

\`\`\`tsx
// Responsive padding
<Box p={4} md={{ p: 6 }} lg={{ p: 8 }} />

// Responsive grid
<Box cols={1} md={{ cols: 2 }} lg={{ cols: 4 }} />

// Responsive flex direction
<Box direction="column" md={{ direction: 'row' }} />
\`\`\`

## Hooks

\`\`\`tsx
import { useBreakpoints, useResponsiveLayout } from 'nas-styles';

// Conditional rendering
const { isSm, isMd, isLg, select } = useBreakpoints();
const columns = select({ sm: 1, md: 2, lg: 4, default: 1 });

// Width calculations
const { getWidth, containerWidth } = useResponsiveLayout();
const modalWidth = getWidth({ sm: 0.9, md: 0.6, lg: 0.4 });
\`\`\`

## License

MIT
EOF
```

---

## Step 5: Build & Test Locally

```bash
cd /Users/nassersanou/nas-styles

# Install dependencies
npm install

# Build the package
npm run build

# Test locally with npm pack
npm pack

# This creates nas-styles-1.0.0.tgz
# You can install it in another project to test:
# npm install /path/to/nas-styles-1.0.0.tgz
```

---

## Step 6: Publish to npm

```bash
# Login to npm (if not already)
npm login

# Publish
npm publish --access public
```

After publishing, users can install with:

```bash
npm install nas-styles
```

---

## Step 7: Create .gitignore

```bash
cat > /Users/nassersanou/nas-styles/.gitignore << 'EOF'
# Dependencies
node_modules/

# Build output
dist/

# npm pack output
*.tgz

# OS files
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Test coverage
coverage/
EOF
```

---

## Step 8: Initial Git Commit

```bash
cd /Users/nassersanou/nas-styles

git add .
git commit -m "Initial commit: nas-styles React Native styling system

Features:
- Box primitive with grid simulation (cols, colSpan)
- Text primitive with semantic typography variants
- Tailwind-like responsive props (p={4} md={{ p: 6 }} lg={{ p: 8 }})
- Apple-standard breakpoints (734/1068/1069px)
- Comprehensive token system (spacing, typography, colors, borders)
- Light/dark theme support via ThemeProvider

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

git push origin master
```

---

## Directory Structure After Setup

```
nas-styles/
├── docs/
│   └── THEME/
│       ├── FINAL-IMPLEMENTATION-PLAN.md
│       ├── NPM-STYLING-LIBRARY-RESEARCH.md
│       ├── STYLING-SYSTEM-ARCHITECTURE.md
│       └── BUILD-GUIDE.md
├── src/
│   ├── tokens/
│   │   ├── animations.tokens.ts
│   │   ├── BaseColorTokens.ts
│   │   ├── borders.tokens.ts
│   │   ├── breakpoints.tokens.ts
│   │   ├── colors.tokens.ts
│   │   ├── gradients.tokens.ts
│   │   ├── LayoutConstants.ts
│   │   ├── shadows.tokens.ts
│   │   ├── spacing.tokens.ts
│   │   ├── typography.tokens.ts
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
├── .gitignore
├── package.json
├── tsconfig.base.json
├── tsconfig.esm.json
├── tsconfig.cjs.json
├── tsconfig.types.json
└── README.md
```

---

## Troubleshooting

### Import Path Errors

If you see errors like "Cannot find module '@/...'", you need to update the import paths as described in Step 3.

### Peer Dependency Warnings

These are expected. The package requires React and React Native to be installed in the consuming project.

### TypeScript Errors

Run `npx tsc --noEmit` to check for type errors before building.

---

## Next Steps

1. ✅ Fix import paths in source files
2. ✅ Run initial build
3. ✅ Test locally with npm pack
4. ✅ Publish to npm
5. 🔲 Add unit tests
6. 🔲 Add Storybook examples
7. 🔲 Set up CI/CD with GitHub Actions
