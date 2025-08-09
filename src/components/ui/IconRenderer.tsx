import React from 'react';

interface IconRendererProps {
  icon: any; // More flexible type
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const IconRenderer: React.FC<IconRendererProps> = ({ 
  icon: Icon, 
  size = 20, 
  className = '', 
  strokeWidth = 2 
}) => {
  // Debug logging
  console.log('IconRenderer:', { Icon, size, className });

  if (!Icon || typeof Icon !== 'function') {
    // Fallback if icon is not provided or not a valid component
    console.warn('Invalid icon provided to IconRenderer:', Icon);
    return (
      <div 
        className={`rounded ${className.includes('text-white') ? 'bg-white opacity-80' : 'bg-gray-600 opacity-80'}`}
        style={{ width: size, height: size }}
      />
    );
  }

  try {
    return (
      <Icon 
        size={size} 
        className={className} 
        strokeWidth={strokeWidth}
      />
    );
  } catch (error) {
    console.error('Error rendering icon:', error);
    return (
      <div 
        className={`rounded ${className.includes('text-white') ? 'bg-white opacity-80' : 'bg-gray-600 opacity-80'}`}
        style={{ width: size, height: size }}
      />
    );
  }
};

export default IconRenderer;