# TRC Auto Insurance — Lead Generation Landing Page

A high-converting auto insurance landing page built for **TRC Global**, designed to capture leads via a multi-step quote form with TrustedForm and Jornaya (LeadiD) compliance tracking.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| Forms | React Hook Form + Zod validation |
| Fonts | Manrope (Google Fonts via next/font) |
| Tracking | TrustedForm · Jornaya LeadiD |

---

## ✨ Features

- **Multi-step quote form** — 3-step wizard (Vehicle → Driver → Contact) with directional slide animations between steps
- **Modal form** — triggered via Navbar CTA, closes on outside click or Escape key
- **Form validation** — Zod schemas with real-time error messages and helper text
- **Loading & feedback states** — spinner, disabled state, double-submit guard, API error handling
- **Conversion microcopy** — trust signals, SSL badge, rating, helper text under every field
- **Scroll animations** — fade + slide-up on all page sections via `FadeInSection`
- **Card hover effects** — lift animation on benefit cards
- **Mobile optimised** — responsive at all breakpoints, thumb-friendly buttons (52px height)
- **Thank-you page** — animated checkmark, "what happens next" steps, direct call CTA
- **Realistic API** — 1–1.5s simulated CRM delay, returns `leadId`, `timestamp`, `estimatedSavings`
- **SEO ready** — title, meta description, OpenGraph tags, semantic HTML

---

## 🗂 Project Structure

```
trc-auto-insurance/
├── app/
│   ├── api/submit-lead/     # Lead submission API route
│   ├── thank-you/           # Post-submission confirmation page
│   ├── globals.css          # Global styles + micro-interactions
│   └── layout.tsx           # Root layout (fonts, metadata, tracking scripts)
├── components/
│   ├── forms/               # MultiStepForm, ProgressBar, StepOne/Two/Three
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Hero, CarrierLogos, WhyChooseUs, HowItWorks, Reviews, FAQ, CTACard
│   ├── tracking/            # TrustedForm, Jornaya scripts
│   └── ui/                  # FadeInSection, QuoteModal
├── hooks/
│   └── useMultiStepForm.ts  # Form state management
└── lib/
    ├── submitLead.ts        # Client-side API caller
    ├── types.ts             # LeadData type
    └── validations.ts       # Zod schemas for all 3 steps
```

---

## 🛠 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📋 Form Fields

| Step | Fields |
|---|---|
| Step 1 — Vehicle | Zip Code, Vehicle Year, Make, Model |
| Step 2 — Driver | Date of Birth, License Status, Violations, Currently Insured |
| Step 3 — Contact | First Name, Last Name, Email, Phone |

---

## 🔒 Compliance Tracking

- **TrustedForm** — certificate URL captured from `#xxTrustedFormCertUrl` hidden input and submitted with the lead
- **Jornaya LeadiD** — token captured from `#leadid_token` hidden input and submitted with the lead

Both are rendered as client-side scripts in `app/layout.tsx`.

---

## 🌐 Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments on push.

---

## 📄 Environment Variables

No environment variables are required for the demo. To connect a real CRM or ping-post endpoint, add your keys to `.env.local`:

```env
CRM_ENDPOINT=https://your-crm-endpoint.com/leads
CRM_API_KEY=your_api_key_here
```

Then update `app/api/submit-lead/route.ts` to POST to your CRM instead of logging.

---

*Built as a sample/demo for TRC Global — auto insurance lead generation.*
