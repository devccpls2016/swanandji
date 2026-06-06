"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { products } from "@/content/site";
import { useCart } from "@/context/cart-context";
import {
  FREE_DELIVERY_THRESHOLD,
  getCartDetails,
  STANDARD_DELIVERY_CHARGE
} from "@/lib/cart";
import { formatCurrency } from "@/lib/utils";

export function CartPageClient() {
  const { items, savedItems, removeItem, saveForLater, moveToCart, updateQuantity } =
    useCart();
  const [couponCode, setCouponCode] = useState("");
  const details = useMemo(() => getCartDetails(items, couponCode), [couponCode, items]);

  if (details.items.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-bark/20 bg-white/70 p-10 text-center shadow-soft">
        <p className="text-5xl">🛒</p>
        <h2 className="mt-5 font-serif text-3xl text-bark">Your cart is empty</h2>
        <p className="mt-3 text-bark/70">
          Looks like you have not added anything yet.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
      <div className="space-y-6">
        <div className="space-y-4">
          {details.items.map((item) => (
            <article
              key={item?.product.id}
              className="grid gap-4 rounded-[2rem] border border-bark/10 bg-white p-5 shadow-card md:grid-cols-[180px_1fr]"
            >
              <div
                className={`rounded-[1.5rem] bg-gradient-to-br ${item?.product.accent} p-6`}
              >
                <div className="flex h-full min-h-28 items-end">
                  <h3 className="font-serif text-2xl text-bark">{item?.product.name}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-forest/70">
                      {item?.product.unit}
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-bark/75">
                      {item?.product.description}
                    </p>
                    {item?.product.stock <= 10 ? (
                      <p className="mt-2 text-sm font-medium text-ember">
                        Low stock alert: only a few units remain.
                      </p>
                    ) : null}
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-bark/60">Price per unit</p>
                    <p className="text-xl font-semibold text-forest">
                      {formatCurrency(item?.product.price ?? 0)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="inline-flex w-fit items-center rounded-full border border-bark/10 bg-cream p-1">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item?.product.id ?? "", (item?.quantity ?? 1) - 1)
                      }
                      className="h-10 w-10 rounded-full bg-white text-lg text-bark"
                    >
                      -
                    </button>
                    <span className="min-w-14 text-center text-sm font-semibold text-bark">
                      {item?.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item?.product.id ?? "", (item?.quantity ?? 1) + 1)
                      }
                      className="h-10 w-10 rounded-full bg-white text-lg text-bark"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => saveForLater(item?.product.id ?? "")}
                      className="rounded-full border border-forest/15 px-4 py-2 text-sm font-medium text-forest"
                    >
                      Save for later
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item?.product.id ?? "")}
                      className="rounded-full border border-ember/20 px-4 py-2 text-sm font-medium text-ember"
                    >
                      Remove Item
                    </button>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-sm text-bark/60">Subtotal</p>
                    <p className="text-2xl font-semibold text-bark">
                      {formatCurrency(item?.subtotal ?? 0)}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {savedItems.length > 0 ? (
          <div className="rounded-[2rem] border border-bark/10 bg-white p-6 shadow-card">
            <h3 className="font-serif text-2xl text-bark">Saved for later</h3>
            <div className="mt-4 grid gap-3">
              {savedItems.map((savedItem) => {
                const product = products.find((entry) => entry.id === savedItem.productId);
                if (!product) {
                  return null;
                }
                return (
                  <div
                    key={savedItem.productId}
                    className="flex flex-col gap-3 rounded-3xl border border-bark/10 bg-cream/70 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-bark">{product.name}</p>
                      <p className="text-sm text-bark/65">
                        Quantity saved: {savedItem.quantity}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => moveToCart(savedItem.productId)}
                      className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream"
                    >
                      Move to cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-bark/10 bg-white px-5 py-3 text-sm font-semibold text-bark shadow-soft"
        >
          ← Continue Shopping
        </Link>
      </div>

      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <div className="space-y-6 rounded-[2rem] border border-bark/10 bg-white p-6 shadow-card">
          <div>
            <h3 className="font-serif text-2xl text-bark">Order Summary</h3>
            <p className="mt-2 text-sm leading-7 text-bark/70">
              Free delivery on orders above {formatCurrency(FREE_DELIVERY_THRESHOLD)}.
              Standard delivery otherwise is {formatCurrency(STANDARD_DELIVERY_CHARGE)}.
            </p>
          </div>

          <label className="space-y-2 text-sm font-medium text-bark">
            <span>Apply Coupon</span>
            <input
              placeholder="Try FIRST10"
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
              className="field"
            />
          </label>

          <div className="space-y-3 text-sm text-bark/80">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(details.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery Charges</span>
              <span>
                {details.deliveryCharge === 0
                  ? "Free"
                  : formatCurrency(details.deliveryCharge)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount</span>
              <span>-{formatCurrency(details.discount)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-bark/10 pt-3 text-lg font-semibold text-bark">
              <span>Total Amount</span>
              <span>{formatCurrency(details.total)}</span>
            </div>
          </div>

          <div className="rounded-3xl bg-moss p-4 text-sm text-forest">
            Estimated delivery: 2-5 days across India.
          </div>

          <div className="grid gap-3 text-sm text-bark/70">
            <p>✅ Secure checkout</p>
            <p>🚚 Fast delivery</p>
            <p>💯 100% natural products</p>
          </div>

          <Link
            href={`/checkout${couponCode ? `?coupon=${encodeURIComponent(couponCode)}` : ""}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
          >
            Proceed to Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
