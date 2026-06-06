"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/content/site";

const productFaqs = [
  {
    question: "Is your milk factory processed?",
    answer: "No, we provide raw milk to keep all its natural nutrients."
  },
  {
    question: "Do you add water or chemicals?",
    answer: "Absolutely not. Our milk is 100% pure and undiluted."
  },
  {
    question: "How are your cows maintained?",
    answer: "Through natural grazing, Ayurvedic care, and a stress-free environment."
  }
];

function ProductsPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search") ?? "";
  const searchQuery = searchText.trim().toLowerCase();

  const allFiltered = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      )
    : products;

  const featuredProducts = allFiltered.filter((p) => p.section === "featured");
  const experienceProducts = allFiltered.filter((p) => p.section === "experience");

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="shell section-space space-y-20">
      <SectionHeading
        eyebrow="Our Products"
        title="Pure & Natural Goodness – From Our Farm to Your Home"
        align="center"
      />

      {searchQuery ? (
        <div className="rounded-[2rem] border border-bark/10 bg-white px-6 py-4 text-center shadow-soft">
          <p className="text-sm text-bark/65">
            Showing results for <span className="font-semibold text-bark">{searchText}</span>
          </p>
        </div>
      ) : null}

      {/* Featured Products Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-forest/70 mb-1">Section 01</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-bark leading-tight">
              🌿 Featured Products
            </h2>
            <p className="mt-2 text-sm text-bark/60 max-w-xl">
              Signature products from the Swanandji farm — Desi Gir cow ghee, wellness items, and organic farm solutions crafted with tradition and care.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="h-px w-16 bg-gradient-to-r from-forest/30 to-transparent" />
            <span className="text-2xl select-none">🍯</span>
          </div>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-bark/15 bg-white/80 px-6 py-10 text-center">
            <p className="text-lg font-semibold text-bark">No featured products matched your search.</p>
          </div>
        )}
      </section>

      {/* Visual Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-bark/15 to-transparent" />
        <span className="text-bark/30 text-xs font-bold uppercase tracking-widest">Gaushala Collection</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-bark/15 to-transparent" />
      </div>

      {/* Experience at Gaushala Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-rose-600/70 mb-1">Section 02</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-bark leading-tight">
              🐄 Experience at Gaushala
            </h2>
            <p className="mt-2 text-sm text-bark/60 max-w-xl">
              Fresh dairy products made daily at our Gaushala — pure milk, curd, shrikhand, paneer, butter, and the rare colostrum milk. Farm-to-door freshness.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="h-px w-16 bg-gradient-to-r from-rose-300/40 to-transparent" />
            <span className="text-2xl select-none">🥛</span>
          </div>
        </div>

        {experienceProducts.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {experienceProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-bark/15 bg-white/80 px-6 py-10 text-center">
            <p className="text-lg font-semibold text-bark">No experience products matched your search.</p>
          </div>
        )}
      </section>

      {allFiltered.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-bark/15 bg-white/80 px-6 py-10 text-center">
          <p className="text-lg font-semibold text-bark">No products matched your search.</p>
          <p className="mt-2 text-sm text-bark/65">
            Try another product name from the navbar search.
          </p>
        </div>
      ) : null}

      <section className="rounded-[2rem] border border-bark/10 bg-white p-8 md:p-12 shadow-card">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
        />
        <div className="mt-8 divide-y divide-bark/5">
          {productFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left font-serif text-lg md:text-xl font-semibold text-bark py-2 transition focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-cream text-bark transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base leading-8 text-bark/75 pb-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="shell section-space" />}>
      <ProductsPageContent />
    </Suspense>
  );
}
