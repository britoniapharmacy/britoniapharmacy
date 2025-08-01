# Britonia Pharmacy Ltd - SMTP Configuration Guide

## Email Configuration for Contact Form

This project uses Supabase Edge Functions to handle email sending securely. The following environment variables need to be configured in your Supabase project:

### Required Supabase Secrets

1. **SMTP_HOST** - Your SMTP server hostname (e.g., smtp.gmail.com, mail.britoniapharmacy.com)
2. **SMTP_PORT** - SMTP port (usually 587 for TLS or 465 for SSL)
3. **SMTP_USER** - Your SMTP username (usually your email address)
4. **SMTP_PASS** - Your SMTP password or app-specific password
5. **FROM_EMAIL** - The email address to send from (info@britoniapharmacy.com)
6. **TO_EMAIL** - The email address to receive contact form submissions

### How to Configure Secrets in Supabase

1. Go to your Supabase project dashboard
2. Navigate to Settings > Edge Functions
3. Go to the "Secrets" tab
4. Add each of the required secrets above

### Recommended SMTP Providers for Professional Use

1. **Google Workspace** - Professional email with custom domain
2. **Microsoft 365** - Business email solution
3. **SendGrid** - Dedicated email sending service
4. **Mailgun** - Developer-friendly email service
5. **Amazon SES** - Cost-effective email service

### Gmail Setup (for testing only)

If using Gmail for testing:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use your Gmail address as SMTP_USER
4. Use the App Password as SMTP_PASS
5. Set SMTP_HOST to smtp.gmail.com and SMTP_PORT to 587

### Deployment Instructions

1. Configure all secrets in Supabase
2. Deploy the Edge Function: `supabase functions deploy send-email`
3. Test the contact form functionality
4. Verify both notification and auto-response emails are working

### Security Notes

- Never commit SMTP credentials to version control
- Use environment variables/secrets for all sensitive configuration
- Consider using dedicated email services for production
- Implement rate limiting to prevent abuse
- Monitor email sending for delivery issues

### Auto-Response Features

The contact form automatically:
- Sends a confirmation email to the user
- Includes company information and service overview
- Sets expectations for response time (24 hours)
- Provides alternative contact information for urgent matters