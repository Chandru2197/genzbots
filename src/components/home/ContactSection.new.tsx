"use client";

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
import SafeLink from '@/components/ui/SafeLink';
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  
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
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
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
          <motion.div 
            className="lg:w-2/5 bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20 flex flex-col justify-between"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
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
                    {info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? (
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
                    ) : (
                      <SafeLink href={info.link} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
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
                      </SafeLink>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5 bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/20"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Form content */}
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
