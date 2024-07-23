import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>
  </React.StrictMode>
);
