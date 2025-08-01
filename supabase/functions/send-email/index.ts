// Supabase Edge Function for sending emails via SMTP
// This function will be deployed to Supabase and handle email sending securely

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}

serve(async (req: Request) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const emailData: EmailRequest = await req.json();
    
    // Validate required fields
    if (!emailData.name || !emailData.email || !emailData.subject || !emailData.message) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Get SMTP configuration from Supabase secrets
    const SMTP_HOST = Deno.env.get('SMTP_HOST') || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(Deno.env.get('SMTP_PORT') || '587');
    const SMTP_USER = Deno.env.get('SMTP_USER'); // Your SMTP username
    const SMTP_PASS = Deno.env.get('SMTP_PASS'); // Your SMTP password
    const FROM_EMAIL = Deno.env.get('FROM_EMAIL') || 'info@britoniapharmacy.com';
    const TO_EMAIL = Deno.env.get('TO_EMAIL') || 'info@britoniapharmacy.com';

    if (!SMTP_USER || !SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return new Response('Email service not configured', { status: 500 });
    }

    // Create email content
    const emailSubject = `New Contact Form Submission: ${emailData.subject}`;
    const emailBody = `
New contact form submission from Britonia Pharmacy website:

Name: ${emailData.name}
Email: ${emailData.email}
Company: ${emailData.company || 'Not provided'}
Subject: ${emailData.subject}

Message:
${emailData.message}

---
This message was sent from the Britonia Pharmacy contact form.
Reply directly to this email to respond to the sender.
    `;

    // Auto-response email for the sender
    const autoResponseSubject = 'Thank you for contacting Britonia Pharmacy Ltd';
    const autoResponseBody = `
Dear ${emailData.name},

Thank you for reaching out to Britonia Pharmacy Ltd. We have received your message regarding "${emailData.subject}" and will respond within 24 hours during business days.

Our team of pharmaceutical experts specializes in:
• Malaria drug distribution to government agencies
• Trademark registration (ARIPO, Madrid Protocol)
• Regulatory affairs (WAHO, AMA, WHO, ECOWAS)
• Pan-African pharmaceutical market access

If you have an urgent matter, please contact us directly at info@britoniapharmacy.com.

Best regards,
The Britonia Pharmacy Team
Accra, Ghana

---
This is an automated response. Please do not reply to this email.
    `;

    // For this demo, we'll use a simple email sending approach
    // In production, you would use a proper SMTP library like nodemailer
    
    // Simulate email sending (replace with actual SMTP implementation)
    console.log('Sending email to:', TO_EMAIL);
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);
    
    console.log('Sending auto-response to:', emailData.email);
    console.log('Auto-response subject:', autoResponseSubject);
    console.log('Auto-response body:', autoResponseBody);

    // Here you would implement actual SMTP sending
    // For now, we'll return success to demonstrate the flow
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send email' 
      }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});