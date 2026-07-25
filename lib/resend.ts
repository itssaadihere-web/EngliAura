import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || 're_mock_key';

export const resend = new Resend(resendApiKey);

export async function sendInvoiceEmail(
  toEmail: string,
  studentName: string,
  invoiceNumber: string,
  invoiceHtml: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.log(`[Resend Mock] Skipping email delivery for ${invoiceNumber} to ${toEmail}. Set RESEND_API_KEY in .env.local.`);
    return { success: true, mocked: true };
  }

  try {
    const response = await resend.emails.send({
      from: 'EngliAura Billing <billing@engliaura.com>',
      to: [toEmail],
      subject: `Invoice ${invoiceNumber} - Official Enrollment confirmation | EngliAura by Maryam`,
      html: invoiceHtml,
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending invoice email via Resend:', error);
    return { success: false, error };
  }
}
