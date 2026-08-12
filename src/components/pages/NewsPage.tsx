import { useState } from "react";
import { Card, Section, SectionHeading } from "@/components/Section";
import type { TranslationSet } from "@/content";

export function NewsPage({ l }: { l: TranslationSet }) {
  const [selected, setSelected] = useState<number | null>(null);

  if (selected !== null) {
    const item = l.newsItems[selected];
    return (
      <Section className="mx-auto max-w-3xl pt-24">
        <button
          onClick={() => setSelected(null)}
          className="mb-8 flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          {l.backToNews}
        </button>
        <div className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {item.date}
        </div>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          {item.title}
        </h1>
        <img
          src={item.img}
          alt={item.title}
          className="mt-6 aspect-video w-full rounded-[20px] object-cover"
        />
        <p className="mt-6 text-base leading-8 text-muted-foreground">
          {item.desc} {l.newsDetail}
        </p>
      </Section>
    );
  }

  return (
    <Section className="pt-24">
      <SectionHeading title={l.newsTitle} eyebrow={l.newsEyebrow} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {l.newsItems.map((item, index) => (
          <Card
            key={item.title}
            className="cursor-pointer overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
            onClick={() => setSelected(index)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="aspect-video w-full object-cover"
            />
            <div className="p-6">
              <div className=" font-semibold uppercase tracking-[0.16em] text-primary">
                {item.date}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.desc}
              </p>
              <div className="mt-5 text-sm font-semibold text-primary">
                {l.readMore}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
