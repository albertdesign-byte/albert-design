"use server";

import { greeting } from "@/content/greeting";
import { parseGreetingForm } from "@/lib/contact/parseGreetingForm";
import { sendGreetingEmail } from "@/lib/contact/sendGreetingEmail";

export type GreetingFormValues = {
  name: string;
  phone: string;
  country: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

export type GreetingActionState = {
  ok: boolean;
  message: string | null;
  values: GreetingFormValues | null;
};

function readValues(formData: FormData): GreetingFormValues {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };

  return {
    name: read("name"),
    phone: read("phone"),
    country: read("country"),
    email: read("email"),
    company: read("company"),
    service: read("service"),
    budget: read("budget"),
    message: read("message"),
  };
}

export async function submitGreeting(
  _prev: GreetingActionState,
  formData: FormData,
): Promise<GreetingActionState> {
  const values = readValues(formData);
  const parsed = parseGreetingForm(formData);

  if (!parsed.ok) {
    if (parsed.error === "spam") {
      return { ok: true, message: greeting.form.successMessage, values: null };
    }

    return {
      ok: false,
      message: greeting.form.invalidMessage,
      values,
    };
  }

  try {
    await sendGreetingEmail(parsed.data);
    return { ok: true, message: greeting.form.successMessage, values: null };
  } catch (error) {
    console.error("submitGreeting", error);
    return { ok: false, message: greeting.form.errorMessage, values };
  }
}
