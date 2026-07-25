'use me';
'use client';

import React, { useState, useEffect } from 'react';
import { ClassType } from '../types';
import { Calendar, Clock, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';
import { formatTimeSlot } from '../lib/utils';

interface SlotPickerProps {
  classType: ClassType;
  selectedStart: string;
  selectedEnd: string;
  onSlotSelect: (start: string, end: string) => void;
}

export default function SlotPicker({
  classType,
  selectedStart,
  selectedEnd,
  onSlotSelect,
}: SlotPickerProps) {
  const [blockedSlots, setBlockedSlots] = useState<{ start: string; end: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );

  const groupSlots = [
    { label: 'Morning Batch (10:00 AM - 11:30 AM PKT)', startHour: 10, endHour: 11.5 },
    { label: 'Afternoon Batch (03:00 PM - 04:30 PM PKT)', startHour: 15, endHour: 16.5 },
    { label: 'Evening Batch (07:00 PM - 08:30 PM PKT)', startHour: 19, endHour: 20.5 },
    { label: 'Night Intensive (09:00 PM - 10:30 PM PKT)', startHour: 21, endHour: 22.5 },
  ];

  const oneOnOneSlots = [
    { label: '11:00 AM - 12:00 PM PKT', startHour: 11, endHour: 12 },
    { label: '02:00 PM - 03:00 PM PKT', startHour: 14, endHour: 15 },
    { label: '05:00 PM - 06:00 PM PKT', startHour: 17, endHour: 18 },
    { label: '08:00 PM - 09:00 PM PKT', startHour: 20, endHour: 21 },
  ];

  useEffect(() => {
    if (classType === '1-on-1') {
      setLoading(true);
      fetch('/api/v1/slots')
        .then((res) => res.json())
        .then((data) => {
          if (data.success && Array.isArray(data.slots)) {
            setBlockedSlots(data.slots);
          }
        })
        .catch((err) => console.error('Error fetching blocked slots:', err))
        .finally(() => setLoading(false));
    }
  }, [classType, selectedDate]);

  const constructIso = (dateStr: string, hourFloat: number) => {
    const hours = Math.floor(hourFloat);
    const minutes = (hourFloat - hours) * 60;
    const date = new Date(dateStr);
    date.setHours(hours, minutes, 0, 0);
    return date.toISOString();
  };

  const isSlotBlocked = (startIso: string, endIso: string) => {
    const startTime = new Date(startIso).getTime();
    const endTime = new Date(endIso).getTime();
    return blockedSlots.some((b) => {
      const bStart = new Date(b.start).getTime();
      const bEnd = new Date(b.end).getTime();
      return startTime < bEnd && endTime > bStart;
    });
  };

  const slotsToDisplay = classType === 'Group' ? groupSlots : oneOnOneSlots;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#2E2A9E]" />
          <span>Select Start Date</span>
        </label>
        <input
          type="date"
          min={new Date().toISOString().split('T')[0]}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full sm:w-auto px-4 py-3 rounded-xl border border-[#C9CBF0] bg-[#EEF0FB]/50 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#2E2A9E]"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#2E2A9E]" />
          <span>Available Time Slots ({classType} Mode)</span>
        </label>

        {loading ? (
          <div className="p-6 text-center text-sm text-gray-500 animate-pulse bg-gray-50 rounded-2xl">
            Checking Dr. Maryam's live calendar availability...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {slotsToDisplay.map((slot, index) => {
              const startIso = constructIso(selectedDate, slot.startHour);
              const endIso = constructIso(selectedDate, slot.endHour);
              const blocked = classType === '1-on-1' && isSlotBlocked(startIso, endIso);
              const isSelected = selectedStart === startIso;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={blocked}
                  onClick={() => onSlotSelect(startIso, endIso)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                    blocked
                      ? 'bg-gray-100 border-gray-200 opacity-50 cursor-not-allowed text-gray-400'
                      : isSelected
                      ? 'bg-[#2E2A9E] text-white border-[#2E2A9E] shadow-md scale-[1.02]'
                      : 'bg-white text-gray-800 border-[#C9CBF0]/70 hover:border-[#2E2A9E] hover:bg-[#EEF0FB]/40'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">{slot.label}</div>
                    <div className={`text-xs mt-0.5 ${isSelected ? 'text-[#C9CBF0]' : 'text-gray-500'}`}>
                      {blocked
                        ? 'Booked by another candidate'
                        : classType === 'Group'
                        ? 'Unlimited Seats Available'
                        : '1-on-1 Dedicated Trainer Slot'}
                    </div>
                  </div>

                  {isSelected && <CheckCircle2 className="w-5 h-5 text-[#7EC8E3] shrink-0" />}
                  {blocked && <ShieldAlert className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {classType === '1-on-1' && (
        <div className="p-4 rounded-2xl bg-[#EEF0FB] border border-[#C9CBF0] flex items-start gap-3 text-xs text-[#2E2A9E]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#4B3FCB]" />
          <span>
            <strong>1-on-1 Guarantee:</strong> Once you complete registration, your selected time slot is locked exclusively for you in Dr. Maryam's calendar.
          </span>
        </div>
      )}
    </div>
  );
}
