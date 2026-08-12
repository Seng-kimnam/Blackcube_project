const FORM_SUBMIT_BASE = "https://formsubmit.co/ajax";

export const OWNER_EMAIL = import.meta.env.VITE_EMAIL_TO;

export type EmailPayload = {
  to: string;
  subject: string;
  fields: Record<string, string>;
};

export async function sendEmail(payload: EmailPayload): Promise<void> {
  if (!payload.to || !payload.subject) return;
  const res = await fetch(
    `${FORM_SUBMIT_BASE}/${encodeURIComponent(payload.to)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      referrerPolicy: "origin",
      body: JSON.stringify({
        _subject: payload.subject,
        _template: "table",
        _captcha: "false",
        ...payload.fields,
      }),
    },
  );
  if (!res.ok) throw new Error(`FormSubmit error: ${res.status}`);
}
