"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import TeamCollabrationSvg from '@/assets/svgs/team-collaboration.svg';
import { ParallaxProvider } from 'react-scroll-parallax';

interface AboutSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function AboutSection({ addToRefs }: AboutSectionProps) {
  useEffect(() => {
    // No need to register parallax image manually with react-scroll-parallax
    // But if you want to keep addToRefs for other logic, you can
  }, [addToRefs]);

  return (
    <ParallaxProvider>
    <section id="about" className="py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Decorative image with parallax */}
          <div className="md:w-1/2 order-2 md:order-1">
            <Parallax speed={-15}>
              <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden bg-blue-100 shadow-lg border border-blue-200 mb-8 md:mb-0">
                <Image
                  src={TeamCollabrationSvg}
                  alt="Team Collaboration"
                  fill
                  className="object-cover"
                  draggable={false}
                  priority
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-200/30 to-transparent z-10 pointer-events-none" />
              </div>
            </Parallax>
          </div>

          {/* Main content - NO parallax */}
          <div className="md:w-1/2 order-1 md:order-2">
            <div>
              <h2 className="text-lg md:text-lg font-bold mb-4 md:mb-6">About AutomateNow</h2>
              <p className="text-md md:text-md text-gray-600 mb-4 md:mb-6">
                Founded in 2018, AutomateNow has been at the forefront of business automation solutions, 
                helping companies of all sizes transform their operations through innovative technology.
              </p>
              <p className="text-md md:text-md text-gray-600 mb-4 md:mb-6">
                Our team of experts combines deep industry knowledge with technical expertise to deliver
                customized automation solutions that address your specific business challenges.
              </p>
              <p className="text-md md:text-md text-gray-600 mb-6 md:mb-8">
                We believe in creating long-term partnerships with our clients, providing ongoing support
                and continuously improving solutions to adapt to evolving business needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Automation Experts</div>
                </div>
                <div>
                  <div className="text-2xl md:text-4xl font-bold text-blue-600">12+</div>
                  <div className="text-gray-600">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ParallaxProvider>
  );
}