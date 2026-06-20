import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validation/contact";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const validation = contactSchema.safeParse({ name, email, message })

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 }
    );
  }

  const res = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "islamibrahim1545@gmail.com",
    subject: `New Contact Message from ${name}`,
    replyTo: email,
    html: `
          <h2>New Contact Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <h3>Message:</h3>
          <p>${message}</p>
        `,
  });

  if (res.error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Message sent successfully" },
    { status: 200 }
  );

}