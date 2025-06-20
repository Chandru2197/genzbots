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
import Image from "next/image";
import Link from 'next/link';

interface AutomationCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  technologies?: string[];
  delay?: number;
  customImage?: string;
  servicePath?: string;
}

const AutomationCard = ({
  title,
  description,
  icon: Icon,
  technologies = [],
  delay = 0,
  customImage,
  servicePath,
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
        hoverable={true}
        className="h-full cursor-pointer bg-white/30 backdrop-blur-none rounded-2xl shadow-lg"
      >
        <div
          className="h-full flex flex-col justify-between"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            {/* Icon or Custom Image */}
            <div className="mb-5">
              {customImage ? (
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={customImage}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : Icon ? (
                <div
                  className={`w-[80px] h-[80px] rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isHovered ? "bg-[var(--color-secondary)] text-white" : "bg-[#FFF1ED] text-[var(--color-secondary)]"
                  }`}
                >
                  <Icon size={26} color={isHovered ? "white" : "var(--color-secondary)"} />
                </div>
              ) : null}
            </div>
            
            {/* Title */}
            <h3 className="text-[#0A6E94] text-xl font-bold mb-3">{title}</h3>
            
            {/* Description */}
            <p className="text-gray-600 font-bold text-sm mb-5">{description}</p>
            
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
          </div>
          
          {/* Learn More Button */}
          {servicePath && (
            <Link href={servicePath} className="mt-4 block">
              <button
                // className="w-full py-3 px-4 rounded-md text-white bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] transition-colors duration-300"
                className="text-btn font-btn w-full bg-[var(--color-secondary)] text-white text-center px-4 py-2 rounded-none font-medium transition-all duration-300 inline-flex items-center justify-center transform hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent cursor-pointer"
              >
                Learn More
              </button>
            </Link>
          )}
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
      customImage: "/assets/images/customer-service.png",
      technologies: ["Process audit", "ROI estimation","Bot recommendation"],
      servicePath: "/services/discovery-call"
    },
    {
      title: "Bot Blueprint (48 hrs)",
      description:
        "You receive",
      icon: Lightbulb,
      customImage: "/assets/images/prototype.png",
      technologies: ["Custom workflow diagram", "Timeline & pricing","Integration checklist"],
      servicePath: "/services/bot-blueprint"
    },
    {
      title: "Build & Test (1-3 weeks)",
      description: "We:",
      icon: Code,
      customImage: "/assets/images/quality-control.png",
      technologies: ["Develop in agile sprints", "Share weekly demo videos", "Train your team via Discord"],
      servicePath: "/services/build-and-test"
    },
    {
      title: "Hypercare Launch (2 weeks)",
      description:
        "Includes:",
      icon: Rocket,
      customImage: "/assets/images/healthcare.png",
      technologies: ["24/7 priority support", "Performance analytics",'3 free tweaks'],
      servicePath: "/services/time-liberation"
    },
    {
      title: "Scale & Optimize (Ongoing)",
      description:
        "We:",
      icon: Server,
      customImage: "/assets/images/optimization.png",
      technologies: [
        "Suggest new automations",
        "Provide quarterly health checks",
        "Celebrate your time savings!"
      ],
      servicePath: "/services/hyper-care"
    },
    {
      title: "Contact Us",
      description:
        "Ready to transform your business processes? Get a complimentary assessment.",
      customImage: "/assets/images/operator.png",
      icon:MessageSquare,
      technologies: ["AI/ML Integration", "Custom Solutions"],
      servicePath: "/contactus"
    },
  ];

  return (
    <section id="automation-process" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with parallax */}
        <motion.div
          ref={headingRef}
          data-speed="0.08"
          className="text-center mb-6 parallax"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              Our Automation Process
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Automation is a journey, not a destination. Our ongoing support ensures your solutions evolve with your business.
          </p>
        </motion.div>

        {/* Direct implementation of cards for better control */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <AutomationCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              customImage={service.customImage}
              technologies={service.technologies}
              delay={index}
              servicePath={service.servicePath}
              // servicePath={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
            />
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