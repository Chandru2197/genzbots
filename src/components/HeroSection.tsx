// File: components/HeroSection.tsx

"use client";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import HeroSvg from "@/assets/svgs/herosection.svg";
import CustomizeButton from "./custome/button/CustomizeButton";
import CustomizeButton2 from "./custome/button/CustomizeButton2";
import AnimatedButton from "./custome/button/AnimatedButton";
import { BackgroundIllustration } from "./custome/svg/BackgroundIllustration";

interface HeroSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function HeroSection({ addToRefs }: HeroSectionProps) {
  const heroText = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(heroText, { once: true });

  useEffect(() => {
    // Only add the heroImage (decorative) to parallax refs, not the main text
    if (heroImage.current) addToRefs(heroImage.current);
  }, [addToRefs]);

  return (
    <section
      className="relative py-10 flex items-center overflow-hidden bg-size-(--my-image-size) bg-[url(/assets/svgs/herosection-bg-7.jpeg)] bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(/assets/svgs/RPA.png)`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* <BackgroundIllustration/> */}
      <div className="absolute top-0 left-0 w-full h-full hero-gradient opacity-5 z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Main content - NOT parallax */}
          <motion.div
            ref={heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold leading-tight text-[var(--color-primary-dark)] mb-4">
              Simplify Automate Elevate
            </h1>
            <h6 className="text-2xl font-label leading-tight text-[var(--color-primary-dark)] mb-4 border-b p-1">
              Digital workflow solutions for forward-thinking businesses
            </h6>
            <p className="text-desc font-desc text-[var(--color-primary-dark)] mb-8">
              GenZbots specializes in intelligent RPA and AI solutions that transform
              manual processes into automated workflows, reducing costs and boosting
              efficiency for businesses across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton title={"Explore Services"} />
              <CustomizeButton2 title={"Contact Us"} href={"#contact"} />
            </div>
          </motion.div>
          {/* Decorative image - parallax */}
          <motion.div
            ref={heroImage}
            data-speed="0.05"
            className="parallax"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e78c1] to-[#f75821] rounded-2xl overflow-hidden">
                <Image
                  src={HeroSvg}
                  alt="Logo"
                  sizes="25vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}