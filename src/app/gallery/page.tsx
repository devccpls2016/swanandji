import { SectionHeading } from "@/components/section-heading";
import { VisualPlaceholder } from "@/components/visual-placeholder";
import { galleryMoments } from "@/content/site";

export default function GalleryPage() {
  // We'll duplicate some moments to fill the gallery page if there aren't enough
  const galleryItems = [...galleryMoments, "Organic Farms", "Morning Prayers", "Eco-Cottages", "Village Walk", "Traditional Cooking"];

  return (
    <main className="min-h-screen pb-24" style={{ backgroundColor: "#f1f6de" }}>
      <section className="section-space pt-24 md:pt-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Image Gallery"
            title="Experience the Beauty of Swanandji"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-bark/80">
            A glimpse into the serene environment, our beloved Gir cows, and the pure living experience at our Eco-Stays.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((moment, index) => (
              <VisualPlaceholder
                key={`${moment}-${index}`}
                title={moment}
                subtitle="Swap with real photography when ready."
                className="w-full h-[300px] rounded-[2rem]"
                accent={
                  index % 2 === 0
                    ? "from-sand/60 via-cream to-parchment/40"
                    : "from-parchment/50 via-cream to-sand/40"
                }
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
