import React from 'react';

export const LegalPages: React.FC<{ type: 'shipping' | 'returns' | 'privacy' | 'terms' | 'size-guide' }> = ({ type }) => {
  const titles = {
    shipping: 'WHITE-GLOVE COURIER & LOGISTICS POLICY',
    returns: '14-DAY ATELIER RETURNS & SIZE EXCHANGE POLICY',
    privacy: 'PRIVACY & CLIENT CONFIDENTIALITY PROTOCOL',
    terms: 'TERMS OF ATELIER ACQUISITION & GARMENT PROVENANCE',
    'size-guide': 'ARCHITECTURAL SIZE MATRIX & METRIC SPECIFICATIONS'
  };

  return (
    <div className="min-h-screen py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <div className="py-8 border-b border-white/10 space-y-3">
        <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
          MAISON POLICY
        </span>
        <h1 className="font-display font-black text-2xl sm:text-4xl uppercase text-white tracking-tight">
          {titles[type]}
        </h1>
        <p className="text-[11px] font-mono text-metallic-dark uppercase">
          REVISED FOR CURRENT COLLECTION SEASON • MILAN & LONDON JURISDICTIONS
        </p>
      </div>

      <div className="py-12 space-y-8 text-xs sm:text-sm text-metallic-light leading-relaxed font-light">
        {type === 'shipping' && (
          <>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">01. Direct Dispatch</h3>
              <p>All garments are dispatched directly from our primary ateliers in Milan and London. Orders confirmed prior to 14:00 CET are inspected, numbered, and transferred to our dedicated DHL Express courier partner on the subsequent business morning.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">02. Packaging & Presentation</h3>
              <p>Each silhouette is encased in our proprietary rigid carbon fiber travel vault, accompanied by a custom sculpted beechwood and chrome garment hanger, heavy velvet dust bag, and stamped certificate of provenance.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">03. Customs & Import Duties</h3>
              <p>All international orders include pre-cleared customs duties and local taxes (DDP - Delivered Duty Paid). No supplemental disbursement will be requested upon arrival.</p>
            </section>
          </>
        )}

        {type === 'returns' && (
          <>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">01. 14-Day Examination Period</h3>
              <p>Clients are granted 14 days from recorded delivery to inspect garments. To preserve archival condition, pieces must not be worn, tailored, or stripped of their laser-serialized security rands.</p>
            </section>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">02. Bespoke Size Exchange</h3>
              <p>If an alternative silhouette proportion is preferred, our client concierge will allocate a replacement unit from reserved atelier stock and dispatch prepaid return courier labels.</p>
            </section>
          </>
        )}

        {type === 'privacy' && (
          <>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">01. Confidential Client Data</h3>
              <p>KROMA // VOID upholds strict discretion. Client names, billing details, and acquisition registries are encrypted under AES-256 protocols and will never be monetized, shared, or distributed to advertising networks.</p>
            </section>
          </>
        )}

        {type === 'terms' && (
          <>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">01. Capped Allocations</h3>
              <p>Editions are strictly limited. Placement in the digital bag does not guarantee ownership until payment authorization is confirmed by the atelier payment terminal.</p>
            </section>
          </>
        )}

        {type === 'size-guide' && (
          <>
            <section className="space-y-2">
              <h3 className="font-mono text-xs uppercase font-bold text-white tracking-wider">01. Proportional Fit Philosophy</h3>
              <p>Outerwear pieces feature a dramatic architectural cut with drop shoulders and structured armscyes designed to accommodate layered knitwear. We advise acquiring your customary European size for intended editorial drape.</p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
