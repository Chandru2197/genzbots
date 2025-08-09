import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const usePerformanceOptimization = () => {
  const router = useRouter();

  useEffect(() => {
    // Preload critical pages
    const criticalPages = ['/contact', '/services', '/about', '/solutions'];
    
    const preloadPage = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    };

    // Preload critical pages after a short delay
    const preloadTimer = setTimeout(() => {
      criticalPages.forEach(preloadPage);
    }, 1000);

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[loading="lazy"]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Debounce scroll events for better performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll-based optimizations
        optimizeImages();
      }, 100);
    };

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to preload a specific page
  const preloadPage = (href: string) => {
    router.prefetch(href);
  };

  // Function to navigate with loading optimization
  const optimizedNavigate = (href: string) => {
    // Show loading state if needed
    router.push(href);
  };

  return {
    preloadPage,
    optimizedNavigate
  };
};