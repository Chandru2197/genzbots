import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface FastLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  [key: string]: any;
}

/**
 * FastLink - An optimized Link component for faster navigation
 * Features:
 * - Automatic prefetching on hover
 * - Optimized for performance
 * - Maintains all Next.js Link functionality
 */
const FastLink: React.FC<FastLinkProps> = ({
  href,
  children,
  className = '',
  onClick,
  prefetch = true,
  replace = false,
  scroll = true,
  shallow = false,
  ...props
}) => {
  const router = useRouter();

  const handleMouseEnter = () => {
    // Prefetch the page on hover for instant navigation
    if (prefetch && href.startsWith('/')) {
      router.prefetch(href);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // For external links, use regular anchor tag
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
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
      href={href}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      className={className}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FastLink;