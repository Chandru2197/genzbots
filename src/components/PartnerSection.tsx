// File: components/PartnerSection.tsx
"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconCircleDashedCheck, IconHandFingerRight, IconPhoneCall } from '@tabler/icons-react';
import MiniCard from './custome/card/MiniCard';

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

  const solutions: any[] = [
    {
      id: 'automation',
      label: 'Process Assessment & Optimization',
      title: 'Why Partner With GenZbots?',
      description: 'At GenZbots, we don’t just automate tasks—we reimagine workflows to unlock productivity, accuracy, and scalability. Our solutions cut through operational bottlenecks, freeing your team to focus on strategic growth while we handle the rest.',
      features: [
        {
          text:'Borderless Innovation',
          gradientStart: "#a1c4fd",
          gradientEnd: "#c2e9fb",
          description:"With dual hubs in India (cost-efficient delivery) and the US (cutting-edge tech adoption), we blend global expertise with localized execution."
        },
        {
          text:'Hyper-Personalized Automation',
          gradientStart: "#d4fc79", 
      gradientEnd: "#96e6a1",
          description:"No cookie-cutter solutions. We audit, redesign, and deploy workflows tailored to your industry, systems, and pain points."
        },
        {
          text:'ROI-First Mindset',
          gradientStart: "#fccb90",
          gradientEnd: "#d57eeb",
          description:"We track time saved, error reduction, and cost impact—so you see measurable gains from Day 1."
        },
        {
          text:'Future-Proof Tech Stack',
          gradientStart: "#d299c2",
          gradientEnd: "#fef9d7",
          description:"Platform-agnostic approach. We recommend only what fits your needs, whether it’s UiPath, Power Automate, or custom Python bots."
        },  
        {
          text:'White-Glove Partnership',
          gradientStart: "#fddb92",
          gradientEnd: "#d1fdff",
          description:"From pilot to scale, we’re with you—offering 24/7 support, continuous optimization, and change management."
        },
      ],
      advantage:[
        "Traditional RPA	GenZbots’ Approach",
        "Generic automation","AI-enhanced workflows (OCR, NLP, predictive triggers)",
        "One-time deployment","Continuous improvement cycles",
        "Vendor lock-ins	Best-fit tool selection (no upsell pressure)",
        "Siloed processes","End-to-end process integration"
      ],
      serve:[
        "SMEs needing affordable, quick-win automations",
        "Enterprises scaling complex workflows across teams",
        "Startups leveraging automation for lean operations",
        "Global Teams requiring seamless cross-border execution"
      ],
      image: 'bg-gray-50'
    },
    // // ...other solutions as before
    // {
    //   id: 'integration',
    //   label: 'Custom Bot Development',
    //   title: 'Connect Your Systems Seamlessly',
    //   description: 'Break down data silos with our comprehensive data integration solutions. We connect disparate systems, databases, and applications to enable smooth data flow across your organization, providing a unified view of your business information.',
    //   features: [
    //     'API development and integration',
    //     'ETL (Extract, Transform, Load) processes',
    //     'Real-time data synchronization',
    //     'Secure data transfer protocols',
    //     'Custom connectors for legacy systems'
    //   ],
    //   image: 'bg-green-100'
    // },
    // {
    //   id: 'rpa',
    //   label: 'Intelligent Workflow Automation',
    //   title: 'Automate with Robotic Process Automation',
    //   description: 'Our RPA solutions deploy software robots to handle high-volume, rule-based tasks with precision and speed. These digital workers operate 24/7, freeing your human talent to focus on more strategic, creative, and customer-facing activities.',
    //   features: [
    //     'Bot development and deployment',
    //     'Process mining and analysis',
    //     'Attended and unattended automation',
    //     'Exception handling and reporting',
    //     'Centralized bot management'
    //   ],
    //   image: 'bg-purple-100'
    // },
    // {
    //   id: 'custom',
    //   label: 'Implementation & Training',
    //   title: 'Tailor-Made Solutions for Your Business',
    //   description: `When off-the-shelf software doesn't meet your needs, our custom development team creates bespoke applications specifically designed for your unique business requirements, ensuring perfect alignment with your processes and goals.`,
    //   features: [
    //     'Requirements analysis and planning',
    //     'User-centered design process',
    //     'Agile development methodology',
    //     'Comprehensive testing and QA',
    //     'Ongoing maintenance and support'
    //   ],
    //   image: 'bg-orange-100'
    // },
    // {
    //   id: 'ai',
    //   label: 'Support & Continuous Improvement',
    //   title: 'Intelligent Automation Solutions',
    //   description: 'Leverage the power of artificial intelligence and machine learning to unlock predictive capabilities and intelligent automation. Our AI solutions learn from data patterns to make decisions, optimize processes, and deliver actionable insights.',
    //   features: [
    //     'Predictive analytics models',
    //     'Natural language processing',
    //     'Computer vision solutions',
    //     'Decision support systems',
    //     'Continuous learning algorithms'
    //   ],
    //   image: 'bg-red-100'
    // }
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent mb-1">
              {activeSolution.title}
            </h2>
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div> */}
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Transform Your Business with Intelligent Automation—Designed for the Future
          </p>
        </motion.div>

        {/* Main content (NOT parallax) */}
        <div className="rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <motion.div
            className={`md:w-2/5 flex ${activeSolution.image} items-center justify-center p-10`}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full relative">
              {/* <div className="absolute inset-0 flex items-center justify-center text-blue-800 text-2xl font-bold"> */}
                {/* <Image
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
                /> */}
                  <div className="grid grid-cols-2 grid-rows-4 gap-1">
                  {activeSolution.features.map((feature:any, index:number) => (
                    <div className={index % 2 === 0 ? 'row-span-2 col-start-1':`row-span-2 col-start-2 row-start-${index+1}`}>
                    <motion.li
                      key={index+feature.text}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <MiniCard
                        key={index}
                        title={feature.text}
                        description={feature.description}
                        gradientStart={feature.gradientStart}
                        gradientEnd={feature.gradientEnd}
                      />
                    </motion.li>
                    </div>
                  ))}
                </div>
              {/* </div> */}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="md:w-3/5 p-6 md:p-10"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='mb-10 flex flex-col items-center justify-center'>
              <h3 className="text-lg text-[var(--color-tertiary)] font-bold mb-2">{activeSolution.title}</h3>
              <p className="text-sm text-gray-600 mb-3 text-lg">{activeSolution.description}</p>
            </div>
            
            <div className='grid grid-cols-3 gap-2 mb-4'> 
              <div className='col-start-1'>
            <h4 className="text-md text-[var(--color-tertiary)] font-semibold mb-2">Here’s What Sets Us Apart</h4>
            <ul className="space-y-1 mb-1">
              {activeSolution.features.map((feature:any, index:number) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <IconCircleDashedCheck color='#FF5722' className='p-1'/>
                  <span className="text-sm text-gray-700">{feature.text}</span>
              </motion.li>
              ))}
            </ul>
            </div>
              <div className='col-span-3 col-start-1 row-start-2 border-t-1 border-[var(--color-tertiary)] pt-2'>
                <h4 className="text-md text-center text-[var(--color-tertiary)] font-semibold mb-2">Advantage</h4>
            <ul className="space-y-1">
              {activeSolution.advantage.map((feature:any, index:number) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <IconCircleDashedCheck color='#FF5722' className='p-1'/>
                  <span className="text-sm text-gray-700">{feature}</span>
              </motion.li>
              ))}
            </ul>
              </div>
              <div className='col-span-2 col-start-2 items-center justify-center'>
                <h4 className="text-md text-center text-[var(--color-tertiary)] font-semibold mb-2">Who We Serve</h4>
                <ul className="space-y-1">
              {activeSolution.serve.map((feature:any, index:number) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <IconCircleDashedCheck color='#FF5722' className='p-1'/>
                  <span className="text-sm text-gray-700">{feature}</span>
              </motion.li>
              ))}
            </ul>
              </div>
            </div>
            <h3 className="text- text-[var(--color-tertiary)] font-semi-bold mb-4">{"Let’s turn your operational friction into fuel for growth."}</h3>
            <div className='flex'>
              <div className="px-2 py-1">
                  <button
                    className="group relative w-full py-2 px-4 rounded-none flex items-center justify-center transition-all duration-300 bg-[var(--color-secondary)] text-white border-2 border-transparent hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] cursor-pointer"
                  >
                    <IconHandFingerRight size={24} className='p-1'/>
                    Audit
                  </button>
                </div>
                <div className="px-2 py-1">
                <button
                  className="group relative w-full py-2 px-4 rounded-none flex items-center justify-center transition-all duration-300 bg-[var(--color-secondary)] text-white border-2 border-transparent hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] cursor-pointer"
                >
                  <IconPhoneCall size={24} className='p-1'/>
                  Call
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}