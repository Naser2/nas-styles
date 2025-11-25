/**
 * Box - Foundation Layout Component
 *
 * Features:
 * - Spacing props (m, p, mx, my, px, py, etc.)
 * - Flexbox props (flex, direction, align, justify, wrap, gap)
 * - Grid props (cols, colSpan) - Simulates CSS Grid via Flexbox
 * - Responsive props (sm, md, lg) - Breakpoint-specific overrides
 * - Color props (bg, borderColor)
 * - Border props (borderRadius, borderWidth)
 * - Shadow props
 */

import React from 'react';
import { borderRadii, borderWidths, spacing } from '../../tokens';
import { useTheme } from '../../context/ThemeContext';
import { useBreakpoints } from '../../hooks/useBreakpoints';
import { StyleProp, View, ViewStyle } from 'react-native';
import type { BoxProps, ResponsiveBoxProps } from './Box.types';

export function Box({
  children,
  // Spacing props
  m, mx, my, mt, mr, mb, ml,
  p, px, py, pt, pr, pb, pl,
  gap,

  // Flexbox props
  flex,
  direction = 'column',
  align,
  justify,
  wrap,

  // Color props
  bg,
  borderColor,

  // Border props
  borderRadius,
  borderWidth,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,

  // Shadow
  shadow,

  // Layout
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,

  // Position
  position,
  top,
  right,
  bottom,
  left,
  zIndex,

  // Overflow
  overflow,

  // Custom style
  style,

  // Grid props (NEW)
  cols,
  colSpan,

  // Responsive props (NEW)
  sm,
  md,
  lg,

  // Other View props
  ...viewProps
}: BoxProps) {
  const { colors, getShadow } = useTheme();
  const bp = useBreakpoints();

  // ============ RESPONSIVE LOGIC ============

  // Get current breakpoint overrides
  const responsiveProps: ResponsiveBoxProps = bp.select({
    sm: sm || {},
    md: md || {},
    lg: lg || {},
    default: {},
  });

  // Merge base props with responsive overrides - Grid & Flexbox
  const finalCols = responsiveProps.cols ?? cols;
  const finalGap = responsiveProps.gap ?? gap;
  const finalDirection = responsiveProps.direction ?? direction;
  const finalAlign = responsiveProps.align ?? align;
  const finalJustify = responsiveProps.justify ?? justify;
  const finalWrap = responsiveProps.wrap ?? wrap;
  const finalFlex = responsiveProps.flex ?? flex;

  // Merge responsive spacing (Tailwind-like: p={4} lg={{ p: 8 }})
  const finalM = responsiveProps.m ?? m;
  const finalMx = responsiveProps.mx ?? mx;
  const finalMy = responsiveProps.my ?? my;
  const finalMt = responsiveProps.mt ?? mt;
  const finalMr = responsiveProps.mr ?? mr;
  const finalMb = responsiveProps.mb ?? mb;
  const finalMl = responsiveProps.ml ?? ml;
  const finalP = responsiveProps.p ?? p;
  const finalPx = responsiveProps.px ?? px;
  const finalPy = responsiveProps.py ?? py;
  const finalPt = responsiveProps.pt ?? pt;
  const finalPr = responsiveProps.pr ?? pr;
  const finalPb = responsiveProps.pb ?? pb;
  const finalPl = responsiveProps.pl ?? pl;

  // Merge responsive layout
  const finalWidth = responsiveProps.width ?? width;
  const finalMaxWidth = responsiveProps.maxWidth ?? maxWidth;
  const finalHeight = responsiveProps.height ?? height;

  // ============ GRID CALCULATION ============

  // When cols is set, enable grid mode (row + wrap)
  const isGridMode = finalCols !== undefined;
  const gridDirection = isGridMode ? 'row' : finalDirection;
  const gridWrap = isGridMode ? 'wrap' : finalWrap;

  // Calculate width for colSpan
  // Uses the parent's cols value to determine percentage
  // If parent has cols={3}, child with colSpan={1} = 33.33%
  let colSpanWidth: ViewStyle['width'] | undefined;
  if (colSpan !== undefined && finalCols !== undefined) {
    if (colSpan === 'full') {
      colSpanWidth = '100%';
    } else {
      // Calculate percentage based on parent's column count
      colSpanWidth = `${(colSpan / finalCols) * 100}%`;
    }
  } else if (colSpan !== undefined) {
    // If colSpan is set but no parent cols, use 12-column grid
    if (colSpan === 'full') {
      colSpanWidth = '100%';
    } else {
      colSpanWidth = `${(colSpan / 12) * 100}%`;
    }
  }

  // ============ BUILD STYLE OBJECT ============

  const calculatedStyle = {
    // Flexbox (with grid overrides when cols is set)
    ...(finalFlex !== undefined && { flex: finalFlex }),
    ...(gridDirection && { flexDirection: gridDirection }),
    ...(finalAlign && { alignItems: finalAlign }),
    ...(finalJustify && { justifyContent: finalJustify }),
    ...(gridWrap && { flexWrap: gridWrap }),
    ...(finalGap !== undefined && { gap: spacing[finalGap as keyof typeof spacing] || finalGap }),

    // ColSpan width (takes precedence over width prop when set)
    ...(colSpanWidth && { width: colSpanWidth }),

    // Spacing - Margin (responsive: m={4} lg={{ m: 8 }})
    ...(finalM !== undefined && { margin: spacing[finalM as keyof typeof spacing] || finalM }),
    ...(finalMx !== undefined && { marginHorizontal: spacing[finalMx as keyof typeof spacing] || finalMx }),
    ...(finalMy !== undefined && { marginVertical: spacing[finalMy as keyof typeof spacing] || finalMy }),
    ...(finalMt !== undefined && { marginTop: spacing[finalMt as keyof typeof spacing] || finalMt }),
    ...(finalMr !== undefined && { marginRight: spacing[finalMr as keyof typeof spacing] || finalMr }),
    ...(finalMb !== undefined && { marginBottom: spacing[finalMb as keyof typeof spacing] || finalMb }),
    ...(finalMl !== undefined && { marginLeft: spacing[finalMl as keyof typeof spacing] || finalMl }),

    // Spacing - Padding (responsive: p={4} lg={{ p: 8 }})
    ...(finalP !== undefined && { padding: spacing[finalP as keyof typeof spacing] || finalP }),
    ...(finalPx !== undefined && { paddingHorizontal: spacing[finalPx as keyof typeof spacing] || finalPx }),
    ...(finalPy !== undefined && { paddingVertical: spacing[finalPy as keyof typeof spacing] || finalPy }),
    ...(finalPt !== undefined && { paddingTop: spacing[finalPt as keyof typeof spacing] || finalPt }),
    ...(finalPr !== undefined && { paddingRight: spacing[finalPr as keyof typeof spacing] || finalPr }),
    ...(finalPb !== undefined && { paddingBottom: spacing[finalPb as keyof typeof spacing] || finalPb }),
    ...(finalPl !== undefined && { paddingLeft: spacing[finalPl as keyof typeof spacing] || finalPl }),

    // Colors
    ...(bg && { backgroundColor: (colors as Record<string, any>)[bg] || bg }),
    ...(borderColor && { borderColor: (colors as Record<string, any>)[borderColor] || borderColor }),

    // Borders
    ...(borderRadius !== undefined && { borderRadius: borderRadii[borderRadius as keyof typeof borderRadii] || borderRadius }),
    ...(borderWidth !== undefined && { borderWidth: borderWidths[borderWidth as keyof typeof borderWidths] || borderWidth }),
    ...(borderTopLeftRadius !== undefined && { borderTopLeftRadius: borderRadii[borderTopLeftRadius as keyof typeof borderRadii] || borderTopLeftRadius }),
    ...(borderTopRightRadius !== undefined && { borderTopRightRadius: borderRadii[borderTopRightRadius as keyof typeof borderRadii] || borderTopRightRadius }),
    ...(borderBottomLeftRadius !== undefined && { borderBottomLeftRadius: borderRadii[borderBottomLeftRadius as keyof typeof borderRadii] || borderBottomLeftRadius }),
    ...(borderBottomRightRadius !== undefined && { borderBottomRightRadius: borderRadii[borderBottomRightRadius as keyof typeof borderRadii] || borderBottomRightRadius }),

    // Shadow
    ...(shadow && getShadow && getShadow(shadow as any)),

    // Layout (responsive: width={100} lg={{ width: 300 }})
    ...(!colSpanWidth && finalWidth !== undefined && { width: finalWidth }),
    ...(finalHeight !== undefined && { height: finalHeight }),
    ...(minWidth !== undefined && { minWidth }),
    ...(minHeight !== undefined && { minHeight }),
    ...(finalMaxWidth !== undefined && { maxWidth: finalMaxWidth }),
    ...(maxHeight !== undefined && { maxHeight }),

    // Position
    ...(position && { position }),
    ...(top !== undefined && { top }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
    ...(zIndex !== undefined && { zIndex }),

    // Overflow
    ...(overflow && { overflow }),
  };

  // Compose final style array
  const finalStyle: StyleProp<ViewStyle> = [calculatedStyle as ViewStyle, style];

  return (
    <View style={finalStyle} {...viewProps}>
      {children}
    </View>
  );
}

Box.displayName = 'Box';
