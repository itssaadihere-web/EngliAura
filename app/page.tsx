import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import CourseCard from '../components/CourseCard';
import { CourseTrackInfo } from '../types';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Users, 
  BookOpen, 
  Target, 
  Star, 
  Calendar,
  MessageSquare,
  Zap,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export default function HomePage() {
  const tracks: CourseTrackInfo[] = [
    {
      id: 'Track A',
      name: 'Month 1: Core Training',
      title: 'Track A — Month 1: Core Mastery',
      pricePKR: 15000,
      duration: '4 Weeks Full Course',
      description: 'Comprehensive 4-week module mastery. Day 1 strategy lecture, Days 2-5 daily practice & live trainer discussion, Day 6 mock exam.',
      features: [
        'Weekly focus: Listening, Reading, Writing & Speaking',
        'Day 1 live strategy lecture per module',
        'Days 2–5 daily practice tests + live trainer discussion',
        'Day 6 module mock exam & evaluation',
        'Full-length exam-standard mock test at Week 4',
        'Direct guidance from Dr. Maryam Musharraf',
      ],
      schedule: ['Week 1: Listening', 'Week 2: Reading', 'Week 3: Writing', 'Week 4: Speaking & Final Mock'],
      recommendedFor: 'First-time candidates & students seeking complete syllabus mastery.',
    },
    {
      id: 'Track B',
      name: 'Month 2: Advanced Track',
      title: 'Track B — Month 2/3: Evaluation Track',
      pricePKR: 10000,
      duration: '1 Month Extension',
      description: 'Daily exam-standard full mock tests, writing evaluation, target-question feedback, and mandatory live speaking sessions.',
      features: [
        'Daily full-length exam-standard mock test inside portal',
        'Target-question feedback & dispute resolution with trainer',
        'Detailed writing correction & rubric feedback',
        'Mandatory daily live 1-on-1/group speaking session',
        'Personalized score prediction & band calibration',
        'Unlimited mock retakes until exam day',
      ],
      schedule: ['Daily Mocks', 'Daily Speaking', 'Writing Rubrics', 'Final Band Tuning'],
      recommendedFor: 'Repeat takers, high-score seekers (IELTS 8+ / PTE 79+), and Month 1 graduates.',
    },
  ];

  const statistics = [
    { label: 'Students Trained', value: '5,000+', icon: Users },
    { label: 'Success Rate', value: '99%', icon: Award },
    { label: 'Highest IELTS Band', value: '8.5', icon: Star },
    { label: 'Highest PTE Score', value: '88/90', icon: Target },
  ];

  const testimonials = [
    {
      name: 'Dr. Shahzaib Ahmed',
      test: 'IELTS Academic',
      score: 'Band 8.0 (L8.5, R8.0, W7.5, S8.0)',
      review: 'Dr. Maryam’s writing evaluation was the game-changer for me. She broke down Task 2 structure step-by-step. Reached my UK PLAB target effortlessly!',
      city: 'Lahore',
    },
    {
      name: 'Ayesha Malik',
      test: 'PTE Academic',
      score: 'Overall 84 (S90, W85, R82, L81)',
      review: 'I failed PTE speaking twice at other academies. Dr. Maryam corrected my oral fluency and pitch in just 2 weeks of Track B. Her personal brand speaks for itself!',
      city: 'Islamabad',
    },
    {
      name: 'Hamza Tariq',
      test: 'IELTS General',
      score: 'CLB 9 achieved (L8.0, R7.5, W7.5, S7.5)',
      review: 'EngliAura is not an anonymous institute — Dr. Maryam personally checks your daily practice tests and conducts live speaking. Highly recommended for Canadian PR!',
      city: 'Karachi',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-lavender-wash border-b border-[#C9CBF0]/50">
        
        {/* Soft floating aura background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] cloud-watercolor -z-10 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 bg-[#EEF0FB] border border-[#C9CBF0] px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-[#2E2A9E] shadow-sm">
                <Sparkles className="w-4 h-4 text-[#7EC8E3] fill-current" />
                <span className="font-serif italic font-semibold">Simplifying English Tests & Amplifying Results</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#1E1B6B] leading-[1.15]">
                Master <span className="text-[#4B3FCB] underline decoration-[#7EC8E3] underline-offset-8">IELTS & PTE</span> with <br />
                <span className="bg-gradient-to-r from-[#2E2A9E] via-[#4B3FCB] to-[#7EC8E3] bg-clip-text text-transparent">
                  Dr. Maryam Musharraf
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Don't study with anonymous institutes. Learn directly from Pakistan's most trusted trainer. Proven strategies, daily live speaking evaluation, and exam-standard mock portals designed to guarantee your target score.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/enroll"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white px-8 py-4 rounded-full font-extrabold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Enroll Now (Group & 1-on-1)</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#2E2A9E] border-2 border-[#C9CBF0] px-7 py-4 rounded-full font-bold text-base hover:bg-[#EEF0FB] transition-all"
                >
                  <BookOpen className="w-5 h-5 text-[#4B3FCB]" />
                  <span>View Course Syllabus</span>
                </Link>
              </div>

              {/* Guarantees row */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E2A9E]" />
                  <span>IELTS Academic & General</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E2A9E]" />
                  <span>PTE Academic Core</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E2A9E]" />
                  <span>1-on-1 Calendar Lock</span>
                </div>
              </div>

            </div>

            {/* Right Hero Branding Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#7EC8E3] to-[#C9CBF0] rounded-3xl blur-2xl opacity-60 -z-10" />

                <div className="bg-white rounded-3xl p-8 border-2 border-[#C9CBF0] shadow-2xl space-y-6">
                  
                  {/* Trainer Avatar & Badge */}
                  <div className="flex items-center gap-4 border-b border-[#EEF0FB] pb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2E2A9E] to-[#7EC8E3] p-1 shadow-lg shrink-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-[14px] bg-[#EEF0FB] flex items-center justify-center text-[#2E2A9E]">
                        <GraduationCap className="w-10 h-10" />
                      </div>
                    </div>
                    <div>
                      <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-3 py-1 rounded-full text-xs font-extrabold mb-1">
                        Lead Trainer & CEO
                      </div>
                      <h3 className="text-xl font-black text-[#1E1B6B]">
                        Dr. Maryam Musharraf
                      </h3>
                      <p className="text-xs text-gray-500 font-medium">
                        Ph.D. Scholar • Senior IELTS & PTE Master Trainer
                      </p>
                    </div>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EEF0FB]/60 border border-[#C9CBF0]/50 text-xs font-bold text-[#2E2A9E]">
                      <Award className="w-5 h-5 text-[#4B3FCB] shrink-0" />
                      <span>Over 5,000+ candidates successfully guided in Pakistan</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EEF0FB]/60 border border-[#C9CBF0]/50 text-xs font-bold text-[#2E2A9E]">
                      <Zap className="w-5 h-5 text-[#7EC8E3] shrink-0 fill-current" />
                      <span>Weekly Mock Tests + Immediate Writing Correction</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EEF0FB]/60 border border-[#C9CBF0]/50 text-xs font-bold text-[#2E2A9E]">
                      <MessageSquare className="w-5 h-5 text-[#2E2A9E] shrink-0" />
                      <span>Mandatory Daily Live 1-on-1 Speaking Evaluation</span>
                    </div>
                  </div>

                  {/* Interactive Quick Callout */}
                  <div className="pt-2">
                    <Link
                      href="/enroll"
                      className="w-full py-3.5 bg-[#2E2A9E] hover:bg-[#1E1B6B] text-white text-center rounded-2xl font-extrabold text-sm block shadow-md transition-colors"
                    >
                      Book Class Slot for This Week →
                    </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-card flex items-center gap-4 hover:shadow-lg transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-[#EEF0FB] text-[#2E2A9E] shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1E1B6B] leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRAINER SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E1B6B] via-[#2E2A9E] to-[#4B3FCB] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#7EC8E3]/20 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="w-64 h-80 rounded-2xl bg-[#EEF0FB] flex flex-col items-center justify-center p-6 text-center text-[#2E2A9E] shadow-inner">
                  <GraduationCap className="w-20 h-20 text-[#2E2A9E] mb-4" />
                  <h4 className="font-extrabold text-xl text-[#1E1B6B]">Dr. Maryam Musharraf</h4>
                  <p className="text-xs text-gray-600 font-semibold mt-1">Founder & Academic Director</p>
                  <div className="mt-4 bg-[#2E2A9E] text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                    Official Certified Trainer
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block bg-[#7EC8E3] text-[#1E1B6B] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Personalized Training Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                "Students don't fail English tests due to lack of English — they fail due to faulty test strategies."
              </h2>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                At EngliAura, every student receives my personal attention. Unlike generic coaching centers that rely on outdated templates, we decode the exact evaluation criteria used by IELTS (British Council/IDP) and PTE Pearson examiners.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold pt-2">
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC8E3] shrink-0" />
                  <span>No Generic Templates — Customized Rubrics</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC8E3] shrink-0" />
                  <span>Direct WhatsApp Line for Doubt Resolution</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC8E3] shrink-0" />
                  <span>Real Exam Simulation Portal Included</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#7EC8E3] shrink-0" />
                  <span>1-on-1 Live Mock Evaluation</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-[#2E2A9E] px-6 py-3 rounded-full font-extrabold text-sm shadow-md hover:bg-[#EEF0FB]"
                >
                  <span>Read Dr. Maryam's Full Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COURSE TRACKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            Clear & Transparent Fee Structure
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E1B6B]">
            Choose Your EngliAura Training Track
          </h2>
          <p className="text-gray-600 text-base">
            Select between our Month 1 Core Mastery track or Month 2/3 Advanced Evaluation track for IELTS and PTE Academic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          {tracks.map((track, idx) => (
            <CourseCard
              key={track.id}
              track={track}
              badge={idx === 0 ? 'Most Popular' : 'Advanced Evaluation'}
              popular={idx === 0}
            />
          ))}
        </div>
      </section>

      {/* WEEKLY CYCLE & METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF0FB]/60 border border-[#C9CBF0] rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B6B]">
              The EngliAura Weekly Training Cycle
            </h3>
            <p className="text-gray-600 text-sm">
              Structured to build confidence, eliminate exam anxiety, and lock in high band scores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#C9CBF0]/50 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#2E2A9E] text-white flex items-center justify-center font-black">
                01
              </div>
              <h4 className="font-extrabold text-lg text-[#1E1B6B]">Day 1: Strategy Lecture</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                In-depth breakdown of module questions, mark distribution, and time-saving shortcuts directly taught by Dr. Maryam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#C9CBF0]/50 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#4B3FCB] text-white flex items-center justify-center font-black">
                02
              </div>
              <h4 className="font-extrabold text-lg text-[#1E1B6B]">Days 2–5: Daily Practice</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Targeted daily practice tests inside the portal followed by live trainer discussions and error log corrections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#C9CBF0]/50 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#7EC8E3] text-[#1E1B6B] flex items-center justify-center font-black">
                03
              </div>
              <h4 className="font-extrabold text-lg text-[#1E1B6B]">Day 6: Module Mock</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full-length simulated mock exam evaluated against official band rubrics with personalized trainer feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1 rounded-full text-xs font-bold uppercase">
            Proven Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E1B6B]">
            What EngliAura Students Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-700 italic leading-relaxed">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF0FB]">
                <div className="font-extrabold text-sm text-[#1E1B6B]">{item.name}</div>
                <div className="text-xs font-bold text-[#4B3FCB]">{item.score}</div>
                <div className="text-[11px] text-gray-400">{item.test} • {item.city}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENROLLMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2E2A9E] via-[#4B3FCB] to-[#1E1B6B] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black">
              Ready to Achieve Your IELTS or PTE Target Score?
            </h2>
            <p className="text-gray-200 text-sm sm:text-base">
              Seats for 1-on-1 personal training are strictly limited each week. Reserve your slot now or register for our next group batch.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/enroll"
                className="bg-[#7EC8E3] text-[#1E1B6B] px-8 py-4 rounded-full font-black text-base hover:bg-white transition-all shadow-lg"
              >
                Enroll Now in EngliAura
              </Link>
              <a
                href="https://wa.me/923122498042"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-full font-bold text-base border border-white/20 transition-all"
              >
                Speak to Dr. Maryam on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
