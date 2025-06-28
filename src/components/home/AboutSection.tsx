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
} from 'lucide-react';

interface AboutSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function AboutSection({ addToRefs }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    // No need to register parallax image since we're removing the effect
  }, [addToRefs]);

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, value: "100+", label: "Workflows Automated", color: "from-blue-500 to-cyan-500" },
    { icon: <Users className="w-8 h-8" />, value: "95%", label: "Client Retention Rate", color: "from-green-500 to-emerald-500" },
    { icon: <Shield className="w-8 h-8" />, value: "30+", label: "RPA Specialists", color: "from-purple-500 to-indigo-500" },
    { icon: <Award className="w-8 h-8" />, value: "8+", label: "Industries Optimized", color: "from-orange-500 to-red-500" },
  ];

  const values = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Target className="w-6 h-6" />,
      content: "Pioneering the Future of Automation, Built for the Next Generation. Founded in 2025, GenZbots is redefining business automation with AI-driven RPA solutions designed for agility, scalability, and the digital-first era.",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'vision', 
      title: 'Our Vision',
      icon: <Rocket className="w-6 h-6" />,
      content: "We empower startups and enterprises to break free from repetitive tasks and unlock productivity with smart, intuitive bots that learn and adapt to your business needs.",
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'promise',
      title: 'Our Promise',
      icon: <Heart className="w-6 h-6" />,
      content: "We're not just a vendor—we're your automation co-pilots. Our team of Gen-Z engineers and automation veterans bridges the gap between technical innovation and real-world business needs.",
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white mb-8 shadow-lg">
            <Users className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">About GenZBot</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Empowering
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-3xl transform rotate-3 scale-110"></div>
              
              {/* Main image container with enhanced effects */}
              <div className="relative h-96 lg:h-[500px] w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6 border border-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/assets/svgs/team-collaboration.svg"
                    alt="Team Collaboration"
                    fill
                    className="object-cover p-8 transform transition-transform duration-300 group-hover:scale-110"
                    draggable={false}
                    priority
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md animate-bounce">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tab Navigation */}
            <div className="flex space-x-2 mb-8">
              {values.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2 hidden sm:inline">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              {values.map((tab) => (
                <motion.div
                  key={tab.id}
                  className={activeTab === tab.id ? 'block' : 'hidden'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tab.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                      {tab.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{tab.title}</h3>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">{tab.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {stat.icon}
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Promise Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-white">Our Promise to You</h4>
            </div>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              We're not just a vendor—we're your automation co-pilots. Let's build, optimize, and scale together. 
              Our team combines the innovation of Gen-Z engineers with the experience of automation veterans.
            </p>

            {/* Enhanced promise features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Clock className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h5 className="text-lg font-bold text-white mb-2">24/7 Partnership</h5>
                <p className="text-blue-200 text-sm">Round-the-clock support and continuous optimization</p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h5 className="text-lg font-bold text-white mb-2">Guaranteed Growth</h5>
                <p className="text-blue-200 text-sm">Measurable ROI and performance improvements</p>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h5 className="text-lg font-bold text-white mb-2">Innovation First</h5>
                <p className="text-blue-200 text-sm">Cutting-edge solutions that evolve with technology</p>
              </div>
            </div>

            {/* Call to action */}
            <button className="mt-8 px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]">
              Start Your Journey
              <Rocket className="w-6 h-6 ml-3 inline" />
            </button>
          </div>
        </motion.div>

        {/* Team Excellence Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Why Choose GenZBot?</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We bridge the gap between technical innovation and real-world business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Global Reach", desc: "Dual hubs in India & US", icon: <Award className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
              { title: "Expert Team", desc: "Gen-Z innovation meets veteran experience", icon: <Users className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
              { title: "Proven Results", desc: "Measurable ROI from day one", icon: <TrendingUp className="w-6 h-6" />, color: "from-purple-500 to-indigo-500" },
              { title: "Future-Ready", desc: "Platform-agnostic solutions", icon: <Rocket className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center group"
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-blue-200 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
}