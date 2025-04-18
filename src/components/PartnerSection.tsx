// File: components/SolutionsShowcase.tsx
"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProcessSvg from '@/assets/svgs/processing.svg';

interface PartnerShowcaseProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

interface SolutionTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function PartnerShowcase({ addToRefs }: PartnerShowcaseProps) {
  const [activeTab, setActiveTab] = useState('automation');
  
  // Refs for parallax elements
  const titleRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Apply parallax effect through refs
  useEffect(() => {
    if (addToRefs) {
      if (titleRef.current) addToRefs(titleRef.current);
      if (tabsRef.current) addToRefs(tabsRef.current);
      if (contentRef.current) addToRefs(contentRef.current);
    }
  }, [addToRefs]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      [titleRef.current, tabsRef.current, contentRef.current].forEach((element) => {
        if (!element) return;

        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        element.style.willChange = 'transform';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions: SolutionTab[] = [
    {
      id: 'automation',
      label: 'Process Assessment & Optimization',
      title: 'Why Partner With GenZbots?',
      description: 'Our process automation solutions help businesses eliminate repetitive tasks, minimize errors, and speed up operations. We analyze your existing workflows and identify opportunities for automation, implementing tailored solutions that drive efficiency.',
      features: [
        'Global Expertise: With presence in both India and the US, we bring international best practices to every project',
        'Customized Approach: We tailor solutions to your unique business challenges',
        'Measurable Results: Our implementations deliver tangible ROI and performance improvements',
        'End-to-End Support: From assessment through implementation and beyond',
        'Technology Independence: We recommend the best tools for your needs, not tied to specific vendors'
      ],
      image: 'bg-orange-100'
    },
    {
      id: 'integration',
      label: 'Custom Bot Development',
      title: 'Connect Your Systems Seamlessly',
      description: 'Break down data silos with our comprehensive data integration solutions. We connect disparate systems, databases, and applications to enable smooth data flow across your organization, providing a unified view of your business information.',
      features: [
        'API development and integration',
        'ETL (Extract, Transform, Load) processes',
        'Real-time data synchronization',
        'Secure data transfer protocols',
        'Custom connectors for legacy systems'
      ],
      image: 'bg-green-100'
    },
    {
      id: 'rpa',
      label: 'Intelligent Workflow Automation',
      title: 'Automate with Robotic Process Automation',
      description: 'Our RPA solutions deploy software robots to handle high-volume, rule-based tasks with precision and speed. These digital workers operate 24/7, freeing your human talent to focus on more strategic, creative, and customer-facing activities.',
      features: [
        'Bot development and deployment',
        'Process mining and analysis',
        'Attended and unattended automation',
        'Exception handling and reporting',
        'Centralized bot management'
      ],
      image: 'bg-purple-100'
    },
    {
      id: 'custom',
      label: 'Implementation & Training',
      title: 'Tailor-Made Solutions for Your Business',
      description: `When off-the-shelf software doesn't meet your needs, our custom development team creates bespoke applications specifically designed for your unique business requirements, ensuring perfect alignment with your processes and goals.`,
      features: [
        'Requirements analysis and planning',
        'User-centered design process',
        'Agile development methodology',
        'Comprehensive testing and QA',
        'Ongoing maintenance and support'
      ],
      image: 'bg-orange-100'
    },
    {
      id: 'ai',
      label: 'Support & Continuous Improvement',
      title: 'Intelligent Automation Solutions',
      description: 'Leverage the power of artificial intelligence and machine learning to unlock predictive capabilities and intelligent automation. Our AI solutions learn from data patterns to make decisions, optimize processes, and deliver actionable insights.',
      features: [
        'Predictive analytics models',
        'Natural language processing',
        'Computer vision solutions',
        'Decision support systems',
        'Continuous learning algorithms'
      ],
      image: 'bg-red-100'
    }
  ];

  const getActiveSolution = () => {
    return solutions.find(solution => solution.id === activeTab) || solutions[0];
  };

  const activeSolution = getActiveSolution();

  return (
    <section id="partner" className="py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          data-speed="0.08"
          className="text-center mb-12 parallax"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">Why Partner With GenZbots?</h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of automation solutions designed to transform your business operations.
          </p>
        </motion.div>

        <motion.div
          data-speed="0.03"
          className="bg-white rounded-xl shadow-lg overflow-hidden parallax flex flex-col md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Section */}
          <motion.div
            className="md:w-1/2 bg-orange-100 flex items-center justify-center p-10"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full relative">
              <div className="absolute inset-0 flex items-center justify-center text-blue-800 text-2xl font-bold">
                <Image
                  src={'/assets/svgs/processing.svg'}
                  alt="Partner Image"
                  sizes="25vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="md:w-1/2 p-6 md:p-10"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-lg font-bold mb-4">{activeSolution.title}</h3>
            <p className="text-sm text-gray-600 mb-6 text-lg">{activeSolution.description}</p>
            <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
            <ul className="space-y-3">
              {activeSolution.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <svg
                    className="w-5 h-5 text-blue-500 mt-1 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}