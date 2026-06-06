"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import { CartItem } from "@/lib/types";

const STORAGE_KEY = "swanandji-cart";
const SAVED_KEY = "swanandji-saved-items";

interface CartContextValue {
  items: CartItem[];
  savedItems: CartItem[];
  totalItems: number;
  addItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  saveForLater: (productId: string) => void;
  moveToCart: (productId: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function mergeItem(items: CartItem[], productId: string, quantity = 1) {
  const existing = items.find((item) => item.productId === productId);

  if (!existing) {
    return [...items, { productId, quantity }];
  }

  return items.map((item) =>
    item.productId === productId
      ? { ...item, quantity: item.quantity + quantity }
      : item
  );
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const rawItems = localStorage.getItem(STORAGE_KEY);
      const rawSaved = localStorage.getItem(SAVED_KEY);
      if (rawItems) {
        setItems(JSON.parse(rawItems) as CartItem[]);
      }
      if (rawSaved) {
        setSavedItems(JSON.parse(rawSaved) as CartItem[]);
      }
    } catch {
      setItems([]);
      setSavedItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedItems));
  }, [savedItems]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      savedItems,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      addItem(productId) {
        setItems((current) => mergeItem(current, productId));
        setSavedItems((current) =>
          current.filter((item) => item.productId !== productId)
        );
      },
      updateQuantity(productId, quantity) {
        if (quantity <= 0) {
          setItems((current) =>
            current.filter((item) => item.productId !== productId)
          );
          return;
        }

        setItems((current) =>
          current.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          )
        );
      },
      removeItem(productId) {
        setItems((current) =>
          current.filter((item) => item.productId !== productId)
        );
      },
      clearCart() {
        setItems([]);
      },
      saveForLater(productId) {
        const currentItem = items.find((item) => item.productId === productId);
        if (!currentItem) {
          return;
        }

        setItems((current) =>
          current.filter((item) => item.productId !== productId)
        );
        setSavedItems((current) => mergeItem(current, productId, currentItem.quantity));
      },
      moveToCart(productId) {
        const savedItem = savedItems.find((item) => item.productId === productId);
        if (!savedItem) {
          return;
        }

        setSavedItems((current) =>
          current.filter((item) => item.productId !== productId)
        );
        setItems((current) => mergeItem(current, productId, savedItem.quantity));
      }
    }),
    [items, savedItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider.");
  }

  return context;
}
