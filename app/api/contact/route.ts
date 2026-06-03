import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "guettafdhiaeddine@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";
const CONTACT_FORM_HEADER = "virtanis-contact-form";

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return `
    <!doctype html>
    <html>
      <body style="margin:0;background:#050505;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#101114;border:1px solid #24262d;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:30px 32px;background:linear-gradient(135deg,#141821 0%,#08090b 100%);border-bottom:1px solid #24262d;">
              <p style="margin:0 0 10px;color:#4da3ff;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:700;">Portfolio Contact</p>
              <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.2;font-weight:700;">New project message</h1>
              <p style="margin:12px 0 0;color:#a1a1aa;font-size:15px;line-height:1.6;">Someone reached out from your website contact form.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #24262d;">
                    <p style="margin:0 0 6px;color:#6f7685;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Name</p>
                    <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #24262d;">
                    <p style="margin:0 0 6px;color:#6f7685;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Email</p>
                    <a href="mailto:${email}" style="color:#4da3ff;font-size:16px;font-weight:700;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #24262d;">
                    <p style="margin:0 0 6px;color:#6f7685;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Subject</p>
                    <p style="margin:0;color:#ffffff;font-size:16px;font-weight:700;">${subject}</p>
                  </td>
                </tr>
              </table>

              <div style="margin-top:24px;padding:22px;background:#0b0d11;border:1px solid #24262d;border-radius:12px;">
                <p style="margin:0 0 12px;color:#6f7685;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Message</p>
                <p style="margin:0;color:#e5e7eb;font-size:16px;line-height:1.75;">${message}</p>
              </div>

              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" style="display:inline-block;background:#ffffff;color:#050505;padding:13px 20px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background:#08090b;border-top:1px solid #24262d;">
              <p style="margin:0;color:#6f7685;font-size:12px;line-height:1.5;">Sent automatically from dhiaeddine portfolio contact form.</p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function getAllowedOrigins(request: Request) {
  const requestOrigin = new URL(request.url).origin;
  const configuredOrigins = process.env.CONTACT_ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return new Set([requestOrigin, ...(configuredOrigins ?? [])]);
}

function isSameOriginContactRequest(request: Request) {
  const allowedOrigins = getAllowedOrigins(request);
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const source = request.headers.get("x-contact-form");

  if (source !== CONTACT_FORM_HEADER) {
    return false;
  }

  if (origin) {
    return allowedOrigins.has(origin);
  }

  if (!referer) {
    return false;
  }

  try {
    return allowedOrigins.has(new URL(referer).origin);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  if (!isSameOriginContactRequest(request)) {
    return Response.json(
      { error: "This request is not allowed." },
      { status: 403 },
    );
  }

  const formData = await request.formData();
  const name = getStringValue(formData, "name");
  const email = getStringValue(formData, "email");
  const subject = getStringValue(formData, "subject");
  const message = getStringValue(formData, "message");

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "Please fill in every required field." },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: `Portfolio contact: ${subject}`,
      replyTo: email,
      html: buildEmailHtml({
        name: safeName,
        email: safeEmail,
        subject: safeSubject,
        message: safeMessage,
      }),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
