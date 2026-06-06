"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "pure",
    icon: "🌿",
    title: "100% Pure & Natural",
    description: "No chemicals, no preservatives, no mixing of harmful substances. Only pure nature in every drop."
  },
  {
    id: "zero",
    icon: "🥛",
    title: "Zero Processing",
    description: "No factory processing or dilution—milk in its original, nutrient-dense form straight from our farms."
  },
  {
    id: "ethical",
    icon: "🐄",
    title: "Ethical Cow Care",
    description: "Our Desi Gir cows receive stress-free living, love, and Ayurvedic care with no hormonal injections or stimulants."
  },
  {
    id: "methods",
    icon: "🔥",
    title: "Traditional Methods",
    description: "Prepared using ancient Indian techniques like wood-fire cooking (chulha) and hand-churning (bilona)."
  },
  {
    id: "forest",
    icon: "🌳",
    title: "Forest-Based Lifestyle",
    description: "Cows graze freely in the pollution-free Nagzira forest region, feeding on rich organic grasses and medicinal herbs."
  },
  {
    id: "holistic",
    icon: "🧘",
    title: "Holistic Living",
    description: "Reviving health and wellness by reconnecting people with honest food, nature, and peaceful rural living."
  }
];

export function WhyChooseUs() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeFeature = features.find((f) => f.id === activeId);

  // Absolute positioning styles for circular layout on desktop
  const getPositionStyles = (index: number) => {
    // 6 items: angles are 0, 60, 120, 180, 240, 300 degrees
    const angle = (index * 60 * Math.PI) / 180;
    const radius = 38; // Radius in percentage
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    
    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: "translate(-50%, -50%)"
    };
  };

  return (
    <section className="section-space overflow-hidden relative" style={{ background: "linear-gradient(160deg, #f1f6de 0%, #e3ecc1 60%, #f1f6de 100%)" }}>
      {/* Decorative organic shapes in logo palette */}
      <div className="absolute top-12 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(17,87,80,0.06)" }} />
      <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(155,184,74,0.10)" }} />

      <div className="shell relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex rounded-full border border-gold/35 bg-white px-6 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-forest shadow-sm">
            Our Promise
          </span>
          <h2 className="font-serif text-4xl leading-tight text-bark md:text-5xl">
            Why Choose Swanandji?
          </h2>
          <p className="text-base text-bark/70 max-w-xl mx-auto">
            Discover the values, methods, and natural environment that make our dairy products and farm experiences truly pure and honest.
          </p>
        </div>

        {/* Desktop View (Circular Orbital Interactive Layout) */}
        <div className="hidden lg:block relative w-[580px] h-[580px] mx-auto">
          {/* Central Card (Always displays Why Choose Swanandji) */}
          <div 
            className="absolute inset-0 m-auto w-80 h-80 rounded-full border-[3px] border-gold/45 p-8 flex flex-col items-center justify-center text-center shadow-soft select-none z-10 bg-white"
          >
            <div className="space-y-4 animate-fadeIn">
              <span className="text-4xl block">🌿</span>
              <h3 className="font-serif text-3xl font-bold text-bark leading-tight">
                Why Choose Swanandji?
              </h3>
              <p className="text-[13px] sm:text-sm leading-relaxed text-bark/70 max-w-[220px] mx-auto font-medium">
                Click on any surrounding feature to explore our values.
              </p>
            </div>
          </div>

          {/* Orbiting Feature Buttons and Popovers */}
          {features.map((feature, index) => {
            const isActive = activeId === feature.id;
            const isRightSide = index === 0 || index === 1 || index === 5;

            return (
              <div
                key={feature.id}
                style={getPositionStyles(index)}
                className="absolute w-36 h-36 z-20"
              >
                {/* Circular Button */}
                <button
                  type="button"
                  onClick={() => setActiveId(isActive ? null : feature.id)}
                  className={cn(
                    "w-full h-full rounded-full border flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-[1.06] select-none bg-white",
                    isActive
                      ? "border-forest bg-forest text-cream shadow-md font-bold scale-[1.04]"
                      : "border-bark/10 text-bark hover:border-gold/75 hover:shadow-soft"
                  )}
                  aria-label={feature.title}
                >
                  <span className="text-3xl mb-1.5">{feature.icon}</span>
                  <span className={cn(
                    "text-xs sm:text-[13px] font-bold text-center leading-snug max-w-[110px]",
                    isActive ? "text-cream" : "text-bark"
                  )}>
                    {feature.title}
                  </span>
                </button>

                {/* Popover Rectangle Card */}
                {isActive && (
                  <div
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-72 p-6 bg-white border-2 border-forest rounded-2xl shadow-card z-30 animate-fadeIn",
                      isRightSide 
                        ? "right-full mr-4" // For right-side buttons, show on their left (inner)
                        : "left-full ml-4"  // For left-side buttons, show on their right (inner)
                    )}
                  >
                    {/* Popover Pointer Arrow */}
                    <div 
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-forest transform",
                        isRightSide
                          ? "-right-[9px] translate-x-0.5 rotate-[135deg]"
                          : "-left-[9px] -translate-x-0.5 rotate-[-45deg]"
                      )}
                    />

                    {/* Popover Close Button */}
                    <button
                      type="button"
                      onClick={() => setActiveId(null)}
                      className="absolute top-2.5 right-2.5 text-bark/40 hover:text-bark/80 text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full hover:bg-cream/50 transition"
                      aria-label="Close details"
                    >
                      &times;
                    </button>

                    <div className="space-y-2 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{feature.icon}</span>
                        <h4 className="font-serif text-base font-bold text-forest leading-tight">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-[13px] leading-relaxed text-bark/90 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet View (Responsive Accordion Grid Layout) */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-4">
          {features.map((feature) => {
            const isOpen = activeId === feature.id;
            return (
              <div 
                key={feature.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 bg-white shadow-sm overflow-hidden",
                  isOpen ? "border-forest" : "border-bark/10 hover:border-gold/60"
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : feature.id)}
                  className="w-full flex items-center justify-between p-5 text-left transition hover:bg-cream/15"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl flex items-center justify-center w-12 h-12 rounded-xl bg-cream/70 text-forest">
                      {feature.icon}
                    </span>
                    <span className="font-semibold text-bark text-base md:text-lg">
                      {feature.title}
                    </span>
                  </div>
                  <span className={cn(
                    "text-xl transition-transform duration-300",
                    isOpen ? "rotate-180 text-forest" : "text-bark/40"
                  )}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div 
                  className={cn(
                    "transition-all duration-300 ease-in-out px-5 bg-cream/10",
                    isOpen ? "max-h-32 pb-5 opacity-100 border-t border-bark/5 pt-4" : "max-h-0 opacity-0 pointer-events-none"
                  )}
                >
                  <p className="text-sm md:text-base leading-relaxed text-bark/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
