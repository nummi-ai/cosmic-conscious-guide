# 📧 Email API Setup Instructions

This guide will help you set up the iOS waitlist email functionality using Resend and Vercel.

## 🚀 Quick Setup (5 minutes)

### 1. Get Your Resend API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Log in to your Resend account
3. Click **"Create API Key"**
4. Copy the API key (starts with `re_`)

### 2. Add Environment Variables to Vercel

1. Go to your Vercel dashboard: [vercel.com](https://vercel.com)
2. Select your project: **cosmic-conscious-guide**
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `RESEND_API_KEY` | `re_your_api_key_here` | Production, Preview, Development |
   | `NOTIFICATION_EMAIL` | `your-email@example.com` | Production, Preview, Development |

   **Example:**
   ```
   RESEND_API_KEY = re_abc123def456ghi789
   NOTIFICATION_EMAIL = youremail@gmail.com
   ```

5. Click **Save**

### 3. (Optional) Verify Your Domain

For production use, you should verify your domain in Resend:

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain: `nummi.ai`
4. Follow the DNS setup instructions

Once verified, update the `from` field in `/api/subscribe-ios.ts`:

```typescript
from: 'Nummi <noreply@nummi.ai>', // Change from onboarding@resend.dev
```

## 📬 How It Works

When someone signs up for the iOS waitlist:

1. **You receive an email** at `NOTIFICATION_EMAIL` with their email address
2. **They receive a confirmation email** thanking them and providing the Play Store link

## 🧪 Testing Locally

To test locally, create a `.env` file in the root:

```bash
RESEND_API_KEY=re_your_api_key
NOTIFICATION_EMAIL=your-email@example.com
```

Then run:
```bash
npm run dev
```

## ✅ You're Done!

Once deployed, the `/download` page will automatically:
- Detect iOS users
- Show email capture form
- Send emails via Resend
- Show success message

## 🆘 Troubleshooting

**Emails not sending?**
- Check that your `RESEND_API_KEY` is correct in Vercel
- Verify the API key is active in Resend dashboard
- Check Vercel function logs for errors

**Using default sender?**
- The free tier uses `onboarding@resend.dev` as the sender
- To use your own domain, verify it in Resend (see step 3 above)

## 📊 Monitor Your Emails

View all sent emails in your Resend dashboard: [resend.com/emails](https://resend.com/emails)
