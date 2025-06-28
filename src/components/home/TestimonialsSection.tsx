"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Star, 
  Quote, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause, 
  Sparkles,
  Award,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

interface TestimonialsSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
  initials: string;
  rating: number;
  industry: string;
  results: string[];
}

const GlassmorphismCard = ({ 
  children, 
  variant = 'primary', 
  hoverable = true, 
  className = '' 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  hoverable?: boolean; 
  className?: string; 
}) => (
  <div className={`
    bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl
    ${hoverable ? 'hover:bg-white/15 hover:scale-105 transition-all duration-300' : ''}
    ${className}
  `}>
    {children}
  </div>
);

export default function TestimonialsSection({ addToRefs }: TestimonialsSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const testimonials: Testimonial[] = [
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      company: "TechCorp Solutions",
      testimonial: "The custom automation solution developed by GenZBot has been a game-changer for our finance operations. We've seen significant improvements in efficiency and data accuracy, with processing time reduced by 75% and virtually zero errors.",
      avatar: "bg-gradient-to-br from-blue-400 to-cyan-500",
      initials: "MC",
      rating: 5,
      industry: "Technology",
      results: ["75% faster processing", "Zero error rate", "$2M annual savings"]
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Marketing",
      company: "BrandX Global",
      testimonial: "Working with GenZBot to automate our marketing workflows was one of the best decisions we made. Their expertise and innovative approach delivered results beyond our expectations, increasing our campaign throughput by 300%.",
      avatar: "bg-gradient-to-br from-purple-400 to-pink-500",
      initials: "ER",
      rating: 5,
      industry: "Marketing",
      results: ["300% more campaigns", "60% cost reduction", "24/7 operations"]
    },
    {
      name: "David Smith",
      position: "Chief Executive Officer",
      company: "MediTech Innovations",
      testimonial: "The implementation of GenZBot's automation solutions has revolutionized our operational efficiency. Their expertise and dedication to excellence are truly remarkable, helping us scale without increasing headcount.",
      avatar: "bg-gradient-to-br from-green-400 to-emerald-500",
      initials: "DS",
      rating: 5,
      industry: "Healthcare",
      results: ["50% faster response", "Zero headcount increase", "98% uptime"]
    },
    {
      name: "Lisa Wong",
      position: "Head of Operations",
      company: "FinanceHub Pro",
      testimonial: "GenZBot's solutions have helped us scale our operations seamlessly. Their team's technical expertise and customer support are outstanding, delivering automation that actually learns and improves over time.",
      avatar: "bg-gradient-to-br from-orange-400 to-red-500",
      initials: "LW",
      rating: 5,
      industry: "Finance",
      results: ["40% cost savings", "Real-time processing", "AI-powered insights"]
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  
  const autoplayOptions = { delay: 6000, stopOnInteraction: false };
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    dragFree: true
  }, [autoplayPlugin]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (addToRefs && sectionRef.current) {
      addToRefs(sectionRef.current);
    }
  }, [addToRefs]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        if (isPlaying) {
          autoplay.stop();
        } else {
          autoplay.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  }, [emblaApi, isPlaying]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!isMounted) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">Loading testimonials...</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 h-96 animate-pulse rounded-3xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <Star className="w-6 h-6 text-yellow-400" />}
            {i % 4 === 1 && <Quote className="w-8 h-8 text-blue-400" />}
            {i % 4 === 2 && <Award className="w-5 h-5 text-green-400" />}
            {i % 4 === 3 && <Users className="w-7 h-7 text-purple-400" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full text-white mb-8 shadow-lg">
            <Star className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Client Success Stories</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover why businesses trust us with their automation needs and how we've 
            transformed their operations with measurable, game-changing results.
          </p>

          {/* Enhanced Controls */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={toggleAutoplay}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                isPlaying 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Stories' : 'Play Stories'}
            </button>
            <div className="text-white/60 text-sm">
              {selectedIndex + 1} of {testimonials.length} testimonials
            </div>
          </div>
        </motion.div>

        {/* Enhanced Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="embla__slide px-4">
                      <GlassmorphismCard 
                        variant={index % 2 === 0 ? 'primary' : 'secondary'} 
                        hoverable={false}
                        className="mx-auto"
                      >
                        <div className="p-8 lg:p-12">
                          {/* Header with rating and industry */}
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <div className="bg-white/20 px-4 py-2 rounded-full">
                              <span className="text-white/80 text-sm font-medium">{testimonial.industry}</span>
                            </div>
                          </div>

                          {/* Quote section */}
                          <div className="relative mb-8">
                            <Quote className="absolute -top-4 -left-2 w-12 h-12 text-white/20" />
                            <blockquote className="text-white text-xl lg:text-2xl leading-relaxed italic pl-8">
                              "{testimonial.testimonial}"
                            </blockquote>
                          </div>

                          {/* Results metrics */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {testimonial.results.map((result, resultIndex) => (
                              <motion.div
                                key={resultIndex}
                                className="bg-white/10 rounded-2xl p-4 text-center border border-white/20"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: resultIndex * 0.1 }}
                              >
                                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                <div className="text-white font-semibold text-sm">{result}</div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Author info */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className={`w-16 h-16 rounded-full ${testimonial.avatar} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                                {testimonial.initials}
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-white">{testimonial.name}</h3>
                                <p className="text-blue-200 font-medium">{testimonial.position}</p>
                                <p className="text-blue-300 text-sm">{testimonial.company}</p>
                              </div>
                            </div>
                            
                            {/* Company logo placeholder */}
                            <div className="hidden md:block">
                              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                                <Award className="w-8 h-8 text-white/60" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </GlassmorphismCard>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <button 
              onClick={scrollPrev}
              className="absolute left-[-80px] top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-7 h-7" />
            </button>

            <button 
              onClick={scrollNext}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-7 h-7" />
            </button>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-between mt-8 px-4">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={scrollNext}
                className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Enhanced Pagination */}
            <div className="flex items-center justify-center mt-8 space-x-3">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'w-12 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full' 
                      : 'w-4 h-4 bg-white/30 rounded-full hover:bg-white/50 hover:scale-125'
                  }`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5.0★</div>
                <div className="text-blue-200">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-blue-200">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-blue-200">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your business operations and deliver the same 
            game-changing results for your organization.
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]">
            Start Your Success Story
            <ArrowRight className="w-6 h-6 ml-3 inline" />
          </button>
        </motion.div>
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}