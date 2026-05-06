import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Listen for Vite's preload errors (chunk load failures)
window.addEventListener('error', (e) => {
  if (e.message.includes('loading chunk') || e.message.includes('Importing a module')) {
    window.location.reload();
  }
}, true);

// Handle unhandled promise rejections for dynamic imports
window.addEventListener('unhandledrejection', (e) => {
  if (e.reason && (e.reason.name === 'ChunkLoadError' || /loading chunk/i.test(e.reason.message))) {
    window.location.reload();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
