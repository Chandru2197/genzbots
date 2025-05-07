import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { Checkbox } from "@/components/ui/checkbox"

const contactInfo = [
  {
    icon: <IconMail size={28} className="text-orange-500" />,
    label: "Chat to us",
    description: "Chat with our team to help.",
    value: "exmple@gmail.com",
    link: "mailto:exmple@gmail.com",
  },
  {
    icon: <IconMapPin size={28} className="text-orange-500" />,
    label: "Visit us",
    description: "Visit our office HQ.",
    value: "123 Street 256 House",
    link: "[https://maps.google.com](https://maps.google.com)",
  },
  {
    icon: <IconPhone size={28} className="text-orange-500" />,
    label: "Call us",
    description: "Monday to Friday.",
    value: "+158 996 888",
    link: "tel:+158996888",
  },
];

const featuresList = [
  "Data orchestration",
  "Managed File Transfer",
  "Cloud orchestration",
  "DevOps",
  "Mainframe automation",
  "Other (specify in your message)",
  "SAP automation",
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
  "Cross-Platform Workflow Bots"
];

const SupportModelsList = [
  "End-to-End Implementation",
  "Managed Automation Services",
  "Training for In-House Teams",
  "Other/Custom Bot"
];

const ProjectTimelineList = [
  "Immediate (Within 1 month)",
  "Planning Phase (1-3 months)",
  "Researching Options (3-6 months)"
];

export default function ContactSection() {
  const [features, setFeatures] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [phone, setPhone] = useState("");

  const handleFeatureChange = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const [selectedCountry, setSelectedCountry] = useState("");

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

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const SelectItem = React.forwardRef<HTMLDivElement, Select.SelectItemProps>(
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <Select.Item
          className={cn(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <Select.ItemIndicator>
              <Check className="h-4 w-4" />
            </Select.ItemIndicator>
          </span>
          <Select.ItemText>{children}</Select.ItemText>
        </Select.Item>
      );
    },
  );
  SelectItem.displayName = "SelectItem";


  return (
    <ParallaxProvider>
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden">
        {/* Parallax Blobs */}
        <Parallax speed={-20}>
          <div className="absolute -top-32 -left-40 w-96 h-96 bg-orange-400 bg-opacity-20 rounded-full blur-3xl z-0" />
        </Parallax>
        <Parallax speed={10}>
          <div className="absolute -bottom-40 -right-44 w-[28rem] h-[28rem] bg-blue-400 bg-opacity-20 rounded-full blur-3xl z-0" />
        </Parallax>

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4 z-10">
          {/* Left Card: Welcome, Highlights, Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            viewport={{ once: true, amount: 0.6 }}
            className="bg-white/90 shadow-2xl rounded-2xl p-8 md:w-1/3 flex flex-col gap-8 backdrop-blur-md justify-between"
          >
            {/* Section Title & Welcome */}
            <div>
              <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12 relative">
                  <div className="relative">
                    <h2 className="text-label font-label text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
                      Get in Touch
                    </h2>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
                  </div>
                  <p className="text-desc font-desc text-gray-600 mb-8 max-w-2xl mx-auto text-center">
                    Ready to transform your business? Let's discuss your automation needs.
                  </p>
                </div>
              </div>
              {/* Highlights */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-orange-100 text-orange-600 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h3.28a2 2 0 011.42.59l1.42 1.41A2 2 0 0014.72 7H19a2 2 0 012 2v9a2 2 0 01-2 2z"/>
                    </svg>
                  </span>
                  <span className="text-label font-label text-gray-800">Fast, friendly responses</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </span>
                  <span className="text-label font-label text-gray-800">Expert advice & support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-600 rounded-full p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 8c-1.657 0-3 1.343-3 3 0 1.306.835 2.417 2 2.83V18h2v-4.17c1.165-.413 2-1.524 2-2.83 0-1.657-1.343-3-3-3z"/>
                    </svg>
                  </span>
                  <span className="text-label font-label text-gray-800">Free consultation</span>
                </div>
              </div>
            </div>
            {/* Existing Contact Info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-orange-100 rounded-lg p-3 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.label}</div>
                      <div className="text-gray-500 text-sm">{info.description}</div>
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-1 text-blue-600 font-medium block hover:underline"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
            viewport={{ once: true, amount: 0.6 }}
            className="bg-white/95 shadow-2xl rounded-2xl p-10 md:w-2/3 flex flex-col"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-orange-500">Product or Service Inquiry</h2>
              <p className="mb-4 text-gray-600">
                Have some big idea or brand to develop and need help? Then reach out—we'd love to hear about your project and provide help.
              </p>
            </div>
            <form className="space-y-6">
              {/* Row 1: First/Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    First name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    required
                    placeholder="Fill"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Last name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    required
                    placeholder="Fill"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
              </div>
              {/* Row 2: Phone/Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Company name
                  </label>
                  <input
                    placeholder="Fill"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <Select.Root
                    value={selectedCountry}
                    onValueChange={handleCountryChange}
                  >
                    <Select.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-400 disabled:cursor-not-allowed disabled:opacity-50">
                      <Select.Value placeholder="Select a country" className="text-[var(--color-green-100)]"/>
                      <Select.Icon>
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                      <Select.Content className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-700 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                        <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center bg-white">
                          <ChevronDown className="h-4 w-4 rotate-180" />
                        </Select.ScrollUpButton>
                        <Select.Viewport className="p-1">
                          {countries.map((country) => (
                            <SelectItem
                              key={country.value}
                              value={country.value}
                            >
                              {country.text}
                            </SelectItem>
                          ))}
                        </Select.Viewport>
                        <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center bg-white">
                          <ChevronDown className="h-4 w-4" />
                        </Select.ScrollDownButton>
                      </Select.Content>
                    </Select.Portal>
                  </Select.Root>
                </div>               
              </div>
              {/* Row 3: Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Phone number <span className="text-orange-500">*</span>
                  </label>
                  <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={setPhone}
                    inputClass="!w-full !py-2 !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!border-orange-400 focus:!ring-2 focus:!ring-orange-100 !outline-none !transition"
                    buttonClass="!border-none !bg-transparent"
                    dropdownClass="!rounded-lg !shadow-lg !bg-white"
                    containerClass="!w-full"
                    enableSearch
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: false,
                      autoComplete: 'tel',
                    }}
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Business email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Fill"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
              </div>
              {/* Row 3: Email/Message */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Your message
                  </label>
                  <textarea
                    placeholder="Fill"
                    rows={2}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
              </div> */}
              <div>
                <h3 className="text-xl font-semibold mb-3">What features are you interested in?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-2"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <p className="block font-medium text-gray-700 mb-1 border-b-1 border-[var(--color-secondary)] ">
                    Process Automation
                  </p>
                  {ProcessAutomationList?.map((process:string,index:number) => (
                    <div key={index+"process"+process} className="items-top flex space-x-2">
                      <Checkbox id={process} variant="orange" />
                      <div className="grid gap-1.5 leading-none content-center">
                        <label
                          htmlFor={process}
                          className="text-xs font-medium text-[var(--color-tertiary)]/50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {process}
                        </label>
                      </div>
                    </div>              
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="block font-medium text-gray-700 mb-1 border-b-1 border-[var(--color-secondary)] ">
                  Advanced Capabilities
                  </p>
                  {AdvancedCapabilitiesList?.map((advance:string,index:number) => (
                    <div key={index+"advance"+advance} className="items-top flex space-x-2">
                      <Checkbox id={advance} variant="orange" />
                      <div className="grid gap-1.5 leading-none content-center">
                        <label
                          htmlFor={advance}
                          className="text-xs font-medium text-[var(--color-tertiary)]/50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {advance}
                        </label>
                      </div>
                    </div>              
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <p className="block font-medium text-gray-700 mb-1 border-b-1 border-[var(--color-secondary)] ">
                    Support Model
                  </p>
                  {SupportModelsList?.map((support:string,index:number) => (
                    <div key={index+"support"+support} className="items-top flex space-x-2">
                      <Checkbox id={support} variant="orange" />
                      <div className="grid gap-1.5 leading-none content-center">
                        <label
                          htmlFor={support}
                          className="text-xs font-medium text-[var(--color-tertiary)]/50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {support}
                        </label>
                      </div>
                    </div>              
                  ))}
                </div>
              </div>
              {/* Features Checkbox Grid */}
              <div>
                <h3 className="text-xl font-semibold mb-3">What features are you interested in?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-2">
                  {/* {featuresList.map((feature) => (
                    <label key={feature} className="flex items-center gap-2 cursor-pointer">
                      <div className="relative inline-flex">
                        <input
                          type="checkbox"
                          checked={features.includes(feature)}
                          onChange={() => handleFeatureChange(feature)}
                          className="peer appearance-none w-5 h-5 border-2 border-[var(--color-secondary)] bg-white rounded-sm checked:bg-white checked:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-colors cursor-pointer"
                        />
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none invisible peer-checked:visible text-[var(--color-secondary)] p-0.5"
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
                      <span className="text-gray-700">{feature}</span>
                    </label>
                  ))} */}
                </div>
              </div>
              {/* Consent */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative inline-flex">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent((c) => !c)}
                      className="peer appearance-none w-5 h-5 border-2 border-[var(--color-secondary)] bg-white rounded-sm checked:bg-white checked:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20 transition-colors cursor-pointer"
                    />
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none invisible peer-checked:visible text-[var(--color-secondary)] p-0.5"
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
                  <span className="text-gray-700 text-sm">
                    By submitting your personal data you agree to receive marketing communications.
                  </span>
                </label>
              </div>
              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-fit"
              >
                <button
                  type="submit"
                  className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-none font-medium transition-all duration-300 inline-flex items-center transform  hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-colors duration-300"
                  >
                  Schedule a Consultation
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}