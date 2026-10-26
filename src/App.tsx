import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { ToastNotification } from './components/ToastNotification';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { WishlistPage } from './pages/WishlistPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPages } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top upon page navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollToTop />
        {/* Subtle Grain Texture Overlay */}
        <div className="grain-overlay" />

        <div className="min-h-screen flex flex-col bg-obsidian text-luxury-white">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/collections/:slug" element={<CollectionDetailPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              
              {/* Policies & Guides */}
              <Route path="/shipping-policy" element={<LegalPages type="shipping" />} />
              <Route path="/returns-policy" element={<LegalPages type="returns" />} />
              <Route path="/privacy-policy" element={<LegalPages type="privacy" />} />
              <Route path="/terms" element={<LegalPages type="terms" />} />
              <Route path="/size-guide" element={<LegalPages type="size-guide" />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Interactive Modals and Drawers */}
          <CartDrawer />
          <SearchModal />
          <ToastNotification />
        </div>
      </HashRouter>
    </StoreProvider>
  );
}

export default App;
