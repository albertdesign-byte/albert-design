import { Resend } from "resend";

import { site } from "@/content/site";
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } from "@/lib/contact/config";
import type { GreetingSubmission } from "@/lib/contact/parseGreetingForm";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function row(label: string, value: string) {
  const display = value || "No indicado";
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #ececec;width:180px;color:#6b6b6c;font-size:14px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #ececec;color:#131417;font-size:14px;white-space:pre-wrap;">${escapeHtml(display)}</td>
  </tr>`;
}

function textBody(data: GreetingSubmission) {
  const lines = [
    `Nueva solicitud desde ${site.name}`,
    "",
    `Nombre: ${data.name}`,
    `Número de contacto: ${data.phone}`,
    `Email: ${data.email}`,
    `Empresa: ${data.company || "No indicado"}`,
    `Servicio: ${data.serviceLabel || "No indicado"}`,
    `Presupuesto del proyecto: ${data.budgetLabel || "No indicado"}`,
    `Mensaje: ${data.message || "No indicado"}`,
  ];
  return lines.join("\n");
}

function htmlBody(data: GreetingSubmission) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f5f5f5;font-family:ui-sans-serif,system-ui,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;padding:28px;">
      <p style="margin:0 0 8px;color:#6b6b6c;font-size:12px;letter-spacing:0.04em;text-transform:uppercase;">${escapeHtml(site.name)}</p>
      <h1 style="margin:0 0 20px;color:#131417;font-size:22px;font-weight:600;">Nueva solicitud de contacto</h1>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Nombre", data.name)}
        ${row("Número de contacto", data.phone)}
        ${row("Email", data.email)}
        ${row("Empresa", data.company)}
        ${row("Servicio", data.serviceLabel)}
        ${row("Presupuesto del proyecto", data.budgetLabel)}
        ${row("Mensaje", data.message)}
      </table>
    </div>
  </body>
</html>`;
}

export async function sendGreetingEmail(data: GreetingSubmission) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `Nueva solicitud: ${data.name}`,
    text: textBody(data),
    html: htmlBody(data),
  });

  if (error) {
    throw new Error(error.message);
  }
}
