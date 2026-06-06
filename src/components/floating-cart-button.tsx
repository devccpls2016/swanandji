"use client";

import Link from "next/link";

import { useCart } from "@/context/cart-context";

export function FloatingCartButton() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream shadow-soft transition hover:-translate-y-0.5"
    >
      <span>My Cart</span>
      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-cream px-2 text-xs text-forest">
        {totalItems}
      </span>
    </Link>
  );
}
