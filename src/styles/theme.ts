import { CSSProperties, DefaultTheme } from 'styled-components';

type SpacingType = Record<
0
| 0.25
| 0.5
| 0.75
| 1
| 1.25
| 1.5
| 1.75
| 2
| 2.5
| 3,
CSSProperties['padding'] | CSSProperties['margin']
>;

type ColorsType = Record<
'transparent'
| 'black'
| 'white'
| 'gray'
| 'primary'
| 'textDark'
| 'textLight'
| 'textInput',
CSSProperties['color']
>;

type FontSizesType = Record<
'xxl'
| 'xl'
| 'l'
| 'm'
| 's'
| 'xs'
| 'xxs',
CSSProperties['fontSize']
>;

type FontWeightsType = Record<
'normal'
| 'medium'
| 'semiBold'
| 'bold',
CSSProperties['fontSize']
>;

const theme: DefaultTheme = {
  spacing: {
    0: '0',
    0.25: '2px',
    0.5: '4px',
    0.75: '6px',
    1: '8px',
    1.25: '10px',
    1.5: '12px',
    1.75: '14px',
    2: '16px',
    2.5: '20px',
    3: '24px',
  },
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    gray: '#E9EDF2',
    primary: '#2374EE',
    textDark: '#333D4B',
    textLight: '#6B7684',
    textInput: '#8B95A1',
  },
  fontSizes: {
    xxl: '32px',
    xl: '24px',
    l: '20px',
    m: '16px',
    s: '14px',
    xs: '12px',
    xxs: '10px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: SpacingType;
    colors: ColorsType;
    fontSizes: FontSizesType;
    fontWeights: FontWeightsType;
  }
}

export default theme;
