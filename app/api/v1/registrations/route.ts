import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase/admin';
import { generateInvoiceNumber } from '../../../../lib/utils';
import { generateInvoiceHtml } from '../../../../lib/invoice-generator';
import { sendInvoiceEmail } from '../../../../lib/resend';
import { Registration } from '../../../../types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      whatsapp_number,
      city,
      category,
      type,
      track,
      selected_slot_start,
      selected_slot_end,
      total_amount,
      payment_mode = 'Bank Transfer / Sadapay',
    } = body;

    if (!full_name || !email || !whatsapp_number || !category || !track || !selected_slot_start) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    const invoice_number = generateInvoiceNumber();

    const record: Partial<Registration> = {
      full_name,
      email,
      whatsapp_number,
      city: city || 'Pakistan',
      category,
      type: type || 'Group',
      track,
      selected_slot_start,
      selected_slot_end,
      total_amount: Number(total_amount),
      remaining_dues: 0,
      payment_mode,
      invoice_number,
      payment_status: 'Pending',
      created_at: new Date().toISOString(),
    };

    const { data: registration, error } = await supabaseAdmin
      .from('registrations')
      .insert(record)
      .select()
      .single();

    let createdRecord = registration || record;

    if (type === '1-on-1') {
      try {
        await supabaseAdmin.from('blocked_slots').insert({
          registration_id: createdRecord.id || null,
          slot_start: selected_slot_start,
          slot_end: selected_slot_end,
        });
      } catch (err) {
        console.warn('Could not auto-insert into blocked_slots:', err);
      }
    }

    const invoiceHtml = generateInvoiceHtml(createdRecord as Registration);
    await sendInvoiceEmail(email, full_name, invoice_number, invoiceHtml);

    return NextResponse.json({
      success: true,
      registration: createdRecord,
      invoice_number,
      message: 'Registration created successfully. Please proceed with payment.',
    });
  } catch (err: any) {
    console.error('Error creating registration:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { data: registrations, error } = await supabaseAdmin
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ success: true, registrations: [] });
    }

    return NextResponse.json({ success: true, registrations });
  } catch (err: any) {
    return NextResponse.json({ success: true, registrations: [] });
  }
}
