import { useRouter } from 'next/router';

// List of pages that exist and should work normally
const EXISTING_PAGES = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/maintenance',
  '/work-in-progress',
  '/services',
  '/services/bot-blueprint',
  '/services/build-and-test',
  '/services/discovery-call',
  '/services/hyper-care',
  '/services/scale-optimize',
  '/solutions',
  '/solutions/time-liberation',
  '/solutions/growth-accelerator',
  '/solutions/profit-rescue',
  '/solutions/custombot-development',
  // Service category pages
  '/services/bsfi/loan',
  '/services/bsfi/aml',
  '/services/bsfi/card-dispute',
  '/services/bsfi/bank-reconciliation',
  '/services/healthcare&pharma/patient-onboarding',
  '/services/healthcare&pharma/claims',
  '/services/healthcare&pharma/clinical',
  '/services/healthcare&pharma/inventory',
  '/services/retail&ecommerce/pricing',
  '/services/retail&ecommerce/returns',
  '/services/retail&ecommerce/order',
  '/services/manufacturing&logistics/bom',
  '/services/manufacturing&logistics/shipment',
  '/services/manufacturing&logistics/maintenance',
  '/services/hr/resume',
  '/services/hr/payroll',
  '/services/hr/offboarding',
  '/services/gov&public/grievance-redressal',
  '/services/gov&public/pension',
  // Blog pages
  '/blogs/ai',
  '/blogs/rpa'
];

// Check if a page exists
export const pageExists = (href: string): boolean => {
  return EXISTING_PAGES.includes(href);
};

// Determine which fallback page to use based on context
export const getFallbackPage = (href: string, context?: 'feature' | 'maintenance' | 'development'): string => {
  switch (context) {
    case 'feature':
    case 'development':
      return '/work-in-progress';
    case 'maintenance':
    default:
      return '/maintenance';
  }
};

// Get safe href - returns appropriate fallback page if link is broken
export const getSafeHref = (href: string, context?: 'feature' | 'maintenance' | 'development'): string => {
  if (!href || href === '#') return getFallbackPage(href, context);
  if (pageExists(href)) return href;
  return getFallbackPage(href, context);
};

// Custom hook for safe navigation
export const useSafeNavigation = () => {
  const router = useRouter();

  const navigateTo = (href: string) => {
    const safeHref = getSafeHref(href);
    router.push(safeHref);
  };

  return { navigateTo, getSafeHref };
};

// Preload critical pages for better performance
export const preloadCriticalPages = () => {
  if (typeof window !== 'undefined') {
    const criticalPages = ['/contact', '/services', '/about'];
    
    criticalPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      document.head.appendChild(link);
    });
  }
};

// Optimize image loading
export const getOptimizedImageProps = (src: string, alt: string) => ({
  src,
  alt,
  loading: 'lazy' as const,
  placeholder: 'blur' as const,
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
});