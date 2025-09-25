import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartFullPage, setIsCartFullPage] = useState(false);

  const addToCart = useCallback((item) => {
    const itemId = `${item.restaurantId}-${item.name}`;
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((existing) => `${existing.restaurantId}-${existing.name}` === itemId);
      if (existingItem) {
        return previousItems.map((existing) =>
          `${existing.restaurantId}-${existing.name}` === itemId
            ? { ...existing, quantity: existing.quantity + 1 }
            : existing
        );
      }
      return [...previousItems, { ...item, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((itemId, newQuantity) => {
    setCartItems((previousItems) =>
      previousItems.map((existing) =>
        `${existing.restaurantId}-${existing.name}` === itemId
          ? { ...existing, quantity: newQuantity }
          : existing
      )
    );
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((previousItems) => previousItems.filter((existing) => `${existing.restaurantId}-${existing.name}` !== itemId));
  }, []);

  const openCart = useCallback(() => {
    setIsCartFullPage(false);
    setIsCartOpen(true);
  }, []);
  const closeCart = useCallback(() => {
    setIsCartOpen(false);
    setIsCartFullPage(false);
  }, []);
  const viewFullCart = useCallback(() => { setIsCartFullPage(true); setIsCartOpen(true); }, []);
  const backToSidebar = useCallback(() => setIsCartFullPage(false), []);

  const itemCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    isCartOpen,
    isCartFullPage,
    openCart,
    closeCart,
    viewFullCart,
    backToSidebar,
    itemCount,
  }), [cartItems, addToCart, updateQuantity, removeFromCart, isCartOpen, isCartFullPage, openCart, closeCart, viewFullCart, backToSidebar, itemCount]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;


