import { NextRequest, NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

// Set the API key from your environment variables
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json(); // Only extracting email, name is hardcoded as "Ayush"

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send simple email using SendGrid (without dynamic template data)
    await sendgrid.send({
      to: email, // User's email
      from: process.env.SENDGRID_FROM_EMAIL as string, // Verified SendGrid email
      templateId: process.env.SENDGRID_TEMPLATE_ID as string, // Your SendGrid template ID
      // The email content comes from the template, no dynamic data is passed
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
