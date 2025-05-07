import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

export default function ContactSection() {
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
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-orange-400 bg-opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -right-44 w-[28rem] h-[28rem] bg-blue-400 bg-opacity-20 rounded-full blur-3xl z-0" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how we can help you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-[#FF5722] mb-3">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600">
                    Ready to transform your business?
                    <br />
                    Let's discuss your automation needs.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Why Choose Us?</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 bg-orange-50/50 p-3 rounded-lg">
                      <div className="bg-orange-100/80 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-[#FF5722]"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-800 font-medium">Fast, friendly responses</span>
                        <p className="text-sm text-gray-600">24/7 support availability</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-blue-50/50 p-3 rounded-lg">
                      <div className="bg-blue-100/80 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-500"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-800 font-medium">Expert advice & support</span>
                        <p className="text-sm text-gray-600">Industry-leading expertise</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-green-50/50 p-3 rounded-lg">
                      <div className="bg-green-100/80 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-800 font-medium">Free consultation</span>
                        <p className="text-sm text-gray-600">No-obligation discussion</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="bg-orange-50 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-[#FF5722]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Chat to us</h4>
                        <p className="text-gray-600 text-sm">Chat with our team to help.</p>
                        <a
                          href="mailto:example@gmail.com"
                          className="text-[#FF5722] hover:underline"
                        >
                          example@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="bg-orange-50 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-[#FF5722]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Visit us</h4>
                        <p className="text-gray-600 text-sm">Visit our office HQ.</p>
                        <p className="text-[#FF5722]">123 Street 256 House</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-orange-100">
                      <div className="bg-orange-50 p-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-[#FF5722]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Call us</h4>
                        <p className="text-gray-600 text-sm">Monday to Friday.</p>
                        <p className="text-[#FF5722]">+158 996 888</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <form className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-8 lg:p-12">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Select.Root
                    value={selectedCountry}
                    onValueChange={handleCountryChange}
                  >
                    <Select.Trigger className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-400 disabled:cursor-not-allowed disabled:opacity-50">
                      <Select.Value placeholder="Select a country" />
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
                <div>
                  <PhoneInput
                    country={"us"}
                    containerClass="phone-input-container"
                    inputClass="!w-full !h-[42px] !px-4 !py-2 !rounded-lg !border !border-gray-300 hover:!border-orange-300 focus:!border-orange-400 focus:!ring-2 focus:!ring-orange-100 !outline-none !transition-all !duration-300 !text-base"
                    buttonClass="!border !border-gray-300 !rounded-l-lg !h-[42px] !bg-white hover:!bg-gray-50 !transition-all !duration-300"
                    dropdownClass="!rounded-lg !shadow-lg !border !border-gray-200 !mt-1"
                    searchClass="!m-2 !px-3 !py-2 !rounded-md !border !border-gray-200 !text-sm !w-[calc(100%-1rem)]"
                    enableSearch={true}
                    countryCodeEditable={false}
                    disableSearchIcon={true}
                    preferredCountries={["us", "gb", "ca", "au"]}
                    searchPlaceholder="Search countries..."
                    onChange={(value, data: any) => {
                    //   setCountryCode(data.dialCode);
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  required
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  What Features Are You Interested In?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <h4 className="font-medium text-sm mb-2 text-gray-500">
                      Process Automation
                    </h4>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        Invoice Processing Automation
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        HR Onboarding/Offboarding Bots
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        Customer Data Entry Automation
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        ERP/CRM Integration Bots
                      </span>
                    </label>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-medium text-sm mb-2">
                      Advanced Capabilities
                    </h4>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        AI + RPA (Chatbots/NLP/OCR)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        Legacy System Automation
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        Cross-Platform Workflow Bots
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <h4 className="font-medium text-sm mb-2">
                    Project Timeline
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="project-timeline"
                          className="peer sr-only"
                        />
                        <div className="h-4 w-4 rounded-full border border-[#FF5722]/70 bg-white peer-checked:border-[#FF5722] peer-checked:bg-[#FF5722] transition-colors"></div>
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        Immediate (Within 1 month)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="project-timeline"
                          className="peer sr-only"
                        />
                        <div className="h-4 w-4 rounded-full border border-[#FF5722]/70 bg-white peer-checked:border-[#FF5722] peer-checked:bg-[#FF5722] transition-colors"></div>
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        Planning Phase (1-3 months)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="project-timeline"
                          className="peer sr-only"
                        />
                        <div className="h-4 w-4 rounded-full border border-[#FF5722]/70 bg-white peer-checked:border-[#FF5722] peer-checked:bg-[#FF5722] transition-colors"></div>
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        Researching Options (3-6 months)
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5">
                  <h4 className="font-medium text-sm mb-2">Support Models</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        End-to-End Implementation
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        Managed Automation Services
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="h-4 w-4 rounded border border-[#FF5722]/70 bg-white peer-checked:bg-[#FF5722] peer-checked:border-[#FF5722] transition-colors"></div>
                        <svg
                          className="absolute h-3 w-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            d="M5 10l3 3 6-6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">
                        Training for In-House Teams
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  required
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full bg-[#FF5722] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF8A65] transition-all duration-300"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
