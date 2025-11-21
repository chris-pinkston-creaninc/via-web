# EmailJS Setup Guide

## Quick Setup Steps

1. **Create EmailJS Account**: https://www.emailjs.com/ (Free tier available)

2. **Add Email Service**:
   - Dashboard → Email Services → Add New Service
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the connection steps
   - **Note the Service ID**

3. **Create Email Template**:
   - Dashboard → Email Templates → Create New Template
   - Use this template:

```
Subject: New Demo Request - VIA Smart Factory

Hello,

You have received a new demo request from the VIA Smart Factory website.

Contact Information:
- Name: {{firstName}} {{lastName}}
- Email: {{email}}
- Phone: {{phone}}
- Company: {{company}}
- Industry: {{industry}}

Please follow up with this potential customer.

Best regards,
VIA Smart Factory Website
```

   - **To Email**: Set to `MHernandez@creaninc.com` (or use `{{to_email}}` variable)
   - **Note the Template ID**

4. **Get Public Key**:
   - Dashboard → Account → General
   - Copy your **Public Key**

5. **Configure the Application**:

   **Option A: Environment Variables (Recommended)**
   - Create a `.env` file in the project root:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```
   - Restart the dev server after adding the file

   **Option B: Direct Configuration**
   - Edit `src/config/emailjs.js`
   - Replace the placeholder values with your actual credentials

6. **Test the Form**:
   - Fill out the form on any demo page
   - Click Submit
   - Check the email inbox for `MHernandez@creaninc.com`

## Template Variables Used

The form sends these variables to EmailJS:
- `{{firstName}}` - First name
- `{{lastName}}` - Last name
- `{{email}}` - Email address
- `{{phone}}` - Phone number (or "Not provided")
- `{{company}}` - Company name (or "Not provided")
- `{{industry}}` - Industry (or "Not provided")
- `{{to_email}}` - Recipient email (MHernandez@creaninc.com)
- `{{from_name}}` - Full name of submitter
- `{{message}}` - Summary message

## Troubleshooting

- **"Email service is not configured"**: Make sure you've set up the credentials in `.env` or `emailjs.js`
- **Email not received**: Check spam folder, verify EmailJS service is connected properly
- **Form shows error**: Check browser console for detailed error messages
- **Rate limits**: Free tier has limits (200 emails/month), upgrade if needed

## Security Note

The Public Key is safe to expose in client-side code. Never expose your Private Key or API Secret.

