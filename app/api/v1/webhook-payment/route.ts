import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase/admin';
import { generateInvoiceHtml } from '../../../../lib/invoice-generator';
import { sendInvoiceEmail } from '../../../../lib/resend';
import { Registration } from '../../../../types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { invoice_number, gateway_reference, status = 'SUCCESS', signature } = body;

    if (!invoice_number) {
      return NextResponse.json({ success: false, message: 'Missing invoice_number' }, { status: 400 });
    }

    const newPaymentStatus = status === 'SUCCESS' ? 'Completed' : 'Failed';

    const { data: updatedReg, error } = await supabaseAdmin
      .from('registrations')
      .update({
        payment_status: newPaymentStatus,
        gateway_reference: gateway_reference || 'GW-REF-' + Date.now(),
        remaining_dues: newPaymentStatus === 'Completed' ? 0 : undefined,
      })
      .eq('invoice_number', invoice_number)
      .select()
      .single();

    if (error || !updatedReg) {
      console.warn('Webhook received but record update warning:', error?.message);
    }

    if (newPaymentStatus === 'Completed' && updatedReg) {
      if (updatedReg.type === '1-on-1') {
        await supabaseAdmin.from('blocked_slots').insert({
          registration_id: updatedReg.id,
          slot_start: updatedReg.selected_slot_start,
          slot_end: updatedReg.selected_slot_end,
        });
      }

      const invoiceHtml = generateInvoiceHtml(updatedReg as Registration);
      await sendInvoiceEmail(
        updatedReg.email,
        updatedReg.full_name,
        updatedReg.invoice_number,
        invoiceHtml
      );
    }

    return NextResponse.json({
      success: true,
      invoice_number,
      payment_status: newPaymentStatus,
      message: 'Payment webhook processed successfully',
    });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
