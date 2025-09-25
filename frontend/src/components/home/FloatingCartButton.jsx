import React from 'react';
import { useCart } from '../../Services/CartContext.jsx';

const FloatingCartButton = () => {
  const { itemCount, openCart: onOpenCart } = useCart();
  
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onOpenCart}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 lg:hidden"
    >
      <div className="relative">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
        <span className="absolute -top-2 -right-2 bg-white text-primary-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      </div>
    </button>
  );
};

export default FloatingCartButton;

