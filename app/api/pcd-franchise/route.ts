import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.city || !body.phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New PCD Franchise Request from ${body.name}`,
      html: `
        <h2>PCD Franchise Inquiry</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>City:</strong> ${body.city}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("PCD Franchise Email error:", error);
    return NextResponse.json(
      { message: "Failed to submit" },
      { status: 500 }
    );
  }
}
