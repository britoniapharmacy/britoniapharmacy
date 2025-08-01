
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout showContact={true}>
      <SEO 
        title="Britonia Pharmacy Ltd - Leading Pharmaceutical Consultancy in West Africa" 
        description="Britonia Pharmacy Ltd: Your trusted partner for malaria drug distribution, trademark registration, and regulatory services across Africa. Based in Accra, Ghana."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['pharmaceutical consulting', 'malaria drugs', 'trademark registration', 'ARIPO', 'WAHO', 'Ghana pharmacy', 'West Africa pharmaceuticals', 'regulatory affairs']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
