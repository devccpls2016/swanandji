import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { VisualPlaceholder } from "@/components/visual-placeholder";

export default function ContactPage() {
  return (
    <div className="shell section-space space-y-16">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Contact Us"
          title="Get in touch for products, stays, experiences, or visits"
          description="We are here to help you order pure dairy products, plan a farm stay, or schedule a meaningful visit to Swanandji Gaushala."
        />
        <VisualPlaceholder
          title="Map and visit imagery"
          subtitle="Replace this area with a live Google Map embed or actual aerial/site photography later."
          className="min-h-[400px]"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6 rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-forest/70">Visit Us</p>
            <h2 className="mt-3 font-serif text-4xl text-bark">
              Swanandji Gaushala & Eco-Stays
            </h2>
            <p className="mt-4 text-sm leading-7 text-bark/75">
              Sonegaon Village, Near Koka Jungle (500 meters), Sakoli-Tumsar State
              Highway, Bhandara District, Maharashtra, India.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-bark/80">
            <div className="rounded-[1.5rem] bg-cream/70 p-4">
              <strong>Phone:</strong> +91 9423689052 / +91 9423178952
            </div>
            <div className="rounded-[1.5rem] bg-cream/70 p-4">
              <strong>Email:</strong> info@swanandjigaushala.com
            </div>
            <div className="rounded-[1.5rem] bg-cream/70 p-4">
              <strong>Working Hours:</strong> Daily, 7:00 AM - 7:00 PM
            </div>
            <div className="rounded-[1.5rem] bg-cream/70 p-4">
              <strong>Delivery:</strong> Farm-fresh products available across India.
            </div>
          </div>

          <div className="rounded-[2rem] border border-dashed border-bark/15 bg-cream/40 p-6 text-sm leading-7 text-bark/75">
            Google Map placeholder: embed the final location link here during content
            handoff.
          </div>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
