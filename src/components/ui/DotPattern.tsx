import React from 'react';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute inset-0 ${className || ''}`}>
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g fill="none" fillRule="evenodd">
        <g fill="#ffffff" fillOpacity="0.1">
          <circle cx="30" cy="30" r="2" />
        </g>
      </g>
    </svg>
  </div>
);

export default DotPattern;
