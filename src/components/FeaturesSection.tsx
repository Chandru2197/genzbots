// File: components/FeaturesSection.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Glass3DCardStyled from '@/components/Glass3DCardStyled';
import CustomeListCard from "./custome/card/CustomeListCard";

interface FeaturesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export const features = [
  {
    title: "15-Minute Bot Rescue",
    sub:"Emergency Fix Guarantee",
    description: "1.Broken bot? We diagnose & fix in <24 hours 2. 24/7 ER for your automation",
    key:[" Broken bot? We diagnose & fix in <24 hours"," 24/7 ER for your automation"]
  },
  {
    title: "Pay-As-You-Grow",
    sub:"No Lock-In Scaling",
    description: `1.Start with 1 bot ($800)
    2.Scale to 100+ with volume discounts
    3.Only pay for what you use`,
    key:["Start with 1 bot ($800)",
      "Scale to 100+ with volume discounts",
      "Only pay for what you use"]
  },
  {
    title: "Invisible IT Team",
    sub:"Hands-Free Maintenance",
    description: `1.We monitor & optimize automatically

2.Get surprise upgrades every quarter

3.Forget tech debt exists`,
key:["We monitor & optimize automatically","Get surprise upgrades every quarter","Forget tech debt exists"]
  },
  {
    title: "Future-Proof Bots",
    sub:"Self-Learning AI",
    description: `1.Bots improve from your team's habits

2.Auto-adapts to software updates

3.Gets smarter while you sleep`,
  },
  // {
  //   title: "Support & Continuous Improvement",
  //   sub:"Emergency Fix Guarantee",
  //   description: "Continuous improvement and support for your automation journey.",
  // },
];

export default function FeaturesSection({ addToRefs }: FeaturesSectionProps) {
  const decorativeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(decorativeRef, { once: true });

  useEffect(() => {
    if (decorativeRef.current) addToRefs(decorativeRef.current);
  }, [addToRefs]);

  return (
    <section className="bg-none py-18 overflow-hidden">
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
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)/10] via-[var(--color-secondary)/10] to-[var(--color-primary)/10] blur-3xl"></div>
        </motion.div>

        {/* Main content (NOT parallax) */}
        <div className="text-center mb-8 relative">
          <div className="relative">
            <h2 className="text-label font-label text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
              Powerful Features for Modern Businesses
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
          </div>
          <div className="relative">
            <p className="text-desc font-desc text-gray-600 mb-8 max-w-2xl mx-auto text-center">
              Our platform comes packed with features designed to streamline your operations and boost productivity.
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)/5] via-[var(--color-secondary)/5] to-[var(--color-primary)/5] backdrop-blur-sm -z-10 rounded-lg"></div>
          </div>
        </div>
        
        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <Glass3DCardStyled
                  title={feature.title}
                  sub={feature.sub}
                  description={feature.description}
                  colorVariant={idx % 2 === 0 ? 'primary' : 'secondary'}
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center relative">
              {feature?.key?.map((key, index) => (
        //         <div id={key+index} className="w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
        // <div className="w-full fill-blue-500">
        //           {key}
        //           </div>
        //       </div>
        <CustomeListCard label={key}/>
              ))}

                {/* <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--color-primary)]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.sub}</p>
                  <p className="text-gray-600">{feature.description}</p>
                </div> */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)/5] via-[var(--color-secondary)/5] to-[var(--color-primary)/5] backdrop-blur-sm rounded-2xl -z-10"></div>
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