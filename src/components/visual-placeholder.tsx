interface VisualPlaceholderProps {
  title: string;
  subtitle: string;
  accent?: string;
  className?: string;
}

export function VisualPlaceholder({
  title,
  subtitle,
  accent = "from-forest/15 via-gold/10 to-transparent",
  className = ""
}: VisualPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br ${accent} p-8 shadow-card ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_35%)]" />
      <div className="relative flex h-full min-h-48 flex-col justify-between rounded-[1.5rem] border border-bark/10 bg-white/55 p-6 backdrop-blur">
        <span className="w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-forest/70">
          Placeholder Visual
        </span>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-bark">{title}</h3>
          <p className="max-w-sm text-sm leading-7 text-bark/70">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
