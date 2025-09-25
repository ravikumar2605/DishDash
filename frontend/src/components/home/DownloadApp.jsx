import React from 'react';

const DownloadApp = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Easy Ordering",
      description: "Browse, select, and order your favorite food in just a few taps"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-time Tracking",
      description: "Track your order from kitchen to your doorstep in real-time"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Exclusive Offers",
      description: "Get access to app-only deals and special discounts"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Secure Payment",
      description: "Pay safely with multiple payment options and secure transactions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Download Our <span className="text-gradient">Mobile App</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the full Rydoro experience on your mobile device. Order food, 
                track deliveries, and enjoy exclusive app-only features.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.808 1.626-.99-1.626 2.808-1.626-.99-1.732zM5.864 2.658L16.802 8.99l-1.732 1.732L4.131 4.39l1.733-1.732zm0 18.684l10.937-6.333-1.732-1.732L4.131 19.61l1.733 1.732z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
            </div>

            {/* QR Code */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  QR
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Scan to Download</p>
                <p className="text-sm text-gray-600">Point your camera at the QR code</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-white">
                  <div className="text-sm font-semibold text-gray-900">9:41</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                    <div className="w-6 h-3 border border-gray-900 rounded-sm">
                      <div className="w-4 h-2 bg-gray-900 rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 py-4 bg-gradient-to-r from-primary-600 to-secondary-600">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <img 
                        src="/rydoro.png" 
                        alt="Rydoro Logo" 
                        className="w-6 h-6 object-contain"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Rydoro</h3>
                        <p className="text-sm opacity-90">Food Delivery</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-4">
                  {/* Search Bar */}
                  <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center space-x-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-gray-500 text-sm">Search food, restaurants...</span>
                  </div>

                  {/* Food Items */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-lg flex items-center justify-center">
                          <span className="text-lg">🍕</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">Pizza Margherita</h4>
                          <p className="text-xs text-gray-600">$12.99 • 25-30 min</p>
                        </div>
                        <button className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce-slow">
              📱
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-xl animate-pulse-slow">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
