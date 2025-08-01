
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png" alt="Britonia Pharmacy Ltd Logo" className={cn("h-8 w-auto rounded-full", isScrolled ? "" : "brightness-0 invert")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Our Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-white shadow-lg border border-gray-200 rounded-lg z-50">
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <li>
                          <a href="#features" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors" onClick={() => scrollToSection('features')}>
                            <div className="font-medium text-gray-900">Malaria Drug Sales</div>
                            <p className="text-sm text-gray-500">Quality ACT drugs for government agencies</p>
                          </a>
                        </li>
                        <li>
                          <a href="#features" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors" onClick={() => scrollToSection('features')}>
                            <div className="font-medium text-gray-900">Trademark Registration</div>
                            <p className="text-sm text-gray-500">ARIPO and Madrid Protocol services</p>
                          </a>
                        </li>
                        <li>
                          <a href="#features" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors" onClick={() => scrollToSection('features')}>
                            <div className="font-medium text-gray-900">Regulatory Affairs</div>
                            <p className="text-sm text-gray-500">WAHO, AMA, WHO, and ECOWAS compliance</p>
                          </a>
                        </li>
                        <li>
                          <a href="#features" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors" onClick={() => scrollToSection('features')}>
                            <div className="font-medium text-gray-900">Pan-African Coverage</div>
                            <p className="text-sm text-gray-500">Comprehensive pharmaceutical consulting</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Customer Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-white shadow-lg border border-gray-200 rounded-lg z-50">
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <li>
                          <Link to="/projects/drug-discovery" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Drug Discovery Intelligence</div>
                            <p className="text-sm text-gray-500">AI-powered pharmaceutical research and development</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/projects/supply-chain" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Supply Chain Intelligence</div>
                            <p className="text-sm text-gray-500">Smart distribution and inventory management</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/projects/regulatory-intelligence" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Regulatory Intelligence</div>
                            <p className="text-sm text-gray-500">Compliance tracking and regulatory analysis</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/projects/patient-adherence" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Patient Adherence Intelligence</div>
                            <p className="text-sm text-gray-500">Treatment monitoring and patient engagement</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/projects/quality-intelligence" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Quality Intelligence</div>
                            <p className="text-sm text-gray-500">Quality assurance and manufacturing optimization</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-white shadow-lg border border-gray-200 rounded-lg z-50">
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <li>
                          <Link to="/resources" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Download Center</div>
                            <p className="text-sm text-gray-500">Regulatory guides and documentation</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">Blog & Insights</div>
                            <p className="text-sm text-gray-500">Industry trends and expert analysis</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 transition-colors">
                            <div className="font-medium text-gray-900">FAQ</div>
                            <p className="text-sm text-gray-500">Frequently asked questions</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-lg overflow-y-auto max-h-96 border-t", isScrolled ? "bg-white border-gray-200" : "bg-black border-gray-800")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md text-sm font-medium", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-2 rounded-md text-sm font-medium", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Services submenu */}
          <div className="space-y-1">
            <div className={cn("px-3 py-2 text-sm font-medium", isScrolled ? "text-gray-700" : "text-gray-200")}>
              Our Services
            </div>
            <div className="ml-4 space-y-1">
              <button onClick={() => scrollToSection('features')} className={cn("block w-full text-left px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")}>
                Malaria Drug Sales
              </button>
              <button onClick={() => scrollToSection('features')} className={cn("block w-full text-left px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")}>
                Trademark Registration
              </button>
              <button onClick={() => scrollToSection('features')} className={cn("block w-full text-left px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")}>
                Regulatory Affairs
              </button>
            </div>
          </div>
          
          {/* Customer Cases submenu */}
          <div className="space-y-1">
            <div className={cn("px-3 py-2 text-sm font-medium", isScrolled ? "text-gray-700" : "text-gray-200")}>
              Customer Cases
            </div>
            <div className="ml-4 space-y-1">
              <Link to="/projects/drug-discovery" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Drug Discovery Intelligence
              </Link>
              <Link to="/projects/supply-chain" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Supply Chain Intelligence
              </Link>
              <Link to="/projects/regulatory-intelligence" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Regulatory Intelligence
              </Link>
              <Link to="/projects/patient-adherence" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Patient Adherence Intelligence
              </Link>
              <Link to="/projects/quality-intelligence" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Quality Intelligence
              </Link>
            </div>
          </div>
          
          {/* Resources submenu */}
          <div className="space-y-1">
            <div className={cn("px-3 py-2 text-sm font-medium", isScrolled ? "text-gray-700" : "text-gray-200")}>
              Resources
            </div>
            <div className="ml-4 space-y-1">
              <Link to="/resources" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Download Center
              </Link>
              <Link to="/blog" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Blog & Insights
              </Link>
              <Link to="/faq" className={cn("block px-3 py-1 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
            </div>
          </div>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md text-sm font-medium mt-2", isScrolled ? "text-white bg-gray-700 hover:bg-gray-800" : "text-black bg-white hover:bg-gray-100")}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
