"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

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
    link: "#"
  },
  {
    title: "Smart Integration",
    subtitle: "Connect all your systems",
    description: "Start now and streamline your workflow instantly",
    gradient: "from-[var(--color-secondary)] to-[#ff4000]",
    accent: "bg-[var(--color-secondary)]",
    secondaryAccent: "bg-[var(--color-primary)]",
    link: "#"
  },
  {
    title: "Data Analytics",
    subtitle: "Know everything about your data",
    description: "Start now and learn more about your business insights",
    gradient: "from-[var(--color-tertiary)] to-[var(--color-primary)]",
    accent: "bg-[var(--color-tertiary)]",
    secondaryAccent: "bg-[var(--color-secondary)]",
    link: "#"
  }
];

const FloatingElement = ({ className }: { className: string }) => (
  <div className={`absolute w-4 h-4 rounded-lg ${className} shadow-lg transform transition-transform duration-700 ease-in-out animate-float`}></div>
);

const ProjectsCarousel = ({ addToRefs }: ProjectsCarouselProps) => {
  const [isHovered, setIsHovered] = useState(-1);

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
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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
              className="!pb-16 !px-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className={`relative h-[400px] rounded-3xl overflow-hidden p-8 group`}
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(-1)}
                  >
                    {/* Glass effect overlay with gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-3xl"></div>
                    
                    {/* Floating elements */}
                    <FloatingElement className={`${project.accent} opacity-40 -top-2 right-12 animate-float-slow`} />
                    <FloatingElement className={`${project.secondaryAccent} opacity-40 top-20 -right-2 animate-float-delayed`} />
                    <FloatingElement className={`${project.accent} opacity-40 bottom-20 left-4 animate-float`} />
                    <FloatingElement className={`${project.secondaryAccent} opacity-40 -bottom-2 right-16 animate-float-slow`} />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <h3 className="text-3xl font-bold text-[var(--color-tertiary)] mb-3">{project.title}</h3>
                      <h4 className="text-xl text-gray-800 mb-6">{project.subtitle}</h4>
                      <p className="text-gray-600 text-lg mb-8">{project.description}</p>
                      
                      <div className="mt-auto">
                        <button
                          className="text-btn font-btn w-auto bg-[var(--color-secondary)] text-white text-sm text-center px-4 py-2 rounded-none font-medium transition-all duration-300 inline-flex items-center transform hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent"
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
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !left-0"></div>
            <div className="swiper-button-next !right-0"></div>
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

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-25px) rotate(15deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Swiper Styles */
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          width: 44px !important;
          height: 44px !important;
          margin-top: -22px;
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary) !important;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          border: 1px solid var(--color-primary);
          transition: all 0.3s ease;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }

        .swiper-button-next {
          right: 0 !important;
        }

        .swiper-button-prev {
          left: 0 !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: var(--color-primary);
          color: white !important;
          transform: scale(1.1);
        }

        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
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

        @media (max-width: 1280px) {
          .swiper-button-next {
            right: 10px !important;
          }
          .swiper-button-prev {
            left: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsCarousel;