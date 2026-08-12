import { Card, Section, SectionHeading } from "@/components/Section";
import type { TranslationSet } from "@/content";

export function AboutPage({ l }: { l: TranslationSet }) {
  return (
    <Section className="pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="mb-3  font-bold uppercase tracking-[0.2em] text-primary">
            {l.aboutEyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold  leading-20 text-foreground sm:text-5xl">
            {l.aboutTitle.split("\n").map((line, i, lines) => (
              <span key={line}>
                {line}
                {i < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            {l.aboutP1}
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {l.aboutP2}
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {l.aboutP3}
          </p>
        </div>
        <img
          src="https://6a79a81351198decb7534fab.imgix.net/sandbox/photo_2026-08-11_11-40-41.jpg"
          alt="About BLACK CUBE"
          className=" w-full rounded-3xl object-cover"
        />
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {[
          {
            label: l.visionLabel,
            text: l.visionText,
          },
          {
            label: l.missionLabel,
            text: l.missionText,
          },
        ].map((item) => (
          <Card key={item.label}>
            <div className="mb-3   font-bold uppercase tracking-[0.16em] text-primary">
              {item.label}
            </div>
            <p className="text-sm leading-8 text-foreground">{item.text}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading title={l.teamTitle} />
        <div className="grid gap-5">
          {l.teamInfo.map((member) => (
            <Card
              key={member.name}
              className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
            >
              <div
                className={`flex flex-col items-center gap-6 sm:items-center ${
                  member.id % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                }`}
              >
                <div className="flex  flex-col items-center gap-3 sm:w-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-40 w-40 rounded-full border border-primary/20 bg-primary/10 object-cover"
                  />
                  <div className="text-center">
                    <div className="font-display text-lg font-bold text-foreground">
                      {member.name}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {member.role}
                    </div>
                  </div>
                </div>
                <div className="flex-1 sm:border-l sm:border-border sm:pl-8">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {member.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
