import React from 'react';
import { BRAND_STORY, BRAND_NAME } from '../data/products';
import { Shield, Sparkles, Gem, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Banner */}
      <div className="relative min-h-[60vh] flex items-center justify-center border-b border-white/10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop"
          alt="Atelier Campaign"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-[10px] font-mono tracking-widest-2xl uppercase text-metallic">
            THE ATELIER MANIFESTO
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase">
            OBSIDIAN <span className="text-chrome">CHROMIUM</span>
          </h1>
          <p className="text-xs sm:text-sm text-metallic-light max-w-xl mx-auto font-light leading-relaxed">
            Where Japanese technical membrane engineering converges with the brutalist silhouette tradition of Milan and Paris.
          </p>
        </div>
      </div>

      {/* Manifesto Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 space-y-16">
        
        <div className="space-y-6">
          <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
            01 // CORE PHILOSOPHY
          </span>
          <p className="font-display text-xl sm:text-2xl text-white leading-relaxed font-light">
            "{BRAND_STORY.manifesto}"
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          {BRAND_STORY.pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-3 bg-obsidian-900 border border-white/10 p-6">
              <span className="text-[10px] font-mono text-metallic font-bold">
                0{idx + 1} // CRITERION
              </span>
              <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-xs text-metallic-dark leading-relaxed font-sans">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Alternating Visual Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-12 border-t border-white/10">
          <div className="aspect-[4/5] overflow-hidden border border-white/15 bg-charcoal">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
              alt="Artisan Tailoring"
              className="w-full h-full object-cover object-top filter brightness-90 contrast-110"
            />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic">
              MATERIAL EXCELLENCE
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
              PERMANENCE <br />
              <span className="text-chrome">OVER OBSOLESCENCE.</span>
            </h2>
            <p className="text-xs text-metallic-light leading-relaxed">
              Fast fashion depends on fragility; we build for permanence. Our 780 GSM bonded virgin wools and titanium-reinforced welted footwear are developed to outlast cycles and emerge as permanent artifacts in personal collections.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white border-b border-white pb-1 hover:text-metallic hover:border-metallic transition-all"
              >
                <span>Inspect The Silhouettes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
