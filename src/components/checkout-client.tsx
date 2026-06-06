"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { useCart } from "@/context/cart-context";
import { getCartDetails } from "@/lib/cart";
import { formatCurrency } from "@/lib/utils";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  notes: ""
};

export function CheckoutClient() {
  const searchParams = useSearchParams();
  const coupon = searchParams.get("coupon") ?? "";
  const { items, clearCart } = useCart();
  const details = useMemo(() => getCartDetails(items, coupon), [coupon, items]);
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [feedback, setFeedback] = useState("");

  if (details.items.length === 0 && !success) {
    return (
      <div className="rounded-[2rem] border border-dashed border-bark/20 bg-white p-10 text-center shadow-card">
        <h2 className="font-serif text-3xl text-bark">Your checkout is empty</h2>
        <p className="mt-3 text-bark/70">
          Add a few pure products to your cart before submitting an order inquiry.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFeedback("");

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        couponCode: details.couponCode,
        items: details.items.map((item) => ({
          productId: item?.product.id,
          name: item?.product.name,
          price: item?.product.price,
          quantity: item?.quantity
        })),
        subtotal: details.subtotal,
        deliveryCharge: details.deliveryCharge,
        discount: details.discount,
        total: details.total
      })
    });

    const data = (await response.json()) as { success: boolean; message: string };
    setFeedback(data.message);
    if (data.success) {
      setSuccess(true);
      clearCart();
      setForm(initialState);
    }
    setSubmitting(false);
  }

  if (success) {
    return (
      <div className="rounded-[2rem] border border-forest/15 bg-white p-10 text-center shadow-card">
        <p className="text-5xl">🌿</p>
        <h2 className="mt-4 font-serif text-4xl text-bark">Inquiry received</h2>
        <p className="mx-auto mt-3 max-w-2xl text-bark/75">
          {feedback ||
            "Thank you. Our team will reach out soon to confirm product availability, delivery timing, and final order details."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/products"
            className="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
          >
            Continue Shopping
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-bark/10 px-5 py-3 text-sm font-semibold text-bark"
          >
            Contact Us
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-[2rem] border border-bark/10 bg-white p-6 shadow-card md:p-8"
      >
        <div className="space-y-3">
          <h2 className="font-serif text-3xl text-bark">Delivery Details</h2>
          <p className="text-bark/70">
            Submit your order inquiry and we will confirm the final delivery schedule.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-bark">
            <span>Full Name</span>
            <input
              required
              className="field"
              value={form.fullName}
              onChange={(event) =>
                setForm((current) => ({ ...current, fullName: event.target.value }))
              }
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-bark">
            <span>Phone Number</span>
            <input
              required
              className="field"
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({ ...current, phone: event.target.value }))
              }
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-bark">
            <span>Email Address</span>
            <input
              type="email"
              required
              className="field"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-bark">
            <span>Postal Code</span>
            <input
              required
              className="field"
              value={form.postalCode}
              onChange={(event) =>
                setForm((current) => ({ ...current, postalCode: event.target.value }))
              }
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Delivery Address</span>
          <textarea
            required
            rows={4}
            className="field resize-none"
            value={form.address}
            onChange={(event) =>
              setForm((current) => ({ ...current, address: event.target.value }))
            }
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-bark">
            <span>City</span>
            <input
              required
              className="field"
              value={form.city}
              onChange={(event) =>
                setForm((current) => ({ ...current, city: event.target.value }))
              }
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-bark">
            <span>State</span>
            <input
              required
              className="field"
              value={form.state}
              onChange={(event) =>
                setForm((current) => ({ ...current, state: event.target.value }))
              }
            />
          </label>
        </div>

        <label className="space-y-2 text-sm font-medium text-bark">
          <span>Order Notes</span>
          <textarea
            rows={4}
            className="field resize-none"
            value={form.notes}
            onChange={(event) =>
              setForm((current) => ({ ...current, notes: event.target.value }))
            }
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition hover:bg-bark disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Submit Order Inquiry"}
          </button>
          {feedback ? <p className="text-sm text-forest">{feedback}</p> : null}
        </div>
      </form>

      <aside className="lg:sticky lg:top-28 lg:h-fit">
        <div className="space-y-5 rounded-[2rem] border border-bark/10 bg-white p-6 shadow-card">
          <h3 className="font-serif text-2xl text-bark">Order Summary</h3>
          <div className="space-y-3">
            {details.items.map((item) => (
              <div
                key={item?.product.id}
                className="flex items-center justify-between gap-3 rounded-3xl bg-cream/80 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-bark">{item?.product.name}</p>
                  <p className="text-sm text-bark/65">Qty {item?.quantity}</p>
                </div>
                <p className="font-semibold text-forest">
                  {formatCurrency(item?.subtotal ?? 0)}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-3 border-t border-bark/10 pt-4 text-sm text-bark/80">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(details.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
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
            <div className="flex items-center justify-between text-lg font-semibold text-bark">
              <span>Total</span>
              <span>{formatCurrency(details.total)}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
