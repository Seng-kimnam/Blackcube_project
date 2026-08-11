import { useState } from "react";
import { Card, Section } from "@/components/Section";
import { Popup } from "../Popup";
import { submitFeedback } from "@/services/forms";

type FormState = { name: string; email: string; comment: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

type Notify = {
  variant: "success" | "error";
  title: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border px-4 py-3 text-sm text-foreground outline-none bg-muted ${
    hasError
      ? "border-red-400/60 focus:border-red-400"
      : "border-border focus:border-primary"
  }`;

export function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState<FormState>({ name: "", email: "", comment: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [ratingError, setRatingError] = useState<string | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const [notify, setNotify] = useState<Notify | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim() && form.name.trim().length < 2)
      next.name = "Name must be at least 2 characters.";
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (!form.comment.trim()) next.comment = "Comment is required.";
    else if (form.comment.trim().length < 10)
      next.comment = "Comment must be at least 10 characters.";
    return next;
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async () => {
    let hasError = false;
    if (!rating) {
      setRatingError("Please select a rating.");
      hasError = true;
    }
    const next = validate();
    setErrors(next);
    if (hasError || Object.keys(next).length > 0) return;
    setSubmitting(true);
    try {
      await submitFeedback({
        rating,
        name: form.name.trim(),
        email: form.email.trim(),
        comment: form.comment.trim(),
      });
      setRating(0);
      setForm({ name: "", email: "", comment: "" });
      setNotify({
        variant: "success",
        title: "Thank You!",
        message:
          "Your feedback means the world to us. Every response helps us make BLACK CUBE better for everyone.",
      });
    } catch {
      setNotify({
        variant: "error",
        title: "Couldn't Submit",
        message: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
                onClick={() => {
                  setRating(star);
                  setRatingError(undefined);
                }}
                className="text-3xl text-primary transition"
                style={{ opacity: star <= rating ? 1 : 0.3 }}
              >
                ★
              </button>
            ))}
          </div>
          {ratingError ? (
            <p className="mt-1.5 text-xs text-red-400">{ratingError}</p>
          ) : null}
        </div>
        {[
          {
            key: "name" as const,
            label: "Name (optional)",
            placeholder: "Your name",
            type: "text",
          },
          {
            key: "email" as const,
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
              value={form[field.key]}
              onChange={(e) => update(field.key, e.target.value)}
              className={inputClass(Boolean(errors[field.key]))}
            />
            {errors[field.key] ? (
              <p className="mt-1.5 text-xs text-red-400">{errors[field.key]}</p>
            ) : null}
          </div>
        ))}
        <div>
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Comment
          </label>
          <textarea
            placeholder="Tell us about your experience..."
            value={form.comment}
            onChange={(e) => update("comment", e.target.value)}
            rows={4}
            className={inputClass(Boolean(errors.comment))}
          />
          {errors.comment ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.comment}</p>
          ) : null}
        </div>
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </Card>
      <Popup
        open={notify !== null}
        onClose={() => setNotify(null)}
        variant={notify?.variant ?? "success"}
        title={notify?.title}
        message={notify?.message}
        confirmLabel={notify?.variant === "error" ? "Try Again" : "Done"}
        cancelLabel={undefined}
        onConfirm={notify?.variant === "error" ? handleSubmit : undefined}
      />
    </Section>
  );
}
