const PROXY_URL = import.meta.env.VITE_RESEND_PROXY_URL;

export const OWNER_EMAIL = import.meta.env.VITE_RESEND_TO;

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  bcc?: string;
  replyTo?: string;
};

export async function sendEmail(payload: EmailPayload): Promise<void> {
  if (!PROXY_URL || !payload.to) return;
  const res = await fetch(PROXY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend proxy error: ${res.status}`);
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
