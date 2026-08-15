import { useState } from "react";
import { Card, Section, SectionHeading } from "@/components/Section";
import { SOUP_IMG, type TranslationSet } from "@/content";
import { IngredientsPage } from "./IngredientsPage";
import { HowToUsePage } from "./HowToUsePage";
import { Popup } from "../Popup";

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
  const [orderOpen, setOrderOpen] = useState(false);
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
              <div className="relative  flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white">
                <img
                  src="https://6a79a81351198decb7534fab.imgix.net/sandbox/Your%20Feedback.png"
                  alt=""
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {l.qrTitle}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {l.qrSub}
                </div>
              </div>
            </Card>
          </div>

          <div>
            <p className="mb-4   font-bold uppercase tracking-[0.2em] text-primary">
              {l.productTag}
            </p>
            <h1 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
              BLACK CUBE
            </h1>
            <div className="mt-3 text-2xl font-bold text-primary">
              {l.productPrice}
            </div>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {l.productDesc}
            </p>

            <Card className="mt-8">
              <div className="mb-4   font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {l.productIngredientsTitle}
              </div>
              <div className="flex flex-wrap gap-2">
                {l.ingredients.map((item) => (
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
              <div className="mb-4   font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {l.packagingTitle}
              </div>
              <p className="text-sm leading-8 text-foreground">
                {l.packagingText}
              </p>
            </Card>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setOrderOpen(true)}
                className="flex-1 cursor-pointer rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                {l.orderBtn}
              </button>
              <button
                onClick={() => setPage("feedback")}
                className="flex-1 cursor-pointer rounded-2xl border border-border px-5 py-3 text-sm font-semibold text-foreground"
              >
                {l.giveFeedback}
              </button>
            </div>
          </div>
        </div>
      </Section>
      <IngredientsPage l={l} />
      <HowToUsePage l={l} />
      <Popup
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        variant="info"
        title={l.orderPopupTitle}
        message={l.orderPopupMsg}
        confirmLabel={l.ok}
        cancelLabel={undefined}
      />
    </>
  );
}
