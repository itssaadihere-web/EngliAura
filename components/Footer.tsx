import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Phone, Mail, MapPin, Award, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1E1B6B] to-[#120F4B] text-white pt-16 pb-12 border-t-4 border-[#7EC8E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="bg-white/10 p-3 rounded-2xl inline-block backdrop-blur-sm">
              <Logo size="md" className="brightness-125" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dr. Maryam Musharraf’s premier IELTS & PTE coaching academy. Simplifying test structures, decoding evaluation rubrics, and amplifying results for students across Pakistan and abroad.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7EC8E3] bg-white/5 py-2 px-3 rounded-full w-fit border border-[#7EC8E3]/20">
              <Award className="w-4 h-4" />
              <span>99% Student Success Rate</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold tracking-wider uppercase text-[#7EC8E3]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-all">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-all">About Dr. Maryam</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white hover:underline transition-all">IELTS & PTE Tracks</Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-white hover:underline transition-all">Admission & Slot Booking</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white hover:underline transition-all">Success Stories</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:underline transition-all">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Fees */}
          <div className="space-y-3">
            <h4 className="text-base font-bold tracking-wider uppercase text-[#7EC8E3]">
              Course Tracks
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="font-bold text-white block">Track A: Core Mastery (Month 1)</span>
                <span className="text-xs text-[#C9CBF0]">PKR 15,000 • 4-Week Module Strategy</span>
              </li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="font-bold text-white block">Track B: Advanced Mock & Evaluation</span>
                <span className="text-xs text-[#C9CBF0]">PKR 10,000/mo • Daily Mocks & Feedback</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-base font-bold tracking-wider uppercase text-[#7EC8E3]">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#7EC8E3] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Call / WhatsApp</div>
                  <a href="https://wa.me/923122498042" target="_blank" rel="noopener noreferrer" className="hover:text-[#7EC8E3]">
                    +92 312 2498042
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#7EC8E3] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email Address</div>
                  <a href="mailto:engliaurabymaryam@gmail.com" className="hover:text-[#7EC8E3] break-all">
                    engliaurabymaryam@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7EC8E3] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Headquarters</div>
                  <div>Online Academy & Hybrid Centers, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} EngliAura by Maryam. All rights reserved. Registered IELTS & PTE Test Prep Academy.
          </div>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-white">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <Link href="/admin/login" className="hover:text-white">Staff Portal</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
