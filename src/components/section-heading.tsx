import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={[
        "space-y-4",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      ].join(" ")}
    >
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-gold/35 bg-white px-6 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-forest shadow-sm">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-serif text-3xl leading-tight text-bark md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-bark/80 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div>{actions}</div> : null}
    </div>
  );
}
