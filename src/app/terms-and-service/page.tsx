import { LegalPage } from "@/components/legal-page";

const sections = [
  {
    title: "Use of Our Website",
    content: (
      <>
        <p>
          By accessing Swanandji Gaushala & Eco-Stays, you agree to use the
          website only for lawful purposes, including learning about our
          services, booking experiences, submitting inquiries, and purchasing
          products.
        </p>
        <p>
          You must not misuse the website, interfere with its operation, or
          submit false, misleading, or abusive information through our forms.
        </p>
      </>
    )
  },
  {
    title: "Orders, Bookings, and Availability",
    content: (
      <>
        <p>
          Product orders, stay bookings, and Gau Seva requests are subject to
          availability and confirmation. We may update pricing, product
          descriptions, availability, or experience details without prior
          notice.
        </p>
        <p>
          We reserve the right to decline or cancel requests if the information
          provided is incomplete, payment cannot be verified, or the requested
          service is unavailable.
        </p>
      </>
    )
  },
  {
    title: "Content and Intellectual Property",
    content: (
      <>
        <p>
          All website content, including branding, text, photographs, graphics,
          and layout, belongs to Swanandji Gaushala & Eco-Stays unless stated
          otherwise.
        </p>
        <p>
          You may not copy, republish, or commercially reuse this content
          without written permission.
        </p>
      </>
    )
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          We aim to keep the website accurate and updated, but we do not
          guarantee that all information will always be complete, current, or
          error-free.
        </p>
        <p>
          Swanandji Gaushala & Eco-Stays is not liable for indirect damages,
          service interruptions, or losses arising from reliance on website
          content, third-party links, or temporary unavailability.
        </p>
      </>
    )
  }
];

export default function TermsAndServicePage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms & Service"
      intro="These terms govern your use of the Swanandji Gaushala & Eco-Stays website, products, bookings, and inquiry forms. By using this site, you agree to the policies described here."
      sections={sections}
    />
  );
}
