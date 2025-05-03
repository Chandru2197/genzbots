
// File: components/FeaturesSection.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styled from 'styled-components';

interface FeaturesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export const features = [
  {
    title: "15-Minute Bot Rescue",
    sub: "Emergency Fix Guarantee",
    description: "Broken bot? We diagnose & fix in <24 hours. 24/7 ER for your automation",
    key: ["Broken bot? We diagnose & fix in <24 hours", "24/7 ER for your automation"],
    color: "from-blue-400/20 to-blue-600/20"
  },
  {
    title: "Pay-As-You-Grow",
    sub: "No Lock-In Scaling",
    description: "Start with 1 bot ($800), scale to 100+ with volume discounts",
    key: ["Start with 1 bot ($800)", "Scale to 100+ with volume discounts", "Only pay for what you use"],
    color: "from-orange-400/20 to-orange-600/20"
  },
  {
    title: "Invisible IT Team",
    sub: "Hands-Free Maintenance",
    description: "We monitor & optimize automatically with surprise quarterly upgrades",
    key: ["We monitor & optimize automatically", "Get surprise upgrades every quarter", "Forget tech debt exists"],
    color: "from-purple-400/20 to-purple-600/20"
  },
  {
    title: "Future-Proof Bots",
    sub: "Self-Learning AI",
    description: "Bots improve from your team's habits and adapt automatically",
    key: ["Bots improve from your team's habits", "Auto-adapts to software updates", "Gets smarter while you sleep"],
    color: "from-green-400/20 to-green-600/20"
  }
];

const FeatureCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const KeyPoint = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
  }
`;

export default function FeaturesSection({ addToRefs }: FeaturesSectionProps) {
  const decorativeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(decorativeRef, { once: true });

  useEffect(() => {
    if (decorativeRef.current) addToRefs(decorativeRef.current);
  }, [addToRefs]);

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={decorativeRef}
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/5 via-[#FF8A65]/5 to-[#FF5722]/5 blur-3xl" />
        </motion.div>

        <div className="text-center mb-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent mb-6"
          >
            Powerful Features for Modern Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Our platform comes packed with features designed to streamline your operations and boost productivity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <FeatureCard className={`bg-gradient-to-br ${feature.color}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-medium mb-4">{feature.sub}</p>
                <div className="space-y-3">
                  {feature.key?.map((point, index) => (
                    <KeyPoint key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-[#FF5722] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{point}</span>
                    </KeyPoint>
                  ))}
                </div>
              </FeatureCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
