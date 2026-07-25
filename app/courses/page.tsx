import React from 'react';
import Link from 'next/link';
import CourseCard from '../../components/CourseCard';
import { CourseTrackInfo } from '../../types';
import { Check, ArrowRight, BookOpen, Layers, Clock, ShieldCheck } from 'lucide-react';

export default function CoursesPage() {
  const tracks: CourseTrackInfo[] = [
    {
      id: 'Track A',
      name: 'Month 1: Core Training',
      title: 'Track A — Month 1: Core Training & Module Mastery',
      pricePKR: 15000,
      duration: '4 Weeks Full Course',
      description: '4 weeks of complete foundational and module-specific training. Covers all 4 modules for IELTS (Listening, Reading, Writing, Speaking) or PTE.',
      features: [
        'Week 1: Listening Module Strategy & Question Types',
        'Week 2: Reading Pacing, Scanning & Keyword Matching',
        'Week 3: Writing Task 1 & Task 2 Sentence Structures',
        'Week 4: Live Speaking Fluency & Full Mock Exam',
        'Daily practice tests + trainer live discussion',
        'Weekly module mock exams with score feedback',
      ],
      schedule: ['4 Weeks', 'Mon-Thu Live Classes', 'Fri Mock Exam'],
      recommendedFor: 'First-time candidates & students aiming for solid foundations.',
    },
    {
      id: 'Track B',
      name: 'Month 2: Advanced Track',
      title: 'Track B — Month 2/3: Advanced Mock & Evaluation',
      pricePKR: 10000,
      duration: 'Monthly Re-joining / Extension',
      description: 'Exam-standard full mock tests inside the portal, writing evaluation, target question dispute sessions, and mandatory daily live speaking.',
      features: [
        'Daily exam-standard full mock test inside portal',
        'Target-question feedback & dispute discussion with trainer',
        'Manual + automated writing evaluations',
        'Mandatory daily live 1-on-1/group speaking session',
        'Personalized weak-area drill exercises',
        'Exam readiness endorsement by Dr. Maryam',
      ],
      schedule: ['1 Month Extension', 'Daily Mocks', 'Daily Live Speaking'],
      recommendedFor: 'Repeat candidates, high band seekers (IELTS 8+ / PTE 79+), and Track A graduates.',
    },
  ];

  return (
    <div className="space-y-16 pb-20 pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-block bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
          Coaching Programs
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#1E1B6B]">
          IELTS & PTE Training Tracks
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Both tracks support both IELTS (Academic & General) and PTE Academic categories, in Group or 1-on-1 class formats.
        </p>
      </section>

      {/* Track Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {tracks.map((t, idx) => (
            <CourseCard key={t.id} track={t} popular={idx === 0} badge={idx === 0 ? 'Core Program' : 'Evaluation Track'} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#C9CBF0] shadow-card overflow-hidden">
          <div className="bg-[#2E2A9E] text-white p-6 sm:p-8">
            <h3 className="text-2xl font-black">Track Feature Comparison</h3>
            <p className="text-xs text-[#C9CBF0] mt-1">Detailed comparison to help you choose the right path.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EEF0FB] text-xs font-extrabold text-gray-500 uppercase bg-[#EEF0FB]/40">
                  <th className="p-4 sm:p-6">Feature</th>
                  <th className="p-4 sm:p-6 text-[#2E2A9E]">Track A (Month 1 Core)</th>
                  <th className="p-4 sm:p-6 text-[#4B3FCB]">Track B (Month 2/3 Advanced)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0FB] text-sm text-gray-700">
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#1E1B6B]">Tuition Fee</td>
                  <td className="p-4 sm:p-6 font-extrabold text-[#2E2A9E]">PKR 15,000</td>
                  <td className="p-4 sm:p-6 font-extrabold text-[#4B3FCB]">PKR 10,000 / month</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#1E1B6B]">Syllabus Coverage</td>
                  <td className="p-4 sm:p-6">Full 4-Module Strategy Lectures</td>
                  <td className="p-4 sm:p-6">Targeted Weakness Remediation</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#1E1B6B]">Mock Exams</td>
                  <td className="p-4 sm:p-6">Weekly + Final Month Mock</td>
                  <td className="p-4 sm:p-6 font-semibold text-emerald-600">Daily Exam-Standard Mocks</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#1E1B6B]">Live Speaking Sessions</td>
                  <td className="p-4 sm:p-6">Weekly Scheduled Sessions</td>
                  <td className="p-4 sm:p-6 font-semibold text-emerald-600">Mandatory Daily Live Speaking</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-6 font-bold text-[#1E1B6B]">Class Types Available</td>
                  <td className="p-4 sm:p-6">Group & 1-on-1 Available</td>
                  <td className="p-4 sm:p-6">Group & 1-on-1 Available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/enroll"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white px-8 py-4 rounded-full font-extrabold text-base shadow-xl hover:scale-105 transition-all"
        >
          <span>Proceed to Admission Form</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
