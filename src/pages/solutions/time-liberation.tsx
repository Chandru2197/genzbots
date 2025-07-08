import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TimeLiberationPackage from '@/components/solutions/TimeLiberationPackage';
import { useEffect, useRef } from 'react';

export default function TimeLiberationRoute() {

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
          <TimeLiberationPackage />
        </main>
    );
}
