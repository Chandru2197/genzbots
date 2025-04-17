import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link';
import HeroSvg from '@/assets/svgs/herosection.svg';
import Image from 'next/image';

interface HeroSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

import HeroBackground from '@/assets/svgs/download.svg';
import CustomizeButton from './custome/button/CustomizeButton';
import CustomizeButton2 from './custome/button/CustomizeButton2';

export default function HeroSection({ addToRefs }: HeroSectionProps) {
  const heroText = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(heroText, { once: true });

  useEffect(() => {
    if (heroText.current) addToRefs(heroText.current);
    if (heroImage.current) addToRefs(heroImage.current);
  }, [addToRefs]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-8"
      style={{ backgroundImage: `url(${HeroBackground.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute top-0 left-0 w-full h-full hero-gradient opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <motion.div
            ref={heroText}
            data-speed="0.1"
            className="parallax"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-4xl font-bold leading-tight text-theme mb-4">
              Simplify Automate Elevate
            </h1>
            <h6 className="text-md md:text-md font-semibold leading-tight text-theme mb-4 border-b p-1">
              Digital workflow solutions for forward-thinking businesses
            </h6>
            <p className="text-lg text-theme mb-8">
              GenZbots specializes in intelligent RPA and AI solutions that transform manual processes into automated workflows, reducing costs and boosting efficiency for businesses across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link href="#services" className="px-8 py-4 btn-secondary text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors text-center">
                Explore Services
              </Link> */}
              <CustomizeButton title={"Explore Services"} href={"#services"}/>
              <CustomizeButton2 title={"Contact Us"} href={"#contact"}/>
              {/* <Link href="#contact" className="px-2 py-2 border btn-secondary-outlined rounded-md text-lg font-medium hover:bg-blue-50 transition-colors text-center">
                Contact Us
              </Link> */}
            </div>
          </motion.div>
          
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
                <Image src={HeroSvg} alt="Logo"       
                  sizes="25vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
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