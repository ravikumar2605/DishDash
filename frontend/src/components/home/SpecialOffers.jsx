import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "First Order Special",
      description: "Get 50% off on your first order",
      discount: "50% OFF",
      code: "WELCOME50",
      validUntil: "Dec 31, 2024",
      image: "🎉",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Free delivery on orders over $25",
      discount: "FREE",
      code: "FREEDEL",
      validUntil: "Ongoing",
      image: "🚚",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "30% off on all weekend orders",
      discount: "30% OFF",
      code: "WEEKEND30",
      validUntil: "Every Weekend",
      image: "🎊",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      id: 4,
      title: "Student Discount",
      description: "20% off for students with valid ID",
      discount: "20% OFF",
      code: "STUDENT20",
      validUntil: "Always",
      image: "🎓",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Special <span className="text-gradient">Offers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out on these amazing deals! Save big on your favorite food 
            with our exclusive offers and discounts.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offers.map((offer) => (
            <div key={offer.id} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${offer.bgColor} p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
              {/* Discount Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 bg-gradient-to-r ${offer.color} text-white text-sm font-bold rounded-full`}>
                  {offer.discount}
                </div>
              </div>

              {/* Offer Icon */}
              <div className="text-4xl mb-4">{offer.image}</div>

              {/* Offer Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                <p className="text-gray-600 text-sm">{offer.description}</p>
                
                {/* Code */}
                <div className="bg-white rounded-lg p-3 border-2 border-dashed border-gray-300">
                  <div className="text-xs text-gray-500 mb-1">Use Code:</div>
                  <div className="font-mono font-bold text-gray-900">{offer.code}</div>
                </div>

                {/* Valid Until */}
                <div className="text-xs text-gray-500">
                  Valid until: {offer.validUntil}
                </div>
              </div>

              {/* Claim Button */}
              <button className={`w-full mt-4 bg-gradient-to-r ${offer.color} text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                Claim Offer
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Offers
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and be the first to know about new deals, 
              restaurant additions, and exclusive discounts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm mt-4 opacity-75">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
