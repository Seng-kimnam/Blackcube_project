import { Card, Section, SectionHeading } from "@/components/Section";
import { SOUP2, type TranslationSet } from "@/content";

export function HowToUsePage({ l }: { l: TranslationSet }) {
  return (
    <Section className="pt-24">
      <SectionHeading title={l.howTitle} eyebrow="So Simple" centered />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {l.steps.map((step, i) => (
          <Card key={step.num} className="relative">
            <div className="font-display text-5xl font-bold leading-none text-primary/15">
              {step.num}
            </div>
            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-xl">
              {["🫗", "🟫", "🥦", "🍲"][i]}
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {step.desc}
            </p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Pro Tips
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {[
              "Add fresh ginger for extra warmth",
              "Try with rice noodles for a filling meal",
              "Squeeze lime just before serving",
              "Use one cube per 400–500ml water",
            ].map((tip) => (
              <li key={tip} className="flex gap-3">
                <span className="text-primary">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={SOUP2}
          alt="Prepared soup"
          className="aspect-4/3 w-full rounded-3xl object-cover"
        />
      </Card>
    </Section>
  );
}
