type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10 ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  centered = false,
}: {
  title: string;
  eyebrow?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"
      }
    >
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function Card({ children, className = "" }: SectionProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
