import React, { useState } from 'react';

const AnimatedButton = ({title}:any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    // <div className="flex items-center justify-center p-8 bg-gray-100">
      <button
        className={`
          relative 
          overflow-hidden
          px-6
          py-2
          w-60
          rounded-none
          font-bold
          text-white
          shadow-md
          transition-all
          duration-300
          bg-[var(--color-secondary)]
          uppercase
          tracking-wide
          text-md
          flex
          items-center
          justify-center
          ${isHovered ? 'bg-[#ff4000]' : 'bg-[var(--color-secondary)]'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        suppressHydrationWarning
      >
        <div className="relative z-10 flex items-center">
          {title}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div 
          className={`
            absolute 
            top-0 
            left-0 
            w-full 
            h-full 
            bg-[#ff4000]
            transform
            transition-transform
            duration-500
            ease-in-out
            ${isHovered ? 'translate-x-full' : 'translate-x-0'}
          `}
        />
        <div 
          className={`
            absolute 
            top-0 
            left-0 
            w-full 
            h-full 
            bg-[var(--color-secondary)]
            transform
            -translate-x-full
            transition-transform
            duration-500
            ease-in-out
            ${isHovered ? 'translate-x-0' : '-translate-x-full'}
          `}
        />
      </button>
    // </div>
  );
};

export default AnimatedButton;