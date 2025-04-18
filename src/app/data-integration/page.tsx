// File: app/data-integration/page.tsx
"use client";

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// This is a dedicated page for data integration testimonials with fixed mobile spacing

export default function DataIntegration() {
  const parallaxRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      parallaxRefs.current.forEach(element => {
        if (!element) return;
        
        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar addToRefs={addToRefs} />
      
      {/* Hero Section with reduced height for mobile */}
      <section className="pt-20 pb-6 md:pt-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Data Integration Solutions</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your systems seamlessly with our enterprise-grade data integration platform.
            </p>
          </div>
        </div>
      </section>
      
      {/* Custom spacer to ensure proper spacing */}
      <div className="h-4 md:h-8"></div>
      
      {/* Only show testimonials - with optimized spacing for mobile */}
      <section className="overflow-hidden bg-gray-50 py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Client Success Stories</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              See how our data integration solutions have transformed businesses.
            </p>
          </div>
          
          {/* Simplified testimonials specifically for data integration */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-200 flex items-center justify-center text-lg font-bold mb-3 md:mb-0">
                  MC
                </div>
                <div className="md:ml-4">
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-gray-600">CTO</p>
                  <p className="text-gray-500">FinanceHub</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute top-0 left-0 w-8 h-8 text-gray-200 -mt-2 -ml-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 italic relative pl-6 text-base md:text-lg leading-relaxed">
                  "The data integration platform from AutomateNow has been a game-changer for our financial services. We're now able to process transactions 60% faster while maintaining complete data integrity. Their technical support is always responsive and helpful."
                </p>
              </div>
            </div>
            
            {/* Action button */}
            <div className="text-center mt-6 md:mt-10">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center"
              >
                Request a Demo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}