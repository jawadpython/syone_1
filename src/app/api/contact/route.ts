import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  need: string;
  message: string;
  consent?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.name || !body.email || !body.company || !body.need || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!body.consent) {
      return NextResponse.json({ error: "Consent required" }, { status: 400 });
    }

    // Log submission — replace with email service (Resend, SMTP) at deploy time
    console.log("[Contact form submission]", {
      to: "contact@syone-consulting.com",
      cc: "y.ziad@syone-consulting.com",
      ...body,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
