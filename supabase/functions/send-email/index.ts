import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, company }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send notification email to info@britoniapharmacy.com
    const notificationEmail = await resend.emails.send({
      from: "Britonia Pharmacy <onboarding@resend.dev>",
      to: ["info@britoniapharmacy.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New contact form submission from Britonia Pharmacy website</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from the Britonia Pharmacy contact form.<br>
            Reply directly to this email to respond to the sender.
          </p>
        </div>
      `,
      reply_to: email,
    });

    // Send auto-response to the user
    const autoResponse = await resend.emails.send({
      from: "Britonia Pharmacy <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Britonia Pharmacy Ltd",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px;">
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting Britonia Pharmacy Ltd. We have received your message regarding "${subject}" and will respond within 24 hours during business days.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2563eb; margin-top: 0;">Our Expertise:</h3>
            <ul style="margin: 10px 0;">
              <li>Malaria drug distribution to government agencies</li>
              <li>Trademark registration (ARIPO, Madrid Protocol)</li>
              <li>Regulatory affairs (WAHO, AMA, WHO, ECOWAS)</li>
              <li>Pan-African pharmaceutical market access</li>
            </ul>
          </div>
          
          <p>If you have an urgent matter, please contact us directly at <a href="mailto:info@britoniapharmacy.com">info@britoniapharmacy.com</a>.</p>
          
          <p>Best regards,<br>
          <strong>The Britonia Pharmacy Team</strong><br>
          Accra, Ghana</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);
    console.log("Auto-response sent:", autoResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }),
      { 
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );

  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send email" 
      }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );
  }
};

serve(handler);