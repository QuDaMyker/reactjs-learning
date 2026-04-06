import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AppProviders } from './providers/AppProviders';
import { AppRouter } from './router/AppRouter';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </StrictMode>,
);
