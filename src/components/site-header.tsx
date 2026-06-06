"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

import {
  navigation,
  products,
  siteContact,
  socialLinks
} from "@/content/site";
import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  YouTube: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Instagram: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  WhatsApp: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
};

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { totalItems } = useCart();
  const filteredProducts = query.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : products;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("search") ?? "");
  }, [pathname]);

  const goToProducts = (searchValue: string) => {
    const trimmedQuery = searchValue.trim();
    const nextUrl = trimmedQuery
      ? `/products?search=${encodeURIComponent(trimmedQuery)}`
      : "/products";

    setShowSuggestions(false);
    setOpen(false);
    router.push(nextUrl);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goToProducts(query);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-bark/10">
      <div style={{ backgroundColor: "#115750" }} className="text-cream text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-1.5 sm:px-6 lg:h-10 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-0">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={`tel:${siteContact.phonePrimary.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 font-medium text-cream/95 transition hover:text-white"
            >
              <svg className="h-4 w-4 text-cream/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{siteContact.phonePrimary}</span>
            </a>
            <a
              href={`mailto:${siteContact.email}`}
              className="inline-flex items-center gap-1.5 font-medium text-cream/95 transition hover:text-white"
            >
              <svg className="h-4 w-4 text-cream/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{siteContact.email}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map((link) => {
              const icon = SOCIAL_ICONS[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cream/90 transition hover:bg-white/20 hover:text-white [&>svg]:h-3.5 [&>svg]:w-3.5"
                  aria-label={link.label}
                >
                  {icon || (
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                      {link.shortLabel}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#e3ecc1" }} className="backdrop-blur-xl shadow-sm border-b border-bark/5">
        <div className="mx-auto flex h-[80px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90">
            <Image
              src="/swanand-logo-new.png"
              alt="Swanandji Gaushala & Eco-Stays"
              width={160}
              height={50}
              priority
              className="h-[50px] w-[160px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-base font-medium transition hover:bg-white/70",
                  pathname === item.href
                    ? "bg-white text-forest shadow-soft"
                    : "text-bark/80"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <form
              onSubmit={handleSearchSubmit}
              className="relative hidden md:block"
            >
              <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-bark/40">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => {
                  window.setTimeout(() => setShowSuggestions(false), 120);
                }}
                placeholder="Search products..."
                className="w-48 rounded-full border border-bark/10 bg-white/70 py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-forest/30 focus:bg-white lg:w-56"
              />

              {showSuggestions ? (
                <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-bark/10 bg-white shadow-card">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, 5).map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onMouseDown={() => goToProducts(product.name)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-bark transition hover:bg-cream/70"
                      >
                        <span>{product.name}</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-bark/45">
                          {product.category}
                        </span>
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm text-bark/60">
                      No matching products found.
                    </p>
                  )}
                </div>
              ) : null}
            </form>

            <Link
              href="/login"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bark/10 bg-white text-bark transition hover:-translate-y-0.5 hover:bg-cream/40"
              aria-label="Account details"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>

            <Link
              href="/cart"
              className="relative inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-forest/20 bg-white px-3 py-2 text-sm font-semibold text-forest shadow-soft transition hover:-translate-y-0.5 sm:px-4 sm:text-base"
              aria-label="Cart"
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5.4 5M7 13l-1 5h12m-9 0a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
                />
              </svg>
              <span>Cart</span>
              <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-forest px-2 text-xs text-cream">
                {totalItems}
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bark/10 bg-white text-bark transition lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span className="text-2xl leading-none">{open ? "\u00D7" : "\u2630"}</span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-bark/10 bg-white/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            <form onSubmit={handleSearchSubmit} className="relative mb-2">
              <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-bark/40">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-bark/10 bg-cream/70 py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-forest/30 focus:bg-white"
              />
              <div className="mt-2 overflow-hidden rounded-2xl border border-bark/10 bg-white">
                {filteredProducts.slice(0, 5).map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => goToProducts(product.name)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-bark transition hover:bg-cream/70"
                  >
                    <span>{product.name}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-bark/45">
                      {product.category}
                    </span>
                  </button>
                ))}
              </div>
            </form>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "whitespace-nowrap rounded-2xl px-4 py-3 text-base font-medium",
                  pathname === item.href
                    ? "bg-forest text-cream"
                    : "bg-cream text-bark"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
