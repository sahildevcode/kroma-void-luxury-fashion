export interface ProductVariant {
  size: string;
  stock: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  category: 'outerwear' | 'tailoring' | 'streetwear' | 'accessories' | 'footwear';
  price: number; // In USD
  compareAtPrice?: number;
  description: string;
  details: string[];
  composition: string;
  madeIn: string;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string; // product.id
  cartItemId: string; // id-size-color
  name: string;
  slug: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  maxStock: number;
}

export interface CollectionMeta {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  editorialImage: string;
  description: string;
}
