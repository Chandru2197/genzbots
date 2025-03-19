// File: components/TestimonialsCarousel.tsx
"use client";

import { useState, useEffect, useRef } from 'react';

interface TestimonialsCarouselProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

export default function TestimonialsCarousel({ addToRefs }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Refs for parallax elements
  const titleRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "TechCorp Solutions",
      text: "Implementing AutomateNow's process automation solutions has transformed our operations. We've seen a 40% reduction in processing time and virtually eliminated manual errors. Their team was incredibly supportive throughout the entire implementation process.",
      image: "bg-blue-200"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "FinanceHub",
      text: "The data integration platform from AutomateNow has been a game-changer for our financial services. We're now able to process transactions 60% faster while maintaining complete data integrity. Their technical support is always responsive and helpful.",
      image: "bg-green-200"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Director of Marketing",
      company: "BrandX Global",
      text: "Working with AutomateNow to automate our marketing workflows was one of the best decisions we made. Their custom solution has helped us increase campaign throughput by 75% and improved our targeting accuracy significantly.",
      image: "bg-purple-200"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CEO",
      company: "MediTech Innovations",
      text: "The healthcare-specific automation solutions from AutomateNow have revolutionized our patient care processes. We've improved response times by 50% and our staff can now focus on what matters most - patient care instead of paperwork.",
      image: "bg-red-200"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Fixed height container for mobile */}
      <div className="p-4 md:p-8 h-auto md:h-auto max-h-[500px] md:max-h-none overflow-y-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-3 md:mb-6">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-green-200 flex items-center justify-center text-base md:text-lg font-bold mb-2 md:mb-0 flex-shrink-0">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="md:ml-4">
            <h3 className="text-lg md:text-xl font-bold">{testimonial.name}</h3>
            <p className="text-sm md:text-base text-gray-600">{testimonial.position}</p>
            <p className="text-xs md:text-sm text-gray-500">{testimonial.company}</p>
          </div>
        </div>
        <div className="relative">
          <svg className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 text-gray-200 -mt-1 -ml-1 md:-mt-2 md:-ml-2" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          {/* Constrain text length or use truncation for mobile */}
          <p className="text-gray-700 italic relative pl-4 md:pl-6 text-sm md:text-base leading-relaxed line-clamp-6 md:line-clamp-none">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </div>
  );
  
  

  // Apply parallax effect through refs
  useEffect(() => {
    if (addToRefs) {
      if (titleRef.current) addToRefs(titleRef.current);
      if (carouselRef.current) addToRefs(carouselRef.current);
    }
  }, [addToRefs]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    // Auto-advance slides
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  // Reset interval when manually changing slide
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  };

  const handlePrev = () => {
    prevSlide();
    resetInterval();
  };

  const handleNext = () => {
    nextSlide();
    resetInterval();
  };

  // Optimized TestimonialsCarousel.tsx for mobile spacing
// Update the carousel container styles in your TestimonialsCarousel.tsx

// Replace this section in your TestimonialsCarousel component
return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden"> {/* Reduced padding on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} data-speed="0.08" className="text-center mb-8 md:mb-16 parallax"> {/* Reduced margin on mobile */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">What Our Clients Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our automation solutions.
          </p>
        </div>
        
        <div ref={carouselRef} data-speed="0.05" className="relative max-w-5xl mx-auto parallax">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                  <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                    {/* Current card content... */}
                    <TestimonialCard testimonial={testimonial}/>
                </div>              
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - Smaller and better positioned for mobile */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-0 md:-translate-x-6 bg-white rounded-full shadow-lg p-2 md:p-3 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-0 md:translate-x-6 bg-white rounded-full shadow-lg p-2 md:p-3 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  resetInterval();
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}