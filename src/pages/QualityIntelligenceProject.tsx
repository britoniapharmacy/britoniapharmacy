import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Microscope, Factory, Shield, FileSymlink, Cpu, CheckCircle } from 'lucide-react';

const QualityIntelligenceProject = () => {
  return (
    <ProjectPageLayout
      title="Pharmaceutical Quality Intelligence"
      subtitle="AI-driven quality control for manufacturing processes across multiple facilities"
      imageUrl="/lovable-uploads/aripo-trademark-office.png"
      brandName="ARIPO Member States"
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Operational Across 25 Manufacturing Facilities</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: AI-Powered Pharmaceutical Quality Control</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          ARIPO member states faced challenges ensuring consistent pharmaceutical quality across diverse manufacturing 
          facilities. Traditional quality control methods were reactive, expensive, and often failed to detect quality 
          issues before products reached patients, affecting public health and regulatory compliance.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Pharmaceutical manufacturers across Africa needed real-time quality monitoring, predictive analytics for 
        quality issues, and standardized quality metrics across facilities. Manual testing was slow, inconsistent, 
        and couldn't provide the continuous monitoring required for modern pharmaceutical manufacturing.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Britonia Pharmacy Ltd developed a comprehensive AI-powered quality intelligence platform featuring:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Microscope className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-time Analysis</h4>
            <p>AI-powered sensors providing continuous monitoring of critical quality parameters throughout production.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Factory className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Process Optimization</h4>
            <p>Machine learning algorithms identifying process improvements and predicting equipment maintenance needs.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Compliance Monitoring</h4>
            <p>Automated documentation and reporting for regulatory compliance across multiple African markets.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Predictive Quality</h4>
            <p>Advanced analytics predicting quality issues before they occur, enabling proactive interventions.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Integration with existing manufacturing execution systems (MES)</li>
        <li>Cloud-based analytics platform supporting multi-site deployments</li>
        <li>Real-time dashboard with mobile access for quality managers</li>
        <li>Blockchain-based audit trails for regulatory compliance</li>
        <li>API connectivity with laboratory information management systems</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results & Impact</h3>
      <p>
        The quality intelligence system has reduced quality-related batch failures by 70% and improved overall 
        manufacturing efficiency by 25%. The platform now monitors production of medicines valued at over $500M 
        annually across 25 facilities, ensuring consistent quality for patients throughout Africa while reducing 
        regulatory compliance costs by 40%.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Innovation Pipeline</h4>
          <p>
            Future enhancements include integration with supply chain intelligence for end-to-end quality tracking 
            and AI-powered counterfeit detection capabilities. The platform is being evaluated for expansion 
            to include biotechnology and vaccine manufacturing facilities.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default QualityIntelligenceProject;