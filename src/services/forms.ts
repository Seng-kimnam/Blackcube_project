import { addDoc, collection, serverTimestamp, type FieldValue } from "firebase/firestore";
import { db } from "@/firebase";
import { sendEmail, OWNER_EMAIL } from "./email";
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
    to: OWNER_EMAIL,
    subject: `New contact from ${data.name}`,
    fields: {
      Name: data.name,
      Email: data.email,
      Message: data.message,
    },
  });
}

export async function submitFeedback(data: FeedbackPayload): Promise<void> {
  const doc: StoredDoc = { ...data, createdAt: serverTimestamp() };
  await addDoc(collection(db, "feedback"), doc);
  await bestEffortEmail({
    to: OWNER_EMAIL,
    subject: `New feedback (${data.rating}/5) from ${data.name || "anonymous"}`,
    fields: {
      Rating: `${data.rating}/5`,
      Name: data.name || "-",
      Email: data.email || "-",
      Comment: data.comment,
    },
  });
}

async function bestEffortEmail(payload: EmailPayload): Promise<void> {
  try {
    await sendEmail(payload);
  } catch {
    // Data is already stored in Firestore; a failed notification must not
    // fail the submission.
  }
}
