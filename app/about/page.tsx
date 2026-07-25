import React from 'react';
import Link from 'next/link';
import { GraduationCap, Award, BookOpen, CheckCircle2, ArrowRight, Star, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20 pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
          Meet Your Trainer
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#1E1B6B]">
          About Dr. Maryam Musharraf
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif italic">
          "Coaching is not about distributing notes; it is about building precision, fluency, and test strategy."
        </p>
      </section>

      {/* Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-3 rounded-3xl bg-gradient-to-br from-[#2E2A9E] via-[#4B3FCB] to-[#7EC8E3] shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center space-y-4">
                <div className="w-24 h-24 rounded-2xl bg-[#EEF0FB] mx-auto flex items-center justify-center text-[#2E2A9E]">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#1E1B6B]">Dr. Maryam Musharraf</h3>
                  <p className="text-xs font-bold text-[#4B3FCB] mt-0.5">Founder & Academic Director, EngliAura</p>
                </div>
                <div className="p-4 rounded-xl bg-[#EEF0FB] text-xs text-[#2E2A9E] font-semibold space-y-1 text-left">
                  <div>✓ Ph.D. English Literature & Applied Linguistics</div>
                  <div>✓ Certified Senior IELTS Master Trainer</div>
                  <div>✓ Pearson PTE Academic Specialist</div>
                  <div>✓ 10+ Years Dedicated English Test Coaching</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-black text-[#1E1B6B]">
              Personalized Coaching That Puts Students First
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Dr. Maryam Musharraf established EngliAura after recognizing a major gap in the test preparation market: thousands of Pakistani doctors, engineers, students, and skilled migrants were repeatedly missing their target band scores simply because generic academies were teaching outdated memorized templates.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              With a background in linguistics and over a decade of teaching experience, Dr. Maryam developed the <strong>EngliAura Evaluation System</strong> — a structured methodology that diagnoses individual candidate weaknesses in writing coherence, task response, pronunciation pitch, and reading pacing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#C9CBF0] shadow-sm space-y-2">
                <Award className="w-6 h-6 text-[#2E2A9E]" />
                <h4 className="font-extrabold text-sm text-[#1E1B6B]">Targeted Evaluation</h4>
                <p className="text-xs text-gray-600">
                  Every essay and speaking response is evaluated against official band descriptors.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#C9CBF0] shadow-sm space-y-2">
                <HeartHandshake className="w-6 h-6 text-[#4B3FCB]" />
                <h4 className="font-extrabold text-sm text-[#1E1B6B]">Direct Trainer Access</h4>
                <p className="text-xs text-gray-600">
                  Students interact directly with Dr. Maryam via live daily sessions and WhatsApp.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/enroll"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:brightness-110"
              >
                <span>Book 1-on-1 Class with Dr. Maryam</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
