import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import PageLayout from '@/components/PageLayout';
import FAQ from '@/components/FAQ';
import SEO from '@/components/SEO';

const FAQPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout showContact={false}>
      <SEO
        title="Frequently Asked Questions - Britonia Pharmacy Ltd"
        description="Find answers to common questions about Britonia Pharmacy Ltd's pharmaceutical services, drug development, regulatory affairs, and healthcare solutions across Africa."
        keywords={['FAQ', 'pharmaceutical questions', 'drug development', 'regulatory affairs', 'healthcare solutions', 'African pharmaceuticals']}
        type="website"
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our pharmaceutical services, 
                regulatory affairs, and healthcare solutions across Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FAQ />
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQPage;