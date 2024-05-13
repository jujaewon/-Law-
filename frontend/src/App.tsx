import Router from '@routes/index';
import ModalsProvider from '@components/Modal/manage/ModalsProvider';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';

import { CookiesProvider } from 'react-cookie';

import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CookiesProvider>
        <ModalsProvider>
          <Router />
        </ModalsProvider>
      </CookiesProvider>
    </ThemeProvider>
  );
}

export default App;
