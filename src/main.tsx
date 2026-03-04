import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ToastProvider } from "./ToastContext.tsx";
import { CartProvider } from './CartContext.tsx';
import { WishlistProvider } from './WishlistContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
);
