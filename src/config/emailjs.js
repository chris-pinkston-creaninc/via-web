// EmailJS Configuration
// To set up EmailJS:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{firstName}}
//    - {{lastName}}
//    - {{company}}
//    - {{industry}}
//    - {{email}}
//    - {{phone}}
// 4. Get your Public Key, Service ID, and Template ID from EmailJS dashboard
// 5. Update the values below or use environment variables

export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  toEmail: 'MHernandez@creaninc.com'
}

