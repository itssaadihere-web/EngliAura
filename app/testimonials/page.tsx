import React from 'react';
import Link from 'next/link';
import { Star, Award, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const reviews = [
    {
      name: 'Dr. Shahzaib Ahmed',
      exam: 'IELTS Academic',
      score: 'Band 8.0 (L8.5, R8.0, W7.5, S8.0)',
      target: 'UK GMC / PLAB Registration',
      story: 'I was stuck at Writing 6.5 after two attempts with local academies. Dr. Maryam personally reviewed my essays, identified my structural flaws, and guided me to a 7.5 in writing! Forever grateful.',
      location: 'Lahore',
    },
    {
      name: 'Ayesha Malik',
      exam: 'PTE Academic',
      score: 'Overall 84 (S90, W85, R82, L81)',
      target: 'Australian PR Visa',
      story: 'Dr. Maryam’s oral fluency technique for PTE speaking transformed my performance. From scoring 58 in speaking previously to achieving a PERFECT 90 in speaking under her direct supervision!',
      location: 'Islamabad',
    },
    {
      name: 'Hamza Tariq',
      exam: 'IELTS General',
      score: 'CLB 9 (L8.0, R7.5, W7.5, S7.5)',
      target: 'Canada Express Entry',
      story: 'EngliAura is not just an institute, it is a personal mentorship program. Dr. Maryam is always accessible and her mock exam evaluation matches actual British Council standards 100%.',
      location: 'Karachi',
    },
    {
      name: 'Fatima Noor',
      exam: 'PTE Academic',
      score: 'Overall 79 (All Modules 79+)',
      target: 'New Zealand Student Visa',
      story: 'Track B daily portal practice tests and mandatory live speaking kept me disciplined. Achieved my 79+ target in 3 weeks.',
      location: 'Multan',
    },
    {
      name: 'Usman Ghani',
      exam: 'IELTS Academic',
      score: 'Band 7.5 (L8.0, R8.5, W7.0, S7.5)',
      target: 'German Master’s Scholarship',
      story: 'The 1-on-1 speaking practice with Dr. Maryam gave me the exact confidence needed. No memorized answers, pure natural delivery.',
      location: 'Peshawar',
    },
  ];

  return (
    <div className="space-y-16 pb-20 pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
          Student Success Stories
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#1E1B6B]">
          Verified Band Score Results
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Read how Dr. Maryam Musharraf helped over 5,000+ candidates crack their target IELTS & PTE band scores.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-[#C9CBF0]/60 shadow-card flex flex-col justify-between space-y-6 hover:shadow-xl transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C9CBF0]" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{r.story}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EEF0FB] space-y-2">
                <div className="font-extrabold text-base text-[#1E1B6B]">{r.name}</div>
                <div className="text-xs font-extrabold text-[#2E2A9E] bg-[#EEF0FB] px-3 py-1 rounded-full w-fit">
                  {r.score}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Goal: {r.target} • {r.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white p-10 rounded-3xl space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black">Want to Be Our Next Success Story?</h3>
          <p className="text-gray-200 text-sm max-w-xl mx-auto">
            Book your 1-on-1 or group session with Dr. Maryam Musharraf today.
          </p>
          <div className="pt-2">
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-[#7EC8E3] text-[#1E1B6B] px-8 py-3.5 rounded-full font-black text-sm hover:bg-white transition-all shadow-md"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
