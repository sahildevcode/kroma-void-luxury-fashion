import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.composition.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-xl transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen max-w-4xl mx-auto px-4 pt-20 pb-12 flex flex-col">
        {/* Search Bar Input */}
        <div className="relative border-b-2 border-white/20 pb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <Search className="w-6 h-6 text-metallic" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH SILHOUETTES, MATERIALS, OUTERWEAR..."
              className="w-full bg-transparent text-xl md:text-2xl font-display uppercase tracking-widest text-white placeholder:text-metallic-dark focus:outline-none"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 text-metallic-dark hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono tracking-widest uppercase text-metallic-dark">
          <span className="py-1">POPULAR QUERIES:</span>
          {['Trench', 'Titanium', 'Merino', 'Bomber', 'Blazer', 'Derby'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 border border-white/10 hover:border-white/40 hover:text-white transition-all bg-white/5"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Showcase */}
        <div className="mt-10 flex-1">
          {query.trim() !== '' && (
            <p className="text-xs font-mono text-metallic-dark uppercase tracking-widest mb-6">
              Found {filteredProducts.length} Atelier Reference{filteredProducts.length === 1 ? '' : 's'}
            </p>
          )}

          {query.trim() !== '' && filteredProducts.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <p className="font-display text-lg tracking-wider text-metallic">
                NO PIECES MATCH YOUR QUERY
              </p>
              <p className="text-xs text-metallic-dark max-w-md mx-auto">
                Please verify spelling or search by material (e.g., "wool", "titanium", "leather").
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.slug}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="group bg-obsidian-900 border border-white/10 hover:border-white/30 transition-all p-3 block"
                >
                  <div className="aspect-[3/4] overflow-hidden mb-3 bg-charcoal">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-metallic-dark">
                      {p.category}
                    </span>
                    <h4 className="text-xs font-display tracking-wider text-white group-hover:text-chrome transition-colors line-clamp-1">
                      {p.name}
                    </h4>
                    <p className="text-xs font-mono text-metallic-light">
                      ₹{p.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
