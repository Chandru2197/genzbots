import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ParticlesBackground } from '@/components/enhanced/ParticlesBackground';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import SolutionsShowcase from '@/components/home/SolutionsShowcase';
import PartnerShowcase from '@/components/home/PartnerSection';
import ProjectsCarousel from '@/components/home/ProjectsCarousel';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import AutomationCards from '@/components/home/AutomationCards';
import ReactFlowSection from '@/components/home/AutomationProcess';
import SectionWrapper from '@/components/SectionWrapper';

export default function Home() {
  const parallaxRefs = useRef<HTMLElement[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Handle hash navigation
    if (router.asPath.includes('#automation')) {
      setTimeout(() => {
        const el = document.getElementById('automation');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [router.asPath]);

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

  // Only add elements with data-parallax="true" to the parallaxRefs
  const addToRefs = (el: HTMLElement | null) => {
    if (el && el.dataset && el.dataset.parallax === 'true' && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Enhanced Particles Background */}
      <ParticlesBackground />
      
      {/* Enhanced Hero Section */}
      <HeroSection addToRefs={addToRefs} />
      
      {/* Enhanced Features Section */}
      {/* <SectionWrapper> */}
        <FeaturesSection addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* Enhanced Automation Cards */}
      {/* <SectionWrapper isAlternate> */}
        <AutomationCards addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* New React Flow Section */}
      {/* <SectionWrapper> */}
        <ReactFlowSection addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* Solutions Showcase */}
      {/* <SectionWrapper> */}
        <SolutionsShowcase addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* Projects Carousel */}
      {/* <SectionWrapper isAlternate> */}
        <ProjectsCarousel addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* Testimonials */}
      {/* <SectionWrapper> */}
        <TestimonialsSection addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* Partner Showcase */}
      {/* <SectionWrapper isAlternate> */}
        <PartnerShowcase addToRefs={addToRefs}/>
      {/* </SectionWrapper> */}
      
      {/* About Section */}
      {/* <SectionWrapper> */}
        <AboutSection addToRefs={addToRefs} />
      {/* </SectionWrapper> */}
      
      {/* Contact Section */}
      {/* <ContactSection/> */}
      
      {/* Footer is now included globally via _app.tsx */}
    </main>
  );
}