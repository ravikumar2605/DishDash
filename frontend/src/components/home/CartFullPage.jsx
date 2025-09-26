import React, { useEffect, useMemo } from 'react';
import { useCart } from '../../Services/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

const CartFullPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const { cartItems, removeFromCart, updateQuantity, backToSidebar, openCart } = useCart();
  const navigate = useNavigate();

  const { itemCount, subtotal, tax, deliveryFee, total } = useMemo(() => {
    const subtotalCalc = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 2.99;
    const taxAmount = subtotalCalc * 0.08;
    return {
      itemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: subtotalCalc,
      tax: taxAmount,
      deliveryFee: delivery,
      total: subtotalCalc + delivery + taxAmount,
    };
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleBackToSidebar = () => {
    backToSidebar();
    navigate('/');
    setTimeout(() => openCart(), 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <i
                className="fa-brands fa-opencart fa-2xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Your Cart</h1>
              <p className="text-sm text-white text-opacity-90">
                {itemCount} items
              </p>
            </div>
          </div>
          <button
            onClick={handleBackToSidebar}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Back to Sidebar
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Browse restaurants and add items to start your order.
            </p>
            <button onClick={handleBackToSidebar} className="btn-primary">
              Explore Restaurants
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={`${item.restaurantId}-${item.name}`}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.image}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.restaurant}
                        </p>
                        <p className="text-lg font-bold text-primary-600">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                `${item.restaurantId}-${item.name}`,
                                item.quantity - 1
                              )
                            }
                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                `${item.restaurantId}-${item.name}`,
                                item.quantity + 1
                              )
                            }
                            className="w-8 h-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(`${item.restaurantId}-${item.name}`)
                          }
                          className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold">
                      ${deliveryFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full btn-primary text-lg py-4">
                    Proceed to Checkout
                    <svg
                      className="ml-2 w-5 h-5 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleBackToSidebar}
                    className="w-full btn-outline"
                  >
                    Continue Shopping
                  </button>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-sm text-green-700 font-medium">
                      Free delivery on orders over $25
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartFullPage;


