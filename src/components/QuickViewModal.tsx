import React, { useState } from 'react';
import { X, Check, ShieldCheck, Ruler } from 'lucide-react';
import { Product } from '../data/types';
import { useStore } from '../context/StoreContext';
import { Link } from 'react-router-dom';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenSizeGuide: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onOpenSizeGuide,
}) => {
  const { addToCart } = useStore();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!product) return null;

  // Set default variants if not set
  const activeColor = selectedColor || product.colors[0]?.name || 'Standard';
  const activeSize = selectedSize || product.sizes[0];

  const handleAdd = () => {
    addToCart(product, activeSize, activeColor);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-4 flex items-center justify-center py-12">
        <div className="relative bg-obsidian-900 border border-white/20 max-w-4xl w-full text-luxury-white shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-metallic hover:text-white bg-obsidian-950/80 rounded-full"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Images Gallery */}
          <div className="p-6 bg-obsidian-950/50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div className="aspect-[3/4] overflow-hidden bg-charcoal border border-white/10">
              <img
                src={product.images[currentImgIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-all duration-300"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImgIndex(i)}
                    className={`w-16 h-20 border overflow-hidden transition-all ${
                      currentImgIndex === i ? 'border-white' : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Specifications & Variant Selection */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-metallic-dark uppercase">
                <span>{product.collection}</span>
                <span>{product.madeIn}</span>
              </div>

              <h3 className="font-display text-xl font-bold tracking-wider text-white mt-1">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center space-x-3 font-mono">
                <span className="text-lg text-white font-semibold">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.compareAtPrice && (
                  <span className="text-xs text-metallic-dark line-through">
                    ₹{product.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="mt-4 text-xs text-metallic-light leading-relaxed line-clamp-3">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-[11px] font-mono uppercase tracking-wider text-metallic">
                  <span>Selected Tone:</span>
                  <span className="text-white font-bold">{activeColor}</span>
                </div>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1.5 text-xs font-mono border transition-all flex items-center space-x-2 ${
                        activeColor === c.name
                          ? 'border-white bg-white/10 text-white'
                          : 'border-white/15 text-metallic-dark hover:border-white/40 hover:text-white'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center text-[11px] font-mono uppercase tracking-wider text-metallic">
                  <span>Silhouette Fit:</span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="flex items-center space-x-1 text-metallic-light hover:text-white underline text-[10px]"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`py-2 text-xs font-mono border text-center transition-all ${
                        activeSize === s
                          ? 'border-white bg-white text-obsidian font-bold'
                          : 'border-white/15 text-luxury-white hover:border-white/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={handleAdd}
                className="w-full py-4 bg-white text-obsidian font-mono text-xs uppercase tracking-widest-xl font-bold hover:bg-metallic-light transition-all flex items-center justify-center space-x-2"
              >
                <span>RESERVE ATELIER PIECE</span>
              </button>

              <div className="flex items-center justify-between text-[10px] font-mono text-metallic-dark">
                <Link
                  to={`/product/${product.slug}`}
                  onClick={onClose}
                  className="underline hover:text-white text-metallic"
                >
                  View Full Editorial Dossier →
                </Link>
                <div className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-metallic" />
                  <span>Limited Allocation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
