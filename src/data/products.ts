import { Product, CollectionMeta } from './types';

export const BRAND_NAME = "KROMA // VOID";

export const COLLECTIONS: CollectionMeta[] = [
  {
    id: 'col-obsidian-genesis',
    slug: 'obsidian-genesis',
    title: 'OBSIDIAN GENESIS 01',
    subtitle: 'FALL / WINTER FLAGSHIP',
    tagline: 'SCULPTED SILHOUETTES IN CHROMIUM & OBSIDIAN WOOL',
    editorialImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop',
    description: 'An architectural dialogue between raw utilitarian form and bespoke Parisian tailoring. Crafted with waterproof carbon membrane and liquid silver hardware.'
  },
  {
    id: 'col-cyber-tailoring',
    slug: 'cyber-tailoring',
    title: 'CHROMATIC ARCHITECTURE',
    subtitle: 'BESPOKE CAPSULE',
    tagline: 'SHARP GEOMETRY FOR THE MODERN METROPOLIS',
    editorialImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    description: 'Exaggerated shoulders, hand-cast rhodium closures, and bonded Japanese worsted wool engineered for monumental presence.'
  },
  {
    id: 'col-liquid-monolith',
    slug: 'liquid-monolith',
    title: 'LIQUID MONOLITH',
    subtitle: 'LIMITED EDITION RUN',
    tagline: 'FLUID DRAPERY AND HIGH-GLOSS SHEEN',
    editorialImage: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop',
    description: 'Ultra-dense cupro and silk blends with cold-treated reflective finishes. Limited to numbered atelier runs.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'kv-01',
    slug: 'monolith-trench-coat',
    name: 'MONOLITH HEAVY WOOL TRENCH',
    collection: 'obsidian-genesis',
    category: 'outerwear',
    price: 145000,
    compareAtPrice: 175000,
    description: 'Double-breasted architectural trench sculpted from 780gsm bonded virgin Melton wool. Accented with brushed surgical titanium buttons and our signature detachable magnetized throat latch.',
    details: [
      'Sculptural drop-shoulder silhouette with structured canvas interlining',
      'Custom hand-cast surgical steel closures with laser etched serial notation',
      'Windproof technical micro-membrane lining woven in Biella, Italy',
      'Interior harness system for hands-free shoulder carry',
      'Deep dual storm flap construction with magnetic edge seals'
    ],
    composition: '100% Virgin Melton Wool (Outer), 100% Cupro Bemberg (Lining)',
    madeIn: 'Milan, Italy',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#08090B', imageIndex: 0 },
      { name: 'Cast Steel', hex: '#2B2D33', imageIndex: 1 }
    ],
    sizes: ['46 (S)', '48 (M)', '50 (L)', '52 (XL)'],
    isNew: true,
    isBestSeller: true,
    inStock: true,
    featured: true
  },
  {
    id: 'kv-02',
    slug: 'chroma-asymmetric-blazer',
    name: 'CHROMA ASYMMETRIC TAILORED BLAZER',
    collection: 'cyber-tailoring',
    category: 'tailoring',
    price: 115000,
    description: 'An avant-garde masterwork in sharp geometric tailoring. Features a sharp peak lapel that transitions diagonally across the chest into a concealed magnetic fastening.',
    details: [
      'Precision razor-edge lapel with hidden chrome hardware clasp',
      'High-twist British fresco wool with anti-crease memory weave',
      'Raccagni polished gunmetal internal pocket zips',
      'Unstructured floating chest piece with horsehair reinforcement',
      'Asymmetric dual-vent rear paneling'
    ],
    composition: '100% Super 150s Worsted Wool, Mother-of-Pearl interior buttons',
    madeIn: 'London, United Kingdom',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pure Obsidian', hex: '#0A0A0C' },
      { name: 'Graphite Shadow', hex: '#1C1D22' }
    ],
    sizes: ['46 (S)', '48 (M)', '50 (L)', '52 (XL)'],
    isNew: true,
    isBestSeller: false,
    inStock: true,
    featured: true
  },
  {
    id: 'kv-03',
    slug: 'liquid-silver-silk-bomber',
    name: 'LIQUID SILVER REVERSIBLE BOMBER',
    collection: 'liquid-monolith',
    category: 'outerwear',
    price: 98000,
    compareAtPrice: 120000,
    description: 'Engineered from Japanese reflective aerospace nylon reversing to heavy sand-washed silk charmeuse. Catches light with an ethereal liquid mercury radiance.',
    details: [
      'Dual-faced fully reversible design with dual-tone heavy rib knit collar and hem',
      'Cold-treated reflective exterior fabric repellent to water and oil',
      'Reverse body in 32mm ultra-heavy matte silk charmeuse',
      'Oversized RiRi M8 two-way silver zipper with chrome pull tag',
      'Concealed internal zip compartments for device storage'
    ],
    composition: '100% Technical Polyamide (Side A) / 100% Mulberry Silk (Side B)',
    madeIn: 'Okayama, Japan',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Liquid Chromium', hex: '#C4C8D0' },
      { name: 'Void Black', hex: '#08090B' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    isBestSeller: true,
    inStock: true,
    featured: true
  },
  {
    id: 'kv-04',
    slug: 'sculptural-wide-trouser',
    name: 'ARCHITECTURAL PLEATED WIDE TROUSER',
    collection: 'cyber-tailoring',
    category: 'tailoring',
    price: 52000,
    description: 'Exaggerated silhouette trousers cut with deep double reverse pleats that fall into a generous, fluid wide-leg hem with adjustable chrome cinch tabs at the cuffs.',
    details: [
      'Deep double inverted pleats for dynamic movement while in motion',
      'Side waist adjusters featuring custom CNC milled solid aluminum buckles',
      'Extended waistband with concealed hook-and-bar closure',
      'Cuff hem internal snaps allowing transition from wide leg to tapered silhouette',
      'Slanted welt pockets with reinforced bar tacking'
    ],
    composition: '84% Wool, 14% Mohair, 2% Elastane',
    madeIn: 'Porto, Portugal',
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Deep Obsidian', hex: '#0B0C0E' },
      { name: 'Ash Grey', hex: '#4B4D54' }
    ],
    sizes: ['28', '30', '32', '34', '36'],
    isNew: false,
    isBestSeller: true,
    inStock: true,
    featured: true
  },
  {
    id: 'kv-05',
    slug: 'heavyweight-void-hoodie',
    name: 'HEAVYWEIGHT 700GSM VOID HOODIE',
    collection: 'obsidian-genesis',
    category: 'streetwear',
    price: 38000,
    description: 'Constructed from custom-developed 700 GSM loopback French terry. Featuring a double-layered structured hood with zero drawstrings for pure minimalist geometry.',
    details: [
      'Overbuilt 700 GSM combed organic cotton with garment-dyed cold wash',
      'Geometric darting across the shoulder seams for ergonomic drop',
      'High-density tonal silicone micro-emboss on nape of the neck',
      'Blind-stitched hems with hidden kangaroo pocket welt entries',
      'Preshrunk with carbon-finish softening treatment'
    ],
    composition: '100% GOTS Certified Organic Combed Cotton',
    madeIn: 'Barcelos, Portugal',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Pitch Obsidian', hex: '#08090B' },
      { name: 'Smoked Titanium', hex: '#3E4148' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    isBestSeller: true,
    inStock: true,
    featured: true
  },
  {
    id: 'kv-06',
    slug: 'raw-edge-merino-knit',
    name: 'DECONSTRUCTED MERINO CREW KNIT',
    collection: 'liquid-monolith',
    category: 'streetwear',
    price: 42000,
    compareAtPrice: 48000,
    description: 'Spun from extra-fine 19.5-micron Australian merino wool. Distinct subtle laddering and exposed exterior seams provide an intentional wabi-sabi brutalist aesthetic.',
    details: [
      'Intarsia knit technique with multi-gauge tension zones',
      'Exposed overlocked outer seams in silver bonded thread',
      'Extended sleeves with thumb opening integrated into the cuff',
      'Naturally thermoregulating and odor-resistant virgin fiber',
      'Rolled raw hem that curls organically with wear'
    ],
    composition: '100% Extra-Fine Merino Wool',
    madeIn: 'Biella, Italy',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Obsidian Black', hex: '#0B0C0E' },
      { name: 'Chalk Bone', hex: '#D6D4CD' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    isBestSeller: false,
    inStock: true,
    featured: false
  },
  {
    id: 'kv-07',
    slug: 'monolith-derby-platform',
    name: 'TITANIUM-WELTED MONOLITH DERBY',
    collection: 'obsidian-genesis',
    category: 'footwear',
    price: 74000,
    description: 'An aggressive reimagining of the classic postman derby. Handcrafted in Tuscany using full-grain vegetable tanned calfskin and an ultra-lightweight sculptural Vibram lug sole with an exposed metal welt rand.',
    details: [
      'Full-grain Italian Tuscan calf leather conditioned with natural oils',
      'Goodyear welted construction reinforced with custom titanium wire',
      'Lightweight Vibram Vi-Lite lug sole with shock-absorbing foam core',
      'Calfskin lined interior with orthotic arch memory footbed',
      'Waxed cotton round laces with solid sterling silver aglets'
    ],
    composition: '100% Full Grain Tuscan Calfskin, Vibram Rubber Sole',
    madeIn: 'Florence, Italy',
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'High-Gloss Obsidian', hex: '#050608' },
      { name: 'Matte Charcoal', hex: '#1D1E22' }
    ],
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    isNew: true,
    isBestSeller: true,
    inStock: true,
    featured: true
  },
  {
    id: 'kv-08',
    slug: 'rhodium-chain-crossbody',
    name: 'CYBERNETIC HARNESS CROSSBODY BAG',
    collection: 'cyber-tailoring',
    category: 'accessories',
    price: 58000,
    description: 'Sculpted modular leather crossbody engineered with dual detachable utility pouches and a heavyweight curb link rhodium-plated brass shoulder chain.',
    details: [
      'Full-grain French box calf leather with scratch-resistant temper',
      'Custom solid brass hardware electroplated in hypoallergenic rhodium',
      'Dual detachable modular compartments via magnetic quick-release buckle',
      'Fidlock V-Buckle magnetic safety fastener for instant detachment',
      'Engraved atelier registration plate on interior pocket'
    ],
    composition: '100% French Box Calfskin, Rhodium Plated Solid Brass',
    madeIn: 'Paris, France',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Obsidian & Rhodium', hex: '#0B0C0E' },
      { name: 'Polished Silver', hex: '#C7CBD1' }
    ],
    sizes: ['One Size'],
    isNew: true,
    isBestSeller: false,
    inStock: true,
    featured: false
  }
];

export const EDITORIAL_LOOKS = [
  {
    lookNumber: 'LOOK 01 // ARCHETYPE',
    title: 'THE COLD MONOLITH',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1400&auto=format&fit=crop',
    description: 'Drop-shoulder heavy wool outerwear matched with sculptural pleated trousers and solid titanium hardware.',
    pieces: ['MONOLITH HEAVY WOOL TRENCH', 'ARCHITECTURAL PLEATED WIDE TROUSER']
  },
  {
    lookNumber: 'LOOK 02 // CHROMATICS',
    title: 'MERCURY FLUIDITY',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop',
    description: 'Reflective aerospace nylon layered against matte cupro for an interplay of light absorption and radiance.',
    pieces: ['LIQUID SILVER REVERSIBLE BOMBER', 'DECONSTRUCTED MERINO CREW KNIT']
  },
  {
    lookNumber: 'LOOK 03 // BESPOKE',
    title: 'ASYMMETRIC POWER',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop',
    description: 'Avant-garde tailoring crafted for the contemporary metropolis. Defiant lines and unyielding presence.',
    pieces: ['CHROMA ASYMMETRIC TAILORED BLAZER', 'TITANIUM-WELTED MONOLITH DERBY']
  }
];

export const BRAND_STORY = {
  manifesto: "KROMA // VOID was founded in the intersection between haute couture tradition and brutalist cybernetics. We reject temporary ephemeral trends in favor of permanent architectural silhouettes that command attention. Every garment is engineered with the rigor of modern aerospace material science and finished by master artisans across Milan, Paris, and Japan.",
  pillars: [
    {
      title: "STRUCTURAL INTEGRITY",
      body: "We construct garments using high-density textiles—from 780gsm Melton wools to aerospace-grade reflective membranes that outlive seasonal cycles."
    },
    {
      title: "RHODIUM & SURGICAL HARDWARE",
      body: "Every buckle, zipper, button, and throat latch is custom CNC-milled or hand-cast from surgical steel and hypoallergenic rhodium."
    },
    {
      title: "LIMITED NUMBERED RUNS",
      body: "We do not mass produce. Each release is crafted in strictly capped atelier batches with individual laser-engraved serial identifiers."
    }
  ]
};
