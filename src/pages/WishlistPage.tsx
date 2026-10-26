import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WishlistPage: React.FC = () => {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="min-h-screen py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="py-8 border-b border-white/10 space-y-3">
        <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
          PRIVATE ARCHIVE REGISTER
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
          CURATED <span className="text-chrome">WISHLIST</span>
        </h1>
        <p className="text-xs sm:text-sm text-metallic-light max-w-2xl font-light">
          Your confidential registry of reserved silhouettes. Saved pieces remain visible across sessions on this device.
        </p>
      </div>

      {/* Grid or Empty */}
      <div className="py-12">
        {wishlistedProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <div className="w-14 h-14 rounded-full border border-white/10 mx-auto flex items-center justify-center text-metallic">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-widest text-white">
              Your Private Register Is Empty
            </h3>
            <p className="text-xs text-metallic-dark max-w-sm mx-auto leading-relaxed">
              Explore our current editorial releases and mark silhouettes to curate your private acquisition register.
            </p>
            <div className="pt-4">
              <Link
                to="/shop"
                className="px-8 py-3.5 bg-white text-obsidian text-xs font-mono font-bold tracking-widest uppercase hover:bg-metallic-light transition-all"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
