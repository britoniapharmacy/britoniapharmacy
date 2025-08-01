import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Updated schema with honeypot field validation
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  company: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected'), // Honeypot field must be empty
  timestamp: z.number() // To prevent automated quick submissions
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now()); // Track when form was opened
  
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      company: '',
      honeypot: '',
      timestamp: formStartTime
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Bot checks
      // 1. Honeypot check - should be caught by zod, but double-check
      if (data.honeypot) {
        console.log('Bot detected via honeypot');
        toast({
          title: "Error",
          description: "There was a problem with your submission. Please try again.",
          variant: "destructive"
        });
        return;
      }
      
      // 2. Time-based check - Submission should take at least 3 seconds
      const timeDiff = Date.now() - data.timestamp;
      if (timeDiff < 3000) {
        console.log(`Bot detected: Form submitted too quickly (${timeDiff}ms)`);
        toast({
          title: "Error",
          description: "Please take a moment to review your message before submitting.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      console.log('Form submitted:', data);
      
      // Remove honeypot and timestamp fields before sending
      const { honeypot, timestamp, ...emailData } = data;
      
      // Send email using Supabase Edge Function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      console.log('Email sent successfully');
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you within 24 hours.",
        variant: "default"
      });

      form.reset({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
        honeypot: '',
        timestamp: Date.now()
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later or contact us directly at info@britoniapharmacy.com.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-gray-600 mb-2">Get In Touch</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our pharmaceutical services across Africa? Reach out to our 
              team and let's discuss how we can help bring your healthcare solutions to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/nana-oteng-ceo.png"
                  alt="Nana Oteng"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Nana Oteng</h3>
                <p className="text-gray-600 mb-6">CEO and Founder</p>
                <div className="space-y-3">
                  <a 
                    href="mailto:nana@britoniapharmacy.com" 
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    nana@britoniapharmacy.com
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nana-oteng" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* COO Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="text-center">
                <img 
                  src="/lovable-uploads/emmanuel-kojo-coo.png"
                  alt="Emmanuel Kojo"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emmanuel Kojo</h3>
                <p className="text-gray-600 mb-6">COO</p>
                <div className="space-y-3">
                  <a 
                    href="mailto:emmanuel@britoniapharmacy.com" 
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    emmanuel@britoniapharmacy.com
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/emmanuel-kojo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;