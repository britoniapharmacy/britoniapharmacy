import ProjectPageLayout from '@/components/ProjectPageLayout';
import { FileCheck, Globe, AlertTriangle, FileSymlink, Cpu, CheckCircle } from 'lucide-react';

const RegulatoryIntelligenceProject = () => {
  return (
    <ProjectPageLayout
      title="Regulatory Intelligence System"
      subtitle="Automated compliance tracking across multiple African regulatory bodies"
      imageUrl="/lovable-uploads/waho-compliance-success.png"
      brandName="WAHO Compliance Network"
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Successfully Deployed — Managing 2000+ Product Registrations</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: Multi-Country Regulatory Compliance Platform</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          The West African Health Organization (WAHO) needed to streamline pharmaceutical regulatory compliance 
          across 15 member countries, each with unique requirements, documentation standards, and approval processes. 
          Manual tracking was causing delays, compliance gaps, and increased costs for pharmaceutical companies.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Pharmaceutical companies faced complex, inconsistent regulatory requirements across West African markets. 
        Tracking multiple submissions, managing documentation updates, and ensuring ongoing compliance required 
        significant manual effort and expertise, often resulting in delays and market access barriers.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Britonia Pharmacy Ltd developed a comprehensive regulatory intelligence platform featuring:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <FileCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Automated Compliance Tracking</h4>
            <p>Real-time monitoring of regulatory status across multiple countries with automated deadline management.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Globe className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Multi-Country Intelligence</h4>
            <p>Centralized database of regulatory requirements, updates, and harmonization opportunities across West Africa.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <AlertTriangle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Risk Assessment</h4>
            <p>AI-powered analysis identifying potential compliance risks and recommending proactive measures.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Document Management</h4>
            <p>Intelligent document processing with automatic format conversion and submission preparation.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Integration with 15 national regulatory authority databases</li>
        <li>Automated regulatory intelligence updates and notifications</li>
        <li>Multi-stakeholder collaboration tools for regulatory teams</li>
        <li>Secure document vault with version control and audit trails</li>
        <li>API connectivity with major pharmaceutical ERP systems</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results & Impact</h3>
      <p>
        The regulatory intelligence system has reduced compliance processing time by 65% and improved success rates 
        for regulatory submissions by 40%. The platform now manages over 2,000 active product registrations and 
        has facilitated faster market access for 150+ pharmaceutical products across West Africa, supporting 
        improved healthcare access for millions of patients.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Regional Expansion</h4>
          <p>
            The platform is being extended to include East and Central African regulatory bodies. 
            Future developments include AI-powered regulatory strategy recommendations and 
            integration with international regulatory harmonization initiatives.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default RegulatoryIntelligenceProject;