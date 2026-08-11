import { addDoc, collection, serverTimestamp, type FieldValue } from "firebase/firestore";
import { db } from "@/firebase";
import { sendEmail, escapeHtml, OWNER_EMAIL } from "./email";
import type { EmailPayload } from "./email";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type FeedbackPayload = {
  rating: number;
  name: string;
  email: string;
  comment: string;
};

type StoredDoc = {
  createdAt: FieldValue;
  [key: string]: unknown;
};

export async function submitContact(data: ContactPayload): Promise<void> {
  const doc: StoredDoc = { ...data, createdAt: serverTimestamp() };
  await addDoc(collection(db, "contacts"), doc);
  await bestEffortEmail({
    to: data.email,
    bcc: OWNER_EMAIL,
    replyTo: OWNER_EMAIL,
    subject: "Thanks for contacting BLACK CUBE!",
    html: `<p>Hi ${escapeHtml(data.name)},</p>
<p>We received your message and will get back to you within 24 hours.</p>
<p><em>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</em></p>
<p>— The BLACK CUBE Team</p>`,
  });
}

export async function submitFeedback(data: FeedbackPayload): Promise<void> {
  const doc: StoredDoc = { ...data, createdAt: serverTimestamp() };
  await addDoc(collection(db, "feedback"), doc);
  if (data.email) {
    await bestEffortEmail({
      to: data.email,
      bcc: OWNER_EMAIL,
      replyTo: OWNER_EMAIL,
      subject: "Thanks for your BLACK CUBE feedback!",
      html: `<p>Hi ${escapeHtml(data.name || "there")},</p>
<p>Thank you for rating BLACK CUBE ${data.rating}/5. Your feedback helps us make it better for everyone.</p>
<p>— The BLACK CUBE Team</p>`,
    });
  } else {
    await bestEffortEmail({
      to: OWNER_EMAIL,
      subject: `New feedback (${data.rating}/5) from ${data.name || "anonymous"}`,
      html: `<p><strong>Rating:</strong> ${data.rating}/5</p>
<p><strong>Name:</strong> ${escapeHtml(data.name || "-")}</p>
<p><strong>Email:</strong> -</p>
<p><strong>Comment:</strong><br/>${escapeHtml(data.comment).replace(/\n/g, "<br/>")}</p>`,
    });
  }
}

async function bestEffortEmail(payload: EmailPayload): Promise<void> {
  try {
    await sendEmail(payload);
  } catch {
    // Data is already stored in Firestore; a failed notification must not
    // fail the submission.
  }
}
