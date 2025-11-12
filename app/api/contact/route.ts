// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  _honeypot?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    // Basic server-side validation
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    // Honeypot check (spam)
    if (body._honeypot && body._honeypot.trim().length > 0) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    const payloadText = `
    New contact form submission from ZOIC website:

    Name: ${body.name}
    Email: ${body.email}
    Phone: ${body.phone ?? "N/A"}
    Company: ${body.company ?? "N/A"}
    Subject: ${body.subject}
    Message:
    ${body.message}
        `.trim();

    // If SMTP variables are present, try to send an email
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_TO = process.env.CONTACT_TO ?? "contact@zoicpharma.com";
    const FROM_EMAIL = process.env.FROM_EMAIL ?? (SMTP_USER ?? "no-reply@zoicpharma.com");

    if (SMTP_HOST && SMTP_USER && SMTP_PASS && SMTP_PORT) {
      // Dynamically import nodemailer to avoid adding the package in environments that don't need it
      const nodemailer: any = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `${body.name} <${FROM_EMAIL}>`,
        to: CONTACT_TO,
        subject: `[ZOIC Website] ${body.subject}`,
        text: payloadText,
        html: `<pre style="font-family:system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial">${payloadText}</pre>`,
      };

      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } else {
      // Fallback: log to server console (works in dev)
      console.log("Contact form submission (SMTP not configured):\n", payloadText);
      return NextResponse.json({ message: "Received (SMTP not configured - logged to server)" }, { status: 200 });
    }
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
