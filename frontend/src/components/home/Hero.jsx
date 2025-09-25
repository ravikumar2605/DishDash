import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-200 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-primary-200 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Delicious food delivered{" "}
                <span className="text-gradient">hot & fresh</span> to your door
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the best food delivery service with thousands of
                restaurants, fresh ingredients, and lightning-fast delivery.
                Order now and taste the difference!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4 animate-scale-in">
                Order Now
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
              <button className="btn-outline text-lg px-8 py-4 animate-scale-in">
                <svg
                  className="mr-2 w-5 h-5 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">
                  500+
                </div>
                <div className="text-gray-600">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">30min</div>
                <div className="text-gray-600">Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Food Images */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Main Food Image */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden">
                  <div className="relative aspect-video">
                    <video
                      id="heroVideo"
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/dishdash.png"
                      aria-label="DishDash demo video"
                    >
                      <source src="/dishdash.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5"></div>
                  </div>
                </div>
              </div>

              {/* Floating Food Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
