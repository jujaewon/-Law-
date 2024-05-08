import React from 'react';

import ReactDOM from 'react-dom/client';

import { initMSW } from '@/mocks/worker';

import App from './App';
import './index.css';

async function prepare() {
  if (import.meta.env.VITE_DEV) {
    await initMSW();
    console.log('App prepared');
  }
  return await new Promise((resolve) => setTimeout(resolve, 2000));
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
