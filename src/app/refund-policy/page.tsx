import { LegalPage } from "@/components/legal-page";

const sections = [
  {
    title: "Product Orders",
    content: (
      <>
        <p>
          Because many of our items are fresh, perishable, or prepared in small
          batches, refunds or replacements are typically reviewed on a case by
          case basis.
        </p>
        <p>
          If your order arrives damaged, incorrect, or spoiled, please contact
          us promptly with your order details so we can review and support a
          fair resolution.
        </p>
      </>
    )
  },
  {
    title: "Stay Bookings and Experiences",
    content: (
      <>
        <p>
          Refunds for eco-stays, village experiences, or Gau Seva-related
          bookings depend on the timing of cancellation and whether arrangements
          have already been confirmed.
        </p>
        <p>
          We encourage guests to contact us as early as possible if plans
          change, so we can assess rescheduling or refund options.
        </p>
      </>
    )
  },
  {
    title: "Processing Timelines",
    content: (
      <>
        <p>
          When a refund is approved, processing time may vary depending on the
          payment method used and any banking delays outside our control.
        </p>
        <p>
          We will communicate the status of approved refunds directly with the
          customer.
        </p>
      </>
    )
  },
  {
    title: "How to Request Support",
    content: (
      <>
        <p>
          To request a refund, replacement, or booking review, please contact
          us with your name, order or booking details, and a short description
          of the issue.
        </p>
        <p>
          Our team will review each request carefully and respond with the next
          steps.
        </p>
      </>
    )
  }
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Refunds"
      title="Refund Policy"
      intro="This refund policy outlines how Swanandji Gaushala & Eco-Stays handles refund, cancellation, and replacement requests for products, stays, and experiences."
      sections={sections}
    />
  );
}
