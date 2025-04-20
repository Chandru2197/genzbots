// File: components/SolutionsShowcase.tsx
"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface SolutionsShowcaseProps {
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
      label: 'Process Assessment & Optimization',
      title: 'Streamline Your Business Workflows',
      description: 'Our process automation solutions help businesses eliminate repetitive tasks, minimize errors, and speed up operations. We analyze your existing workflows and identify opportunities for automation, implementing tailored solutions that drive efficiency.',
      features: [
        'Workflow analysis and optimization',
        'Custom automation scripts and tools',
        'Integration with existing systems',
        'Real-time monitoring and analytics',
        'Automated reporting and notifications'
      ],
      image: 'bg-blue-100'
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
    <section id="solutions" className="py-1 bg-gray-50 mb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          // data-speed="0.08"
          className="text-center mb-8 pt-8 bg-gray-50 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-4">Our Solutions</h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of automation solutions designed to transform your business operations.
          </p>
        </motion.div>

        {/* Tabs Navigation (NOT parallax) */}
        <div className="flex justify-center mb-2 relative z-10">
          <div className="w-full">
            <div className="flex w-full border-b border-gray-200">
              {solutions.map(solution => (
                <a
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={`flex-1 text-center py-3 px-2 transition-colors duration-300 cursor-pointer text-xs sm:text-sm lg:text-base`}
                  style={activeTab === solution.id 
                    ? {
                        backgroundColor: '#f75821', 
                        color: 'white',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                      } 
                    : {
                        color: '#f75821',
                        backgroundColor: 'white',
                      }
                  }
                >
                  <span className="text-xs hidden md:inline">{solution.label}</span>
                  <span className="text-xs md:hidden">
                    {solution.label.split(' ')[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content (NOT parallax) */}
        <div className="bg-white rounded-b-xl shadow-lg overflow-hidden border-t-0 pt-6 relative z-10">
          <div className="flex flex-col md:flex-row">
            {/* Content Section */}
            <div className="md:w-1/2 p-6 md:p-10">
              <h3 className="text-lg font-bold mb-4">{activeSolution.title}</h3>
              <p className="text-sm text-gray-600 mb-6 text-lg">{activeSolution.description}</p>
              <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {activeSolution.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <button 
                className="mt-8 hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
                style={{backgroundColor: '#f75821'}}
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            {/* Image Section */}
            <div className={`md:w-1/2 ${activeSolution.image} flex items-center justify-center p-10`}>
              <div className="aspect-w-16 aspect-h-9 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-blue-800 text-2xl font-bold">
                  <Image src={'/assets/svgs/processing.svg'} alt="Logo"       
                    sizes="25vw"
                    width={500}
                    height={500}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}