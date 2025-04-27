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
    <section className="w-full py-8 px-2 sm:px-4 bg-gray-50">
      <h2 className="text-label font-label text-center mb-8 text-[#2d2940]">Our Solutions</h2>
      <p className="text-desc font-desc text-gray-600 max-w-3xl mx-auto text-center mb-8">
        Discover our comprehensive range of automation solutions designed to transform your business operations.
      </p>
      <div className="w-full">
        <div className="flex flex-wrap justify-center border-b border-[#bdb8d3] mb-4">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              className={`relative px-2 sm:px-3 py-1 text-xs sm:text-sm font-normal transition-colors whitespace-nowrap focus:outline-none
                ${activeTab === solution.id
                  ? "text-[var(--color-secondary)] font-medium"
                  : "text-[#7c7890] hover:text-[var(--color-secondary)]"
                }`}
              style={{ background: "none", borderRadius: 0 }}
              onClick={() => setActiveTab(solution.id)}
            >
              {solution.label}
              {activeTab === solution.id && (
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block h-[2px] w-8 bg-[var(--color-secondary)] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative bg-[#edeaf7] rounded-2xl flex items-center justify-center mx-auto py-8 sm:py-12 group" style={{ minHeight: 320, maxWidth: 700, width: '100%' }}>
          {/* SVG color wrapper - ensure your SVGs use fill='currentColor' or stroke='currentColor' */}
          <div className="text-[var(--color-secondary)] w-full flex items-center justify-center">
            <Image
              src={activeSolution.svg}
              alt={activeSolution.label}
              width={200}
              height={100}
              style={{ objectFit: 'contain' }}
              className="mx-auto blur-xs opacity-60 transition-all duration-300 group-hover:blur-0 group-hover:opacity-100"
            />
          </div>
          {/* Overlay: label and description centered in the middle of SVG */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
            <div className="text-label font-label mb-2 drop-shadow">{activeSolution.label}</div>
            <div className="text-desc font-desc drop-shadow">{activeSolution.description}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-6 p-4 sm:p-8">
        {/* Key Features */}
        <div className="mt-2">
          <h4 className="text-label font-label mb-2 text-[#2d2940]">Key Features:</h4>
          <ul className="space-y-2 flex flex-col items-start mx-auto">
            {activeSolution.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-[var(--color-secondary)] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-desc font-desc text-[#2d2940]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Button */}
        <div className="mt-4 w-full flex justify-center">
          <button 
            className="text-btn font-btn bg-[var(--color-secondary)] text-white px-6 py-2 rounded-none transition-all duration-300 hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent"
          >
            Learn More
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 