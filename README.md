# VIA Smart Factory - Demo Sites

This project contains three different demo sites for the VIA Smart Factory website update, each showcasing a unique design style and feature emphasis.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
viasmartfactroy-website/
├── src/
│   ├── components/
│   │   ├── shared/          # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ViaExplanation.jsx
│   │   │   ├── ProductSections.jsx
│   │   │   ├── TestimonialSection.jsx
│   │   │   ├── WhoAndWhy.jsx
│   │   │   └── AboutSection.jsx
│   │   └── demos/           # Demo-specific components (future use)
│   ├── pages/
│   │   ├── Home.jsx         # Landing page to choose demo
│   │   ├── Demo1.jsx
│   │   ├── Demo2.jsx
│   │   └── Demo3.jsx
│   ├── styles/
│   │   ├── bootstrap-custom.css
│   │   ├── demo1.css
│   │   ├── demo2.css
│   │   └── demo3.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── images/              # Placeholder for images
└── package.json
```

## 🎨 Demo Sites

### Demo 1: Modern Minimal Design
**Route:** `/demo-1`

- **Design Style:** Clean, minimal, lots of white space, subtle animations
- **Feature Emphasis:** Product-focused (Smart Rack/Smart Bench hardware)
- **Key Characteristics:**
  - Light color scheme with blue accents
  - Card-based layouts with subtle shadows
  - Smooth scroll animations
  - Focus on product imagery and specifications
  - Simplified navigation

### Demo 2: Bold Tech-Focused Design
**Route:** `/demo-2`

- **Design Style:** Bold colors, strong typography, tech-forward aesthetic
- **Feature Emphasis:** AI/Technology capabilities (Smart Factory Operating System)
- **Key Characteristics:**
  - Dark theme with vibrant blue gradients
  - Bold typography and strong visual hierarchy
  - Tech-inspired UI elements
  - Emphasis on AI features and analytics
  - Interactive elements and hover effects

### Demo 3: Classic Professional Design
**Route:** `/demo-3`

- **Design Style:** Traditional, trustworthy, corporate-friendly
- **Feature Emphasis:** Business value and ROI (customer success, partnerships)
- **Key Characteristics:**
  - Professional color palette (navy, gray, white)
  - Traditional layout with clear sections
  - Emphasis on testimonials and case studies
  - Corporate imagery and professional photography
  - Clear call-to-action buttons

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Bootstrap 5** - CSS framework
- **Vite** - Build tool and dev server

## 📝 Features

- ✅ Three distinct design approaches
- ✅ Responsive design (mobile-first)
- ✅ Smooth scrolling navigation
- ✅ Form validation
- ✅ Email form submission (EmailJS)
- ✅ Code splitting and lazy loading for performance
- ✅ Accessible navigation (keyboard, screen readers)
- ✅ SEO-friendly structure

## 📧 Email Form Setup

The contact form uses EmailJS to send emails. To configure:

1. **Sign up for EmailJS** (free tier available): https://www.emailjs.com/
2. **Create an Email Service**:
   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions
3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{firstName}}`
     - `{{lastName}}`
     - `{{company}}`
     - `{{industry}}`
     - `{{email}}`
     - `{{phone}}`
   - Set the "To Email" field to: `MHernandez@creaninc.com`
4. **Get your credentials**:
   - Public Key (from Account > General)
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
5. **Configure the app**:
   - Create a `.env` file in the root directory
   - Add your credentials:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     ```
   - Or edit `src/config/emailjs.js` directly with your values
6. **Restart the dev server** after adding environment variables

## 🚢 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📄 License

© VIA Smart Factory. All rights reserved.

## 🔗 Links

- [VIA Smart Factory](https://viasmartfactory.com/)
- [CREAN Inc.](https://creaninc.com/)
