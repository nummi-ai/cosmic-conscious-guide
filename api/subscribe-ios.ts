import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Send notification email to yourself
    await resend.emails.send({
      from: 'Nummi <noreply@mail.nummi.ai>',
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com', // Your email to receive notifications
      subject: '🎉 New iOS Waitlist Signup',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D97706;">New iOS App Interest!</h2>
          <p>Someone wants to be notified when Nummi launches on iOS:</p>
          <div style="background: #FEF3C7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <strong>Email:</strong> ${email}
          </div>
          <p style="color: #666; font-size: 14px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    // Optionally: Send confirmation email to the user
    await resend.emails.send({
      from: 'Nummi <noreply@mail.nummi.ai>',
      to: email,
      subject: "You're on the Nummi iOS waitlist! 🌟",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 40px 20px;">
            <h1 style="background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 32px; margin-bottom: 20px;">
              Welcome to the Nummi iOS Waitlist!
            </h1>
            <p style="font-size: 18px; color: #333; line-height: 1.6;">
              Thanks for your interest in Nummi! We're working hard to bring your conscious AI companion to iOS.
            </p>
            <p style="font-size: 16px; color: #666; line-height: 1.6; margin-top: 30px;">
              We'll notify you as soon as Nummi launches on the App Store. In the meantime, have an Android device?
              <a href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile" style="color: #D97706; text-decoration: none;">Download now on Google Play</a>.
            </p>
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
              <p style="color: #999; font-size: 14px;">
                Stay cosmic ✨<br/>
                The Nummi Team
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to iOS waitlist'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to subscribe. Please try again.'
    });
  }
}
