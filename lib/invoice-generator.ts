import { Registration } from '@/types';
import { formatCurrencyPKR, formatDate } from './utils';

export function generateInvoiceHtml(registration: Registration): string {
  const {
    full_name,
    email,
    whatsapp_number,
    city,
    category,
    type,
    track,
    total_amount,
    remaining_dues = 0,
    payment_mode = 'Bank Transfer / Sadapay',
    invoice_number,
    created_at,
  } = registration;

  const dateStr = formatDate(created_at || new Date().toISOString());

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice ${invoice_number} - EngliAura by Maryam</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #1e1b6b;
      margin: 0;
      padding: 0;
      background-color: #f8f9fe;
    }
    .wrapper {
      max-width: 680px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(46, 42, 158, 0.08);
      border: 1px solid #e0e3f7;
    }
    .header-band {
      background: linear-gradient(135deg, #2E2A9E 0%, #4B3FCB 50%, #7EC8E3 100%);
      padding: 24px 32px;
      color: #ffffff;
      display: table;
      width: 100%;
      box-sizing: border-box;
    }
    .header-left {
      display: table-cell;
      vertical-align: middle;
    }
    .header-right {
      display: table-cell;
      vertical-align: middle;
      text-align: right;
    }
    .brand-title {
      font-size: 24px;
      font-weight: 800;
      letter-spacing: 1px;
      margin: 0;
      text-transform: uppercase;
    }
    .brand-sub {
      font-size: 13px;
      color: #c9cbf0;
      margin-top: 4px;
      font-style: italic;
    }
    .invoice-title {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 2px;
      margin: 0;
    }
    .content {
      padding: 32px;
    }
    .info-grid {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
    }
    .info-grid td {
      vertical-align: top;
      padding: 8px 0;
    }
    .label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #6b7280;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .val-main {
      font-size: 16px;
      font-weight: 700;
      color: #1e1b6b;
    }
    .val-sub {
      font-size: 13px;
      color: #4b5563;
    }
    .amount-badge {
      background-color: #eef0fb;
      border: 1px solid #c9cbf0;
      border-radius: 12px;
      padding: 12px 18px;
      text-align: right;
    }
    .amount-val {
      font-size: 22px;
      font-weight: 900;
      color: #2e2a9e;
    }
    .table-container {
      margin-bottom: 28px;
    }
    .items-table {
      width: 100%;
      border-collapse: collapse;
      border-radius: 8px;
      overflow: hidden;
    }
    .items-table th {
      background: #2E2A9E;
      color: #ffffff;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 12px 16px;
      text-align: left;
    }
    .items-table td {
      background: #ffffff;
      border-bottom: 1px solid #e0e3f7;
      padding: 14px 16px;
      font-size: 14px;
      color: #1e1b6b;
    }
    .terms-box {
      background-color: #f8f9fe;
      border: 1px solid #e0e3f7;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 28px;
    }
    .terms-title {
      font-size: 14px;
      font-weight: 800;
      color: #2e2a9e;
      margin-top: 0;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .terms-list {
      margin: 0;
      padding-left: 20px;
      font-size: 12px;
      line-height: 1.6;
      color: #4b5563;
    }
    .terms-list li {
      margin-bottom: 8px;
    }
    .ack-text {
      font-size: 13px;
      line-height: 1.5;
      color: #374151;
      background: #eef0fb;
      padding: 14px 18px;
      border-left: 4px solid #4b3fcb;
      border-radius: 4px;
      margin-bottom: 28px;
    }
    .signatures {
      width: 100%;
      margin-top: 36px;
      margin-bottom: 20px;
    }
    .sig-cell {
      width: 50%;
      vertical-align: bottom;
    }
    .sig-line {
      border-top: 1.5px dashed #9ca3af;
      width: 80%;
      margin-top: 40px;
      padding-top: 6px;
      font-size: 12px;
      font-weight: 600;
      color: #4b5563;
    }
    .maryam-sig {
      text-align: right;
    }
    .sig-name {
      font-size: 15px;
      font-weight: 800;
      color: #2e2a9e;
    }
    .sig-role {
      font-size: 12px;
      color: #6b7280;
    }
    .thank-banner {
      background: #2E2A9E;
      color: #ffffff;
      text-align: center;
      padding: 14px;
      font-weight: 800;
      letter-spacing: 1.5px;
      font-size: 14px;
      text-transform: uppercase;
    }
    .footer-contact {
      background-color: #f3f4f6;
      padding: 16px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
    .footer-contact a {
      color: #2e2a9e;
      text-decoration: none;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header-band">
      <div class="header-left">
        <h1 class="brand-title">EngliAura</h1>
        <div class="brand-sub">by Maryam • IELTS & PTE Coaching</div>
      </div>
      <div class="header-right">
        <h2 class="invoice-title">INVOICE</h2>
      </div>
    </div>

    <div class="content">
      <table class="info-grid">
        <tr>
          <td style="width: 40%;">
            <div class="label">Invoice To</div>
            <div class="val-main">${full_name}</div>
            <div class="val-sub">${email}</div>
            <div class="val-sub">${whatsapp_number} | ${city}</div>
          </td>
          <td style="width: 30%;">
            <div class="label">Invoice Details</div>
            <div class="val-sub"><strong>No:</strong> ${invoice_number}</div>
            <div class="val-sub"><strong>Date:</strong> ${dateStr}</div>
            <div class="val-sub"><strong>Category:</strong> ${category} (${type})</div>
          </td>
          <td style="width: 30%;">
            <div class="amount-badge">
              <div class="label">Amount Received</div>
              <div class="amount-val">${formatCurrencyPKR(total_amount - remaining_dues)}</div>
            </div>
          </td>
        </tr>
      </table>

      <div class="table-container">
        <table class="items-table">
          <thead>
            <tr>
              <th>Course / Program</th>
              <th>Track</th>
              <th>Price</th>
              <th>Payment Mode</th>
              <th>Remaining Dues</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>EngliAura ${category} (${type})</strong></td>
              <td>${track}</td>
              <td>${formatCurrencyPKR(total_amount)}</td>
              <td>${payment_mode}</td>
              <td><strong>${formatCurrencyPKR(remaining_dues)}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="terms-box">
        <h3 class="terms-title">Terms & Conditions</h3>
        <ol class="terms-list">
          <li>All course fees are required to be paid in full prior to or at the commencement of the program, unless a prior arrangement has been formally agreed upon.</li>
          <li>Please note that all payments are strictly non-refundable once the course has commenced.</li>
          <li>Students are expected to maintain regular attendance and actively complete all assigned practice tasks to ensure optimal progress.</li>
          <li>EngliAura by Maryam is committed to delivering professional training and expert guidance for English test preparation. However, test results are influenced by individual effort and performance; therefore, specific scores cannot be guaranteed.</li>
        </ol>
      </div>

      <div class="ack-text">
        <strong>Enrollment Acknowledgement:</strong> By joining this training program, student <strong>${full_name}</strong> acknowledges acceptance of all EngliAura policies, class guidelines, and test preparation schedules.
      </div>

      <table class="signatures">
        <tr>
          <td class="sig-cell">
            <div class="sig-line">Student Signature</div>
          </td>
          <td class="sig-cell maryam-sig">
            <div style="font-family: 'Brush Script MT', cursive, serif; font-size: 24px; color: #2e2a9e; font-weight: bold; margin-bottom: 4px;">
              Dr. Maryam Musharraf
            </div>
            <div class="sig-name">Dr. Maryam Musharraf</div>
            <div class="sig-role">CEO & Founder, EngliAura</div>
          </td>
        </tr>
      </table>
    </div>

    <div class="thank-banner">
      Thank you for joining us!
    </div>

    <div class="footer-contact">
      Phone: <strong>+92 312 2498042</strong> &nbsp;|&nbsp; Email: <a href="mailto:engliaurabymaryam@gmail.com">engliaurabymaryam@gmail.com</a> &nbsp;|&nbsp; Web: <strong>engliaura.com</strong>
    </div>
  </div>
</body>
</html>
  `;
}
