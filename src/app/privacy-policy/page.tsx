import { LegalPage } from "@/components/legal-page";

const sections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information you provide directly, such as your name,
          phone number, email address, booking details, delivery details, and
          inquiry messages.
        </p>
        <p>
          We may also receive limited technical information needed to operate
          the website, such as browser details and interaction data.
        </p>
      </>
    )
  },
  {
    title: "How We Use Information",
    content: (
      <>
        <p>
          We use your information to respond to inquiries, process orders,
          manage bookings, improve customer support, and maintain the quality of
          our services.
        </p>
        <p>
          We do not sell your personal information to third parties.
        </p>
      </>
    )
  },
  {
    title: "Sharing and Protection",
    content: (
      <>
        <p>
          We only share information when it is necessary to fulfill your
          request, comply with legal obligations, or support essential website
          operations.
        </p>
        <p>
          We take reasonable steps to protect the information you submit,
          though no online method of storage or transmission can be guaranteed
          to be completely secure.
        </p>
      </>
    )
  },
  {
    title: "Your Choices",
    content: (
      <>
        <p>
          You may contact us at any time to update or correct the information
          you have shared with us.
        </p>
        <p>
          If you have questions about how your data is handled, please reach out
          through our contact page and we will assist you.
        </p>
      </>
    )
  }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains how Swanandji Gaushala & Eco-Stays collects, uses, and protects information shared through the website."
      sections={sections}
    />
  );
}
