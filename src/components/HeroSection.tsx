import { useRef, useEffect } from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function HeroSection({ addToRefs }: HeroSectionProps) {
  const heroText = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroText.current) addToRefs(heroText.current);
    if (heroImage.current) addToRefs(heroImage.current);
  }, [addToRefs]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full hero-gradient opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div ref={heroText} data-speed="0.1" className="parallax">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gradient mb-6">
                Automation Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your workflow, increase productivity, and unlock your business potential with our cutting-edge automation tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#services" className="px-8 py-4 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors text-center">
                  Explore Services
                </Link>
                <Link href="#contact" className="px-8 py-4 border border-blue-600 text-blue-600 rounded-md text-lg font-medium hover:bg-blue-50 transition-colors text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div ref={heroImage} data-speed="0.05" className="parallax">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl overflow-hidden">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                    Hero Image Placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}