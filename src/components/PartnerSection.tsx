// File: components/PartnerSection.tsx
"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  // Do NOT add headingRef to addToRefs for parallax
  // Only decorative elements should be registered for parallax

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
    // ...other solutions as before
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
    <section id="partner" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative parallax elements can go here if needed */}
        {/* <motion.div ... /> */}

        {/* Heading (NO parallax, NO data-speed) */}
        <motion.div
          ref={headingRef}
          className="text-center mb-8 pt-8 relative z-10"
          initial={{ opacity: 0, y: -25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <h2 className="text-label font-label text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              {activeSolution.title}
            </h2>
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div> */}
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of automation solutions designed to transform your business operations.
          </p>
        </motion.div>

        {/* Main content (NOT parallax) */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <motion.div
            className={`md:w-1/2 ${activeSolution.image} flex items-center justify-center p-10`}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full relative">
              <div className="absolute inset-0 flex items-center justify-center text-blue-800 text-2xl font-bold">
                <Image
                  src={'/assets/svgs/processing.svg'}
                  alt="Partner Image"
                  width={500}
                  height={500}
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
            <h3 className="text-lg text-[var(--color-tertiary)] font-bold mb-4">{activeSolution.title}</h3>
            <p className="text-sm text-gray-600 mb-6 text-lg">{activeSolution.description}</p>
            <h4 className="text-lg text-[var(--color-tertiary)] font-semibold mb-4">Key Features:</h4>
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
        </div>
      </div>
    </section>
  );
}