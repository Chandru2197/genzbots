"use client"
import React,{ useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Sparkles, 
  Clock, 
  Award,
  Target,
  Heart,
  Rocket,
  Star,
  Globe,
  Code,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Layers,
  Database
} from 'lucide-react';
import SafeLink from '@/components/ui/SafeLink';

interface AboutSectionProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const ModernCard = ({ 
  children, 
  variant = 'primary', 
  hoverable = true, 
  className = '' 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'accent'; 
  hoverable?: boolean; 
  className?: string; 
}) => (
  <div className={`
    relative bg-white/90 backdrop-blur-2xl rounded-3xl border-2 border-blue-200/40 shadow-2xl
    ${hoverable ? 'hover:bg-white/95 hover:scale-[1.02] hover:border-blue-300/60 hover:shadow-[0_25px_70px_-12px_rgba(59,130,246,0.3)]' : ''}
    transition-all duration-500 ease-out overflow-hidden
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-orange-50/60 rounded-3xl"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const AnimatedBox = ({ 
  size = 'w-4 h-4',
  color = 'bg-blue-500',
  delay = 0,
  duration = 8,
  style = {}
}: {
  size?: string;
  color?: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}) => (
  <div
    className={`absolute ${size} ${color} rounded-lg opacity-20 animate-geometric-float shadow-lg`}
    style={{
      ...style,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  />
);

export default function AboutSection({ addToRefs }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredStat, setHoveredStat] = useState(-1);

  useEffect(() => {
    if (addToRefs && sectionRef.current) {
      addToRefs(sectionRef.current);
    }
  }, [addToRefs]);

  const stats = [
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      value: "250+", 
      label: "Workflows Automated", 
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      value: "98%", 
      label: "Client Retention Rate", 
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-500/10 to-teal-500/10"
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      value: "50+", 
      label: "RPA Specialists", 
      color: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-500/10 to-indigo-500/10"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: "12+", 
      label: "Industries Optimized", 
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
  ];

  const values = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Target className="w-7 h-7" />,
      content: "Pioneering the Future of Automation, Built for the Next Generation. Founded in 2025, GenZbots is redefining business automation with AI-driven RPA solutions designed for agility, scalability, and the digital-first era.",
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      highlight: 'AI-driven automation'
    },
    {
      id: 'vision', 
      title: 'Our Vision',
      icon: <Rocket className="w-7 h-7" />,
      content: "We empower startups and enterprises to break free from repetitive tasks and unlock productivity with smart, intuitive bots that learn and adapt to your business needs.",
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'from-purple-500/10 to-indigo-500/10',
      highlight: 'Smart automation'
    },
    {
      id: 'promise',
      title: 'Our Promise',
      icon: <Heart className="w-7 h-7" />,
      content: "We're not just a vendor—we're your automation co-pilots. Our team of Gen-Z engineers and automation veterans bridges the gap between technical innovation and real-world business needs.",
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-500/10 to-red-500/10',
      highlight: 'Strategic partnership'
    }
  ];

  const achievements = [
    { title: "Global Reach", desc: "Dual innovation hubs in India & US", icon: <Globe className="w-7 h-7" />, color: "from-blue-600 to-cyan-600" },
    { title: "Expert Team", desc: "Gen-Z innovation meets veteran experience", icon: <Users className="w-7 h-7" />, color: "from-emerald-600 to-teal-600" },
    { title: "Proven Results", desc: "Measurable ROI from day one", icon: <TrendingUp className="w-7 h-7" />, color: "from-purple-600 to-indigo-600" },
    { title: "Future-Ready", desc: "Platform-agnostic AI solutions", icon: <Lightbulb className="w-7 h-7" />, color: "from-orange-600 to-red-600" }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Revolutionary Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-orange-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        
        {/* Animated geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.05)_2px,transparent_2px)] bg-[size:80px_80px] animate-grid-flow"></div>
        
        {/* Floating geometric shapes */}
        {[...Array(40)].map((_, i) => {
          const shapes = ['square', 'triangle', 'circle', 'diamond', 'hexagon'];
          const shapeType = shapes[i % shapes.length];
          const colors = [
            'bg-blue-600', 'bg-cyan-600', 'bg-purple-600', 
            'bg-indigo-600', 'bg-orange-600', 'bg-red-600',
            'bg-emerald-600', 'bg-teal-600'
          ];
          const sizes = ['w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8'];
          
          return (
            <div
              key={i}
              className="absolute opacity-20 animate-geometric-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {shapeType === 'square' && (
                <div className={`${sizes[Math.floor(Math.random() * sizes.length)]} ${colors[Math.floor(Math.random() * colors.length)]} rounded-lg shadow-lg transform rotate-45`}></div>
              )}
              {shapeType === 'triangle' && (
                <div className={`w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent ${colors[Math.floor(Math.random() * colors.length)].replace('bg-', 'border-b-')} shadow-lg`}></div>
              )}
              {shapeType === 'circle' && (
                <div className={`${sizes[Math.floor(Math.random() * sizes.length)]} ${colors[Math.floor(Math.random() * colors.length)]} rounded-full shadow-lg`}></div>
              )}
              {shapeType === 'diamond' && (
                <div className={`${sizes[Math.floor(Math.random() * sizes.length)]} ${colors[Math.floor(Math.random() * colors.length)]} rounded-lg shadow-lg transform rotate-45`}></div>
              )}
              {shapeType === 'hexagon' && (
                <div className={`w-6 h-6 ${colors[Math.floor(Math.random() * colors.length)]} shadow-lg`} style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
              )}
            </div>
          );
        })}
        
        {/* Flowing data streams */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent animate-data-flow"
            style={{
              left: `${10 + (i * 12)}%`,
              height: '100%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '8s'
            }}
          />
        ))}
        
        {/* Pulsing nodes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-node shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Revolutionary Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-orange-600/10 backdrop-blur-xl rounded-2xl text-gray-800 mb-8 shadow-lg border-2 border-blue-200/30">
            <Users className="w-6 h-6 mr-3 text-blue-600" />
            <span className="font-bold text-lg bg-gradient-to-r from-blue-700 to-orange-700 bg-clip-text text-transparent">
              About GenZBot - Innovation Redefined
            </span>
            <Sparkles className="w-5 h-5 ml-3 text-orange-600" />
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8 text-gray-900">
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Empowering
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Where next-generation automation meets enterprise excellence. We're building the future 
            of intelligent business processes with cutting-edge AI and human creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Revolutionary Image Section */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Multi-layered glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl transform rotate-3 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-orange-600/20 to-pink-600/20 rounded-3xl blur-2xl transform -rotate-3 scale-105 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container with holographic effects */}
              <div className="relative h-96 lg:h-[600px] w-full group">
                {/* Holographic border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-orange-500/30 rounded-3xl transform rotate-1 transition-transform duration-500 group-hover:rotate-2 border-2 border-white/30 animate-holographic"></div>
                
                {/* Main card with advanced glassmorphism */}
                <ModernCard className="h-full transform transition-all duration-500 group-hover:scale-105">
                  <div className="h-full p-8 flex flex-col justify-center items-center relative overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.3),transparent_50%)]"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.3),transparent_50%)]"></div>
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Rocket className="w-12 h-12 text-white" />
                      </div>
                      
                      <h3 className="text-4xl font-black text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                          Innovation Hub
                        </span>
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Where cutting-edge technology meets real-world business solutions. 
                        Our innovation lab continuously develops next-generation automation tools.
                      </p>
                      
                      {/* Feature icons */}
                      <div className="grid grid-cols-3 gap-6">
                        {[
                          { icon: <Code className="w-8 h-8" />, label: 'AI Development' },
                          { icon: <Database className="w-8 h-8" />, label: 'Data Analytics' },
                          { icon: <Layers className="w-8 h-8" />, label: 'System Integration' }
                        ].map((item, index) => (
                          <div key={index} className="text-center group/item">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover/item:scale-110 transition-transform duration-300 border-2 border-blue-200/30">
                              <div className="text-blue-600">
                                {item.icon}
                              </div>
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCard>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce border-4 border-white/50">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse border-4 border-white/50">
                  <Shield className="w-8 h-8" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-32 h-32">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-orbit-1"></div>
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full animate-orbit-2"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-orbit-3"></div>
                  </div>
                </div>
              </div>

              {/* Decorative geometric elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 border-4 border-blue-400/30 rounded-3xl transform rotate-45 animate-spin-slow"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 border-4 border-orange-400/30 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Revolutionary Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-10">
              {values.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 border-2 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg border-transparent`
                      : 'bg-white/60 text-gray-700 hover:bg-white/80 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`mr-3 ${activeTab === tab.id ? 'text-white' : 'text-gray-600'}`}>
                    {tab.icon}
                  </div>
                  <span className="hidden sm:inline">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Enhanced Tab Content */}
            <ModernCard className="mb-10 overflow-hidden">
              <div className="p-10">
                {values.map((tab) => (
                  <motion.div
                    key={tab.id}
                    className={activeTab === tab.id ? 'block' : 'hidden'}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${tab.color} rounded-3xl flex items-center justify-center mr-6 shadow-2xl`}>
                        <div className="text-white">
                          {tab.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-gray-900 mb-1">{tab.title}</h3>
                        <div className={`px-3 py-1 bg-gradient-to-r ${tab.bgColor} rounded-full`}>
                          <span className="text-gray-700 text-sm font-medium">{tab.highlight}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{tab.content}</p>
                  </motion.div>
                ))}
              </div>
            </ModernCard>

            {/* Revolutionary Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(-1)}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <ModernCard className="h-full cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl opacity-50`}></div>
                    <div className="relative z-10 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-xl transform transition-transform duration-300 ${hoveredStat === index ? 'scale-110 rotate-12' : ''}`}>
                          {stat.icon}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                          <span className="text-green-600 text-xs font-bold">LIVE</span>
                        </div>
                      </div>
                      <div className={`text-4xl lg:text-5xl font-black text-gray-900 mb-3 transition-colors duration-300 ${hoveredStat === index ? 'text-transparent bg-gradient-to-r bg-clip-text ' + stat.color : ''}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium leading-tight">{stat.label}</div>
                    </div>
                  </ModernCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Revolutionary Promise Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ModernCard className="p-16 max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl flex items-center justify-center mr-6 shadow-2xl">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-5xl font-black text-gray-900">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Our Promise to You
                  </span>
                </h4>
              </div>
              
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
                We're not just a vendor—we're your automation co-pilots. Let's build, optimize, and scale together. 
                Our team combines the innovation of Gen-Z engineers with the experience of automation veterans.
              </p>

              {/* Enhanced promise features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: <Clock className="w-8 h-8" />, title: "24/7 Partnership", desc: "Round-the-clock support and continuous optimization", color: "from-cyan-600 to-blue-600" },
                  { icon: <TrendingUp className="w-8 h-8" />, title: "Guaranteed Growth", desc: "Measurable ROI and performance improvements", color: "from-emerald-600 to-teal-600" },
                  { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation First", desc: "Cutting-edge solutions that evolve with technology", color: "from-yellow-600 to-orange-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <ModernCard className="p-8 h-full text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </ModernCard>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced call to action */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <SafeLink href="/contact">
                  <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 border-2 border-transparent hover:border-white/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center">
                      Start Your Journey
                      <Rocket className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </button>
                </SafeLink>
                
                <SafeLink href="/solutions">
                  <button className="group px-12 py-5 bg-white/80 backdrop-blur-xl text-gray-800 font-black text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white">
                    <span className="flex items-center justify-center">
                      <Star className="w-6 h-6 mr-3 text-yellow-500" />
                      Explore Solutions
                    </span>
                  </button>
                </SafeLink>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Revolutionary Team Excellence Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Why Choose GenZBot?
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We bridge the gap between technical innovation and real-world business needs 
              with next-generation solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                whileHover={{ y: -12, scale: 1.05 }}
              >
                <ModernCard className="h-full text-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                    
                    {/* Achievement indicator */}
                    <div className="flex items-center justify-center mt-6">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-green-600 text-sm font-medium">Verified Excellence</span>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revolutionary Innovation Timeline */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                Our Innovation Journey
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From startup vision to enterprise excellence - our commitment to innovation never stops
            </p>
          </div>

          <ModernCard className="p-12 max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    year: "2025", 
                    title: "Foundation", 
                    desc: "GenZBot founded with vision to revolutionize automation",
                    icon: <Rocket className="w-8 h-8" />,
                    color: "from-blue-600 to-cyan-600"
                  },
                  { 
                    year: "Present", 
                    title: "Innovation", 
                    desc: "Leading AI-powered automation solutions across industries",
                    icon: <Lightbulb className="w-8 h-8" />,
                    color: "from-purple-600 to-indigo-600"
                  },
                  { 
                    year: "Future", 
                    title: "Evolution", 
                    desc: "Next-gen autonomous systems and quantum automation",
                    icon: <Target className="w-8 h-8" />,
                    color: "from-orange-600 to-red-600"
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${milestone.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <div className="text-white">
                        {milestone.icon}
                      </div>
                    </div>
                    <div className={`text-3xl font-black text-transparent bg-gradient-to-r ${milestone.color} bg-clip-text mb-3`}>
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes geometric-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-20px) rotate(90deg) scale(1.1); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-40px) rotate(180deg) scale(1.2); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-20px) rotate(270deg) scale(1.1); 
            opacity: 0.4;
          }
        }
        
        .animate-geometric-float {
          animation: geometric-float 20s ease-in-out infinite;
        }
        
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        
        @keyframes data-flow {
          0% { 
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        .animate-data-flow {
          animation: data-flow 8s linear infinite;
        }
        
        @keyframes pulse-node {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.5);
            opacity: 1;
          }
        }
        
        .animate-pulse-node {
          animation: pulse-node 3s ease-in-out infinite;
        }
        
        @keyframes holographic {
          0% { 
            background: linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(251,146,60,0.3));
          }
          33% { 
            background: linear-gradient(45deg, rgba(139,92,246,0.3), rgba(251,146,60,0.3), rgba(59,130,246,0.3));
          }
          66% { 
            background: linear-gradient(45deg, rgba(251,146,60,0.3), rgba(59,130,246,0.3), rgba(139,92,246,0.3));
          }
          100% { 
            background: linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(251,146,60,0.3));
          }
        }
        
        .animate-holographic {
          animation: holographic 4s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes orbit-1 {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(64px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(64px) rotate(-360deg); }
        }
        
        @keyframes orbit-2 {
          0% { transform: translate(50%, -50%) rotate(120deg) translateX(64px) rotate(-120deg); }
          100% { transform: translate(50%, -50%) rotate(480deg) translateX(64px) rotate(-480deg); }
        }
        
        @keyframes orbit-3 {
          0% { transform: translate(-50%, 50%) rotate(240deg) translateX(64px) rotate(-240deg); }
          100% { transform: translate(-50%, 50%) rotate(600deg) translateX(64px) rotate(-600deg); }
        }
        
        .animate-orbit-1 {
          animation: orbit-1 8s linear infinite;
        }
        
        .animate-orbit-2 {
          animation: orbit-2 10s linear infinite;
        }
        
        .animate-orbit-3 {
          animation: orbit-3 12s linear infinite;
        }
        
        /* Enhanced glassmorphism */
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
          animation: gradient-shift 6s ease infinite;
        }
        
        /* Enhanced card shadows */
        .modern-card-shadow {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            0 25px 50px -12px rgba(59, 130, 246, 0.15),
            0 15px 15px -5px rgba(59, 130, 246, 0.08);
        }
        
        /* Button hover effects */
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
          transition: all 0.6s;
        }
        
        .btn-holographic:hover::before {
          animation: shimmer 1s ease-in-out;
        }
        
        @keyframes shimmer {
          0% { transform: rotate(45deg) translateX(-200%); }
          100% { transform: rotate(45deg) translateX(200%); }
        }
        
        /* Responsive optimizations */
        @media (max-width: 768px) {
          .mobile-optimized {
            padding: 16px;
          }
          
          .text-responsive {
            font-size: clamp(1rem, 4vw, 1.5rem);
          }
        }
        
        /* Performance optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Light theme enhancements */
        .light-gradient-text {
          background: linear-gradient(135deg, #1e40af, #7c3aed, #dc2626);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Custom focus styles */
        .focus-visible\\:ring-modern:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.6);
        }
        
        /* Advanced animations */
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        /* Scroll-triggered animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}