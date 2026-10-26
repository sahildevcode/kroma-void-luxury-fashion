import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { SizeGuideModal } from '../components/SizeGuideModal';
import { ProductCard } from '../components/ProductCard';
import {
  Ruler,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Heart,
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const product = PRODUCTS.find((p) => p.slug === slug);

  // States
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('composition');

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h1 className="font-display text-2xl uppercase tracking-widest text-white">
          Silhouette Dossier Not Found
        </h1>
        <p className="text-xs text-metallic-dark">
          The requested archive reference does not exist or has been withdrawn from public view.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-white text-obsidian font-mono text-xs uppercase tracking-widest font-bold"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  const activeColor = selectedColor || product.colors[0]?.name || 'Standard';
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size specification.");
      return;
    }
    addToCart(product, selectedSize, activeColor, quantity);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection)
  ).slice(0, 4);

  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb Navigation */}
      <div className="text-[10px] font-mono tracking-widest uppercase text-metallic-dark mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-white transition-colors">Catalog</Link>
        <span>/</span>
        <span className="text-white">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Col: High-Res Editorial Image Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          
          {/* Thumbnails (vertical on desktop) */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-20 h-28 border overflow-hidden shrink-0 transition-all ${
                  selectedImageIndex === idx ? 'border-white scale-95' : 'border-white/15 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.name} preview ${idx}`} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>

          {/* Main Visual Display */}
          <div className="flex-1 aspect-[3/4] overflow-hidden bg-charcoal border border-white/10 relative group">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-top filter brightness-95 contrast-105 transition-all duration-700"
            />
            <div className="absolute top-4 left-4 bg-obsidian-950/80 px-3 py-1 text-[9px] font-mono uppercase tracking-widest border border-white/20 text-white backdrop-blur-sm">
              SERIAL NO: KV-{product.id.toUpperCase()}-MILAN
            </div>
          </div>

        </div>

        {/* Right Col: Product Information & Purchase Flow */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            
            {/* Collection Metadata */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-metallic-dark">
              <span>Collection: {product.collection}</span>
              <span>Crafted in: {product.madeIn}</span>
            </div>

            {/* Title & Price */}
            <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight uppercase mt-2">
              {product.name}
            </h1>

            <div className="mt-4 flex items-baseline space-x-3 font-mono">
              <span className="text-2xl text-white font-semibold">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-metallic-dark line-through">
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-[10px] text-metallic uppercase tracking-wider bg-white/5 px-2 py-0.5 border border-white/10">
                DUTIES INCLUDED
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-xs sm:text-sm text-metallic-light font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Color Swatches */}
            <div className="mt-8 space-y-3">
              <div className="flex justify-between text-xs font-mono uppercase tracking-wider text-metallic">
                <span>Color Palette:</span>
                <span className="text-white font-bold">{activeColor}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`px-4 py-2 text-xs font-mono border transition-all flex items-center space-x-2.5 ${
                      activeColor === c.name
                        ? 'border-white bg-white/10 text-white shadow-lg'
                        : 'border-white/15 text-metallic-dark hover:border-white/40 hover:text-white'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-white/40" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-8 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-metallic">
                <span>Architectural Silhouette Size:</span>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center space-x-1 text-metallic-light hover:text-white underline text-xs"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Matrix</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-3 text-xs font-mono border text-center transition-all ${
                      selectedSize === s
                        ? 'border-white bg-white text-obsidian font-bold shadow-xl'
                        : 'border-white/15 text-luxury-white hover:border-white/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Add To Cart Button */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                
                {/* Stepper */}
                <div className="flex items-center border border-white/20 bg-obsidian-900 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-metallic-dark hover:text-white transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-mono text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="p-3 text-metallic-dark hover:text-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-white text-obsidian font-mono text-xs uppercase tracking-widest-xl font-bold hover:bg-metallic-light transition-all shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>RESERVE ATELIER PIECE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-4 border transition-colors ${
                    wishlisted
                      ? 'border-white bg-white text-obsidian'
                      : 'border-white/20 text-white hover:border-white'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-obsidian' : ''}`} />
                </button>
              </div>

              {/* Status Note */}
              <div className="flex items-center space-x-2 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>IN STOCK AT MILAN ATELIER — DISPATCHES WITHIN 24 HOURS</span>
              </div>
            </div>

            {/* Accordions for Details */}
            <div className="mt-10 border-t border-white/10 divide-y divide-white/10 text-xs font-mono">
              
              {/* Construction Details */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                  className="w-full py-4 flex items-center justify-between text-left text-white uppercase tracking-wider"
                >
                  <span>Architectural Construction & Hardware</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'details' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'details' && (
                  <div className="pb-4 space-y-2 text-metallic-light font-sans text-xs">
                    <ul className="list-disc pl-4 space-y-1.5 font-mono text-[11px] text-metallic">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Material Composition */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'composition' ? null : 'composition')}
                  className="w-full py-4 flex items-center justify-between text-left text-white uppercase tracking-wider"
                >
                  <span>Textile Composition & Provenance</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'composition' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'composition' && (
                  <div className="pb-4 text-metallic-light font-mono text-xs space-y-1">
                    <p><strong className="text-white">Fabrication:</strong> {product.composition}</p>
                    <p><strong className="text-white">Origin:</strong> Milled & Tailored in {product.madeIn}</p>
                    <p className="text-[10px] text-metallic-dark mt-2">Care: Specialist dry cleaning only. Handle rhodium hardware with care.</p>
                  </div>
                )}
              </div>

              {/* Logistics & Delivery */}
              <div>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                  className="w-full py-4 flex items-center justify-between text-left text-white uppercase tracking-wider"
                >
                  <span>White-Glove Courier & Returns</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-4 space-y-2 text-metallic-dark text-[11px] font-mono">
                    <p>• Complimentary insured DHL Express on all orders over $500.</p>
                    <p>• 14-day client returns and complimentary bespoke size exchanges.</p>
                    <p>• Dispatched in rigid magnetic black carbon fiber presentation case with custom hanger.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-[10px] font-mono text-metallic-dark">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-metallic" />
              <span>Laser-inscribed serial authenticity</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-metallic" />
              <span>Lifetime hardware warranty</span>
            </div>
          </div>

        </div>

      </div>

      {/* Related Silhouettes Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
                CURATED COMPLEMENTS
              </span>
              <h2 className="font-display text-2xl uppercase tracking-tight text-white mt-1">
                COMPLETE THE <span className="text-chrome">SILHOUETTE</span>
              </h2>
            </div>
            <Link to="/shop" className="text-xs font-mono uppercase tracking-widest text-metallic hover:text-white">
              All Garments →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

    </div>
  );
};
