import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export const metadata: Metadata = {
  title: 'EngliAura by Maryam | IELTS & PTE Coaching Academy',
  description: 'Simplifying English Tests & Amplifying Results. Premier IELTS & PTE training academy led by Dr. Maryam Musharraf. Proven strategies, daily evaluation, and 1-on-1 coaching.',
  keywords: [
    'EngliAura',
    'Maryam Musharraf',
    'Dr Maryam Musharraf',
    'IELTS Coaching Pakistan',
    'PTE Academic Prep',
    'IELTS Online Classes',
    'PTE Evaluation',
  ],
  authors: [{ name: 'Dr. Maryam Musharraf' }],
  openGraph: {
    title: 'EngliAura by Maryam — IELTS & PTE Coaching',
    description: 'Simplifying English Tests & Amplifying Results. Join Dr. Maryam Musharraf for targeted IELTS & PTE preparation.',
    url: 'https://engliaura.com',
    siteName: 'EngliAura by Maryam',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
