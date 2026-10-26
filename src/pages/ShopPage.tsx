import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, COLLECTIONS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { SizeGuideModal } from '../components/SizeGuideModal';
import { Product } from '../data/types';
import { SlidersHorizontal, X, ArrowDownUp } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Read filter query params
  const categoryFilter = searchParams.get('category') || 'all';
  const collectionFilter = searchParams.get('collection') || 'all';
  const specialFilter = searchParams.get('filter') || 'all'; // 'new', 'bestseller'
  const sortBy = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all'; // 'under-50k', '50k-100k', 'above-100k'

  const categories = [
    { label: 'All Silhouettes', value: 'all' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Bespoke Tailoring', value: 'tailoring' },
    { label: 'Architectural Streetwear', value: 'streetwear' },
    { label: 'Footwear & Derbies', value: 'footwear' },
    { label: 'Hardware & Accessories', value: 'accessories' },
  ];

  const updateParam = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }
    setSearchParams(nextParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Filter & Sort Calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category
      if (categoryFilter !== 'all' && product.category !== categoryFilter) {
        return false;
      }
      // Collection
      if (collectionFilter !== 'all' && product.collection !== collectionFilter) {
        return false;
      }
      // Special
      if (specialFilter === 'new' && !product.isNew) {
        return false;
      }
      if (specialFilter === 'bestseller' && !product.isBestSeller) {
        return false;
      }
      // Price
      if (priceRange === 'under-50k' && product.price >= 50000) return false;
      if (priceRange === '50k-100k' && (product.price < 50000 || product.price > 100000)) return false;
      if (priceRange === 'above-100k' && product.price <= 100000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default
    });
  }, [categoryFilter, collectionFilter, specialFilter, sortBy, priceRange]);

  const hasActiveFilters = categoryFilter !== 'all' || collectionFilter !== 'all' || specialFilter !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Banner & Header */}
      <div className="py-8 border-b border-white/10 space-y-3">
        <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
          ATELIER COLLECTION DIRECTORY
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
          COMPLETE <span className="text-chrome">SILHOUETTE CATALOG</span>
        </h1>
        <p className="text-xs sm:text-sm text-metallic-light max-w-2xl font-light">
          Sculpted outerwear, razor-sharp geometric blazers, and titanium-welted footwear engineered in strictly capped seasonal batches.
        </p>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        
        {/* Category Pills (Desktop) */}
        <div className="hidden lg:flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => updateParam('category', c.value)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                categoryFilter === c.value
                  ? 'border-white bg-white text-obsidian font-bold'
                  : 'border-white/15 text-metallic-dark hover:border-white/40 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Mobile filter toggle */}
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-white/20 text-xs font-mono uppercase text-white"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
        </button>

        {/* Sorting Dropdown & Count */}
        <div className="flex items-center space-x-4 text-xs font-mono">
          <span className="text-metallic-dark hidden sm:inline">
            Showing [{filteredProducts.length}] Silhouettes
          </span>

          <div className="flex items-center space-x-2 border border-white/15 px-3 py-1.5 bg-obsidian-900">
            <ArrowDownUp className="w-3.5 h-3.5 text-metallic" />
            <select
              value={sortBy}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="bg-transparent text-white font-mono text-xs uppercase focus:outline-none cursor-pointer"
            >
              <option value="featured" className="bg-obsidian-900 text-white">Curated Order</option>
              <option value="newest" className="bg-obsidian-900 text-white">Newest Additions</option>
              <option value="price-asc" className="bg-obsidian-900 text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-obsidian-900 text-white">Price: High to Low</option>
            </select>
          </div>
        </div>

      </div>

      {/* Active Filter Chips Bar */}
      {hasActiveFilters && (
        <div className="py-3 flex flex-wrap items-center gap-2 text-[11px] font-mono border-b border-white/5">
          <span className="text-metallic-dark">Active Parameters:</span>
          {categoryFilter !== 'all' && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-white/10 text-white border border-white/20">
              <span>Category: {categoryFilter}</span>
              <button onClick={() => updateParam('category', 'all')} className="hover:text-metallic">✕</button>
            </span>
          )}
          {collectionFilter !== 'all' && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-white/10 text-white border border-white/20">
              <span>Collection: {collectionFilter}</span>
              <button onClick={() => updateParam('collection', 'all')} className="hover:text-metallic">✕</button>
            </span>
          )}
          {specialFilter !== 'all' && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-white/10 text-white border border-white/20">
              <span>Tag: {specialFilter}</span>
              <button onClick={() => updateParam('filter', 'all')} className="hover:text-metallic">✕</button>
            </span>
          )}
          {priceRange !== 'all' && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-white/10 text-white border border-white/20">
              <span>Price: {priceRange}</span>
              <button onClick={() => updateParam('price', 'all')} className="hover:text-metallic">✕</button>
            </span>
          )}
          <button
            onClick={clearAllFilters}
            className="text-metallic-light hover:text-white underline ml-2 cursor-pointer"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className="py-10">
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <h3 className="font-display text-xl uppercase tracking-widest text-metallic">
              No Atelier Pieces Found
            </h3>
            <p className="text-xs text-metallic-dark max-w-sm mx-auto">
              No garments meet your selected filter criteria. Clear your filters to explore our full directory.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-2.5 bg-white text-obsidian text-xs font-mono font-bold tracking-widest uppercase hover:bg-metallic-light transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedQuickViewProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setIsMobileFiltersOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-obsidian-900 border-l border-white/20 p-6 flex flex-col justify-between text-white">
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <h3 className="font-display text-sm tracking-widest uppercase text-white">
                    Filter Silhouettes
                  </h3>
                  <button onClick={() => setIsMobileFiltersOpen(false)} className="p-1 text-metallic hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-metallic-dark">
                    Category
                  </span>
                  <div className="flex flex-col space-y-1.5 font-mono text-xs">
                    {categories.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => {
                          updateParam('category', c.value);
                          setIsMobileFiltersOpen(false);
                        }}
                        className={`text-left py-1 hover:text-white ${
                          categoryFilter === c.value ? 'text-white font-bold underline' : 'text-metallic-dark'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Collections */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-metallic-dark">
                    Capsule Collection
                  </span>
                  <div className="flex flex-col space-y-1.5 font-mono text-xs">
                    <button
                      onClick={() => {
                        updateParam('collection', 'all');
                        setIsMobileFiltersOpen(false);
                      }}
                      className={`text-left py-1 hover:text-white ${
                        collectionFilter === 'all' ? 'text-white font-bold' : 'text-metallic-dark'
                      }`}
                    >
                      All Capsules
                    </button>
                    {COLLECTIONS.map((col) => (
                      <button
                        key={col.slug}
                        onClick={() => {
                          updateParam('collection', col.slug);
                          setIsMobileFiltersOpen(false);
                        }}
                        className={`text-left py-1 hover:text-white ${
                          collectionFilter === col.slug ? 'text-white font-bold underline' : 'text-metallic-dark'
                        }`}
                      >
                        {col.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price range */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-metallic-dark">
                    Price Band
                  </span>
                  <div className="flex flex-col space-y-1.5 font-mono text-xs text-metallic-dark">
                    {[
                      { label: 'All Ranges', value: 'all' },
                      { label: 'Under ₹50,000', value: 'under-50k' },
                      { label: '₹50,000 — ₹1,00,000', value: '50k-100k' },
                      { label: 'Above ₹1,00,000', value: 'above-100k' },
                    ].map((p) => (
                      <button
                        key={p.value}
                        onClick={() => {
                          updateParam('price', p.value);
                          setIsMobileFiltersOpen(false);
                        }}
                        className={`text-left py-1 hover:text-white ${
                          priceRange === p.value ? 'text-white font-bold underline' : ''
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    clearAllFilters();
                    setIsMobileFiltersOpen(false);
                  }}
                  className="w-full py-3 bg-white/10 hover:bg-white text-white hover:text-obsidian text-xs font-mono uppercase tracking-widest transition-all"
                >
                  Clear All Filters
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Quick View & Size Modals */}
      <QuickViewModal
        product={selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

    </div>
  );
};
