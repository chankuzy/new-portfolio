import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { register as registerServiceWorker } from "./serviceWorkerRegistration";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerServiceWorker();