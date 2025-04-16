// File: types.d.ts

// Extending HTML elements to support data-speed attribute for parallax effects
declare namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
        'data-speed'?: string;
      }
    }
  }
  
  // Types for the parallax props
interface ParallaxProps {
  addToRefs: (el: HTMLElement | null) => void;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}