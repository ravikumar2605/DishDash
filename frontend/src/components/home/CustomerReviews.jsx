import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment: "Absolutely amazing service! The food arrived hot and fresh, exactly as ordered. The delivery was super fast and the driver was very friendly. Will definitely order again!",
      avatar: "👩‍💼",
      order: "Pizza & Pasta Combo"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Los Angeles, CA",
      rating: 5,
      comment: "Best food delivery app I've ever used. Great selection of restaurants, easy ordering process, and the food quality is consistently excellent. Highly recommended!",
      avatar: "👨‍💻",
      order: "Sushi & Japanese Cuisine"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Chicago, IL",
      rating: 4,
      comment: "Love the variety of cuisines available. The app is user-friendly and the delivery tracking feature is very helpful. Food always arrives on time!",
      avatar: "👩‍🎨",
      order: "Mexican & Latin Food"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Miami, FL",
      rating: 5,
      comment: "Outstanding customer service and food quality. The special offers are great and the loyalty program is very rewarding. This is my go-to app for food delivery!",
      avatar: "👨‍🍳",
      order: "BBQ & American Classics"
    },
    {
      id: 5,
      name: "Lisa Wang",
      location: "Seattle, WA",
      rating: 5,
      comment: "The food is always fresh and delicious. I love how I can track my order in real-time and the delivery drivers are always professional. Great experience overall!",
      avatar: "👩‍🏫",
      order: "Asian Fusion & Thai"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Austin, TX",
      rating: 4,
      comment: "Fast delivery and great food quality. The app is easy to navigate and I love the restaurant recommendations. Will continue using this service!",
      avatar: "👨‍💼",
      order: "Burgers & Fast Food"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with DishDash.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="card p-6">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-2xl">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                  <p className="text-xs text-primary-600 font-medium">{review.order}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Rating Summary */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="text-6xl font-bold text-primary-600">4.8</div>
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    {renderStars(5)}
                  </div>
                  <p className="text-gray-600">Based on 10,000+ reviews</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excellent Service Rating
              </h3>
              <p className="text-gray-600 text-lg">
                Our customers consistently rate us highly for food quality, 
                delivery speed, and customer service.
              </p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-4">
              {[5, 4, 3, 2, 1].map((stars) => {
                const percentage = stars === 5 ? 85 : stars === 4 ? 12 : stars === 3 ? 2 : stars === 2 ? 1 : 0;
                return (
                  <div key={stars} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-16">
                      <span className="text-sm font-medium text-gray-700">{stars}</span>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
