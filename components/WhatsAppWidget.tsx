'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/923122498042?text=Hello%20Dr.%20Maryam!%20I%20want%20to%20inquire%20about%20EngliAura%20IELTS/PTE%20coaching%20classes.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Dr. Maryam"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-xs font-semibold text-white/90 leading-tight">Questions?</span>
        <span className="text-sm font-bold leading-tight">Chat on WhatsApp</span>
      </div>
    </a>
  );
}
