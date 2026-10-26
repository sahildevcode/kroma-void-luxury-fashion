import React, { useState } from 'react';
import { Heart, Plus, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, isInWishlist, addToCart } = useStore();
  const wishlisted = isInWishlist(product.id);

  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div
      className="group relative flex flex-col transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-obsidian-800 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col space-y-1.5">
          {product.isNew && (
            <span className="bg-obsidian-900/90 text-[9px] font-mono tracking-widest text-white px-2 py-1 uppercase border border-white/20 backdrop-blur-sm">
              EDITION 01
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-metallic-dark/80 text-[9px] font-mono tracking-widest text-obsidian px-2 py-0.5 uppercase font-bold backdrop-blur-sm">
              ATELIER ARCHIVE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            wishlisted
              ? 'bg-white text-obsidian scale-105'
              : 'bg-obsidian-950/60 text-white/70 hover:text-white hover:bg-obsidian-900'
          }`}
          aria-label="Save to private wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-obsidian' : ''}`} />
        </button>

        {/* Main Image with Zoom Transition */}
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <img
            src={displayImage}
            alt={product.name}
            className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
        </Link>

        {/* Quick Actions Drawer Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-obsidian-950/95 via-obsidian-950/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out flex items-center justify-between space-x-2">
          <button
            onClick={() => {
              // Quick add default size
              addToCart(product, product.sizes[0], product.colors[0]?.name || 'Standard');
            }}
            className="flex-1 py-2.5 bg-white text-obsidian text-[10px] font-mono font-bold tracking-widest uppercase hover:bg-metallic-light transition-all flex items-center justify-center space-x-1"
          >
            <Plus className="w-3 h-3" />
            <span>QUICK RESERVE</span>
          </button>

          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="p-2.5 bg-obsidian-800 text-white border border-white/20 hover:border-white transition-colors"
              title="Quick inspect"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Meta and Details */}
      <div className="pt-4 pb-2 space-y-1.5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[10px] font-mono uppercase text-metallic-dark tracking-widest">
            <span>{product.category}</span>
            <span>{product.madeIn}</span>
          </div>

          <Link
            to={`/product/${product.slug}`}
            className="block text-xs font-display font-semibold tracking-wider text-luxury-white hover:text-chrome transition-colors line-clamp-1 mt-1"
          >
            {product.name}
          </Link>
        </div>

        {/* Price & Swatches */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2 font-mono text-xs">
            <span className="text-white font-medium">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.compareAtPrice && (
              <span className="text-metallic-dark line-through text-[11px]">
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center space-x-1.5">
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  title={c.name}
                  className="w-2.5 h-2.5 rounded-full border border-white/30"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
