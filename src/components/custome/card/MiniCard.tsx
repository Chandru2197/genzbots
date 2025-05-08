import React from 'react';

// Define the type for card props
interface CardProps {
  title?: string;
  description?: string;
  imageIcon?: React.ReactNode;
  gradientStart?: string;
  gradientEnd?: string;
}

const MiniCard: React.FC<CardProps> = ({
  title = "Card Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  imageIcon,
  gradientStart = "#f89b29",
  gradientEnd = "#ff0f7b"
}) => {
  return (
    <div className="card-container">
      <div className="card cursor-pointer">
        {imageIcon || (
                      <p className="text-center text-sm font-semi-bold bg-gradient-to-br from-gray-500 via-slate-900 to-neutral-500 bg-clip-text text-transparent">{title}</p>
        //   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
        //   </svg>
        )}
        <div className="card__content">
          {/* <p className="card__title">{title}</p> */}
          <p className="card__description text-sm">{description}</p>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          display: flex;
          margin: 10px;
        }
        
        .card {
          position: relative;
          width: 175px;
          height: 175px;
          background-image: linear-gradient(120deg, ${gradientStart} 0%, ${gradientEnd} 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card svg {
          width: 48px;
          fill: #333;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card:hover {
          transform: rotate(-5deg) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .card__content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          width: 100%;
          height: 100%;
          padding: 20px;
          box-sizing: border-box;
          background-color: #fff;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card:hover .card__content {
          transform: translate(-50%, -50%) rotate(0deg);
          opacity: 1;
        }
        
        .card__title {
          margin: 0;
          font-size: 24px;
          color: #333;
          font-weight: 700;
        }
        
        .card__description {
          margin: 10px 0 0;
          color: #777;
          line-height: 1;
        }
        
        .card:hover svg {
          scale: 0;
          transform: rotate(-45deg);
        }
      `}</style>
    </div>
  );
};

export default MiniCard;
