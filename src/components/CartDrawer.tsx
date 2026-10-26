import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    appliedPromo,
    discountPercent,
    applyPromoCode,
    removePromoCode
  } = useStore();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const shipping = subtotal > 50000 || subtotal === 0 ? 0 : 2500;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) setPromoInput('');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-obsidian-900 border-l border-white/10 shadow-2xl flex flex-col justify-between text-luxury-white animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-display tracking-widest-xl uppercase text-white">
                Curated Bag
              </h2>
              <span className="text-[10px] font-mono text-metallic-dark uppercase">
                {cart.length} {cart.length === 1 ? 'Selection' : 'Selections'} Reserved
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-metallic hover:text-white transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-metallic-dark">
                  <RefreshCw className="w-6 h-6 animate-spin-slow" />
                </div>
                <h3 className="font-display tracking-widest text-sm uppercase text-white">
                  Your Bag Is Empty
                </h3>
                <p className="text-xs text-metallic-dark max-w-xs leading-relaxed">
                  Explore our fall/winter architectural silhouettes and reserve numbered atelier garments.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/shop');
                  }}
                  className="mt-4 px-6 py-3 bg-white text-obsidian text-xs font-mono uppercase tracking-widest hover:bg-metallic-light transition-all"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex space-x-4 border-b border-white/5 pb-5 group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-top border border-white/10 bg-charcoal"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs font-display tracking-wider text-white hover:text-metallic transition-colors line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-metallic-dark hover:text-red-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-1 flex items-center space-x-3 text-[10px] font-mono text-metallic-dark uppercase">
                        <span>Size: <strong className="text-white">{item.size}</strong></span>
                        <span>•</span>
                        <span>Tone: <strong className="text-white">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/15 bg-obsidian-800">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1 px-2 text-metallic-dark hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 px-2 text-metallic-dark hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-xs text-white">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Calculations */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-obsidian-950/80 space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <div className="flex">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="VIP PRIVILEGE CODE (E.G. OBSIDIAN10)"
                    className="flex-1 bg-obsidian-800 border border-white/15 px-3 py-2 text-[10px] font-mono tracking-wider uppercase placeholder:text-metallic-dark focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="bg-white/10 hover:bg-white text-white hover:text-obsidian px-4 text-[10px] font-mono tracking-widest uppercase transition-all"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[10px] font-mono ${promoMessage.isError ? 'text-red-400' : 'text-emerald-400'}`}>
                    {promoMessage.text}
                  </p>
                )}
                {appliedPromo && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-1 border border-emerald-500/20">
                    <span>PRIVILEGE APPLIED: {appliedPromo} ({discountPercent}%)</span>
                    <button onClick={removePromoCode} className="text-xs text-white/60 hover:text-white">✕</button>
                  </div>
                )}
              </form>

              {/* Subtotal breakdown */}
              <div className="space-y-1.5 text-xs font-mono text-metallic">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Atelier VIP Privilege</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>White-Glove Courier</span>
                  <span className="text-white">
                    {shipping === 0 ? 'COMPLIMENTARY' : `₹${shipping.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-semibold text-white">
                  <span>Estimated Total</span>
                  <span className="text-chrome font-mono">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Secure Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-4 bg-white text-obsidian font-mono text-xs uppercase tracking-widest-xl font-bold flex items-center justify-center space-x-2 hover:bg-metallic-light transition-all duration-300 group shadow-lg"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-metallic-dark pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-metallic" />
                <span>256-BIT ENCRYPTED ATELIER TRANSACTIONS • CARBON SECURE</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
