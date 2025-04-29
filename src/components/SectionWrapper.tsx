import React from 'react';
import styled from 'styled-components';

interface SectionWrapperProps {
  children: React.ReactNode;
  isAlternate?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, isAlternate = false }) => {
  return (
    <StyledSectionWrapper isAlternate={isAlternate}>
      <div className="content-wrapper">
        {children}
      </div>
    </StyledSectionWrapper>
  );
};

const StyledSectionWrapper = styled.section<{ isAlternate: boolean }>`
  position: relative;
  padding: 6rem 0;
  background: ${({ isAlternate }) => 
    isAlternate 
      ? 'linear-gradient(to bottom, rgba(247, 88, 33, 0.05), rgba(247, 88, 33, 0.1))'
      : 'linear-gradient(to bottom, rgba(30, 120, 193, 0.05), rgba(30, 120, 193, 0.1))'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ isAlternate }) => 
      isAlternate 
        ? 'linear-gradient(90deg, transparent, rgba(247, 88, 33, 0.2), transparent)'
        : 'linear-gradient(90deg, transparent, rgba(30, 120, 193, 0.2), transparent)'
    };
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ isAlternate }) => 
      isAlternate 
        ? 'linear-gradient(90deg, transparent, rgba(247, 88, 33, 0.2), transparent)'
        : 'linear-gradient(90deg, transparent, rgba(30, 120, 193, 0.2), transparent)'
    };
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    
    .content-wrapper {
      padding: 0 1rem;
    }
  }
`;

export default SectionWrapper; 