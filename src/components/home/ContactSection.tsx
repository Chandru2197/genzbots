import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  IconMail, 
  IconMapPin, 
  IconPhone, 
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCalendar,
  IconClock,
  IconCircle,
} from "@tabler/icons-react";
import PhoneInput from "react-phone-input-2";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "react-phone-input-2/lib/style.css";
import { Check, ChevronDown, Search, Sparkles, Zap, TrendingUp, Shield } from "lucide-react";
import { cn } from "../../lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: <IconMail size={28} className="text-orange-500" />,
    label: "Email us",
    description: "Chat with our team to help.",
    value: "sales@genzbots.com",
    link: "mailto:sales@genzbots.com",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <IconPhone size={28} className="text-orange-500" />,
    label: "Call us",
    description: "Monday to Friday.",
    value: "+1 (508) 501 6411",
    link: "tel:+1 (508) 501 6411",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <IconCalendar size={28} className="text-orange-500" />,
    label: "Schedule Meeting",
    description: "Book a free consultation.",
    value: "Schedule Now",
    link: "#calendar",
    gradient: "from-purple-500 to-indigo-500"
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

export default function ContactSection() {
  const [consent, setConsent] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [phoneCountry, setPhoneCountry] = useState("in");
  const [searchQuery, setSearchQuery] = useState("");
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
    { text: "Andorra", value: "AD" },
    { text: "Angola", value: "AO" },
    { text: "Argentina", value: "AR" },
    { text: "Armenia", value: "AM" },
    { text: "Australia", value: "AU" },
    { text: "Austria", value: "AT" },
    { text: "Azerbaijan", value: "AZ" },
    { text: "Bahamas", value: "BS" },
    { text: "Bahrain", value: "BH" },
    { text: "Bangladesh", value: "BD" },
    { text: "Belarus", value: "BY" },
    { text: "Belgium", value: "BE" },
    { text: "Belize", value: "BZ" },
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
    { text: "New Zealand", value: "NZ" },
    { text: "Norway", value: "NO" },
    { text: "Philippines", value: "PH" },
    { text: "Poland", value: "PL" },
    { text: "Portugal", value: "PT" },
    { text: "Russia", value: "RU" },
    { text: "Saudi Arabia", value: "SA" },
    { text: "Singapore", value: "SG" },
    { text: "South Korea", value: "KR" },
    { text: "Spain", value: "ES" },
    { text: "Sweden", value: "SE" },
    { text: "Switzerland", value: "CH" },
    { text: "Thailand", value: "TH" },
    { text: "Turkey", value: "TR" },
    { text: "Ukraine", value: "UA" },
    { text: "United Arab Emirates", value: "AE" },
    { text: "United Kingdom", value: "GB" },
    { text: "United States", value: "US" },
    { text: "Vietnam", value: "VN" },
  ];

  const filteredCountries = countries.filter(country => 
    country.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setPhoneCountry(value.toLowerCase());
    const phoneWithoutCode = phone.replace(/^\+\d+/, '');
    setPhone(phoneWithoutCode);
  };

  const handlePhoneChange = (value: string, country: any) => {
    setPhone(value);
    setPhoneCountry(country.countryCode);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <ParallaxProvider>
      <section 
        ref={sectionRef}
        className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      >
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {i % 4 === 0 && <IconMail className="w-6 h-6 text-blue-400" />}
              {i % 4 === 1 && <IconPhone className="w-8 h-8 text-cyan-400" />}
              {i % 4 === 2 && <Sparkles className="w-5 h-5 text-green-400" />}
              {i % 4 === 3 && <TrendingUp className="w-7 h-7 text-purple-400" />}
            </div>
          ))}
        </div>

        <Parallax speed={-20}>
          <div className="absolute -top-32 -left-40 w-96 h-96 bg-orange-400 bg-opacity-20 rounded-full blur-3xl z-0" />
        </Parallax>
        <Parallax speed={10}>
          <div className="absolute -bottom-40 -right-44 w-[28rem] h-[28rem] bg-blue-400 bg-opacity-20 rounded-full blur-3xl z-0" />
        </Parallax>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4 z-10">
          {/* Enhanced Info Panel */}
          <motion.div 
            className="lg:w-2/5 bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20 flex flex-col justify-between"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              {/* Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white mb-6 shadow-lg">
                  <IconMail className="w-6 h-6 mr-3" />
                  <span className="font-semibold text-lg">Get in Touch</span>
                  <Sparkles className="w-5 h-5 ml-3" />
                </div>
                
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Let's Transform Your Business
                </h2>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Ready to revolutionize your operations? Let's discuss your automation needs 
                  and create a custom solution that drives results.
                </p>
              </motion.div>

              {/* Enhanced Features */}
              <div className="space-y-6 mb-8">
                {[
                  { icon: <IconCircle className="w-6 h-6" />, text: "Fast, friendly responses", color: "from-green-500 to-emerald-500" },
                  { icon: <IconClock className="w-6 h-6" />, text: "Expert advice & support", color: "from-blue-500 to-cyan-500" },
                  { icon: <Sparkles className="w-6 h-6" />, text: "Free consultation", color: "from-purple-500 to-indigo-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx} 
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  >
                    <a href={info.link} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {React.cloneElement(info.icon, { className: "w-7 h-7 text-white" })}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors duration-300">
                          {info.label}
                        </div>
                        <div className="text-blue-200 text-sm mb-1">
                          {info.description}
                        </div>
                        <div className="text-cyan-400 font-semibold">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Form Section */}
          <motion.div
            className="lg:w-3/5 bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/20"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Product or Service Inquiry
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed">
                Have a big idea or brand to develop and need help? Then reach out—we'd love to 
                hear about your project and provide expert guidance.
              </p>
            </div>

            <form className="space-y-8">
              {/* Enhanced Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block font-semibold text-white mb-2">
                    First name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    required
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="block font-semibold text-white mb-2">
                    Last name
                  </label>
                  <input
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </motion.div>
              </div>

              {/* Enhanced Company and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block font-semibold text-white mb-2">
                    Company name
                  </label>
                  <input
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block font-semibold text-white mb-2">
                    Country
                  </label>
                  <Select value={selectedCountry} onValueChange={handleCountryChange}>
                    <SelectTrigger className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                      <SelectValue>
                        {countries.find(c => c.value === selectedCountry)?.text || "Select a country"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/20">
                      <div className="sticky top-0 bg-slate-800 p-2">
                        <div className="flex items-center border border-white/20 rounded-xl px-3 py-2">
                          <Search className="h-4 w-4 text-gray-400 mr-2" />
                          <Input
                            className="h-6 border-0 p-0 bg-transparent text-white focus-visible:ring-0 placeholder:text-gray-400 text-sm"
                            placeholder="Search countries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <SelectGroup className="max-h-[300px] overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <SelectItem key={country.value} value={country.value} className="text-white hover:bg-white/10">
                              {country.text}
                            </SelectItem>
                          ))
                        ) : (
                          <div className="py-6 text-center text-sm text-gray-400">
                            No countries found
                          </div>
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              {/* Enhanced Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label className="block font-semibold text-white mb-2">
                    Phone number <span className="text-orange-400">*</span>
                  </label>
                  <PhoneInput
                    country={phoneCountry}
                    value={phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "white",
                      backdropFilter: "blur(8px)",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    buttonStyle={{
                      backgroundColor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "16px 0 0 16px",
                    }}
                    dropdownStyle={{
                      backgroundColor: "rgba(30, 41, 59, 0.95)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "16px",
                    }}
                    enableSearch
                    countryCodeEditable={true}
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <label className="block font-semibold text-white mb-2">
                    Business email <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </motion.div>
              </div>

              {/* Enhanced Service Selection Grid */}
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {/* Process Automation */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Process Automation
                  </h4>
                  <div className="space-y-3">
                    {ProcessAutomationList?.map((process: string, index: number) => (
                      <div key={index + "process" + process} className="flex items-center space-x-3">
                        <Checkbox 
                          id={process} 
                          variant="orange" 
                          className="border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                        />
                        <label
                          htmlFor={process}
                          className="text-sm font-medium text-white/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-white transition-colors cursor-pointer"
                        >
                          {process}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Capabilities */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Advanced Capabilities
                  </h4>
                  <div className="space-y-3">
                    {AdvancedCapabilitiesList?.map((advance: string, index: number) => (
                      <div key={index + "advance" + advance} className="flex items-center space-x-3">
                        <Checkbox 
                          id={advance} 
                          variant="orange"
                          className="border-white/30 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                        />
                        <label
                          htmlFor={advance}
                          className="text-sm font-medium text-white/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-white transition-colors cursor-pointer"
                        >
                          {advance}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Models */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-purple-400 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Support Models
                  </h4>
                  <div className="space-y-3">
                    {SupportModelsList?.map((support: string, index: number) => (
                      <div key={index + "support" + support} className="flex items-center space-x-3">
                        <Checkbox 
                          id={support} 
                          variant="orange"
                          className="border-white/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                        />
                        <label
                          htmlFor={support}
                          className="text-sm font-medium text-white/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-white transition-colors cursor-pointer"
                        >
                          {support}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Timeline */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-orange-400 mb-4 flex items-center">
                    <IconClock className="w-5 h-5 mr-2" />
                    Project Timeline
                  </h4>
                  <RadioGroup defaultValue="End-to-End Implementation">
                    <div className="space-y-3">
                      {ProjectTimelineList?.map((timeline: string) => (
                        <div key={timeline} className="flex items-center space-x-3">
                          <RadioGroupItem
                            value={timeline}
                            variant="orange"
                            id={timeline}
                            className="border-white/30 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                          />
                          <label
                            htmlFor={timeline}
                            className="text-sm font-medium text-white/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-white transition-colors cursor-pointer"
                          >
                            {timeline}
                          </label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </motion.div>

              {/* Enhanced Consent and Submit */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <label className="flex items-start gap-3 cursor-pointer p-4 bg-white/5 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="relative inline-flex mt-1">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent((c) => !c)}
                      className="peer appearance-none w-5 h-5 border-2 border-white/30 bg-white/10 rounded-md checked:bg-orange-500 checked:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors cursor-pointer"
                    />
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none invisible peer-checked:visible text-white p-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">
                    By submitting your personal data you agree to receive marketing communications. 
                    We respect your privacy and will never share your information with third parties.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  disabled={!consent}
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative flex items-center justify-center">
                    Schedule a Consultation
                    <IconCalendar className="w-6 h-6 ml-3" />
                  </span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float 12s ease-in-out infinite;
          }
        `}</style>
      </section>
    </ParallaxProvider>
  );
}