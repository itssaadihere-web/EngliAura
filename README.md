# EngliAura by Maryam — IELTS & PTE Coaching Platform

Official full-stack platform for **EngliAura by Maryam** (`engliaura.com`), an IELTS & PTE coaching academy run by master trainer **Dr. Maryam Musharraf**.

---

## Features Built

1. **Brand & Visual Identity**: Deep Indigo (`#2E2A9E`), Soft Lavender (`#EEF0FB`), and Light Blue accents with Google Display Fonts (Baloo 2 / Outfit / Playfair Display / Inter). Open book + speech bubble icon motif.
2. **Public Marketing Site**:
   - **Home (`/`)**: Hero banner, Dr. Maryam spotlight, course tracks switcher, band score results showcase, and FAQ.
   - **About Maryam (`/about`)**: Personal bio, credentials, Ph.D. background, teaching philosophy, and student stats.
   - **Courses & Tracks (`/courses`)**: Track A (Month 1 Core Mastery - PKR 15,000) & Track B (Month 2/3 Evaluation - PKR 10,000/mo) comparison.
   - **Admission & Slot Booking (`/enroll`)**: Multi-step registration, interactive 1-on-1 calendar picker, slot blocking, and automated invoice (`EAM-XXXXXX`) dispatch.
   - **Testimonials (`/testimonials`)**: Student success stories with verified band score cards.
   - **Contact (`/contact`)**: Instant WhatsApp click-to-chat (`+923122498042`), contact form, and HQ details.
   - **FAQ (`/faq`)**: Policies, refunds, and class scheduling details.
3. **Database Architecture (Supabase Postgres)**:
   - Tables: `registrations`, `blocked_slots`, `admin_users`
   - Row Level Security (RLS) policies.
4. **Admin Portal (`/admin`)**:
   - Protected login (`/admin/login`).
   - Revenue metrics, student search/filter, payment status toggle (`Pending`/`Completed`), CSV export, and manual invoice re-issuer.
5. **Transactional Invoice Engine**:
   - Resend API integration for sending styled HTML receipts.
   - Payment webhook endpoint (`/api/v1/webhook-payment`).

---

## Local Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env.local` and add your keys:
   ```bash
   cp .env.example .env.local
   ```

3. **Database Migration**:
   Execute the contents of `supabase/schema.sql` inside the Supabase SQL Editor.

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## Deployment Steps

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for EngliAura by Maryam"
   git remote add origin git@github.com:your-username/engliaura.git
   git push -u origin main
   ```
2. Import repository into Vercel and add environment variables in Vercel settings.
