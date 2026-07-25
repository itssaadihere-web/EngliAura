import React from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      q: 'Who teaches the live classes at EngliAura?',
      a: 'Dr. Maryam Musharraf personally conducts live lectures, writing evaluation, and 1-on-1 speaking feedback. We do not delegate core teaching to junior tutors.',
    },
    {
      q: 'What is the difference between Track A and Track B?',
      a: 'Track A (Month 1 Core - PKR 15,000) covers full 4-module strategy lectures and daily practice. Track B (Month 2/3 Evaluation - PKR 10,000/mo) is designed for exam-standard daily full mock tests, portal access, and intensive live evaluation.',
    },
    {
      q: 'How do 1-on-1 session calendar bookings work?',
      a: 'When you select 1-on-1 during enrollment, you select your preferred date and time slot. Once booked and registered, that specific slot is automatically locked and blocked for you in Dr. Maryam’s schedule.',
    },
    {
      q: 'What payment modes are accepted?',
      a: 'We accept direct online bank transfers (Meezan Bank, Sadapay, Nayapay, JazzCash, EasyPaisa) and direct card payments. An automated official invoice (EAM-XXXXXX) is issued upon registration.',
    },
    {
      q: 'What is the refund policy?',
      a: 'All course fees are required to be paid in full prior to or at the commencement of the program. Payments are strictly non-refundable once the course has commenced.',
    },
    {
      q: 'Are test scores guaranteed?',
      a: 'EngliAura by Maryam is committed to delivering professional training and expert guidance for English test preparation. However, test results are influenced by individual student effort and performance; therefore, specific scores cannot be guaranteed.',
    },
  ];

  return (
    <div className="space-y-16 pb-20 pt-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
          Frequently Asked Questions
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#1E1B6B]">
          FAQ & Policy Guidelines
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about course structures, payment receipts, refunds, and class policies.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-[#C9CBF0]/60 shadow-sm space-y-2"
          >
            <h3 className="font-extrabold text-lg text-[#1E1B6B] flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#2E2A9E] shrink-0" />
              <span>{faq.q}</span>
            </h3>
            <p className="text-sm text-gray-600 pl-8 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6">
        <div className="p-8 rounded-3xl bg-[#EEF0FB] border border-[#C9CBF0] space-y-4">
          <h3 className="text-xl font-bold text-[#1E1B6B]">Have more questions?</h3>
          <p className="text-xs text-gray-600">Chat directly with Dr. Maryam on WhatsApp.</p>
          <a
            href="https://wa.me/923122498042"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2E2A9E] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1E1B6B]"
          >
            <span>Open WhatsApp Chat (+92 312 2498042)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
