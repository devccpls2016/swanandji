import { Suspense } from "react";

import { CheckoutClient } from "@/components/checkout-client";
import { SectionHeading } from "@/components/section-heading";

export default function CheckoutPage() {
  return (
    <div className="shell section-space space-y-12">
      <SectionHeading
        eyebrow="Checkout"
        title="Complete your order inquiry"
        description="Share your delivery details and we will contact you to confirm product availability, shipping, and final order fulfillment."
        align="center"
      />
      <Suspense fallback={<div className="rounded-[2rem] border border-bark/10 bg-white p-6 text-center shadow-card">Loading checkout...</div>}>
        <CheckoutClient />
      </Suspense>
    </div>
  );
}
