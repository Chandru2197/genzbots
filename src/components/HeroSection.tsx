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
import Link from "next/link";

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
      className="relative min-h-screen flex items-center overflow-hidden pt-8 bg-size-(--my-image-size) bg-[url(/assets/svgs/herosection-bg-7.jpeg)] bg-cover bg-center"
      // style={{
      //   backgroundImage: `url(/assets/svgs/RPA.png)`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* <BackgroundIllustration/> */}
      <div className="absolute top-0 left-0 w-full h-full hero-gradient opacity-5 z-0"></div>
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 bg-white/30 backdrop-blur-none rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 p-2">
          {/* Main content - NOT parallax */}
          <motion.div
            ref={heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-semi-bold leading-tight text-[var(--color-primary-dark)] mb-4">
              Simplify Automate Elevate
            </h1>
            <h6 className="text-3xl font-semi-bold leading-tight text-[var(--color-primary-dark)] mb-4 border-b p-1">
              Digital Workflow Solutions For Forward-Thinking Businesses
            </h6>
            <p className="text-xl font-semi-bold text-[var(--color-primary-dark)] mb-8">
              GenZbots specializes in intelligent RPA and AI solutions that transform
              manual processes into automated workflows, reducing costs and boosting
              efficiency for businesses across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <AnimatedButton title={"Explore Services"} /> */}
              <div className="">
                <button
                  className="group relative w-full py-3 px-4 rounded-none flex items-center justify-center transition-all duration-300 bg-[var(--color-secondary)] text-white border-2 border-transparent hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] cursor-pointer"
                >
                  Explore Services
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