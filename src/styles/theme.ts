import { CSSProperties, DefaultTheme } from 'styled-components';

type SpacingType = Record<
'0'
| '0.25'
| '0.5'
| '0.75'
| '1'
| '1.25'
| '1.5'
| '1.75'
| '2'
| '2.5'
| '3',
CSSProperties['padding'] | CSSProperties['margin']
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
};

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: SpacingType;
  }
}

export default theme;
