import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Building,
  Lightbulb,
  Heart,
  ThumbsUp,
  Settings,
  Leaf,
  User,
  Calendar,
  Check,
  ArrowRight,
  Zap,
  Target,
  Globe,
  Rocket,
  Shield,
  Brain,
  Infinity
} from 'lucide-react';

// Enhanced Stats Component with Advanced Animations
const Stats = ({ items, id, hasBackground = false }) => {
  const [visibleStats, setVisibleStats] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, duration = 2500, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!visibleStats) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, visibleStats]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const iconMap = {
    'Workflows Automated': { icon: Zap, color: 'from-blue-500 to-cyan-400' },
    'Client Retention Rate': { icon: Award, color: 'from-amber-500 to-orange-400' },
    'RPA Specialists': { icon: Users, color: 'from-purple-500 to-pink-400' },
    'Industries Optimized': { icon: Building, color: 'from-green-500 to-emerald-400' }
  };

  return (
    <section 
      ref={statsRef}
      className={`py-24 relative overflow-hidden ${hasBackground ? 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50' : 'bg-white'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-6 border border-blue-200">
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wide">Our Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Transforming Businesses
            </span>
            <br />
            <span className="text-slate-700">Across Industries</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our automation solutions have delivered measurable results, helping companies 
            streamline operations and achieve unprecedented efficiency.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ title, description }, index) => {
            const iconData = iconMap[description] || { icon: Award, color: 'from-blue-500 to-indigo-500' };
            const IconComponent = iconData.icon;
            
            return (
              <div
                key={`stat-${index}`}
                className="group text-center transform transition-all duration-700 hover:scale-110"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  animation: visibleStats ? 'slideInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${iconData.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-3 bg-gradient-to-r ${iconData.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-white/60 rounded-full animate-ping`}
                        style={{
                          top: `${20 + i * 25}%`,
                          left: `${15 + i * 30}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Number Display */}
                <div className="mb-4">
                  <div className="text-5xl lg:text-6xl font-bold text-slate-800 mb-2">
                    <AnimatedCounter 
                      end={title} 
                      suffix={description === 'Client Retention Rate' ? '%' : '+'} 
                    />
                  </div>
                  
                  <div className="h-1 w-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform group-hover:scale-x-150 transition-transform duration-300"></div>
                </div>
                
                {/* Description */}
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            <span>See Our Case Studies</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

// Premium Hero2 Component
const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border border-white/20 rotate-45 animate-float"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Interactive Mouse Trail */}
        <div 
          className="absolute w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            {/* Tagline Badge */}
            {tagline && (
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-bold uppercase tracking-wider">{tagline}</span>
                <Rocket className="w-4 h-4 ml-2" />
              </div>
            )}
            
            {/* Main Title */}
            {title && (
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-white mb-2">Pioneering the</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  Future of
                </span>
                <span className="block text-white">Automation</span>
              </h1>
            )}
            
            {/* Subtitle */}
            <div className="mb-10">
              {subtitle && (
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6">
                  {subtitle}
                </p>
              )}
              
              {/* Key Points */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {['AI-Driven RPA', 'Scalable Solutions', 'Digital-First Era'].map((point, index) => (
                  <div key={index} className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-sm text-gray-300 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {callToAction && (
                <a
                  href={callToAction.href}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {callToAction.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              )}
              
              {callToAction2 && (
                <a
                  href={callToAction2.href}
                  className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {callToAction2.text}
                  <Heart className="w-5 h-5 ml-2 group-hover:text-red-400 transition-colors duration-200" />
                </a>
              )}
            </div>
          </div>
          
          {/* Image/Visual Section */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="relative">
                  {/* Custom Automation/RPA Illustration */}
                  <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 h-full">
                        {[...Array(64)].map((_, i) => (
                          <div key={i} className="border border-blue-300"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main Automation Visual */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      {/* Central Robot/Bot Icon */}
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <Brain className="w-16 h-16 text-white" />
                        </div>
                        
                        {/* Orbiting Elements representing automation */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                          {/* Document Processing */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-lg">
                            <Check className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Data Analytics */}
                          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Process Automation */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Workflow Management */}
                          <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                            <Settings className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        {/* Connection Lines */}
                        <div className="absolute inset-0">
                          {/* Animated lines connecting elements */}
                          <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            
                            {/* Animated connecting lines */}
                            <circle
                              cx="100"
                              cy="100"
                              r="60"
                              fill="none"
                              stroke="url(#line-gradient)"
                              strokeWidth="2"
                              strokeDasharray="10 5"
                              className="animate-spin"
                              style={{ animationDuration: '8s', animationDirection: 'reverse' }}
                            />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Floating Data Points */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse"
                          style={{
                            top: `${20 + (i * 15)}%`,
                            left: `${15 + (i * 12)}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Bottom Text Labels */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-blue-600 font-medium">
                      <span>RPA</span>
                      <span>AI</span>
                      <span>Automation</span>
                    </div>
                  </div>
                  
                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-60 animate-bounce delay-300 blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-60 animate-bounce delay-700 blur-sm"></div>
              
              {/* Tech Icons */}
              <div className="absolute top-4 right-4 space-y-3">
                {[Brain, Zap, Target].map((Icon, index) => (
                  <div key={index} className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto mb-2">
            <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
          <p className="text-white/60 text-sm">Scroll to explore</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Interactive Steps Component
const Steps = ({ id, header, items, isImageDisplayed = true, image, isReversed = false, hasBackground = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  const Timeline = ({ items, defaultIcon, iconClass }) => (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-12 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-lg"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => {
          const IconComponent = defaultIcon;
          const isActive = index === activeStep;
          const isHovered = index === hoveredStep;
          
          return (
            <div
              key={index}
              className="relative flex items-start cursor-pointer group"
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Timeline Node */}
              <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 scale-110' 
                  : isHovered
                  ? 'bg-gradient-to-r from-blue-400 to-indigo-500 scale-105'
                  : 'bg-white border-4 border-blue-200 hover:border-blue-400'
              }`}>
                <IconComponent className={`w-10 h-10 transition-colors duration-300 ${
                  isActive || isHovered ? 'text-white' : 'text-blue-600'
                }`} />
                
                {/* Number Badge */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isActive ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                }`}>
                  {index + 1}
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-full blur-xl transition-opacity duration-300 ${
                  isActive || isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="ml-8 flex-1">
                <div className={`bg-white rounded-2xl p-8 shadow-lg border transition-all duration-500 transform ${
                  isActive 
                    ? 'border-blue-300 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-indigo-50' 
                    : isHovered
                    ? 'border-blue-200 shadow-xl scale-102'
                    : 'border-gray-100 hover:border-blue-100 hover:shadow-xl'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-blue-700' : isHovered ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    
                    {/* Progress Indicator */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i <= index ? 'bg-blue-500' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="mt-6">
                    <button className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const Headline = ({ header, containerClass, titleClass, subtitleClass }) => (
    <div className={`mb-16 ${containerClass}`}>
      {header.tagline && (
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 mb-8 border border-blue-200">
          <Calendar className="w-5 h-5 mr-3" />
          <span className="text-sm font-bold uppercase tracking-wider">
            {header.tagline}
          </span>
        </div>
      )}
      
      {header.title && (
        <h2 className={`${titleClass} font-bold mb-6`}>
          <span className="bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
            {header.title}
          </span>
        </h2>
      )}
      
      {header.subtitle && (
        <p className={`text-xl text-slate-600 leading-relaxed max-w-4xl ${subtitleClass}`}>
          {header.subtitle}
        </p>
      )}
    </div>
  );

  return (
    <section className={`py-24 ${hasBackground ? 'bg-gradient-to-br from-slate-50 to-blue-50' : 'bg-white'} relative overflow-hidden`}>
      {hasBackground && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''} ${
          isImageDisplayed ? 'lg:flex-row' : ''
        }`}>
          <div className={`${
            isImageDisplayed ? 'lg:w-1/2' : 'max-w-5xl mx-auto'
          }`}>
            {header && (
              <Headline
                header={header}
                containerClass={isImageDisplayed ? 'text-left' : 'text-center'}
                titleClass="text-4xl lg:text-5xl"
                subtitleClass={isImageDisplayed ? 'text-left' : 'text-center mx-auto'}
              />
            )}
            
            <Timeline items={items} defaultIcon={Check} iconClass="text-primary border-primary-900" />
          </div>
          
          {isImageDisplayed && (
            <div className="lg:w-1/2">
              {image && (
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <img
                    src={image.src}
                    width={400}
                    height={768}
                    alt={image.alt}
                    className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Premium Features4 Component
const Features4 = ({ id, hasBackground, header, isAfterContent, columns = 1, items = [] }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const valueIcons = {
    'Innovation-First Mindset': { icon: Lightbulb, color: 'from-purple-500 to-pink-500' },
    'Scalable Excellence': { icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    'Human-Centric Automation': { icon: User, color: 'from-blue-500 to-cyan-500' },
    'Agile Adaptability': { icon: Settings, color: 'from-orange-500 to-red-500' },
    'Transparent Partnership': { icon: Heart, color: 'from-indigo-500 to-purple-500' },
    'Future-Ready Solutions': { icon: Infinity, color: 'from-teal-500 to-green-500' }
  };

  return (
    <section className={`py-24 ${hasBackground ? 'bg-gradient-to-br from-slate-50 to-blue-50' : 'bg-white'} relative overflow-hidden`}>
      {hasBackground && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {header && (
          <div className="text-center mb-20">
            {header.tagline && (
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 mb-8 border border-blue-200">
                <Shield className="w-5 h-5 mr-3" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  {header.tagline}
                </span>
              </div>
            )}
            
            {header.title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                  {header.title}
                </span>
              </h2>
            )}
            
            {header.subtitle && (
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {header.subtitle}
              </p>
            )}
          </div>
        )}
        
        {items.length > 0 && (
          <div className={`grid gap-8 ${columns === 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {items.map((item, index) => {
              const iconData = valueIcons[item.title] || { icon: User, color: 'from-blue-500 to-purple-500' };
              const IconComponent = iconData.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div 
                  key={index} 
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${iconData.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-blue-200 overflow-hidden">
                    {/* Card Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <div className={`w-full h-full bg-gradient-to-br ${iconData.color} rounded-full blur-2xl`}></div>
                    </div>
                    
                    {/* Icon Section */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${iconData.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute inset-0 overflow-hidden">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${iconData.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700`}
                            style={{
                              top: `${20 + i * 20}%`,
                              left: `${60 + i * 15}%`,
                              animationDelay: `${i * 0.2}s`,
                              animation: isHovered ? `float 2s ease-in-out infinite` : 'none'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-blue-700 transition-all duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {item.description}
                    </p>
                    
                    {/* Action Button */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                      <div className={`h-full bg-gradient-to-r ${iconData.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

// Demo Page with All Enhanced Components
const AboutUsPage = () => {
  // GenZBots specific data
  const statsData = {
    items: [
      { title: 100, description: 'Workflows Automated' },
      { title: 95, description: 'Client Retention Rate' },
      { title: 30, description: 'RPA Specialists' },
      { title: 8, description: 'Industries Optimized' }
    ],
    id: 'stats-on-about',
    hasBackground: true
  };

  const heroData = {
    title: 'Pioneering the Future of Automation, Built for the Next Generation',
    subtitle: 'Founded in 2025, GenZbots is redefining business automation with AI-driven RPA solutions designed for agility, scalability, and the digital-first era. We empower startups and enterprises to break free from repetitive tasks and unlock productivity with smart, intuitive bots that learn and adapt.',
    tagline: 'About GenZBot',
    callToAction: {
      text: 'Explore Services',
      href: '/services',
      targetBlank: false,
    },
    callToAction2: {
      text: 'Contact Us',
      href: '/contact',
    },
    image: {
      src: '/assets/svgs/Illustration1.png',
      alt: 'GenZBot Automation Solutions',
    }
  };

  const stepsData = {
    id: 'steps-on-about',
    hasBackground: true,
    isImageDisplayed: false,
    header: {
      title: 'Our Automation Journey',
      subtitle: 'From vision to reality - how we built the future of intelligent automation, transforming businesses one process at a time.',
      tagline: 'Company Evolution',
    },
    items: [
      {
        title: 'Foundation & Vision',
        description: 'Founded in 2020 with a bold vision to democratize automation for the next generation of businesses through intelligent RPA solutions.',
      },
      {
        title: 'Platform Development',
        description: 'Developed our core AI-driven automation platform, focusing on user-friendly interfaces and rapid deployment capabilities.',
      },
      {
        title: 'Market Expansion',
        description: 'Scaled operations globally, serving diverse industries from healthcare to finance, proving our platform\'s versatility.',
      },
      {
        title: 'AI Integration',
        description: 'Integrated advanced AI capabilities, enabling predictive automation and self-learning bots that adapt to changing business needs.',
      },
      {
        title: 'Future Innovation',
        description: 'Continuing to pioneer next-generation automation technologies, leading the industry into a new era of intelligent process optimization.',
      }
    ]
  };

  const valuesData = {
    id: 'features-four-on-about-two',
    hasBackground: false,
    header: {
      title: 'Our core values',
      subtitle: 'The principles that drive our mission to transform businesses through intelligent automation.',
      tagline: 'Core Values'
    },
    isAfterContent: true,
    columns: 2,
    items: [
      {
        title: 'Innovation-First Mindset',
        description: 'We continuously push the boundaries of what\'s possible in automation, developing cutting-edge solutions that anticipate future business needs.',
      },
      {
        title: 'Scalable Excellence',
        description: 'From startups to enterprises, we design solutions that grow with your business, ensuring consistent performance at any scale.',
      },
      {
        title: 'Human-Centric Automation',
        description: 'We believe automation should enhance human potential, not replace it. Our solutions free teams to focus on strategic, creative work.',
      },
      {
        title: 'Agile Adaptability',
        description: 'In a rapidly changing digital landscape, we build flexible solutions that evolve with market demands and technological advances.',
      },
      {
        title: 'Transparent Partnership',
        description: 'We work as an extension of your team, providing clear communication, honest timelines, and ongoing support throughout your automation journey.',
      },
      {
        title: 'Future-Ready Solutions',
        description: 'Every solution we create is designed with tomorrow in mind, ensuring your automation investment remains valuable as technology evolves.',
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero2 {...heroData} />
      <Stats {...statsData} />
      <Features4 {...valuesData} />
      <Steps {...stepsData} />
      
      {/* Additional CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
            <Rocket className="w-5 h-5 mr-3" />
            <span className="text-sm font-bold uppercase tracking-wider">Ready to Transform?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Start Your Automation
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of companies already using GenZBot to automate their workflows, 
            reduce costs, and unlock unprecedented efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>Get Started Free</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>Schedule Demo</span>
              <Calendar className="w-6 h-6 ml-3" />
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['Fortune 500', 'SME Ready', '24/7 Support', 'ISO Certified'].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;