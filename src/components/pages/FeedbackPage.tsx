import { useState } from "react";
import { Card, Section } from "@/components/Section";

export function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", comment: "" });

  if (submitted) {
    return (
      <Section className="mx-auto max-w-xl pt-24 text-center">
        <div className="mb-6 text-6xl">🙏</div>
        <h1 className="font-display text-3xl font-bold text-foreground">
          Thank You!
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-muted-foreground">
          Your feedback means the world to us. Every response helps us make
          BLACK CUBE better for everyone.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setRating(0);
            setForm({ name: "", email: "", comment: "" });
          }}
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Submit Another
        </button>
      </Section>
    );
  }

  return (
    <Section className="mx-auto max-w-2xl pt-24">
      <div className="mb-8">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
          QR Feedback
        </p>
        <h1 className="font-display text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          Share Your Experience
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Tried BLACK CUBE? We'd love to hear what you think.
        </p>
      </div>
      <Card className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="text-3xl text-primary transition"
                style={{ opacity: star <= rating ? 1 : 0.3 }}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        {[
          {
            key: "name",
            label: "Name (optional)",
            placeholder: "Your name",
            type: "text",
          },
          {
            key: "email",
            label: "Email (optional)",
            placeholder: "your@email.com",
            type: "email",
          },
        ].map((field) => (
          <div key={field.key}>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key as keyof typeof form]}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, [field.key]: e.target.value }))
              }
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
        ))}
        <div>
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Comment
          </label>
          <textarea
            placeholder="Tell us about your experience..."
            value={form.comment}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, comment: e.target.value }))
            }
            rows={4}
            className="w-full resize-y rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
        <button
          onClick={() => setSubmitted(true)}
          className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
        >
          Submit Feedback
        </button>
      </Card>
    </Section>
  );
}
