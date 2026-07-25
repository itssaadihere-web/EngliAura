'use me';
'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
          Get in Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#1E1B6B]">
          Contact EngliAura by Maryam
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about IELTS or PTE class schedules, fees, or 1-on-1 availability? Contact Dr. Maryam’s team directly.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#2E2A9E] via-[#4B3FCB] to-[#1E1B6B] text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h3 className="text-2xl font-black">Direct Contact Channels</h3>

              <div className="space-y-5 text-sm">
                <a
                  href="https://wa.me/923122498042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10"
                >
                  <MessageSquare className="w-6 h-6 text-[#7EC8E3] shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-base text-white">WhatsApp Inquiry Line</div>
                    <div className="text-[#7EC8E3] font-extrabold mt-0.5">+92 312 2498042</div>
                    <div className="text-xs text-gray-300">Instant responses within operational hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <Mail className="w-6 h-6 text-[#7EC8E3] shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-base text-white">Email Address</div>
                    <div className="text-gray-200 mt-0.5 font-semibold">engliaurabymaryam@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                  <MapPin className="w-6 h-6 text-[#7EC8E3] shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-base text-white">Academy HQ</div>
                    <div className="text-gray-200 mt-0.5">Online Live Classes & Partner Hybrid Centers</div>
                    <div className="text-xs text-gray-300">Serving students across Pakistan & International</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#C9CBF0] shadow-card">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#2E2A9E] mx-auto" />
                <h3 className="text-2xl font-black text-[#1E1B6B]">Message Received!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Dr. Maryam's support team will respond to your inquiry on WhatsApp or Email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-black text-[#1E1B6B]">Send Us a Message</h3>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Dr. Hassan Raza"
                    className="w-full px-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Email or WhatsApp Number
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hassan@gmail.com or +92 300 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Your Question / Course Interest
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about IELTS/PTE batch timings, 1-on-1 availability, or fee payment details..."
                    className="w-full px-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white rounded-2xl font-extrabold text-sm shadow-md hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to EngliAura Team</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
