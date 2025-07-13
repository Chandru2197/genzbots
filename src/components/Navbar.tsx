"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown,
  Rocket,
  Shield,
  Users,
  Award,
  Building2,
  Heart,
  ShoppingCart,
  Factory,
  UserCheck,
  Landmark,
  FileText,
  Eye,
  CreditCard,
  BarChart3,
  UserPlus,
  HeartHandshake,
  Clipboard,
  Pill,
  TrendingUp,
  RotateCcw,
  ShoppingBag,
  Wrench,
  Truck,
  Activity,
  FileSearch,
  Calculator,
  BrainCircuit,
  Bot,
  Leaf,
  ChevronRight,
  Star,
  Layers,
  Settings
} from 'lucide-react';

// Types
interface NavbarProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface DropdownItem {
  label: string;
  href: string;
}

interface ProductCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  bgGradient: string;
  services: ProductService[];
}

interface ProductService {
  name: string;
  description: string;
  tools: string;
  href: string;
  icon: any;
}

interface ServiceItem {
  label: string;
  href: string;
  description: string;
  icon: any;
  color: string;
  bgGradient: string;
  features: string[];
}

interface MenuItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

// Simple Card Components
const Card = ({ children, className = '', style, ...props }: any) => (
  <div className={`rounded-lg border ${className}`} style={style} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '', ...props }: any) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }: any) => (
  <div className={`p-4 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '', ...props }: any) => (
  <h3 className={`font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '', ...props }: any) => (
  <p className={`text-sm ${className}`} {...props}>
    {children}
  </p>
);

const Badge = ({ children, className = '', style, ...props }: any) => (
  <span className={`px-2 py-1 text-xs rounded-md ${className}`} style={style} {...props}>
    {children}
  </span>
);

// Data
const servicesData: ServiceItem[] = [
  {
    label: 'Bot Blueprint',
    href: '/services/bot-blueprint',
    description: 'Strategic planning and architecture design for your automation infrastructure.',
    icon: FileText,
    color: 'text-blue-600',
    bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 197, 253, 0.8))',
    features: ['Strategic Planning', 'Architecture Design', 'ROI Analysis', 'Risk Assessment']
  },
  {
    label: 'Build & Test',
    href: '/services/build-and-test',
    description: 'Development, testing, and quality assurance for robust automation solutions.',
    icon: Wrench,
    color: 'text-green-600',
    bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(110, 231, 183, 0.8))',
    features: ['Development', 'Testing', 'Quality Assurance', 'Performance Optimization']
  },
  {
    label: 'Discovery Call',
    href: '/services/discovery-call',
    description: 'Consultation session to identify automation opportunities and requirements.',
    icon: Users,
    color: 'text-purple-600',
    bgGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(196, 181, 253, 0.8))',
    features: ['Process Analysis', 'Opportunity Assessment', 'Custom Solutions', 'Expert Consultation']
  },
  {
    label: 'Hyper Care',
    href: '/services/hyper-care',
    description: 'Comprehensive support, monitoring, and continuous optimization services.',
    icon: Shield,
    color: 'text-red-600',
    bgGradient: 'linear-gradient(135deg, rgba(245, 101, 101, 0.8), rgba(252, 165, 165, 0.8))',
    features: ['24/7 Monitoring', 'Proactive Support', 'Performance Tuning', 'Issue Resolution']
  },
  {
    label: 'Scale & Optimize',
    href: '/services/scale-optimize',
    description: 'Performance enhancement and scalability solutions for growing businesses.',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(254, 215, 170, 0.8))',
    features: ['Scalability Planning', 'Performance Enhancement', 'Cost Optimization', 'Growth Strategy']
  }
];

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

// Helper functions
function getServiceIcon(label: string) {
  const icons: Record<string, any> = {
    'Bot Blueprint': FileText,
    'Build & Test': Wrench,
    'Discovery Call': Users,
    'Hyper Care': Shield,
    'Scale & Optimize': TrendingUp,
    'default': Rocket
  };
  return icons[label] || icons['default'];
}

function getSolutionIcon(label: string) {
  const icons: Record<string, any> = {
    'Time Liberation': Zap,
    'Growth Accelerator': TrendingUp,
    'Profit Rescue': Shield,
    'Custom Bot Development': Bot,
    'default': Sparkles
  };
  return icons[label] || icons['default'];
}

// Main Component
export default function Navbar({ addToRefs }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('bsfi');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 20) {
        setActiveDropdown(null);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdownButtons = document.querySelectorAll('[data-dropdown]');
      const dropdownMenus = document.querySelectorAll('[data-dropdown-menu]');
      
      const isClickInsideDropdown = Array.from(dropdownButtons).some(button => button.contains(target)) ||
                                   Array.from(dropdownMenus).some(menu => menu.contains(target));
      
      if (!isClickInsideDropdown) {
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      // dropdown: [
      //   { label: 'Bot Blueprint', href: '/services/bot-blueprint' },
      //   { label: 'Build & Test', href: '/services/build-and-test' },
      //   { label: 'Discovery Call', href: '/services/discovery-call' },
      //   { label: 'Hyper Care', href: '/services/hyper-care' },
      //   { label: 'Scale & Optimize', href: '/services/scale-optimize' }
      // ]
    },
    { 
      label: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { label: 'Time Liberation', href: '/solutions/time-liberation' },
        { label: 'Growth Accelerator', href: '/solutions/growth-accelerator' },
        { label: 'Profit Rescue', href: '/solutions/profit-rescue' },
        { label: 'Custom Bot Development', href: '/solutions/custombot-development' }
      ]
    },
    // { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      {/* Background blur overlay */}
      <div 
        className={`fixed top-0 left-0 right-0 transition-all duration-500 z-[99] ${
          isScrolled 
            ? 'bg-white backdrop-blur-sm shadow-2xl border-b border-white/20' 
            : 'bg-white backdrop-blur-sm'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(12px) saturate(150%)' : 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: isScrolled ? 'blur(12px) saturate(150%)' : 'blur(12px) saturate(150%)',
        }}
      />

      <motion.nav 
        className="fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Enhanced glassmorphism container */}
        <div 
          className={`relative w-full max-w-[1920px] mx-auto transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-18'
          }`}
          style={{
            background: isScrolled 
              ? 'rgba(255, 255, 255, 0.15)' 
              : 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px) saturate(200%)',
            WebkitBackdropFilter: 'blur(10px) saturate(200%)',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: isScrolled 
              ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' 
              : '0 4px 16px 0 rgba(31, 38, 135, 0.1)'
          }}
        >
          {/* Animated gradient border */}
          <div 
            className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-500 ${
              isScrolled ? 'opacity-80' : 'opacity-40'
            }`}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), rgba(16, 185, 129, 0.8), rgba(245, 101, 101, 0.8), transparent)',
              animation: 'shimmer 3s ease-in-out infinite'
            }}
          />

          {/* Enhanced Logo */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 flex items-center pl-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center relative group">
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                  filter: 'blur(10px)'
                }}
              />
              {/* SVG Logo */}
              <Image
                src={'/assets/svgs/GenZBotLogo.svg'}
                alt="GenZBot Logo"
                height={75}
                width={200}
                className="relative z-10"
                // style={{ maxHeight: '40px' }}
                priority
                unoptimized
              />
            </Link>
          </motion.div>
          
          {/* Enhanced Menu */}
          <div className="flex h-full w-full justify-center items-center">
            <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-10">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.label} 
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.dropdown || item.label === 'Services' ? (
                    <>
                      <button
                        data-dropdown
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex text-black items-center font-semibold transition-all duration-300 relative px-4 py-2 rounded-2xl group ${
                          activeDropdown === item.label 
                            ? 'text-blue-600 bg-white/20 backdrop-blur-sm shadow-lg' 
                            : 'text-gray-700 hover:text-blue-600 hover:bg-white/10'
                        }`}
                        style={{
                          backdropFilter: activeDropdown === item.label ? 'blur(10px)' : undefined,
                          WebkitBackdropFilter: activeDropdown === item.label ? 'blur(10px)' : undefined,
                        }}
                      >
                        <span className="relative z-10 font-medium">{item.label}</span>
                        <ChevronDown
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                        
                        {/* Enhanced hover effect */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                          }}
                        />
                      </button>

                      {/* Products Dropdown with Hero Section - Matching Style */}
                      <AnimatePresence>
                        {item.label === 'Services' && activeDropdown === item.label && (
                          <motion.div 
                            data-dropdown-menu
                            className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-5xl"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <div 
                              className="rounded-3xl shadow-2xl border overflow-hidden"
                              style={{
                                background: 'rgba(255, 255, 255, 0.97)',
                                backdropFilter: 'blur(15px) saturate(150%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
                              }}
                            >
                              <div className="p-6">
                                <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                                  {/* Hero Card - Reduced Width */}
                                  <div className="lg:w-1/4">
                                    <Card 
                                      className="h-full border-0 text-white overflow-hidden relative"
                                      style={{
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(168, 85, 247, 0.8) 100%)',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                      }}
                                    >
                                      <div 
                                        className="absolute inset-0"
                                        style={{
                                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                                        }}
                                      />
                                      <CardHeader className="relative z-10 pb-3 p-3">
                                        <div className="flex items-center gap-2 mb-3">
                                          <div 
                                            className="w-10 h-10 rounded-2xl flex items-center justify-center border relative overflow-hidden"
                                            style={{
                                              background: 'rgba(255, 255, 255, 0.2)',
                                              backdropFilter: 'blur(10px)',
                                              WebkitBackdropFilter: 'blur(10px)',
                                              border: '1px solid rgba(255, 255, 255, 0.3)'
                                            }}
                                          >
                                            <div 
                                              className="absolute inset-0 animate-pulse"
                                              style={{
                                                background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)'
                                              }}
                                            />
                                            <Layers className="w-5 h-5 text-white relative z-10" />
                                          </div>
                                          <Badge 
                                            className="text-white border-white/30 text-xs"
                                            style={{
                                              background: 'rgba(255, 255, 255, 0.2)',
                                              backdropFilter: 'blur(10px)',
                                              WebkitBackdropFilter: 'blur(10px)',
                                            }}
                                          >
                                            Services 🏭
                                          </Badge>
                                        </div>
                                        <CardTitle className="text-lg font-bold mb-2">
                                          Industry Services
                                        </CardTitle>
                                        <CardDescription className="text-white/90 leading-relaxed text-sm">
                                          Specialized automation products tailored for your industry needs
                                        </CardDescription>
                                      </CardHeader>
                                      <CardContent className="relative z-10 p-3 pt-0">
                                        <div className="grid grid-cols-2 gap-2">
                                          {[
                                            { emoji: "🏭", text: "Industry Focused" },
                                            { emoji: "⚙️", text: "Customizable" },
                                            { emoji: "📊", text: "Analytics" },
                                            { emoji: "🔗", text: "Integration" }
                                          ].map((feature, idx) => (
                                            <div 
                                              key={idx} 
                                              className="rounded-xl p-2 border"
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)'
                                              }}
                                            >
                                              <div className="text-center">
                                                <div className="text-sm mb-1">{feature.emoji}</div>
                                                <div className="text-xs font-medium">{feature.text}</div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                  
                                  {/* Categories and Services - Increased Width */}
                                  <div className="lg:w-3/4 flex gap-4 min-w-0">
                                    <div className="w-40 flex-shrink-0">
                                      <div className="max-h-96 overflow-y-auto custom-scrollbar">
                                        <div className="space-y-2">
                                          {productCategories.map((category, categoryIdx) => {
                                            const IconComponent = category.icon;
                                            const categoryColors = [
                                              { bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 197, 253, 0.8))', border: 'rgba(59, 130, 246, 0.3)' },
                                              { bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.8), rgba(252, 165, 165, 0.8))', border: 'rgba(239, 68, 68, 0.3)' },
                                              { bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(196, 181, 253, 0.8))', border: 'rgba(139, 92, 246, 0.3)' },
                                              { bg: 'linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(254, 215, 170, 0.8))', border: 'rgba(251, 146, 60, 0.3)' },
                                              { bg: 'linear-gradient(135deg, rgba(34, 197, 94, 0.8), rgba(134, 239, 172, 0.8))', border: 'rgba(34, 197, 94, 0.3)' },
                                              { bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(196, 181, 253, 0.8))', border: 'rgba(99, 102, 241, 0.3)' }
                                            ];
                                            const categoryColor = categoryColors[categoryIdx % categoryColors.length];
                                            
                                            return (
                                              <motion.button
                                                key={category.id}
                                                onClick={() => handleCategoryChange(category.id)}
                                                className={`w-full text-left p-2 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                                                  activeCategory === category.id ? 'scale-105' : 'hover:scale-102'
                                                }`}
                                                style={{
                                                  background: activeCategory === category.id 
                                                    ? categoryColor.bg 
                                                    : 'rgba(255, 255, 255, 0.1)',
                                                  border: `1px solid ${categoryColor.border}`,
                                                  backdropFilter: 'blur(8px)',
                                                  WebkitBackdropFilter: 'blur(8px)',
                                                }}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: categoryIdx * 0.1 }}
                                              >
                                                <div className="flex items-start gap-2 relative z-10">
                                                  <div 
                                                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                      activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200/20'
                                                    }`}
                                                  >
                                                    <IconComponent className={`w-4 h-4 ${
                                                      activeCategory === category.id ? 'text-white' : category.color
                                                    }`} />
                                                  </div>
                                                  <div className="flex-1 min-w-0 overflow-hidden">
                                                    <div className={`font-semibold text-xs leading-tight mb-0.5 ${
                                                      activeCategory === category.id ? 'text-white' : 'text-gray-700'
                                                    }`} style={{ 
                                                      wordBreak: 'break-word',
                                                      hyphens: 'auto',
                                                      lineHeight: '1.2'
                                                    }}>
                                                      {category.title.replace('&', '&\u200B')}
                                                    </div>
                                                    <div className={`text-xs ${
                                                      activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                                                    }`}>
                                                      {category.services.length} items
                                                    </div>
                                                  </div>
                                                  {activeCategory === category.id && (
                                                    <ChevronRight className="w-3 h-3 text-white flex-shrink-0" />
                                                  )}
                                                </div>
                                              </motion.button>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Services Grid - Flexible Width */}
                                    <div className="flex-1 min-w-0">
                                      <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                        <AnimatePresence mode="wait">
                                          {productCategories.map((category) => {
                                            if (category.id !== activeCategory) return null;
                                            
                                            return (
                                              <motion.div 
                                                key={category.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                              >
                                                {category.services.map((service, idx) => {
                                                  const ServiceIcon = service.icon;
                                                  return (
                                                    <motion.div
                                                      key={service.name}
                                                      initial={{ opacity: 0, y: 20 }}
                                                      animate={{ opacity: 1, y: 0 }}
                                                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    >
                                                      <Link href={service.href} onClick={handleDropdownItemClick}>
                                                        <Card 
                                                          className="transition-all duration-300 cursor-pointer group hover:scale-105 border relative overflow-hidden h-full min-h-[120px]"
                                                          style={{
                                                            background: 'rgba(255, 255, 255, 0.2)',
                                                            backdropFilter: 'blur(8px)',
                                                            WebkitBackdropFilter: 'blur(8px)',
                                                            border: `1px solid ${category.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 
                                                                      category.color.includes('red') ? 'rgba(239, 68, 68, 0.3)' : 
                                                                      category.color.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 
                                                                      category.color.includes('orange') ? 'rgba(251, 146, 60, 0.3)' : 
                                                                      category.color.includes('green') ? 'rgba(34, 197, 94, 0.3)' : 
                                                                      'rgba(99, 102, 241, 0.3)'}`,
                                                          }}
                                                        >
                                                          <div 
                                                            className="absolute top-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-300"
                                                            style={{ background: category.bgGradient }}
                                                          />
                                                          
                                                          <CardHeader className="pb-2 pt-3 px-3">
                                                            <div className="flex items-start gap-2.5">
                                                              <div 
                                                                className="w-8 h-8 rounded-lg text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0"
                                                                style={{ background: category.bgGradient }}
                                                              >
                                                                <ServiceIcon size={14} />
                                                              </div>
                                                              <div className="flex-1 min-w-0">
                                                                <CardTitle className={`text-sm font-semibold ${category.color} group-hover:text-gray-700 transition-colors leading-tight mb-1.5 break-words`}>
                                                                  {service.name}
                                                                </CardTitle>
                                                                <Badge 
                                                                  className="text-white/80 border text-xs px-2 py-0.5 inline-block"
                                                                  style={{
                                                                    background: 'rgba(255, 255, 255, 0.15)',
                                                                    border: '1px solid rgba(255, 255, 255, 0.25)'
                                                                  }}
                                                                >
                                                                  {service.tools}
                                                                </Badge>
                                                              </div>
                                                            </div>
                                                          </CardHeader>
                                                          <CardContent className="pt-0 pb-3 px-3">
                                                            <CardDescription className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-700 transition-colors break-words">
                                                              {service.description}
                                                            </CardDescription>
                                                          </CardContent>
                                                        </Card>
                                                      </Link>
                                                    </motion.div>
                                                  );
                                                })}
                                              </motion.div>
                                            );
                                          })}
                                        </AnimatePresence>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Services Dropdown with Hero Section - Matching Solutions Style */}
                      {/* <AnimatePresence>
                        {item.label === 'Services' && activeDropdown === item.label && (
                          <motion.div 
                            data-dropdown-menu
                            className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-4xl"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <div 
                              className="rounded-3xl shadow-2xl border overflow-hidden"
                              style={{
                                background: 'rgba(255, 255, 255, 0.75)',
                                backdropFilter: 'blur(15px) saturate(150%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
                              }}
                            >
                              <div className="p-6">
                                <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                                  <div className="lg:w-1/3">
                                    <Card 
                                      className="h-full border-0 text-white overflow-hidden relative"
                                      style={{
                                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(16, 185, 129, 0.8) 100%)',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                      }}
                                    >
                                      <div 
                                        className="absolute inset-0"
                                        style={{
                                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                                        }}
                                      />
                                      <CardHeader className="relative z-10 pb-4">
                                        <div className="flex items-center gap-3 mb-4">
                                          <div 
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                                            style={{
                                              background: 'rgba(255, 255, 255, 0.2)',
                                              backdropFilter: 'blur(10px)',
                                              WebkitBackdropFilter: 'blur(10px)',
                                              border: '1px solid rgba(255, 255, 255, 0.3)'
                                            }}
                                          >
                                            <Rocket className="w-6 h-6 text-white" />
                                          </div>
                                          <Badge 
                                            className="text-white border-white/30"
                                            style={{
                                              background: 'rgba(255, 255, 255, 0.2)',
                                              backdropFilter: 'blur(10px)',
                                              WebkitBackdropFilter: 'blur(10px)',
                                            }}
                                          >
                                            SERVICES ⚡
                                          </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-bold mb-2">
                                          Automation Services
                                        </CardTitle>
                                        <CardDescription className="text-white/90 leading-relaxed">
                                          Enterprise-grade automation solutions designed for scale and efficiency
                                        </CardDescription>
                                      </CardHeader>
                                      <CardContent className="relative z-10">
                                        <div className="grid grid-cols-2 gap-3">
                                          {[
                                            { emoji: "⚡", text: "Fast Setup" },
                                            { emoji: "🔒", text: "Secure" },
                                            { emoji: "👥", text: "24/7 Support" },
                                            { emoji: "💎", text: "Premium" }
                                          ].map((feature, idx) => (
                                            <div 
                                              key={idx} 
                                              className="rounded-xl p-3 border"
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)'
                                              }}
                                            >
                                              <div className="text-center">
                                                <div className="text-lg mb-1">{feature.emoji}</div>
                                                <div className="text-xs font-medium">{feature.text}</div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                  
                                  <div className="lg:w-2/3">
                                    <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {servicesData.map((service, idx) => {
                                          const IconComponent = service.icon;
                                          
                                          return (
                                            <motion.div
                                              key={service.label}
                                              initial={{ opacity: 0, y: 20 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            >
                                              <Link href={service.href} onClick={handleDropdownItemClick}>
                                                <Card 
                                                  className="transition-all duration-300 cursor-pointer group hover:scale-105 border relative overflow-hidden h-full"
                                                  style={{
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    backdropFilter: 'blur(8px)',
                                                    WebkitBackdropFilter: 'blur(8px)',
                                                    border: `1px solid rgba(${service.color.includes('blue') ? '59, 130, 246' : 
                                                              service.color.includes('green') ? '16, 185, 129' : 
                                                              service.color.includes('purple') ? '139, 92, 246' : 
                                                              service.color.includes('red') ? '245, 101, 101' : 
                                                              '251, 146, 60'}, 0.3)`,
                                                  }}
                                                >
                                                  <div 
                                                    className="absolute top-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-300"
                                                    style={{ background: service.bgGradient }}
                                                  />
                                                  
                                                  <CardHeader className="pb-3 pt-4">
                                                    <div className="flex items-start gap-3">
                                                      <div 
                                                        className="w-10 h-10 rounded-xl text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                        style={{ background: service.bgGradient }}
                                                      >
                                                        <IconComponent size={16} />
                                                      </div>
                                                      <div className="flex-1">
                                                        <CardTitle className={`text-lg font-bold ${service.color} group-hover:text-gray-700 transition-colors`}>
                                                          {service.label}
                                                        </CardTitle>
                                                        <Badge 
                                                          className="mt-1 text-white/80 border text-xs"
                                                          style={{
                                                            background: 'rgba(255, 255, 255, 0.15)',
                                                            border: '1px solid rgba(255, 255, 255, 0.25)'
                                                          }}
                                                        >
                                                          {String(idx + 1).padStart(2, '0')}
                                                        </Badge>
                                                      </div>
                                                    </div>
                                                  </CardHeader>
                                                  <CardContent className="pt-0 pb-4">
                                                    <CardDescription className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors mb-3">
                                                      {service.description}
                                                    </CardDescription>
                                                    
                                                    <div className="space-y-1">
                                                      {service.features.slice(0, 2).map((feature, featureIdx) => (
                                                        <div key={featureIdx} className="flex items-center gap-2 text-xs text-gray-500">
                                                          <div 
                                                            className="w-1.5 h-1.5 rounded-full"
                                                            style={{ background: service.bgGradient }}
                                                          />
                                                          <span>{feature}</span>
                                                        </div>
                                                      ))}
                                                      {service.features.length > 2 && (
                                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                                          <span>+{service.features.length - 2} more</span>
                                                        </div>
                                                      )}
                                                    </div>
                                                  </CardContent>
                                                </Card>
                                              </Link>
                                            </motion.div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence> */}

                      {/* Solutions Dropdown with Hero Section */}
                      <AnimatePresence>
                        {item.label === 'Solutions' && activeDropdown === item.label && (
                          <motion.div 
                            data-dropdown-menu
                            className="fixed left-1/2 top-[4.5rem] z-[120] transform -translate-x-1/2 w-full max-w-4xl"
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <div 
                              className="rounded-3xl shadow-2xl border overflow-hidden"
                              style={{
                                background: 'rgba(255, 255, 255, 0.97)',
                                backdropFilter: 'blur(15px) saturate(150%)',
                                WebkitBackdropFilter: 'blur(15px) saturate(150%)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
                              }}
                            >
                              <div className="p-6">
                                <div className="flex flex-col lg:flex-row gap-6 relative z-10">
                                  {/* Hero Card */}
                                  <div className="lg:w-1/3">
                                    <Card 
                                      className="h-full border-0 text-white overflow-hidden relative"
                                      style={{
                                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(59, 130, 246, 0.8) 100%)',
                                        backdropFilter: 'blur(5px)',
                                        WebkitBackdropFilter: 'blur(5px)',
                                      }}
                                    >
                                      <div 
                                        className="absolute inset-0"
                                        style={{
                                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)'
                                        }}
                                      />
                                      
                                      <CardHeader className="relative z-10 pb-4">
                                        <div className="flex items-center gap-3 mb-4">
                                          <div 
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center border relative overflow-hidden"
                                            style={{
                                              background: 'rgba(255, 255, 255, 0.2)',
                                              backdropFilter: 'blur(10px)',
                                              WebkitBackdropFilter: 'blur(10px)',
                                              border: '1px solid rgba(255, 255, 255, 0.3)'
                                            }}
                                          >
                                            <div 
                                              className="absolute inset-0 animate-pulse"
                                              style={{
                                                background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)'
                                              }}
                                            />
                                            <Sparkles className="w-6 h-6 text-white relative z-10" />
                                          </div>
                                          <Badge 
                                            className="text-white border-white/30"
                                            style={{
                                              background: 'rgba(255, 255, 255, 0.2)',
                                              backdropFilter: 'blur(10px)',
                                              WebkitBackdropFilter: 'blur(10px)',
                                            }}
                                          >
                                            SOLUTIONS ✨
                                          </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-bold mb-2">
                                          Business Solutions
                                        </CardTitle>
                                        <CardDescription className="text-white/90 leading-relaxed">
                                          Powerful solutions that transform how you work and grow
                                        </CardDescription>
                                      </CardHeader>
                                      <CardContent className="relative z-10">
                                        <div className="grid grid-cols-2 gap-3">
                                          {[
                                            { emoji: "⚡", text: "Fast Setup" },
                                            { emoji: "🎯", text: "Goal Focused" },
                                            { emoji: "🚀", text: "Scalable" },
                                            { emoji: "💎", text: "Premium" }
                                          ].map((feature, idx) => (
                                            <div 
                                              key={idx} 
                                              className="rounded-xl p-3 border"
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)'
                                              }}
                                            >
                                              <div className="text-center">
                                                <div className="text-lg mb-1">{feature.emoji}</div>
                                                <div className="text-xs font-medium">{feature.text}</div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                  
                                  {/* Solutions Grid */}
                                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.dropdown?.map((dropdownItem, idx) => {
                                      const IconComponent = getSolutionIcon(dropdownItem.label);
                                      const solutions = [
                                        { bg: 'linear-gradient(135deg, rgba(251, 191, 36, 0.8), rgba(252, 211, 77, 0.8))', emoji: '⏰', color: 'text-amber-600', border: 'rgba(251, 191, 36, 0.3)' },
                                        { bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.8), rgba(251, 113, 133, 0.8))', emoji: '📈', color: 'text-pink-600', border: 'rgba(236, 72, 153, 0.3)' },
                                        { bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(110, 231, 183, 0.8))', emoji: '💰', color: 'text-green-600', border: 'rgba(16, 185, 129, 0.3)' },
                                        { bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(196, 181, 253, 0.8))', emoji: '🤖', color: 'text-purple-600', border: 'rgba(139, 92, 246, 0.3)' }
                                      ];
                                      const solution = solutions[idx % solutions.length];
                                      
                                      return (
                                        <motion.div
                                          key={dropdownItem.label}
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                                        >
                                          <Link href={dropdownItem.href} onClick={handleDropdownItemClick}>
                                            <Card 
                                              className="transition-all duration-300 cursor-pointer group hover:scale-105 border relative overflow-hidden"
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                backdropFilter: 'blur(8px)',
                                                WebkitBackdropFilter: 'blur(8px)',
                                                border: `1px solid ${solution.border}`,
                                              }}
                                            >
                                              <div className="absolute top-3 right-3 text-xl animate-bounce group-hover:animate-spin transition-all duration-300">
                                                {solution.emoji}
                                              </div>
                                              
                                              <div 
                                                className="absolute top-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-300"
                                                style={{ background: solution.bg }}
                                              />
                                              
                                              <CardHeader className="pb-3">
                                                <div className="flex items-start gap-3">
                                                  <div 
                                                    className="w-10 h-10 rounded-xl text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                                    style={{ background: solution.bg }}
                                                  >
                                                    <IconComponent size={16} />
                                                  </div>
                                                  <div className="flex-1">
                                                    <CardTitle className={`text-lg font-bold ${solution.color} group-hover:text-gray-700 transition-colors`}>
                                                      {dropdownItem.label}
                                                    </CardTitle>
                                                  </div>
                                                </div>
                                              </CardHeader>
                                              <CardContent className="pt-0">
                                                <CardDescription className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                                  {dropdownItem.label === 'Time Liberation' && 'Automate away the boring stuff—get your time back for what matters most.'}
                                                  {dropdownItem.label === 'Growth Accelerator' && 'Supercharge your business with smart automation that scales as you grow.'}
                                                  {dropdownItem.label === 'Profit Rescue' && 'Save money, reduce manual work, and let your team shine at what they do best.'}
                                                  {dropdownItem.label === 'Custom Bot Development' && 'Build something truly yours—bespoke bots and creative automations.'}
                                                </CardDescription>
                                              </CardContent>
                                            </Card>
                                          </Link>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black font-semibold transition-all duration-300 relative px-4 py-2 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-white/10 group"
                      style={{
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                    >
                      <span className="relative z-10 font-medium">{item.label}</span>
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                        }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Get Started Button */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-6">
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Uiverse.io Modern Button by Javierrocadev - Reduced size */}
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="relative flex items-center gap-1 bg-neutral-600 px-5 py-2 border-4 border-black hover:border-orange-500 text-sm bg-transparent rounded-lg font-semibold text-black cursor-pointer overflow-hidden transition-all duration-600 ease-custom hover:text-orange-400 hover:rounded-2xl group hover:transition-all duration-700 hover:duration-700"
                  style={{ minWidth: '100px', maxWidth: '150px', justifyContent: 'center' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute w-4 fill-white z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-2 group-hover:fill-[#ff8904]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                  <span
                    className="relative z-[1] transition-all duration-700 ease-custom -translate-x-2 group-hover:translate-x-2 font-bold"
                  >
                    Get Started
                  </span>
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[120px] group-hover:h-[120px] group-hover:opacity-100"
                  ></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute w-4 fill-black z-[9] transition-all duration-700 ease-custom right-2 group-hover:-right-1/4 group-hover:fill-[#ff8904]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                </button>
              </motion.div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 border"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-20 left-0 right-0 z-[99] border-t"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(25px) saturate(180%)',
              WebkitBackdropFilter: 'blur(25px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.dropdown || item.label === 'Services' ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex justify-between items-center w-full px-4 py-3 rounded-2xl font-semibold text-gray-700 transition-all duration-300"
                        style={{
                          background: activeDropdown === item.label ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.75)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                        }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            className="pl-4 mt-2"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.label === 'Services' ? (
                              <div className="space-y-2 max-h-64 overflow-y-auto">
                                {productCategories.map((category) => (
                                  <div key={category.id} className="bg-gray-800/30 rounded-xl p-3">
                                    <div className="font-semibold text-white text-sm mb-2">{category.title}</div>
                                    <div className="space-y-1">
                                      {category.services.map((service) => (
                                        <Link
                                          key={service.name}
                                          href={service.href}
                                          className="block px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 text-sm"
                                          onClick={handleDropdownItemClick}
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              item.dropdown?.map((dropdownItem, idx) => (
                                <motion.div
                                  key={dropdownItem.label}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                                >
                                  <Link
                                    href={dropdownItem.href}
                                    className="block px-4 py-2 rounded-xl text-gray-600 hover:text-gray-700 transition-all duration-300"
                                    style={{
                                      background: 'rgba(255, 255, 255, 0.05)',
                                      backdropFilter: 'blur(5px)',
                                      WebkitBackdropFilter: 'blur(5px)',
                                    }}
                                    onClick={handleDropdownItemClick}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </motion.div>
                              ))
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 rounded-2xl font-semibold text-gray-700 transition-all duration-300"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 font-bold rounded-2xl text-center transition-all duration-300 shadow-lg text-white"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 101, 101, 0.9), rgba(251, 113, 133, 0.9))',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
      `}</style>
    </>
  );
}