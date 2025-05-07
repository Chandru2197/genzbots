
import { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import SolutionsShowcase from '@/components/SolutionsShowcase';
import PartnerShowcase from '@/components/PartnerSection';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AutomationCards from '@/components/AutomationCards';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  const parallaxRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (parallaxRefs.current.length === 0) {
        console.log('Warning: No parallax elements found');
      }
      
      parallaxRefs.current.forEach((element) => {
        if (!element) return;
        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        element.style.willChange = 'transform';
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !parallaxRefs.current.includes(el)) {
      if (!el.classList.contains('parallax')) {
        el.classList.add('parallax');
      }
      parallaxRefs.current.push(el);
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar addToRefs={addToRefs} />
      <HeroSection addToRefs={addToRefs} />
      <SectionWrapper>
        <FeaturesSection addToRefs={addToRefs} />
      </SectionWrapper>
      <SectionWrapper isAlternate>
        <AutomationCards/>
      </SectionWrapper>
      <SolutionsShowcase addToRefs={addToRefs} />
      <SectionWrapper isAlternate>
        <ProjectsCarousel addToRefs={addToRefs} />
      </SectionWrapper>
      <SectionWrapper>
        <TestimonialsSection addToRefs={addToRefs} />
      </SectionWrapper>
      <SectionWrapper isAlternate>
        <PartnerShowcase addToRefs={addToRefs}/>
      </SectionWrapper>
      <SectionWrapper>
        <AboutSection addToRefs={addToRefs} />
      </SectionWrapper>
      <ContactSection />
      <Footer />
    </main>
  );
}
