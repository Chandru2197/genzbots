"use client";

import { useRef, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { CloudLightning, Rocket, Shield, Brain } from 'lucide-react';

interface FeaturesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

// Add the fadeInUp keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const features = [
  {
    title: "15-Minute Bot Rescue",
    sub: "Emergency Fix Guarantee",
    description: "Broken bot? We diagnose & fix in <24 hours. 24/7 ER for your automation",
    key: ["Broken bot? We diagnose & fix in <24 hours", "24/7 ER for your automation"],
    color: "from-blue-400/20 to-blue-600/20",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))",
    icon: CloudLightning,
    backgroundSvg: "/assets/svgs/undraw_bug-fixing.svg"
  },
  {
    title: "Pay-As-You-Grow",
    sub: "No Lock-In Scaling",
    description: "Start with 1 bot ($800), scale to 100+ with volume discounts",
    key: ["Start with 1 bot ($500)", "Scale to 100+ with volume discounts", "Only pay for what you use"],
    color: "from-orange-400/20 to-orange-600/20",
    gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.2), rgba(234, 88, 12, 0.2))",
    icon: Rocket,
    backgroundSvg: "/assets/svgs/undraw_growth-analytics.svg"
  },
  {
    title: "Invisible IT Team",
    sub: "Hands-Free Maintenance",
    description: "We monitor & optimize automatically with surprise quarterly upgrades",
    key: ["We monitor & optimize automatically", "Get surprise upgrades every quarter", "Forget tech debt exists"],
    color: "from-purple-400/20 to-purple-600/20",
    gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(168, 85, 247, 0.2))",
    icon: Shield,
    backgroundSvg: "/assets/svgs/undraw_shared-workspace.svg"
  },
  {
    title: "Future-Proof Bots",
    sub: "Self-Learning AI",
    description: "Bots improve from your team's habits and adapt automatically",
    key: ["Bots improve from your team's habits", "Auto-adapts to software updates", "Gets smarter while you sleep"],
    color: "from-green-400/20 to-green-600/20",
    gradient: "linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(22, 163, 74, 0.2))",
    icon: Brain,
    backgroundSvg: "/assets/svgs/undraw_online_learning.svg"
  }
];

const FlipCard = styled.div`
  perspective: 1200px;
  width: 100%;
  height: 480px;
  margin: 0 auto;
  cursor: pointer;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  border-radius: 24px;
  overflow: visible;
  will-change: transform;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background: white;
  border-radius: 24px;
  padding: 0;
  border: 1px solid rgba(240, 240, 250, 0.8);
  overflow: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
`;

const CardFront = styled(CardSide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: white;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  overflow: hidden;
  padding: 0;
  z-index: 1;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  padding: 0;
  overflow: hidden;
  z-index: 2;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 87, 34, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 40px;
    height: 40px;
    color: #FF5722;
  }
`;

const KeyPoint = styled.div<{ colorIndex?: number }>`
  background: rgb(255, 255, 255);
  padding: 1.25rem 1.5rem;
  margin: 0.9rem auto;
  border-radius: 20px;
  text-align: left;
  position: relative;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 3rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(236, 236, 236, 0.8);
  transition: all 0.3s ease;
  visibility: visible !important;
  z-index: 5;
  opacity: 1 !important;
  overflow: hidden;
  transform-origin: left center;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: ${props => {
      const colors = ["#6c63ff", "#17B8A6", "#F50057", "#f349ff"];
      return props.colorIndex !== undefined ? 
        `linear-gradient(to bottom, ${colors[props.colorIndex]}, ${colors[props.colorIndex]})` : 
        'linear-gradient(to bottom, #FF7A59, #FF5722)';
    }};
    transform: scaleY(0);
    transition: transform 0.4s ease;
    transform-origin: bottom;
    border-radius: 0 2px 2px 0;
    opacity: 0.9;
  }
  
  &:hover {
    transform: translateX(6px);
    box-shadow: ${props => {
      const colors = ["rgba(108, 99, 255, 0.18)", "rgba(23, 184, 166, 0.18)", "rgba(245, 0, 87, 0.18)", "rgba(243, 73, 255, 0.18)"];
      return props.colorIndex !== undefined ? 
        `0 6px 16px ${colors[props.colorIndex]}` : 
        '0 6px 16px rgba(255, 122, 89, 0.18)';
    }};
    border-color: ${props => {
      const colors = ["rgba(108, 99, 255, 0.4)", "rgba(23, 184, 166, 0.4)", "rgba(245, 0, 87, 0.4)", "rgba(243, 73, 255, 0.4)"];
      return props.colorIndex !== undefined ? colors[props.colorIndex] : 'rgba(255, 122, 89, 0.4)';
    }};
    background-color: ${props => {
      const colors = ["rgba(108, 99, 255, 0.05)", "rgba(23, 184, 166, 0.05)", "rgba(245, 0, 87, 0.05)", "rgba(243, 73, 255, 0.05)"];
      return props.colorIndex !== undefined ? colors[props.colorIndex] : 'rgba(255, 248, 245, 0.9)';
    }};
    
    &::before {
      transform: scaleY(1);
      box-shadow: ${props => {
        const colors = ["rgba(108, 99, 255, 0.6)", "rgba(23, 184, 166, 0.6)", "rgba(245, 0, 87, 0.6)", "rgba(243, 73, 255, 0.6)"];
        return props.colorIndex !== undefined ? 
          `0 0 10px ${colors[props.colorIndex]}` : 
          '0 0 10px rgba(255, 122, 89, 0.6)';
      }};
    }
  }
  
  span {
    color: ${props => {
      const colors = ["#6c63ff", "#17B8A6", "#F50057", "#f349ff"];
      return props.colorIndex !== undefined ? colors[props.colorIndex] : '#FF7A59';
    }};
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    opacity: 1;
    position: relative;
    left: 0;
    letter-spacing: 0.01em;
  }
  
  &:hover span {
    transform: none;
    color: ${props => {
      const colors = ["#5a52e0", "#15a595", "#d80050", "#dc41e9"];
      return props.colorIndex !== undefined ? colors[props.colorIndex] : '#E95F2E';
    }};
    left: 4px;
    font-weight: 600;
  }
`;

export default function FeaturesSection({ addToRefs }: FeaturesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Card color mapping
  const cardColors = {
    frontBg: ["rgba(108, 99, 255, 0.1)", "rgba(23, 184, 166, 0.1)", "rgba(245, 0, 87, 0.1)", "rgba(243, 73, 255, 0.1)"],
    backBg: ["rgba(108, 99, 255, 0.05)", "rgba(23, 184, 166, 0.05)", "rgba(245, 0, 87, 0.05)", "rgba(243, 73, 255, 0.05)"],
    borderHover: ["rgba(108, 99, 255, 0.4)", "rgba(23, 184, 166, 0.4)", "rgba(245, 0, 87, 0.4)", "rgba(243, 73, 255, 0.4)"],
    textColor: ["#6c63ff", "#17B8A6", "#F50057", "#f349ff"]
  };

  // Log the features data to verify it's correct
  useEffect(() => {
    console.log("Features data:", features);
  }, []);

  // Don't add this section to parallax refs to prevent motion effects
  useEffect(() => {
    // Intentionally not adding to refs to disable parallax effect
    // if (sectionRef.current) addToRefs(sectionRef.current);
  }, [addToRefs]);

  return (
    <section className="py-20 overflow-hidden relative" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[90%] relative z-10">
        <div className="text-center mb-8 relative">
          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent mb-1"
          >
            Powerful Features for Modern Businesses
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Our platform comes packed with features designed to streamline your operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
            >
              <FlipCard>
                <CardInner 
                  className="card-inner" 
                  style={{ 
                    backgroundColor: 'white'
                  }}
                >
                  <CardFront>
                    <div 
                      className="w-full h-[70%] flex items-center justify-center relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: cardColors.frontBg[idx],
                          borderBottom: '1px solid rgba(0,0,0,0.05)'
                        }}
                      ></div>
                      <img 
                        src={feature.backgroundSvg} 
                        alt={feature.title} 
                        className="h-[75%] w-[75%] object-contain z-10 relative"
                      />
                    </div>
                    <div className="w-full h-[30%] flex flex-col justify-center items-center px-6 py-4">
                      <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: cardColors.textColor[idx] }}>
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 font-medium text-center max-w-[90%]">{feature.sub}</p>
                    </div>
                  </CardFront>
                  <CardBack>
                    <div 
                      className="w-full h-full flex flex-col items-center px-1"
                      style={{
                        backgroundColor: cardColors.backBg[idx]
                      }}
                    >
                      <div 
                        className="w-full py-8 flex items-center justify-center"
                        style={{
                          borderBottom: 'none'
                        }}
                      >
                        <h4 className="text-2xl font-bold text-center px-4" style={{ color: cardColors.textColor[idx] }}>
                          {feature.title}
                        </h4>
                      </div>
                      <div className="w-full flex-1 flex flex-col items-center justify-start p-4 pt-8 pb-6">
                        {Array.isArray(feature.key) && feature.key.length > 0 ? (
                          feature.key.map((point, index) => (
                            <div key={index} style={{ width: '100%', position: 'relative' }}>
                              <KeyPoint colorIndex={idx}>
                                <span>{point}</span>
                              </KeyPoint>
                            </div>
                          ))
                        ) : (
                          <KeyPoint>
                            <span>No details available</span>
                          </KeyPoint>
                        )}
                      </div>
                    </div>
                  </CardBack>
                </CardInner>
              </FlipCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
