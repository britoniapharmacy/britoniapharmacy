import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Brain, Database, TrendingUp, FileSymlink, Cpu, FlaskConical } from 'lucide-react';

const DrugDiscoveryProject = () => {
  return (
    <ProjectPageLayout
      title="AI Drug Discovery Platform"
      subtitle="Accelerating malaria drug discovery through artificial intelligence"
      imageUrl="/lovable-uploads/britonia-malaria-drugs.png"
      brandName="West African Research Institute"
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <FlaskConical className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Successfully Deployed — Active Research Platform</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: AI-Powered Drug Discovery for Malaria</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          The West African Research Institute needed to accelerate malaria drug discovery to address the growing resistance 
          to existing antimalarial treatments. Traditional drug discovery processes were taking 10-15 years and costing hundreds 
          of millions of dollars, while malaria continued to claim lives across the region.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional drug discovery relied on lengthy laboratory trials, limited compound libraries, and manual analysis processes. 
        The institute needed to rapidly screen thousands of potential antimalarial compounds, predict their efficacy against resistant 
        strains, and accelerate the pathway from discovery to clinical trials while ensuring regulatory compliance.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Britonia Pharmacy Ltd developed a comprehensive AI-powered drug discovery platform featuring:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Brain className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Machine Learning Engine</h4>
            <p>Advanced AI algorithms analyzing molecular structures and predicting antimalarial activity with 85% accuracy.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Compound Database</h4>
            <p>Comprehensive library of 500,000+ compounds with automated screening and similarity analysis capabilities.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Predictive Analytics</h4>
            <p>Real-time efficacy predictions against resistant malaria strains with toxicity and drug interaction analysis.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Research Integration</h4>
            <p>Seamless integration with laboratory information systems and regulatory compliance tracking.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Deep learning models trained on 2 million+ molecular structures</li>
        <li>Cloud-based infrastructure supporting 24/7 research operations</li>
        <li>API integration with major pharmaceutical databases and research tools</li>
        <li>Automated report generation for regulatory submissions</li>
        <li>Multi-language support for research teams across West Africa</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results & Impact</h3>
      <p>
        The AI drug discovery platform has successfully identified 12 promising antimalarial compounds, reducing discovery 
        time from 5 years to 18 months. The system has achieved 85% accuracy in predicting compound efficacy and has 
        supported the institute in advancing 3 compounds to pre-clinical trials, representing a 60% cost reduction 
        in the early discovery phase.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Future Expansion</h4>
          <p>
            The platform is being expanded to include tuberculosis and HIV drug discovery, with plans for 
            integration across multiple research institutions in West Africa. Future developments include 
            personalized medicine capabilities and AI-driven clinical trial optimization.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default DrugDiscoveryProject;
