"use client";

import Image from 'next/image';
import React,{ useState, useRef, useEffect } from 'react';
import SafeLink from '@/components/ui/SafeLink';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Clock, 
  TrendingUp,
  Shield,
  Brain,
  Target,
  Rocket
} from 'lucide-react';

interface SolutionsShowcaseProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface SolutionTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features_label: string;
  features: string[];
  highlight: string;
  button_label: string;
  href: string;
  image: string;
  svg: string;
}

export default function SolutionsShowcase({ addToRefs }: SolutionsShowcaseProps) {
  const [activeTab, setActiveTab] = useState('automation');
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    // if (addToRefs && headingRef.current) addToRefs(headingRef.current);
  }, [addToRefs]);

  const solutions: SolutionTab[] = [
    {
      id: 'automation',
      label: 'Time Liberation Package',
      title: 'Get Back 15 Hours/Week Guaranteed',
      description: 'Our process automation solutions help businesses eliminate repetitive tasks, minimize errors, and speed up operations. We analyze your existing workflows and identify opportunities for automation, implementing tailored solutions that drive efficiency.',
      features_label: "We automate your:",
      features: [
        'Invoice processing',
        'Data entry',
        'Report generation'
      ],
      highlight: 'Like hiring 2 FTEs for 1/10th the cost',
      button_label: 'Free Time Calculator',
      href: '/solutions/time-liberation',
      image: 'bg-blue-100',
      svg: '/assets/svgs/undraw_process.svg',
    },
    {
      id: 'integration',
      label: 'Profit Rescue Kit',
      title: 'Stop Losing Money to Human Errors',
      description: 'Break down data silos with our comprehensive data integration solutions. We connect disparate systems, databases, and applications to enable smooth data flow across your organization, providing a unified view of your business information.',
      features_label: "Automatically catch:",
      features: [
        'Overpayments',
        'Missed billings',
        'Compliance gaps'
      ],
      highlight: 'Recovered $240K/year for a mid-size law firm',
      button_label: 'See Recovery Bot in Action',
      href: '/solutions/profit-rescue',
      image: 'bg-green-100',
      svg: '/assets/svgs/undraw_robotics.svg',
    },
    {
      id: 'rpa',
      label: 'Growth Accelerator',
      title: 'Scale Operations Without Hiring',
      description: 'Our RPA solutions deploy software robots to handle high-volume, rule-based tasks with precision and speed. These digital workers operate 24/7, freeing your human talent to focus on more strategic, creative, and customer-facing activities.',
      features_label: "Our bots become your:",
      features: [
        '24/7 sales ops team',
        'Instant customer service rep',
        'AI-powered analyst'
      ],
      highlight: 'Helped 8-figure startups grow with zero added headcount',
      button_label: 'Match a Bot to Your Goal',
      href: '/solutions/growth-accelerator',
      image: 'bg-purple-100',
      svg: '/assets/svgs/undraw_automation.svg',
    },
    {
      id: 'custom',
      label: 'Custom Bot Development',
      title: 'Tailor-Made Solutions for Your Business',
      description: `When off-the-shelf software doesn't meet your needs, our custom development team creates bespoke applications specifically designed for your unique business requirements, ensuring perfect alignment with your processes and goals.`,
      features_label: "We deliver:",
      features: [
        'Requirements analysis and planning',
        'User-centered design process',
        'Agile development methodology',
        'Comprehensive testing and QA',
        'Ongoing maintenance and support'
      ],
      highlight: 'Fully customized automation for unique workflows',
      button_label: 'Start Custom Development',
      href: '/solutions/custombot-development',
      image: 'bg-orange-100',
      svg: '/assets/svgs/undraw_online_learning.svg',
    },
  ];

  const getActiveSolution = () => {
    return solutions.find(solution => solution.id === activeTab) || solutions[0];
  };

  const activeSolution = getActiveSolution();
  const activeIndex = solutions.findIndex(s => s.id === activeTab);

  const cardColors = [
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500', 
    'from-purple-500 to-indigo-500',
    'from-orange-500 to-red-500'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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
            {i % 4 === 0 && <Target className="w-6 h-6 text-blue-400" />}
            {i % 4 === 1 && <Brain className="w-8 h-8 text-cyan-400" />}
            {i % 4 === 2 && <Shield className="w-5 h-5 text-green-400" />}
            {i % 4 === 3 && <Rocket className="w-7 h-7 text-purple-400" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white mb-8 shadow-lg">
            <Zap className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Our Solutions</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Automation Suite
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of automation solutions designed to transform 
            your business operations and drive unprecedented efficiency.
          </p>
        </motion.div>

        {/* Enhanced Tabs Navigation */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  className={`relative px-4 py-6 text-center transition-all duration-300 rounded-xl overflow-hidden group ${
                    activeTab === solution.id
                      ? `bg-gradient-to-r ${cardColors[index]} text-white shadow-lg scale-105`
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(solution.id)}
                >
                  {/* Animated background for active tab */}
                  {activeTab === solution.id && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${cardColors[index]} flex items-center justify-center shadow-lg ${
                      activeTab === solution.id ? 'bg-white/20' : ''
                    }`}>
                      {index === 0 && <Clock className="w-6 h-6" />}
                      {index === 1 && <TrendingUp className="w-6 h-6" />}
                      {index === 2 && <Rocket className="w-6 h-6" />}
                      {index === 3 && <Brain className="w-6 h-6" />}
                    </div>
                    <span className="font-semibold text-sm lg:text-base block leading-tight">
                      {solution.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]`}>
              {activeIndex % 2 === 0 ? (
                <>
                  {/* Image Side */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8">
                      <div className="relative w-full h-full max-w-md mx-auto group">
                        {/* Glowing background */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${cardColors[activeIndex]} opacity-20 rounded-3xl blur-xl transform transition-all duration-500 group-hover:scale-110`}></div>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative z-10 w-full h-full flex items-center justify-center"
                          >
                            <Image
                              src={activeSolution.svg}
                              alt={activeSolution.label}
                              width={400}
                              height={400}
                              className="w-full h-auto max-h-96 object-contain transform transition-transform duration-500 group-hover:scale-110"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <motion.div
                    key={activeTab + '-content'}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
                    className="p-8 lg:p-12 flex flex-col justify-center"
                  >
                    <div className="space-y-8">
                      {/* Header */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cardColors[activeIndex]} mr-3 animate-pulse`}></div>
                          <span className={`text-sm font-semibold bg-gradient-to-r ${cardColors[activeIndex]} bg-clip-text text-transparent uppercase tracking-wider`}>
                            {activeSolution.label}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                          {activeSolution.title}
                        </h2>
                        <p className="text-blue-200 text-lg leading-relaxed">
                          {activeSolution.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${cardColors[activeIndex]} bg-clip-text text-transparent`}>
                          {activeSolution.features_label}
                        </h4>
                        <ul className="space-y-3">
                          {activeSolution.features.map((feature, index) => (
                            <motion.li
                              key={feature + index}
                              className="flex items-center group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardColors[activeIndex]} mr-4 group-hover:scale-125 transition-transform duration-300`}></div>
                              <span className="text-white/90 group-hover:text-white transition-colors duration-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlight */}
                      <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <Sparkles className={`w-5 h-5 mr-2 text-yellow-400`} />
                          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">Success Story</span>
                        </div>
                        <p className="text-white font-medium">{activeSolution.highlight}</p>
                      </div>

                      {/* CTA Button */}
                      <SafeLink href={activeSolution.href}>
                        <button className={`w-full lg:w-auto px-8 py-4 bg-gradient-to-r ${cardColors[activeIndex]} text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          <span className="relative flex items-center justify-center lg:justify-start">
                            {/* {activeSolution.button_label} */}
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>
                      </SafeLink>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Content Side (Left) */}
                  <motion.div
                    key={activeTab + '-content'}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
                    className="p-8 lg:p-12 flex flex-col justify-center"
                  >
                    <div className="space-y-8">
                      {/* Header */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cardColors[activeIndex]} mr-3 animate-pulse`}></div>
                          <span className={`text-sm font-semibold bg-gradient-to-r ${cardColors[activeIndex]} bg-clip-text text-transparent uppercase tracking-wider`}>
                            {activeSolution.label}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                          {activeSolution.title}
                        </h2>
                        <p className="text-blue-200 text-lg leading-relaxed">
                          {activeSolution.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${cardColors[activeIndex]} bg-clip-text text-transparent`}>
                          {activeSolution.features_label}
                        </h4>
                        <ul className="space-y-3">
                          {activeSolution.features.map((feature, index) => (
                            <motion.li
                              key={feature + index}
                              className="flex items-center group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardColors[activeIndex]} mr-4 group-hover:scale-125 transition-transform duration-300`}></div>
                              <span className="text-white/90 group-hover:text-white transition-colors duration-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Highlight */}
                      <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm">
                        <div className="flex items-center mb-2">
                          <Sparkles className={`w-5 h-5 mr-2 text-yellow-400`} />
                          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">Success Story</span>
                        </div>
                        <p className="text-white font-medium">{activeSolution.highlight}</p>
                      </div>

                      {/* CTA Button */}
                      <SafeLink href={activeSolution.href}>
                        <button className={`w-full lg:w-auto px-8 py-4 bg-gradient-to-r ${cardColors[activeIndex]} text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          <span className="relative flex items-center justify-center lg:justify-start">
                            {/* {activeSolution.button_label} */}
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>
                      </SafeLink>
                    </div>
                  </motion.div>

                  {/* Image Side (Right) */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent"></div>
                    <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-8">
                      <div className="relative w-full h-full max-w-md mx-auto group">
                        {/* Glowing background */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${cardColors[activeIndex]} opacity-20 rounded-3xl blur-xl transform transition-all duration-500 group-hover:scale-110`}></div>
                        
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative z-10 w-full h-full flex items-center justify-center"
                          >
                            <Image
                              src={activeSolution.svg}
                              alt={activeSolution.label}
                              width={400}
                              height={400}
                              className="w-full h-auto max-h-96 object-contain transform transition-transform duration-500 group-hover:scale-110"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
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