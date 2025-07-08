"use client";

import React,{ useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CloudLightning, Rocket, Shield, Brain, Sparkles, Zap, TrendingUp, Clock } from 'lucide-react';

interface FeaturesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export const features = [
  {
    title: "15-Minute Bot Rescue",
    sub: "Emergency Fix Guarantee",
    description: "Broken bot? We diagnose & fix in <24 hours. 24/7 ER for your automation",
    key: ["Broken bot? We diagnose & fix in <24 hours", "24/7 ER for your automation"],
    color: "from-blue-400/20 to-blue-600/20",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))",
    icon: CloudLightning,
    backgroundSvg: "/assets/svgs/undraw_bug-fixing.svg",
    glowColor: "blue"
  },
  {
    title: "Pay-As-You-Grow",
    sub: "No Lock-In Scaling",
    description: "Start with 1 bot ($800), scale to 100+ with volume discounts",
    key: ["Start with 1 bot ($500)", "Scale to 100+ with volume discounts", "Only pay for what you use"],
    color: "from-orange-400/20 to-orange-600/20",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(234, 88, 12, 0.2))",
    icon: Rocket,
    backgroundSvg: "/assets/svgs/undraw_growth-analytics.svg",
    glowColor: "orange"
  },
  {
    title: "Invisible IT Team",
    sub: "Hands-Free Maintenance",
    description: "We monitor & optimize automatically with surprise quarterly upgrades",
    key: ["We monitor & optimize automatically", "Get surprise upgrades every quarter", "Forget tech debt exists"],
    color: "from-purple-400/20 to-purple-600/20",
    gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.2))",
    icon: Shield,
    backgroundSvg: "/assets/svgs/undraw_shared-workspace.svg",
    glowColor: "purple"
  },
  {
    title: "Future-Proof Bots",
    sub: "Self-Learning AI",
    description: "Bots improve from your team's habits and adapt automatically",
    key: ["Bots improve from your team's habits", "Auto-adapts to software updates", "Gets smarter while you sleep"],
    color: "from-green-400/20 to-green-600/20",
    gradient: "linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(22, 163, 74, 0.2))",
    icon: Brain,
    backgroundSvg: "/assets/svgs/undraw_ai-agent.svg",
    glowColor: "green"
  }
];

const FeatureCard = ({ feature, index, isActive, onClick }: { 
  feature: any; 
  index: number; 
  isActive: boolean; 
  onClick: () => void; 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const glowColors:any = {
    blue: "shadow-[0_0_50px_rgba(59,130,246,0.4)]",
    orange: "shadow-[0_0_50px_rgba(251,146,60,0.4)]",
    purple: "shadow-[0_0_50px_rgba(168,85,247,0.4)]",
    green: "shadow-[0_0_50px_rgba(34,197,94,0.4)]"
  };

  const borderColors:any = {
    blue: "border-blue-400/50",
    orange: "border-orange-400/50",
    purple: "border-purple-400/50",
    green: "border-green-400/50"
  };

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000 h-full"
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onClick={onClick}
    >
      <div 
        className={`relative h-full cursor-pointer transform-gpu transition-all duration-700 preserve-3d ${
          isActive ? 'rotate-y-180' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-3xl border-2 ${borderColors[feature.glowColor]} bg-white/10 backdrop-blur-xl overflow-hidden ${
          isHovered ? glowColors[feature.glowColor] : 'shadow-xl'
        } transition-all duration-500`}>
          
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50 ${isHovered ? 'animate-pulse' : ''}`}></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Image Section */}
            <div className="h-3/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
              <img 
                src={feature.backgroundSvg} 
                alt={feature.title} 
                className={`w-full h-full object-contain p-8 transition-transform duration-500 ${
                  isHovered ? 'scale-110 rotate-3' : 'scale-100'
                }`}
              />
              
              {/* Floating icon */}
              <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 ${
                isHovered ? 'animate-bounce' : ''
              }`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Text Section */}
            <div className="h-2/5 p-6 flex flex-col justify-center text-center">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-blue-200 font-medium text-lg opacity-90">
                {feature.sub}
              </p>
              
              {/* Click indicator */}
              <div className="mt-4 flex justify-center">
                <div className="flex items-center text-white/60 text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Click to explore
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl border-2 ${borderColors[feature.glowColor]} bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl overflow-hidden ${
          isActive ? glowColors[feature.glowColor] : 'shadow-xl'
        } transition-all duration-500`}>
          
          {/* Enhanced background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-30`}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <span className="text-white text-lg">×</span>
              </button>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
            
            {/* Feature points */}
            <div className="flex-1 space-y-4">
              {feature.key.map((point: string, pointIndex: number) => (
                <motion.div
                  key={pointIndex}
                  className="flex items-start p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                    feature.glowColor === 'blue' ? 'from-blue-400 to-cyan-400' :
                    feature.glowColor === 'orange' ? 'from-orange-400 to-red-400' :
                    feature.glowColor === 'purple' ? 'from-purple-400 to-pink-400' :
                    'from-green-400 to-emerald-400'
                  } mt-2 mr-3 flex-shrink-0`}></div>
                  <span className="text-white/90 leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Action button */}
            <button className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${
              feature.glowColor === 'blue' ? 'from-blue-500 to-cyan-500' :
              feature.glowColor === 'orange' ? 'from-orange-500 to-red-500' :
              feature.glowColor === 'purple' ? 'from-purple-500 to-pink-500' :
              'from-green-500 to-emerald-500'
            } text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturesSection({ addToRefs }: FeaturesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    // Don't add to parallax refs to prevent motion effects
  }, [addToRefs]);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-200 via-orange-300 to-orange-500 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
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
            {i % 5 === 0 && <Zap className="w-4 h-4 text-blue-400" />}
            {i % 5 === 1 && <TrendingUp className="w-6 h-6 text-cyan-400" />}
            {i % 5 === 2 && <Clock className="w-5 h-5 text-green-400" />}
            {i % 5 === 3 && <Shield className="w-7 h-7 text-purple-400" />}
            {i % 5 === 4 && <Sparkles className="w-3 h-3 text-orange-400" />}
          </div>
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white mb-8 shadow-lg">
            <Rocket className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Powerful Features</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Modern Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Automation
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our platform comes packed with advanced features designed to streamline your operations 
            and boost productivity with intelligent automation that learns and evolves.
          </p>
        </motion.div>

        {/* Interactive Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={idx}
              isActive={activeCard === idx}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>

        {/* Enhanced Stats Section */}
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-blue-200">Workflows Automated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-blue-200">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-blue-200">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-blue-200">Industry Sectors</div>
              </div>
            </div>
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
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}