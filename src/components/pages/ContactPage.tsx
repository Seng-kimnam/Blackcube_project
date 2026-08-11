import { useState } from "react";
import { Card, Section } from "@/components/Section";
import { Popup } from "../Popup";
import { submitContact } from "@/services/forms";

type FormState = { name: string; email: string; message: string };
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

export function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [notify, setNotify] = useState<Notify | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Message is required.";
    else if (form.message.trim().length < 10)
      next.message = "Message must be at least 10 characters.";
    return next;
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async () => {
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSubmitting(true);
    try {
      await submitContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setForm({ name: "", email: "", message: "" });
      setNotify({
        variant: "success",
        title: "Message Sent!",
        message: "We'll get back to you within 24 hours.",
      });
    } catch {
      setNotify({
        variant: "error",
        title: "Couldn't Send",
        message: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Have a question, a collaboration idea, or want to stock BLACK CUBE
            in your store? We'd love to connect.
          </p>
          <div className="mt-8 space-y-5">
            {[
              { icon: "📧", label: "Email", value: "hello@blackcube.kh" },
              { icon: "📍", label: "Location", value: "Phnom Penh, Cambodia" },
              { icon: "📱", label: "Instagram", value: "@blackcube.kh" },
              { icon: "💬", label: "Facebook", value: "BLACK CUBE Cambodia" },
            ].map((contact) => (
              <div key={contact.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-lg">
                  {contact.icon}{" "}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {contact.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    {contact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="space-y-5">
          {[
            {
              key: "name" as const,
              label: "Name",
              placeholder: "Your full name",
              type: "text",
            },
            {
              key: "email" as const,
              label: "Email",
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
              Message
            </label>
            <textarea
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={5}
              className={inputClass(Boolean(errors.message))}
            />
            {errors.message ? (
              <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
            ) : null}
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </Card>
      </div>
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
