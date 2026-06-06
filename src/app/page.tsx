import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { HeroSlider } from "@/components/hero-slider";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { VisualPlaceholder } from "@/components/visual-placeholder";
import { WhyChooseUs } from "@/components/why-choose-us";
import { YouTubePlayer } from "@/components/youtube-player";
import {
  galleryMoments,
  locationPoints,
  products,
  testimonials
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="section-space" style={{ background: "#f1f6de" }}>
        <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="About Swanandji"
            title="A Gaushala shaped by devotion, purity, and peaceful living"
            description="Nestled beside the forests of Nagzira, SwanandJi is a Gir cow gaushala, eco-stay, and slow living experience rooted in purity, nature, and Indian traditions. Home to 150+ Gir cows, we aim to reconnect people with healthier food, peaceful living, and the simplicity modern life has slowly forgotten."
          />
          <YouTubePlayer videoId="R9V4o_54gq4" title="Swanandji Gaushala Tour" />
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="FARM FRESH"
            title="Featured Products"
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: "#e3ecc1" }}>
        <div className="shell">
          <SectionHeading
            eyebrow="Videos & Gallery"
            title="A Visual Journey Through Purity, Sustainability & Nature-Inspired Living"
            align="center"
          />
          
          <div className="mt-12 relative px-4 sm:px-12">
            <Carousel itemWidth={400} className="w-full">
              <div className="w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 snap-start">
                <YouTubePlayer
                  videoId="HXSxGpdui6A"
                  title="Swanandji Gaushala Story"
                />
              </div>
              <div className="w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 snap-start">
                <YouTubePlayer
                  videoId="R9V4o_54gq4"
                  title="Morning Gau Seva & Rhythms"
                />
              </div>
              <div className="w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0 snap-start">
                <YouTubePlayer
                  videoId="HXSxGpdui6A"
                  title="More Videos Coming Soon"
                />
              </div>
            </Carousel>
          </div>

          <div className="mt-12 md:mt-16 relative px-4 sm:px-12">
            <Carousel itemWidth={380} className="w-full">
              {galleryMoments.map((moment, index) => (
                <VisualPlaceholder
                  key={moment}
                  title={moment}
                  subtitle="Swap with real photography when ready."
                  className="w-[280px] sm:w-[320px] md:w-[380px] h-[300px] flex-shrink-0 snap-start rounded-[2rem]"
                  accent={
                    index % 2 === 0
                      ? "from-sand/60 via-cream to-parchment/40"
                      : "from-parchment/50 via-cream to-sand/40"
                  }
                />
              ))}
            </Carousel>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/videos" className="btn-secondary">
              View More Videos
            </Link>
            <Link href="/gallery" className="btn-secondary">
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: "linear-gradient(135deg, #115750 0%, #0b3b36 100%)" }}>
        <div className="shell flex flex-col items-center text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Our Journey
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-6xl">
            A Story, A Tradition, A Purpose
          </h2>
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-cream/80 md:text-lg">
            <p>
              Swanandji is more than a dairy farm—it is a mission. Founded by
              Shri Nandlal Gahane, after dedicating 30 years to the construction
              industry, Swanandji Gaushala was born from his realization of the
              harmful practices in the modern dairy sector.
            </p>
            <p>
              Driven by a passion to serve Gau Mata and revive traditional
              Indian lifestyles, he established this Gaushala as a center for
              purity, sustainability, and ethical farming.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-semibold transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "#e3ecc1", color: "#115750" }}
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>


      <section className="section-space" style={{ background: "#e3ecc1" }}>
        <div className="shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            align="center"
          />
          <div className="mt-12 flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
            {testimonials.slice(0, 3).map((testimonial) => (
              <article
                key={testimonial.id}
                className="w-[300px] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-start rounded-[2rem] border border-bark/10 bg-white p-6 shadow-card flex flex-col justify-between"
              >
                <div>
                  <p className="text-gold">
                    {"★".repeat(testimonial.rating)}
                  </p>
                  <p className="mt-3 text-base leading-8 text-bark/75">
                    “{testimonial.quote}”
                  </p>
                </div>
                <div className="mt-6 border-t border-bark/5 pt-4">
                  <p className="font-semibold text-bark">{testimonial.author}</p>
                  <p className="text-sm text-bark/60">{testimonial.location}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/testimonials" className="btn-secondary">
              View More Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space" style={{ background: "#f1f6de" }}>
        <div className="shell">
          <div className="rounded-[3rem] border border-forest/20 p-8 md:p-12 text-cream shadow-card" style={{ background: "linear-gradient(135deg, #115750 0%, #0b3b36 100%)" }}>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-gold font-semibold">
                    Location Advantage
                  </p>
                  <h3 className="mt-4 font-serif text-4xl md:text-5xl leading-tight text-white">
                    A pollution-free natural environment near Koka Jungle
                  </h3>
                  <p className="mt-4 text-base leading-8 text-cream/70">
                    Swanandji is blessed with clean air, forest water, and wild grazing grounds that ensure our cows remain happy, healthy, and stress-free.
                  </p>
                </div>
                <div className="grid gap-3 pt-2">
                  {locationPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm transition hover:bg-white/10"
                    >
                      <span className="text-gold mt-0.5">📍</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.688755678832!2d79.8540412143003!3d21.19280528590824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b13c638bd4b35%3A0xebe03eeb6b52ac17!2sSwanandji%20Gaushala%20%26%20farmstays!5e0!3m2!1sen!2sin!4v1716616000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Swanandji Gaushala Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
