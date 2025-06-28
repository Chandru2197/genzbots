import React from 'react';
import { Sparkles, Zap, TrendingUp, Shield } from 'lucide-react';

interface SectionWrapperProps {
  children: React.ReactNode;
  isAlternate?: boolean;
  variant?: 'default' | 'dark' | 'gradient';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  isAlternate = false, 
  variant = 'default' 
}) => {
  // Remove background gradients for a plain background
  const getBackgroundClasses = () => {
    return '';
  };

  const getFloatingElements = () => {
    const elements = [];
    const iconSet = isAlternate 
      ? [Sparkles, Zap, TrendingUp, Shield]
      : [Shield, TrendingUp, Zap, Sparkles];
    
    for (let i = 0; i < 12; i++) {
      const IconComponent = iconSet[i % iconSet.length];
      const colorClass = isAlternate
        ? ['text-orange-400/20', 'text-red-400/20', 'text-pink-400/20', 'text-purple-400/20'][i % 4]
        : ['text-blue-400/20', 'text-cyan-400/20', 'text-teal-400/20', 'text-green-400/20'][i % 4];
      
      elements.push(
        <div
          key={i}
          className="absolute opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 6}s`
          }}
        >
          <IconComponent className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} ${colorClass}`} />
        </div>
      );
    }
    return elements;
  };

  // Reduced vertical padding and removed overflow-hidden to minimize unwanted spacing and hiding
  // Add extra bottom margin to prevent overlap with next section
  // Add z-20 to ensure section content is always above previous section's card
  return (
    <section
      className={`relative z-20 py-8 md:py-12 mb-16 md:mb-24 transition-all duration-500 ${getBackgroundClasses()}`}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${
          isAlternate 
            ? 'bg-gradient-to-r from-orange-600/5 to-red-600/5'
            : 'bg-gradient-to-r from-blue-600/5 to-cyan-600/5'
        }`}></div>
        
        {/* Floating decorative elements */}
        {variant !== 'default' && getFloatingElements()}
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${
            isAlternate 
              ? 'bg-gradient-to-r from-orange-400/10 to-red-400/10'
              : 'bg-gradient-to-r from-blue-400/10 to-cyan-400/10'
          } rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${
            isAlternate 
              ? 'bg-gradient-to-r from-pink-400/10 to-purple-400/10'
              : 'bg-gradient-to-r from-teal-400/10 to-green-400/10'
          } rounded-full blur-3xl animate-pulse delay-1000`}></div>
        </div>

        {/* Animated mesh background */}
        {variant === 'dark' && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12 animate-pulse delay-500"></div>
          </div>
        )}
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced container with backdrop blur for dark variants */}
        {variant === 'dark' ? (
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            {children}
          </div>
        ) : (
          children
        )}
      </div>

      {/* Additional decorative elements */}
      {variant !== 'default' && (
        <>
          {/* Top accent line */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
            isAlternate
              ? 'from-orange-500 via-red-500 to-pink-500'
              : 'from-blue-500 via-cyan-500 to-teal-500'
          } opacity-50`}></div>
          
          {/* Bottom accent line */}
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${
            isAlternate
              ? 'from-pink-500 via-red-500 to-orange-500'
              : 'from-teal-500 via-cyan-500 to-blue-500'
          } opacity-50`}></div>
        </>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.1; }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper;