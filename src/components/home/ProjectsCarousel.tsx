"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Sparkles, 
  Zap, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause,
  Target,
  Brain,
  Shield,
  Rocket,
  Database,
  Lock
} from 'lucide-react';

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
    gradient: "from-blue-500 to-cyan-500",
    accent: "bg-blue-500",
    secondaryAccent: "bg-cyan-500",
    icon: <Target className="w-6 h-6" />,
    features: [
      "Process audit",
      "ROI estimation", 
      "Bot recommendation"
    ],
    stats: { accuracy: "98.5%", speed: "15s", volume: "500+" },
    link: "#"
  },
  {
    title: "Smart Integration",
    subtitle: "Connect all your systems",
    description: "Start now and streamline your workflow instantly",
    gradient: "from-green-500 to-emerald-500",
    accent: "bg-green-500",
    secondaryAccent: "bg-emerald-500",
    icon: <Brain className="w-6 h-6" />,
    features: [
      "Custom workflow diagram",
      "Timeline & pricing",
      "Integration checklist"
    ],
    stats: { accuracy: "99.2%", speed: "Real-time", volume: "1000+" },
    link: "#"
  },
  {
    title: "Data Analytics",
    subtitle: "Know everything about your data",
    description: "Start now and learn more about your business insights",
    gradient: "from-purple-500 to-indigo-500",
    accent: "bg-purple-500",
    secondaryAccent: "bg-indigo-500",
    icon: <Database className="w-6 h-6" />,
    features: [
      "Develop in agile sprints",
      "Share weekly demo videos",
      "Train your team via Discord"
    ],
    stats: { accuracy: "97.8%", speed: "5min", volume: "10K+" },
    link: "#"
  },
  {
    title: "AI-Powered Automation",
    subtitle: "Next-generation process intelligence",
    description: "Enhance your workflow with machine learning",
    gradient: "from-pink-500 to-rose-500",
    accent: "bg-pink-500",
    secondaryAccent: "bg-rose-500",
    icon: <Brain className="w-6 h-6" />,
    features: [
      "ML-powered predictions",
      "Intelligent document analysis", 
      "Adaptive learning systems"
    ],
    stats: { accuracy: "99.7%", speed: "Instant", volume: "Unlimited" },
    link: "#"
  },
  {
    title: "Cloud Migration",
    subtitle: "Modernize your infrastructure", 
    description: "Move your systems to a scalable cloud platform",
    gradient: "from-blue-600 to-sky-500",
    accent: "bg-blue-600",
    secondaryAccent: "bg-sky-500",
    icon: <Shield className="w-6 h-6" />,
    features: [
      "Zero-downtime migration",
      "Hybrid cloud setup",
      "Cost optimization strategy"
    ],
    stats: { accuracy: "100%", speed: "24/7", volume: "Enterprise" },
    link: "#"
  },
  {
    title: "Cybersecurity Solutions",
    subtitle: "Protect your digital assets",
    description: "Implement robust security measures",
    gradient: "from-red-600 to-orange-500",
    accent: "bg-red-600", 
    secondaryAccent: "bg-orange-500",
    icon: <Lock className="w-6 h-6" />,
    features: [
      "Threat detection systems",
      "End-to-end encryption",
      "Security compliance audits"
    ],
    stats: { accuracy: "99.9%", speed: "Real-time", volume: "24/7" },
    link: "#"
  }
];

const ProjectsCarousel = ({ addToRefs }: ProjectsCarouselProps) => {
  const [isHovered, setIsHovered] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const autoplayOptions = { delay: 4000, stopOnInteraction: false };
  const autoplayPlugin = Autoplay(autoplayOptions);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  }, [autoplayPlugin]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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

  const carouselRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(carouselRef, { once: true });

  return (
    <section 
      ref={carouselRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {[...Array(25)].map((_, i) => (
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
            {i % 6 === 0 && <Target className="w-4 h-4 text-blue-400" />}
            {i % 6 === 1 && <Brain className="w-6 h-6 text-cyan-400" />}
            {i % 6 === 2 && <Shield className="w-5 h-5 text-green-400" />}
            {i % 6 === 3 && <Rocket className="w-7 h-7 text-purple-400" />}
            {i % 6 === 4 && <Database className="w-5 h-5 text-pink-400" />}
            {i % 6 === 5 && <Lock className="w-4 h-4 text-orange-400" />}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white mb-8 shadow-lg">
            <Rocket className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Our Projects</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Automation Solutions
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Explore our portfolio of intelligent automation solutions that have transformed 
            businesses across industries with measurable results and cutting-edge technology.
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
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div className="text-white/60 text-sm">
              {selectedIndex + 1} of {projects.length}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative px-4 py-8 max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Embla Carousel */}
            <div className="embla overflow-hidden mx-16" ref={emblaRef}>
              <div className="embla__container">
                {projects.map((project, index) => (
                  <div key={index} className="embla__slide px-4 pb-6">
                    <motion.div 
                      className="relative h-[550px] group cursor-pointer"
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(-1)}
                      whileHover={{ y: -10 }}
                    >
                      {/* Glowing background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 rounded-3xl blur-xl transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110`}></div>
                      
                      {/* Main card */}
                      <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                        {/* Animated gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        {/* Content */}
                        <div className="relative h-full flex flex-col p-8">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                              {project.icon}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 text-xs font-semibold">ACTIVE</span>
                            </div>
                          </div>
                          
                          {/* Title and subtitle */}
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-blue-200 text-lg font-medium">{project.subtitle}</p>
                            <p className="text-blue-300 text-sm mt-2 opacity-80">{project.description}</p>
                          </div>
                          
                          {/* Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
                              <div className="text-lg font-bold text-cyan-400">{project.stats.accuracy}</div>
                              <div className="text-xs text-blue-200">Accuracy</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
                              <div className="text-lg font-bold text-green-400">{project.stats.speed}</div>
                              <div className="text-xs text-blue-200">Speed</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-3 text-center border border-white/20">
                              <div className="text-lg font-bold text-purple-400">{project.stats.volume}</div>
                              <div className="text-xs text-blue-200">Volume</div>
                            </div>
                          </div>
                          
                          {/* Features list */}
                          <div className="flex-1 space-y-3 mb-6">
                            {project.features.map((feature, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-3 shadow-lg`}></div>
                                <span className="text-white/90 font-medium text-sm">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* CTA Button */}
                          <button
                            className={`w-full py-4 px-6 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]`}
                          >
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <span className="relative flex items-center justify-center">
                              Learn More
                              <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                                isHovered === index ? 'translate-x-2' : ''
                              }`} />
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Navigation */}
            <button 
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Enhanced Pagination */}
            <div className="flex items-center justify-center mt-8 space-x-3">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full' 
                      : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                  }`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-8">Project Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98.5%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-blue-200">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-blue-200">Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{EMBLA_STYLES}</style>
      <style jsx>{`
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
};

export default ProjectsCarousel;