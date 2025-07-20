import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, Heart, ShoppingCart, Factory, UserCheck, Landmark,
  FileText, Eye, CreditCard, BarChart3, UserPlus, HeartHandshake,
  Clipboard, Pill, TrendingUp, RotateCcw, ShoppingBag, Wrench,
  Truck, Activity, FileSearch, Calculator, ChevronRight, ChevronDown,
  Sparkles, Zap, Target, Globe, ArrowRight, Star, Shield,
  Play, Pause, Volume2, VolumeX
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Service {
  name: string;
  description: string;
  tools: string;
  href: string;
  icon: React.ComponentType<any>;
}

interface ProductCategory {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  bgGradient: string;
  services: Service[];
}

const ServicesHomepage: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const parallaxRefs = useRef<HTMLElement[]>([]);

  const productCategories: ProductCategory[] = [
    {
      id: 'bsfi',
      title: 'Banking & Financial Services',
      icon: Building2,
      color: 'text-blue-600',
      bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))',
      services: [
        {
          name: 'Loan Application Processing',
          description: 'Auto-extract KYC data → Credit scoring → Approval',
          tools: 'UiPath + Abbyy',
          href: '/product/bsfi/loan',
          icon: FileText
        },
        {
          name: 'AML Monitoring',
          description: 'Scan transactions → Flag suspicious activity',
          tools: 'AI: Anomaly detection',
          href: '/product/bsfi/aml',
          icon: Eye
        },
        {
          name: 'Card Dispute Resolution',
          description: 'Auto-fill dispute forms from transaction logs',
          tools: 'Blue Prism + SQL',
          href: '/product/bsfi/card-dispute',
          icon: CreditCard
        },
        {
          name: 'Bank Reconciliation',
          description: 'Match statements with ERP entries',
          tools: 'AI: Fuzzy matching',
          href: '/product/bsfi/bank-reconciliation',
          icon: BarChart3
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Pharma',
      icon: Heart,
      color: 'text-red-600',
      bgGradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(252, 165, 165, 0.1))',
      services: [
        {
          name: 'Patient Onboarding',
          description: 'Scan IDs → Populate EHR → Schedule appointments',
          tools: 'UiPath + OCR',
          href: '/product/healthcare&pharma/patient-onboarding',
          icon: UserPlus
        },
        {
          name: 'Claims Processing',
          description: 'Validate insurance claims → Submit to TPAs',
          tools: 'AI: Rule-based validation',
          href: '/product/healthcare&pharma/claims',
          icon: HeartHandshake
        },
        {
          name: 'Clinical Trial Data Entry',
          description: 'Extract lab report data → Trial databases',
          tools: 'Python + AA',
          href: '/product/healthcare&pharma/clinical',
          icon: Clipboard
        },
        {
          name: 'Pharmacy Inventory Sync',
          description: 'Auto-generate purchase orders',
          tools: 'SAP + RPA',
          href: '/product/healthcare&pharma/inventory',
          icon: Pill
        }
      ]
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce',
      icon: ShoppingCart,
      color: 'text-purple-600',
      bgGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(196, 181, 253, 0.1))',
      services: [
        {
          name: 'Dynamic Pricing',
          description: 'Scrape competitor prices → Adjust Shopify/Amazon listings',
          tools: 'AI: Regression models',
          href: '/product/retail&ecommerce/pricing',
          icon: TrendingUp
        },
        {
          name: 'Returns Processing',
          description: 'Validate requests → Generate labels',
          tools: 'UiPath + USPS API',
          href: '/product/retail&ecommerce/returns',
          icon: RotateCcw
        },
        {
          name: 'Order Reconciliation',
          description: 'Match Amazon/Flipkart orders with warehouses',
          tools: 'SQL + RPA',
          href: '/product/retail&ecommerce/order',
          icon: ShoppingBag
        }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Logistics',
      icon: Factory,
      color: 'text-orange-600',
      bgGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(254, 215, 170, 0.1))',
      services: [
        {
          name: 'BOM Validation',
          description: 'Cross-check supplier invoices vs. CAD designs',
          tools: 'SolidWorks + RPA',
          href: '/product/manufacturing&logistics/bom',
          icon: Wrench
        },
        {
          name: 'Shipment Tracking',
          description: 'Monitor courier APIs → Alert customers',
          tools: 'Python + Twilio',
          href: '/product/manufacturing&logistics/shipment',
          icon: Truck
        },
        {
          name: 'Predictive Maintenance',
          description: 'IoT sensors → Forecast machine failures',
          tools: 'AI: Time-series forecasting',
          href: '/product/manufacturing&logistics/maintenance',
          icon: Activity
        }
      ]
    },
    {
      id: 'hr',
      title: 'Human Resources',
      icon: UserCheck,
      color: 'text-green-600',
      bgGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(134, 239, 172, 0.1))',
      services: [
        {
          name: 'Resume Screening',
          description: 'Parse resumes → Rank candidates',
          tools: 'AI: NLP + ChatGPT',
          href: '/product/hr/resume',
          icon: FileSearch
        },
        {
          name: 'Payroll Processing',
          description: 'Calculate salaries → Bank transfers',
          tools: 'Tally + RPA',
          href: '/product/hr/payroll',
          icon: Calculator
        },
        {
          name: 'Employee Offboarding',
          description: 'Revoke access → Asset recovery',
          tools: 'Active Directory + RPA',
          href: '/product/hr/offboarding',
          icon: UserCheck
        }
      ]
    },
    {
      id: 'government',
      title: 'Government & Public Sector',
      icon: Landmark,
      color: 'text-indigo-600',
      bgGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(196, 181, 253, 0.1))',
      services: [
        {
          name: 'Grievance Redressal',
          description: 'Route complaints → Send updates',
          tools: 'AI: Text classification',
          href: '/product/gov&public/grievance-redressal',
          icon: HeartHandshake
        },
        {
          name: 'Pension Processing',
          description: 'Verify eligibility → Disburse payments',
          tools: 'RPA + Aadhaar API',
          href: '/product/gov&public/pension',
          icon: Calculator
        }
      ]
    }
  ];

  const stats = [
    { value: '500+', label: 'Active Clients', icon: Building2 },
    { value: '50K+', label: 'Hours Automated', icon: Zap },
    { value: '99.8%', label: 'Accuracy Rate', icon: Target },
    { value: '24/7', label: 'Support Available', icon: Shield }
  ];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxRefs.current.forEach((element) => {
        if (!element) return;
        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          ref={addToRefs}
          data-speed="0.1"
          className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        ></div>
        <div 
          ref={addToRefs}
          data-speed="0.15"
          className="absolute top-40 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"
        ></div>
        <div 
          ref={addToRefs}
          data-speed="0.2"
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rotate-45 animate-bounce opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-green-400 rotate-45 animate-pulse opacity-30"></div>
      </div>

      {/* Hero Section with Advanced Animations */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Floating Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full px-8 py-4 mb-8 shadow-2xl backdrop-blur-md animate-float">
            <Sparkles className="w-6 h-6 text-blue-600 mr-3 animate-spin-slow" />
            <span className="text-blue-800 font-bold text-lg">Industry-Specific Automation Solutions</span>
            <Badge className="ml-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse">
              AI-Powered
            </Badge>
          </div>
          
          {/* Main Heading with Gradient Text */}
          <h1 className="text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent animate-gradient">
              Transform Every
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-reverse">
              Industry Vertical
            </span>
          </h1>
          
          {/* Enhanced Description */}
          <p className="text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed mb-12 animate-fade-up">
            Discover tailored automation solutions designed for your specific industry. From banking to healthcare, 
            retail to manufacturing - we've engineered specialized workflows that understand your unique challenges.
          </p>

          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center mb-4 text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg font-bold group">
              Explore Solutions
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-gray-300 hover:border-blue-500 bg-white/80 backdrop-blur-md px-12 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-semibold"
            >
              Watch Demo
              <Play className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Services Section with Advanced Layout */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 mb-6 animate-fade-up">
              Industry-Specific
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
              Click on any industry to discover our specialized automation workflows
            </p>
          </div>

          {/* Interactive Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div 
                key={category.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card 
                  className={`bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group ${
                    expandedCategory === category.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  {/* Category Header */}
                  <CardHeader 
                    className="p-8 relative overflow-hidden"
                    style={{ background: category.bgGradient }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <category.icon className={`w-8 h-8 ${category.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-black text-gray-900 mb-2">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 font-medium">
                            {category.services.length} specialized solutions
                          </CardDescription>
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 ${
                        expandedCategory === category.id ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full"></div>
                  </CardHeader>

                  {/* Services List - Expandable */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedCategory === category.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="p-0">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="border-t border-gray-100 p-6 hover:bg-gray-50/80 transition-all duration-300 cursor-pointer group/service"
                          onMouseEnter={() => setHoveredService(service.href)}
                          onMouseLeave={() => setHoveredService(null)}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover/service:scale-110 group-hover/service:rotate-6 transition-all duration-300">
                              <service.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-lg font-bold text-gray-900 group-hover/service:text-blue-600 transition-colors">
                                  {service.name}
                                </h4>
                                <ChevronRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                                  hoveredService === service.href ? 'translate-x-2 text-blue-600' : ''
                                }`} />
                              </div>
                              <p className="text-gray-600 mb-3 leading-relaxed">
                                {service.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <Badge 
                                  variant="secondary" 
                                  className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                                >
                                  {service.tools}
                                </Badge>
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                  Learn More
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="relative py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h3 className="text-5xl font-black text-white mb-6">
            Ready to Transform Your Industry?
          </h3>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join 500+ businesses that have revolutionized their operations with our industry-specific automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg font-bold group">
              Get Custom Quote
              <Star className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-lg font-semibold"
            >
              Schedule Demo
              <Globe className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 3s ease infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesHomepage;