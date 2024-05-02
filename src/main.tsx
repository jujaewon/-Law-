import React from 'react';
import { CookiesProvider } from 'react-cookie';

import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import ModalsProvider from '@components/Modal/manage/ModalsProvider';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import { initMSW } from '@/mocks/worker';
import App from './App';
import './index.css';

if (import.meta.env.VITE_DEV) {
  initMSW();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CookiesProvider>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </CookiesProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
