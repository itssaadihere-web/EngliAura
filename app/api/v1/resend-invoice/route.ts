import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase/admin';
import { generateInvoiceHtml } from '../../../../lib/invoice-generator';
import { sendInvoiceEmail } from '../../../../lib/resend';
import { Registration } from '../../../../types';

export async function POST(req: NextRequest) {
  try {
    const { registrationId } = await req.json();

    if (!registrationId) {
      return NextResponse.json({ success: false, message: 'Missing registrationId' }, { status: 400 });
    }

    const { data: reg, error } = await supabaseAdmin
      .from('registrations')
      .select('*')
      .eq('id', registrationId)
      .single();

    if (error || !reg) {
      return NextResponse.json({ success: false, message: 'Registration record not found' }, { status: 404 });
    }

    const invoiceHtml = generateInvoiceHtml(reg as Registration);
    const emailResult = await sendInvoiceEmail(
      reg.email,
      reg.full_name,
      reg.invoice_number,
      invoiceHtml
    );

    return NextResponse.json({
      success: true,
      message: `Invoice ${reg.invoice_number} sent to ${reg.email}`,
      emailResult,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
