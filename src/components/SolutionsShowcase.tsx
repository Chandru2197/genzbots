// File: components/SolutionsShowcase.tsx
"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { IconCircleDashedCheck } from '@tabler/icons-react';

interface SolutionsShowcaseProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface SolutionTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features_label:string;
  features: string[];
  highlight: string;
  button_label: string;
  image: string;
  svg: string;
}

export default function SolutionsShowcase({ addToRefs }: SolutionsShowcaseProps) {
  const [activeTab, setActiveTab] = useState('automation');

  // Only the heading/title gets parallax
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
      features_label:"We automate your:",
      features: [
        'Invoice processing',
        'Data entry',
        'Report generation'
      ],
      highlight: 'Like hiring 2 FTEs for 1/10th the cost',
      button_label: 'Free Time Calculator',
      image: 'bg-blue-100',
      svg: '/assets/svgs/undraw_process.svg',
    },
    {
      id: 'integration',
      label: 'Profit Rescue Kit',
      title: 'Stop Losing Money to Human Errors',
      description: 'Break down data silos with our comprehensive data integration solutions. We connect disparate systems, databases, and applications to enable smooth data flow across your organization, providing a unified view of your business information.',
      features_label:"Automatically catch:",
      features: [
        'Overpayments',
        'Missed billings',
        'Compliance gaps'
      ],
      highlight: 'Recovered $240K/year for a mid-size law firm',
      button_label: 'See Recovery Bot in Action ',
      image: 'bg-green-100',
      svg: '/assets/svgs/undraw_robotics.svg',
    },
    {
      id: 'rpa',
      label: 'Growth Accelerator',
      title: 'Scale Operations Without Hiring',
      description: 'Our RPA solutions deploy software robots to handle high-volume, rule-based tasks with precision and speed. These digital workers operate 24/7, freeing your human talent to focus on more strategic, creative, and customer-facing activities.',
      features_label:"Our bots become your:",
      features: [
        '24/7 sales ops team',
        'Instant customer service rep',
        'AI-powered analyst'
      ],
      highlight: 'Helped 8-figure startups grow with zero added headcount',
      button_label: 'Match a Bot to Your Goal',
      image: 'bg-purple-100',
      svg: '/assets/svgs/undraw_automation.svg',
    },
    {
      id: 'custom',
      label: 'Custom Bot Development',
      title: 'Tailor-Made Solutions for Your Business',
      description: `When off-the-shelf software doesn't meet your needs, our custom development team creates bespoke applications specifically designed for your unique business requirements, ensuring perfect alignment with your processes and goals.`,
      features_label:"We automate your:",
      features: [
        'Requirements analysis and planning',
        'User-centered design process',
        'Agile development methodology',
        'Comprehensive testing and QA',
        'Ongoing maintenance and support'
      ],
      highlight: 'Like hiring 2 FTEs for 1/10th the cost',
      button_label: 'See Recovery Bot in Action ',
      image: 'bg-orange-100',
      svg: '/assets/svgs/undraw_online_learning.svg',
    },
    // {
    //   id: 'ai',
    //   label: 'Support & Continuous Improvement',
    //   title: 'Intelligent Automation Solutions',
    //   description: 'Leverage the power of artificial intelligence and machine learning to unlock predictive capabilities and intelligent automation. Our AI solutions learn from data patterns to make decisions, optimize processes, and deliver actionable insights.',
    //   features_label:"We automate your:",
    //   features: [
    //     'Predictive analytics models',
    //     'Natural language processing',
    //     'Computer vision solutions',
    //     'Decision support systems',
    //     'Continuous learning algorithms'
    //   ],
    //   highlight: 'Like hiring 2 FTEs for 1/10th the cost',
    //   image: 'bg-red-100',
    //   svg: '/assets/svgs/undraw_support.svg',
    // }
  ];
  const getActiveSolution = () => {
    return solutions.find(solution => solution.id === activeTab) || solutions[0];
  };

  const activeSolution = getActiveSolution();
  const activeIndex = solutions.findIndex(s => s.id === activeTab);

  return (
    <section id="solutions" className="py-0 min-h-screen flex items-center mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Decorative background/image with parallax (optional) */}
        {/* <motion.div
          ref={decorativeRef}
          data-speed="0.05"
          className="parallax absolute inset-0 pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          // Place your decorative SVG, gradient, or image here
        </motion.div> */}

        {/* Heading with parallax */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              Our Solutions
            </h2>
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div> */}
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive suite of automation solutions
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="w-full max-w-7xl mx-auto mb-1">
          <div className="flex justify-between items-center w-full">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                className={`flex-1 px-2 py-2 text-xs sm:text-sm transition-all duration-300 whitespace-nowrap relative
                  ${activeTab === solution.id
                    ? "bg-[#FF5722] text-white"
                    : "text-[#FF5722] hover:bg-[#FF5722]/10 cursor-pointer"
                  }
                  ${index !== solutions.length - 1 ? "border-r border-[#FF5722]/30" : ""}
                `}
                onClick={() => setActiveTab(solution.id)}
              >
                <span className="hidden sm:inline">{solution.label}</span>
                <span className="sm:hidden">{solution.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

      
        {/* Content Section */}
        <div className="relative z-10 mb-10">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center min-h-screen`}>
            {activeIndex % 2 === 0 ? (
              <>
                {/* Image Side */}
                <div className="md:w-full">
                  <div className="relative h-[400px] md:h-[500px] w-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)/10] to-[var(--color-secondary)/10] rounded-2xl blur-xl transform transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative w-full h-full transform transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center p-8"
                        >
                          <Image
                            src={activeSolution.svg}
                            alt={activeSolution.label}
                            fill
                            style={{
                              objectFit: 'contain',
                              padding: '1rem'
                            }}
                            className="transition-transform duration-300 group-hover:scale-110"
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
                  className="md:w-full p-1 md:p-1 relative"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none animate-gradient-border bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] blur-sm opacity-60"></div>
                  {/* Glassmorphism Card */}
                  <div className="relative z-10 bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 border border-white/30">
                    {/* Decorative SVG/Shape */}
                    <svg className="absolute -top-8 -right-8 w-24 h-24 opacity-20 z-0" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="48" stroke="#FF5722" strokeWidth="4" fill="#FF8A65" fillOpacity="0.2" />
                    </svg>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">{activeSolution.title}</h2>
                    <p className="text-gray-700 dark:text-gray-200 mb-8 text-md">{activeSolution.description}</p>
                    <h4 className="text-md font-semibold mb-6 text-[var(--color-secondary)] underline underline-offset-8">{activeSolution.features_label}</h4>
                    <ul className="space-y-1">
                      {activeSolution.features.map((feature, index) => (
                        <motion.li
                          key={feature+index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {/* <svg className="w-5 h-5 text-[var(--color-secondary)] mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg> */}
                          <IconCircleDashedCheck color='#FF5722' className='p-1'/>
                          <span className="text-gray-700 text-sm dark:text-gray-200">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <button
                        className="w-auto group relative py-1 px-4 rounded-none flex items-center justify-center transition-all duration-300 bg-[var(--color-secondary)] text-white border-2 border-transparent hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] cursor-pointer shadow-lg hover:shadow-[0_0_20px_4px_rgba(255,87,34,0.3)] focus:ring-2 focus:ring-[#FF5722] focus:ring-offset-2"
                        >
                        {activeSolution.button_label}
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* Content Side */}
                <motion.div
                  key={activeTab + '-content'}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
                  className="md:w-full p-1 md:p-1 relative"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none animate-gradient-border bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] blur-sm opacity-60"></div>
                  {/* Glassmorphism Card */}
                  <div className="relative z-10 bg-white dark:bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 border border-white/30">
                    {/* Decorative SVG/Shape */}
                    <svg className="absolute -top-8 -right-8 w-24 h-24 opacity-20 z-0" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="48" stroke="#FF5722" strokeWidth="4" fill="#FF8A65" fillOpacity="0.2" />
                    </svg>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">{activeSolution.title}</h2>
                    <p className="text-gray-700 dark:text-gray-200 mb-8 text-md">{activeSolution.description}</p>
                    <h4 className="text-md font-semibold mb-6 text-[var(--color-secondary)] underline underline-offset-8">{activeSolution.features_label}</h4>
                    <ul className="space-y-1">
                      {activeSolution.features.map((feature, index) => (
                        <motion.li
                          key={feature+index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          {/* <svg className="w-6 h-6 text-[var(--color-secondary)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg> */}
                            <IconCircleDashedCheck color='#FF5722' className='p-1'/>
                          <span className="text-gray-700 text-sm dark:text-gray-200 ">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <button
                        className="w-auto group relative py-1 px-4 rounded-none flex items-center justify-center transition-all duration-300 bg-[var(--color-secondary)] text-white border-2 border-transparent hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] cursor-pointer shadow-lg hover:shadow-[0_0_20px_4px_rgba(255,87,34,0.3)] focus:ring-2 focus:ring-[#FF5722] focus:ring-offset-2"
                      >
                        {activeSolution.button_label}
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
                {/* Image Side */}
                <div className="md:w-full">
                  <div className="relative h-[400px] md:h-[500px] w-full group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)/10] to-[var(--color-secondary)/10] rounded-2xl blur-xl transform transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative w-full h-full transform transition-all duration-300 group-hover:scale-105 overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="absolute inset-0 flex items-center justify-center p-8"
                        >
                          <Image
                            src={activeSolution.svg}
                            alt={activeSolution.label}
                            fill
                            style={{
                              objectFit: 'contain',
                              padding: '1rem'
                            }}
                            className="transition-transform duration-300 group-hover:scale-110"
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
    </section>
  );
}

/* Add this to your global CSS or Tailwind config for the animated gradient border */
/*
@keyframes gradient-border {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
.animate-gradient-border {
  background-size: 200% 200%;
  animation: gradient-border 3s linear infinite alternate;
}
*/