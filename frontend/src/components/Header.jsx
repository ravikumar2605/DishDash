import React, { useState } from 'react';
import { useCart } from '../Services/CartContext.jsx';

const Header = () => {
  const { itemCount, openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}

          <div className="flex items-center ml-8 cursor-pointer">
            <img
              src="/dishdash.png"
              alt="DishDash Logo"
              className="w-20 h-16 object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search food, restaurants..."
                className="w-64 px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Cart Icon */}
            <button
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              onClick={openCart}
            >
              <i className="fa-brands fa-opencart fa-2xl"></i>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                Login
              </button>
              <button className="btn-primary">Sign Up</button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-left">
                  Login
                </button>
                <button className="btn-primary w-full">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
