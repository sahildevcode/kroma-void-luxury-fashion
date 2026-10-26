import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, discountPercent, appliedPromo, clearCart } = useStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    postalCode: '',
    paymentMethod: 'card',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');

  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const shipping = subtotal > 50000 || subtotal === 0 ? 0 : 2500;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);

  if (cart.length === 0 && !orderConfirmed) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
        <h2 className="font-display text-2xl uppercase tracking-widest text-white">
          No Selections in Checkout
        </h2>
        <p className="text-xs text-metallic-dark">
          Please add silhouettes to your curated bag before initiating acquisition protocols.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-white text-obsidian font-mono text-xs uppercase tracking-widest font-bold"
        >
          Explore Catalog
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `KV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderConfirmed(true);
    clearCart();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#BFC3C9', '#85888E'],
      });
    } catch {
      // Confetti fallback
    }
  };

  if (orderConfirmed) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-xl w-full luxury-glass p-8 sm:p-12 border border-white/20 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full border border-emerald-400/40 bg-emerald-950/40 mx-auto flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest-xl uppercase text-emerald-400">
              ACQUISITION CONFIRMED & ALLOCATED
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl uppercase text-white">
              Thank You, {formData.firstName}
            </h1>
            <p className="text-xs text-metallic-light font-mono">
              ORDER REGISTRATION: <strong className="text-white">{orderId}</strong>
            </p>
          </div>

          <div className="bg-obsidian-950 p-6 border border-white/10 text-left font-mono text-xs space-y-2 text-metallic-dark">
            <div className="flex justify-between text-white border-b border-white/10 pb-2">
              <span>Delivery Protocol</span>
              <span>White-Glove Insured Courier</span>
            </div>
            <p>Confirmation and tracking dispatch transmitted to: <strong className="text-white">{formData.email}</strong></p>
            <p>Destination: {formData.address}, {formData.city}, {formData.country}</p>
          </div>

          <div className="pt-4">
            <Link
              to="/shop"
              className="w-full inline-block py-4 bg-white text-obsidian font-mono text-xs uppercase tracking-widest-xl font-bold hover:bg-metallic-light transition-all"
            >
              RETURN TO FLAGSHIP
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title */}
      <div className="mb-12 border-b border-white/10 pb-6">
        <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
          ACQUISITION PROTOCOL
        </span>
        <h1 className="font-display font-black text-3xl uppercase text-white mt-1">
          SECURE <span className="text-chrome">CHECKOUT</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Shipping & Details */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Client Identity */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-white/10 pb-2">
              01 // Client Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">First Name</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">Email Dossier</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">Telephone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Destination */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-white/10 pb-2">
              02 // Delivery Destination
            </h3>
            <div>
              <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">Street Address</label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">Postal Code</label>
                <input
                  type="text"
                  required
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white font-mono"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-obsidian-900 border border-white/15 px-3.5 py-2.5 text-xs text-white focus:outline-none font-mono"
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-white/10 pb-2 flex items-center justify-between">
              <span>03 // Payment Protocol</span>
              <span className="text-metallic-dark flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>256-Bit Encrypted</span>
              </span>
            </h3>

            <div className="p-4 bg-obsidian-900 border border-white/15 space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  defaultChecked
                  className="text-white"
                />
                <label htmlFor="card" className="text-white font-bold">
                  CREDIT / DEBIT CARD (STRIPE / ATELIER GATEWAY)
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <input
                  type="text"
                  required
                  placeholder="CARD NUMBER"
                  maxLength={19}
                  defaultValue="4000 1234 5678 9010"
                  className="col-span-2 bg-obsidian-950 border border-white/15 p-2.5 text-xs text-white font-mono"
                />
                <input
                  type="text"
                  required
                  placeholder="MM / YY"
                  defaultValue="12/28"
                  className="bg-obsidian-950 border border-white/15 p-2.5 text-xs text-white font-mono"
                />
                <input
                  type="text"
                  required
                  placeholder="CVC"
                  maxLength={4}
                  defaultValue="888"
                  className="bg-obsidian-950 border border-white/15 p-2.5 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-obsidian-900 border border-white/15 p-6 sm:p-8 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white border-b border-white/10 pb-3">
              Order Summary ({cart.length})
            </h3>

            {/* Items scroll */}
            <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex space-x-4 border-b border-white/5 pb-3">
                  <img src={item.image} alt={item.name} className="w-14 h-18 object-cover bg-charcoal" />
                  <div className="flex-1 font-mono text-xs space-y-1">
                    <p className="text-white font-display text-[11px] line-clamp-1">{item.name}</p>
                    <p className="text-metallic-dark text-[10px]">Qty: {item.quantity} • Size: {item.size}</p>
                    <p className="text-white">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono text-metallic">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Privilege ({appliedPromo})</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Courier Logistics</span>
                <span className="text-white">{shipping === 0 ? 'COMPLIMENTARY' : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10 text-sm font-bold text-white">
                <span>Total Acquisition</span>
                <span className="text-chrome font-mono">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-obsidian font-mono text-xs uppercase tracking-widest-xl font-bold hover:bg-metallic-light transition-all flex items-center justify-center space-x-2 shadow-2xl"
            >
              <span>AUTHORIZE ACQUISITION</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-metallic-dark">
              <ShieldCheck className="w-3.5 h-3.5 text-metallic" />
              <span>CONFIDENTIAL TRANSACTIONS • INSURED FREIGHT</span>
            </div>
          </div>
        </div>

      </form>

    </div>
  );
};
