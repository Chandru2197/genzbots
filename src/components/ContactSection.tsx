import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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
                    Company name
                  </label>
                  <input
                    placeholder="Fill"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
              </div>
              {/* Row 3: Email/Message */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
              {/* Features Checkbox Grid */}
              <div>
                <h3 className="text-xl font-semibold mb-3">What features are you interested in?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-2">
                  {featuresList.map((feature) => (
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
                  ))}
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