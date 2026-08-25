import { CONTACT_EMAIL } from "@/content/privacy";

export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL;

export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL?.trim() ||
  "Albert Design <onboarding@resend.dev>";
