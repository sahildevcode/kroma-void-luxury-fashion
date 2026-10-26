import React from 'react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      q: "HOW ARE GARMENT RUNS LIMITED?",
      a: "Every silhouette in the KROMA // VOID atelier is limited to strictly 100 or 150 individually numbered garments globally. Once an edition is completed, the pattern blocks are archived into our permanent vault and never reissued."
    },
    {
      q: "WHAT TEXTILES AND HARDWARE ARE USED?",
      a: "We develop custom 780 GSM bonded virgin Melton wools in Biella, Japan-milled reflective aerospace nylon, and Mulberry silk charmeuse. All closures and buttons are cast in hypoallergenic surgical stainless steel and plated in lustrous rhodium."
    },
    {
      q: "HOW DOES WHITE-GLOVE COURIER DELIVERY WORK?",
      a: "Orders above $500 receive complimentary insured DHL Express air delivery directly from our Milan and London ateliers. Each shipment is packaged in an impact-resistant black carbon fiber presentation case with velvet dust protection."
    },
    {
      q: "WHAT IS THE ATELIER RETURN AND EXCHANGE PRIVILEGE?",
      a: "Clients have 14 days from reception to initiate a return or request a bespoke size exchange. Items must remain in unworn condition with the unbroken security rand and serial registration card attached."
    },
    {
      q: "HOW DO I ARRANGE A PRIVATE SUITE APPOINTMENT?",
      a: "Appointments for our Milan Flagship (Via Montenapoleone) or London Private Salon (Mayfair) can be coordinated through our Client Concierge desk with 48 hours notice."
    }
  ];

  return (
    <div className="min-h-screen py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 border-b border-white/10 space-y-3">
        <span className="text-[10px] font-mono tracking-widest-xl uppercase text-metallic font-semibold">
          CLIENT ADVISORY
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase text-white tracking-tight">
          ATELIER <span className="text-chrome">QUESTIONS & PROTOCOL</span>
        </h1>
      </div>

      <div className="py-12 space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-obsidian-900 border border-white/10 p-6 space-y-2">
            <h3 className="font-mono text-xs font-bold text-white tracking-wider uppercase">
              0{i + 1} // {f.q}
            </h3>
            <p className="text-xs text-metallic-light leading-relaxed font-sans">
              {f.a}
            </p>
          </div>
        ))}
      </div>

      <div className="p-8 bg-obsidian-950 border border-white/10 text-center space-y-3 font-mono text-xs">
        <p className="text-white">ADDITIONAL INQUIRIES FOR THE DIRECT ATELIER DESK?</p>
        <Link to="/contact" className="inline-block px-6 py-2.5 bg-white text-obsidian uppercase tracking-widest font-bold text-[11px]">
          Contact Concierge
        </Link>
      </div>
    </div>
  );
};
