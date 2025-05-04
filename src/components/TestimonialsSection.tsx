"use client";

import React, { useState, useEffect } from 'react';
import GlassmorphismCard from './GlassmorphismCard';

interface TestimonialsSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  avatar: string;
  initials: string;
}

export default function TestimonialsSection({ addToRefs }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Michael Chen",
      position: "CTO, FinanceHub",
      testimonial: "The custom automation solution developed by GenZBot has been a game-changer for our finance operations. We've seen significant improvements in efficiency and data accuracy.",
      avatar: "bg-[#C8F7D0]",
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Marketing, BrandX",
      testimonial: "Working with GenZBot to automate our marketing workflows was one of the best decisions we made. Their expertise and innovative approach delivered results beyond our expectations.",
      avatar: "bg-[#E9D5FF]",
      initials: "ER"
    },
    {
      name: "David Smith",
      position: "CEO, InnovateNow",
      testimonial: "The implementation of GenZBot's automation solutions has revolutionized our operational efficiency. Their expertise and dedication to excellence are truly remarkable.",
      avatar: "bg-[#FFE4C8]",
      initials: "DS"
    },
    {
      name: "Lisa Wong",
      position: "Head of Operations, TechGrowth",
      testimonial: "GenZBot's solutions have helped us scale our operations seamlessly. Their team's technical expertise and customer support are outstanding.",
      avatar: "bg-[#FFD5D5]",
      initials: "LW"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // Register with parallax effect
  useEffect(() => {
    if (addToRefs && sectionRef.current) {
      addToRefs(sectionRef.current);
    }
  }, [addToRefs]);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    // Reset animation flag after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    // Reset animation flag after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSpecific = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    // Reset animation flag after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="w-full" ref={sectionRef} data-speed="0">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0A6E94] to-[#0A6E94] bg-clip-text text-transparent mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover why businesses trust us with their automation needs
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 md:px-0">
        {/* Carousel container */}
        <div className="relative overflow-hidden rounded-xl w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-0"
              >
                <GlassmorphismCard 
                  variant={index % 2 === 0 ? 'primary' : 'secondary'} 
                  hoverable={false}
                  className="overflow-hidden shadow-xl"
                >
                  <div className="p-6 sm:p-10">
                    {/* Avatar and Name Layout */}
                    <div className="flex items-start mb-8 space-x-4">
                      <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full ${testimonial.avatar} flex items-center justify-center text-2xl font-bold`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 text-base">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    {/* Testimonial Text - Separate, Not in a Box */}
                    <p className="text-gray-700 text-lg sm:text-xl italic leading-relaxed mt-6">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </GlassmorphismCard>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - positioned outside */}
        <button 
          onClick={goToPrev}
          className="absolute left-[-50px] md:left-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#0A6E94] border border-[#0A6E94]/20 hover:bg-[#0A6E94] hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button 
          onClick={goToNext}
          className="absolute right-[-50px] md:right-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md text-[#0A6E94] border border-[#0A6E94]/20 hover:bg-[#0A6E94] hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Responsive arrows for mobile */}
        <div className="md:hidden absolute -bottom-14 left-0 right-0 flex justify-between">
          <button 
            onClick={goToPrev}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#0A6E94] border border-[#0A6E94]/20 hover:bg-[#0A6E94] hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#0A6E94] border border-[#0A6E94]/20 hover:bg-[#0A6E94] hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSpecific(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-[#0A6E94] transform scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
