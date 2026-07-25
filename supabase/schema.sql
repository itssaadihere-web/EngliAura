-- Schema for EngliAura by Maryam
-- Execute this SQL script in the Supabase SQL Editor

CREATE TYPE training_category AS ENUM ('IELTS', 'PTE');
CREATE TYPE class_type AS ENUM ('1-on-1', 'Group');
CREATE TYPE enrollment_track AS ENUM ('Month 1: Core Training', 'Month 2: Advanced Track', 'Month 3: Extension');
CREATE TYPE payment_status AS ENUM ('Pending', 'Completed', 'Failed');

-- Registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(50) NOT NULL,
  city VARCHAR(100) NOT NULL,
  category training_category NOT NULL,
  type class_type NOT NULL,
  track enrollment_track NOT NULL,
  selected_slot_start TIMESTAMP WITH TIME ZONE NOT NULL,
  selected_slot_end TIMESTAMP WITH TIME ZONE NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  remaining_dues DECIMAL(10, 2) DEFAULT 0,
  payment_mode VARCHAR(100),
  invoice_number VARCHAR(100) UNIQUE,
  payment_status payment_status DEFAULT 'Pending',
  gateway_reference VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Blocked slots table for 1-on-1 conflict prevention
CREATE TABLE IF NOT EXISTS blocked_slots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID REFERENCES registrations(id) ON DELETE CASCADE,
  slot_start TIMESTAMP WITH TIME ZONE NOT NULL,
  slot_end TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

CREATE INDEX IF NOT EXISTS idx_blocked_slots_time ON blocked_slots (slot_start, slot_end);

-- Admin users table for dashboard access (linked to auth.users)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Row Level Security Setup
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public can insert new registrations during checkout
CREATE POLICY "Public insert registrations" ON registrations 
  FOR INSERT WITH CHECK (true);

-- Public can view blocked slots to check availability during booking
CREATE POLICY "Public select blocked slots" ON blocked_slots 
  FOR SELECT USING (true);

-- Admin users get full access
CREATE POLICY "Admins full access registrations" ON registrations 
  FOR ALL USING (
    auth.uid() IN (SELECT id FROM admin_users)
  );

CREATE POLICY "Admins full access blocked slots" ON blocked_slots 
  FOR ALL USING (
    auth.uid() IN (SELECT id FROM admin_users)
  );

CREATE POLICY "Admins read own admin entry" ON admin_users 
  FOR SELECT USING (
    auth.uid() = id
  );
