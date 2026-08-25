import {
  DEFAULT_COUNTRY_ISO,
  findCountry,
  formatInternationalPhone,
  getCountry,
} from "@/content/countries";
import { greeting } from "@/content/greeting";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BUDGET_VALUES = new Set<string>(
  greeting.form.fields.budget.options.map((option) => option.value),
);
const SERVICE_VALUES = new Set<string>(
  greeting.form.fields.service.options.map((option) => option.value),
);

export type GreetingSubmission = {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  serviceLabel: string;
  budget: string;
  budgetLabel: string;
  message: string;
};

export type ParseGreetingResult =
  | { ok: true; data: GreetingSubmission }
  | { ok: false; error: "invalid" | "spam" };

function read(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, max);
}

export function parseGreetingForm(formData: FormData): ParseGreetingResult {
  if (read(formData, "website", 200)) {
    return { ok: false, error: "spam" };
  }

  const name = read(formData, "name", 120);
  const national = read(formData, "phone", 40);
  const countryIso = read(formData, "country", 2).toUpperCase();
  const country = countryIso
    ? findCountry(countryIso)
    : getCountry(DEFAULT_COUNTRY_ISO);
  const phone = country ? formatInternationalPhone(country.dial, national) : "";
  const email = read(formData, "email", 254);
  const company = read(formData, "company", 120);
  const service = read(formData, "service", 40);
  const budget = read(formData, "budget", 40);
  const message = read(formData, "message", 4000);
  const privacy = formData.get("privacy");

  if (!name || !phone || !EMAIL_PATTERN.test(email) || privacy !== "on") {
    return { ok: false, error: "invalid" };
  }

  if (service && !SERVICE_VALUES.has(service)) {
    return { ok: false, error: "invalid" };
  }

  if (budget && !BUDGET_VALUES.has(budget)) {
    return { ok: false, error: "invalid" };
  }

  const serviceLabel =
    greeting.form.fields.service.options.find((option) => option.value === service)
      ?.label ?? "";

  const budgetLabel =
    greeting.form.fields.budget.options.find((option) => option.value === budget)
      ?.label ?? "";

  return {
    ok: true,
    data: {
      name,
      phone,
      email,
      company,
      service,
      serviceLabel,
      budget,
      budgetLabel,
      message,
    },
  };
}
