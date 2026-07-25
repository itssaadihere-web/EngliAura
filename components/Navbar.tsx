'use me';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, ArrowRight, BookOpen, Award, UserCheck, PhoneCall, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Dr. Maryam', href: '/about' },
    { label: 'Courses & Tracks', href: '/courses' },
    { label: 'Results & Reviews', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C9CBF0]/40 bg-white/85 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#2E2A9E] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/admin/login"
              className="text-xs font-bold text-[#4B3FCB] hover:text-[#2E2A9E] px-3 py-2 rounded-lg hover:bg-[#EEF0FB] transition-colors"
            >
              Admin Portal
            </Link>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl bg-[#EEF0FB] text-[#2E2A9E] hover:bg-[#C9CBF0] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#C9CBF0] bg-white px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-semibold text-gray-800 hover:bg-[#EEF0FB] hover:text-[#2E2A9E] transition-colors text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#EEF0FB] space-y-3">
            <Link
              href="/enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white py-3 rounded-xl font-bold text-center shadow-md"
            >
              <span>Enroll Now in IELTS / PTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-2 text-xs font-bold text-gray-500 hover:text-[#2E2A9E]"
            >
              Admin Staff Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
