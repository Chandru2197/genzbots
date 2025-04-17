// File: app/page.tsx (Root)
// This is the main fix for parallax effect

"use client";

import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import SolutionsShowcase from '@/components/SolutionsShowcase';
import PartnerShowcase from '@/components/PartnerSection';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AutomationCards from '@/components/AutomationCards';

export default function Home() {
  const parallaxRefs = useRef<HTMLElement[]>([]);

  // Enhanced scroll handler with debugging
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Debug check
      if (parallaxRefs.current.length === 0) {
        console.log('Warning: No parallax elements found');
      }
      
      parallaxRefs.current.forEach((element, index) => {
        if (!element) return;
        
        // Ensure data-speed attribute exists
        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        
        // Apply transform with hardware acceleration
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        element.style.willChange = 'transform'; // Optimization hint
      });
    };

    // Initial call to apply effects immediately
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true }); // Performance optimization
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced addToRefs with validation
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !parallaxRefs.current.includes(el)) {
      // Ensure the element has the parallax class
      if (!el.classList.contains('parallax')) {
        el.classList.add('parallax');
      }
      
      // Add to refs array
      parallaxRefs.current.push(el);
      
      // Debug
      console.log(`Parallax element added: ${el.tagName}${el.className ? '.' + el.className.split(' ').join('.') : ''}`);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar addToRefs={addToRefs} />
      <HeroSection addToRefs={addToRefs} />
      <FeaturesSection addToRefs={addToRefs} />
      <AutomationCards/>
      <SolutionsShowcase addToRefs={addToRefs} />
      <PartnerShowcase addToRefs={addToRefs}/>
      <ProjectsCarousel addToRefs={addToRefs} />
      <TestimonialsCarousel addToRefs={addToRefs} />
      <AboutSection addToRefs={addToRefs} />
      <ContactSection addToRefs={addToRefs} />
      <Footer />
    </main>
  );
}