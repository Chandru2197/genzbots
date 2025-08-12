import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSafeHref } from '@/utils/linkUtils';

interface SafeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void; // Event parameter is required when onClick is provided
  context?: 'feature' | 'maintenance' | 'development';
  prefetch?: boolean;
  [key: string]: any;
}

const SafeLink: React.FC<SafeLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  onClick,
  context,
  prefetch = true,
  ...props 
}) => {
  const router = useRouter();
  const safeHref = getSafeHref(href, context);
  
  const handleMouseEnter = () => {
    // Prefetch on hover for instant navigation
    if (prefetch && safeHref.startsWith('/')) {
      router.prefetch(safeHref);
    }
  };
  
  const handleClick = (e: React.MouseEvent) => { // Event parameter is required
    if (onClick) onClick(e); // Pass the event to the onClick handler
  };

  // For external links, use regular anchor tag
  if (safeHref.startsWith('http') || safeHref.startsWith('mailto:') || safeHref.startsWith('tel:')) {
    return (
      <a 
        href={safeHref} 
        className={className}
        onClick={handleClick} // Pass the event directly
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={safeHref} 
      className={className}
      onClick={handleClick} // Pass the event directly
      onMouseEnter={handleMouseEnter}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SafeLink;