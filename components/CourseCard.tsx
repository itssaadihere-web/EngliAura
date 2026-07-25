import React from 'react';
import Link from 'next/link';
import { CourseTrackInfo } from '../types';
import { formatCurrencyPKR } from '../lib/utils';
import { Check, ArrowRight, Star, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface CourseCardProps {
  track: CourseTrackInfo;
  badge?: string;
  popular?: boolean;
}

export default function CourseCard({ track, badge, popular = false }: CourseCardProps) {
  return (
    <div 
      className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
        popular
          ? 'bg-gradient-to-b from-[#2E2A9E] via-[#4B3FCB] to-[#1E1B6B] text-white shadow-2xl scale-105 border-2 border-[#7EC8E3]'
          : 'bg-white text-gray-900 border border-[#C9CBF0]/60 shadow-card hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 right-8 bg-[#7EC8E3] text-[#1E1B6B] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
          {badge}
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className={`w-4 h-4 ${popular ? 'text-[#7EC8E3]' : 'text-[#4B3FCB]'}`} />
          <span className={`text-xs font-bold uppercase tracking-widest ${popular ? 'text-[#C9CBF0]' : 'text-gray-500'}`}>
            {track.duration}
          </span>
        </div>

        <h3 className={`text-2xl font-black mb-2 ${popular ? 'text-white' : 'text-[#2E2A9E]'}`}>
          {track.title}
        </h3>
        
        <p className={`text-sm ${popular ? 'text-[#EEF0FB]' : 'text-gray-600'} line-clamp-2`}>
          {track.description}
        </p>
      </div>

      <div className="mb-8 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-black ${popular ? 'text-white' : 'text-[#2E2A9E]'}`}>
            {formatCurrencyPKR(track.pricePKR)}
          </span>
          <span className={`text-xs font-medium ${popular ? 'text-[#C9CBF0]' : 'text-gray-500'}`}>
            / student
          </span>
        </div>
        <div className={`text-xs mt-1 font-semibold ${popular ? 'text-[#7EC8E3]' : 'text-[#4B3FCB]'}`}>
          Targeted for IELTS & PTE Candidates
        </div>
      </div>

      <div className="flex-1 mb-8">
        <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-4 ${popular ? 'text-[#7EC8E3]' : 'text-gray-400'}`}>
          What's Included
        </h4>
        <ul className="space-y-3">
          {track.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <div className={`mt-0.5 p-1 rounded-full shrink-0 ${popular ? 'bg-[#7EC8E3] text-[#1E1B6B]' : 'bg-[#EEF0FB] text-[#2E2A9E]'}`}>
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className={popular ? 'text-white/95' : 'text-gray-700'}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/enroll?track=${encodeURIComponent(track.name)}`}
        className={`w-full py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
          popular
            ? 'bg-[#7EC8E3] text-[#1E1B6B] hover:bg-white hover:shadow-lg'
            : 'bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white hover:brightness-110'
        }`}
      >
        <span>Enroll in {track.id}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
