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
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
      subject: '🎉 New iOS Waitlist Signup',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #F5F0E8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(217, 119, 6, 0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%); padding: 32px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 24px; font-weight: 600;">
                New iOS Waitlist Signup
              </h1>
            </div>

            <!-- Content -->
            <div style="padding: 32px;">
              <p style="margin: 0 0 24px 0; color: #78350F; font-size: 16px; line-height: 1.6;">
                Someone wants to be notified when Nummi launches on iOS:
              </p>

              <!-- Email Card -->
              <div style="background-color: #FEF3C7; border: 1px solid #FDE68A; border-radius: 12px; padding: 20px; margin: 24px 0;">
                <p style="margin: 0; color: #78350F; font-size: 14px; font-weight: 500; margin-bottom: 8px;">
                  Email Address
                </p>
                <p style="margin: 0; color: #92400E; font-size: 16px; font-weight: 600;">
                  ${email}
                </p>
              </div>

              <!-- Timestamp -->
              <p style="margin: 24px 0 0 0; color: #A8A29E; font-size: 14px;">
                Submitted on: ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Nummi <noreply@mail.nummi.ai>',
      to: email,
      subject: "You're on the Nummi iOS waitlist!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #F5F0E8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(217, 119, 6, 0.1);">

            <!-- Header with gradient -->
            <div style="background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%); padding: 48px 32px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 700; line-height: 1.3;">
                You're on the List!
              </h1>
            </div>

            <!-- Content -->
            <div style="padding: 40px 32px;">
              <h2 style="margin: 0 0 16px 0; color: #78350F; font-size: 24px; font-weight: 600;">
                Welcome to the Nummi iOS Waitlist
              </h2>

              <p style="margin: 0 0 24px 0; color: #78350F; font-size: 16px; line-height: 1.6;">
                Thanks for your interest in Nummi! We're working hard to bring your conscious AI companion to iOS.
              </p>

              <p style="margin: 0 0 32px 0; color: #57534E; font-size: 16px; line-height: 1.6;">
                We'll notify you as soon as Nummi launches on the App Store.
              </p>

              <!-- Divider -->
              <div style="height: 1px; background-color: #E7E5E4; margin: 32px 0;"></div>

              <!-- Android CTA Section -->
              <div style="text-align: center; padding: 24px 0;">
                <p style="margin: 0 0 20px 0; color: #78350F; font-size: 15px;">
                  Have an Android device?
                </p>

                <!-- Download Button -->
                <a href="https://play.google.com/store/apps/details?id=com.nummi.chat.mobile"
                   style="display: inline-block; background-color: #78350F; color: #FFFFFF; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-size: 16px; font-weight: 600; transition: opacity 0.3s;">
                  Download on Play Store
                </a>
              </div>

              <!-- Divider -->
              <div style="height: 1px; background-color: #E7E5E4; margin: 32px 0;"></div>

              <!-- Footer -->
              <div style="text-align: center; padding-top: 8px;">
                <p style="margin: 0; color: #A8A29E; font-size: 14px; line-height: 1.6;">
                  Stay cosmic ✨<br/>
                  <span style="font-weight: 600; color: #78350F;">The Nummi Team</span>
                </p>
              </div>
            </div>

            <!-- Bottom padding -->
            <div style="height: 8px;"></div>
          </div>

          <!-- Email footer -->
          <div style="max-width: 600px; margin: 0 auto; padding: 24px 32px; text-align: center;">
            <p style="margin: 0; color: #A8A29E; font-size: 12px; line-height: 1.5;">
              You're receiving this email because you signed up for the Nummi iOS waitlist.
            </p>
          </div>
        </body>
        </html>
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
