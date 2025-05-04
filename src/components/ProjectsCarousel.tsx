"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

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
  }
];

const ProjectsCarousel = ({ addToRefs }: ProjectsCarouselProps) => {
  const [isHovered, setIsHovered] = useState(-1);
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section className="relative w-full py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            className="text-gray-600 mt-8 text-center max-w-2xl mx-auto text-lg"
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
            <div className="mx-12 relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true,
                  el: '.swiper-pagination'
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                loop={true}
                className="!pb-16"
                onSwiper={(s) => setSwiper(s)}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className={`relative h-[450px] rounded-3xl overflow-hidden p-8 group bg-white shadow-lg`}
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
                        
                        {/* Button fixed at bottom with absolute positioning */}
                        <div className="mt-8">
                          <button
                            className="text-btn font-btn w-full bg-[var(--color-secondary)] text-white text-center px-6 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center transform hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent cursor-pointer"
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={() => swiper?.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <button 
              onClick={() => swiper?.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            <div className="swiper-pagination"></div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper {
          overflow: visible !important;
        }
        
        .swiper-wrapper {
          padding: 20px 0;
        }

        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 1rem 0;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: var(--color-primary);
          opacity: 0.3;
          transition: all 0.3s ease;
          cursor: pointer;
          border-radius: 50%;
          margin: 0 4px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--color-primary);
          transform: scale(1.5);
        }
      `}</style>
    </section>
  );
};

export default ProjectsCarousel;