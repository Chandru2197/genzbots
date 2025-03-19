// File: components/SolutionsShowcase.tsx
"use client";

import { useState, useRef, useEffect } from 'react';

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

  const solutions: SolutionTab[] = [
    {
      id: 'automation',
      label: 'Process Automation',
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
      label: 'Data Integration',
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
      label: 'RPA Implementation',
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
      label: 'Custom Software',
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
      label: 'AI & Machine Learning',
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
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} data-speed="0.08" className="text-center mb-12 parallax">
          <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of automation solutions designed to transform your business operations.
          </p>
        </div>
        
        {/* Tabs Navigation */}
        <div ref={tabsRef} data-speed="0.05" className="flex flex-wrap justify-center mb-12 parallax">
          <div className="bg-white rounded-lg shadow-md flex flex-wrap p-1 w-full md:w-auto">
            {solutions.map(solution => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`px-4 py-3 text-sm md:text-base font-medium rounded-md transition-colors duration-300 whitespace-nowrap mx-1 my-1 ${
                  activeTab === solution.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {solution.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div ref={contentRef} data-speed="0.03" className="bg-white rounded-xl shadow-lg overflow-hidden parallax">
          <div className="flex flex-col md:flex-row">
            {/* Content Section */}
            <div className="md:w-1/2 p-6 md:p-10">
              <h3 className="text-3xl font-bold mb-4">{activeSolution.title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{activeSolution.description}</p>
              
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {activeSolution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center">
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
                  {activeSolution.label} Solution Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}