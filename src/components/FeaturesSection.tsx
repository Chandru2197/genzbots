
"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styled from 'styled-components';
import { CloudLightning, Rocket, Shield, Brain } from 'lucide-react';

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
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))",
    icon: CloudLightning
  },
  {
    title: "Pay-As-You-Grow",
    sub: "No Lock-In Scaling",
    description: "Start with 1 bot ($800), scale to 100+ with volume discounts",
    key: ["Start with 1 bot ($800)", "Scale to 100+ with volume discounts", "Only pay for what you use"],
    color: "from-orange-400/20 to-orange-600/20",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(234, 88, 12, 0.2))",
    icon: Rocket
  },
  {
    title: "Invisible IT Team",
    sub: "Hands-Free Maintenance",
    description: "We monitor & optimize automatically with surprise quarterly upgrades",
    key: ["We monitor & optimize automatically", "Get surprise upgrades every quarter", "Forget tech debt exists"],
    color: "from-purple-400/20 to-purple-600/20",
    gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.2))",
    icon: Shield
  },
  {
    title: "Future-Proof Bots",
    sub: "Self-Learning AI",
    description: "Bots improve from your team's habits and adapt automatically",
    key: ["Bots improve from your team's habits", "Auto-adapts to software updates", "Gets smarter while you sleep"],
    color: "from-green-400/20 to-green-600/20",
    gradient: "linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(22, 163, 74, 0.2))",
    icon: Brain
  }
];

const FlipCard = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 350px;
  margin: 0 auto;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
`;

const CardFront = styled(CardSide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  svg {
    width: 40px;
    height: 40px;
    color: #FF5722;
  }
`;

const KeyPoint = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin: 0.75rem 0;
  border-radius: 12px;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #FF5722, #FF8A65);
    transform: scaleY(0);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: bottom;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(10px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      transform: scaleY(1);
    }
  }

  span {
    background: linear-gradient(120deg, #FF5722, #FF8A65);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 500;
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
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[90%]">
        <div className="text-center mt-18 relative" ref={decorativeRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent mb-1"
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
              <FlipCard>
                <CardInner className="card-inner">
                  <CardFront>
                    <IconWrapper>
                      {<feature.icon />}
                    </IconWrapper>
                    <h3 className="text-2xl font-bold text-[var(--color-tertiary)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{feature.sub}</p>
                  </CardFront>
                  <CardBack>
                    <h4 className="text-xl font-bold text-[var(--color-tertiary)] mb-4">{feature.title}</h4>
                    {feature.key?.map((point, index) => (
                      <KeyPoint key={index}>
                        <span className="text-gray-700">{point}</span>
                      </KeyPoint>
                    ))}
                  </CardBack>
                </CardInner>
              </FlipCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
