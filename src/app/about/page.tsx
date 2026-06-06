import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="shell section-space space-y-20">
      <section className="mx-auto max-w-4xl text-center text-balance">
        <SectionHeading
          eyebrow="Our Story"
          title="A journey from construction to compassion, purity, and purpose"
          description="After more than 30 years in the construction industry, Shri Nandlal Gahan chose a more meaningful path after witnessing the harmful adulteration and distrust surrounding modern dairy. Swanandji Gaushala was born from a desire to restore purity, protect health, and revive ethical Indian traditions."
          align="center"
        />
      </section>

      <section className="space-y-12">
        <SectionHeading
          eyebrow="Visionaries"
          title="The People Behind Swanandji"
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-sand font-serif text-2xl text-bark flex-shrink-0">
                  N
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-bark">Shree Nandlalji Gahane</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-forest/70 font-semibold mt-1">
                    Co-Visionary | Gau Sevak | Founder
                  </p>
                </div>
              </div>
              <p className="text-base leading-8 text-bark/75">
                “For me, Gau Seva is not just a responsibility, it is a deep devotion that comes from the heart. It is a path that connects us with our roots, our culture, and the values of compassion and care. Through Swanandji, I have taken a humble step towards restoring purity in our daily lives. My vision is to inspire people to embrace a simpler, healthier, and more meaningful way of living.”
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-sand font-serif text-2xl text-bark flex-shrink-0">
                  S
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-bark">Smt. Swati Gahane</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-forest/70 font-semibold mt-1">
                    Co-Visionary | प्रेरणा स्त्रोत | Co-Founder
                  </p>
                </div>
              </div>
              <p className="text-base leading-8 text-bark/75">
                “Swanandji is built with love and care, where every product and every experience reflects our deep belief in simplicity, purity, and true happiness. Every small detail, from the way we nurture our cows to the way we serve our guests, is guided by compassion and authenticity. It is not just a place you visit, but a feeling you carry with you—a feeling of peace, balance, and inner joy.”
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <article className="rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-white via-cream/20 to-sand/15 p-8 md:p-10 shadow-card relative overflow-hidden flex flex-col justify-between group">
          {/* Subtle gold watermark blob */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/5 blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xl">✨</span>
              <p className="text-xs uppercase tracking-[0.28em] text-forest/70 font-bold">Our Vision</p>
            </div>
            
            <h2 className="font-serif text-3xl md:text-[2.25rem] text-bark leading-snug font-semibold">
              To build a community rooted in natural living, Gau Seva, sustainability, and traditional Indian values
            </h2>
            
            <div className="h-0.5 w-16 bg-gold/55 rounded-full" />
            
            <p className="font-serif italic text-lg md:text-xl text-forest leading-relaxed pl-4 border-l-2 border-gold/45 mt-4">
              &mdash; where people reconnect with nature, health, and themselves.
            </p>
          </div>
        </article>

        <article className="rounded-[2.5rem] border border-bark/20 bg-bark p-8 md:p-10 shadow-card relative overflow-hidden flex flex-col justify-between group">
          {/* Subtle forest green watermark blob */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-forest/15 blur-2xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎯</span>
              <p className="text-xs uppercase tracking-[0.28em] text-gold font-bold">Our Mission</p>
            </div>
            
            <h2 className="font-serif text-3xl md:text-[2.25rem] text-cream leading-snug font-semibold">
              At SwanandJi, we aim to blend traditional Indian wisdom with modern conscious living through:
            </h2>
            
            <div className="h-0.5 w-16 bg-gold/55 rounded-full" />
            
            <ul className="grid gap-4 sm:grid-cols-2 pt-2">
              <li className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition duration-300">
                <span className="text-gold text-xl flex-shrink-0 mt-0.5">🐄</span>
                <span className="text-sm md:text-base text-cream/90 font-medium">Ethical Gau Seva</span>
              </li>
              <li className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition duration-300">
                <span className="text-gold text-xl flex-shrink-0 mt-0.5">🥛</span>
                <span className="text-sm md:text-base text-cream/90 font-medium">Pure Gir cow products</span>
              </li>
              <li className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition duration-300">
                <span className="text-gold text-xl flex-shrink-0 mt-0.5">🌳</span>
                <span className="text-sm md:text-base text-cream/90 font-medium">Eco stays &amp; forest experiences</span>
              </li>
              <li className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition duration-300">
                <span className="text-gold text-xl flex-shrink-0 mt-0.5">🌱</span>
                <span className="text-sm md:text-base text-cream/90 font-medium">Sustainable farming &amp; diet</span>
              </li>
              <li className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/5 transition duration-300">
                <span className="text-gold text-xl flex-shrink-0 mt-0.5">👥</span>
                <span className="text-sm md:text-base text-cream/90 font-medium">Community-driven natural living</span>
              </li>
            </ul>
          </div>
        </article>
      </section>

      <section className="space-y-12">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Our Farm &amp; Sanctuary"
            title="A living ecosystem built on tradition, care, and transparency"
            description="Swanandji is situated on organic lands bordered by the Nagzira forest. Here, we honor natural rhythms and traditional Indian agricultural wisdom to provide pure sustenance."
          />
        </div>

        {/* Modern Farm Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-br from-white to-cream/20 p-8 text-center shadow-card relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gold/5 blur-xl pointer-events-none group-hover:scale-110 transition duration-500" />
            <p className="font-serif text-5xl font-bold text-forest leading-none">5+</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Years of Gau Seva</p>
          </div>
          
          <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-br from-white to-cream/20 p-8 text-center shadow-card relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gold/5 blur-xl pointer-events-none group-hover:scale-110 transition duration-500" />
            <p className="font-serif text-5xl font-bold text-forest leading-none">2,000+</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Families Served</p>
          </div>

          <div className="rounded-[2rem] border border-gold/30 bg-gradient-to-br from-white to-cream/20 p-8 text-center shadow-card relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gold/5 blur-xl pointer-events-none group-hover:scale-110 transition duration-500" />
            <p className="font-serif text-5xl font-bold text-forest leading-none">125</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-bark/60">Gir Cows Cared For</p>
          </div>
        </div>

        {/* Modern Farm Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest">🌳</span>
            <div>
              <h3 className="font-serif text-xl font-bold text-bark">Free Forest Grazing</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                Our cows graze freely in the nearby Nagzira forest reserve, feeding on local grass, herbs, and natural shrubs.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest">🌱</span>
            <div>
              <h3 className="font-serif text-xl font-bold text-bark">Natural &amp; Conscious Breeding</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                We practice strictly natural, ethical, and conscious breeding protocols with zero artificial manipulation or stress.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest">🐄</span>
            <div>
              <h3 className="font-serif text-xl font-bold text-bark">Ethical &amp; Natural Care</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                A sanctuary-like environment focusing on hygiene, affection, traditional songs, and Ayurvedic herbal wellness care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Cow Care Philosophy"
          title="Stress-free, hormone-free, and deeply respectful"
          description="Our approach to Gau Mata care focuses on clean surroundings, organic support, and the belief that happy cows produce pure, healthy, and high-quality milk."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest flex-shrink-0">🌿</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-bark">Organic Green Fodder</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                Fresh-cut green fodder grown on our own organic lands, ensuring clean and chemical-free nutrition.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest flex-shrink-0">🍃</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-bark">Neem, Herbs &amp; Medicines</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                Ayurvedic support systems like neem leaves, natural herbs, and holistic medicines to foster natural immunity.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest flex-shrink-0">💉</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-bark">No Hormonal Injections</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                Strictly zero hormonal treatments, steroids, or synthetic stimulants used to boost milk yield.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest flex-shrink-0">🎵</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-bark">Soothing Music &amp; Care</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                A serene environment filled with soothing music and Vedic chants to reduce cow stress and promote joy.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex gap-4 items-start hover:border-gold/50 transition duration-300">
            <span className="text-3xl p-3 bg-cream rounded-2xl text-forest flex-shrink-0">💧</span>
            <div>
              <h3 className="font-serif text-lg font-bold text-bark">Calcium-Rich Water</h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/70">
                Cows are supplied with pristine, calcium-rich drinking water that naturally supports bone strength and milk quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
