
"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
  image: string;
  svg: string;
}

export default function SolutionsShowcase({ addToRefs }: SolutionsShowcaseProps) {
  const [activeTab, setActiveTab] = useState('automation');
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    if (addToRefs && headingRef.current) addToRefs(headingRef.current);
    if (addToRefs && contentRef.current) addToRefs(contentRef.current);
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
      image: 'bg-purple-100',
      svg: '/assets/svgs/undraw_automation.svg',
    },
    {
      id: 'custom',
      label: 'Custom Bot Development',
      title: 'Tailor-Made Solutions for Your Business',
      description: "When off-the-shelf software doesn't meet your needs, our custom development team creates bespoke applications specifically designed for your unique business requirements, ensuring perfect alignment with your processes and goals.",
      features_label: "We build:",
      features: [
        'Custom automation solutions',
        'Integration with existing systems',
        'Scalable and maintainable code'
      ],
      highlight: 'Delivered 100+ custom solutions across industries',
      button_label: 'Discuss Your Project',
      image: 'bg-orange-100',
      svg: '/assets/svgs/undraw_online_learning.svg',
    }
  ];

  const activeSolution = solutions.find(solution => solution.id === activeTab) || solutions[0];
  const activeIndex = solutions.findIndex(s => s.id === activeTab);

  return (
    <ParallaxProvider>
      <section id="solutions" className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              {activeSolution.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {activeSolution.description}
            </p>
          </div>

          <div className="flex justify-between items-center w-full border-b mb-12">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                className={`flex-1 px-4 py-3 text-sm transition-all duration-300 whitespace-nowrap relative
                  ${activeTab === solution.id
                    ? "text-[#FF5722] border-b-2 border-[#FF5722] -mb-[2px]"
                    : "text-gray-600 hover:text-[#FF5722]"
                  }`}
                onClick={() => setActiveTab(solution.id)}
              >
                {solution.label}
              </button>
            ))}
          </div>

          <div className="relative z-10" ref={contentRef}>
            <div className={`flex flex-col md:flex-row ${activeIndex % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
              <Parallax translateY={[10, -10]} className="md:w-1/2 p-6 md:p-10">
                <h4 className="text-xl font-semibold mb-6 text-[var(--color-secondary)]">
                  {activeSolution.features_label}
                </h4>
                <ul className="space-y-4">
                  {activeSolution.features.map((feature, index) => (
                    <li key={feature + index} className="flex items-start">
                      <svg className="w-6 h-6 text-[var(--color-secondary)] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="group relative w-full py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 bg-[var(--color-secondary)] text-white hover:bg-white hover:text-[var(--color-secondary)] border-2 border-transparent hover:border-[var(--color-secondary)]">
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
              </Parallax>

              <Parallax translateY={[-10, 10]} className="md:w-1/2">
                <div className="relative h-[400px] md:h-[500px] w-full group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)/10] to-[var(--color-secondary)/10] rounded-2xl blur-xl transform transition-all duration-300 group-hover:scale-105" />
                  <div className="relative w-full h-full transform transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <Image
                        src={activeSolution.svg}
                        alt={activeSolution.label}
                        fill
                        style={{
                          objectFit: 'contain',
                          padding: '2rem'
                        }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
