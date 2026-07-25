import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase/admin';

export async function GET(req: NextRequest) {
  try {
    const { data: blocked, error } = await supabaseAdmin
      .from('blocked_slots')
      .select('id, slot_start, slot_end');

    if (error) {
      console.warn('Database connection warning for slots:', error.message);
      return NextResponse.json({ success: true, slots: [] });
    }

    const slots = (blocked || []).map((s) => ({
      start: s.slot_start,
      end: s.slot_end,
    }));

    return NextResponse.json({ success: true, slots });
  } catch (err: any) {
    return NextResponse.json({ success: true, slots: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slot_start, slot_end, registration_id } = body;

    if (!slot_start || !slot_end) {
      return NextResponse.json({ success: false, message: 'Missing slot_start or slot_end' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('blocked_slots')
      .insert({
        slot_start,
        slot_end,
        registration_id: registration_id || null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, slot: data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
