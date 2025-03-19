// File: components/ProjectsCarousel.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

interface ProjectsCarouselProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectsCarousel({ addToRefs }: ProjectsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  
  // Refs for parallax elements
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  // Configure the minimum swipe distance
  const minSwipeDistance = 50;

  const projects: Project[] = [
    {
      id: 1,
      title: "Manufacturing Workflow Automation",
      category: "Process Automation",
      description: "Implemented a complete workflow automation system for a leading manufacturing company, reducing processing time by 60% and increasing productivity.",
      image: "bg-blue-500",
      link: "#manufacturing-case-study"
    },
    {
      id: 2,
      title: "Healthcare Data Integration Platform",
      category: "Data Integration",
      description: "Developed a secure, HIPAA-compliant data integration platform connecting multiple systems to create a unified patient record system.",
      image: "bg-green-500",
      link: "#healthcare-case-study"
    },
    {
      id: 3,
      title: "Financial Services Document Processing",
      category: "RPA Implementation",
      description: "Deployed RPA bots to handle document processing for a financial services firm, reducing manual work by 80% and eliminating errors.",
      image: "bg-indigo-500",
      link: "#finance-case-study"
    },
    {
      id: 4,
      title: "Retail Inventory Management System",
      category: "Custom Software",
      description: "Created a custom inventory management solution for a retail chain, integrating with POS systems and enabling real-time inventory tracking.",
      image: "bg-purple-500",
      link: "#retail-case-study"
    },
    {
      id: 5,
      title: "Logistics Route Optimization",
      category: "AI & Machine Learning",
      description: "Implemented an AI-powered route optimization system for a logistics company, reducing fuel costs by 30% and improving delivery times.",
      image: "bg-red-500",
      link: "#logistics-case-study"
    }
  ];

  // Apply parallax effect through refs
  useEffect(() => {
    if (addToRefs) {
      if (titleRef.current) addToRefs(titleRef.current);
      if (carouselRef.current) addToRefs(carouselRef.current);
      if (mobileCarouselRef.current) addToRefs(mobileCarouselRef.current);
    }
  }, [addToRefs]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setAutoplayPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    // Reset autoplay after 5 seconds
    setTimeout(() => setAutoplayPaused(false), 5000);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!autoplayPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplayPaused, nextSlide]);

  // Get visible slides based on current position
  const getVisibleProjects = () => {
    return [
      projects[currentSlide],
      projects[(currentSlide + 1) % projects.length],
      projects[(currentSlide + 2) % projects.length]
    ];
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} data-speed="0.08" className="text-center mb-12 parallax">
          <h2 className="text-4xl font-bold mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our successful automation implementations across various industries.
          </p>
        </div>
        
        {/* Large Screen Carousel (3 items visible) */}
        <div 
          ref={carouselRef}
          data-speed="0.05"
          className="hidden lg:block relative parallax"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex space-x-6">
            {getVisibleProjects().map((project, index) => (
              <div 
                key={`lg-${project.id}`} 
                className="w-1/3 transform transition-all duration-500 ease-in-out hover:scale-105"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className={`h-48 ${project.image} flex items-center justify-center text-white`}>
                    <span className="text-2xl font-bold">Project Image</span>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link 
                      href={project.link} 
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                    >
                      View Case Study
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows - Large Screen */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full shadow-lg p-3 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full shadow-lg p-3 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Mobile & Tablet Carousel (Single item visible) */}
        <div 
          ref={mobileCarouselRef}
          data-speed="0.05"
          className="lg:hidden relative parallax"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={`mobile-${project.id}`} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className={`h-48 ${project.image} flex items-center justify-center text-white`}>
                      <span className="text-2xl font-bold">Project Image</span>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link 
                        href={project.link} 
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                      >
                        View Case Study
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - Mobile & Tablet */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            aria-label="Next project"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}