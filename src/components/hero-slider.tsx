"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: string;
  badge: string;
  title: string;
  description1: string;
  description2: string;
  primaryBtn: { label: string; href: string };
  secondaryBtn: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
  accent: string;
}

const slides: Slide[] = [
  {
    id: "gaushala",
    badge: "From Gau Seva to Your Home",
    title: "Experience Purity, Live Naturally, Embrace Tradition",
    description1: "Welcome to Swanandji Gaushala & Eco-Stays, a sanctuary where nature, tradition, and purity come together near the lush forests of Nagzira and Koka Jungle in Maharashtra.",
    description2: "We deliver honest dairy products and soulful rural experiences rooted in natural wellness, Indian tradition, and ethical care.",
    primaryBtn: { label: "Explore Products", href: "/products" },
    secondaryBtn: { label: "Plan Your Visit", href: "/stay-explore" },
    imageSrc: "/images/hero/hero_gaushala.png",
    imageAlt: "Swanandji Gaushala and Gir cows in the forest pasture",
    accent: "from-emerald-100/40 via-white to-lime-50/40"
  },
  {
    id: "dairy",
    badge: "Pure & Honest Dairy",
    title: "Farm-Fresh Milk, Bilona Ghee & Curd",
    description1: "Nature-rich grazing, calm rhythms, and a lifestyle built around real nourishment. Our dairy products are prepared without dilution, chemicals, or preservatives.",
    description2: "Enjoy traditional bilona ghee crafted from A2 milk of indigenous cows, thick curd, and fresh shrikhand representing true natural nourishment.",
    primaryBtn: { label: "Shop A2 Products", href: "/products" },
    secondaryBtn: { label: "Our Dairy Process", href: "/about" },
    imageSrc: "/images/hero/hero_ghee_product.png",
    imageAlt: "Pure A2 Gir cow ghee and natural jaggery",
    accent: "from-yellow-100/40 via-white to-orange-50/40"
  },
  {
    id: "stays",
    badge: "Village Hospitality",
    title: "Eco Stays & Forest Living Experience",
    description1: "Slow down and experience village life near the Koka Jungle. Enjoy traditional home-cooked meals, peaceful forest views, and simple rural rhythms.",
    description2: "Unwind under starry skies, wake up to bird calls, and join our morning Gau Seva to restore your inner balance.",
    primaryBtn: { label: "Plan Your Visit", href: "/stay-explore" },
    secondaryBtn: { label: "Explore Experiences", href: "/stay-explore" },
    imageSrc: "/images/hero/hero_eco_stay.png",
    imageAlt: "Traditional eco-stay cottage near the forest edge at sunset",
    accent: "from-amber-100/40 via-white to-stone-100/40"
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24" style={{ background: "linear-gradient(135deg, #e3ecc1 0%, #f1f6de 55%, #e3ecc1 100%)" }}>
      {/* Decorative Blob backgrounds inspired by the user's reference image */}
      {/* Top Left Organic Blobs */}
      <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full blur-2xl pointer-events-none" style={{ backgroundColor: "rgba(17,87,80,0.08)" }} />
      <div 
        className="absolute left-0 top-0 h-28 w-28 md:h-40 md:w-40 opacity-95 transition-transform duration-500 pointer-events-none"
        style={{
          backgroundColor: "#115750",
          borderRadius: "0% 100% 60% 100% / 0% 100% 50% 100%",
          transform: "translate(-15%, -15%) rotate(-5deg)",
          boxShadow: "-4px 4px 0px 4px #9bb84a"
        }}
      />

      {/* Bottom Right Organic Blobs */}
      <div className="absolute -right-12 -bottom-12 h-44 w-44 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(17,87,80,0.07)" }} />
      <div 
        className="absolute right-0 bottom-0 h-32 w-32 md:h-48 md:w-48 opacity-95 transition-transform duration-500 pointer-events-none"
        style={{
          backgroundColor: "#115750",
          borderRadius: "100% 0% 100% 60% / 100% 0% 100% 50%",
          transform: "translate(15%, 15%) rotate(5deg)",
          boxShadow: "4px -4px 0px 4px #9bb84a"
        }}
      />

      <div className="shell relative z-10">
        {/* Carousel Container */}
        <div className="relative min-h-[620px] md:min-h-[520px] lg:min-h-[480px] w-full">
          {slides.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-x-0 pointer-events-auto z-10"
                    : "opacity-0 translate-x-8 pointer-events-none z-0"
                }`}
              >
                {/* Left Column: Text Content */}
                <div className="space-y-6 md:space-y-8 pr-4">
                  <span className="inline-flex rounded-full border border-gold/35 bg-white px-6 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-forest shadow-sm">
                    {slide.badge}
                  </span>
                  
                  <div className="space-y-4">
                    <h1 className="font-serif text-4xl leading-tight text-bark sm:text-5xl md:text-6xl lg:text-[4.2rem] lg:leading-[1.1]">
                      {slide.title}
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg leading-relaxed text-bark/80 font-medium">
                      {slide.description1}
                    </p>
                    <p className="max-w-2xl text-sm md:text-base leading-relaxed text-bark/65">
                      {slide.description2}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link href={slide.primaryBtn.href} className="btn-primary px-8 py-3.5 shadow-md">
                      {slide.primaryBtn.label}
                    </Link>
                    <Link href={slide.secondaryBtn.href} className="btn-secondary px-8 py-3.5">
                      {slide.secondaryBtn.label}
                    </Link>
                  </div>
                </div>

                {/* Right Column: Premium Image with Organic Frame */}
                <div className="relative flex justify-center lg:justify-end">
                  {/* Organic background shadow/outline shape */}
                  <div 
                    className="absolute inset-0 bg-gold/25 pointer-events-none transition-transform duration-500 scale-95"
                    style={{
                      borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
                      transform: "translate(-4%, 4%) rotate(-3deg)"
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-forest/10 pointer-events-none transition-transform duration-500 scale-95"
                    style={{
                      borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%",
                      transform: "translate(4%, -2%) rotate(2deg)"
                    }}
                  />

                  {/* Main Image Container */}
                  <div 
                    className="relative w-full max-w-[450px] aspect-[4/3.2] overflow-hidden border-[6px] border-white shadow-soft transition-transform duration-500 hover:scale-[1.01]"
                    style={{
                      borderRadius: "50% 45% 55% 45% / 45% 55% 45% 55%"
                    }}
                  >
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        {/* Left Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute -left-2 sm:left-2 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-forest/10 bg-white/80 text-forest shadow-md backdrop-blur-sm transition hover:bg-forest hover:text-white"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute -right-2 sm:right-2 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-forest/10 bg-white/80 text-forest shadow-md backdrop-blur-sm transition hover:bg-forest hover:text-white"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Slide Progress Indicators */}
        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrent(idx);
                setTimeout(() => setIsTransitioning(false), 700);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current ? "w-8 bg-forest" : "w-2.5 bg-forest/30 hover:bg-forest/55"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
