import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  html,
  body {
    background-color: white;
    ${breakpoint('tablet')`
      max-width: 500px;
      margin: 0 auto;
    `}
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
