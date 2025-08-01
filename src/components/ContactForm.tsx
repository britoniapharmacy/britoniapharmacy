import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, User, MessageSquare, Linkedin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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
      const { data: responseData, error } = await supabase.functions.invoke('send-email', {
        body: emailData
      });
      
      if (error) {
        throw new Error(error.message || 'Failed to send email');
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
                  src="/lovable-uploads/nana-oteng-ceo-professional.jpg"
                  alt="Nana Oteng"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Nana Oteng</h3>
                <p className="text-gray-600 mb-6">CEO and Founder</p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@britoniapharmacy.com" 
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    info@britoniapharmacy.com
                  </a>
                  <a 
                    href="tel:+233244189180" 
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +233 244 189 180
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
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover grayscale"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">Emmanuel Kojo</h3>
                <p className="text-gray-600 mb-6">COO</p>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@britoniapharmacy.com" 
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    info@britoniapharmacy.com
                  </a>
                  <a 
                    href="tel:+233244189180" 
                    className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +233 244 189 180
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

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mt-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl>
                          <Input {...field} tabIndex={-1} autoComplete="off" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                            <User className="w-4 h-4 mr-2" />
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your.email@company.com" 
                              {...field} 
                              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Company (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
                            {...field} 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-sm font-medium text-gray-700">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What would you like to discuss?" 
                            {...field} 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project, requirements, or any questions you have about our pharmaceutical services across Africa..."
                            {...field} 
                            rows={6}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;