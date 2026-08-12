import { Card, Section, SectionHeading } from "@/components/Section";
import { ThreeCube } from "@/components/ThreeCube";
import type { TranslationSet } from "@/content";

export function Product3DPage({ l }: { l: TranslationSet }) {
  return (
    <Section className="pt-24">
      <SectionHeading eyebrow={l.d3Eyebrow} title={l.d3Title} centered />
      <p className="mx-auto -mt-6 mb-12 max-w-xl text-center text-sm leading-7 text-muted-foreground">
        {l.d3Intro}
      </p>

      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-[0_0_90px_rgba(240,180,41,0.14)]">
          <ThreeCube className="aspect-4/5 w-full sm:aspect-16/10" />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {l.d3Hints.map((hint) => (
            <span
              key={hint}
              className="rounded-full border border-border bg-muted px-4 py-1.5   font-semibold text-muted-foreground"
            >
              {hint}
            </span>
          ))}
        </div>
      </div>

      <Card className="mx-auto mt-12 max-w-3xl">
        <div className="mb-3  font-bold uppercase tracking-[0.16em] text-primary">
          {l.d3About}
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{l.d3Text}</p>
      </Card>
    </Section>
  );
}
