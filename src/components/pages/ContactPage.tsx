import { useState } from "react";
import { Card, Section } from "@/components/Section";
import { Popup } from "../Popup";
import { submitContact } from "@/services/forms";
import type { TranslationSet } from "@/content";

import { Facebook, Map, Message, Musicnote } from "iconsax-reactjs";

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

export function ContactPage({ l }: { l: TranslationSet }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [notify, setNotify] = useState<Notify | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = l.errNameReq;
    if (!form.email.trim()) next.email = l.errEmailReq;
    else if (!EMAIL_RE.test(form.email.trim())) next.email = l.errEmail;
    if (!form.message.trim()) next.message = l.errMessageReq;
    else if (form.message.trim().length < 10) next.message = l.errMessageShort;
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
        title: l.sentTitle,
        message: l.sentMsg,
      });
    } catch {
      setNotify({
        variant: "error",
        title: l.contactFailTitle,
        message: l.failMsg,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <p className="mb-3   font-bold uppercase tracking-[0.2em] text-primary">
            {l.contactEyebrow}
          </p>
          <h1 className="font-display text-4xl font-bold tracking-[-0.02em] text-foreground sm:text-5xl">
            {l.contactTitle}
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            {l.contactIntro}
          </p>
          <div className="mt-8 space-y-5">
            {l.contactItems.map((contact) => (
              <div key={contact.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-lg">
                  {contact.icon === "1" && <Message size="26" variant="Bold" />}
                  {contact.icon === "2" && <Map size="26" variant="Bold" />}
                  {contact.icon === "3" && (
                    <Musicnote size="26" variant="Bold" />
                  )}
                  {contact.icon === "4" && (
                    <Facebook size="26" variant="Bold" />
                  )}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {contact.label}
                  </div>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-sm font-medium text-foreground"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="space-y-5">
          {[
            {
              key: "name" as const,
              label: l.nameField,
              placeholder: l.contactNamePlaceholder,
              type: "text",
            },
            {
              key: "email" as const,
              label: l.emailField,
              placeholder: l.contactEmailPlaceholder,
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
                <p className="mt-1.5 text-xs text-red-400">
                  {errors[field.key]}
                </p>
              ) : null}
            </div>
          ))}
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              {l.messageField}
            </label>
            <textarea
              placeholder={l.contactMessagePlaceholder}
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
            className="w-full rounded-2xl cursor-pointer bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? l.sending : l.sendBtn}
          </button>
        </Card>
      </div>
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
