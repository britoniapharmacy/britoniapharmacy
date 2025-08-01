
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Join Britonia Pharmacy
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  We're looking for passionate professionals to help us advance pharmaceutical excellence across Africa.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  Join our team of experts in malaria drug distribution, regulatory affairs, and pharmaceutical consulting.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Join Britonia Pharmacy?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Impact",
                        description: "Make a real difference in healthcare outcomes across Africa through quality pharmaceutical services."
                      },
                      {
                        title: "Expertise",
                        description: "Work with regulatory experts and gain experience in ARIPO, WAHO, and international pharmaceutical standards."
                      },
                      {
                        title: "Growth",
                        description: "Develop your career in the rapidly expanding African pharmaceutical market."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                      <h3 className="font-bold text-xl mb-6">Current Opportunities</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold text-lg">Regulatory Affairs Specialist</h4>
                          <p className="text-gray-600">Support WAHO compliance and trademark registration processes</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-lg">Pharmaceutical Consultant</h4>
                          <p className="text-gray-600">Provide expert advice on drug distribution and quality assurance</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-semibold text-lg">Business Development Manager</h4>
                          <p className="text-gray-600">Expand our reach across African markets</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                      <h3 className="font-bold text-xl mb-6">What We Offer</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Competitive salary and benefits package</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Professional development opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Collaborative work environment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Opportunity to impact healthcare across Africa</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                    <h3 className="font-bold text-xl mb-6">Contact Our CEO</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="/lovable-uploads/ceo-professional.jpg"
                          alt="Nana Oteng"
                          className="w-32 h-32 rounded-full mb-4 object-cover grayscale"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Nana Oteng</h3>
                        <p className="text-gray-600 mb-4">CEO and Founder</p>
                        <div className="flex flex-col space-y-3">
                          <a href="mailto:info@britoniapharmacy.com" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Mail className="w-5 h-5 mr-2" />
                            info@britoniapharmacy.com
                          </a>
                          <a href="tel:+233244189180" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Phone className="w-5 h-5 mr-2" />
                            +233 244 189 180
                          </a>
                          <a 
                            href="https://www.linkedin.com/company/britonia-pharmacy" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
