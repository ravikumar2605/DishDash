import React from 'react';
import Header from './components/Header';
import Hero from './components/home/Hero';
import FeaturedRestaurants from './components/home/FeaturedRestaurants';
import HowItWorks from './components/home/HowItWorks';
import SpecialOffers from './components/home/SpecialOffers';
import CustomerReviews from './components/home/CustomerReviews';
import DownloadApp from './components/home/DownloadApp';
import Contact from './components/home/Contact';
import Footer from './components/Footer';
import Cart from './components/home/Cart';
import FloatingCartButton from './components/home/FloatingCartButton';
import CartFullPage from './components/home/CartFullPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedRestaurants />
                <HowItWorks />
                <SpecialOffers />
                <CustomerReviews />
                <DownloadApp />
                <Contact />
              </>
            }
          />
          <Route path="/cart" element={<CartFullPage />} />
        </Routes>
      </main>
      <Footer />
      <Cart />
      <FloatingCartButton />
    </div>
  );
}

export default App;