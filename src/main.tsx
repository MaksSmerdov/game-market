import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import './styles/_fonts.scss';
import App from './App.tsx';
import { ResponsiveProvider } from './context/ResponsiveContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResponsiveProvider>
      <App />
    </ResponsiveProvider>
  </StrictMode>
);
