// File: components/FeaturesSection.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Glass3DCardStyled from '@/components/Glass3DCardStyled';

interface FeaturesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export const features = [
  {
    title: "Process Assessment & Optimization",
    description: "Streamline repetitive tasks and workflows to save time and reduce errors.",
  },
  {
    title: "Custom Bot Development",
    description: "Connect your systems and applications for seamless data flow.",
  },
  {
    title: "Intelligent Workflow Automation",
    description: "Tailored automation solutions designed specifically for your business needs.",
  },
  {
    title: "Implementation & Training",
    description: "Gain insights from your data with automated analytics and reporting tools.",
  },
  {
    title: "Support & Continuous Improvement",
    description: "Continuous improvement and support for your automation journey.",
  },
];

export default function FeaturesSection({ addToRefs }: FeaturesSectionProps) {
  const decorativeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(decorativeRef, { once: true });

  useEffect(() => {
    if (decorativeRef.current) addToRefs(decorativeRef.current);
  }, [addToRefs]);

  return (
    <section className="py-18 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative background/image with parallax */}
        <motion.div
          ref={decorativeRef}
          data-speed="0.05"
          className="parallax absolute inset-0 pointer-events-none"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          {/* Place your decorative SVG, gradient, or image here */}
        </motion.div>

        {/* Main content (NOT parallax) */}
        <div className="text-center mb-8">
          <h2 className="text-label font-label text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-desc font-desc text-gray-600 mb-8 max-w-2xl mx-auto">
            Our platform comes packed with features designed to streamline your operations and boost productivity.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Glass3DCardStyled
                  title={feature.title}
                  description={feature.description}
                  colorVariant={idx % 2 === 0 ? 'primary' : 'secondary'}
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS if not present:
// .perspective { perspective: 1200px; }
// .backface-hidden { backface-visibility: hidden; }