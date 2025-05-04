"use client";

import { useState } from "react";
import Image from 'next/image';

const solutions = [
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
    image: 'bg-blue-100',
    svg: '/assets/svgs/undraw_process.svg',
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
    image: 'bg-green-100',
    svg: '/assets/svgs/undraw_robotics.svg',
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
    image: 'bg-purple-100',
    svg: '/assets/svgs/undraw_automation.svg',
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
    image: 'bg-orange-100',
    svg: '/assets/svgs/undraw_online_learning.svg',
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
    image: 'bg-red-100',
    svg: '/assets/svgs/undraw_support.svg',
  }
];

export default function SolutionsTabs() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <section className="w-full py-8 px-2 sm:px-4 lg:px-8 xl:px-12">
      <h2 className="text-label font-label text-center mb-6 text-[#2d2940]">Our Solutions</h2>
      <p className="text-desc font-desc text-gray-600 max-w-3xl mx-auto text-center mb-6">
        Discover our comprehensive range of automation solutions designed to transform your business operations.
      </p>
      <div className="w-full max-w-7xl mx-auto">
        {/* Simple Horizontal Tabs */}
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar gap-4 mb-8">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              className={`flex-none px-4 py-2 rounded-lg text-sm transition-all duration-300 whitespace-nowrap
                ${activeTab === solution.id
                  ? "bg-[#FF5722] text-white shadow-md"
                  : "text-[#FF5722] hover:bg-[#FF5722]/10"
                } cursor-pointer`}
              onClick={() => setActiveTab(solution.id)}
            >
              {solution.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="relative bg-gradient-to-br from-[var(--color-primary)/5] via-[var(--color-secondary)/5] to-[var(--color-primary)/5] rounded-2xl flex items-center justify-center mx-auto py-6 sm:py-8 lg:py-10 group backdrop-blur-sm" 
        style={{ 
          minHeight: 'clamp(280px, 35vw, 400px)', 
          maxWidth: 'clamp(600px, 70vw, 1000px)', 
          width: '100%' 
        }}>
        <div className="text-[var(--color-secondary)] w-full flex items-center justify-center">
          <Image
            src={activeSolution.svg}
            alt={activeSolution.label}
            width={300}
            height={150}
            style={{ 
              objectFit: 'contain',
              width: 'clamp(150px, 25vw, 300px)',
              height: 'auto'
            }}
            className="mx-auto blur-xs opacity-60 transition-all duration-300 group-hover:blur-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-6 transition-all duration-300 group-hover:-translate-y-1">
          <div className="text-label font-label mb-2 drop-shadow text-base lg:text-lg">{activeSolution.label}</div>
          <div className="text-desc font-desc drop-shadow max-w-xl lg:max-w-2xl text-sm lg:text-base">{activeSolution.description}</div>
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="mt-6 w-full max-w-4xl mx-auto px-4">
        <h4 className="text-label font-label mb-4 text-[#2d2940] text-base">Key Features:</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {activeSolution.features.map((feature, index) => (
            <div key={index} className="flex items-start bg-gradient-to-r from-[var(--color-primary)/5] via-[var(--color-secondary)/5] to-[var(--color-primary)/5] backdrop-blur-sm p-2 rounded-lg">
              <svg className="w-4 h-4 text-[var(--color-secondary)] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-desc font-desc text-gray-600 text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 