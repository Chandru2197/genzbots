import React from 'react';

interface EnhancedGlass3DCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const EnhancedGlass3DCard: React.FC<EnhancedGlass3DCardProps> = ({
  title,
  description,
  icon,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 flex items-center gap-6 transition-transform hover:scale-105 hover:shadow-3xl cursor-pointer ${className}`}
      onClick={onClick}
      style={{ minHeight: 120 }}
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 via-pink-400 to-purple-400 flex items-center justify-center text-white text-3xl shadow-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-200 text-base opacity-80">{description}</p>
      </div>
      <style jsx>{`
        .glass-card {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </div>
  );
};
