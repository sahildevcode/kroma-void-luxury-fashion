# KROMA // VOID — Obsidian Chrome Digital Flagship

An haute couture and avant-garde luxury fashion e-commerce flagship website engineered with Obsidian Chrome aesthetics, brutalist architectural silhouettes, metallic typography, and genuine shopping mechanics.

## 1. Project Overview & Aesthetic
- **Brand Identity**: **KROMA // VOID** (Paris • Milan • Tokyo)
- **Palette**: Obsidian Black (`#08090B`), Deep Charcoal (`#141519`), Metallic Silver (`#BFC3C9`), Soft White (`#F4F3EF`), and Smoked Titanium (`#85888E`).
- **Typography**: Cinzel, Syne, Plus Jakarta Sans, and JetBrains Mono.
- **Atmosphere**: Subtle film grain overlay, frosted glass backdrops, liquid chrome gradients, and staggered scroll-triggered reveals.

## 2. Implemented Pages & Features

1. **Cinematic Hero**:
   - Full-viewport atmospheric opening with layered campaign photography.
   - Oversized metallic chrome display headlines.
   - Parallax scroll effects with GSAP & ScrollTrigger.
   - Animated scroll indicator and quick lookbook access.
2. **Interactive Sections**:
   - Continuous moving brand marquee banner.
   - Editorial manifesto with multi-column textile density statistics.
   - Signature silhouettes product grid with quick reserve and inspection modals.
   - Full-width chrome campaign visual transition.
   - Seasonal lookbook dossier showcasing multi-piece styling.
   - Recent releases showcase.
   - Private atelier VIP registration form.
3. **Product Catalog & Dynamic Filter Engine (`/shop`)**:
   - Real-time filtering by category (Outerwear, Tailoring, Streetwear, Footwear, Accessories).
   - Filter by Capsule Collection (Obsidian Genesis, Chromatic Architecture, Liquid Monolith).
   - Filter by price band (Under $1,000, $1,000–$1,500, Above $1,500).
   - Sort by Curated Order, Newest Additions, Price Ascending, and Price Descending.
   - Dynamic parameter chips with one-click clearance.
4. **Editorial Product Detail Dossier (`/product/:slug`)**:
   - High-resolution gallery with thumbnail switcher.
   - Color swatch selector with live palette names.
   - Silhouette sizing buttons with active state validation.
   - Architectural Fit Matrix modal with chest, shoulder, waist, and sleeve centimetre measurements.
   - Quantity stepper and instant Bag reservation.
   - Accordions for construction, textile composition/provenance, and white-glove logistics.
   - Curated companion products carousel.
5. **Interactive Slide-Out Bag & Pricing Logic**:
   - Real-time slide-out drawer accessible from every page.
   - Persistent `localStorage` state across browser reloads.
   - Quantity increments, decrements, and removals.
   - VIP privilege code redemption (`OBSIDIAN10` for 10% off, `VOID15` for 15% off).
   - Complimentary courier calculations for orders exceeding $500.
6. **Encrypted Checkout (`/checkout`)**:
   - Comprehensive client billing and shipping address fields.
   - Real-time live order summary with discount and shipping breakdown.
   - Simulated 256-bit encrypted card gateway validation.
   - Dedicated allocation screen with generated order ID (`KV-XXXXXX`) and celebratory canvas confetti.
7. **Private Registry (`/wishlist`)**:
   - Heart toggle interaction across all cards and product details.
   - Persistent saved items list.
8. **Instant Search Overlay**:
   - Real-time keyword search across silhouettes, materials, and categories.
   - Quick search tag recommendations.
9. **Editorial & Maison Legal Suite**:
   - **Manifesto & Craft** (`/about`)
   - **Private Concierge & Suite Booking** (`/contact`)
   - **Atelier FAQ** (`/faq`)
   - **White-Glove Shipping Policy** (`/shipping-policy`)
   - **14-Day Returns & Exchanges** (`/returns-policy`)
   - **Client Privacy Protocol** (`/privacy-policy`)
   - **Terms of Acquisition** (`/terms`)
   - **Architectural Size Guide** (`/size-guide`)
   - **Custom 404** (`/*`)

## 3. Technology Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Obsidian Chrome Utilities + Frosted Glass
- **Animations**: GSAP + ScrollTrigger + Canvas Confetti
- **Icons**: Lucide React
- **Routing**: React Router v7

## 4. How to Run Locally
```bash
cd "C:\Users\advance computer\.gemini\antigravity\scratch\obsidian-chrome-luxury"
npm install
npm run dev
```
The application runs at `http://localhost:5173/`.
