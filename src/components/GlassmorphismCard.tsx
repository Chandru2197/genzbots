"use client";

import React from 'react';
import styled from 'styled-components';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  hoverable?: boolean;
}

// Create a filtered div that doesn't pass through variant and hoverable
const FilteredDiv = ({ variant, hoverable, ...rest }: any) => <div {...rest} />;

const GlassmorphismCard = ({
  children,
  variant = 'primary',
  className = '',
  hoverable = true,
}: GlassmorphismCardProps) => {
  return (
    <StyledCard $variant={variant} $hoverable={hoverable} className={className}>
      <div className="glass-content p-6 h-full">{children}</div>
    </StyledCard>
  );
};

const StyledCard = styled(FilteredDiv)<{ $variant: 'primary' | 'secondary'; $hoverable: boolean }>`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ $hoverable }) => $hoverable && 'cursor: pointer;'}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ $variant }) =>
        $variant === 'primary'
          ? 'rgba(30, 120, 193, 0.1)'
          : 'rgba(247, 88, 33, 0.1)'}
    );
    transition: 0.5s;
  }

  .glass-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ${({ $hoverable }) =>
    $hoverable &&
    `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);

      &::before {
        left: 100%;
      }
    }
  `}

  /* Light reflection effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ $variant }) =>
        $variant === 'primary'
          ? 'rgba(30, 120, 193, 0.2)'
          : 'rgba(247, 88, 33, 0.2)'},
      transparent
    );
  }
`;

export default GlassmorphismCard;