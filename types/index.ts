export type TrainingCategory = 'IELTS' | 'PTE';
export type ClassType = '1-on-1' | 'Group';
export type EnrollmentTrack = 
  | 'Month 1: Core Training' 
  | 'Month 2: Advanced Track' 
  | 'Month 3: Extension';
export type PaymentStatus = 'Pending' | 'Completed' | 'Failed';

export interface Registration {
  id: string;
  full_name: string;
  email: string;
  whatsapp_number: string;
  city: string;
  category: TrainingCategory;
  type: ClassType;
  track: EnrollmentTrack;
  selected_slot_start: string;
  selected_slot_end: string;
  total_amount: number;
  remaining_dues: number;
  payment_mode?: string;
  invoice_number: string;
  payment_status: PaymentStatus;
  gateway_reference?: string;
  created_at: string;
}

export interface BlockedSlot {
  id: string;
  registration_id?: string;
  slot_start: string;
  slot_end: string;
  created_at: string;
}

export interface AdminUser {
  id: string;
  full_name: string;
  role: 'admin' | 'superadmin';
  created_at: string;
}

export interface CourseTrackInfo {
  id: string;
  name: EnrollmentTrack;
  title: string;
  pricePKR: number;
  duration: string;
  description: string;
  features: string[];
  schedule: string[];
  recommendedFor: string;
}
