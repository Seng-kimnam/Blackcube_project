import { useState } from "react";
import { Card, Section } from "@/components/Section";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
                  {contact.icon} 
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

        {sent ? (
          <Card className="text-center">
            <div className="mb-4 text-5xl">✅</div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Message Sent!
            </h3>
            <p className="mt-3 text-sm leading-8 text-muted-foreground">
              We'll get back to you within 24 hours.
            </p>
          </Card>
        ) : (
          <Card className="space-y-5">
            {[
              {
                key: "name",
                label: "Name",
                placeholder: "Your full name",
                type: "text",
              },
              {
                key: "email",
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
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      [field.key]: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
            ))}
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                rows={5}
                className="w-full resize-y rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={() => setSent(true)}
              className="w-full rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Send Message
            </button>
          </Card>
        )}
      </div>
    </Section>
  );
}
