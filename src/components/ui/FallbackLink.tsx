import React from 'react';
import SafeLink from './SafeLink';

interface FallbackLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  fallbackType?: 'maintenance' | 'work-in-progress';
  [key: string]: any;
}

/**
 * FallbackLink component that automatically redirects to appropriate fallback pages
 * 
 * @param fallbackType - 'maintenance' for broken/unavailable pages, 'work-in-progress' for features under development
 */
const FallbackLink: React.FC<FallbackLinkProps> = ({ 
  href, 
  children, 
  className = '', 
  onClick,
  fallbackType = 'maintenance',
  ...props 
}) => {
  // Map fallbackType to context for SafeLink
  const context = fallbackType === 'work-in-progress' ? 'development' : 'maintenance';
  
  return (
    <SafeLink 
      href={href} 
      className={className}
      onClick={onClick}
      context={context}
      {...props}
    >
      {children}
    </SafeLink>
  );
};

export default FallbackLink;