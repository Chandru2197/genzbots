import React from 'react';
import styled from 'styled-components';

interface SectionWrapperProps {
  children: React.ReactNode;
  isAlternate?: boolean;
}

const StyledSection = styled.section<{ $isAlternate?: boolean }>`
  position: relative;
  background: ${({ $isAlternate }) => 
    $isAlternate 
      ? 'rgba(255, 200, 150, 0.12)'
      : 'rgba(30, 120, 193, 0.08)'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), 
      ${({ $isAlternate }) => 
        $isAlternate 
          ? 'rgba(255, 150, 100, 0.12)'
          : 'rgba(30, 120, 193, 0.08)'
      }, rgba(255, 255, 255, 1));
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), 
      ${({ $isAlternate }) => 
        $isAlternate 
          ? 'rgba(255, 150, 100, 0.12)'
          : 'rgba(30, 120, 193, 0.08)'
      }, rgba(255, 255, 255, 1));
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: .5rem 0;
    
    .content-wrapper {
      padding: 0 1rem;
    }
  }
`;

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, isAlternate = false }) => {
  return (
    <StyledSection $isAlternate={isAlternate}>
      <div className="content-wrapper">
        {children}
      </div>
    </StyledSection>
  );
};

export default SectionWrapper; 