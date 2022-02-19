import styled, { ThemeProvider } from 'styled-components';
import { m } from 'styled-components-spacing';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const Root = styled.div`
  color: red;
  ${m(4)}
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root>
        App
      </Root>
    </ThemeProvider>
  );
};

export default App;
