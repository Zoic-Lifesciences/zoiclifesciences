import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const jobTitle = formData.get("jobTitle")?.toString();
    const file = formData.get("resume") as File | null;

    if (!name || !email || !jobTitle || !file) {
      return NextResponse.json({ success: false, message: "All fields are required." }, { status: 400 });
    }

    // Convert the File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"ZOIC Careers" <${process.env.MAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Job Application: ${jobTitle}`,
      text: `Name: ${name}\nEmail: ${email}\nJob Title: ${jobTitle}`,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true, message: "Application sent successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
  }
}
