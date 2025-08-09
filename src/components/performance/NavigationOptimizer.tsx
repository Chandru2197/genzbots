import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface NavigationOptimizerProps {
  preloadPages?: string[];
}

const NavigationOptimizer: React.FC<NavigationOptimizerProps> = ({ 
  preloadPages = ['/services', '/solutions', '/about', '/contact', '/blog'] 
}) => {
  const router = useRouter();

  useEffect(() => {
    // Preload critical pages for faster navigation
    const preloadCriticalPages = () => {
      preloadPages.forEach(page => {
        try {
          router.prefetch(page);
        } catch (error) {
          console.debug(`NavigationOptimizer: Failed to prefetch ${page}`, error);
        }
      });
    };

    // Preload after a short delay to not interfere with initial page load
    const timer = setTimeout(preloadCriticalPages, 1000);

    return () => clearTimeout(timer);
  }, [router, preloadPages]);

  useEffect(() => {
    // More reliable approach: Add event listeners directly to link elements
    const addHoverPrefetch = () => {
      try {
        // Find all internal links
        const links = document.querySelectorAll('a[href^="/"]');
        
        links.forEach((link) => {
          const handleLinkHover = () => {
            try {
              const href = link.getAttribute('href');
              if (href && href.startsWith('/')) {
                router.prefetch(href);
              }
            } catch (error) {
              console.debug('NavigationOptimizer: Error in link hover handler', error);
            }
          };
          
          // Add hover listener to each link
          link.addEventListener('mouseenter', handleLinkHover, { once: true });
        });
      } catch (error) {
        console.debug('NavigationOptimizer: Error in addHoverPrefetch', error);
      }
    };

    // Add prefetch listeners after a short delay to ensure DOM is ready
    const timer = setTimeout(addHoverPrefetch, 500);
    
    // Re-add listeners when new content is loaded
    let observer: MutationObserver | null = null;
    
    try {
      observer = new MutationObserver(() => {
        addHoverPrefetch();
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    } catch (error) {
      console.debug('NavigationOptimizer: Error setting up MutationObserver', error);
    }

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [router]);

  return null; // This component doesn't render anything
};

export default NavigationOptimizer;