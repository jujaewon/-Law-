import React from 'react';

import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';

import ModalsProvider from '@components/Modal/manage/ModalsProvider';
import GlobalStyle from '@styles/global';
import theme from '@styles/theme';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
