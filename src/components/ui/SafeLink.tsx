import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSafeHref } from '@/utils/linkUtils';

interface SafeLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
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
  
  const handleClick = () => {
    if (onClick) onClick();
  };

  // For external links, use regular anchor tag
  if (safeHref.startsWith('http') || safeHref.startsWith('mailto:') || safeHref.startsWith('tel:')) {
    return (
      <a 
        href={safeHref} 
        className={className}
        onClick={handleClick}
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
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      prefetch={prefetch}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SafeLink;