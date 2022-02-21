import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import Assets from 'pages/Assets';
import queryClient from 'services/queryClient';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Assets />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
