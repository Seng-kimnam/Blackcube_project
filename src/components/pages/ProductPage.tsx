import { Card, Section, SectionHeading } from "@/components/Section";
import { SOUP_IMG, ingredients, type TranslationSet } from "@/content";
import { IngredientsPage } from "./IngredientsPage";
import { HowToUsePage } from "./HowToUsePage";

export function ProductPage({
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
  return (
    <>
      <Section className="pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-[28px] border border-border bg-card">
              <img
                src={SOUP_IMG}
                alt="BLACK CUBE product"
                className="aspect-square w-full object-cover"
              />
            </div>
            <Card className="mt-5 flex items-center gap-5">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 60 60"
                  className="text-black"
                >
                  <rect
                    x="2"
                    y="2"
                    width="24"
                    height="24"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="12"
                    height="12"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="34"
                    y="2"
                    width="24"
                    height="24"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <rect
                    x="40"
                    y="8"
                    width="12"
                    height="12"
                    rx="1"
                    fill="currentColor"
                  />
                  <rect
                    x="2"
                    y="34"
                    width="24"
                    height="24"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <rect
                    x="8"
                    y="40"
                    width="12"
                    height="12"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Scan to Give Feedback
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Scan the QR code on your product packaging
                </div>
              </div>
            </Card>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              Ready-to-use Soup Cube
            </p>
            <h1 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
              BLACK CUBE
            </h1>
            <div className="mt-3 text-2xl font-bold text-primary">
              4,000 KHR / cube
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              A single BLACK CUBE contains everything you need for a rich,
              authentic Cambodian black chicken soup. No MSG, no artificial
              preservatives — just real ingredients compressed into one
              convenient cube.
            </p>

            <Card className="mt-8">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Ingredients
              </div>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-foreground"
                  >
                    {item.emoji} {item.name}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="mt-5">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Packaging
              </div>
              <p className="text-sm leading-8 text-foreground">
                Each cube is individually foil-wrapped to preserve freshness.
                Box contains 6 cubes. Shelf life: 12 months. Store in a cool,
                dry place.
              </p>
            </Card>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex-1 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
                Order Now
              </button>
              <button
                onClick={() => setPage("feedback")}
                className="flex-1 rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-foreground"
              >
                Give Feedback
              </button>
            </div>
          </div>
        </div>
      </Section>
      <IngredientsPage />
      <HowToUsePage l={l}  />
    </>
  );
}
