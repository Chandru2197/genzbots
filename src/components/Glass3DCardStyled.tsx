import React from 'react';
import styled from 'styled-components';

interface Glass3DCardStyledProps {
  title?: string;
  sub?:string;
  description?: string;
  colorVariant?: 'primary' | 'secondary';
}

const Glass3DCardStyled: React.FC<Glass3DCardStyledProps> = ({
  title = 'UIVERSE (3D UI)',
  sub = 'UIVERSE',
  description = 'Create, share, and use beautiful custom elements made with CSS',
  colorVariant = 'primary',
}) => {
  return (
    <StyledWrapper colorVariant={colorVariant}>
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="420 140 200 200"
                width="32"
                height="32"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="459.34"
                    y1="230.63"
                    x2="549.7"
                    y2="312.57"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#43aeca" />
                    <stop offset="1" stopColor="#1e78c1" />
                  </linearGradient>
                  <linearGradient
                    id="linear-gradient-2"
                    x1="428.55"
                    y1="175.25"
                    x2="577.63"
                    y2="175.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#d84200" />
                    <stop offset="1" stopColor="#f77b21" />
                  </linearGradient>
                </defs>
                {/* White Z base */}
                <path
                  d="M482.78,260.75c1.19.93,1.9.7,2.56.7,11.64,0,23.28-.13,34.91.04,5.28.08,9.26-1.96,12.61-5.82,6.65-7.65,15.02-11.22,25.05-9.22,10.91,2.17,18.88,10.09,20.41,21.67,1.93,14.65-9.22,27.42-23.98,27.44-33.84.06-67.68.03-101.53-.04-12.88-.02-23.45-10.9-23.2-23.78.12-6.39,2.68-11.76,7.23-16.25,10.67-10.54,21.3-21.13,31.96-31.7,2.94-2.92,5.9-5.82,8.84-8.73,3.78-3.74,8.16-5.56,13.64-5.6,9.07-.07,16.27,6.88,17.77,13.76,1.41,6.48.03,12.29-4.69,17.02-6.48,6.49-13.13,12.81-19.72,19.19-.49.48-1.13.8-1.87,1.31Z"
                  fill="#fff"
                />
                {/* Colored circuit line as stroke */}
                <path
                  d="M525.16,169.13c-8.14,0-15.88,0-23.62,0-4.91,0-9.82.11-14.72-.02-5.07-.14-9,1.94-12.13,5.72-6.34,7.64-14.43,11.33-24.28,10-9.3-1.26-16.01-6.5-19.69-15.22-3.32-7.86-2.87-15.66,1.59-22.93,4.67-7.62,11.8-11.29,20.67-11.31,27.75-.07,55.5-.05,83.25-.06,5.98,0,11.96-.04,17.93-.02,14.94.05,25.63,12.75,23.1,27.48-.76,4.39-2.73,8.21-5.92,11.34-11.58,11.4-23.19,22.77-34.78,34.16-1.97,1.93-3.8,3.99-6.39,5.16-10.31,4.65-22.24.04-25.39-11.39-2.09-7.61.48-13.77,6.05-19,4.58-4.3,9.07-8.7,13.59-13.06.17-.16.31-.35.74-.85ZM543.12,153.28h0c1.45-.01,2.89-.03,4.34,0,3.39.04,6.14,1.82,7.29,4.7,1.25,3.13.56,6.08-2.07,8.55-1.6,1.5-3.32,2.86-4.9,4.38-4.53,4.33-9.03,8.69-13.5,13.08-1.17,1.15-2.75,1.85-3.81,2.98-1.97,2.09-3.86,4.24-6.01,6.17-.97.87-1.7,1.13-2.94.63-2.62-1.05-5.62.1-7.21,2.56-1.66,2.58-1.41,5.77.65,8,1.82,1.98,5.36,2.5,7.83,1.15,2.6-1.42,4-4.46,3.14-7.16-.36-1.11-.18-1.82.68-2.62,5.22-4.87,10.39-9.78,15.57-14.69,4.29-4.06,8.6-8.09,12.85-12.18,3.66-3.54,4.52-7.75,2.66-12.39-1.63-4.05-5.32-6.38-10.29-6.43-2.71-.03-5.41-.09-8.12,0-1.55.05-2.61-.16-3.46-1.76-1.29-2.41-3.76-3.07-6.32-2.77-2.21.25-4.19,1.19-4.95,3.53-.37,1.11-1.14.96-1.93.96-20.14-.01-40.27-.03-60.41-.01-1.09,0-1.64-.36-2.2-1.31-1.44-2.43-4.19-3.63-6.74-3.16-2.97.55-5.32,3.19-5.46,6.15-.14,2.88,1.94,5.67,4.8,6.45,2.92.79,6.14-.56,7.51-3.24.45-.89.79-1.54,2.01-1.54,20.14.03,40.27,0,60.41-.02.98,0,1.5.26,2.01,1.23,2.31,4.36,8.33,5.13,10.91,1.15,1.45-2.24,3.04-2.5,5.2-2.37.81.05,1.64,0,2.45,0Z"
                  fill="none"
                  stroke="url(#linear-gradient)"
                  strokeWidth={6}
                />
                {/* Dots and other elements */}
                <path
                  className="cls-5"
                  d="M479.85,276.37c1.75-.03,3.06,1.27,3.06,3.04,0,1.69-1.22,2.94-2.91,2.99-1.68.05-3.05-1.18-3.13-2.8-.08-1.58,1.42-3.2,2.99-3.22Z"
                />
                <path
                  className="cls-5"
                  d="M476.47,243.92c-1.56.01-2.91-1.29-2.94-2.84-.03-1.66,1.46-3.22,3.07-3.21,1.57,0,2.89,1.3,2.91,2.86.03,1.72-1.35,3.17-3.04,3.18Z"
                />
                <path
                  className="cls-5"
                  d="M557.9,279.38c-.04,1.61-1.45,2.94-3.07,2.91-1.63-.04-2.97-1.41-2.95-3.01.03-1.75,1.41-3.07,3.13-2.98,1.63.08,2.92,1.47,2.88,3.09Z"
                />
                <path
                  className="cls-6"
                  d="M519.63,202.8c-1.65,0-2.96-1.28-3.01-2.96-.04-1.59,1.34-3.1,2.87-3.13,1.68-.04,3.29,1.54,3.27,3.22-.02,1.54-1.47,2.87-3.13,2.88Z"
                />
                <path
                  className="cls-6"
                  d="M530.42,148.75c1.7-.03,2.97,1.17,3.03,2.85.06,1.73-1.27,3.1-3.01,3.1-1.51,0-2.98-1.46-3.02-3.01-.04-1.58,1.32-2.91,3-2.94Z"
                />
                <path
                  className="cls-6"
                  d="M454.55,148.85c1.43.03,2.91,1.54,2.91,2.95,0,1.41-1.52,2.89-2.96,2.89-1.73,0-3.12-1.44-3.05-3.15.06-1.41,1.57-2.72,3.11-2.68Z"
                />
              </svg>
            </span>
          </div>
          <div className="glass" />
          <div className="content">
            <span className="title">{title}</span>
            {/* <span className="title">{sub}</span> */}
            <span className="text">{sub}</span>
          </div>
          <div className="bottom">
            <div className="view-more">
              <button className="view-more-button">View more</button>
              <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'colorVariant',
})<{ colorVariant: 'primary' | 'secondary' }>`
  .parent {
    width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: ${({ colorVariant }) =>
      colorVariant === 'primary'
        ? 'linear-gradient(135deg, var(--color-primary) 0%, #4f8edc 100%)'
        : 'linear-gradient(135deg, var(--color-secondary) 0%, #f5a286 100%)'};
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
    /* -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: ${({ colorVariant }) =>
      colorVariant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'};
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: ${({ colorVariant }) =>
      colorVariant === 'primary'
        ? 'rgba(30, 120, 193, 0.7)'
        : 'rgba(247, 88, 33, 0.7)'};
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: ${({ colorVariant }) =>
      colorVariant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'};
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: ${({ colorVariant }) =>
      colorVariant === 'primary' ? 'var(--color-primary)' : 'var(--color-secondary)'};
    stroke-width: 3px;
    max-height: 15px;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: ${({ colorVariant }) =>
      colorVariant === 'primary'
        ? 'rgba(30, 120, 193, 0.15)'
        : 'rgba(247, 88, 33, 0.15)'};
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

export default Glass3DCardStyled;