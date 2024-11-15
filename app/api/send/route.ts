import EmailTemplate from "@/app/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  console.log("Request received to send email.");
  console.log("Email:", email, "Subject:", subject, "Message:", message);
  
  try {
    const {data, error} = await resend.emails.send({
      from: 'Acme <${fromEmail}>',
      to: ['hassanahyaan0@gmail.com'],
      subject: subject,
      react: EmailTemplate({ message, email, subject }) as React.ReactElement
    })
    console.log("Email sent successfully:", data);

    return NextResponse.json({ data }, { status: 200 });

    
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
    
}