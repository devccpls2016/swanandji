"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const PRODUCT_METADATA: Record<string, { icon: string; rating: number; reviews: number; bg: string }> = {
  ghee: { icon: "🍯", rating: 4.9, reviews: 2868, bg: "from-amber-100/50 via-white to-yellow-50/50" },
  "a2-ghee": { icon: "🫙", rating: 4.8, reviews: 312, bg: "from-yellow-100/50 via-white to-amber-50/50" },
  shrikhand: { icon: "🍧", rating: 4.8, reviews: 186, bg: "from-rose-100/50 via-white to-orange-50/50" },
  vermicompost: { icon: "🌱", rating: 4.7, reviews: 481, bg: "from-green-100/50 via-white to-lime-50/50" },
  vermiwash: { icon: "💧", rating: 4.6, reviews: 134, bg: "from-emerald-100/50 via-white to-teal-50/50" },
  curd: { icon: "🍶", rating: 4.8, reviews: 166, bg: "from-sky-100/50 via-white to-cyan-50/50" },
  "gomutra-ark": { icon: "🧪", rating: 4.6, reviews: 95, bg: "from-teal-100/50 via-white to-emerald-50/50" },
  butter: { icon: "🧈", rating: 4.9, reviews: 228, bg: "from-yellow-100/50 via-white to-orange-50/50" },
  paneer: { icon: "🟦", rating: 4.8, reviews: 197, bg: "from-blue-100/50 via-white to-sky-50/50" },
  milk: { icon: "🥛", rating: 4.9, reviews: 543, bg: "from-sky-100/50 via-white to-blue-50/50" },
  "chick-milk": { icon: "🌟", rating: 4.9, reviews: 72, bg: "from-amber-100/50 via-white to-orange-50/50" }
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Get tailored visuals or use high-quality fallbacks
  const meta = PRODUCT_METADATA[product.id] || {
    icon: "🌾",
    rating: 4.5,
    reviews: 45,
    bg: "from-cream via-white to-sand/20"
  };

  // Dynamic calculations for e-commerce badges
  const coins = Math.round(product.price * 2.2); // GirOrganic-style coins reward
  const savings = Math.round(product.price * 0.15); // Stated 15% discount
  const originalPrice = product.price + savings;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-bark/10 bg-white hover:shadow-soft transition-all duration-300 relative">
      
      {/* Top Graphic/Image Section (Wrapped in Link to Details Page) */}
      <Link href={`/products/${product.slug}`} className={cn("relative flex h-56 items-center justify-center bg-gradient-to-br p-6 overflow-hidden cursor-pointer", meta.bg)}>
        
        {/* Decorative background visual elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute w-36 h-36 rounded-full border border-gold/15 bg-white/20 pointer-events-none" />

        {/* Best Seller / Promotion Tag */}
        <div className="absolute left-0 top-0 rounded-br-2xl bg-yellow-400 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-bark shadow-sm z-10 select-none">
          {product.badge || "Organic"}
        </div>

        {/* Scaled Product Illustration */}
        <div className="relative text-7xl select-none filter drop-shadow-[0_8px_16px_rgba(80,33,27,0.15)] transform group-hover:scale-105 transition-transform duration-300">
          {meta.icon}
        </div>
      </Link>

      {/* Interactive Wishlist Heart Icon (Placed outside Link to prevent nested button issues) */}
      <button
        type="button"
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute right-4 top-4 z-10 p-2.5 rounded-full bg-white/80 text-bark/40 hover:text-red-500 hover:scale-105 active:scale-95 shadow-sm backdrop-blur-sm transition-all"
        aria-label="Add to wishlist"
      >
        <svg
          className={cn("h-4.5 w-4.5 transition-colors", isWishlisted ? "fill-red-500 text-red-500" : "fill-none")}
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      {/* GirOrganic style Coins Reward Bar */}
      <div className="flex items-center justify-center gap-1.5 bg-[#fef3c7] text-[#92400e] py-2 text-[11px] font-extrabold uppercase tracking-wider border-b border-[#fde68a] select-none shadow-sm">
        <span>🪙</span>
        <span>Earn {coins} Coins on this product</span>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        
        {/* Rating & Trust Badge Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {/* Green rating pill (Flipkart style) */}
            <span className="inline-flex items-center gap-0.5 bg-[#388e3c] text-white px-2 py-0.5 rounded text-[11px] font-bold shadow-sm">
              {meta.rating}
              <span className="text-[9px]">★</span>
            </span>
            <span className="text-[11px] font-semibold text-bark/50">
              ({meta.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Rebranded checkmark seal */}
          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-forest bg-gold/10 px-2 py-0.5 rounded border border-gold/30 select-none">
            🌾 Assured
          </span>
        </div>

        {/* Product Name & Description */}
        <div className="space-y-1">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-lg font-bold text-bark group-hover:text-forest transition-colors leading-snug cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <p className="text-[13px] leading-relaxed text-bark/65 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Savings & Variant Selector Row */}
        <div className="flex items-center justify-between gap-3 bg-cream/55 border border-bark/5 rounded-xl p-2.5">
          <span className="text-[10px] font-extrabold text-[#065f46] bg-[#ecfdf5] px-2 py-1 rounded">
            Savings: Rs. {savings}
          </span>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-bark bg-white border border-bark/10 rounded px-2.5 py-1 cursor-pointer select-none">
            <span>{product.unit}</span>
            <span className="text-[8px] text-bark/50">▼</span>
          </div>
        </div>

        {/* Pricing, Discount & Action Button */}
        <div className="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-bark/5">
          <div className="space-y-0.5">
            <p className="text-lg font-extrabold text-forest leading-none">
              {formatCurrency(product.price)}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-bark/40 line-through font-semibold">
                {formatCurrency(originalPrice)}
              </span>
              <span className="text-[11px] font-extrabold text-[#388e3c] uppercase">
                15% OFF
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => addItem(product.id)}
            className="border-2 border-forest text-forest hover:bg-forest hover:text-cream px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0 shadow-sm"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </article>
  );
}
