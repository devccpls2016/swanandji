"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { VisualPlaceholder } from "@/components/visual-placeholder";
import { testimonials, siteContact, farmhouseRooms } from "@/content/site";
import { formatCurrency } from "@/lib/utils";

export default function StayExplorePage() {
  return (
    <div className="shell section-space space-y-20 pt-24 md:pt-32">
      {/* Hero Intro */}
      <section className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <SectionHeading
          eyebrow="Stay & Explore"
          title="Rural comfort, forest adventure, and authentic village living"
          description="Slow down near the forests of Nagzira and Koka. From restorative mud-walled cottages and stargazing campsites to guided safaris and Gau Seva, experience a meaningful return to your roots."
        />
        <VisualPlaceholder
          title="Nature-led Sanctuary"
          subtitle="Explore the gaushala surroundings, forest pathways, and peaceful eco-lodging."
          className="min-h-[420px]"
        />
      </section>

      {/* 1. Farmhouse Stay */}
      <section id="farmhouse-stay" className="space-y-10">
        <div className="bg-gradient-to-br from-cream/40 via-white to-sand/15 rounded-[2.5rem] border border-gold/25 p-6 md:p-10 shadow-card space-y-8">
          <div>
            <SectionHeading
              eyebrow="Lodging"
              title="Farmhouse Stay"
              description="A calm village retreat with organic meals, forest views, and a restorative pace of life close to the Gaushala."
            />
            <div className="mt-5 p-4 rounded-xl bg-forest/5 border border-forest/10 inline-block">
              <p className="text-sm font-bold text-forest flex items-center gap-2">
                <span className="text-lg">🏡</span> Note: To book the entire villa, please contact us with group details and requirements.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {farmhouseRooms.map((room) => (
              <article key={room.id} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-bark/10 bg-white hover:shadow-soft transition-all duration-300 relative">
                
                {/* Top Image Section - Clickable */}
                <Link href={`/farmhouse-stay/${room.id}`} className="relative flex h-56 items-center justify-center overflow-hidden cursor-pointer">
                  <VisualPlaceholder 
                    title={`${room.name}`} 
                    subtitle="Room View" 
                    className="w-full h-full transform group-hover:scale-105 transition-transform duration-500 rounded-none" 
                    accent="from-emerald-100 to-stone-50"
                  />
                  {/* Status Badge */}
                  <div className={`absolute left-0 top-0 rounded-br-2xl px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest shadow-sm z-10 select-none ${
                    room.status === 'Available' ? 'bg-green-400 text-green-900' : 'bg-red-400 text-white'
                  }`}>
                    {room.status}
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="space-y-1">
                    <Link href={`/farmhouse-stay/${room.id}`}>
                      <h3 className="font-serif text-lg font-bold text-bark group-hover:text-forest transition-colors leading-snug cursor-pointer">
                        {room.name}
                      </h3>
                    </Link>
                    <p className="text-[13px] leading-relaxed text-bark/65 line-clamp-2">
                      {room.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 bg-cream/55 border border-bark/5 rounded-xl p-2.5">
                     <span className="text-[11px] font-bold text-bark flex items-center gap-2">
                       <span>👥</span> {room.capacity}
                     </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-bark/5">
                    <p className="text-lg font-extrabold text-forest leading-none">
                      {formatCurrency(room.price)}
                      <span className="text-[9px] text-bark/50 font-semibold uppercase tracking-wider block mt-1">per night</span>
                    </p>
                    
                    <Link 
                      href={`/farmhouse-stay/${room.id}`}
                      className="border-2 border-forest text-forest hover:bg-forest hover:text-cream px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft active:translate-y-0 shadow-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Village Camping */}
      <section id="village-camping" className="space-y-10">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[2.5rem] border border-orange-200/50 p-6 md:p-10 shadow-card flex flex-col lg:flex-row gap-10 items-center overflow-hidden relative">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
          
          <div className="flex-1 space-y-7 relative z-10">
            <SectionHeading
              eyebrow="Adventure"
              title="Village Camping"
              description="An adventure-led village stay with tents, bonfire evenings, stargazing, and peaceful nights near nature."
            />
            
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-bark/5">
                 <span className="text-[10px] uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1">Group Size</span>
                 <span className="text-base font-semibold text-bark">1 - 15 Guests</span>
               </div>
               <div className="p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-bark/5">
                 <span className="text-[10px] uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1">Pricing</span>
                 <span className="text-base font-semibold text-bark">Provided on Enquiry</span>
               </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-bark/5 shadow-sm text-sm text-bark/80 leading-relaxed font-medium">
              <p className="font-bold mb-2 text-bark border-b border-bark/5 pb-2">Pricing is customized based on:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <li className="flex items-center gap-2"><span className="text-gold">✦</span> Group size</li>
                <li className="flex items-center gap-2"><span className="text-gold">✦</span> Activities selected</li>
                <li className="flex items-center gap-2"><span className="text-gold">✦</span> Experience requirements</li>
                <li className="flex items-center gap-2"><span className="text-gold">✦</span> Special requirements</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="btn-primary">
                Send Enquiry Form
              </Link>
              <a href={`tel:${siteContact.phonePrimary.replace(/\s+/g, "")}`} className="btn-secondary flex items-center gap-2 bg-white hover:bg-cream">
                <span>📞</span> Call Directly
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-[45%] h-full relative z-10">
             <VisualPlaceholder 
               title="Village Camping" 
               subtitle="Tents and Bonfires under the stars" 
               className="h-full min-h-[350px] rounded-[2rem] shadow-soft"
               accent="from-amber-200 to-orange-100"
             />
          </div>
        </div>
      </section>

      {/* 3. Jungle Safari & 4. Cycle Safari */}
      <section className="grid gap-8 lg:grid-cols-2">
        {/* Jungle Safari */}
        <div id="jungle-safari" className="rounded-[2.5rem] border border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 shadow-card flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-soft">
           <div className="absolute top-0 right-0 w-56 h-56 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
           <div className="space-y-6 relative z-10">
             <div>
               <span className="inline-block rounded-full bg-forest/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-forest mb-4">
                 Guided Tour
               </span>
               <h3 className="font-serif text-3xl md:text-4xl text-bark font-bold">Jungle Safari</h3>
               <p className="text-sm md:text-base text-bark/75 font-medium mt-3 leading-relaxed">Explore nearby forests with guided access to biodiversity, wildlife, and the immersive energy of the jungle.</p>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-bark/5">
                 <span className="text-[10px] uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1">Capacity</span>
                 <span className="text-sm font-semibold text-bark">1 - 6 persons</span>
               </div>
               <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-bark/5">
                 <span className="text-[10px] uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1">Price</span>
                 <span className="text-sm font-bold text-forest">{formatCurrency(6000)} <span className="text-[10px] font-medium text-bark/60">/ safari</span></span>
               </div>
             </div>

             <div className="p-5 rounded-2xl bg-white border border-bark/5 shadow-sm text-sm text-bark/80">
               <p className="font-bold text-bark mb-3 border-b border-bark/5 pb-2">Safari Inclusions:</p>
               <ul className="grid grid-cols-2 gap-y-3 gap-x-2 font-medium">
                 <li className="flex items-center gap-2"><span className="text-forest">✓</span> Forest Entry Fees</li>
                 <li className="flex items-center gap-2"><span className="text-forest">✓</span> Required Permits</li>
                 <li className="flex items-center gap-2"><span className="text-forest">✓</span> Gypsy Vehicle</li>
                 <li className="flex items-center gap-2"><span className="text-forest">✓</span> Expert Guide</li>
               </ul>
             </div>
           </div>
           <div className="mt-8 relative z-10">
             <Link href="/contact" className="btn-primary w-full text-center py-3.5">
                Book Safari Enquiry
             </Link>
           </div>
        </div>

        {/* Cycle Safari */}
        <div id="cycle-safari" className="rounded-[2.5rem] border border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-sky-50 p-8 md:p-10 shadow-card flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:shadow-soft">
           <div className="absolute top-0 left-0 w-56 h-56 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
           <div className="space-y-6 relative z-10">
             <div>
               <span className="inline-block rounded-full bg-sky-600/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-800 mb-4">
                 Active Exploration
               </span>
               <h3 className="font-serif text-3xl md:text-4xl text-bark font-bold">Cycle Safari</h3>
               <p className="text-sm md:text-base text-bark/75 font-medium mt-3 leading-relaxed">A guided cycling experience riding through scenic village paths, rural jungle routes, and lush green surroundings.</p>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-bark/5">
                 <span className="text-[10px] uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1">Capacity</span>
                 <span className="text-sm font-semibold text-bark">Individual or Groups</span>
               </div>
               <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-bark/5">
                 <span className="text-[10px] uppercase tracking-[0.15em] text-bark/50 font-bold block mb-1">Price</span>
                 <span className="text-sm font-semibold text-bark">Provided on Enquiry</span>
               </div>
             </div>

             <div className="p-5 rounded-2xl bg-white border border-bark/5 shadow-sm text-sm text-bark/80 font-medium">
               <p className="font-bold text-bark mb-1 border-b border-bark/5 pb-2">Pricing Details:</p>
               <p className="mb-3 pt-2 text-xs">Bicycle rental charges may vary. Final pricing depends on:</p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                 <li className="flex items-center gap-2"><span className="text-sky-600">🚲</span> Group size</li>
                 <li className="flex items-center gap-2"><span className="text-sky-600">🚲</span> Route selected</li>
                 <li className="flex items-center gap-2"><span className="text-sky-600">🚲</span> Duration</li>
               </ul>
             </div>
           </div>
           <div className="mt-8 relative z-10">
             <Link href="/contact" className="btn-primary w-full text-center py-3.5 bg-sky-700 hover:bg-sky-800 hover:shadow-sky-800/30">
                Book Safari Enquiry
             </Link>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <SectionHeading
            eyebrow="Guest Reviews"
            title="Stay & Exploration experiences that feel restorative"
            description="Read the genuine moments and stories our guests consistently share about their time at Swanandji."
            align="center"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-b from-white to-cream/25 p-8 shadow-card flex flex-col justify-between hover:shadow-soft hover:border-gold/50 transition-all duration-300 group hover:scale-[1.01]"
            >
              <div className="absolute right-6 top-4 font-serif text-[7.5rem] leading-none text-gold/10 select-none group-hover:scale-110 transition duration-300">
                &ldquo;
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex gap-0.5 text-gold text-base">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="text-sm md:text-base leading-relaxed text-bark/85 font-medium italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-bark/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-bark group-hover:text-forest transition duration-300">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-bark/50 font-semibold uppercase tracking-[0.1em] mt-0.5">
                    {testimonial.location}
                  </p>
                </div>
                <span className="text-2xl opacity-45 select-none">🌿</span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
