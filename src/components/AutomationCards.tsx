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
      <GlassmorphismCard
        variant={delay % 2 === 0 ? "primary" : "secondary"}
        data-hoverable="true"
        className="h-full relative"
      >
        <div
          className="h-full p-8 pb-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Icon */}
          <div className="mb-5">
            <div 
              className={`w-[80px] h-[80px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                isHovered ? "bg-[var(--color-secondary)] text-white" : "bg-[#FFF1ED] text-[var(--color-secondary)]"
              }`}
            >
              <Icon size={26} color={isHovered ? "white" : "var(--color-secondary)"} />
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-[#0A6E94] text-xl font-bold mb-3">{title}</h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-5">{description}</p>
          
          {/* Features list with light gray backgrounds */}
          <div className="grid gap-2">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`rounded-md py-2 px-3 text-sm transition-colors duration-300 ${
                  isHovered
                    ? "bg-[#f8f0e5] text-[#e98248]"
                    : "bg-[#f5f5f5] text-gray-700"
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
          
          {/* Button with fixed position */}
          <div className="absolute left-0 right-0 bottom-0 px-8 pb-8 bg-white/5 backdrop-blur-[1px]">
            <button
              className={`w-full py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 ${
                isHovered 
                  ? "bg-white text-[var(--color-secondary)] border-2 border-[var(--color-secondary)]" 
                  : "bg-[var(--color-secondary)] text-white border-2 border-transparent"
              }`}
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
      </GlassmorphismCard>
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

        {/* Direct implementation of cards for better control */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const [isHovered, setIsHovered] = useState(false);
            const variant = index % 2 === 0 ? "primary" : "secondary";
            
            return (
              <div 
                key={index} 
                className={`rounded-3xl overflow-hidden shadow-md h-[500px] relative
                  ${isHovered 
                    ? variant === "primary" 
                      ? "bg-gradient-to-br from-[#fff9f6] to-[#fff6f0] border border-white/20 transform scale-[1.02]" 
                      : "bg-gradient-to-br from-[#f6fcff] to-[#f0f9ff] border border-white/20 transform scale-[1.02]"
                    : "bg-white border border-white/10"
                  } 
                  backdrop-blur-[2px] transition-all duration-300 hover:shadow-lg
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Card content */}
                <div className="p-8 h-full">
                  {/* Floating elements for glass effect */}
                  <div className="absolute w-24 h-24 rounded-full bg-[var(--color-secondary)]/5 -top-10 -right-10 blur-xl"></div>
                  <div className="absolute w-24 h-24 rounded-full bg-[var(--color-primary)]/5 bottom-20 -left-10 blur-xl"></div>
                
                  {/* Icon */}
                  <div 
                    className={`relative mb-5 w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-300 transform ${
                      isHovered ? "bg-[var(--color-secondary)] text-white scale-110" : "bg-[#FFF4F1] text-[var(--color-secondary)]"
                    }`}
                  >
                    <service.icon size={26} color={isHovered ? "white" : "var(--color-secondary)"} />
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="relative text-[#0A6E94] text-xl font-bold mb-3">{service.title}</h3>
                  <p className="relative text-gray-600 text-sm mb-5">{service.description}</p>
                  
                  {/* Features list - no scroll */}
                  <div className="relative space-y-2">
                    {service.technologies.map((tech, idx) => (
                      <div 
                        key={idx} 
                        className={`rounded-md py-2 px-3 text-sm transition-all duration-300 ${
                          isHovered
                            ? "bg-[#f8f0e5] text-[#e98248] transform translate-x-1"
                            : "bg-[#f5f5f5] text-gray-700"
                        }`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Button - fixed position at bottom */}
                <div className={`absolute bottom-0 left-0 right-0 px-8 pb-8 pt-4 transition-all duration-300 ${
                  isHovered 
                    ? variant === "primary"
                      ? "bg-gradient-to-t from-[#fff9f6] via-[#fff9f6] to-transparent" 
                      : "bg-gradient-to-t from-[#f6fcff] via-[#f6fcff] to-transparent"
                    : "bg-gradient-to-t from-white via-white to-white/80"
                }`}>
                  <button
                    className={`relative w-full py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 transform ${
                      isHovered 
                        ? "bg-white text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] translate-y-[-2px]" 
                        : "bg-[var(--color-secondary)] text-white border-2 border-transparent"
                    }`}
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
            );
          })}
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