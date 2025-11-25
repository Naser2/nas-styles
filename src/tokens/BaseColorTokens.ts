/**
 * Base Color Tokens - Primitive Color System
 * * This module contains all primitive color tokens for the design system.
 * These tokens serve as the foundation for semantic color assignments.
 */

// Brand colors - Purple theme throughout
export const BrandColors = {
  primary: '#8b3dff',      // Purple primary theme
  primaryLight: '#a370fc', // Light purple variation
  primaryDark: '#4a2e7e',  // Dark purple variation
  secondary: '#555555',    // Dark gray secondary
  success: '#5cb85c',
  danger: '#d9534f',
  warning: '#f0ad4e',
  
  // Social colors - Light gray as requested
  google: '#e5e5e5',
  googleDark: '#d0d0d0',
  facebook: '#e5e5e5',
  facebookDark: '#d0d0d0',
  
  // UI colors
  white: '#fff',
  black: '#000',
  gray: '#8e8e93',
  lightGray: '#f2f2f7',
  placeholderGray: '#9BA3AF',
  borderGray: '#c9c9c9',
  
  // Status colors
  statusBarLight: '#000000',
  toolbarBg: '#FFF',
  
  // Input colors
  inputBorder: '#000000',
  inputSuccess: '#2b8339',
  inputError: '#ed2f2f',
} as const;

export const BaseColorTokens = {
  // APP COLORS 
    text: '#11181C',
    textMuted: '#687076',
    tint:  '#8b3dff', // Updated to new theme color
    icon: '#687076',
    tabIconDefault: '#687076',
    secondary: '#6c757d',
    secondaryLight: '#adb5bd',
    mainSecondaryColor: '#a370fc26', // Main secondary color with transparency
    warning: '#ffc107',
    error: '#dc3545',
    success: '#28a745',
    surface: '#f8f9fa',
    backgroundSurface300: '#F5F5F7',
    disabled: '#ced4da',
    // new tokens for compatibility
    accent1: '#D4AF37', // gold for status/promos
    accent2: '#B8C2CC', // silver/platinum for status
    tertiary: '#6c757d', // tertiary color for UI elements
    surfaceVariant: '#e9ecef', // variant surface for subtle backgrounds
    primaryContainer: '#d6c4f5', // light purple container for primary elements
    onPrimaryContainer: '#1a0038', // text/icon color on primary containers
    onPrimary: '#ffffff', // text/icon color on primary background
    onSurface: '#1a1c1e', // text/icon color on surface
    outline: '#79747e', // outline color for borders
    textInverse: '#fff',
    divider: '#dee2e6',
    info: '#29B6F6',
    iconPrimary: '#11181C',
    iconAccent: '#8b3dff', // Updated to new theme color
    iconMuted: '#B0B0B0',
    buttonPrimaryBackground: '#8b3dff', // Updated to new theme color
    buttonPrimaryText: '#FFFFFF',
    buttonPrimaryBorder: 'transparent',
    buttonSecondaryBackground: '#f8f9fa',
    buttonSecondaryText: '#11181C',
    buttonSecondaryBorder: '#dee2e6',
    buttonOutlineBackground: 'transparent',
    buttonOutlineText: '#8b3dff', // Updated to new theme color
    buttonOutlineBorder: '#8b3dff', // Updated to new theme color
    buttonInvertedBackground: '#2C2C2E',
    buttonInvertedText: '#FFFFFF',
    buttonInvertedBorder: '#48484A',
    // Button disabled states
    buttonDisabledBackground: '#F0F0F0',
    buttonDisabledBorder: '#E0E0E0',
    buttonDisabledText: '#A0A0A0',
    selectionControl: '#8b3dff', // Updated to new theme color
    inputText: '#11181C',
    inputPlaceholder: '#687076',
    cardBorder: '#E5E7EB',
    separator: '#EDEDED',
    topText: '#222',
    secondaryText: '#888',
    // Deep purple for active tab icons
    deepPurple: '#4a2e7fcc',
    // status tones
    statusApprovedBg: '#d1e7dd',
    statusApprovedText: '#0f5132',
    statusPendingBg: '#fff3cd',
    statusPendingText: '#664d03',
    statusRejectedBg: '#f8d7da',
    statusRejectedText: '#842029',
    // role tones
    riderTone: '#b197fc',
    driverTone: '#0d6efd',
    guideTone: '#20c997',
    adminTone: '#6610f2',
    // UI visual helpers
    sidebarLine: '#dee2e6',
    smoke: '#F5F5F7', // very light gray for light mode

    // ----APP COLORS END---
  // Base Colors
  white: '#FFFFFF',
  offWhite1:'rgba(247, 247, 247, 1)',
  offWhite3:'rgba(247, 247, 247, 2)',
  offWhite5:'rgba(247, 247, 247, 5)',
  black: '#000000',
  baseGray05: '#E5E2DC',
  baseGray80: '#30302E',
  background: '#F1EEE8',

  // Gray Scale
  
  gray50: '#F3F3F3',
  gray75: '#F0EFEF',
  gray100: '#E8E8E8',
  gray200: '#DDDDDD',
  gray250: '#D1D1D1',
  gray300: '#C6C6C6',
  gray400: '#A6A6A6',
  gray500: '#868686',
  gray600: '#727272',
  gray700: '#5E5E5E',
  gray750: "#433f3f",
  gray800: '#4B4B4B',
  gray900: '#282828',
  gray950: 'rgba(30, 30, 30, 0.8)',

  // Platinum Colors
  platinum50: '#F4FAFB',
  platinum100: '#EBF5F7',
  platinum200: '#CCDFE5',
  platinum300: '#A1BDCA',
  platinum400: '#8EA3AD',
  platinum500: '#6C7C83',
  platinum600: '#556268',
  platinum700: '#394145',
  platinum800: '#142328',

  // Red Colors
  red50: '#FFF0EE',
  red100: '#FFE1DE',
  red200: '#FFD2CD',
  red300: '#FFB2AB',
  red400: '#FC7F79',
  red500: '#F83446',
  red600: '#DE1135',
  red700: '#BB032A',
  red800: '#950F22',
  red900: '#520810',

  // Orange Colors
  orange50: '#FFF0E9',
  orange100: '#FEE2D4',
  orange200: '#FFD3BC',
  orange300: '#FFB48C',
  orange400: '#FC823A',
  orange500: '#E65300',
  orange600: '#C54600',
  orange700: '#A33B04',
  orange800: '#823006',
  orange900: '#461A00',

  // Amber Colors
  amber50: '#FFF1E1',
  amber100: '#FFE4B7',
  amber200: '#FFD5A1',
  amber300: '#FFB749',
  amber400: '#DF9500',
  amber500: '#C46E00',
  amber600: '#A95F03',
  amber700: '#904A07',
  amber800: '#763A00',
  amber900: '#401E04',

  // Yellow Colors
  yellow50: '#FDF2DC',
  yellow100: '#FBE5B6',
  yellow200: '#FFD688',
  yellow300: '#F6BC2F',
  yellow400: '#D79900',
  yellow500: '#B97502',
  yellow600: '#9F6402',
  yellow700: '#845201',
  yellow800: '#6B4100',
  yellow900: '#392300',

  // Lime Colors
  lime50: '#EEF6E3',
  lime100: '#DEEEC6',
  lime200: '#CAE6A0',
  lime300: '#A6D467',
  lime400: '#77B71C',
  lime500: '#5B9500',
  lime600: '#4F7F06',
  lime700: '#3F6900',
  lime800: '#365310',
  lime900: '#1B2D00',

  // Green Colors
  green50: '#EAF6ED',
  green100: '#D3EFDA',
  green200: '#B1EAC2',
  green300: '#7FD99A',
  green400: '#06C167',
  green500: '#009A51',
  green600: '#0E8345',
  green700: '#166C3B',
  green800: '#0D572D',
  green900: '#002F14',

  // Teal Colors
  teal50: '#E2F8FB',
  teal100: '#CDEEF3',
  teal200: '#B0E7EF',
  teal300: '#77D5E3',
  teal400: '#01B8CA',
  teal500: '#0095A4',
  teal600: '#007F8C',
  teal700: '#016974',
  teal800: '#1A535A',
  teal900: '#002D33',

  // Blue Colors
  blue50: '#EFF4FE',
  blue100: '#DEE9FE',
  blue200: '#CDDEFF',
  blue300: '#A9C9FF',
  blue400: '#6DAAFB',
  blue500: '#068BEE',
  blue600: '#276EF1',
  blue700: '#175BCC',
  blue800: '#1948A3',
  blue900: '#002661',

  // Cobalt Colors
  cobalt50: '#EBEDFA',
  cobalt100: '#D2D7F0',
  cobalt200: '#949CE3',
  cobalt300: '#535FCF',
  cobalt400: '#0E1FC1',
  cobalt500: '#0A1899',
  cobalt600: '#081270',
  cobalt700: '#050C4D',

  // Purple Colors
  purple50: '#F9F1FF',
  purple100: '#F2E3FF',
  purple200: '#EBD5FF',
  purple300: '#DDB9FF',
  purple400: '#C490F9',
  purple500: '#A964F7',
  purple600: '#944DE7',
  purple700: '#7C3EC3',
  purple800: '#633495',
  purple900: '#3A1659',

  // Magenta Colors
  magenta50: '#FEEFF9',
  magenta100: '#FEDFF3',
  magenta200: '#FFCEF2',
  magenta300: '#FFACE5',
  magenta400: '#F877D2',
  magenta500: '#E142BC',
  magenta600: '#CA26A5',
  magenta700: '#A91A90',
  magenta800: '#891869',
  magenta900: '#50003F',

  // Brown Colors
  brown50: '#F6F0EA',
  brown100: '#EBE0DB',
  brown200: '#D2BBB0',
  brown300: '#B18977',
  brown400: '#99644C',
  brown500: '#744C3A',
  brown600: '#5C3C2E',
  brown700: '#3D281E',

  // Dark Mode Gray Scale
  gray50Dark: '#161616',
  gray100Dark: '#292929',
  gray200Dark: '#383838',
  gray300Dark: '#484848',
  gray400Dark: '#5D5D5D',
  gray500Dark: '#717171',
  gray600Dark: '#8C8C8C',
  gray700Dark: '#ABABAB',
  gray800Dark: '#C4C4C4',
  gray900Dark: '#DEDEDE',
  grayUberDark: 'rgba(45, 45, 45, 0.6)', 
  grayUberDark2: 'rgba(45, 45, 45, 0.7)',
  grayUberDark3: 'rgba(35, 35, 35, 0.8)',
  grayUberDark4: 'rgba(25, 25, 25, 0.9)',
  grayUberDark5: 'rgba(15, 15, 15, 1.0)',

  // Dark Mode Red Colors
  red50Dark: '#2E0608',
  red100Dark: '#4A1216',
  red200Dark: '#621C20',
  red300Dark: '#7F1F26',
  red400Dark: '#A32C34',
  red500Dark: '#C33840',
  red600Dark: '#DE5B5D',
  red700Dark: '#EA9B98',
  red800Dark: '#EFBCB9',
  red900Dark: '#F2D7D5',

  // Dark Mode Orange Colors
  orange50Dark: '#260F03',
  orange100Dark: '#401F0C',
  orange200Dark: '#562A12',
  orange300Dark: '#6D3715',
  orange400Dark: '#8C4922',
  orange500Dark: '#AB5727',
  orange600Dark: '#C97245',
  orange700Dark: '#ED9E74',
  orange800Dark: '#F1BDA3',
  orange900Dark: '#F8D6C5',

  // Dark Mode Amber Colors
  amber50Dark: '#241003',
  amber100Dark: '#3C220F',
  amber200Dark: '#502F18',
  amber300Dark: '#653D18',
  amber400Dark: '#805127',
  amber500Dark: '#956724',
  amber600Dark: '#B68131',
  amber700Dark: '#DEA85E',
  amber800Dark: '#EEC28D',
  amber900Dark: '#F6D9B7',

  // Dark Mode Yellow Colors
  yellow50Dark: '#211201',
  yellow100Dark: '#39240A',
  yellow200Dark: '#4C3111',
  yellow300Dark: '#624013',
  yellow400Dark: '#7A5616',
  yellow500Dark: '#916C1A',
  yellow600Dark: '#AE8523',
  yellow700Dark: '#D7AC57',
  yellow800Dark: '#E6C681',
  yellow900Dark: '#F3DCAE',

  // Dark Mode Lime Colors
  lime50Dark: '#0F1A03',
  lime100Dark: '#202E13',
  lime200Dark: '#2C3F19',
  lime300Dark: '#39501F',
  lime400Dark: '#4A682B',
  lime500Dark: '#5A7E35',
  lime600Dark: '#759954',
  lime700Dark: '#9EC080',
  lime800Dark: '#BDD4AB',
  lime900Dark: '#D6E3CB',

  // Dark Mode Green Colors
  green50Dark: '#081B0E',
  green100Dark: '#162F1E',
  green200Dark: '#20402A',
  green300Dark: '#2A5237',
  green400Dark: '#306C44',
  green500Dark: '#3D8351',
  green600Dark: '#5C9D70',
  green700Dark: '#8FC19C',
  green800Dark: '#AED6B8',
  green900Dark: '#CBE6D2',

  // Dark Mode Teal Colors
  teal50Dark: '#071A1C',
  teal100Dark: '#0C2E34',
  teal200Dark: '#113F46',
  teal300Dark: '#155158',
  teal400Dark: '#216972',
  teal500Dark: '#217F8B',
  teal600Dark: '#3B9BA8',
  teal700Dark: '#72C1CD',
  teal800Dark: '#9CD5DF',
  teal900Dark: '#C5E5EA',

  // Dark Mode Blue Colors
  blue50Dark: '#061431',
  blue100Dark: '#182946',
  blue200Dark: '#22375C',
  blue300Dark: '#2D4775',
  blue400Dark: '#335BA3',
  blue500Dark: '#3F6EC5',
  blue600Dark: '#5E8BDB',
  blue700Dark: '#93B4EE',
  blue800Dark: '#B3CCF6',
  blue900Dark: '#D1DFF6',

  // Dark Mode Purple Colors
  purple50Dark: '#1B0E2D',
  purple100Dark: '#2F2044',
  purple200Dark: '#3F2D59',
  purple300Dark: '#513974',
  purple400Dark: '#694B96',
  purple500Dark: '#7F5BB6',
  purple600Dark: '#9A78CE',
  purple700Dark: '#BDA7E4',
  purple800Dark: '#D2C1EF',
  purple900Dark: '#E2D9F5',

  // Dark Mode Magenta Colors
  magenta50Dark: '#28071F',
  magenta100Dark: '#411636',
  magenta200Dark: '#581F48',
  magenta300Dark: '#6E2A5B',
  magenta400Dark: '#8E3777',
  magenta500Dark: '#AB4490',
  magenta600Dark: '#C664A9',
  magenta700Dark: '#E099C9',
  magenta800Dark: '#EEB6DB',
  magenta900Dark: '#F1D4E7',

  // Canva-inspired Colors
  canvaBlue: '#6ba9ff',
  canvaGreen: '#008008',
  canvaLightPurple: '#a570ff',
  canvaPeach: '#ffebd6',
  canvaOffWhite: '#f6f7f8',
  canvaLightPurpleAlpha: 'rgba(165, 112, 255, .15)',
  canvaPrimaryGradientStart: '#00c4cc',
  canvaPrimaryGradientEnd: '#7d2ae8',
  canvaSecondaryGradientEnd: '#03a5ab',
  canvaBackgroundGradientStart: '#f9f5fe',
  canvaBackgroundGradientEnd: '#f5ffff',
  canvaShadowAlphaLight: 'rgba(43, 59, 74, .3)',
  canvaShadowAlphaMedium: 'rgba(36, 49, 61, .4)',
  canvaCardShadow: '0px 0px 1px rgba(64, 87, 109, .07), 0px 2px 2px rgba(43, 59, 74, .3)',
  canvaOrangeGradientStart: '#ec9909',
  canvaLightBlue: '#abeeee',
  canvaTextPrimaryAlpha: 'rgba(13, 18, 22, .7)',
  canvaTextInverse: '#fff',
  canvaTextDark: '#24313d',
  canvaTextAlphaDark: '0.4',
  canvaBorderLight: '#dadadb',
  canvaBorderAlphaLight: '0.7',
  canvaTextDarkAlphaLight: '0.7',
  canvaTextDarkPrimary: '#464749',
  canvaTextSecondary: '#a1a7aa',
  canvaTextDisabled: '#d1d3d5',
  canvaPurpleAlpha: 'rgba(74, 46, 127, .8)',
  canvaDarkPurple: '#7731d8',
  canvaPurpleLightAlpha: 'rgba(119, 49, 216, .1)',
  canvaPurpleHover: '#612dae',
  canvaPurpleLight: '#f1ebff',
  canvaDivider: '#e1e4e7',
  canvaBlueLightAlpha: 'rgba(57, 76, 96, .15)',
  canvaWhiteAlpha: 'hsla(0, 0%, 100%, .5)',
  canvaWhiteAlphaStrong: 'hsla(0, 0%, 100%, .9)',
  canvaPrimaryBlue: '#cee2ff',
  canvaPrimaryLightBlue: '#dae9ff',
  canvaOrange: '#ad5a00',
  canvaPink: '#db142c',
  canvaLightRed: '#ffd6d8',
  canvaDarkRed: '#501b21',
  canvaShadow1: '0 0 0 1px rgba(64, 87, 109, .07), 0 0 8px 0 rgba(57, 76, 96, .15)',
  canvaShadow2: '0 2px 4px -1px rgba(57, 76, 96, .15)',
  canvaPurpleLightStrong: '#f5f0fe',
  canvaBlueLightStrong: '#eef5fc',
  canvaShadowGradientStart: 'rgba(64, 87, 109, .04)',
  canvaShadowGradientEnd: 'rgba(64, 87, 109, .3)',
  canvaBasePurple: '#8b3dff',
  canvaSecondaryPurple: '#7630d7',
  canvaSecondaryPurpleHover: '#612dae',
  canvaBlackAlpha: 'rgba(17, 23, 29, .6)',
  canvaDarkTextAlpha: 'rgba(13, 18, 22, .86)',
  canvaShadowLight: 'rgba(53, 71, 90, .2)',
  canvaDeepPurple: '#5a32fa',
  canvaVibrantPurple: '#7d2ae8',
} as const;


// Color Categories for easier access
export const ColorCategories = {
  base: {
    white: BaseColorTokens.white,
    black: BaseColorTokens.black,
  },
  
  gray: {
    50: BaseColorTokens.gray50,
    100: BaseColorTokens.gray100,
    200: BaseColorTokens.gray200,
    300: BaseColorTokens.gray300,
    400: BaseColorTokens.gray400,
    500: BaseColorTokens.gray500,
    600: BaseColorTokens.gray600,
    700: BaseColorTokens.gray700,
    800: BaseColorTokens.gray800,
    900: BaseColorTokens.gray900,
    950: BaseColorTokens.gray950,
  },

  platinum: {
    50: BaseColorTokens.platinum50,
    100: BaseColorTokens.platinum100,
    200: BaseColorTokens.platinum200,
    300: BaseColorTokens.platinum300,
    400: BaseColorTokens.platinum400,
    500: BaseColorTokens.platinum500,
    600: BaseColorTokens.platinum600,
    700: BaseColorTokens.platinum700,
    800: BaseColorTokens.platinum800,
  },

  red: {
    50: BaseColorTokens.red50,
    100: BaseColorTokens.red100,
    200: BaseColorTokens.red200,
    300: BaseColorTokens.red300,
    400: BaseColorTokens.red400,
    500: BaseColorTokens.red500,
    600: BaseColorTokens.red600,
    700: BaseColorTokens.red700,
    800: BaseColorTokens.red800,
    900: BaseColorTokens.red900,
  },

  orange: {
    50: BaseColorTokens.orange50,
    100: BaseColorTokens.orange100,
    200: BaseColorTokens.orange200,
    300: BaseColorTokens.orange300,
    400: BaseColorTokens.orange400,
    500: BaseColorTokens.orange500,
    600: BaseColorTokens.orange600,
    700: BaseColorTokens.orange700,
    800: BaseColorTokens.orange800,
    900: BaseColorTokens.orange900,
  },

  amber: {
    50: BaseColorTokens.amber50,
    100: BaseColorTokens.amber100,
    200: BaseColorTokens.amber200,
    300: BaseColorTokens.amber300,
    400: BaseColorTokens.amber400,
    500: BaseColorTokens.amber500,
    600: BaseColorTokens.amber600,
    700: BaseColorTokens.amber700,
    800: BaseColorTokens.amber800,
    900: BaseColorTokens.amber900,
  },

  yellow: {
    50: BaseColorTokens.yellow50,
    100: BaseColorTokens.yellow100,
    200: BaseColorTokens.yellow200,
    300: BaseColorTokens.yellow300,
    400: BaseColorTokens.yellow400,
    500: BaseColorTokens.yellow500,
    600: BaseColorTokens.yellow600,
    700: BaseColorTokens.yellow700,
    800: BaseColorTokens.yellow800,
    900: BaseColorTokens.yellow900,
  },

  lime: {
    50: BaseColorTokens.lime50,
    100: BaseColorTokens.lime100,
    200: BaseColorTokens.lime200,
    300: BaseColorTokens.lime300,
    400: BaseColorTokens.lime400,
    500: BaseColorTokens.lime500,
    600: BaseColorTokens.lime600,
    700: BaseColorTokens.lime700,
    800: BaseColorTokens.lime800,
    900: BaseColorTokens.lime900,
  },

  green: {
    50: BaseColorTokens.green50,
    100: BaseColorTokens.green100,
    200: BaseColorTokens.green200,
    300: BaseColorTokens.green300,
    400: BaseColorTokens.green400,
    500: BaseColorTokens.green500,
    600: BaseColorTokens.green600,
    700: BaseColorTokens.green700,
    800: BaseColorTokens.green800,
    900: BaseColorTokens.green900,
  },

  teal: {
    50: BaseColorTokens.teal50,
    100: BaseColorTokens.teal100,
    200: BaseColorTokens.teal200,
    300: BaseColorTokens.teal300,
    400: BaseColorTokens.teal400,
    500: BaseColorTokens.teal500,
    600: BaseColorTokens.teal600,
    700: BaseColorTokens.teal700,
    800: BaseColorTokens.teal800,
    900: BaseColorTokens.teal900,
  },

  blue: {
    50: BaseColorTokens.blue50,
    100: BaseColorTokens.blue100,
    200: BaseColorTokens.blue200,
    300: BaseColorTokens.blue300,
    400: BaseColorTokens.blue400,
    500: BaseColorTokens.blue500,
    600: BaseColorTokens.blue600,
    700: BaseColorTokens.blue700,
    800: BaseColorTokens.blue800,
    900: BaseColorTokens.blue900,
  },

  cobalt: {
    50: BaseColorTokens.cobalt50,
    100: BaseColorTokens.cobalt100,
    200: BaseColorTokens.cobalt200,
    300: BaseColorTokens.cobalt300,
    400: BaseColorTokens.cobalt400,
    500: BaseColorTokens.cobalt500,
    600: BaseColorTokens.cobalt600,
    700: BaseColorTokens.cobalt700,
  },

  purple: {
    50: BaseColorTokens.purple50,
    100: BaseColorTokens.purple100,
    200: BaseColorTokens.purple200,
    300: BaseColorTokens.purple300,
    400: BaseColorTokens.purple400,
    500: BaseColorTokens.purple500,
    600: BaseColorTokens.purple600,
    700: BaseColorTokens.purple700,
    800: BaseColorTokens.purple800,
    900: BaseColorTokens.purple900,
  },

  magenta: {
    50: BaseColorTokens.magenta50,
    100: BaseColorTokens.magenta100,
    200: BaseColorTokens.magenta200,
    300: BaseColorTokens.magenta300,
    400: BaseColorTokens.magenta400,
    500: BaseColorTokens.magenta500,
    600: BaseColorTokens.magenta600,
    700: BaseColorTokens.magenta700,
    800: BaseColorTokens.magenta800,
    900: BaseColorTokens.magenta900,
  },

  brown: {
    50: BaseColorTokens.brown50,
    100: BaseColorTokens.brown100,
    200: BaseColorTokens.brown200,
    300: BaseColorTokens.brown300,
    400: BaseColorTokens.brown400,
    500: BaseColorTokens.brown500,
    600: BaseColorTokens.brown600,
    700: BaseColorTokens.brown700,
  },
} as const;

// Dark Mode Color Categories
export const DarkColorCategories = {
  gray: {
    50: BaseColorTokens.gray50Dark,
    100: BaseColorTokens.gray100Dark,
    200: BaseColorTokens.gray200Dark,
    300: BaseColorTokens.gray300Dark,
    400: BaseColorTokens.gray400Dark,
    500: BaseColorTokens.gray500Dark,
    600: BaseColorTokens.gray600Dark,
    700: BaseColorTokens.gray700Dark,
    800: BaseColorTokens.gray800Dark,
    900: BaseColorTokens.gray900Dark,
  },

  red: {
    50: BaseColorTokens.red50Dark,
    100: BaseColorTokens.red100Dark,
    200: BaseColorTokens.red200Dark,
    300: BaseColorTokens.red300Dark,
    400: BaseColorTokens.red400Dark,
    500: BaseColorTokens.red500Dark,
    600: BaseColorTokens.red600Dark,
    700: BaseColorTokens.red700Dark,
    800: BaseColorTokens.red800Dark,
    900: BaseColorTokens.red900Dark,
  },

  orange: {
    50: BaseColorTokens.orange50Dark,
    100: BaseColorTokens.orange100Dark,
    200: BaseColorTokens.orange200Dark,
    300: BaseColorTokens.orange300Dark,
    400: BaseColorTokens.orange400Dark,
    500: BaseColorTokens.orange50Dark,
    600: BaseColorTokens.orange600Dark,
    700: BaseColorTokens.orange700Dark,
    800: BaseColorTokens.orange800Dark,
    900: BaseColorTokens.orange900Dark,
  },

  amber: {
    50: BaseColorTokens.amber50Dark,
    100: BaseColorTokens.amber100Dark,
    200: BaseColorTokens.amber200Dark,
    300: BaseColorTokens.amber300Dark,
    400: BaseColorTokens.amber400Dark,
    500: BaseColorTokens.amber500Dark,
    600: BaseColorTokens.amber600Dark,
    700: BaseColorTokens.amber700Dark,
    800: BaseColorTokens.amber800Dark,
    900: BaseColorTokens.amber900Dark,
  },

  yellow: {
    50: BaseColorTokens.yellow50Dark,
    100: BaseColorTokens.yellow100Dark,
    200: BaseColorTokens.yellow200Dark,
    300: BaseColorTokens.yellow300Dark,
    400: BaseColorTokens.yellow400Dark,
    500: BaseColorTokens.yellow500Dark,
    600: BaseColorTokens.yellow600Dark,
    700: BaseColorTokens.yellow700Dark,
    800: BaseColorTokens.yellow800Dark,
    900: BaseColorTokens.yellow900Dark,
  },

  lime: {
    50: BaseColorTokens.lime50Dark,
    100: BaseColorTokens.lime100Dark,
    200: BaseColorTokens.lime200Dark,
    300: BaseColorTokens.lime300Dark,
    400: BaseColorTokens.lime400Dark,
    500: BaseColorTokens.lime500Dark,
    600: BaseColorTokens.lime600Dark,
    700: BaseColorTokens.lime700Dark,
    800: BaseColorTokens.lime800Dark,
    900: BaseColorTokens.lime900Dark,
  },

  green: {
    50: BaseColorTokens.green50Dark,
    100: BaseColorTokens.green100Dark,
    200: BaseColorTokens.green200Dark,
    300: BaseColorTokens.green300Dark,
    400: BaseColorTokens.green400Dark,
    500: BaseColorTokens.green500Dark,
    600: BaseColorTokens.green600Dark,
    700: BaseColorTokens.green700Dark,
    800: BaseColorTokens.green800Dark,
    900: BaseColorTokens.green900Dark,
  },

  teal: {
    50: BaseColorTokens.teal50Dark,
    100: BaseColorTokens.teal100Dark,
    200: BaseColorTokens.teal200Dark,
    300: BaseColorTokens.teal300Dark,
    400: BaseColorTokens.teal400Dark,
    500: BaseColorTokens.teal500Dark,
    600: BaseColorTokens.teal600Dark,
    700: BaseColorTokens.teal700Dark,
    800: BaseColorTokens.teal800Dark,
    900: BaseColorTokens.teal900Dark,
  },

  blue: {
    50: BaseColorTokens.blue50Dark,
    100: BaseColorTokens.blue100Dark,
    200: BaseColorTokens.blue200Dark,
    300: BaseColorTokens.blue300Dark,
    400: BaseColorTokens.blue400Dark,
    500: BaseColorTokens.blue500Dark,
    600: BaseColorTokens.blue600Dark,
    700: BaseColorTokens.blue700Dark,
    800: BaseColorTokens.blue800Dark,
    900: BaseColorTokens.blue900Dark,
  },

  purple: {
    50: BaseColorTokens.purple50Dark,
    100: BaseColorTokens.purple100Dark,
    200: BaseColorTokens.purple200Dark,
    300: BaseColorTokens.purple300Dark,
    400: BaseColorTokens.purple400Dark,
    500: BaseColorTokens.purple500Dark,
    600: BaseColorTokens.purple600Dark,
    700: BaseColorTokens.purple700Dark,
    800: BaseColorTokens.purple800Dark,
    900: BaseColorTokens.purple900Dark,
  },

  magenta: {
    50: BaseColorTokens.magenta50Dark,
    100: BaseColorTokens.magenta100Dark,
    200: BaseColorTokens.magenta200Dark,
    300: BaseColorTokens.magenta300Dark,
    400: BaseColorTokens.magenta400Dark,
    500: BaseColorTokens.magenta500Dark,
    600: BaseColorTokens.magenta600Dark,
    700: BaseColorTokens.magenta700Dark,
    800: BaseColorTokens.magenta800Dark,
    900: BaseColorTokens.magenta900Dark,
  },

} as const;

/**
 * Base Gradient Tokens - Centralized Gradient System
 */
export const baseGradientTokens = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  adp: 'linear-gradient(170deg, #d0768c 0%, #bf46a5 10%, #7029b2 50%, #341d8c 100%)',
  sscCard: 'radial-gradient(circle at 50% -10%, #46e0ff 0%, #211d60 43%, rgba(11, 8, 33, 0.45) 80%, transparent 85%), linear-gradient(to bottom, transparent 90%, #000 100%)',
  imageShadowOverlay: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)',
  heroOverlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
  warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  sunset: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
  ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  sky: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
  purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  pink: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  blue: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  green: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  orange: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  glassDark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
} as const;

/**
 * React Native Gradient Arrays for expo-linear-gradient
 */
export const nativeGradientArrays = {
  primary: ['#667eea', '#764ba2'] as const,
  secondary: ['#f093fb', '#f5576c'] as const,
  adp: ['#d0768c', '#bf46a5', '#7029b2', '#341d8c'] as const,
  warm: ['#fa709a', '#fee140'] as const,
  sunset: ['#ff6b6b', '#feca57'] as const,
  ocean: ['#667eea', '#764ba2'] as const,
  sky: ['#89f7fe', '#66a6ff'] as const,
  purple: ['#667eea', '#764ba2'] as const,
  pink: ['#f093fb', '#f5576c'] as const,
  blue: ['#4facfe', '#00f2fe'] as const,
  green: ['#43e97b', '#38f9d7'] as const,
  orange: ['#fa709a', '#fee140'] as const,
  imageShadowOverlay: ['rgba(0, 0, 0, 0.65)', 'rgba(0, 0, 0, 0)'] as const,
  heroOverlay: ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.2)'] as const,
} as const;

// Type definitions for better TypeScript support
export type BaseColorToken = keyof typeof BaseColorTokens;
export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export type ColorFamily = keyof typeof ColorCategories;
export type DarkColorFamily = keyof typeof DarkColorCategories;
export type GradientKey = keyof typeof nativeGradientArrays;
