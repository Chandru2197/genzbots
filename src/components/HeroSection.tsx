"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SafeLink from "@/components/ui/SafeLink";
import { ArrowRight, Sparkles, Zap, Clock, TrendingUp, Shield } from "lucide-react";

interface HeroSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function HeroSection({ addToRefs }: HeroSectionProps) {
  const heroText = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(heroText, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (heroImage.current) addToRefs(heroImage.current);
  }, [addToRefs]);

  const floatingStats = [
    { icon: <Clock className="w-5 h-5" />, value: "15hrs", label: "Saved Weekly", color: "from-blue-500 to-cyan-500" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "98.5%", label: "Accuracy", color: "from-green-500 to-emerald-500" },
    { icon: <Shield className="w-5 h-5" />, value: "24/7", label: "Monitoring", color: "from-purple-500 to-indigo-500" },
    { icon: <Zap className="w-5 h-5" />, value: "10x", label: "Faster", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Enhanced Background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {/* Floating geometric shapes */}
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
            <div className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full`}></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Main Content */}
          <motion.div
            ref={heroText}
            className="lg:w-1/2 text-center lg:text-left mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Badge */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white mb-8 shadow-lg backdrop-blur-md"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-semibold">Revolutionary Automation Platform</span>
              <Zap className="w-4 h-4 ml-2" />
            </motion.div> */}

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold leading-tight text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Simplify
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Automate
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Elevate
              </span>
            </motion.h1>

            <motion.h2 
              className="text-2xl lg:text-4xl font-bold leading-tight text-blue-100 mb-6 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-xl rounded-lg"></div>
              <span className="relative">Digital Workflow Solutions For Forward-Thinking Businesses</span>
            </motion.h2>

            <motion.p 
              className="text-xl text-blue-200 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              GenZbots specializes in intelligent RPA and AI solutions that transform
              manual processes into automated workflows, reducing costs and boosting
              efficiency for businesses across industries.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Explore Services
                  <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </button>

              <SafeLink href="/contact">
                <button className="group relative px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 backdrop-blur-md">
                  <span className="relative flex items-center justify-center">
                    Contact Us
                    <Sparkles className="w-5 h-5 ml-2 group-hover:animate-spin" />
                  </span>
                </button>
              </SafeLink>
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {floatingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-2 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            ref={heroImage}
            data-speed="0.05"
            className="lg:w-1/2 parallax"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-3xl blur-3xl transform rotate-3 scale-110"></div>
              
              {/* Main image container */}
              <div className="relative h-[500px] lg:h-[600px] w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-3xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e78c1] to-[#f75821] rounded-3xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <Image
                    src="/assets/svgs/undraw_firmware_3fxd.svg"
                    alt="GenZbots Automation"
                    fill
                    className="object-contain p-8 transform transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Floating tech icons */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md animate-bounce">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}