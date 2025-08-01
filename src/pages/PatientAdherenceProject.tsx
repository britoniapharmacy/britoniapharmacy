import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Smartphone, Heart, TrendingUp, FileSymlink, Cpu, CheckCircle } from 'lucide-react';

const PatientAdherenceProject = () => {
  return (
    <ProjectPageLayout
      title="Patient Adherence Analytics"
      subtitle="Smart monitoring system improving medication compliance through IoT and mobile technology"
      imageUrl="/lovable-uploads/ghana-health-service-partnership.png"
      brandName="Ghana Health Service"
    >
      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
        <p className="text-green-700 font-medium text-sm">Pilot Program Complete — Rolling Out Nationwide</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Case Study: IoT-Enabled Medication Adherence Platform</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          Ghana Health Service identified poor medication adherence as a critical barrier to treatment success, 
          particularly for chronic conditions like hypertension, diabetes, and HIV. Traditional monitoring methods 
          provided limited visibility into patient behavior and treatment outcomes outside clinical settings.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Healthcare providers lacked real-time insights into patient medication adherence, making it difficult to 
        intervene when patients missed doses or experienced side effects. Limited resources prevented frequent 
        follow-ups, and cultural barriers often prevented patients from reporting adherence issues.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        Britonia Pharmacy Ltd developed a comprehensive patient adherence monitoring system featuring:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Smartphone className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Pill Dispensers</h4>
            <p>IoT-enabled medication containers tracking dosing times with automatic patient and provider notifications.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Heart className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Health Monitoring</h4>
            <p>Integration with wearable devices and mobile apps for comprehensive health status tracking.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Predictive Analytics</h4>
            <p>Machine learning algorithms identifying patients at risk of non-adherence for proactive intervention.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Provider Dashboard</h4>
            <p>Real-time patient monitoring interface with automated alerts and intervention recommendations.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>IoT sensors with 2-year battery life and cellular connectivity</li>
        <li>Mobile apps supporting multiple local languages including Twi and Ga</li>
        <li>HIPAA-compliant data encryption and patient privacy protection</li>
        <li>Integration with Ghana's national health information system</li>
        <li>Offline functionality for areas with limited internet connectivity</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Results & Impact</h3>
      <p>
        The pilot program demonstrated a 45% improvement in medication adherence rates among 2,000 participants. 
        Healthcare providers reported 60% reduction in emergency interventions and improved patient outcomes for 
        chronic conditions. The system is now being scaled to serve 50,000 patients nationwide, with plans for 
        expansion across West Africa.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Future Developments</h4>
          <p>
            The platform is being enhanced with AI-powered medication interaction detection and 
            personalized adherence coaching. Integration with telemedicine platforms and expansion 
            to pediatric and geriatric populations are planned for 2024.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default PatientAdherenceProject;