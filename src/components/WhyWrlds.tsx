import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar, Globe, Users, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="why-britonia" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Why Choose Britonia Pharmacy?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            In African pharmaceutical markets where complexity leads to delays, we bring expertise and local knowledge to ensure your success
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-green-50 p-6 rounded-xl border border-green-200 text-center hover:bg-green-100 transition-all">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={20} suffix="+" /> Countries
            </h3>
            <p className="text-gray-700">African markets covered through our ARIPO and regulatory expertise, providing comprehensive market access</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center hover:bg-blue-100 transition-all">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={627} suffix="K" /> 
            </h3>
            <p className="text-gray-700">
              Malaria deaths prevented annually through improved drug distribution and access in sub-Saharan Africa
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-orange-50 p-6 rounded-xl border border-orange-200 text-center hover:bg-orange-100 transition-all">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={400} suffix="M" />
            </h3>
            <p className="text-gray-700">
              People across ECOWAS region benefit from harmonized pharmaceutical regulations and improved market access
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="mb-12" initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              How Britonia Pharmacy Delivers Results
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We accelerate your pharmaceutical market entry across Africa with proven expertise and strategic partnerships
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-green-200 rounded-full p-3 mr-4">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Regulatory Compliance</h4>
                  <p className="text-gray-700">Navigate complex WAHO, AMA, WHO, and ECOWAS requirements with confidence.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-blue-200 rounded-full p-3 mr-4">
                  <Target className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Market Access Strategy</h4>
                  <p className="text-gray-700">Accelerate entry into African markets with proven regulatory pathways.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-orange-200 rounded-full p-3 mr-4">
                  <Award className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Partnerships</h4>
                  <p className="text-gray-700">Connect with trusted suppliers and government agencies across Africa.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="bg-purple-200 rounded-full p-3 mr-4">
                  <Sparkles className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Brand Protection</h4>
                  <p className="text-gray-700">Secure your intellectual property with ARIPO and Madrid Protocol expertise.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <a 
              href="#contact"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all group"
            >
              Start your African market expansion today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

export default WhyWrlds;
