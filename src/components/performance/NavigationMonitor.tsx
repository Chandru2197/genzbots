import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NavigationMonitor = () => {
  const router = useRouter();

  useEffect(() => {
    let startTime: number;

    const handleRouteChangeStart = (url: string) => {
      startTime = performance.now();
      console.log(`🚀 Navigation started to: ${url}`);
    };

    const handleRouteChangeComplete = (url: string) => {
      if (startTime) {
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(`✅ Navigation completed to: ${url} in ${duration.toFixed(2)}ms`);
        
        // Log performance metrics
        if (duration > 1000) {
          console.warn(`⚠️ Slow navigation detected: ${duration.toFixed(2)}ms to ${url}`);
        }
      }
    };

    const handleRouteChangeError = (err: any, url: string) => {
      console.error(`❌ Navigation error to: ${url}`, err);
    };

    // Subscribe to router events
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      // Cleanup event listeners
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  return null; // This component doesn't render anything
};

export default NavigationMonitor;