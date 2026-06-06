import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/content/site";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials - Swanandji Gaushala",
  description:
    "Read honest reviews and testimonials from our guests and customers about our pure dairy products and eco-stays near Koka Jungle."
};

export default function TestimonialsPage() {
  return (
    <div className="shell section-space space-y-12">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Customers Say"
        description="Lived experiences, pure products, and warm memories shared by our community."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-[2rem] border border-bark/10 bg-white p-8 shadow-card flex flex-col justify-between"
          >
            <div>
              <p className="text-gold tracking-wider">
                {"★".repeat(testimonial.rating)}
              </p>
              <p className="mt-4 text-base leading-8 text-bark/75">
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
    </div>
  );
}
