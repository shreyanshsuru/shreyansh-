import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Variant } from './types';

interface CartItem extends Product {
  quantity: number;
  selectedVariant?: Variant;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: Variant) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, delta: number, variantId?: string) => void;
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1, variant?: Variant) => {
    setCart(prev => {
      const existing = prev.find(item => 
        item.id === product.id && item.selectedVariant?.id === variant?.id
      );
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedVariant?.id === variant?.id)
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, selectedVariant: variant }];
    });
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setCart(prev => prev.filter(item => 
      !(item.id === productId && item.selectedVariant?.id === variantId)
    ));
  };

  const updateQuantity = (productId: string, delta: number, variantId?: string) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId && item.selectedVariant?.id === variantId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
