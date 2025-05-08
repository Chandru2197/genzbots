"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Add some basic CSS styles to ensure smooth carousel operation
const EMBLA_STYLES = `
  .embla { overflow: hidden; }
  .embla__container { display: flex; }
  .embla__slide { flex: 0 0 100%; min-width: 0; position: relative; }
  
  @media (min-width: 768px) {
    .embla__slide { flex: 0 0 50%; }
  }
  
  @media (min-width: 1024px) {
    .embla__slide { flex: 0 0 33.333%; }
  }
`;

interface ProjectsCarouselProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const projects = [
  {
    title: "Process Automation",
    subtitle: "Keep your business running smoothly",
    description: "Join today and increase efficiency of your operations",
    gradient: "from-[var(--color-primary)] to-[var(--color-tertiary)]",
    accent: "bg-[var(--color-primary)]",
    secondaryAccent: "bg-[var(--color-tertiary)]",
    icon: "🔍",
    features: [
      "Process audit",
      "ROI estimation",
      "Bot recommendation"
    ],
    link: "#"
  },
  {
    title: "Smart Integration",
    subtitle: "Connect all your systems",
    description: "Start now and streamline your workflow instantly",
    gradient: "from-[var(--color-secondary)] to-[#ff4000]",
    accent: "bg-[var(--color-secondary)]",
    secondaryAccent: "bg-[var(--color-primary)]",
    icon: "💡",
    features: [
      "Custom workflow diagram",
      "Timeline & pricing",
      "Integration checklist"
    ],
    link: "#"
  },
  {
    title: "Data Analytics",
    subtitle: "Know everything about your data",
    description: "Start now and learn more about your business insights",
    gradient: "from-[var(--color-tertiary)] to-[var(--color-primary)]",
    accent: "bg-[var(--color-tertiary)]",
    secondaryAccent: "bg-[var(--color-secondary)]",
    icon: "📊",
    features: [
      "Develop in agile sprints",
      "Share weekly demo videos",
      "Train your team via Discord"
    ],
    link: "#"
  },
  {
    title: "AI-Powered Automation",
    subtitle: "Next-generation process intelligence",
    description: "Enhance your workflow with machine learning",
    gradient: "from-[#8A2BE2] to-[#4B0082]",
    accent: "bg-[#8A2BE2]",
    secondaryAccent: "bg-[#4B0082]",
    icon: "🤖",
    features: [
      "ML-powered predictions",
      "Intelligent document analysis",
      "Adaptive learning systems"
    ],
    link: "#"
  },
  {
    title: "Cloud Migration",
    subtitle: "Modernize your infrastructure",
    description: "Move your systems to a scalable cloud platform",
    gradient: "from-[#4682B4] to-[#00BFFF]",
    accent: "bg-[#4682B4]",
    secondaryAccent: "bg-[#00BFFF]",
    icon: "☁️",
    features: [
      "Zero-downtime migration",
      "Hybrid cloud setup",
      "Cost optimization strategy"
    ],
    link: "#"
  },
  {
    title: "Cybersecurity Solutions",
    subtitle: "Protect your digital assets",
    description: "Implement robust security measures",
    gradient: "from-[#800000] to-[#B22222]",
    accent: "bg-[#800000]",
    secondaryAccent: "bg-[#B22222]",
    icon: "🔒",
    features: [
      "Threat detection systems",
      "End-to-end encryption",
      "Security compliance audits"
    ],
    link: "#"
  }
];

const ProjectsCarousel = ({ addToRefs }: ProjectsCarouselProps) => {
  const [isHovered, setIsHovered] = useState(-1);
  
  // Create autoplay plugin instance
  const autoplayOptions = { delay: 5000, stopOnInteraction: false };
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  // Set up Embla with better options
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  }, [autoplayPlugin]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up Embla on mount and clean up on unmount
  useEffect(() => {
    if (!emblaApi) return;
    
    // Initialize
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    
    // Add event listeners
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    // Cleanup
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 -inset-x-24 bg-gradient-to-r from-[var(--color-tertiary)]/10 via-[var(--color-secondary)]/15 to-[var(--color-tertiary)]/10 blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              Our Projects
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Explore our cutting-edge automation solutions
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative px-4 py-8 max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Embla Carousel */}
            <div className="embla overflow-hidden mx-12" ref={emblaRef}>
              <div className="embla__container">
                {projects.map((project, index) => (
                  <div key={index} className="embla__slide px-4 pb-6">
                    <div 
                      className={`relative h-[480px] rounded-3xl overflow-hidden p-8 group bg-white shadow-lg`}
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(-1)}
                    >
                      {/* Subtle background accent */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}></div>
                      <div className="absolute inset-0 border border-gray-100 rounded-3xl"></div>
                      
                      {/* Main container with flex column */}
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        {/* Top content section */}
                        <div>
                          {/* Icon */}
                          <div className="mb-4 text-3xl flex justify-start">
                            <span className="text-[var(--color-secondary)] text-4xl">{project.icon}</span>
                          </div>
                          
                          {/* Title and subtitle */}
                          <h3 className="text-2xl font-bold text-[#0A6E94] mb-4">{project.title}</h3>
                          
                          {/* Subtitle line */}
                          <div className="mb-6">
                            <p className="text-gray-600">{project.subtitle}</p>
                          </div>
                          
                          {/* Features list with proper spacing */}
                          <ul className="space-y-3">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-gray-600">
                                <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-secondary)] mr-3 mt-1.5"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Button fixed at bottom with margin instead of absolute positioning */}
                        <div className="mt-8">
                          <button
                            className="text-btn font-btn w-full bg-[var(--color-secondary)] text-white text-center px-4 py-2 rounded-none font-medium transition-all duration-300 inline-flex items-center justify-center transform hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent cursor-pointer"
                            suppressHydrationWarning
                          >
                            Learn more
                            <svg
                              className="w-4 h-4 ml-2 transition-transform duration-300"
                              style={{ transform: isHovered === index ? "translateX(4px)" : "translateX(0)" }}
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Custom navigation buttons with higher z-index */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
              suppressHydrationWarning
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
              suppressHydrationWarning
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="embla__dots flex items-center justify-center mt-6">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`embla__dot w-3 h-3 mx-1 rounded-full transition-all ${
                    index === selectedIndex 
                      ? 'bg-[var(--color-primary)] transform scale-125' 
                      : 'bg-[var(--color-primary)] opacity-30'
                  }`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  suppressHydrationWarning
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add essential Embla styles inline to ensure basic functionality */}
      <style jsx global>{EMBLA_STYLES}</style>
    </section>
  );
};

export default ProjectsCarousel;