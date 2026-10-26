import React, { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Check } from 'lucide-react';
import { BRAND_NAME } from '../data/products';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Bespoke Order Advisory',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="py-8 border-b border-white/10 space-y-3">
        <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
          DIRECT MAISON CONCIERGE
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
          PRIVATE CLIENT <span className="text-chrome">CONSULTATION</span>
        </h1>
        <p className="text-xs sm:text-sm text-metallic-light max-w-2xl font-light">
          For private atelier appointments, custom dimensional tailoring requests, and global white-glove logistics inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
        
        {/* Left: Contact Details */}
        <div className="lg:col-span-5 space-y-8 font-mono text-xs">
          
          <div className="bg-obsidian-900 border border-white/10 p-6 space-y-4">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm border-b border-white/10 pb-2">
              Atelier Flagship Suites
            </h3>

            <div className="space-y-4 text-metallic-dark">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-metallic shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">MILANO ATELIER</strong>
                  <span>Via Montenapoleone 8, 20121 Milano, Italy</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-metallic shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">LONDON PRIVATE SUITE</strong>
                  <span>34 Mayfair W1K 2PB, London, United Kingdom</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-metallic shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">DIRECT TRANSMISSION</strong>
                  <span>concierge@kromavoid.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-metallic shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">CONCIERGE DESK</strong>
                  <span>+39 02 8900 1204</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-obsidian-950 border border-white/10 space-y-2 text-metallic-dark text-[11px]">
            <span className="text-white font-bold block uppercase tracking-wider">
              Appointments Protocol:
            </span>
            <p>Private suite viewings require 48 hours advance booking. Dedicated security escort and chauffeured transit arranged upon confirmation.</p>
          </div>

        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <div className="luxury-glass p-8 sm:p-10 border border-white/15">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full border border-emerald-400/40 bg-emerald-950/40 mx-auto flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-widest text-white">
                  Transmission Received
                </h3>
                <p className="text-xs text-metallic-dark max-w-sm mx-auto font-mono">
                  Our private client concierge will respond to <strong className="text-white">{formData.email}</strong> within 12 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">
                    Client Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/20 px-4 py-3 text-xs text-white font-mono focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/20 px-4 py-3 text-xs text-white font-mono focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/20 px-4 py-3 text-xs text-white font-mono focus:outline-none"
                  >
                    <option value="Bespoke Order Advisory">Bespoke Order Advisory</option>
                    <option value="Private Suite Appointment">Private Suite Appointment (Milan/London)</option>
                    <option value="Archival Sizing Verification">Archival Sizing Verification</option>
                    <option value="White-Glove Delivery Support">White-Glove Delivery Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-metallic-dark mb-1">
                    Transmission Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="PROVIDE SPECIFICATIONS OR INQUIRY DETAILS..."
                    className="w-full bg-obsidian-950 border border-white/20 p-4 text-xs text-white font-mono placeholder:text-metallic-dark focus:outline-none focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-white text-obsidian font-mono text-xs uppercase tracking-widest-xl font-bold hover:bg-metallic-light transition-all"
                >
                  DISPATCH CONFIDENTIAL INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
