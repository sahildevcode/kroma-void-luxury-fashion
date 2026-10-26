import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, ShieldCheck, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, COLLECTIONS, EDITORIAL_LOOKS, BRAND_NAME, BRAND_STORY } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { SizeGuideModal } from '../components/SizeGuideModal';
import { Product } from '../data/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HomePage: React.FC = () => {
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax & entrance animation for Hero using GSAP
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-stagger',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      gsap.to('.hero-bg-img', {
        scale: 1.08,
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  const signatureProducts = PRODUCTS.filter((p) => p.featured);
  const newArrivals = PRODUCTS.filter((p) => p.isNew);

  return (
    <div className="relative">
      
      {/* SECTION 1: CINEMATIC FULL-SCREEN HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10"
      >
        {/* Editorial Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop"
            alt="Atelier Campaign Hero"
            className="hero-bg-img w-full h-full object-cover object-center filter brightness-45 contrast-125 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-900/40 to-obsidian-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-obsidian-950/50 to-obsidian-950" />
        </div>

        {/* Foreground Content */}
        <div
          ref={heroTextRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center justify-center"
        >
          {/* Metadata pill */}
          <div className="hero-stagger mb-6 inline-flex items-center space-x-3 px-4 py-1.5 border border-white/20 bg-obsidian-900/70 backdrop-blur-md text-[10px] font-mono tracking-widest-xl uppercase text-metallic">
            <span className="w-1.5 h-1.5 rounded-full bg-metallic-light animate-ping" />
            <span>COLLECTION 01 // HIGH AUTUMN ARCHITECTURE</span>
            <span className="text-white/20">|</span>
            <span className="text-white">LIMITED TO 100 NUMBERED GARMENTS</span>
          </div>

          {/* Monumental Fashion Headline */}
          <h1 className="hero-stagger font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white uppercase max-w-5xl">
            BUILT TO BE <br />
            <span className="text-chrome">UNFORGETTABLE.</span>
          </h1>

          <p className="hero-stagger mt-6 max-w-2xl text-xs sm:text-sm md:text-base font-sans text-metallic-light tracking-wide leading-relaxed font-light">
            Engineered silhouettes at the frontier of Parisian haute couture and brutalist cybernetics. Bonded Melton wool, cold-treated reflective nylon, and hand-cast rhodium hardware.
          </p>

          {/* Action CTAs */}
          <div className="hero-stagger mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/shop"
              className="w-full sm:w-auto px-10 py-4 bg-white text-obsidian text-xs font-mono font-bold tracking-widest-xl uppercase hover:bg-metallic-light transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 group"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/collections/obsidian-genesis"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-xs font-mono tracking-widest-xl uppercase hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
            >
              GENESIS LOOKBOOK
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="hero-stagger absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-70">
            <span className="text-[9px] font-mono tracking-widest-xl uppercase text-metallic">
              SCROLL DOWN
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-metallic to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* SECTION 2: MOVING BRAND MARQUEE */}
      <section className="bg-obsidian-950 py-4 border-b border-white/10 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee text-xs font-mono tracking-widest-xl uppercase text-metallic-dark">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-10 mx-6">
              <span className="text-white font-bold">DESIGNED WITH INTENT</span>
              <span className="text-white/20">///</span>
              <span>MADE TO STAND APART</span>
              <span className="text-white/20">///</span>
              <span className="text-white">BONDED VIRGIN MELTON WOOL</span>
              <span className="text-white/20">///</span>
              <span>RHODIUM & SURGICAL HARDWARE</span>
              <span className="text-white/20">///</span>
              <span className="text-metallic-light">MILAN • LONDON • TOKYO</span>
              <span className="text-white/20">///</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: EDITORIAL CAMPAIGN SPLIT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
              01 // THE MANIFESTO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight uppercase text-white leading-tight">
              ARCHITECTURAL <br />
              <span className="text-chrome">DEFiance.</span>
            </h2>
            <p className="text-xs sm:text-sm text-metallic-light leading-relaxed">
              We reject fleeting trends in favor of monumental garments that redefine posture and silhouette. Each coat, blazer, and trouser begins not as a sketch, but as an architectural volume engineered to protect and command.
            </p>
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="text-white font-bold block text-lg">780 GSM</span>
                <span className="text-metallic-dark text-[10px] uppercase">Bonded Wool Density</span>
              </div>
              <div>
                <span className="text-white font-bold block text-lg">100% RHODIUM</span>
                <span className="text-metallic-dark text-[10px] uppercase">Cast Hardware Rand</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white border-b border-white pb-1 hover:text-metallic hover:border-metallic transition-all"
              >
                <span>Read Full Atelier Manifesto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Editorial Campaign Look 01"
                className="w-full h-full object-cover object-top filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-obsidian-950/80 px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase border border-white/10 text-white">
                CAMPAIGN SHOT // MILAN
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal border border-white/10 group sm:translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
                alt="Editorial Campaign Look 02"
                className="w-full h-full object-cover object-top filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-obsidian-950/80 px-2.5 py-1 text-[9px] font-mono tracking-widest uppercase border border-white/10 text-white">
                MONOLITH TRENCH // PROFILE
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: SIGNATURE PRODUCTS SHOWCASE */}
      <section className="py-20 bg-obsidian-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
                02 // ATELIER SELECTION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight uppercase text-white mt-1">
                SIGNATURE <span className="text-chrome">SILHOUETTES</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-metallic hover:text-white transition-colors"
            >
              <span>View All 8 Garments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setSelectedQuickViewProduct(p)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: FULL-WIDTH BRAND VIDEO/IMAGE EDITORIAL BANNER */}
      <section className="relative h-[65vh] sm:h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2000&auto=format&fit=crop"
          alt="Campaign Monolith"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-transparent to-obsidian-950" />
        
        <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
          <span className="inline-block px-4 py-1 border border-white/20 bg-obsidian-900/60 text-[10px] font-mono tracking-widest-2xl text-metallic uppercase backdrop-blur-md">
            CAPSULE 02 // CHROMA EDITION
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl uppercase text-white tracking-tight leading-none">
            LIGHT IS SHAPED <br />
            <span className="text-chrome">BY WHAT ABSORBS IT.</span>
          </h2>
          <p className="text-xs sm:text-sm text-metallic-light max-w-xl mx-auto font-sans leading-relaxed">
            Explorations in light-absorbing carbon weaves paired against liquid silver aerospace membranes.
          </p>
          <div>
            <Link
              to="/collections/liquid-monolith"
              className="inline-flex items-center space-x-3 px-8 py-3.5 bg-white text-obsidian text-xs font-mono font-bold tracking-widest-xl uppercase hover:bg-metallic-light transition-all"
            >
              <span>INSPECT THE CAPSULE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: EDITORIAL LOOKBOOK SLIDES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 pb-6 border-b border-white/10">
          <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
            03 // EDITORIAL CAMPAIGN
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight uppercase text-white mt-1">
            SEASONAL <span className="text-chrome">LOOKBOOK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_LOOKS.map((look, i) => (
            <div key={i} className="group bg-obsidian-900 border border-white/10 overflow-hidden flex flex-col justify-between">
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-obsidian-950/80 px-2 py-1 text-[9px] font-mono tracking-widest uppercase border border-white/15 text-white">
                  {look.lookNumber}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-chrome transition-colors">
                    {look.title}
                  </h3>
                  <p className="mt-2 text-xs text-metallic-light leading-relaxed">
                    {look.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-metallic-dark block">
                    Featured Elements:
                  </span>
                  {look.pieces.map((piece, pIdx) => (
                    <div key={pIdx} className="text-xs font-mono text-white flex items-center space-x-1.5">
                      <span className="w-1 h-1 bg-metallic rounded-full" />
                      <span>{piece}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: NEW ARRIVALS CAROUSEL / GRID */}
      <section className="py-20 bg-obsidian-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
                04 // FRESHLY ARRIVED
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight uppercase text-white mt-1">
                LATEST <span className="text-chrome">ACQUISITIONS</span>
              </h2>
            </div>
            <Link
              to="/shop?filter=new"
              className="text-xs font-mono uppercase tracking-widest text-metallic hover:text-white transition-colors"
            >
              Browse All Releases →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.slice(0, 4).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={(prod) => setSelectedQuickViewProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: NEWSLETTER VIP ATELIER INVITATION */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <div className="luxury-glass p-8 sm:p-14 border border-white/20 relative overflow-hidden">
          <div className="relative z-10 space-y-5">
            <span className="text-[10px] font-mono tracking-widest-2xl uppercase text-metallic">
              PRIVATE REGISTER
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
              BECOME AN <span className="text-chrome">ATELIER MEMBER</span>
            </h2>
            <p className="text-xs sm:text-sm text-metallic-light max-w-lg mx-auto leading-relaxed">
              Receive confidential lookbook previews, private access to limited numbered drops, and invitation-only atelier salon showings.
            </p>

            {newsletterSubmitted ? (
              <div className="p-4 bg-white/10 border border-white/20 text-white font-mono text-xs tracking-wider uppercase">
                ✓ Confidential registration accepted. Welcome to the KROMA // VOID dossier.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="ENTER CLIENT EMAIL"
                  className="flex-1 bg-obsidian-950 border border-white/20 px-4 py-3 text-xs font-mono tracking-widest uppercase placeholder:text-metallic-dark text-white focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-obsidian text-xs font-mono font-bold tracking-widest uppercase hover:bg-metallic-light transition-all"
                >
                  REQUEST ACCESS
                </button>
              </form>
            )}

            <p className="text-[10px] font-mono text-metallic-dark">
              NO REPETITIVE PROMOTIONS. STRICT PRIVACY PROTOCOL ENFORCED.
            </p>
          </div>
        </div>
      </section>

      {/* Modals */}
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
