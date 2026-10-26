import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from '../data/types';

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[]; // product IDs
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartCount: number;
  subtotal: number;
  discountPercent: number;
  appliedPromo: string | null;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  notification: string | null;
  showNotification: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'kroma_void_cart_v1';
const WISHLIST_STORAGE_KEY = 'kroma_void_wishlist_v1';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  // Sync cart to storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Cart storage failed", e);
    }
  }, [cart]);

  // Sync wishlist to storage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error("Wishlist storage failed", e);
    }
  }, [wishlist]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3800);
  };

  const addToCart = (product: Product, size: string, color: string, quantity = 1) => {
    if (!size) {
      showNotification("Please select a size to proceed.");
      return;
    }

    const cartItemId = `${product.id}-${size}-${color}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity = Math.min(updated[existingIndex].quantity + quantity, 10);
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            cartItemId,
            name: product.name,
            slug: product.slug,
            price: product.price,
            image: product.images[0],
            size,
            color,
            quantity: Math.min(quantity, 10),
            maxStock: 10,
          },
        ];
      }
    });

    showNotification(`Added ${product.name} (${size}) to your bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
    showNotification("Item removed from your bag");
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: Math.min(newQuantity, item.maxStock) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showNotification("Removed piece from private curation");
        return prev.filter((id) => id !== productId);
      } else {
        showNotification("Piece saved to private curation");
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'OBSIDIAN10') {
      setAppliedPromo('OBSIDIAN10');
      setDiscountPercent(10);
      return { success: true, message: 'VIP 10% atelier privilege activated' };
    } else if (clean === 'VOID15') {
      setAppliedPromo('VOID15');
      setDiscountPercent(15);
      return { success: true, message: '15% First Order acquisition applied' };
    } else {
      return { success: false, message: 'Invalid or expired atelier invitation code' };
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setDiscountPercent(0);
    showNotification("Privilege code removed");
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        cartCount,
        subtotal,
        discountPercent,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
        notification,
        showNotification,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
