import React from 'react';
import { useCart } from '../../Services/CartContext.jsx';

const FeaturedRestaurants = () => {
  const { addToCart: onAddToCart } = useCart();
  const restaurants = [
    {
      id: 1,
      name: "Bella Vista",
      cuisine: "Italian",
      rating: 4.8,
      deliveryTime: "25-30 min",
      image: "🍝",
      dishes: [
        { name: "Margherita Pizza", price: 12.99, image: "🍕" },
        { name: "Pasta Carbonara", price: 15.99, image: "🍝" },
        { name: "Tiramisu", price: 6.99, image: "🍰" }
      ]
    },
    {
      id: 2,
      name: "Spice Garden",
      cuisine: "Indian",
      rating: 4.9,
      deliveryTime: "20-25 min",
      image: "🍛",
      dishes: [
        { name: "Chicken Biryani", price: 14.99, image: "🍗" },
        { name: "Butter Chicken", price: 16.99, image: "🍖" },
        { name: "Naan Bread", price: 3.99, image: "🥖" }
      ]
    },
    {
      id: 3,
      name: "Sushi Master",
      cuisine: "Japanese",
      rating: 4.7,
      deliveryTime: "30-35 min",
      image: "🍣",
      dishes: [
        { name: "Salmon Roll", price: 18.99, image: "🍣" },
        { name: "Chicken Teriyaki", price: 13.99, image: "🍱" },
        { name: "Miso Soup", price: 4.99, image: "🍲" }
      ]
    },
    {
      id: 4,
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.6,
      deliveryTime: "15-20 min",
      image: "🍔",
      dishes: [
        { name: "Classic Burger", price: 11.99, image: "🍔" },
        { name: "Chicken Wings", price: 9.99, image: "🍗" },
        { name: "French Fries", price: 4.99, image: "🍟" }
      ]
    }
  ];

  const handleAddToCart = (restaurant, dish) => {
    onAddToCart({
      ...dish,
      restaurant: restaurant.name,
      restaurantId: restaurant.id
    });
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Restaurants</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing restaurants and delicious dishes from our curated selection. 
            Fresh ingredients, authentic flavors, and fast delivery guaranteed.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="food-card">
              {/* Restaurant Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-3xl">
                      {restaurant.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                      <p className="text-gray-600">{restaurant.cuisine} Cuisine</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold text-gray-900">{restaurant.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">{restaurant.deliveryTime}</p>
                  </div>
                </div>
              </div>

              {/* Dishes */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Popular Dishes</h4>
                <div className="space-y-3">
                  {restaurant.dishes.map((dish, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{dish.image}</div>
                        <div>
                          <h5 className="font-medium text-gray-900">{dish.name}</h5>
                          <p className="text-sm text-gray-600">${dish.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddToCart(restaurant, dish)}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-outline text-lg px-8 py-4">
            View All Restaurants
            <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
