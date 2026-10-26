import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { BRAND_NAME, COLLECTIONS } from '../data/products';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsHover, setCollectionsHover] = useState(false);
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setCollectionsHover(false);
  }, [location.pathname]);

  return (
    <>
      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-obsidian-900/95 via-obsidian-900/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Navigation links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[12px] uppercase tracking-widest font-medium">
            <Link
              to="/shop"
              className="text-luxury-offwhite/80 hover:text-white transition-colors relative group py-1"
            >
              Shop All
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-metallic transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/shop?filter=new"
              className="text-luxury-offwhite/80 hover:text-white transition-colors relative group py-1"
            >
              New Arrivals
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-metallic transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Mega menu trigger for Collections */}
            <div
              className="relative"
              onMouseEnter={() => setCollectionsHover(true)}
              onMouseLeave={() => setCollectionsHover(false)}
            >
              <button
                type="button"
                className="text-luxury-offwhite/80 hover:text-white transition-colors relative group py-1 flex items-center space-x-1"
              >
                <span>Collections</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-metallic transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Collections Dropdown Mega-Panel */}
              {collectionsHover && (
                <div className="absolute top-full -left-6 w-[420px] pt-4 z-50">
                  <div className="luxury-glass p-5 rounded-none shadow-2xl border border-white/15 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-[10px] tracking-widest text-metallic-dark font-mono uppercase border-b border-white/10 pb-2">
                      Active Atelier Capsules
                    </p>
                    <div className="space-y-3">
                      {COLLECTIONS.map((c) => (
                        <Link
                          key={c.id}
                          to={`/collections/${c.slug}`}
                          className="group block p-2 hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                        >
                          <div className="text-[12px] font-display font-semibold tracking-wider text-white group-hover:text-metallic-light flex items-center justify-between">
                            <span>{c.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-metallic" />
                          </div>
                          <p className="text-[11px] text-metallic-dark tracking-normal line-clamp-1 mt-0.5">
                            {c.tagline}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-luxury-offwhite/80 hover:text-white transition-colors relative group py-1"
            >
              Manifesto
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-metallic transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/contact"
              className="text-luxury-offwhite/80 hover:text-white transition-colors relative group py-1"
            >
              Concierge
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-metallic transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Center: Luxury Logo Wordmark */}
          <Link
            to="/"
            className="group flex flex-col items-center justify-center focus:outline-none"
          >
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-[0.3em] text-white group-hover:text-chrome transition-all duration-300">
              {BRAND_NAME}
            </span>
            <span className="text-[8px] font-mono tracking-widest-2xl text-metallic-dark uppercase -mt-1 group-hover:text-metallic transition-colors">
              PARIS • MILAN • TOKYO
            </span>
          </Link>

          {/* Right: Actions (Search, Wishlist, Bag, Mobile Toggle) */}
          <div className="flex items-center space-x-5 text-luxury-offwhite/90">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 hover:text-white transition-colors hover:scale-105 duration-200"
              aria-label="Search Collection"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              to="/wishlist"
              className="p-1.5 hover:text-white transition-colors hover:scale-105 duration-200 relative hidden sm:block"
              aria-label="Private Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-metallic animate-ping" />
              )}
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 hover:text-white transition-colors hover:scale-105 duration-200 relative flex items-center space-x-1.5"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[11px] font-mono text-metallic-light tracking-widest">
                [{cartCount}]
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[88px] bg-obsidian-950/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-8 border-t border-white/10 animate-in fade-in duration-300">
            <div className="space-y-6 pt-4">
              <p className="text-[10px] tracking-widest-xl text-metallic-dark font-mono uppercase">
                Directory
              </p>
              <nav className="flex flex-col space-y-5 text-lg font-display tracking-widest uppercase">
                <Link
                  to="/"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop Collection
                </Link>
                <Link
                  to="/shop?filter=new"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  to="/collections/obsidian-genesis"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Genesis 01 Capsule
                </Link>
                <Link
                  to="/wishlist"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Wishlist ({wishlist.length})
                </Link>
                <Link
                  to="/about"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Brand Manifesto
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-metallic transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Client Concierge
                </Link>
              </nav>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3 font-mono text-xs text-metallic-dark">
              <p>DIRECT INQUIRIES: ATELIER@KROMAVOID.COM</p>
              <p>CURATED IN MILAN • GLOBAL WHITE-GLOVE LOGISTICS</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
