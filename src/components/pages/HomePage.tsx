import { lazy, Suspense, useState } from "react";
import { Section, SectionHeading, Card } from "@/components/Section";
import { Carousel } from "@/components/Carousel";
import { SOUP_IMG, SOUP_BOWL, type TranslationSet } from "@/content";
import { Popup } from "../Popup";
import { ChefHat, CookingPot, HandCoins, Salad } from "lucide-react";
import { slides } from "@/slide";

const Product3DPage = lazy(() =>
  import("./Product3DPage").then((m) => ({ default: m.Product3DPage })),
);

export function HomePage({
  l,
  setPage,
}: {
  l: TranslationSet;
  setPage: (
    p:
      | "home"
      | "product"
      | "about"
      | "achievements"
      | "news"
      | "feedback"
      | "contact",
  ) => void;
}) {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div>
      <Carousel className="h-64 w-full sm:h-80 lg:h-140" slides={slides} />
      <Suspense
        fallback={
          <div className="flex min-h-105 w-full items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        }
      >
        <Product3DPage l={l} />
      </Suspense>
      <Section className="min-h-[calc(100vh-4rem)] pt-24">
        <div className="grid pl-40 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="">
            <div className="mb-7 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2   font-bold uppercase tracking-[0.18em] text-primary">
              {l.heroTag}
            </div>
            <h1 className=" text-5xl font-bold tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
              {l.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              {l.heroSub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setPage("product")}
                className="rounded-full cursor-pointer bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
              >
                {l.discoverBtn}
              </button>
              <button
                onClick={() => setPage("product")}
                className="rounded-full cursor-pointer border border-border px-7 py-3.5 text-sm font-semibold text-foreground"
              >
                {l.ourProductBtn}
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 sm:gap-10">
              {[
                ["4,000", l.statCube],
                ["100%", l.statLocal],
                ["$500", l.statSeed],
              ].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-primary">
                    {val}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-115 overflow-hidden rounded-[28px] border border-border/70 shadow-[0_0_50px_rgba(240,180,41,0.18)]">
              <img
                src={SOUP_IMG}
                alt="BLACK CUBE black chicken soup"
                className="aspect-4/5 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border/80 bg-[rgba(8,8,8,0.8)] px-4 py-3 backdrop-blur">
                <div className="text-sm font-semibold text-foreground">
                  BLACK CUBE
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {l.productCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading title={l.whyTitle} centered />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {l.whyItems.map((item) => (
            <Card
              key={item.title}
              className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <div className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-card/70">
        <SectionHeading title={l.howTitle} centered />
        <div className="grid gap-0 rounded-3xl border border-border bg-background/70 md:grid-cols-4">
          {l.steps.map((step, i) => (
            <div
              key={step.num}
              className="relative border-b border-border p-8 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className=" text-primary/50 text-5xl font-bold leading-none ">
                {step.num}
              </div>
              <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-xl">
                {[<CookingPot />, <HandCoins />, <Salad />, <ChefHat />][i]}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <img
          src={SOUP_BOWL}
          alt="Soup bowl"
          className=" w-full rounded-3xl object-cover"
        />
        <div>
          <SectionHeading title={l.benefitsTitle} />
          <div className="flex flex-col gap-3">
            {l.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-card/80 px-4 py-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15   font-bold text-primary">
                  ✓
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="rounded-4xl border border-border bg-[linear-gradient(135deg,rgba(240,180,41,0.08),transparent)] text-center">
        <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
          {l.ctaTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
          {l.ctaSub}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setOrderOpen(true)}
            className="rounded-full cursor-pointer bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground"
          >
            {l.ctaBtn}
          </button>
          <button
            onClick={() => setPage("feedback")}
            className="rounded-full border cursor-pointer border-border px-7 py-3 text-sm font-semibold text-foreground"
          >
            {l.ctaFeedback}
          </button>
        </div>
      </Section>
      <Popup
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        variant="info"
        title={l.orderPopupTitle}
        message={l.orderPopupMsg}
        confirmLabel={l.ok}
        cancelLabel={undefined}
      />
    </div>
  );
}
