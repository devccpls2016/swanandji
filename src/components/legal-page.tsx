import Link from "next/link";
import { ReactNode } from "react";

interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections
}: LegalPageProps) {
  return (
    <div className="shell section-space">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-bark/10 bg-white/80 p-8 shadow-card backdrop-blur-sm md:p-12">
        <div className="space-y-5 border-b border-bark/10 pb-8">
          <span className="inline-flex rounded-full border border-gold/35 bg-cream px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-forest">
            {eyebrow}
          </span>
          <h1 className="font-serif text-4xl leading-tight text-bark md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-bark/75">{intro}</p>
        </div>

        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-serif text-2xl text-bark">{section.title}</h2>
              <div className="space-y-3 text-sm leading-7 text-bark/75 md:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 border-t border-bark/10 pt-6 text-sm text-bark/65">
          For questions, please contact{" "}
          <Link
            href="/contact"
            className="font-medium text-forest transition hover:text-bark"
          >
            our team
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
