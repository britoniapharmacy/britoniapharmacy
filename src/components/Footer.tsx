
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import britoniaLogo from '@/assets/britonia-logo.png';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Newsletter subscription would be handled via the same Supabase Edge Function
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our pharmaceutical industry updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please contact us directly at info@britoniapharmacy.com.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img 
              src={britoniaLogo}
              alt="Britonia Pharmacy Ltd Logo" 
              className="h-12 w-12 mb-6 rounded-full"
            />
            <h3 className="text-xl font-bold mb-4 text-white">Britonia Pharmacy Ltd</h3>
            <p className="text-gray-300 mb-6">
              Leading pharmaceutical consultancy in West Africa, specializing in malaria drug distribution, trademark registration, and regulatory affairs across African markets.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@britoniapharmacy.com" className="hover:text-white transition-colors">
                  info@britoniapharmacy.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+233244189180" className="hover:text-white transition-colors">
                  +233 244 189 180
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Malaria Drug Sales</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Trademark Registration</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Regulatory Affairs</a></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive pharmaceutical industry insights and regulatory updates.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Britonia Pharmacy Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
