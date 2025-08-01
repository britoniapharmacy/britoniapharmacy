import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Truck, MapPin, BarChart3, FileSymlink, Cpu, CheckCircle } from 'lucide-react';

const SupplyChainProject = () => {
  return (
    <ProjectPageLayout
      title="Intelligent Supply Chain Optimization"
      subtitle="AI-powered distribution system for essential medicines across West Africa"
      imageUrl="/lovable-uploads/ecowas-trademark-success.png"
      brandName="ECOWAS Health Coalition"
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Successfully Deployed — Operational Across 15 Countries</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: AI-Powered Medicine Distribution Network</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          The ECOWAS Health Coalition faced critical challenges in ensuring timely distribution of essential medicines 
          across West African member states. Stockouts in rural areas, expired medications in urban centers, and 
          inefficient transportation routes were compromising healthcare delivery for 400 million people.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional supply chain management relied on manual forecasting, static distribution routes, and limited 
        real-time visibility. The coalition needed an intelligent system that could predict demand, optimize routes 
        dynamically, and ensure equitable access to medicines across diverse geographic and economic conditions.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Britonia Pharmacy Ltd developed a comprehensive AI-powered supply chain optimization platform featuring:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Demand Forecasting</h4>
            <p>Machine learning algorithms predicting medicine demand based on epidemiological data and seasonal patterns.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Truck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Route Optimization</h4>
            <p>Dynamic routing algorithms reducing transportation costs by 35% while improving delivery timeframes.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <MapPin className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Real-time Tracking</h4>
            <p>GPS-enabled monitoring of medicine shipments with temperature and humidity sensors for quality assurance.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Inventory Intelligence</h4>
            <p>Automated stock level management with expiry date tracking and emergency redistribution capabilities.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Multi-language support for 15 ECOWAS member countries</li>
        <li>Integration with national health information systems</li>
        <li>Mobile apps for field workers and healthcare providers</li>
        <li>Blockchain-based authentication for medicine authenticity</li>
        <li>Cloud infrastructure supporting 10,000+ concurrent users</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results & Impact</h3>
      <p>
        The intelligent supply chain system has reduced medicine stockouts by 78% and decreased distribution costs 
        by 35%. The platform now manages $200M+ in annual medicine distribution, serving over 5,000 healthcare 
        facilities across West Africa. Average delivery time has improved from 14 days to 5 days, significantly 
        enhancing healthcare access in rural communities.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Expansion Plans</h4>
          <p>
            The system is being expanded to include vaccine distribution and cold chain management. 
            Future developments include integration with WHO databases and expansion to additional 
            African Union member states beyond the ECOWAS region.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default SupplyChainProject;