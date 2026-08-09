import { Card, Section, SectionHeading } from "@/components/Section";
import { achievements, type TranslationSet } from "@/content";

export function AchievementsPage({ l }: { l: TranslationSet }) {
  return (
    <Section className="pt-24">
      <SectionHeading title={l.achievementsTitle} eyebrow="Recognition" />
      <div className="space-y-0 rounded-3xl border border-border bg-card/70 p-4 sm:p-8">
        {achievements.map((item, index) => (
          <div
            key={item.title}
            className={`grid gap-6 px-2 py-8 sm:px-4 ${index < achievements.length - 1 ? "border-b border-border" : ""} md:grid-cols-[80px_1fr] md:gap-8`}
          >
            <div className="text-center">
              <div className="text-4xl">{item.icon}</div>
              <div className="mt-3 text-sm text-muted-foreground">
                {item.year}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                {item.subtitle}
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-foreground">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Card className="mt-8 text-center">
        <div className="font-display text-4xl font-bold text-primary">$500</div>
        <div className="mt-2 text-base font-semibold text-foreground">
          Seed Fund Awarded
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          Dynamic Agripreneur Bootcamp Season 2
        </div>
      </Card>
    </Section>
  );
}
