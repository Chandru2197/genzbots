"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';

interface AboutSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function AboutSection({ addToRefs }: AboutSectionProps) {
  useEffect(() => {
    // No need to register parallax image since we're removing the effect
  }, [addToRefs]);

  return (
    <ParallaxProvider>
    <section id="about" className="py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image with fixed position - NO parallax */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden bg-blue-100 shadow-lg border border-blue-200 mb-8 md:mb-0">
              <Image
                src="/assets/svgs/team-collaboration.svg"
                alt="Team Collaboration"
                fill
                className="object-cover"
                draggable={false}
                priority
              />
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-200/30 to-transparent z-10 pointer-events-none" />
            </div>
          </div>

          {/* Main content - NO parallax */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div>
              {/* <div className="text-center mb-8 relative">
                <div className="relative">
                  <h2 className="text-label font-label text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
                    About Our Mission
                  </h2>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
                </div>
                <p className="text-desc font-desc text-gray-600 mb-8 max-w-2xl mx-auto text-center">
                  Empowering businesses with cutting-edge automation solutions for the digital age.
                </p>
              </div> */}
              <div className="relative mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
                  About GenZBot
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
              </div>
              <p className="text-desc font-desc text-gray-600 mb-4 md:mb-6">
                Pioneering the Future of Automation, Built for the Next Generation
              </p>
              <p className="text-desc font-desc text-gray-600 mb-4 md:mb-6">
              Founded in 2025, GenZbots is redefining business automation with AI-driven RPA solutions designed for agility,
              scalability, and the digital-first era. We empower startups and enterprises to break free from repetitive tasks and unlock productivity with smart, intuitive bots that learn and adapt.
              </p>
              <p className="text-desc font-desc text-gray-600 mb-6 md:mb-8">
              Our team of Gen-Z engineers and automation veterans bridges the gap between technical innovation and real-world business needs. We don’t just automate processes—we transform them into competitive advantages.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Workflows Automated</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600">Client Retention Rate</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">30+</div>
                  <div className="text-gray-600">RPA specialists</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">8+</div>
                  <div className="text-gray-600">Industries Optimized</div>
                </div>
              </div>
            </div>
              <div className='px-1 py-4'>
                <h4 className="italic font-bold text-lg text-center">Our Promise</h4>
              <p className="text-md font-desc text-gray-600 mb-6 md:mb-8 italic text-center">
                We’re not just a vendor—we’re your automation co-pilots. Let’s build, optimize, and scale together.              </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    </ParallaxProvider>
  );
}