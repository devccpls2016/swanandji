"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  itemWidth?: number; // Optional width to scroll by
}

export function Carousel({ children, className, itemWidth = 320 }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [children]);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      // Scroll by one visible width, or the defined item width, whichever is smaller/cleaner
      const scrollAmount = Math.min(clientWidth * 0.8, itemWidth * 2); 
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // We check scroll again shortly after the smooth scroll starts
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>

      {showLeftArrow && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-4 bg-white/95 text-forest p-3 rounded-full shadow-lg border border-forest/10 hover:bg-white hover:scale-110 transition-all z-10"
          aria-label="Scroll left"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {showRightArrow && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-4 bg-white/95 text-forest p-3 rounded-full shadow-lg border border-forest/10 hover:bg-white hover:scale-110 transition-all z-10"
          aria-label="Scroll right"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
