import { Download, FileText, Video, Book, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const downloadResources = [
    {
      title: 'Malaria Drug Distribution Guide for West Africa',
      description: 'Comprehensive guide covering ACT drug distribution, regulatory requirements, and government procurement processes across ECOWAS member states.',
      type: 'PDF',
      size: '2.4 MB',
      category: 'Healthcare',
      downloadUrl: '#'
    },
    {
      title: 'ARIPO Trademark Registration Handbook',
      description: 'Step-by-step guide to trademark registration through ARIPO, including application forms, timelines, and country-specific requirements.',
      type: 'PDF', 
      size: '1.8 MB',
      category: 'Intellectual Property',
      downloadUrl: '#'
    },
    {
      title: 'WAHO Regulatory Compliance Checklist',
      description: 'Essential checklist for pharmaceutical companies seeking regulatory approval across West African markets through WAHO framework.',
      type: 'PDF',
      size: '956 KB',
      category: 'Regulatory Affairs',
      downloadUrl: '#'
    },
    {
      title: 'Ghana FDA Registration Process Overview',
      description: 'Detailed overview of drug registration requirements with Ghana Food and Drugs Authority, including forms and documentation requirements.',
      type: 'PDF',
      size: '1.2 MB', 
      category: 'Regulatory Affairs',
      downloadUrl: '#'
    },
    {
      title: 'WHO Prequalification Application Guide',
      description: 'Complete guide to WHO Prequalification Programme application process, requirements, and best practices for pharmaceutical manufacturers.',
      type: 'PDF',
      size: '3.1 MB',
      category: 'Global Health',
      downloadUrl: '#'
    },
    {
      title: 'African Pharmaceutical Market Analysis 2024',
      description: 'Comprehensive market analysis covering regulatory landscape, opportunities, and trends across major African pharmaceutical markets.',
      type: 'PDF',
      size: '4.2 MB',
      category: 'Market Intelligence',
      downloadUrl: '#'
    }
  ];

  const videoResources = [
    {
      title: 'Introduction to Britonia Pharmacy Services',
      description: 'Overview of our pharmaceutical consulting services across Africa, including malaria drug distribution and regulatory affairs.',
      duration: '8:32',
      category: 'Company Overview',
      thumbnailUrl: '/lovable-uploads/927dae7e-6aaf-4b76-add2-1287a1dd9dc0.png',
      videoUrl: '#'
    },
    {
      title: 'ECOWAS Pharmaceutical Harmonization Explained',
      description: 'Deep dive into ECOWAS pharmaceutical harmonization initiatives and their impact on market access across West Africa.',
      duration: '12:45',
      category: 'Regulatory Affairs',
      thumbnailUrl: '/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png',
      videoUrl: '#'
    },
    {
      title: 'Malaria Drug Supply Chain Best Practices',
      description: 'Best practices for managing malaria drug supply chains in challenging African environments, including cold chain management.',
      duration: '15:20',
      category: 'Supply Chain',
      thumbnailUrl: '/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png',
      videoUrl: '#'
    },
    {
      title: 'Trademark Protection Strategies for African Markets',
      description: 'Strategic approaches to trademark protection across African markets using ARIPO, Madrid Protocol, and national systems.',
      duration: '10:15',
      category: 'Intellectual Property',
      thumbnailUrl: '/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png',
      videoUrl: '#'
    }
  ];

  const webinars = [
    {
      title: 'Navigating African Pharmaceutical Regulations in 2025',
      date: 'March 15, 2025',
      time: '14:00 GMT',
      status: 'upcoming',
      registrationUrl: '#'
    },
    {
      title: 'WAHO Regulatory Framework: Opportunities and Challenges',
      date: 'February 28, 2025', 
      time: '15:00 GMT',
      status: 'upcoming',
      registrationUrl: '#'
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Resources - Britonia Pharmacy Ltd"
        description="Access comprehensive pharmaceutical resources including regulatory guides, market analysis, and educational materials for African markets."
        keywords={['pharmaceutical resources', 'regulatory guides', 'African markets', 'malaria drugs', 'trademark registration']}
      />
      
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resource Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive pharmaceutical resources, regulatory guides, and educational materials to navigate African markets successfully.
            </p>
          </div>

          {/* PDF Downloads */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <FileText className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Downloadable Guides</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                        {resource.category}
                      </span>
                      <span className="text-sm text-gray-500">{resource.size}</span>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open(resource.downloadUrl, '_blank')}>
                      <Download className="w-4 h-4 mr-2" />
                      Download {resource.type}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Video Resources */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Video className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Educational Videos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoResources.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {video.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" onClick={() => window.open(video.videoUrl, '_blank')}>
                      <Video className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Webinars */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Book className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Webinars</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded capitalize">
                        {webinar.status}
                      </span>
                      <span className="text-sm text-gray-500">{webinar.time}</span>
                    </div>
                    <CardTitle className="text-lg">{webinar.title}</CardTitle>
                    <CardDescription>
                      Scheduled for {webinar.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => window.open(webinar.registrationUrl, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact for Custom Resources */}
          <section className="bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Resources?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can create customized guides, training materials, and regulatory documentation tailored to your specific market entry needs across Africa.
            </p>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => window.location.href = '#contact'}>
              Contact Our Experts
            </Button>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;