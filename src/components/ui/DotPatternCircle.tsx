import React from 'react';

const DotPatternCircle: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute inset-0 ${className || ''}`}>
    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g fill="#ffffff" fillOpacity="0.1">
        <path d="M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z" />
      </g>
    </svg>
  </div>
);

export default DotPatternCircle;
