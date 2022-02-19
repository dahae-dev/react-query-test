import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  html,
  body {
    background-color: white;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
