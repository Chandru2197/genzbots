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
  Lock,
  TrendingUp,
  Layers,
  Star,
  ChevronRight
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
    subtitle: "Intelligent workflow optimization",
    description: "Transform your business operations with AI-powered automation that adapts and learns",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    cardGradient: "from-slate-900 via-violet-900/50 to-slate-900",
    glowColor: "shadow-violet-500/50",
    primaryColor: "violet",
    accentColor: "purple",
    icon: <Target className="w-7 h-7" />,
    features: [
      "Real-time process monitoring",
      "Predictive analytics integration", 
      "Custom workflow builder",
      "ROI tracking dashboard"
    ],
    stats: { 
      accuracy: "99.2%", 
      speed: "3.5x faster", 
      volume: "10K+ tasks/day",
      satisfaction: "4.9/5"
    },
    badge: "Most Popular",
    link: "#"
  },
  {
    title: "Smart Integration",
    subtitle: "Seamless system connectivity",
    description: "Connect disparate systems with intelligent APIs and real-time data synchronization",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    cardGradient: "from-slate-900 via-emerald-900/50 to-slate-900",
    glowColor: "shadow-emerald-500/50",
    primaryColor: "emerald",
    accentColor: "teal",
    icon: <Layers className="w-7 h-7" />,
    features: [
      "API-first architecture",
      "Real-time data sync",
      "Cross-platform compatibility",
      "Advanced error handling"
    ],
    stats: { 
      accuracy: "99.8%", 
      speed: "Real-time", 
      volume: "1M+ API calls/day",
      satisfaction: "4.8/5"
    },
    badge: "Enterprise Ready",
    link: "#"
  },
  {
    title: "Data Analytics",
    subtitle: "Advanced business intelligence",
    description: "Unlock hidden insights with machine learning-powered analytics and predictive modeling",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    cardGradient: "from-slate-900 via-blue-900/50 to-slate-900",
    glowColor: "shadow-blue-500/50",
    primaryColor: "blue",
    accentColor: "indigo",
    icon: <TrendingUp className="w-7 h-7" />,
    features: [
      "Predictive modeling",
      "Interactive dashboards",
      "Custom report generation",
      "Real-time alerts"
    ],
    stats: { 
      accuracy: "97.5%", 
      speed: "Sub-second", 
      volume: "5TB+ processed",
      satisfaction: "4.7/5"
    },
    badge: "AI-Powered",
    link: "#"
  },
  {
    title: "AI-Powered Automation",
    subtitle: "Next-gen intelligent systems",
    description: "Leverage cutting-edge AI to automate complex decision-making and adaptive workflows",
    gradient: "from-pink-600 via-rose-600 to-red-700",
    cardGradient: "from-slate-900 via-pink-900/50 to-slate-900",
    glowColor: "shadow-pink-500/50",
    primaryColor: "pink",
    accentColor: "rose",
    icon: <Brain className="w-7 h-7" />,
    features: [
      "Neural network processing",
      "Adaptive learning algorithms",
      "Natural language understanding",
      "Computer vision integration"
    ],
    stats: { 
      accuracy: "99.7%", 
      speed: "Milliseconds", 
      volume: "Unlimited scale",
      satisfaction: "4.9/5"
    },
    badge: "Revolutionary",
    link: "#"
  },
  {
    title: "Cloud Migration",
    subtitle: "Future-proof infrastructure",
    description: "Seamlessly migrate to cloud with zero downtime and enhanced security protocols",
    gradient: "from-sky-600 via-blue-600 to-indigo-700",
    cardGradient: "from-slate-900 via-sky-900/50 to-slate-900",
    glowColor: "shadow-sky-500/50",
    primaryColor: "sky",
    accentColor: "blue",
    icon: <Shield className="w-7 h-7" />,
    features: [
      "Zero-downtime migration",
      "Multi-cloud architecture",
      "Automated scaling",
      "Cost optimization"
    ],
    stats: { 
      accuracy: "100%", 
      speed: "24/7 uptime", 
      volume: "Enterprise scale",
      satisfaction: "4.8/5"
    },
    badge: "Reliable",
    link: "#"
  },
  {
    title: "Cybersecurity Solutions",
    subtitle: "Advanced threat protection",
    description: "Implement multi-layered security with AI-driven threat detection and response",
    gradient: "from-orange-600 via-red-600 to-pink-700",
    cardGradient: "from-slate-900 via-orange-900/50 to-slate-900",
    glowColor: "shadow-orange-500/50",
    primaryColor: "orange",
    accentColor: "red",
    icon: <Lock className="w-7 h-7" />,
    features: [
      "AI threat detection",
      "Real-time monitoring",
      "Automated response",
      "Compliance management"
    ],
    stats: { 
      accuracy: "99.9%", 
      speed: "Real-time", 
      volume: "24/7 protection",
      satisfaction: "4.9/5"
    },
    badge: "Security First",
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
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden"
    >
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(30,144,255,0.3),transparent_50%)]"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"></div>
          </div>
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl text-white mb-8 shadow-lg border border-violet-500/30">
            <Rocket className="w-6 h-6 mr-3 text-violet-400" />
            <span className="font-semibold text-lg bg-gradient-to-r from-violet-200 to-purple-200 bg-clip-text text-transparent">
              Innovation Portfolio
            </span>
            <Sparkles className="w-5 h-5 ml-3 text-purple-400" />
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-6 text-white">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover cutting-edge automation solutions that redefine industry standards 
            with measurable impact and transformative technology.
          </p>

          {/* Control panel */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <button
              onClick={toggleAutoplay}
              className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-xl border ${
                isPlaying 
                  ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30 shadow-lg shadow-green-500/25'
                  : 'bg-gradient-to-r from-gray-600/20 to-gray-700/20 text-gray-300 border-gray-500/30 shadow-lg shadow-gray-500/25'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause Showcase' : 'Play Showcase'}
            </button>
            <div className="flex items-center px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="text-white/60 text-sm mr-2">Project</div>
              <div className="text-white font-semibold">
                {selectedIndex + 1} / {projects.length}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revolutionary Carousel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative px-4 py-16 max-w-7xl mx-auto"
        >
          <div className="relative">
            <div className="embla overflow-hidden mx-16" ref={emblaRef}>
              <div className="embla__container">
                {projects.map((project, index) => (
                  <div key={index} className="embla__slide px-4 py-8">
                    <motion.div 
                      className="relative h-[700px] group cursor-pointer"
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(-1)}
                      whileHover={{ y: -8, rotateY: 2, scale: 1.02 }}
                      style={{ 
                        perspective: '1000px',
                        transformOrigin: 'center center'
                      }}
                    >
                      {/* Holographic glow effect */}
                      <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 rounded-3xl blur-2xl transform transition-all duration-700 group-hover:scale-105`}></div>
                      
                      {/* Main card with glassmorphism */}
                      <div className={`relative h-full bg-gradient-to-br ${project.cardGradient} rounded-3xl border border-white/10 overflow-hidden shadow-2xl ${project.glowColor} backdrop-blur-xl`}>
                        {/* Dynamic mesh gradient overlay */}
                        <div className="absolute inset-0 opacity-30">
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`}></div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                        </div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-3xl">
                          <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'subtract' }}></div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative h-full flex flex-col p-8 z-10">
                          {/* Header with enhanced styling */}
                          <div className="flex items-center justify-between mb-8">
                            <div className={`relative w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border-2 border-white/20`}>
                              <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse"></div>
                              <div className="relative z-10">
                                {project.icon}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full mb-2 shadow-lg`}>
                                {project.badge}
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                                <span className="text-green-300 text-xs font-semibold tracking-wider">LIVE</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Title section with enhanced typography */}
                          <div className="mb-8">
                            <h3 className="text-3xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                              {project.title}
                            </h3>
                            <p className={`text-${project.primaryColor}-300 text-lg font-semibold mb-3`}>
                              {project.subtitle}
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed opacity-90">
                              {project.description}
                            </p>
                          </div>
                          
                          {/* Enhanced stats grid */}
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                              <div className={`text-xl font-bold text-${project.primaryColor}-400 mb-1`}>
                                {project.stats.accuracy}
                              </div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider">Accuracy</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                              <div className={`text-xl font-bold text-${project.accentColor}-400 mb-1`}>
                                {project.stats.speed}
                              </div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider">Speed</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                              <div className={`text-xl font-bold text-purple-400 mb-1`}>
                                {project.stats.volume}
                              </div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider">Volume</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                              <div className="text-xl font-bold text-yellow-400 mb-1 flex items-center">
                                <Star className="w-4 h-4 mr-1" />
                                {project.stats.satisfaction}
                              </div>
                              <div className="text-xs text-gray-400 uppercase tracking-wider">Rating</div>
                            </div>
                          </div>
                          
                          {/* Enhanced features list */}
                          <div className="flex-1 space-y-4 mb-8">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                              Core Features
                            </h4>
                            {project.features.map((feature, i) => (
                              <motion.div 
                                key={i} 
                                className="flex items-center p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-4 shadow-lg animate-pulse`}></div>
                                <span className="text-white/90 font-medium text-sm flex-1">{feature}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Revolutionary CTA Button */}
                          <div className="relative">
                            <button
                              className={`w-full py-5 px-8 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group-hover:shadow-2xl group-hover:${project.glowColor} border border-white/20`}
                            >
                              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-2xl"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                              <span className="relative flex items-center justify-center text-lg">
                                Explore Solution
                                <ArrowRight className={`w-5 h-5 ml-3 transition-transform duration-300 ${
                                  isHovered === index ? 'translate-x-2' : ''
                                }`} />
                              </span>
                            </button>
                            
                            {/* Floating action indicator */}
                            <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}>
                              <Zap className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Futuristic Navigation */}
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-xl group"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-xl group"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Advanced Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-4">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-500 relative ${
                    index === selectedIndex 
                      ? 'w-12 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full shadow-lg shadow-violet-500/50' 
                      : 'w-4 h-4 bg-white/20 rounded-full hover:bg-white/40 backdrop-blur-xl'
                  }`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Ultra-modern Stats Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-16 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Impact Metrics
                </span>
              </h3>
              <p className="text-gray-300 text-lg mb-12">Real results that drive transformation</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    250+
                  </div>
                  <div className="text-gray-300 font-semibold">Projects Delivered</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    99.2%
                  </div>
                  <div className="text-gray-300 font-semibold">Success Rate</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-gray-300 font-semibold">System Uptime</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300">
                    100+
                  </div>
                  <div className="text-gray-300 font-semibold">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{EMBLA_STYLES}</style>
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-10px) rotate(90deg) scale(1.1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(1.2); 
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-10px) rotate(270deg) scale(1.1); 
            opacity: 0.6;
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar for webkit browsers */
        .embla::-webkit-scrollbar {
          display: none;
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
          animation: gradient-shift 4s ease infinite;
        }
        
        /* Holographic effect */
        .holographic {
          background: linear-gradient(
            45deg,
            #ff0080,
            #7928ca,
            #ff8a00,
            #00d4ff,
            #ff0080
          );
          background-size: 400% 400%;
          animation: gradient-shift 3s ease infinite;
        }
        
        /* Enhanced card shadows */
        .card-shadow {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .card-shadow-hover {
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 60px -15px rgba(139, 92, 246, 0.3);
        }
        
        /* Parallax effect for background elements */
        @keyframes parallax-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-15px) translateX(5px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-30px) translateX(10px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-15px) translateX(5px) rotate(270deg); 
          }
        }
        
        .animate-parallax {
          animation: parallax-float 20s ease-in-out infinite;
        }
        
        /* Enhanced button effects */
        .btn-holographic {
          position: relative;
          overflow: hidden;
        }
        
        .btn-holographic::before {
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
          transition: all 0.5s;
        }
        
        .btn-holographic:hover::before {
          animation: shimmer 0.8s ease-in-out;
        }
        
        /* Responsive enhancements */
        @media (max-width: 768px) {
          .embla__slide {
            padding: 0 8px;
          }
          
          .card-mobile {
            height: 600px;
          }
        }
        
        /* Dark mode optimizations */
        @media (prefers-color-scheme: dark) {
          .backdrop-blur-xl {
            background-color: rgba(0, 0, 0, 0.1);
          }
        }
        
        /* Performance optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Custom focus styles for accessibility */
        .focus-visible\\:ring-holographic:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ProjectsCarousel;