import { GauSevaForm } from "@/components/gau-seva-form";
import { SectionHeading } from "@/components/section-heading";
import { VisualPlaceholder } from "@/components/visual-placeholder";

const activities = [
  "Feeding cows with organic fodder",
  "Assisting with daily Gau Seva routines",
  "Observing natural grazing in forest surroundings",
  "Learning traditional cow care methods",
  "Spending mindful, peaceful time with cows"
];

const benefits = [
  "Reduces stress and anxiety",
  "Enhances mental clarity and peace",
  "Builds a strong connection with nature",
  "Encourages compassion and mindfulness",
  "Supports emotional and spiritual well-being"
];

const audience = [
  "Families and children",
  "Students and educational groups",
  "Nature lovers",
  "Spiritual seekers",
  "Individuals seeking a peaceful retreat"
];

export default function GauSevaPage() {
  return (
    <div className="shell section-space space-y-20">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Gau Seva"
          title="Reconnect with tradition, nature, and spirituality"
          description="At Swanandji, Gau Seva is not just an activity. It is a deeply rooted practice of compassion, mindfulness, and service that helps visitors reconnect with Indian culture and inner peace."
        />
        <VisualPlaceholder
          title="Peaceful seva environment"
          subtitle="A dedicated visual block for real Gaushala and founder-led Gau Seva photography."
          className="min-h-[300px] md:min-h-[450px]"
        />
      </section>

      <section className="space-y-8">
        <article className="rounded-[2rem] border border-bark/10 bg-white p-8 md:p-12 shadow-card">
          <SectionHeading
            eyebrow="Activities Included"
            title="A hands-on, mindful experience"
            description="Spend time with over 150+ Gir cows in a natural and ethical environment."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity} className="rounded-[1.5rem] bg-cream/70 p-5 text-base text-bark font-medium">
                ✓ {activity}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-bark/10 bg-white p-8 md:p-12 shadow-card">
          <SectionHeading
            eyebrow="Our Approach"
            title="Natural care with no shortcuts"
            description="No hormonal injections, Ayurvedic support, forest grazing, soothing music, and clean surroundings shape our daily philosophy."
          />
          <p className="mt-8 rounded-[1.5rem] bg-bark p-6 text-lg leading-8 text-cream/85 text-center font-medium">
            We believe: “Happy cows produce pure and healthy milk.”
          </p>
        </article>
      </section>

      <section className="space-y-8">
        <article className="rounded-[2rem] border border-bark/10 bg-white p-8 md:p-12 shadow-card">
          <SectionHeading
            eyebrow="Benefits"
            title="Spiritual and wellness value"
            description="Gau Seva supports emotional calm and mindful living as much as it supports cultural understanding."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.5rem] bg-cream/70 p-5 text-base text-bark font-medium">
                💚 {benefit}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-bark/10 bg-white p-8 md:p-12 shadow-card">
          <SectionHeading
            eyebrow="Who Should Visit"
            title="A family-friendly experience for all ages"
            description="Perfect for those looking for stillness, learning, and meaningful time in nature."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {audience.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-cream/70 p-5 text-base text-bark font-medium">
                👥 {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="space-y-8 rounded-[2rem] border border-bark/10 bg-white p-8 md:p-12 shadow-card">
        <SectionHeading
          eyebrow="Book Your Experience"
          title="Spend a meaningful day with Gau Mata"
          description="Share your preferred date and group size. We will help arrange a peaceful and welcoming Gau Seva visit."
        />
        <div className="max-w-3xl">
          <GauSevaForm />
        </div>
      </section>
    </div>
  );
}
