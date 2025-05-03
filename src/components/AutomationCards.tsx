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
import styled from 'styled-components';
import GlassmorphismCard from './GlassmorphismCard';
import AnimatedButton from "./custome/button/AnimatedButton";

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
        className="h-full flex flex-col p-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon in circular background */}
        <div className="mb-6">
          <div 
            className="w-[70px] h-[70px] rounded-full bg-[#FFF4F1] flex items-center justify-center text-[var(--color-secondary)]"
          >
            <Icon size={28} />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-[#0A6E94] text-xl font-bold mb-4">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Features list with light gray backgrounds */}
        <div className="flex-grow">
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="rounded-md bg-[#F5F5F5] py-2 px-3 text-gray-600 text-sm mb-2 mr-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* Button fixed at bottom with proper spacing */}
        <div className="mt-auto pt-8">
          <button
            className="w-full bg-[var(--color-secondary)] text-white py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 hover:bg-[#e94817]"
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
          </button>
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
      title: "Discovery Call (Free, 30 mins)",
      description:
        "We analyze your pain points via:",
      icon: Search,
      technologies: ["Process audit", "ROI estimation","Bot recommendation"],
    },
    {
      title: "Bot Blueprint (48 hrs)",
      description:
        "✍️ You receive",
      icon: Lightbulb,
      technologies: ["Custom workflow diagram", "Timeline & pricing","Integration checklist"],
    },
    {
      title: "Build & Test (1-3 weeks)",
      description: "👩💻 We:",
      icon: Code,
      technologies: ["Develop in agile sprints", "Share weekly demo videos", "Train your team via Discord"],
    },
    {
      title: "Hypercare Launch (2 weeks)",
      description:
        "🚨 Includes:",
      icon: Rocket,
      technologies: ["24/7 priority support", "Performance analytics",'3 free tweaks'],
    },
    {
      title: "Scale & Optimize (Ongoing)",
      description:
        "📈 We:",
      icon: Server,
      technologies: [
        "Suggest new automations",
        "Provide quarterly health checks",
        "Celebrate your time savings!"
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
    <section id="automation-process" className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with parallax */}
        <motion.div
          ref={headingRef}
          data-speed="0.08"
          className="text-center mb-12 parallax"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              Our Automation Process
            </h2>
          </div>
          <p className="text-desc font-desc text-gray-600 max-w-2xl mx-auto text-center">
            Automation is a journey, not a destination. Our ongoing support ensures your solutions evolve with your business.
          </p>
        </motion.div>

        {/* Cards with fixed dimensions and styling to match reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="h-[500px]"> 
              <div className="bg-white h-full rounded-3xl shadow-md overflow-hidden">
                <AutomationCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  technologies={service.technologies}
                  delay={index}
                />
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <AnimatedButton title={"Contact Us Today"} />
        </motion.div>
      </div>
    </section>
  );
}