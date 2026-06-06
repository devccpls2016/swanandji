import { SectionHeading } from "@/components/section-heading";
import { YouTubePlayer } from "@/components/youtube-player";

export default function VideosPage() {
  return (
    <main className="min-h-screen pb-24" style={{ backgroundColor: "#e3ecc1" }}>
      <section className="section-space pt-24 md:pt-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Videos"
            title="A Visual Journey Through Purity"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-bark/80">
            Explore our collection of videos showcasing the daily rhythms, natural beauty, and traditional practices at Swanandji Gaushala.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <YouTubePlayer videoId="HXSxGpdui6A" title="Swanandji Gaushala Story" />
            <YouTubePlayer videoId="R9V4o_54gq4" title="Morning Gau Seva & Rhythms" />
            <YouTubePlayer videoId="HXSxGpdui6A" title="A2 Milk Process" />
            <YouTubePlayer videoId="R9V4o_54gq4" title="Organic Farming" />
            <YouTubePlayer videoId="HXSxGpdui6A" title="Eco-Stays Tour" />
            <YouTubePlayer videoId="R9V4o_54gq4" title="Life at Swanandji" />
          </div>
        </div>
      </section>
    </main>
  );
}
