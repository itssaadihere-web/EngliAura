'use me';
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import SlotPicker from '../../components/SlotPicker';
import { TrainingCategory, ClassType, EnrollmentTrack, Registration } from '../../types';
import { formatCurrencyPKR, generateInvoiceNumber } from '../../lib/utils';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Award,
  Sparkles,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnrollPage() {
  const searchParams = useSearchParams();
  const defaultTrack = (searchParams.get('track') as EnrollmentTrack) || 'Month 1: Core Training';

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedRegistration, setSubmittedRegistration] = useState<Registration | null>(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [city, setCity] = useState('');
  
  const [category, setCategory] = useState<TrainingCategory>('IELTS');
  const [track, setTrack] = useState<EnrollmentTrack>(defaultTrack);
  const [classType, setClassType] = useState<ClassType>('Group');

  const [slotStart, setSlotStart] = useState<string>('');
  const [slotEnd, setSlotEnd] = useState<string>('');
  const [paymentMode, setPaymentMode] = useState<string>('Bank Transfer / Sadapay');

  const totalAmount = track.includes('Month 1') ? 15000 : 10000;

  useEffect(() => {
    if (searchParams.get('track')) {
      setTrack(searchParams.get('track') as EnrollmentTrack);
    }
  }, [searchParams]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!fullName || !email || !whatsappNumber || !city) {
        alert('Please fill out all personal details.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!slotStart) {
        alert('Please select a start date and class time slot.');
        return;
      }
      setStep(4);
    }
  };

  const handleSubmitRegistration = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          email,
          whatsapp_number: whatsappNumber,
          city,
          category,
          type: classType,
          track,
          selected_slot_start: slotStart,
          selected_slot_end: slotEnd || slotStart,
          total_amount: totalAmount,
          payment_mode: paymentMode,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedRegistration(data.registration);
        setStep(5);
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        alert(data.message || 'Error creating registration.');
      }
    } catch (err: any) {
      alert('Failed to submit registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-lavender-wash py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-[#2E2A9E] border border-[#C9CBF0] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#7EC8E3] fill-current" />
            <span>EngliAura Admission Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E1B6B]">
            Enrollment & Slot Booking Form
          </h1>
          <p className="text-sm text-gray-600">
            Trainer: <strong>Dr. Maryam Musharraf</strong> • Direct Student Registration
          </p>
        </div>

        {/* Progress Tracker */}
        {step <= 4 && (
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2">
              <span className={step >= 1 ? 'text-[#2E2A9E]' : ''}>1. Student Info</span>
              <span className={step >= 2 ? 'text-[#2E2A9E]' : ''}>2. Track & Category</span>
              <span className={step >= 3 ? 'text-[#2E2A9E]' : ''}>3. Slot Selection</span>
              <span className={step >= 4 ? 'text-[#2E2A9E]' : ''}>4. Fee & Payment</span>
            </div>
            <div className="w-full h-2.5 bg-white rounded-full overflow-hidden border border-[#C9CBF0]/60">
              <div
                className="h-full bg-gradient-to-r from-[#2E2A9E] via-[#4B3FCB] to-[#7EC8E3] transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-[#C9CBF0] shadow-2xl p-6 sm:p-10">
          
          {/* STEP 1: Personal Information */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <h2 className="text-xl font-extrabold text-[#1E1B6B] border-b border-[#EEF0FB] pb-3">
                Step 1: Student Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ali Raza"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:ring-2 focus:ring-[#2E2A9E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="ali.raza@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:ring-2 focus:ring-[#2E2A9E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    WhatsApp Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:ring-2 focus:ring-[#2E2A9E] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    City / Country *
                  </label>
                  <div className="relative">
                    <MapPin className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lahore, Pakistan"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:ring-2 focus:ring-[#2E2A9E] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#2E2A9E] text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-[#1E1B6B] transition-colors"
                >
                  <span>Continue to Select Track</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Category & Track Selection */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-8">
              <h2 className="text-xl font-extrabold text-[#1E1B6B] border-b border-[#EEF0FB] pb-3">
                Step 2: Select Training Track & Format
              </h2>

              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                  Target English Test Category
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {(['IELTS', 'PTE'] as TrainingCategory[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`p-4 rounded-2xl border text-center font-black text-lg transition-all ${
                        category === cat
                          ? 'bg-[#2E2A9E] text-white border-[#2E2A9E] shadow-md'
                          : 'bg-white text-gray-700 border-[#C9CBF0] hover:bg-[#EEF0FB]/50'
                      }`}
                    >
                      {cat} Coaching
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                  Enrollment Track
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setTrack('Month 1: Core Training')}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      track === 'Month 1: Core Training'
                        ? 'bg-[#EEF0FB] border-[#2E2A9E] ring-2 ring-[#2E2A9E]'
                        : 'bg-white border-[#C9CBF0] hover:bg-[#EEF0FB]/30'
                    }`}
                  >
                    <div className="font-extrabold text-base text-[#1E1B6B]">Track A (Month 1: Core)</div>
                    <div className="text-xs text-gray-600 mt-1">4 Weeks full module lectures & daily practice</div>
                    <div className="text-sm font-black text-[#2E2A9E] mt-3">PKR 15,000</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTrack('Month 2: Advanced Track')}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      track === 'Month 2: Advanced Track'
                        ? 'bg-[#EEF0FB] border-[#2E2A9E] ring-2 ring-[#2E2A9E]'
                        : 'bg-white border-[#C9CBF0] hover:bg-[#EEF0FB]/30'
                    }`}
                  >
                    <div className="font-extrabold text-base text-[#1E1B6B]">Track B (Month 2/3: Evaluation)</div>
                    <div className="text-xs text-gray-600 mt-1">Daily portal full mocks & live speaking evaluation</div>
                    <div className="text-sm font-black text-[#4B3FCB] mt-3">PKR 10,000 / month</div>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                  Class Format
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {(['Group', '1-on-1'] as ClassType[]).map((ct) => (
                    <button
                      key={ct}
                      type="button"
                      onClick={() => setClassType(ct)}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        classType === ct
                          ? 'bg-[#4B3FCB] text-white border-[#4B3FCB] shadow-md'
                          : 'bg-white text-gray-700 border-[#C9CBF0] hover:bg-[#EEF0FB]/50'
                      }`}
                    >
                      <div className="font-bold text-sm">{ct} Sessions</div>
                      <div className={`text-[11px] mt-0.5 ${classType === ct ? 'text-[#C9CBF0]' : 'text-gray-500'}`}>
                        {ct === 'Group' ? 'Unlimited Seats' : 'Exclusive Calendar Slot'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm text-gray-600 hover:bg-gray-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#2E2A9E] text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-[#1E1B6B]"
                >
                  <span>Proceed to Slot Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Slot Selection */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-6">
              <h2 className="text-xl font-extrabold text-[#1E1B6B] border-b border-[#EEF0FB] pb-3">
                Step 3: Select Class Slot & Schedule
              </h2>

              <SlotPicker
                classType={classType}
                selectedStart={slotStart}
                selectedEnd={slotEnd}
                onSlotSelect={(start, end) => {
                  setSlotStart(start);
                  setSlotEnd(end);
                }}
              />

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm text-gray-600 hover:bg-gray-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#2E2A9E] text-white px-7 py-3 rounded-2xl font-bold text-sm hover:bg-[#1E1B6B]"
                >
                  <span>Review Dues & Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Review & Payment Options */}
          {step === 4 && (
            <div className="space-y-8">
              <h2 className="text-xl font-extrabold text-[#1E1B6B] border-b border-[#EEF0FB] pb-3">
                Step 4: Review Enrollment Summary & Confirm
              </h2>

              <div className="bg-[#EEF0FB]/60 border border-[#C9CBF0] rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#C9CBF0]/60 pb-4">
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase">Candidate</div>
                    <div className="font-extrabold text-base text-[#1E1B6B]">{fullName}</div>
                    <div className="text-xs text-gray-600">{email} | {whatsappNumber}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 font-bold uppercase">Location</div>
                    <div className="font-bold text-sm text-[#1E1B6B]">{city}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-gray-700">
                  <div>
                    <span className="text-gray-400 block">Category:</span>
                    <strong className="text-[#2E2A9E]">{category} Coaching</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Format:</span>
                    <strong>{classType} Sessions</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Selected Track:</span>
                    <strong>{track}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C9CBF0]/60 flex justify-between items-center">
                  <span className="font-extrabold text-gray-800">Total Program Fee:</span>
                  <span className="text-2xl font-black text-[#2E2A9E]">{formatCurrencyPKR(totalAmount)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Bank Transfer / Sadapay', 'JazzCash / EasyPaisa', 'DirectPay Gateway'].map((pm) => (
                    <button
                      key={pm}
                      type="button"
                      onClick={() => setPaymentMode(pm)}
                      className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                        paymentMode === pm
                          ? 'bg-[#2E2A9E] text-white border-[#2E2A9E]'
                          : 'bg-white text-gray-700 border-[#C9CBF0] hover:bg-[#EEF0FB]/40'
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8F9FE] border border-[#C9CBF0] space-y-2 text-xs text-gray-700">
                <div className="font-bold text-sm text-[#2E2A9E] flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Official Fee Deposit Account Details</span>
                </div>
                <div><strong>Bank Name:</strong> Meezan Bank / Sadapay / Nayapay</div>
                <div><strong>Account Title:</strong> EngliAura by Maryam / Dr. Maryam Musharraf</div>
                <div><strong>Account / IBAN:</strong> PK36MEZN0012345678901234</div>
                <div className="text-gray-500 pt-1">
                  * Upon submitting registration below, an automated official invoice (EAM-XXXXXX) will be generated and emailed to you.
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm text-gray-600 hover:bg-gray-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  disabled={loading}
                  onClick={handleSubmitRegistration}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white px-8 py-3.5 rounded-2xl font-extrabold text-base shadow-xl hover:brightness-110 disabled:opacity-50"
                >
                  {loading ? 'Generating Invoice...' : 'Submit & Generate Invoice'}
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation & Invoice Success State */}
          {step === 5 && submittedRegistration && (
            <div className="text-center space-y-6 py-6">
              <div className="w-20 h-20 bg-[#EEF0FB] text-[#2E2A9E] rounded-full mx-auto flex items-center justify-center border-2 border-[#7EC8E3]">
                <CheckCircle2 className="w-12 h-12 text-[#2E2A9E]" />
              </div>

              <div className="space-y-2">
                <span className="bg-[#EEF0FB] text-[#2E2A9E] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  Registration Received — Pending Fee Deposit
                </span>
                <h2 className="text-3xl font-black text-[#1E1B6B]">
                  Welcome to EngliAura, {submittedRegistration.full_name}!
                </h2>
                <p className="text-sm text-gray-600 max-w-lg mx-auto">
                  Your official invoice <strong>#{submittedRegistration.invoice_number}</strong> has been generated and dispatched to <strong>{submittedRegistration.email}</strong>.
                </p>
              </div>

              <div className="bg-[#EEF0FB]/70 border border-[#C9CBF0] rounded-2xl p-6 max-w-lg mx-auto text-left space-y-3">
                <div className="flex justify-between items-center border-b border-[#C9CBF0] pb-3 text-xs font-bold text-gray-500">
                  <span>INVOICE NUMBER</span>
                  <span className="text-[#2E2A9E] font-black">{submittedRegistration.invoice_number}</span>
                </div>
                <div className="text-sm space-y-1">
                  <div><strong>Course:</strong> EngliAura {submittedRegistration.category} ({submittedRegistration.type})</div>
                  <div><strong>Track:</strong> {submittedRegistration.track}</div>
                  <div><strong>Total Amount:</strong> {formatCurrencyPKR(submittedRegistration.total_amount)}</div>
                  <div><strong>Payment Status:</strong> <span className="text-amber-600 font-bold">{submittedRegistration.payment_status}</span></div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`https://wa.me/923122498042?text=Hello%20Dr.%20Maryam!%20I%20have%20completed%20registration%20invoice%20${submittedRegistration.invoice_number}%20and%20want%20to%20send%20my%20payment%20proof.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-7 py-3.5 rounded-2xl font-extrabold text-sm shadow-md hover:bg-[#20ba59] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send Payment Proof on WhatsApp</span>
                </a>
                <a
                  href="/"
                  className="bg-[#EEF0FB] text-[#2E2A9E] px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#C9CBF0]"
                >
                  Back to Homepage
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
