import { Card, Section, SectionHeading } from "@/components/Section";
import type { TranslationSet } from "@/content";

export function IngredientsPage({ l }: { l: TranslationSet }) {
  return (
    <Section className="pt-24">
      <SectionHeading title={l.ingredientsTitle} eyebrow={l.ingredientsEyebrow} />
      <p className="mb-10 max-w-2xl text-base leading-8 text-muted-foreground">
        {l.ingredientsIntro}
      </p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {l.ingredients.map((item) => (
          <Card
            key={item.name}
            className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-5 text-5xl">{item.emoji}</div>
            <div className="font-display text-2xl font-bold text-foreground">
              {item.name}
            </div>
            <div className="mt-2 text-sm font-semibold text-primary">
              {item.kh}
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.benefit}
            </p>
          </Card>
        ))}
      </div>
      <Card className="mt-8 border-primary/20 bg-[linear-gradient(135deg,rgba(240,180,41,0.08),transparent)] text-center">
        <div className="mb-4 text-4xl">🌿</div>
        <h3 className="font-display text-2xl font-bold text-foreground">
          {l.ingredientsCardTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-muted-foreground">
          {l.ingredientsCardText}
        </p>
      </Card>
    </Section>
  );
}
