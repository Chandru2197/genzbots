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
  CheckCircle,
  MessageCircle,
  Heart,
  Zap,
  Target
} from 'lucide-react';

interface TestimonialsSectionProps {
  addToRefs?: (el: HTMLElement | null) => void;
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
  badge: string;
}

const ModernCard = ({ 
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
    relative bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-blue-200/30 shadow-2xl
    ${hoverable ? 'hover:bg-white/95 hover:scale-[1.02] hover:border-blue-300/50 hover:shadow-[0_20px_60px_-12px_rgba(59,130,246,0.25)]' : ''}
    transition-all duration-500 ease-out
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-orange-50/50 rounded-3xl"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function TestimonialsSection({ addToRefs }: TestimonialsSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(-1);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const testimonials: Testimonial[] = [
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      company: "TechCorp Solutions",
      testimonial: "The custom automation solution developed by GenZBot has been a game-changer for our finance operations. We've seen significant improvements in efficiency and data accuracy, with processing time reduced by 75% and virtually zero errors.",
      avatar: "from-blue-500 to-cyan-600",
      initials: "MC",
      rating: 5,
      industry: "Technology",
      results: ["75% faster processing", "Zero error rate", "$2M annual savings"],
      badge: "Tech Leader"
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Marketing",
      company: "BrandX Global",
      testimonial: "Working with GenZBot to automate our marketing workflows was one of the best decisions we made. Their expertise and innovative approach delivered results beyond our expectations, increasing our campaign throughput by 300%.",
      avatar: "from-purple-500 to-pink-600",
      initials: "ER",
      rating: 5,
      industry: "Marketing",
      results: ["300% more campaigns", "60% cost reduction", "24/7 operations"],
      badge: "Marketing Pro"
    },
    {
      name: "David Smith",
      position: "Chief Executive Officer",
      company: "MediTech Innovations",
      testimonial: "The implementation of GenZBot's automation solutions has revolutionized our operational efficiency. Their expertise and dedication to excellence are truly remarkable, helping us scale without increasing headcount.",
      avatar: "from-emerald-500 to-teal-600",
      initials: "DS",
      rating: 5,
      industry: "Healthcare",
      results: ["50% faster response", "Zero headcount increase", "98% uptime"],
      badge: "Healthcare Expert"
    },
    {
      name: "Lisa Wong",
      position: "Head of Operations",
      company: "FinanceHub Pro",
      testimonial: "GenZBot's solutions have helped us scale our operations seamlessly. Their team's technical expertise and customer support are outstanding, delivering automation that actually learns and improves over time.",
      avatar: "from-orange-500 to-red-600",
      initials: "LW",
      rating: 5,
      industry: "Finance",
      results: ["40% cost savings", "Real-time processing", "AI-powered insights"],
      badge: "Finance Innovator"
    },
    {
      name: "James Wilson",
      position: "VP of Engineering",
      company: "CloudScale Systems",
      testimonial: "The level of sophistication in GenZBot's automation solutions is impressive. They've helped us achieve unprecedented efficiency in our development pipeline while maintaining the highest quality standards.",
      avatar: "from-indigo-500 to-blue-600",
      initials: "JW",
      rating: 5,
      industry: "Engineering",
      results: ["90% deployment speed", "99.9% reliability", "50% faster delivery"],
      badge: "Engineering Leader"
    },
    {
      name: "Sarah Thompson",
      position: "Operations Director",
      company: "RetailNext Solutions",
      testimonial: "GenZBot transformed our entire supply chain operations. Their intelligent automation platform has given us real-time visibility and control we never thought possible, revolutionizing how we serve our customers.",
      avatar: "from-rose-500 to-pink-600",
      initials: "ST",
      rating: 5,
      industry: "Retail",
      results: ["Real-time tracking", "35% cost reduction", "99% accuracy"],
      badge: "Retail Expert"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  
  const autoplayOptions = { delay: 5000, stopOnInteraction: false };
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    dragFree: false,
    slidesToScroll: 1
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Loading testimonials...</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-200 h-96 animate-pulse rounded-3xl"></div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-orange-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        {/* Floating animated elements */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          >
            {i % 6 === 0 && <Star className="w-5 h-5 text-blue-700" />}
            {i % 6 === 1 && <Quote className="w-6 h-6 text-orange-700" />}
            {i % 6 === 2 && <Award className="w-4 h-4 text-purple-700" />}
            {i % 6 === 3 && <Users className="w-7 h-7 text-blue-800" />}
            {i % 6 === 4 && <Heart className="w-5 h-5 text-pink-700" />}
            {i % 6 === 5 && <Target className="w-6 h-6 text-indigo-700" />}
          </div>
        ))}
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Revolutionary Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-orange-600/10 backdrop-blur-xl rounded-2xl text-gray-800 mb-8 shadow-lg border-2 border-blue-200/30">
            <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
            <span className="font-bold text-lg bg-gradient-to-r from-blue-700 to-orange-700 bg-clip-text text-transparent">
              Success Stories & Testimonials
            </span>
            <Sparkles className="w-5 h-5 ml-3 text-orange-600" />
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8 text-gray-900">
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Client Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover why industry leaders trust us with their automation needs and how we've 
            transformed their operations with measurable, game-changing results that speak for themselves.
          </p>

          {/* Enhanced Control Panel */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <button
              onClick={toggleAutoplay}
              className={`flex items-center px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl border-2 shadow-lg ${
                isPlaying 
                  ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-700 border-green-300/50 hover:shadow-green-500/25'
                  : 'bg-gradient-to-r from-gray-500/10 to-gray-600/10 text-gray-700 border-gray-300/50 hover:shadow-gray-500/25'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Stories' : 'Play Stories'}
            </button>
            <div className="flex items-center px-6 py-4 bg-white/60 backdrop-blur-xl rounded-2xl border-2 border-blue-200/30 shadow-lg">
              <div className="text-gray-600 text-sm mr-2 font-medium">Story</div>
              <div className="text-gray-900 font-bold text-lg">
                {selectedIndex + 1} / {testimonials.length}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revolutionary Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative py-12"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="embla__slide px-6">
                      <motion.div
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(-1)}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ModernCard 
                          variant={index % 2 === 0 ? 'primary' : 'secondary'} 
                          hoverable={false}
                          className="mx-auto max-w-4xl"
                        >
                          <div className="p-10 lg:p-16">
                            {/* Enhanced Header */}
                            <div className="flex items-center justify-between mb-10">
                              <div className="flex items-center space-x-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                  >
                                    <Star className="w-7 h-7 text-yellow-500 fill-current drop-shadow-lg" />
                                  </motion.div>
                                ))}
                              </div>
                              <div className="flex items-center gap-4">
                                <div className={`px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl rounded-full border-2 border-blue-200/30`}>
                                  <span className="text-gray-700 text-sm font-bold">{testimonial.industry}</span>
                                </div>
                                <div className={`px-4 py-2 bg-gradient-to-r from-orange-600/10 to-red-600/10 backdrop-blur-xl rounded-full border-2 border-orange-200/30`}>
                                  <span className="text-gray-700 text-sm font-bold">{testimonial.badge}</span>
                                </div>
                              </div>
                            </div>

                            {/* Enhanced Quote Section */}
                            <div className="relative mb-12">
                              <div className="absolute -top-6 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-xl border-2 border-blue-300/30">
                                <Quote className="w-8 h-8 text-blue-600" />
                              </div>
                              <blockquote className="text-gray-800 text-2xl lg:text-3xl leading-relaxed font-medium pl-16 relative">
                                <span className="bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent">
                                  "{testimonial.testimonial}"
                                </span>
                              </blockquote>
                            </div>

                            {/* Enhanced Results Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                              {testimonial.results.map((result, resultIndex) => (
                                <motion.div
                                  key={resultIndex}
                                  className="relative bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl rounded-2xl p-6 text-center border-2 border-blue-200/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{ duration: 0.5, delay: resultIndex * 0.1 }}
                                  whileHover={{ y: -4 }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl"></div>
                                  <div className="relative z-10">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                      <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-gray-800 font-bold text-lg">{result}</div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Enhanced Author Section */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6">
                                <div className="relative">
                                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${testimonial.avatar} flex items-center justify-center text-white text-2xl font-black shadow-2xl border-4 border-white/50`}>
                                    {testimonial.initials}
                                  </div>
                                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                                <div>
                                  <h3 className="text-3xl font-black text-gray-900 mb-1">{testimonial.name}</h3>
                                  <p className="text-blue-700 font-bold text-lg mb-1">{testimonial.position}</p>
                                  <p className="text-gray-600 text-base font-medium">{testimonial.company}</p>
                                </div>
                              </div>
                              
                              {/* Enhanced Company Badge */}
                              <div className="hidden md:block">
                                <div className="w-20 h-20 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl rounded-3xl flex items-center justify-center border-2 border-blue-200/30 shadow-lg hover:scale-110 transition-all duration-300">
                                  <Award className="w-10 h-10 text-blue-600" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </ModernCard>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Futuristic Navigation */}
            <button 
              onClick={scrollPrev}
              className="absolute left-[-100px] top-1/2 -translate-y-1/2 z-10 w-18 h-18 flex items-center justify-center bg-white/80 backdrop-blur-2xl rounded-full border-2 border-blue-300/50 text-blue-700 hover:bg-white hover:border-blue-400 hover:text-blue-800 transition-all duration-300 transform hover:scale-110 shadow-2xl group"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button 
              onClick={scrollNext}
              className="absolute right-[-100px] top-1/2 -translate-y-1/2 z-10 w-18 h-18 flex items-center justify-center bg-white/80 backdrop-blur-2xl rounded-full border-2 border-blue-300/50 text-blue-700 hover:bg-white hover:border-blue-400 hover:text-blue-800 transition-all duration-300 transform hover:scale-110 shadow-2xl group"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-between mt-12 px-4">
              <button 
                onClick={scrollPrev}
                className="w-14 h-14 flex items-center justify-center bg-white/80 backdrop-blur-xl rounded-full border-2 border-blue-300/50 text-blue-700 hover:bg-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={scrollNext}
                className="w-14 h-14 flex items-center justify-center bg-white/80 backdrop-blur-xl rounded-full border-2 border-blue-300/50 text-blue-700 hover:bg-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Enhanced Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-500 relative overflow-hidden ${
                    index === selectedIndex 
                      ? 'w-16 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/50' 
                      : 'w-5 h-5 bg-gray-300 rounded-full hover:bg-gray-400 hover:scale-125 border-2 border-white shadow-md'
                  }`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ultra-Modern Trust Indicators */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ModernCard className="p-16 max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-orange-600/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Trusted by Industry Leaders
                </span>
              </h3>
              <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
                Join hundreds of companies that have transformed their operations with our solutions
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    5.0★
                  </div>
                  <div className="text-gray-600 font-semibold">Average Rating</div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    150+
                  </div>
                  <div className="text-gray-600 font-semibold">Success Stories</div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    99%
                  </div>
                  <div className="text-gray-600 font-semibold">Client Retention</div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-gray-600 font-semibold">Expert Support</div>
                </div>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Revolutionary Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-5xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-orange-700 bg-clip-text text-transparent">
                Ready to Join Our Success Stories?
              </span>
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can transform your business operations and deliver the same 
              game-changing results for your organization. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 border-2 border-transparent hover:border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center">
                  Start Your Success Story
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </button>
              
              <button className="group px-12 py-5 bg-white/80 backdrop-blur-xl text-gray-800 font-black text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white">
                <span className="flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                  View More Stories
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .embla { 
          overflow: hidden; 
        }
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
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-15px) rotate(90deg) scale(1.1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(1.2); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-15px) rotate(270deg) scale(1.1); 
            opacity: 0.4;
          }
        }
        
        .animate-float {
          animation: float 18s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        @keyframes pulse-border {
          0%, 100% { 
            border-color: rgba(59, 130, 246, 0.3);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
          }
          50% { 
            border-color: rgba(59, 130, 246, 0.6);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.2);
          }
        }
        
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        
        /* Enhanced hover effects */
        .group:hover .group-hover\\:animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        
        /* Glassmorphism enhancement */
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
        
        /* Custom gradient animations */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }
        
        /* Enhanced card shadows */
        .modern-card-shadow {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 20px 25px -5px rgba(59, 130, 246, 0.1),
            0 10px 10px -5px rgba(59, 130, 246, 0.04);
        }
        
        .modern-card-shadow-hover {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.15),
            0 0 60px -15px rgba(59, 130, 246, 0.2);
        }
        
        /* Parallax effect for background elements */
        @keyframes parallax-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-40px) translateX(20px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-20px) translateX(10px) rotate(270deg); 
          }
        }
        
        .animate-parallax {
          animation: parallax-float 25s ease-in-out infinite;
        }
        
        /* Enhanced button effects */
        .btn-modern {
          position: relative;
          overflow: hidden;
        }
        
        .btn-modern::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
        }
        
        .btn-modern:hover::before {
          animation: shimmer 1s ease-in-out;
        }
        
        /* Responsive enhancements */
        @media (max-width: 768px) {
          .embla__slide {
            padding: 0 12px;
          }
          
          .mobile-optimized {
            padding: 24px 16px;
          }
        }
        
        /* Light theme optimizations */
        .light-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(59, 130, 246, 0.2);
        }
        
        .light-card:hover {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-8px) scale(1.02);
        }
        
        /* Performance optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Custom focus styles for accessibility */
        .focus-visible\\:ring-modern:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.6);
        }
        
        /* Text gradient effects */
        .text-gradient-blue {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .text-gradient-orange {
          background: linear-gradient(135deg, #f97316, #ea580c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Enhanced star animations */
        @keyframes star-twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        .animate-twinkle {
          animation: star-twinkle 2s ease-in-out infinite;
        }
        
        /* Modern scroll behavior */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar styling */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
}