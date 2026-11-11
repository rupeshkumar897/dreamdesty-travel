import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing!");
      return NextResponse.json({ error: 'Server configuration error: API Key missing' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const { name, email, phone, destination, month, travelDate, travelers, style, message, website } = body;

    // 1. Honeypot Spam Check (Hidden field bot trap)
    if (website && website !== "") {
      return NextResponse.json({ error: "Spam detected." }, { status: 403 });
    }

    // 2. Content & Link Spam Filter
    const textToCheck = `${name || ''} ${message || ''} ${destination || ''}`.toLowerCase();
    const spamKeywords = ['http://', 'https://', 'www.', 'crypto', 'casino', 'loan approval', 'sex', 'viagra', 'btc', 'investment scheme'];
    
    const isSpam = spamKeywords.some(keyword => textToCheck.includes(keyword));
    if (isSpam) {
      console.warn(`Spam blocked.`);
      return NextResponse.json({ error: "Spam content detected and blocked." }, { status: 403 });
    }

    // Determine inquiry type (Hero Search vs Contact Page)
    const isHeroSearch = month || style;
    const subjectTitle = isHeroSearch 
      ? `🔍 Hero Quick Search: ${destination || 'India'} (${travelers || '2 Travelers'})`
      : `✨ New Luxury Travel Enquiry: ${name} (${destination || 'General'})`;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Dreamdesty Concierge <onboarding@resend.dev>',
      to: ['rupeshkumar8974@gmail.com'],
      replyTo: email || 'concierge@dreamdesty.com',
      subject: subjectTitle,
      html: `
        <div style="font-family: serif; line-height: 1.6; color: #111; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 16px;">
          <div style="text-align: center; border-bottom: 2px solid #1b73e8; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #0b1329; font-size: 24px; margin: 0;">Dreamdesty Concierge</h1>
            <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">${isHeroSearch ? 'Homepage Quick Search Submission' : 'Bespoke Itinerary Request'}</p>
          </div>
          
          <table style="width: 100%; font-size: 14px; color: #374151; margin-bottom: 20px;">
            ${name ? `<tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name:</td><td style="padding: 8px 0;">${name}</td></tr>` : ''}
            ${email ? `<tr><td style="padding: 8px 0; font-weight: bold;">Email Address:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1b73e8;">${email}</a></td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Phone Number:</td><td style="padding: 8px 0;">${phone}</td></tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Destination:</td>
              <td style="padding: 8px 0; color: #1b73e8; font-weight: bold;">${destination || 'Not specified'}</td>
            </tr>
            ${month ? `<tr><td style="padding: 8px 0; font-weight: bold;">Travel Month:</td><td style="padding: 8px 0;">${month}</td></tr>` : ''}
            ${travelDate ? `<tr><td style="padding: 8px 0; font-weight: bold;">Travel Date:</td><td style="padding: 8px 0;">${travelDate}</td></tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Travelers Count:</td>
              <td style="padding: 8px 0;">${travelers || 'Not specified'}</td>
            </tr>
            ${style ? `<tr><td style="padding: 8px 0; font-weight: bold;">Travel Style:</td><td style="padding: 8px 0;">${style}</td></tr>` : ''}
          </table>

          ${message ? `
            <div style="background-color: #ffffff; padding: 15px 20px; border-radius: 10px; border: 1px solid #e5e7eb;">
              <strong style="display: block; color: #1b73e8; margin-bottom: 8px; font-size: 13px; text-transform: uppercase;">Client Requirements / Notes:</strong>
              <p style="margin: 0; color: #4b5563; font-size: 14px; font-family: sans-serif; white-space: pre-line;">${message}</p>
            </div>
          ` : ''}

          <div style="text-align: center; margin-top: 25px; color: #9ca3af; font-size: 11px; font-family: sans-serif;">
            <p>This submission was sent automatically from your Dreamdesty luxury portal.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error Object:", JSON.stringify(error));
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });

  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("CATCH BLOCK CRASH:", errorMessage);
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}