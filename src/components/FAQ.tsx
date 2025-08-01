import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Malaria Drug Distribution',
      questions: [
        {
          question: 'What types of malaria drugs does Britonia Pharmacy distribute?',
          answer: 'We specialize in distributing WHO-approved Artemisinin-based Combination Therapies (ACTs) including Artemether-lumefantrine, Artesunate-amodiaquine, and other essential antimalarial medications. All our products are sourced from certified manufacturers and comply with international quality standards.'
        },
        {
          question: 'Which government agencies do you work with for malaria drug procurement?',
          answer: 'We work with various government health agencies across West Africa, including Ghana Health Service, Nigeria Federal Ministry of Health, Ministry of Health Senegal, and other ECOWAS member state health departments. We also collaborate with international organizations like UNICEF and WHO country offices.'
        },
        {
          question: 'How do you ensure cold chain integrity for temperature-sensitive medications?',
          answer: 'We maintain strict cold chain protocols using temperature-controlled vehicles, monitoring devices, and strategically located storage facilities. Our distribution network includes backup power systems and real-time temperature tracking to ensure product integrity from manufacture to delivery.'
        }
      ]
    },
    {
      category: 'Trademark Registration',
      questions: [
        {
          question: 'What is the difference between ARIPO and Madrid Protocol trademark registration?',
          answer: 'ARIPO covers 20 African countries through a single application, while Madrid Protocol provides global coverage including select African countries. ARIPO is specifically designed for African markets and often more cost-effective for regional protection, while Madrid offers broader international scope.'
        },
        {
          question: 'How long does trademark registration take through ARIPO?',
          answer: 'ARIPO trademark registration typically takes 12-18 months from application to registration, depending on the complexity of the mark and whether any oppositions are filed. We provide regular updates throughout the process and can expedite applications where permitted.'
        },
        {
          question: 'Can I protect pharmaceutical brand names across all African countries?',
          answer: 'While not all African countries are part of ARIPO or Madrid Protocol, we can help you achieve comprehensive African coverage through a combination of ARIPO registration, Madrid Protocol designations, and individual national applications in non-member countries.'
        }
      ]
    },
    {
      category: 'Regulatory Services',
      questions: [
        {
          question: 'What regulatory authorities does Britonia Pharmacy work with?',
          answer: 'We work with major African regulatory authorities including WAHO (West African Health Organization), Ghana FDA, NAFDAC (Nigeria), WHO Regional Office for Africa, and various national medicines regulatory authorities across the continent. We stay current with evolving regulations in each jurisdiction.'
        },
        {
          question: 'How long does drug registration typically take with WAHO?',
          answer: 'WAHO drug registration typically takes 6-12 months for standard applications, though this can vary based on product complexity and completeness of documentation. Emergency use pathways may be faster for essential medicines. We help streamline the process through proper preparation and submission.'
        },
        {
          question: 'Do you assist with WHO Prequalification applications?',
          answer: 'Yes, we provide comprehensive support for WHO Prequalification applications, including dossier preparation, regulatory strategy development, and liaison with WHO assessment teams. Our expertise helps manufacturers navigate this complex process successfully.'
        }
      ]
    },
    {
      category: 'Market Access & Compliance',
      questions: [
        {
          question: 'Which African countries do you cover for pharmaceutical market access?',
          answer: 'We provide services across all major African pharmaceutical markets, with particular expertise in ECOWAS countries, East African Community (EAC) members, and Southern African Development Community (SADC) states. Our Pan-African approach ensures comprehensive market coverage.'
        },
        {
          question: 'How do you stay updated with changing regulatory requirements?',
          answer: 'Our team maintains active relationships with regulatory authorities, participates in pharmaceutical conferences, and subscribes to official regulatory updates. We also collaborate with local partners in each country to ensure real-time awareness of regulatory changes.'
        },
        {
          question: 'What support do you provide for regulatory inspections?',
          answer: 'We offer pre-inspection preparation, documentation review, inspector liaison services, and post-inspection follow-up support. Our team has extensive experience with GMP inspections by African regulatory authorities and can help ensure successful outcomes.'
        }
      ]
    },
    {
      category: 'Partnership & Services',
      questions: [
        {
          question: 'How does Britonia Pharmacy structure its consulting fees?',
          answer: 'Our fees are structured based on project scope, complexity, and timeline. We offer both project-based pricing and retainer arrangements for ongoing support. Contact us for a customized quote based on your specific requirements.'
        },
        {
          question: 'Do you provide training for pharmaceutical companies entering African markets?',
          answer: 'Yes, we offer comprehensive training programs covering African regulatory landscapes, cultural considerations, market entry strategies, and compliance requirements. Training can be customized for your team\'s specific needs and delivered in-person or virtually.'
        },
        {
          question: 'Can you assist with local partnership development in African countries?',
          answer: 'Absolutely. We leverage our extensive network across Africa to help identify and evaluate potential local partners, distributors, and regulatory consultants. We can facilitate introductions and provide guidance on partnership structuring.'
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our pharmaceutical consulting services across Africa.
          </p>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              {category.category}
            </h3>
            
            <div className="space-y-3">
              {category.questions.map((faq, questionIndex) => {
                const globalIndex = categoryIndex * 100 + questionIndex;
                const isOpen = openItems.includes(globalIndex);
                
                return (
                  <div key={questionIndex} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => toggleItem(globalIndex)}
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our pharmaceutical consulting experts are here to help you navigate African markets successfully.
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;