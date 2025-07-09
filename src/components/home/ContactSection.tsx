import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin,
  Twitter,
  Calendar,
  Clock,
  Circle,
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Check,
  ChevronDown,
  User,
  Building,
  Globe,
  Send,
  MessageSquare,
  Target,
  Rocket,
  Star,
  ArrowRight
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={28} />,
    label: "Email us",
    description: "Chat with our team to help.",
    value: "sales@genzbots.com",
    link: "mailto:sales@genzbots.com",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: <Phone size={28} />,
    label: "Call us",
    description: "Monday to Friday, 9AM-6PM EST.",
    value: "+1 (508) 501 6411",
    link: "tel:+1 (508) 501 6411",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    icon: <Calendar size={28} />,
    label: "Schedule Meeting",
    description: "Book a free consultation.",
    value: "Schedule Now",
    link: "#calendar",
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-500/10 to-indigo-500/10"
  }
];

const ProcessAutomationList = [
  "Invoice Processing Automation",
  "HR Onboarding/Offboarding Bots",
  "Customer Data Entry Automation",
  "ERP/CRM Integration Bots",
];

const AdvancedCapabilitiesList = [
  "AI + RPA (Chatbots/NLP/OCR)",
  "Legacy System Automation",
  "Cross-Platform Workflow Bots",
];

const SupportModelsList = [
  "End-to-End Implementation",
  "Managed Automation Services",
  "Training for In-House Teams",
  "Other/Custom Bot",
];

const ProjectTimelineList = [
  "Immediate (Within 1 month)",
  "Planning Phase (1-3 months)",
  "Researching Options (3-6 months)"
];

const ModernCard = ({ 
  children, 
  className = '',
  hoverable = true 
}: { 
  children: React.ReactNode; 
  className?: string;
  hoverable?: boolean;
}) => (
  <div className={`
    relative bg-white/90 backdrop-blur-2xl rounded-3xl border-2 border-blue-200/40 shadow-2xl
    ${hoverable ? 'hover:bg-white/95 hover:scale-[1.02] hover:border-blue-300/60 hover:shadow-[0_25px_70px_-12px_rgba(59,130,246,0.3)]' : ''}
    transition-all duration-500 ease-out overflow-hidden
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-orange-50/60 rounded-3xl"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const CheckboxField = ({ 
  id, 
  label, 
  checked, 
  onChange, 
  color = "blue" 
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string;
}) => {
  const colorMap = {
    blue: "border-blue-300 bg-blue-600",
    orange: "border-orange-300 bg-orange-600",
    green: "border-emerald-300 bg-emerald-600",
    purple: "border-purple-300 bg-purple-600"
  };

  return (
    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
      <div className="relative">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          onClick={() => onChange(!checked)}
          className={`w-5 h-5 rounded-md border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
            checked
              ? `${colorMap[color as keyof typeof colorMap]} border-transparent`
              : 'border-gray-300 bg-white hover:border-gray-400'
          }`}
        >
          {checked && (
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          )}
        </div>
      </div>
      <label
        htmlFor={id}
        className="text-gray-700 font-medium cursor-pointer group-hover:text-gray-900 transition-colors duration-300"
      >
        {label}
      </label>
    </div>
  );
};

const RadioField = ({ 
  id, 
  name, 
  label, 
  checked, 
  onChange, 
  color = "orange" 
}: {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  color?: string;
}) => {
  const colorMap = {
    orange: "border-orange-600 bg-orange-600",
    blue: "border-blue-600 bg-blue-600"
  };

  return (
    <div className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group">
      <div className="relative">
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          onClick={onChange}
          className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
            checked
              ? `${colorMap[color as keyof typeof colorMap]} border-transparent`
              : 'border-gray-300 bg-white hover:border-gray-400'
          }`}
        >
          {checked && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </div>
      </div>
      <label
        htmlFor={id}
        className="text-gray-700 font-medium cursor-pointer group-hover:text-gray-900 transition-colors duration-300"
      >
        {label}
      </label>
    </div>
  );
};

export default function ContactSection() {
  const [consent, setConsent] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [selectedServices, setSelectedServices] = useState<{[key: string]: boolean}>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: ""
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const countries = [
    { text: "Afghanistan", value: "AF" },
    { text: "Albania", value: "AL" },
    { text: "Algeria", value: "DZ" },
    { text: "Argentina", value: "AR" },
    { text: "Australia", value: "AU" },
    { text: "Austria", value: "AT" },
    { text: "Bangladesh", value: "BD" },
    { text: "Belgium", value: "BE" },
    { text: "Brazil", value: "BR" },
    { text: "Canada", value: "CA" },
    { text: "China", value: "CN" },
    { text: "France", value: "FR" },
    { text: "Germany", value: "DE" },
    { text: "India", value: "IN" },
    { text: "Indonesia", value: "ID" },
    { text: "Italy", value: "IT" },
    { text: "Japan", value: "JP" },
    { text: "Malaysia", value: "MY" },
    { text: "Mexico", value: "MX" },
    { text: "Netherlands", value: "NL" },
    { text: "Philippines", value: "PH" },
    { text: "Singapore", value: "SG" },
    { text: "Spain", value: "ES" },
    { text: "Sweden", value: "SE" },
    { text: "Switzerland", value: "CH" },
    { text: "Thailand", value: "TH" },
    { text: "United Kingdom", value: "GB" },
    { text: "United States", value: "US" },
    { text: "Vietnam", value: "VN" },
  ];

  const filteredCountries = countries.filter(country => 
    country.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setIsCountryOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices(prev => ({
      ...prev,
      [service]: checked
    }));
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Revolutionary Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-orange-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(251,146,60,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        
        {/* Animated geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.05)_2px,transparent_2px)] bg-[size:100px_100px] animate-grid-flow"></div>
        
        {/* Floating contact-themed elements */}
        {[...Array(35)].map((_, i) => {
          const icons = [Mail, Phone, MessageSquare, Send, Globe, Target, Star];
          const IconComponent = icons[i % icons.length];
          const colors = [
            'text-blue-600', 'text-cyan-600', 'text-purple-600', 
            'text-indigo-600', 'text-orange-600', 'text-red-600',
            'text-emerald-600', 'text-teal-600'
          ];
          const sizes = ['w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-7 h-7'];
          
          return (
            <div
              key={i}
              className="absolute opacity-20 animate-geometric-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${18 + Math.random() * 12}s`
              }}
            >
              <IconComponent 
                className={`${sizes[Math.floor(Math.random() * sizes.length)]} ${colors[Math.floor(Math.random() * colors.length)]}`}
              />
            </div>
          );
        })}
        
        {/* Connection lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent animate-data-flow"
            style={{
              left: `${15 + (i * 12)}%`,
              height: '100%',
              animationDelay: `${i * 0.8}s`,
              animationDuration: '10s'
            }}
          />
        ))}
        
        {/* Floating orbs */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-pulse-node shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 px-4 z-10">
        {/* Revolutionary Info Panel */}
        <motion.div 
          className="lg:w-2/5"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ModernCard className="p-10 h-full">
            <div className="flex flex-col h-full">
              {/* Enhanced Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-orange-600/10 backdrop-blur-xl rounded-2xl text-gray-800 mb-8 shadow-lg border-2 border-blue-200/30">
                  <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                  <span className="font-bold text-lg bg-gradient-to-r from-blue-700 to-orange-700 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                  <Sparkles className="w-5 h-5 ml-3 text-orange-600" />
                </div>
                
                <h2 className="text-5xl font-black mb-6 text-gray-900">
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Let's Transform
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Your Business
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to revolutionize your operations? Let's discuss your automation needs 
                  and create a custom solution that drives measurable results.
                </p>
              </motion.div>

              {/* Enhanced Features */}
              <div className="space-y-6 mb-10 flex-1">
                {[
                  { 
                    icon: <Rocket className="w-6 h-6" />, 
                    text: "Fast, expert responses", 
                    color: "from-emerald-600 to-teal-600",
                    bgColor: "from-emerald-500/10 to-teal-500/10"
                  },
                  { 
                    icon: <Target className="w-6 h-6" />, 
                    text: "Personalized automation strategy", 
                    color: "from-blue-600 to-cyan-600",
                    bgColor: "from-blue-500/10 to-cyan-500/10"
                  },
                  { 
                    icon: <Star className="w-6 h-6" />, 
                    text: "Free consultation & ROI analysis", 
                    color: "from-purple-600 to-indigo-600",
                    bgColor: "from-purple-500/10 to-indigo-500/10"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <div className={`p-6 bg-gradient-to-r ${item.bgColor} rounded-2xl border-2 border-white/30 group-hover:border-blue-300/50 transition-all duration-300`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          {item.icon}
                        </div>
                        <span className="text-gray-800 font-bold text-lg">{item.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Contact Information */}
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-8">
                  <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <motion.div 
                      key={idx} 
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <a href={info.link} className={`block p-6 bg-gradient-to-r ${info.bgGradient} rounded-2xl border-2 border-white/30 group-hover:border-blue-300/50 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                        <div className="flex items-center gap-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                            <div className="text-white">
                              {info.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-gray-900 text-xl mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                              {info.label}
                            </div>
                            <div className="text-gray-600 text-sm mb-2">
                              {info.description}
                            </div>
                            <div className={`text-transparent bg-gradient-to-r ${info.gradient} bg-clip-text font-bold text-lg`}>
                              {info.value}
                            </div>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Revolutionary Form Section */}
        <motion.div
          className="lg:w-3/5"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ModernCard className="p-12">
            <div className="mb-10">
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  Product or Service Inquiry
                </span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Have a big idea or brand to develop and need help? Then reach out—we'd love to 
                hear about your project and provide expert guidance.
              </p>
            </div>

            <form className="space-y-10">
              {/* Enhanced Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="flex items-center font-bold text-gray-800 mb-3 text-lg">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    First name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    required
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-blue-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="flex items-center font-bold text-gray-800 mb-3 text-lg">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    Last name
                  </label>
                  <input
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-blue-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  />
                </motion.div>
              </div>

              {/* Enhanced Company and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="flex items-center font-bold text-gray-800 mb-3 text-lg">
                    <Building className="w-5 h-5 mr-2 text-blue-600" />
                    Company name
                  </label>
                  <input
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-blue-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="flex items-center font-bold text-gray-800 mb-3 text-lg">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Country
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-blue-200/50 text-gray-800 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-left flex items-center justify-between"
                    >
                      <span>
                        {countries.find(c => c.value === selectedCountry)?.text || "Select a country"}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isCountryOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border-2 border-blue-200/50 rounded-2xl shadow-2xl z-50 max-h-80 overflow-hidden">
                        <div className="p-4 border-b border-gray-200">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search countries..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none text-sm"
                            />
                          </div>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={country.value}
                                type="button"
                                onClick={() => handleCountryChange(country.value)}
                                className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 font-medium text-gray-700 hover:text-gray-900"
                              >
                                {country.text}
                              </button>
                            ))
                          ) : (
                            <div className="py-8 text-center text-gray-500">
                              No countries found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="flex items-center font-bold text-gray-800 mb-3 text-lg">
                    <Phone className="w-5 h-5 mr-2 text-blue-600" />
                    Phone number <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-blue-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="flex items-center font-bold text-gray-800 mb-3 text-lg">
                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                    Business email <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-blue-200/50 text-gray-800 placeholder-gray-500 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-400/20 outline-none transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  />
                </motion.div>
              </div>

              {/* Revolutionary Service Selection Grid */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {/* Process Automation */}
                <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl p-8 border-2 border-blue-200/30 hover:border-blue-300/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                      Process Automation
                    </span>
                  </h4>
                  <div className="space-y-4">
                    {ProcessAutomationList?.map((process: string, index: number) => (
                      <CheckboxField
                        key={index}
                        id={`process-${index}`}
                        label={process}
                        checked={selectedServices[process] || false}
                        onChange={(checked) => handleServiceChange(process, checked)}
                        color="blue"
                      />
                    ))}
                  </div>
                </div>

                {/* Advanced Capabilities */}
                <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl p-8 border-2 border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                      Advanced Capabilities
                    </span>
                  </h4>
                  <div className="space-y-4">
                    {AdvancedCapabilitiesList?.map((advance: string, index: number) => (
                      <CheckboxField
                        key={index}
                        id={`advance-${index}`}
                        label={advance}
                        checked={selectedServices[advance] || false}
                        onChange={(checked) => handleServiceChange(advance, checked)}
                        color="green"
                      />
                    ))}
                  </div>
                </div>

                {/* Support Models */}
                <div className="bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-3xl p-8 border-2 border-purple-200/30 hover:border-purple-300/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                      Support Models
                    </span>
                  </h4>
                  <div className="space-y-4">
                    {SupportModelsList?.map((support: string, index: number) => (
                      <CheckboxField
                        key={index}
                        id={`support-${index}`}
                        label={support}
                        checked={selectedServices[support] || false}
                        onChange={(checked) => handleServiceChange(support, checked)}
                        color="purple"
                      />
                    ))}
                  </div>
                </div>

                {/* Project Timeline */}
                <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl p-8 border-2 border-orange-200/30 hover:border-orange-300/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                      Project Timeline
                    </span>
                  </h4>
                  <div className="space-y-4">
                    {ProjectTimelineList?.map((timeline: string, index: number) => (
                      <RadioField
                        key={index}
                        id={`timeline-${index}`}
                        name="timeline"
                        label={timeline}
                        checked={selectedTimeline === timeline}
                        onChange={() => setSelectedTimeline(timeline)}
                        color="orange"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Revolutionary Consent and Submit */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className="p-6 bg-gradient-to-r from-gray-500/5 to-blue-500/5 rounded-3xl border-2 border-gray-200/30 hover:border-blue-300/50 transition-all duration-300">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <div className="relative inline-flex mt-1">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={() => setConsent((c) => !c)}
                        className="sr-only"
                      />
                      <div
                        onClick={() => setConsent(!consent)}
                        className={`w-6 h-6 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                          consent
                            ? 'bg-blue-600 border-blue-600'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                        }`}
                      >
                        {consent && (
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        )}
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      By submitting your personal data you agree to receive marketing communications. 
                      We respect your privacy and will never share your information with third parties.
                      <br />
                      <span className="text-blue-600 font-semibold">
                        Read our privacy policy to learn more.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button
                    type="submit"
                    className="group relative flex-1 py-5 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden border-2 border-transparent hover:border-white/20"
                    disabled={!consent}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center">
                      Schedule Consultation
                      <Calendar className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </button>

                  <button
                    type="button"
                    className="group py-5 px-8 bg-white/80 backdrop-blur-xl text-gray-800 font-black text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white"
                  >
                    <span className="flex items-center justify-center">
                      <Send className="w-6 h-6 mr-3 text-blue-600" />
                      Send Message
                    </span>
                  </button>
                </div>
              </motion.div>
            </form>
          </ModernCard>
        </motion.div>
      </div>

      {/* Revolutionary CTA Section */}
      <motion.div
        className="mt-24 text-center max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <ModernCard className="p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-orange-600/5 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-5xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies that have transformed their operations with our automation solutions. 
              Your journey to digital excellence starts with a simple conversation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <Target className="w-8 h-8" />, title: "Free Analysis", desc: "Get a comprehensive automation assessment", color: "from-blue-600 to-cyan-600" },
                { icon: <Rocket className="w-8 h-8" />, title: "Quick Setup", desc: "Implementation in as little as 2 weeks", color: "from-emerald-600 to-teal-600" },
                { icon: <TrendingUp className="w-8 h-8" />, title: "Proven ROI", desc: "Average 300% return on investment", color: "from-orange-600 to-red-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <button className="group relative px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 border-2 border-transparent hover:border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center">
                Book Your Free Consultation
                <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </ModernCard>
      </motion.div>

      <style jsx>{`
        @keyframes geometric-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-25px) rotate(90deg) scale(1.1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-50px) rotate(180deg) scale(1.2); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-25px) rotate(270deg) scale(1.1); 
            opacity: 0.4;
          }
        }
        
        .animate-geometric-float {
          animation: geometric-float 25s ease-in-out infinite;
        }
        
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 25s linear infinite;
        }
        
        @keyframes data-flow {
          0% { 
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        .animate-data-flow {
          animation: data-flow 10s linear infinite;
        }
        
        @keyframes pulse-node {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.8);
            opacity: 1;
          }
        }
        
        .animate-pulse-node {
          animation: pulse-node 4s ease-in-out infinite;
        }
        
        /* Enhanced glassmorphism */
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
        
        /* Custom scrollbar for dropdown */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
        
        /* Enhanced button effects */
        .btn-holographic {
          position: relative;
          overflow: hidden;
        }
        
        .btn-holographic::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
        }
        
        .btn-holographic:hover::before {
          animation: shimmer 1s ease-in-out;
        }
        
        @keyframes shimmer {
          0% { transform: rotate(45deg) translateX(-200%); }
          100% { transform: rotate(45deg) translateX(200%); }
        }
        
        /* Form field focus animations */
        .focus\\:ring-4:focus {
          box-shadow: 0 0 0 4px var(--ring-color);
        }
        
        /* Responsive optimizations */
        @media (max-width: 768px) {
          .grid-cols-1.lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .text-5xl {
            font-size: clamp(2rem, 8vw, 3rem);
          }
          
          .text-3xl {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }
        }
        
        /* Performance optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Custom focus styles */
        .focus-visible\\:ring-modern:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.6);
        }
        
        /* Light theme gradient text */
        .light-gradient-text {
          background: linear-gradient(135deg, #1e40af, #7c3aed, #dc2626);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Enhanced hover states */
        .hover\\:scale-\\[1\\.02\\]:hover {
          transform: scale(1.02);
        }
        
        /* Advanced form styling */
        input:focus, 
        button:focus {
          transform: translateY(-1px);
        }
        
        /* Dropdown animation */
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}