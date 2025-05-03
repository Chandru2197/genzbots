
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
    color: "from-blue-400/20 to-blue-600/20",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))"
  },
  {
    title: "Pay-As-You-Grow",
    sub: "No Lock-In Scaling",
    description: "Start with 1 bot ($800), scale to 100+ with volume discounts",
    key: ["Start with 1 bot ($800)", "Scale to 100+ with volume discounts", "Only pay for what you use"],
    color: "from-orange-400/20 to-orange-600/20",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(234, 88, 12, 0.2))"
  },
  {
    title: "Invisible IT Team",
    sub: "Hands-Free Maintenance",
    description: "We monitor & optimize automatically with surprise quarterly upgrades",
    key: ["We monitor & optimize automatically", "Get surprise upgrades every quarter", "Forget tech debt exists"],
    color: "from-purple-400/20 to-purple-600/20",
    gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.2))"
  },
  {
    title: "Future-Proof Bots",
    sub: "Self-Learning AI",
    description: "Bots improve from your team's habits and adapt automatically",
    key: ["Bots improve from your team's habits", "Auto-adapts to software updates", "Gets smarter while you sleep"],
    color: "from-green-400/20 to-green-600/20",
    gradient: "linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(22, 163, 74, 0.2))"
  }
];

const FeatureCard = styled(motion.div)<{ $gradient: string }>`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: ${props => props.$gradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: ${props => props.$gradient};
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px) rotateX(10deg) rotateY(-10deg);
    box-shadow: 
      20px 20px 60px rgba(0, 0, 0, 0.05),
      -20px -20px 60px rgba(255, 255, 255, 0.05);

    &:after {
      opacity: 0.1;
    }
  }
`;

const KeyPoint = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin: 0.75rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    transform: scale(1.02) translateX(10px);
    background: rgba(255, 255, 255, 0.1);
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
          className="absolute inset-0 -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/5 via-[#FF8A65]/5 to-[#FF5722]/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,87,34,0.1),transparent_50%)]" />
        </motion.div>

        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent mb-6">
              Powerful Features for Modern Businesses
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10" />
          </motion.div>
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
              <FeatureCard $gradient={feature.gradient}>
                <h3 className="text-2xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium mb-4">{feature.sub}</p>
                <div className="space-y-3">
                  {feature.key?.map((point, index) => (
                    <KeyPoint key={index} className="flex items-center group">
                      <motion.svg
                        className="w-5 h-5 text-[#FF5722] mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </motion.svg>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {point}
                      </span>
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
