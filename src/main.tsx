import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; 
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
