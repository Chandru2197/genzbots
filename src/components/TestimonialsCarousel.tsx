"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import GlassmorphismCard from './GlassmorphismCard';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

interface TestimonialsCarouselProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

export default function TestimonialsCarousel({ addToRefs }: TestimonialsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, { once: true });
  const [isMounted, setIsMounted] = useState(false);

  // Create autoplay plugin instance
  const autoplayOptions = { delay: 5000, stopOnInteraction: false };
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  // Set up Embla with options for swipeable cards
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    dragFree: true
  }, [autoplayPlugin]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Avoid hydration mismatch by only rendering client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  useEffect(() => {
    if (addToRefs && carouselRef.current) addToRefs(carouselRef.current);
  }, [addToRefs]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "TechCorp Solutions",
      text: "Implementing GenZBot's process automation solutions has transformed our operations. We've seen a 40% reduction in processing time and virtually eliminated manual errors. Their team was incredibly supportive throughout the entire implementation process.",
      image: "bg-gradient-to-br from-blue-200 to-blue-300"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "FinanceHub",
      text: "The data integration platform from GenZBot has been a game-changer for our financial services. We're now able to process transactions 60% faster while maintaining complete data integrity. Their technical support is always responsive and helpful.",
      image: "bg-gradient-to-br from-green-200 to-green-300"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Director of Marketing",
      company: "BrandX Global",
      text: "Working with GenZBot to automate our marketing workflows was one of the best decisions we made. Their custom solution has helped us increase campaign throughput by 75% and improved our targeting accuracy significantly.",
      image: "bg-gradient-to-br from-purple-200 to-purple-300"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CEO",
      company: "MediTech Innovations",
      text: "The healthcare-specific automation solutions from GenZBot have revolutionized our patient care processes. We've improved response times by 50% and our staff can now focus on what matters most - patient care instead of paperwork.",
      image: "bg-gradient-to-br from-red-200 to-red-300"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <GlassmorphismCard
      variant={testimonial.id % 2 === 0 ? 'primary' : 'secondary'}
      hoverable={true}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <div className={`w-16 h-16 rounded-full ${testimonial.image} flex items-center justify-center text-white text-xl font-bold shadow-lg transition-transform duration-300 hover:scale-105`}>
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="md:ml-6 mt-4 md:mt-0">
            <h3 className="text-xl font-bold text-[var(--color-primary)]">{testimonial.name}</h3>
            <p className="text-[var(--color-secondary)] font-medium">{testimonial.position}</p>
            <p className="text-gray-600">{testimonial.company}</p>
          </div>
        </div>
        <div className="relative">
          <svg className="absolute top-0 left-0 w-8 h-8 text-[var(--color-primary)] opacity-20" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-700 italic pl-10 leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </GlassmorphismCard>
  );

  // Don't render anything during server-side rendering
  if (!isMounted) {
    return (
      <section className="py-16 overflow-hidden max-w-[1920px] mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our automation solutions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-100 h-80 animate-pulse rounded-xl"></div>
      </section>
    );
  }

  return (
    <section className="py-16 overflow-hidden max-w-[1920px] mx-auto">
      <motion.div
        ref={carouselRef}
        data-speed="0.08"
        className="text-center mb-12 parallax px-4"
        initial={{ opacity: 0, y: 25 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-label font-label text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-desc font-desc text-gray-600 max-w-3xl mx-auto">
          Hear from businesses that have transformed their operations with our automation solutions.
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all cursor-pointer"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="overflow-hidden mx-12">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="embla__slide px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all cursor-pointer"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex justify-center mt-8 gap-2">
          {scrollSnaps.map((_, index: number) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === selectedIndex
                  ? 'bg-[var(--color-primary)] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .embla { overflow: hidden; }
        .embla__container { 
          display: flex;
          align-items: center;
          height: 100%;
        }
        .embla__slide { 
          flex: 0 0 100%;
          min-width: 0;
          position: relative;
        }
      `}</style>
    </section>
  );
}