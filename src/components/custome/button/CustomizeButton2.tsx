import React from 'react';
import styled from 'styled-components';

const CustomizeButton2 = ({title, href}:any) => {
  return (
    <StyledWrapper>
      <button suppressHydrationWarning>
        <span className="button-text" data-text={title}>{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: .8em 1.5em;
    border: none;
    background: none;
    font-weight: bold;
    position: relative;
    cursor: pointer;
    --primary-color: #ffffff;
    --hovered-color: #f75821;
    display: flex;
    font-weight: 600;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .button-text {
    margin: 0;
    position: relative;
    font-size: 20px;
    color: var(--hovered-color);
    z-index: 1;
  }
  
  .button-text::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: var(--hovered-color);
    white-space: nowrap;
    overflow: hidden;
    transition: width 0.3s ease;
  }
  
  button:hover .button-text::before {
    width: 100%;
  }

  button svg {
    color: var(--hovered-color);
    transition: all 0.3s ease;
    position: relative;
    width: 15px;
    z-index: 1;
  }

  button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }
`;

export default CustomizeButton2;
