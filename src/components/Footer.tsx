import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Globe, Award, Sparkles } from 'lucide-react';
import { BRAND_NAME } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 text-luxury-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Core Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-white/10 text-xs font-mono">
          <div className="flex items-start space-x-3.5">
            <Globe className="w-5 h-5 text-metallic shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">Direct Atelier Courier</h4>
              <p className="text-metallic-dark text-[10px] mt-1 leading-relaxed">
                Insured express delivery from Milan & London with dedicated tracking and bespoke carbon casing.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Shield className="w-5 h-5 text-metallic shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">Laser-Etched Provenance</h4>
              <p className="text-metallic-dark text-[10px] mt-1 leading-relaxed">
                Every release bears a unique serial inscription confirming genuine craftsmanship and limited allocation.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Sparkles className="w-5 h-5 text-metallic shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">Surgical Hardware</h4>
              <p className="text-metallic-dark text-[10px] mt-1 leading-relaxed">
                Hand-cast hypoallergenic rhodium and CNC surgical stainless fasteners guaranteed for lifetime wear.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <Award className="w-5 h-5 text-metallic shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[11px]">Atelier White-Glove</h4>
              <p className="text-metallic-dark text-[10px] mt-1 leading-relaxed">
                14-day return privilege with tailored size exchanges and dedicated concierge consultation.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-column Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 py-16">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <span className="font-display font-extrabold text-2xl tracking-[0.25em] text-white">
              {BRAND_NAME}
            </span>
            <p className="text-xs text-metallic-dark leading-relaxed max-w-sm font-sans">
              An architectural fashion house operating at the junction of high-performance tailoring, futuristic brutalism, and Japanese technical fabrication.
            </p>
            <div className="pt-2 font-mono text-[10px] text-metallic space-y-1">
              <p>FLAGSHIP ATELIER: VIA MONTENAPOLEONE 8, MILAN</p>
              <p>LONDON SUITE: MAYFAIR W1K 2PB</p>
              <p>DIRECT DESK: CONCIERGE@KROMAVOID.COM</p>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-4 text-xs font-mono">
            <h5 className="text-[11px] font-bold tracking-widest-xl uppercase text-white">
              Collections
            </h5>
            <ul className="space-y-2.5 text-metallic-dark">
              <li>
                <Link to="/collections/obsidian-genesis" className="hover:text-white transition-colors">
                  Obsidian Genesis 01
                </Link>
              </li>
              <li>
                <Link to="/collections/cyber-tailoring" className="hover:text-white transition-colors">
                  Chromatic Architecture
                </Link>
              </li>
              <li>
                <Link to="/collections/liquid-monolith" className="hover:text-white transition-colors">
                  Liquid Monolith
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=outerwear" className="hover:text-white transition-colors">
                  Heavy Outerwear
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=footwear" className="hover:text-white transition-colors">
                  Derbies & Footwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Maison & Policies */}
          <div className="space-y-4 text-xs font-mono">
            <h5 className="text-[11px] font-bold tracking-widest-xl uppercase text-white">
              Maison
            </h5>
            <ul className="space-y-2.5 text-metallic-dark">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Philosophy & Craft
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-white transition-colors">
                  Architectural Size Matrix
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Client Concierge
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Atelier FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:text-white transition-colors">
                  Shipping & Courier
                </Link>
              </li>
              <li>
                <Link to="/returns-policy" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 text-xs font-mono">
            <h5 className="text-[11px] font-bold tracking-widest-xl uppercase text-white">
              Privileges & Legal
            </h5>
            <ul className="space-y-2.5 text-metallic-dark">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Acquisition
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition-colors">
                  Private Wishlist
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-metallic-dark space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {BRAND_NAME} ATELIER CORP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <span>CARBON OFFSET VERIFIED</span>
            <span>SECURE HOSTED CHECKOUT</span>
            <span>MILANO • TOKYO</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
