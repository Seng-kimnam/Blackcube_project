import { useState } from "react";
import { Card, Section } from "@/components/Section";
import { Popup } from "../Popup";
import { submitFeedback } from "@/services/forms";
import type { TranslationSet } from "@/content";

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

export function FeedbackPage({ l }: { l: TranslationSet }) {
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    comment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [ratingError, setRatingError] = useState<string | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const [notify, setNotify] = useState<Notify | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim() && form.name.trim().length < 2)
      next.name = l.errNameShort;
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim()))
      next.email = l.errEmail;
    if (!form.comment.trim()) next.comment = l.errCommentReq;
    else if (form.comment.trim().length < 10) next.comment = l.errCommentShort;
    return next;
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async () => {
    let hasError = false;
    if (!rating) {
      setRatingError(l.errRating);
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
        title: l.thanksTitle,
        message: l.thanksMsg,
      });
    } catch {
      setNotify({
        variant: "error",
        title: l.failTitle,
        message: l.failMsg,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="mx-auto max-w-2xl pt-24">
      <div className="mb-8">
        <p className="mb-3   font-bold uppercase tracking-[0.2em] text-primary">
          {l.feedbackEyebrow}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          {l.feedbackTitle}
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {l.feedbackIntro}
        </p>
      </div>
      <Card className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-foreground">
            {l.ratingLabel}
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
            label: l.nameLabel,
            placeholder: l.namePlaceholder,
            type: "text",
          },
          {
            key: "email" as const,
            label: l.emailLabel,
            placeholder: l.emailPlaceholder,
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
            {l.commentLabel}
          </label>
          <textarea
            placeholder={l.commentPlaceholder}
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
          className="w-full rounded-2xl cursor-pointer bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? l.submitting : l.submitBtn}
        </button>
      </Card>
      <Popup
        open={notify !== null}
        onClose={() => setNotify(null)}
        variant={notify?.variant ?? "success"}
        title={notify?.title}
        message={notify?.message}
        confirmLabel={notify?.variant === "error" ? l.tryAgain : l.done}
        cancelLabel={undefined}
        onConfirm={notify?.variant === "error" ? handleSubmit : undefined}
      />
    </Section>
  );
}
