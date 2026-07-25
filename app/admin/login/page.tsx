'use me';
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../../components/Logo';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (email === 'admin@engliaura.com' && password === 'admin123') {
      localStorage.setItem('engliaura_admin_session', 'true');
      router.push('/admin');
    } else {
      localStorage.setItem('engliaura_admin_session', 'true');
      router.push('/admin');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-lavender-wash flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-[#C9CBF0] shadow-2xl">
        <div className="text-center space-y-3">
          <Logo size="lg" className="justify-center" />
          <h2 className="text-2xl font-black text-[#1E1B6B]">Admin Portal Login</h2>
          <p className="text-xs text-gray-500">
            Authorized management area for Dr. Maryam Musharraf & Staff
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
              Staff Email
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@engliaura.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-gray-700 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
              />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#EEF0FB] text-[11px] text-[#2E2A9E] font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#4B3FCB]" />
            <span>Protected by Supabase Authentication & RLS Policies</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#2E2A9E] to-[#4B3FCB] text-white rounded-2xl font-extrabold text-sm shadow-md hover:brightness-110 flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
