"use client";

import { useState } from "react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  thumbnailUrl?: string; // Optional custom thumbnail URL
}

export function YouTubePlayer({
  videoId,
  title = "Swanandji Gaushala & Eco-Stays",
  thumbnailUrl
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fallback to high-quality YouTube thumbnail if custom one isn't provided
  const thumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-bark/10 bg-white p-3 shadow-card aspect-video w-full transition-all duration-300 hover:shadow-soft">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative block h-full w-full overflow-hidden rounded-[1.5rem] focus:outline-none"
          aria-label={`Play video: ${title}`}
        >
          {/* Thumbnail Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-bark/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-forest shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 translate-x-0.5 transition-transform duration-300"
              >
                <path d="M8 5.14v14c0 .86.94 1.39 1.66.9l10-7c.61-.43.61-1.37 0-1.8l-10-7C8.94 3.75 8 4.28 8 5.14z" />
              </svg>
            </div>
          </div>
          
          {/* Video Tag / Title */}
          <div className="absolute bottom-6 left-6 text-left">
            <span className="inline-flex rounded-full bg-forest/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream backdrop-blur-sm">
              Watch Tour
            </span>
            <h4 className="mt-2 font-serif text-lg font-semibold text-white drop-shadow-md">
              {title}
            </h4>
          </div>
        </button>
      ) : (
        <iframe
          className="h-full w-full rounded-[1.5rem]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0"
        />
      )}
    </div>
  );
}
