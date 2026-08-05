import { NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";
import { MAX_ATTACHMENT_BYTES } from "@/lib/constants";

type ChannelResult = "sent" | "failed" | "skipped";

function fieldToString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailBody(fields: Record<string, string>) {
  const rows = [
    ["Name", fields.name],
    ["Phone", fields.phone],
    ["Address", fields.address],
    ["Service", fields.service],
    ["Preferred date", fields.date],
    ["Message", fields.message],
  ].filter(([, value]) => value);

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<h2>New estimate request</h2><ul>${rows
    .map(([label, value]) => `<li><strong>${label}:</strong> ${value}</li>`)
    .join("")}</ul>`;

  return { text, html };
}

async function sendEmail(fields: Record<string, string>, photos: File[]): Promise<ChannelResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.NOTIFY_EMAIL_TO;

  if (!apiKey || !from || !to) {
    console.warn("Resend not configured — skipping email notification.");
    return "skipped";
  }

  try {
    const resend = new Resend(apiKey);
    const { text, html } = buildEmailBody(fields);
    const attachments = await Promise.all(
      photos.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New estimate request from ${fields.name || "website visitor"}`,
      text,
      html,
      attachments,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return "failed";
    }
    return "sent";
  } catch (error) {
    console.error("Resend send threw:", error);
    return "failed";
  }
}

async function sendSms(fields: Record<string, string>): Promise<ChannelResult> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.TWILIO_TO_NUMBER;

  if (!accountSid || !authToken || !from || !to) {
    console.warn("Twilio not configured — skipping SMS notification.");
    return "skipped";
  }

  try {
    const client = twilio(accountSid, authToken);
    const summary = [
      "New estimate request:",
      fields.name,
      fields.phone,
      fields.service,
      fields.date,
    ]
      .filter(Boolean)
      .join(" · ");

    await client.messages.create({ body: summary, from, to });
    return "sent";
  } catch (error) {
    console.error("Twilio send threw:", error);
    return "failed";
  }
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid form submission." },
      { status: 400 }
    );
  }

  const fields = {
    name: fieldToString(formData.get("name")),
    phone: fieldToString(formData.get("phone")),
    address: fieldToString(formData.get("address")),
    service: fieldToString(formData.get("service")),
    date: fieldToString(formData.get("date")),
    message: fieldToString(formData.get("message")),
  };

  if (!fields.name || !fields.phone) {
    return NextResponse.json(
      { ok: false, message: "Name and phone number are required." },
      { status: 400 }
    );
  }

  const photos = formData.getAll("photos").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  const totalBytes = photos.reduce((sum, file) => sum + file.size, 0);

  if (totalBytes > MAX_ATTACHMENT_BYTES) {
    return NextResponse.json(
      { ok: false, message: "Photos are too large to send — try fewer or smaller photos." },
      { status: 400 }
    );
  }

  const [email, sms] = await Promise.all([sendEmail(fields, photos), sendSms(fields)]);

  if (email === "failed" && sms === "failed") {
    return NextResponse.json(
      { ok: false, email, sms, message: "We couldn't send your request. Please call or text us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, email, sms });
}
