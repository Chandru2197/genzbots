// File: components/AutomationCards.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code,
  Rocket,
  Server,
  MessageSquare,
} from "lucide-react";

interface AutomationCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  technologies?: string[];
  delay?: number;
}

const AutomationCard = ({
  title,
  description,
  icon: Icon,
  technologies = [],
  delay = 0,
}: AutomationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="h-full"
    >
      <div
        className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl border border-gray-100"
        style={{
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`rounded-full p-1 w-16 h-16 flex items-center justify-center mb-5 transition-all duration-300`}
          style={{
            backgroundColor: isHovered ? "#f75821" : "#FEF1ED",
            color: isHovered ? "white" : "#f75821",
          }}
        >
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-5 flex-grow">{description}</p>
        {technologies.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded transition-colors duration-300 ${
                    isHovered
                      ? "bg-orange-100 text-orange-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        <div
            className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-none font-medium transition-all duration-300 inline-flex items-center transform  hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-colors duration-300"
            // style={{ color: isHovered ? "#f75821" : "#4B5563" }}
        >
          Learn more
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300"
            style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default function AutomationCards({ addToRefs }: { addToRefs?: (el: HTMLElement | null) => void }) {
  // Only register the decorative heading for parallax
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    if (addToRefs && headingRef.current) addToRefs(headingRef.current);
  }, [addToRefs]);

  const services = [
    {
      title: "Discover",
      description:
        "We begin by understanding your business challenges and process inefficiencies.",
      icon: Search,
      technologies: ["Process Analysis", "Workflow Assessment"],
    },
    {
      title: "Design",
      description:
        "We create custom automation solutions aligned with your business objectives.",
      icon: Lightbulb,
      technologies: ["Solution Architecture", "ROI Planning"],
    },
    {
      title: "Develop",
      description: "Our expert team builds robust, scalable automation solutions.",
      icon: Code,
      technologies: ["UiPath", "Automation Anywhere", "Power Automate"],
    },
    {
      title: "Deploy",
      description:
        "We implement solutions with minimal disruption to your operations.",
      icon: Rocket,
      technologies: ["Change Management", "User Training"],
    },
    {
      title: "Technology Expertise",
      description:
        "We work with leading RPA and AI technologies to deliver the best solution for your needs.",
      icon: Server,
      technologies: [
        "UiPath",
        "Automation Anywhere",
        "Blue Prism",
        "IBM Automation",
      ],
    },
    {
      title: "Contact Us",
      description:
        "Ready to transform your business processes? Get a complimentary assessment.",
      icon: MessageSquare,
      technologies: ["AI/ML Integration", "Custom Solutions"],
    },
  ];

  return (
    <section id="automation-process" className="py-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with parallax */}
        <motion.div
          ref={headingRef}
          data-speed="0.08"
          className="text-center mb-2 parallax"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Our Automation Process</h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Automation is a journey, not a destination. Our ongoing support ensures your solutions evolve with your business.
          </p>
        </motion.div>

        {/* Cards (NOT parallax) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AutomationCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              technologies={service.technologies}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-none font-medium transition-all duration-300 inline-flex items-center transform  hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-colors duration-300"
            // style={{ backgroundColor: "#f75821" }}
          >
            Contact Us Today
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}