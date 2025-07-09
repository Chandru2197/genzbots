"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  Gem,
  Palette,
  Globe,
  Layers,
  Cpu,
  Waves
} from 'lucide-react';
import Image from 'next/image';

// Enhanced Card Components with glassmorphism
import { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}

const Card = ({ children, className = '', style, ...props }: CardProps) => ( 
  <div 
    className={`rounded-2xl border backdrop-blur-xl ${className}`} 
    style={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      ...style
    }} 
    {...props}
  >
    {children}
  </div>
);

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}
const CardHeader = ({ children, className = '', ...props }: CardHeaderProps) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

interface CardContentProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}
const CardContent = ({ children, className = '', ...props }: CardContentProps) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}
const CardTitle = ({ children, className = '', ...props }: CardTitleProps) => (
  <h3 className={`font-bold text-white ${className}`} {...props}>
    {children}
  </h3>
);

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}
const CardDescription = ({ children, className = '', ...props }: CardDescriptionProps) => (
  <p className={`text-gray-300 ${className}`} {...props}>
    {children}
  </p>
);

interface BadgeProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}
const Badge = ({ children, className = '', style, ...props }: BadgeProps) => (
  <span 
    className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-md ${className}`} 
    style={{
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      ...style
    }} 
    {...props}
  >
    {children}
  </span>
);

// Enhanced Data with more visual appeal
const productCategories = [
  {
    id: 'bsfi',
    title: 'Banking & Financial Services',
    icon: Building2,
    color: 'text-blue-400',
    bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 197, 253, 0.2))',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    services: [
      {
        name: 'Loan Application Processing',
        description: 'AI-powered auto-extraction of KYC data with instant credit scoring and approval workflow',
        tools: 'UiPath + Abbyy + ML',
        href: '/product/bsfi/loan',
        icon: FileText
      },
      {
        name: 'AML Monitoring',
        description: 'Real-time transaction scanning with advanced anomaly detection and suspicious activity flagging',
        tools: 'AI: Deep Learning',
        href: '/product/bsfi/aml',
        icon: Eye
      },
      {
        name: 'Card Dispute Resolution',
        description: 'Automated dispute form generation from transaction logs with intelligent routing',
        tools: 'Blue Prism + AI',
        href: '/product/bsfi/card-dispute',
        icon: CreditCard
      },
      {
        name: 'Bank Reconciliation',
        description: 'Smart statement matching with ERP systems using advanced fuzzy logic',
        tools: 'AI: Neural Networks',
        href: '/product/bsfi/bank-reconciliation',
        icon: BarChart3
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Pharma',
    icon: Heart,
    color: 'text-red-400',
    bgGradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(252, 165, 165, 0.2))',
    glowColor: 'rgba(239, 68, 68, 0.3)',
    services: [
      {
        name: 'Patient Onboarding',
        description: 'Seamless ID scanning to EHR population with automated appointment scheduling',
        tools: 'UiPath + OCR + AI',
        href: '/product/healthcare&pharma/patient-onboarding',
        icon: UserPlus
      },
      {
        name: 'Claims Processing',
        description: 'Intelligent insurance claim validation with automated TPA submission',
        tools: 'AI: Rule Engine',
        href: '/product/healthcare&pharma/claims',
        icon: HeartHandshake
      },
      {
        name: 'Clinical Trial Data Entry',
        description: 'Automated lab report data extraction into trial databases with validation',
        tools: 'Python + AI + API',
        href: '/product/healthcare&pharma/clinical',
        icon: Clipboard
      },
      {
        name: 'Pharmacy Inventory Sync',
        description: 'Smart inventory management with automated purchase order generation',
        tools: 'SAP + RPA + IoT',
        href: '/product/healthcare&pharma/inventory',
        icon: Pill
      }
    ]
  },
  {
    id: 'retail',
    title: 'Retail & E-Commerce',
    icon: ShoppingCart,
    color: 'text-purple-400',
    bgGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(196, 181, 253, 0.2))',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    services: [
      {
        name: 'Dynamic Pricing',
        description: 'Real-time competitor price scraping with intelligent Shopify/Amazon listing adjustments',
        tools: 'AI: ML Models',
        href: '/product/retail&ecommerce/pricing',
        icon: TrendingUp
      },
      {
        name: 'Returns Processing',
        description: 'Automated return request validation with instant shipping label generation',
        tools: 'UiPath + APIs',
        href: '/product/retail&ecommerce/returns',
        icon: RotateCcw
      },
      {
        name: 'Order Reconciliation',
        description: 'Smart order matching across Amazon/Flipkart with warehouse management',
        tools: 'SQL + RPA + AI',
        href: '/product/retail&ecommerce/order',
        icon: ShoppingBag
      }
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Logistics',
    icon: Factory,
    color: 'text-orange-400',
    bgGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(254, 215, 170, 0.2))',
    glowColor: 'rgba(251, 146, 60, 0.3)',
    services: [
      {
        name: 'BOM Validation',
        description: 'Intelligent cross-checking of supplier invoices against CAD design specifications',
        tools: 'SolidWorks + AI',
        href: '/product/manufacturing&logistics/bom',
        icon: Wrench
      },
      {
        name: 'Shipment Tracking',
        description: 'Real-time courier API monitoring with automated customer notifications',
        tools: 'Python + Twilio + AI',
        href: '/product/manufacturing&logistics/shipment',
        icon: Truck
      },
      {
        name: 'Predictive Maintenance',
        description: 'IoT sensor data analysis for machine failure prediction and prevention',
        tools: 'AI: Time Series + IoT',
        href: '/product/manufacturing&logistics/maintenance',
        icon: Activity
      }
    ]
  },
  {
    id: 'hr',
    title: 'Human Resources',
    icon: UserCheck,
    color: 'text-green-400',
    bgGradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(134, 239, 172, 0.2))',
    glowColor: 'rgba(34, 197, 94, 0.3)',
    services: [
      {
        name: 'Resume Screening',
        description: 'AI-powered resume parsing with intelligent candidate ranking and matching',
        tools: 'AI: NLP + ChatGPT',
        href: '/product/hr/resume',
        icon: FileSearch
      },
      {
        name: 'Payroll Processing',
        description: 'Automated salary calculations with direct bank transfer integration',
        tools: 'Tally + RPA + API',
        href: '/product/hr/payroll',
        icon: Calculator
      },
      {
        name: 'Employee Offboarding',
        description: 'Seamless access revocation and asset recovery automation',
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
    color: 'text-indigo-400',
    bgGradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(196, 181, 253, 0.2))',
    glowColor: 'rgba(99, 102, 241, 0.3)',
    services: [
      {
        name: 'Grievance Redressal',
        description: 'Intelligent complaint routing with automated status updates and resolution tracking',
        tools: 'AI: Text Classification',
        href: '/product/gov&public/grievance-redressal',
        icon: HeartHandshake
      },
      {
        name: 'Pension Processing',
        description: 'Automated eligibility verification with secure payment disbursement',
        tools: 'RPA + Aadhaar API',
        href: '/product/gov&public/pension',
        icon: Calculator
      }
    ]
  }
];

// Enhanced Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.5)'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Animated Background
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-bounce" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-pink-600/30 rounded-full blur-3xl animate-bounce" 
             style={{ animationDuration: '8s', animationDelay: '2s' }} />
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 border border-purple-400/20 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-sm"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

// Enhanced Glow Effect Hook
const useGlowEffect = (isActive: boolean) => {
  const [glowIntensity, setGlowIntensity] = useState(0);
  
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setGlowIntensity(prev => (prev + 0.1) % 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isActive]);
  
  return glowIntensity;
};

// Helper functions with enhanced visuals
function getServiceIcon(label: string) {
  const icons = {
    'Bot Blueprint': Layers,
    'Build & Test': Cpu,
    'Discovery Call': Globe,
    'Hyper Care': Shield,
    'Scale & Optimize': TrendingUp,
    'default': Rocket
  };
  return icons[label as keyof typeof icons] || icons['default'];
}

function getSolutionIcon(label: string) {
  const icons = {
    'Time Liberation': Zap,
    'Growth Accelerator': TrendingUp,
    'Profit Rescue': Shield,
    'Custom Bot Development': Bot,
    'default': Sparkles
  };
  return icons[label as keyof typeof icons] || icons['default'];
}

// Main Enhanced Navbar Component
export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState('bsfi');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [12, 25]);
  
  const glowIntensity = useGlowEffect(activeDropdown !== null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 20) {
        setActiveDropdown(null);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      const dropdownButtons = document.querySelectorAll('[data-dropdown]');
      const dropdownMenus = document.querySelectorAll('[data-dropdown-menu]');
      
      const nodeTarget = target as Node | null;
      const isClickInsideDropdown = Array.from(dropdownButtons).some(button => button.contains(nodeTarget)) ||
                                   Array.from(dropdownMenus).some(menu => menu.contains(nodeTarget));
      
      if (!isClickInsideDropdown) {
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { label: 'Home', href: '/', icon: Globe },
    { 
      label: 'Solutions', 
      href: '/solutions',
      icon: Gem,
      dropdown: [
        { label: 'Time Liberation', href: '/solutions/time-liberation', icon: Zap },
        { label: 'Growth Accelerator', href: '/solutions/growth-accelerator', icon: TrendingUp },
        { label: 'Profit Rescue', href: '/solutions/profit-rescue', icon: Shield },
        { label: 'Custom Bot Development', href: '/solutions/custombot-development', icon: Bot }
      ]
    },
    { label: 'Services', href: '/products', icon: Cpu },
    { label: 'About', href: '/about', icon: Star },
    { label: 'Blog', href: '/blog', icon: Palette },
    { label: 'Contact', href: '/contact', icon: Waves }
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : (label as any));
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
      {/* Enhanced Background Effects */}
      <AnimatedBackground />
      <FloatingParticles />
      
      {/* Dynamic Cursor Effect */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-[999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
          filter: 'blur(1px)',
        }}
      />

      {/* Enhanced Navbar */}
      <motion.nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-700"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backdropFilter: `blur(${navBlur.get()}px) saturate(180%)`,
          WebkitBackdropFilter: `blur(${navBlur.get()}px) saturate(180%)`,
        }}
      >
        {/* Ultra-Premium Glassmorphism Container */}
        <motion.div 
          className="relative w-full max-w-[1920px] mx-auto"
          style={{
            height: isScrolled ? '70px' : '80px',
            background: `rgba(0, 0, 0, ${0.3 + glowIntensity * 0.2})`,
            backdropFilter: 'blur(30px) saturate(200%)',
            WebkitBackdropFilter: 'blur(30px) saturate(200%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0 0 24px 24px',
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.3), 
                       0 0 80px 0 rgba(59, 130, 246, ${0.1 + glowIntensity * 0.3}), 
                       inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Animated Border Gradients */}
          <div className="absolute inset-0 rounded-b-3xl overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8), rgba(16, 185, 129, 0.8), transparent)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.6), rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6), transparent)',
              }}
              animate={{
                backgroundPosition: ['100% 0%', '0% 0%', '100% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Enhanced Logo with Holographic Effect */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 flex items-center pl-8"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center relative group cursor-pointer">
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)',
                  filter: 'blur(20px)',
                  transform: 'scale(2)',
                }}
              />
              <motion.div
                className="relative z-10 flex items-center gap-3"
                // whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 via-amber-500 to-orange-500 p-0.5 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                    {/* <Bot className="w-6 h-6 text-white" /> */}
                    <Image
                      src={'/assets/svgs/GenZBotLogo.svg'}
                      alt="GenZBot Logo"
                      height={50}
                      width={120}
                      className="h-10 w-auto relative z-10"
                      style={{ maxHeight: '40px' }}
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-white">
                  <motion.h1 
                    className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    style={{ textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                  >
                    GenZBot
                  </motion.h1>
                  {/* <motion.div 
                    className="text-xs text-gray-300 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    AI Automation
                  </motion.div> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Ultra-Enhanced Menu */}
          <div className="flex h-full w-full justify-center items-center">
            <div className="hidden lg:flex items-center justify-center space-x-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={item.label} 
                    className="relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item.dropdown || item.label === 'Services' ? (
                      <>
                        <motion.button
                          data-dropdown
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold transition-all duration-500 relative overflow-hidden"
                          style={{
                            background: activeDropdown === item.label 
                              ? 'rgba(59, 130, 246, 0.2)' 
                              : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: activeDropdown === item.label 
                              ? '1px solid rgba(59, 130, 246, 0.3)' 
                              : '1px solid rgba(255, 255, 255, 0.1)',
                            color: activeDropdown === item.label ? '#60a5fa' : 'white',
                            boxShadow: activeDropdown === item.label 
                              ? '0 0 20px rgba(59, 130, 246, 0.3)' 
                              : 'none',
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="relative z-10 text-sm font-bold">{item.label}</span>
                          <motion.div
                            className="w-4 h-4"
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                          
                          {/* Hover particles */}
                          <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 8 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                                style={{
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              />
                            ))}
                          </div>
                        </motion.button>

                        {/* Ultra-Enhanced Products Dropdown */}
                        <AnimatePresence>
                          {item.label === 'Services' && activeDropdown === item.label && (
                            <motion.div 
                              data-dropdown-menu
                              className="fixed left-1/2 top-[85px] z-[120] transform -translate-x-1/2"
                              initial={{ opacity: 0, y: -30, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -30, scale: 0.9 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                              <div 
                                className="rounded-3xl shadow-2xl border overflow-hidden"
                                style={{
                                  width: '1000px',
                                  height: '550px',
                                  background: 'rgba(0, 0, 0, 0.95)',
                                  backdropFilter: 'blur(40px) saturate(150%)',
                                  WebkitBackdropFilter: 'blur(40px) saturate(150%)',
                                  border: '1px solid rgba(255, 255, 255, 0.1)',
                                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(59, 130, 246, 0.3)',
                                }}
                              >
                                {/* Animated background gradient */}
                                <div className="absolute inset-0 opacity-30">
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
                                    animate={{
                                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                    }}
                                    transition={{
                                      duration: 15,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  />
                                </div>

                                <div className="relative z-10 flex h-full">
                                  {/* Enhanced Vertical Tabs */}
                                  <div className="w-72 border-r border-gray-700/50 bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-md">
                                    <div className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                                      <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                          <Cpu className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                          <h3 className="text-sm font-bold text-white">Industry Solutions</h3>
                                          <p className="text-xs text-gray-300">Choose your domain</p>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="overflow-y-auto p-3" style={{ height: 'calc(550px - 80px)' }}>
                                      {productCategories.map((category) => {
                                        const IconComponent = category.icon;
                                        const isActive = activeCategory === category.id;
                                        return (
                                          <motion.button
                                            key={category.id}
                                            onClick={() => handleCategoryChange(category.id)}
                                            className="w-full text-left p-3 rounded-xl mb-2 transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
                                            style={{
                                              background: isActive 
                                                ? 'rgba(59, 130, 246, 0.2)' 
                                                : 'rgba(255, 255, 255, 0.05)',
                                              border: isActive 
                                                ? '1px solid rgba(59, 130, 246, 0.3)' 
                                                : '1px solid rgba(255, 255, 255, 0.1)',
                                              boxShadow: isActive 
                                                ? '0 0 20px rgba(59, 130, 246, 0.2)' 
                                                : 'none',
                                            }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                          >
                                            {/* Animated background */}
                                            <motion.div
                                              className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                              style={{
                                                background: category.bgGradient,
                                              }}
                                              initial={{ scale: 0 }}
                                              animate={{ scale: isActive ? 1 : 0 }}
                                              transition={{ duration: 0.3 }}
                                            />
                                            
                                            <div 
                                              className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                                              style={{
                                                background: isActive 
                                                  ? 'rgba(59, 130, 246, 0.3)' 
                                                  : 'rgba(255, 255, 255, 0.1)',
                                                boxShadow: isActive 
                                                  ? `0 0 15px ${category.glowColor}` 
                                                  : 'none',
                                              }}
                                            >
                                              <IconComponent className={`w-5 h-5 ${isActive ? 'text-blue-300' : 'text-gray-400'} transition-colors`} />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0 relative z-10">
                                              <div className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-300'} transition-colors`}>
                                                {category.title}
                                              </div>
                                              <div className={`text-xs ${isActive ? 'text-blue-300' : 'text-gray-500'} transition-colors`}>
                                                {category.services.length} automation solutions
                                              </div>
                                            </div>
                                            
                                            {isActive && (
                                              <motion.div
                                                className="relative z-10"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                              >
                                                <ChevronRight className="w-4 h-4 text-blue-400" />
                                              </motion.div>
                                            )}
                                          </motion.button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Enhanced Content Area */}
                                  <div className="flex-1 p-6 overflow-y-auto">
                                    <AnimatePresence mode="wait">
                                      {productCategories.map((category) => {
                                        if (category.id !== activeCategory) return null;
                                        
                                        const CategoryIcon = category.icon;
                                        
                                        return (
                                          <motion.div 
                                            key={category.id} 
                                            className="h-full"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.4 }}
                                          >
                                            {/* Enhanced Header */}
                                            <div className="mb-6">
                                              <div className="flex items-center gap-4 mb-4">
                                                <div 
                                                  className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                                                  style={{ 
                                                    background: category.bgGradient,
                                                    boxShadow: `0 0 30px ${category.glowColor}`,
                                                  }}
                                                >
                                                  <CategoryIcon className={`w-8 h-8 ${category.color} relative z-10`} />
                                                  <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                    animate={{ x: [-100, 100] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                  />
                                                </div>
                                                <div>
                                                  <h2 className="text-2xl font-bold text-white mb-1">{category.title}</h2>
                                                  <p className="text-gray-300 text-sm">Advanced automation solutions tailored for {category.title.toLowerCase()}</p>
                                                  <Badge style={{ marginTop: '8px' }}>
                                                    {category.services.length} Solutions Available
                                                  </Badge>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Enhanced Services Grid */}
                                            <div className="grid grid-cols-2 gap-4">
                                              {category.services.map((service, idx) => {
                                                const ServiceIcon = service.icon;
                                                return (
                                                  <motion.div
                                                    key={service.name}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                    onClick={() => {
                                                      window.location.href = service.href;
                                                      handleDropdownItemClick();
                                                    }}
                                                    className="cursor-pointer"
                                                  >
                                                    <Card className="h-full transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                                                      {/* Animated background on hover */}
                                                      <motion.div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                                        style={{
                                                          background: `linear-gradient(135deg, ${category.glowColor}, rgba(255, 255, 255, 0.1))`,
                                                        }}
                                                        initial={{ scale: 0 }}
                                                        whileHover={{ scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                      />
                                                      
                                                      <CardHeader className="pb-3 relative z-10">
                                                        <div className="flex items-start gap-3">
                                                          <div 
                                                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative overflow-hidden"
                                                            style={{
                                                              background: 'rgba(59, 130, 246, 0.2)',
                                                              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                                                            }}
                                                          >
                                                            <ServiceIcon className="w-6 h-6 text-blue-400 relative z-10" />
                                                            <motion.div
                                                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                              animate={{ x: [-50, 50] }}
                                                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                            />
                                                          </div>
                                                          <div className="flex-1">
                                                            <CardTitle className="text-lg font-bold group-hover:text-blue-300 transition-colors leading-tight">
                                                              {service.name}
                                                            </CardTitle>
                                                            <Badge 
                                                              className="mt-2"
                                                              style={{
                                                                background: 'rgba(59, 130, 246, 0.2)',
                                                                color: '#60a5fa',
                                                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                                              }}
                                                            >
                                                              {service.tools}
                                                            </Badge>
                                                          </div>
                                                        </div>
                                                      </CardHeader>
                                                      <CardContent className="pt-0 relative z-10">
                                                        <CardDescription className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                                          {service.description}
                                                        </CardDescription>
                                                      </CardContent>
                                                    </Card>
                                                  </motion.div>
                                                );
                                              })}
                                            </div>
                                          </motion.div>
                                        );
                                      })}
                                    </AnimatePresence>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Ultra-Enhanced Solutions Dropdown */}
                        <AnimatePresence>
                          {item.label === 'Solutions' && activeDropdown === item.label && (
                            <motion.div 
                              data-dropdown-menu
                              className="fixed left-1/2 top-[85px] z-[120] transform -translate-x-1/2"
                              initial={{ opacity: 0, y: -30, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -30, scale: 0.9 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                              <div 
                                className="rounded-3xl shadow-2xl border overflow-hidden"
                                style={{
                                  width: '900px',
                                  background: 'rgba(0, 0, 0, 0.95)',
                                  backdropFilter: 'blur(40px) saturate(150%)',
                                  WebkitBackdropFilter: 'blur(40px) saturate(150%)',
                                  border: '1px solid rgba(255, 255, 255, 0.1)',
                                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 100px rgba(139, 92, 246, 0.3)',
                                }}
                              >
                                {/* Animated background */}
                                <div className="absolute inset-0 opacity-20">
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-blue-600/30"
                                    animate={{
                                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                    }}
                                    transition={{
                                      duration: 12,
                                      repeat: Infinity,
                                      ease: "linear"
                                    }}
                                  />
                                </div>

                                <div className="relative z-10 p-8">
                                  <div className="flex gap-8">
                                    {/* Hero Section */}
                                    <div className="w-1/3">
                                      <Card 
                                        className="h-full border-0 text-white overflow-hidden relative"
                                        style={{
                                          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))',
                                          boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
                                        }}
                                      >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                                        
                                        <CardHeader className="relative z-10 pb-4">
                                          <div className="flex items-center gap-3 mb-4">
                                            <div 
                                              className="w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden"
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                                boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                                              }}
                                            >
                                              <Sparkles className="w-7 h-7 text-white relative z-10" />
                                              <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                                animate={{ x: [-100, 100] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                              />
                                            </div>
                                            <Badge 
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                backdropFilter: 'blur(10px)',
                                                WebkitBackdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                              }}
                                            >
                                              SOLUTIONS ✨
                                            </Badge>
                                          </div>
                                          <CardTitle className="text-2xl font-bold mb-3">
                                            Business Transformation
                                          </CardTitle>
                                          <CardDescription className="text-white/90 leading-relaxed">
                                            Revolutionary solutions that redefine productivity and accelerate growth
                                          </CardDescription>
                                        </CardHeader>
                                        <CardContent className="relative z-10">
                                          <div className="grid grid-cols-2 gap-3">
                                            {[
                                              { emoji: "⚡", text: "Instant Setup", color: "from-yellow-400 to-orange-500" },
                                              { emoji: "🎯", text: "Precision AI", color: "from-blue-400 to-purple-500" },
                                              { emoji: "🚀", text: "Hyper Scale", color: "from-green-400 to-blue-500" },
                                              { emoji: "💎", text: "Premium", color: "from-purple-400 to-pink-500" }
                                            ].map((feature, idx) => (
                                              <motion.div 
                                                key={idx} 
                                                className="rounded-xl p-3 border relative overflow-hidden"
                                                style={{
                                                  background: 'rgba(255, 255, 255, 0.1)',
                                                  backdropFilter: 'blur(10px)',
                                                  WebkitBackdropFilter: 'blur(10px)',
                                                  border: '1px solid rgba(255, 255, 255, 0.2)'
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                              >
                                                <div className="text-center relative z-10">
                                                  <motion.div 
                                                    className="text-xl mb-1"
                                                    animate={{ rotate: [0, 10, -10, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                                                  >
                                                    {feature.emoji}
                                                  </motion.div>
                                                  <div className="text-xs font-semibold">{feature.text}</div>
                                                </div>
                                                <motion.div
                                                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 hover:opacity-20 transition-opacity`}
                                                  whileHover={{ opacity: 0.2 }}
                                                />
                                              </motion.div>
                                            ))}
                                          </div>
                                        </CardContent>
                                      </Card>
                                    </div>
                                    
                                    {/* Solutions Grid */}
                                    <div className="w-2/3 grid grid-cols-2 gap-4">
                                      {item.dropdown?.map((dropdownItem, idx) => {
                                        const IconComponent = getSolutionIcon(dropdownItem.label);
                                        const solutions = [
                                          { 
                                            bg: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(252, 211, 77, 0.3))', 
                                            emoji: '⏰', 
                                            color: 'text-amber-300', 
                                            glow: 'rgba(251, 191, 36, 0.4)',
                                            particles: 'from-yellow-400 to-orange-400'
                                          },
                                          { 
                                            bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(251, 113, 133, 0.3))', 
                                            emoji: '📈', 
                                            color: 'text-pink-300', 
                                            glow: 'rgba(236, 72, 153, 0.4)',
                                            particles: 'from-pink-400 to-red-400'
                                          },
                                          { 
                                            bg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(110, 231, 183, 0.3))', 
                                            emoji: '💰', 
                                            color: 'text-green-300', 
                                            glow: 'rgba(16, 185, 129, 0.4)',
                                            particles: 'from-green-400 to-emerald-400'
                                          },
                                          { 
                                            bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(196, 181, 253, 0.3))', 
                                            emoji: '🤖', 
                                            color: 'text-purple-300', 
                                            glow: 'rgba(139, 92, 246, 0.4)',
                                            particles: 'from-purple-400 to-indigo-400'
                                          }
                                        ];
                                        const solution = solutions[idx % solutions.length];
                                        
                                        return (
                                          <motion.div
                                            key={dropdownItem.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: idx * 0.15 }}
                                            className="cursor-pointer"
                                            onClick={() => {
                                              window.location.href = dropdownItem.href;
                                              handleDropdownItemClick();
                                            }}
                                          >
                                            <Card 
                                              className="h-full transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                                              style={{
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                backdropFilter: 'blur(20px)',
                                                WebkitBackdropFilter: 'blur(20px)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                              }}
                                            >
                                              {/* Animated particles */}
                                              <div className="absolute inset-0 pointer-events-none">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                  <motion.div
                                                    key={i}
                                                    className={`absolute w-1 h-1 bg-gradient-to-r ${solution.particles} rounded-full opacity-0 group-hover:opacity-60`}
                                                    style={{
                                                      left: `${Math.random() * 100}%`,
                                                      top: `${Math.random() * 100}%`,
                                                    }}
                                                    animate={{
                                                      y: [0, -20, 0],
                                                      opacity: [0, 1, 0],
                                                      scale: [0, 1, 0],
                                                    }}
                                                    transition={{
                                                      duration: 2,
                                                      repeat: Infinity,
                                                      delay: i * 0.3,
                                                    }}
                                                  />
                                                ))}
                                              </div>

                                              {/* Floating emoji */}
                                              <div className="absolute top-4 right-4 text-2xl">
                                                <motion.div
                                                  animate={{ 
                                                    rotate: [0, 10, -10, 0],
                                                    scale: [1, 1.1, 1],
                                                  }}
                                                  transition={{ 
                                                    duration: 3, 
                                                    repeat: Infinity,
                                                    delay: idx * 0.5
                                                  }}
                                                >
                                                  {solution.emoji}
                                                </motion.div>
                                              </div>
                                              
                                              {/* Animated top border */}
                                              <motion.div 
                                                className="absolute top-0 left-0 right-0 h-1 group-hover:h-2 transition-all duration-300"
                                                style={{ background: solution.bg }}
                                                whileHover={{ 
                                                  boxShadow: `0 0 20px ${solution.glow}` 
                                                }}
                                              />
                                              
                                              <CardHeader className="pb-3 relative z-10">
                                                <div className="flex items-start gap-3">
                                                  <div 
                                                    className="w-12 h-12 rounded-xl text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden"
                                                    style={{ 
                                                      background: solution.bg,
                                                      boxShadow: `0 0 20px ${solution.glow}`,
                                                    }}
                                                  >
                                                    <IconComponent className="w-6 h-6 relative z-10" />
                                                    <motion.div
                                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                                      animate={{ x: [-50, 50] }}
                                                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    />
                                                  </div>
                                                  <div className="flex-1">
                                                    <CardTitle className={`text-lg font-bold ${solution.color} group-hover:text-white transition-colors`}>
                                                      {dropdownItem.label}
                                                    </CardTitle>
                                                  </div>
                                                </div>
                                              </CardHeader>
                                              <CardContent className="pt-0 relative z-10">
                                                <CardDescription className="text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                                                  {dropdownItem.label === 'Time Liberation' && 'Eliminate repetitive tasks with intelligent automation—reclaim your time for strategic innovation and creative thinking.'}
                                                  {dropdownItem.label === 'Growth Accelerator' && 'Supercharge your business expansion with scalable automation that grows with your ambitions and market demands.'}
                                                  {dropdownItem.label === 'Profit Rescue' && 'Maximize efficiency and reduce operational costs while empowering your team to focus on high-value activities.'}
                                                  {dropdownItem.label === 'Custom Bot Development' && 'Transform your unique vision into reality with bespoke automation solutions tailored to your specific needs.'}
                                                </CardDescription>
                                              </CardContent>

                                              {/* Hover glow effect */}
                                              <motion.div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                style={{
                                                  background: `radial-gradient(circle at center, ${solution.glow} 0%, transparent 70%)`,
                                                  filter: 'blur(20px)',
                                                }}
                                              />
                                            </Card>
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
                      <motion.div
                        className="cursor-pointer"
                        onClick={() => window.location.href = item.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          className="flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold transition-all duration-500 relative overflow-hidden group"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white',
                          }}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span className="text-sm font-bold">{item.label}</span>
                          
                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.1 }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Ultra-Premium Get Started Button */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-8">
            <div className="hidden lg:block">
              <motion.button
                onClick={() => window.location.href = '/contact'}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="relative flex items-center gap-3 px-4 py-2 rounded-2xl font-bold text-white transition-all duration-500 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Left arrow */}
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Text */}
                  <span className="relative z-10 font-black text-sm">Get Started</span>
                  
                  {/* Right sparkle */}
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Hover particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-70"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.button>
            </div>
            
            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative overflow-hidden group"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>
      
      {/* Ultra-Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-[80px] left-0 right-0 z-[99] border-t"
            style={{
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="px-6 py-6 space-y-3">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {item.dropdown || item.label === 'Services' ? (
                      <div>
                        <motion.button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex justify-between items-center w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-white relative overflow-hidden group"
                          style={{
                            background: activeDropdown === item.label 
                              ? 'rgba(59, 130, 246, 0.2)' 
                              : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3 relative z-10">
                            <IconComponent className="w-5 h-5" />
                            <span>{item.label}</span>
                          </div>
                          <motion.div
                            className="relative z-10"
                            animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                          
                          {/* Animated background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                          />
                        </motion.button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              className="mt-3 ml-4 space-y-2"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.label === 'Services' ? (
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                  {productCategories.map((category, catIdx) => {
                                    const CategoryIcon = category.icon;
                                    return (
                                      <motion.div 
                                        key={category.id} 
                                        className="rounded-xl p-4 relative overflow-hidden"
                                        style={{
                                          background: 'rgba(255, 255, 255, 0.03)',
                                          backdropFilter: 'blur(10px)',
                                          WebkitBackdropFilter: 'blur(10px)',
                                          border: '1px solid rgba(255, 255, 255, 0.1)',
                                        }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: catIdx * 0.05 }}
                                      >
                                        <div className="flex items-center gap-3 mb-3">
                                          <div 
                                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                                            style={{ background: category.bgGradient }}
                                          >
                                            <CategoryIcon className={`w-4 h-4 ${category.color}`} />
                                          </div>
                                          <div className="font-semibold text-white text-sm">{category.title}</div>
                                        </div>
                                        <div className="space-y-1">
                                          {category.services.map((service, serviceIdx) => (
                                            <motion.div
                                              key={service.name}
                                              onClick={() => {
                                                window.location.href = service.href;
                                                handleDropdownItemClick();
                                              }}
                                              className="block px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer"
                                              whileHover={{ x: 5 }}
                                              transition={{ duration: 0.2 }}
                                            >
                                              {service.name}
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              ) : (
                                item.dropdown?.map((dropdownItem, idx) => {
                                  const DropdownIcon = dropdownItem.icon || Star;
                                  return (
                                    <motion.div
                                      key={dropdownItem.label}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                                      onClick={() => {
                                        window.location.href = dropdownItem.href;
                                        handleDropdownItemClick();
                                      }}
                                      className="flex items-center gap-3 px-6 py-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 cursor-pointer relative overflow-hidden group"
                                      style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        WebkitBackdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                      }}
                                    >
                                      <DropdownIcon className="w-4 h-4" />
                                      <span className="text-sm relative z-10">{dropdownItem.label}</span>
                                      
                                      <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        whileHover={{ scale: 1.02 }}
                                      />
                                    </motion.div>
                                  );
                                })
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div
                        onClick={() => {
                          window.location.href = item.href;
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-white cursor-pointer relative overflow-hidden group"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">{item.label}</span>
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Enhanced Mobile CTA Button */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => {
                    window.location.href = '/contact';
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-8 py-4 font-black rounded-2xl text-center transition-all duration-500 text-white relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8))',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <Rocket className="w-5 h-5" />
                    <span>Get Started Now</span>
                    <Sparkles className="w-5 h-5" />
                  </div>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Hover particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-70"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Global Styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar for dropdowns */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </>
  );
}