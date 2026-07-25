'use me';
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../components/Logo';
import { Registration, PaymentStatus } from '../../types';
import { formatCurrencyPKR, formatDate } from '../../lib/utils';
import { 
  Users, 
  DollarSign, 
  Clock, 
  Calendar, 
  Search, 
  Download, 
  Mail, 
  CheckCircle2, 
  XCircle, 
  RefreshCw,
  LogOut,
  SlidersHorizontal,
  Lock,
  Plus
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  
  const [resendStatus, setResendStatus] = useState<string>('');

  const mockRegistrations: Registration[] = [
    {
      id: 'reg-001',
      full_name: 'Dr. Shahzaib Ahmed',
      email: 'shahzaib.med@gmail.com',
      whatsapp_number: '+92 300 8765432',
      city: 'Lahore',
      category: 'IELTS',
      type: '1-on-1',
      track: 'Month 1: Core Training',
      selected_slot_start: new Date(Date.now() + 86400000).toISOString(),
      selected_slot_end: new Date(Date.now() + 90000000).toISOString(),
      total_amount: 15000,
      remaining_dues: 0,
      payment_mode: 'Sadapay',
      invoice_number: 'EAM-847291',
      payment_status: 'Completed',
      created_at: new Date().toISOString(),
    },
    {
      id: 'reg-002',
      full_name: 'Ayesha Malik',
      email: 'ayesha.m@outlook.com',
      whatsapp_number: '+92 312 9876543',
      city: 'Islamabad',
      category: 'PTE',
      type: 'Group',
      track: 'Month 2: Advanced Track',
      selected_slot_start: new Date(Date.now() + 172800000).toISOString(),
      selected_slot_end: new Date(Date.now() + 176400000).toISOString(),
      total_amount: 10000,
      remaining_dues: 0,
      payment_mode: 'Bank Transfer',
      invoice_number: 'EAM-194820',
      payment_status: 'Completed',
      created_at: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: 'reg-003',
      full_name: 'Hamza Tariq',
      email: 'hamza.tariq@gmail.com',
      whatsapp_number: '+92 333 4567890',
      city: 'Karachi',
      category: 'IELTS',
      type: '1-on-1',
      track: 'Month 1: Core Training',
      selected_slot_start: new Date(Date.now() + 259200000).toISOString(),
      selected_slot_end: new Date(Date.now() + 262800000).toISOString(),
      total_amount: 15000,
      remaining_dues: 5000,
      payment_mode: 'JazzCash',
      invoice_number: 'EAM-563910',
      payment_status: 'Pending',
      created_at: new Date(Date.now() - 172800000).toISOString(),
    },
  ];

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/registrations');
      const data = await res.json();
      if (data.success && Array.isArray(data.registrations) && data.registrations.length > 0) {
        setRegistrations(data.registrations);
      } else {
        setRegistrations(mockRegistrations);
      }
    } catch (err) {
      setRegistrations(mockRegistrations);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (id: string, newStatus: PaymentStatus) => {
    setRegistrations((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              payment_status: newStatus,
              remaining_dues: newStatus === 'Completed' ? 0 : r.remaining_dues,
            }
          : r
      )
    );
  };

  const handleResendInvoice = async (regId: string) => {
    setResendStatus(`Sending invoice for ID ${regId}...`);
    try {
      const res = await fetch('/api/v1/resend-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ registrationId: regId }),
      });
      const data = await res.json();
      setResendStatus(data.message || 'Invoice sent!');
      setTimeout(() => setResendStatus(''), 4000);
    } catch (err) {
      setResendStatus('Failed to send email');
      setTimeout(() => setResendStatus(''), 4000);
    }
  };

  const exportToCSV = () => {
    const headers = ['Invoice No', 'Full Name', 'Email', 'WhatsApp', 'City', 'Category', 'Type', 'Track', 'Total Fee', 'Remaining Dues', 'Status', 'Date'];
    const rows = filteredRegistrations.map((r) => [
      r.invoice_number,
      `"${r.full_name}"`,
      r.email,
      r.whatsapp_number,
      r.city,
      r.category,
      r.type,
      `"${r.track}"`,
      r.total_amount,
      r.remaining_dues,
      r.payment_status,
      r.created_at,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `EngliAura_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter((r) => {
    const matchesSearch =
      r.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.invoice_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'ALL' || r.payment_status === statusFilter;
    const matchesCategory = categoryFilter === 'ALL' || r.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalStudents = registrations.length;
  const totalRevenue = registrations
    .filter((r) => r.payment_status === 'Completed')
    .reduce((sum, r) => sum + Number(r.total_amount - (r.remaining_dues || 0)), 0);
  const pendingPayments = registrations.filter((r) => r.payment_status === 'Pending').length;
  const upcomingOneOnOnes = registrations.filter((r) => r.type === '1-on-1').length;

  return (
    <div className="min-h-screen bg-[#F8F9FE] pb-20">
      
      {/* Admin Top Navbar */}
      <header className="bg-[#1E1B6B] text-white border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Logo size="md" className="brightness-125" />
            <span className="bg-[#7EC8E3] text-[#1E1B6B] text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
              Staff Panel
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="text-xs font-bold text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/10"
            >
              Exit to Main Site
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {resendStatus && (
          <div className="p-4 rounded-2xl bg-[#EEF0FB] border border-[#2E2A9E] text-xs font-bold text-[#2E2A9E] shadow-lg animate-in fade-in">
            {resendStatus}
          </div>
        )}

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-sm flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#EEF0FB] text-[#2E2A9E]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-[#1E1B6B]">{totalStudents}</div>
              <div className="text-xs font-bold text-gray-500 uppercase">Total Registrations</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-sm flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-[#1E1B6B]">{formatCurrencyPKR(totalRevenue)}</div>
              <div className="text-xs font-bold text-gray-500 uppercase">Collected Revenue</div>
            </div>
          </div>

          <div className="bg-[#white] p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-sm flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-50 text-amber-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-[#1E1B6B]">{pendingPayments}</div>
              <div className="text-xs font-bold text-gray-500 uppercase">Pending Approvals</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-sm flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#EEF0FB] text-[#4B3FCB]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-[#1E1B6B]">{upcomingOneOnOnes}</div>
              <div className="text-xs font-bold text-gray-500 uppercase">1-on-1 Bookings</div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white p-6 rounded-3xl border border-[#C9CBF0]/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search student, invoice, or city..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/30 text-xs font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/40 text-xs font-bold text-[#2E2A9E]"
            >
              <option value="ALL">All Categories</option>
              <option value="IELTS">IELTS</option>
              <option value="PTE">PTE</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/40 text-xs font-bold text-[#2E2A9E]"
            >
              <option value="ALL">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>

            <button
              onClick={exportToCSV}
              className="inline-flex items-center gap-2 bg-[#2E2A9E] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#1E1B6B] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Registrations Data Table */}
        <div className="bg-white rounded-3xl border border-[#C9CBF0]/60 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#EEF0FB] flex justify-between items-center">
            <h3 className="font-black text-lg text-[#1E1B6B]">Student Admission Records</h3>
            <span className="text-xs text-gray-500 font-bold">Showing {filteredRegistrations.length} student(s)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#EEF0FB]/50 border-b border-[#C9CBF0]/60 text-[11px] font-black text-gray-500 uppercase tracking-wider">
                  <th className="p-4">Invoice No</th>
                  <th className="p-4">Student & Contact</th>
                  <th className="p-4">Program & Track</th>
                  <th className="p-4">Class Format</th>
                  <th className="p-4">Amount & Dues</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF0FB] text-xs text-gray-700">
                {filteredRegistrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-[#EEF0FB]/30 transition-colors">
                    
                    <td className="p-4 font-mono font-black text-[#2E2A9E]">
                      {reg.invoice_number}
                    </td>

                    <td className="p-4">
                      <div className="font-extrabold text-[#1E1B6B] text-sm">{reg.full_name}</div>
                      <div className="text-gray-500">{reg.email}</div>
                      <div className="text-gray-400 font-semibold">{reg.whatsapp_number} • {reg.city}</div>
                    </td>

                    <td className="p-4">
                      <span className="font-bold text-[#4B3FCB] bg-[#EEF0FB] px-2 py-0.5 rounded-md inline-block mb-1">
                        {reg.category}
                      </span>
                      <div className="font-semibold">{reg.track}</div>
                    </td>

                    <td className="p-4 font-semibold">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-black ${
                        reg.type === '1-on-1' ? 'bg-[#7EC8E3]/30 text-[#1E1B6B]' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {reg.type}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="font-black text-[#1E1B6B]">{formatCurrencyPKR(reg.total_amount)}</div>
                      {reg.remaining_dues > 0 ? (
                        <div className="text-rose-600 font-bold">Dues: {formatCurrencyPKR(reg.remaining_dues)}</div>
                      ) : (
                        <div className="text-emerald-600 font-bold">Paid in Full</div>
                      )}
                    </td>

                    <td className="p-4">
                      <select
                        value={reg.payment_status}
                        onChange={(e) => handleStatusChange(reg.id, e.target.value as PaymentStatus)}
                        className={`px-2.5 py-1 rounded-lg font-extrabold text-[11px] focus:outline-none ${
                          reg.payment_status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : reg.payment_status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </td>

                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleResendInvoice(reg.id)}
                        title="Resend Invoice Email"
                        className="p-2 rounded-lg bg-[#EEF0FB] text-[#2E2A9E] hover:bg-[#C9CBF0] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
