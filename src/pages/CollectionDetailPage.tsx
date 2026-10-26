import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COLLECTIONS, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft } from 'lucide-react';

export const CollectionDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const collection = COLLECTIONS.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h1 className="font-display text-2xl uppercase tracking-widest text-white">
          Capsule Not Found
        </h1>
        <Link to="/shop" className="px-6 py-3 bg-white text-obsidian font-mono text-xs uppercase tracking-widest">
          Explore All Capsules
        </Link>
      </div>
    );
  }

  const collectionProducts = PRODUCTS.filter((p) => p.collection === collection.slug);

  return (
    <div className="min-h-screen">
      
      {/* Massive Editorial Header */}
      <div className="relative min-h-[55vh] flex items-end justify-start border-b border-white/10 overflow-hidden">
        <img
          src={collection.editorialImage}
          alt={collection.title}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-45 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-metallic hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Collections</span>
          </Link>

          <span className="block text-[10px] font-mono tracking-widest-2xl text-metallic uppercase">
            {collection.subtitle}
          </span>
          <h1 className="font-display font-black text-3xl sm:text-6xl text-white tracking-tight uppercase mt-2">
            {collection.title}
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-metallic-light max-w-2xl font-light leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Collection Garments Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-widest text-metallic-dark">
            Showing [{collectionProducts.length}] Silhouettes in this Capsule
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </div>
  );
};
