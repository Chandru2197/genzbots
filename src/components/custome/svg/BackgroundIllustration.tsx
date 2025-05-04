export const BackgroundIllustration = () => (
    <svg 
      className="absolute inset-0 w-full h-full z-0" 
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
    >
      {/* Background Base */}
      <rect x="0" y="0" width="1920" height="1080" fill="#f9f9f9" />
      
      {/* Background grid */}
      <g opacity="0.05">
        {Array.from({ length: 24 }).map((_, i) => (
          <path key={`h-${i}`} d={`M0,${i*50} L1920,${i*50}`} stroke="#000" strokeWidth="1" />
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <path key={`v-${i}`} d={`M${i*50},0 L${i*50},1080`} stroke="#000" strokeWidth="1" />
        ))}
      </g>
  
      {/* Large Abstract Shapes for Background */}
      <circle cx="300" cy="200" r="380" fill="#1e78c1" opacity="0.03" />
      <circle cx="1620" cy="350" r="450" fill="#f75821" opacity="0.03" />
      <circle cx="960" cy="900" r="500" fill="#1e78c1" opacity="0.02" />
      <circle cx="400" cy="900" r="300" fill="#f75821" opacity="0.02" />
      <circle cx="1600" cy="850" r="280" fill="#263859" opacity="0.04" />
  
      {/* Main 3D Elements - Spread across background */}
      <g transform="translate(960, 540) scale(1.5)">
        {/* 3D Platform Layer */}
        <g opacity="0.7">
          <polygon points="-400,-150 400,-150 350,150 -350,150" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="2" opacity="0.2" />
        </g>
        
        {/* Main Workflow Path - arcs across the entire background */}
        <g opacity="0.8">
          <path 
            d="M-450,-100 C-300,-200 -150,-80 0,0 C150,80 300,200 450,100" 
            fill="none" 
            stroke="#1e78c1" 
            strokeWidth="15" 
            strokeLinecap="round"
            opacity="0.3"
          />
          <path 
            d="M-450,-100 C-300,-200 -150,-80 0,0 C150,80 300,200 450,100" 
            fill="none" 
            stroke="#f75821" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeDasharray="10 30"
            opacity="0.5"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="0" 
              to="40" 
              dur="3s" 
              repeatCount="indefinite" 
            />
          </path>
        </g>
  
        {/* Connected Nodes and Components - spread throughout */}
        <g opacity="0.8">
          {/* Node 1 */}
          <g transform="translate(-320, -70)">
            <ellipse cx="0" cy="20" rx="45" ry="18" fill="#3d7b9c" opacity="0.8" />
            <rect x="-45" y="-25" width="90" height="45" fill="#4a90aa" opacity="0.8" />
            <ellipse cx="0" cy="-25" rx="45" ry="18" fill="#5aafcc" opacity="0.8" />
            <ellipse cx="0" cy="-25" rx="30" ry="12" fill="#263859" opacity="0.8" />
          </g>
          
          {/* Node 2 */}
          <g transform="translate(0, 40)">
            <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="#f75821" opacity="0.8" />
            <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="#f27d5f" opacity="0.8" />
            <circle cx="0" cy="0" r="22" fill="#f5a58a" opacity="0.9" />
            <circle cx="0" cy="0" r="15" fill="#f9f9f9" opacity="0.9" />
          </g>
          
          {/* Node 3 */}
          <g transform="translate(320, -70)">
            <polygon points="0,-60 60,-30 60,30 0,60 -60,30 -60,-30" fill="#263859" opacity="0.8" />
            <polygon points="0,-60 60,-30 0,0 -60,-30" fill="#384d70" opacity="0.8" />
            <polygon points="0,0 60,-30 60,30 0,60" fill="#263859" opacity="0.8" />
            <polygon points="0,0 0,60 -60,30 -60,-30" fill="#2d3b57" opacity="0.8" />
            <polygon points="-35,-15 35,-15 35,20 -35,20" fill="#1e78c1" opacity="0.9" />
          </g>
        </g>
  
        {/* Connecting Lines Between Nodes */}
        <g opacity="0.5">
          <line x1="-270" y1="-70" x2="-52" y2="40" stroke="#1e78c1" strokeWidth="5" opacity="0.5" />
          <line x1="52" y1="40" x2="260" y2="-70" stroke="#f75821" strokeWidth="5" opacity="0.5" />
        </g>
  
        {/* Floating 3D Objects - scattered across the background */}
        {/* Data Cubes */}
        <g transform="translate(-380, -200) rotate(15)">
          <polygon points="0,-30 30,-15 30,15 0,30 -30,15 -30,-15" fill="#1e78c1" stroke="#263859" strokeWidth="1" opacity="0.7" />
          <polygon points="0,-30 30,-15 0,0 -30,-15" fill="#5aafcc" stroke="#263859" strokeWidth="1" opacity="0.7" />
          <polygon points="0,0 30,-15 30,15 0,30" fill="#3d7b9c" stroke="#263859" strokeWidth="1" opacity="0.7" />
          <polygon points="0,0 0,30 -30,15 -30,-15" fill="#4a90aa" stroke="#263859" strokeWidth="1" opacity="0.7" />
        </g>
  
        <g transform="translate(380, -220) rotate(-15)">
          <polygon points="0,-30 30,-15 30,15 0,30 -30,15 -30,-15" fill="#f75821" stroke="#d05533" strokeWidth="1" opacity="0.7" />
          <polygon points="0,-30 30,-15 0,0 -30,-15" fill="#f27d5f" stroke="#d05533" strokeWidth="1" opacity="0.7" />
          <polygon points="0,0 30,-15 30,15 0,30" fill="#d05533" stroke="#c04523" strokeWidth="1" opacity="0.7" />
          <polygon points="0,0 0,30 -30,15 -30,-15" fill="#f5a58a" stroke="#d05533" strokeWidth="1" opacity="0.7" />
        </g>
  
        {/* Document Stack */}
        <g transform="translate(-280, -250) rotate(-15)">
          <rect x="-35" y="-45" width="70" height="90" rx="8" fill="white" opacity="0.7" />
          <rect x="-30" y="-40" width="60" height="80" rx="5" fill="#f9f9f9" opacity="0.7" />
          <line x1="-20" y1="-25" x2="20" y2="-25" stroke="#1e78c1" strokeWidth="3" />
          <line x1="-20" y1="-10" x2="15" y2="-10" stroke="#263859" strokeWidth="3" />
          <line x1="-20" y1="5" x2="20" y2="5" stroke="#f75821" strokeWidth="3" />
          <line x1="-20" y1="20" x2="10" y2="20" stroke="#1e78c1" strokeWidth="3" />
        </g>
  
        {/* Dashboard/Monitor */}
        <g transform="translate(250, -280) rotate(10)">
          <rect x="-40" y="-50" width="80" height="70" rx="5" fill="#263859" opacity="0.7" />
          <rect x="-35" y="-45" width="70" height="60" rx="3" fill="#384d70" opacity="0.7" />
          <rect x="-30" y="-40" width="60" height="50" rx="2" fill="#5aafcc" opacity="0.8" />
        </g>
  
        {/* Gears */}
        <g transform="translate(120, -220)">
          <circle cx="0" cy="0" r="35" fill="#263859" opacity="0.7" />
          <circle cx="0" cy="0" r="28" fill="#384d70" opacity="0.7" />
          <circle cx="0" cy="0" r="15" fill="#5aafcc" opacity="0.8" />
          <rect x="-4" y="-40" width="8" height="12" rx="3" fill="#384d70" opacity="0.7" />
          <rect x="-4" y="28" width="8" height="12" rx="3" fill="#384d70" opacity="0.7" />
          <rect x="-40" y="-4" width="12" height="8" rx="3" fill="#384d70" opacity="0.7" />
          <rect x="28" y="-4" width="12" height="8" rx="3" fill="#384d70" opacity="0.7" />
          <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate" 
            from="0" 
            to="360" 
            dur="60s" 
            repeatCount="indefinite" 
            additive="sum" 
          />
        </g>
  
        {/* Secondary gear */}
        <g transform="translate(170, -180)">
          <circle cx="0" cy="0" r="22" fill="#f75821" opacity="0.7" />
          <circle cx="0" cy="0" r="18" fill="#f27d5f" opacity="0.7" />
          <circle cx="0" cy="0" r="9" fill="#f5a58a" opacity="0.8" />
          <rect x="-3" y="-25" width="6" height="8" rx="2" fill="#f27d5f" opacity="0.7" />
          <rect x="-3" y="17" width="6" height="8" rx="2" fill="#f27d5f" opacity="0.7" />
          <rect x="-25" y="-3" width="8" height="6" rx="2" fill="#f27d5f" opacity="0.7" />
          <rect x="17" y="-3" width="8" height="6" rx="2" fill="#f27d5f" opacity="0.7" />
          <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate" 
            from="360" 
            to="0" 
            dur="40s" 
            repeatCount="indefinite" 
            additive="sum" 
          />
        </g>
  
        {/* Data particles flowing throughout background */}
        <g>
          <circle cx="-450" cy="-100" r="6" fill="#1e78c1" opacity="0.7">
            <animate attributeName="cx" values="-450;450" dur="9s" repeatCount="indefinite" />
            <animate attributeName="cy" values="-100;-150;-50;0;50;100" dur="9s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="-400" cy="-50" r="8" fill="#f75821" opacity="0.7">
            <animate attributeName="cx" values="-450;450" dur="12s" repeatCount="indefinite" />
            <animate attributeName="cy" values="-50;-100;-20;30;70;100" dur="12s" repeatCount="indefinite" />
          </circle>
          
          <circle cx="-350" cy="0" r="5" fill="#5aafcc" opacity="0.7">
            <animate attributeName="cx" values="-450;450" dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" values="0;-50;-100;-50;0;50" dur="7s" repeatCount="indefinite" />
          </circle>
          
          <rect x="-420" y="-80" width="10" height="10" fill="#f27d5f" opacity="0.7">
            <animate attributeName="x" values="-450;450" dur="14s" repeatCount="indefinite" />
            <animate attributeName="y" values="-80;-40;-90;0;40;80" dur="14s" repeatCount="indefinite" />
          </rect>
          
          <polygon points="-430,-90 -420,-80 -430,-70 -440,-80" fill="#384d70" opacity="0.7">
            <animate attributeName="points" values="-430,-90 -420,-80 -430,-70 -440,-80; 430,-90 440,-80 430,-70 420,-80" dur="11s" repeatCount="indefinite" />
          </polygon>
        </g>
      </g>
  
      {/* Additional background elements */}
      <g opacity="0.5">
        {/* Bottom workflow path */}
        <path 
          d="M0,800 C500,900 1400,850 1920,750" 
          fill="none" 
          stroke="#1e78c1" 
          strokeWidth="8" 
          strokeLinecap="round" 
          opacity="0.15"
        />
        
        {/* Top-right corner elements */}
        <circle cx="1750" cy="150" r="50" fill="#f75821" opacity="0.1" />
        <circle cx="1800" cy="200" r="70" fill="#1e78c1" opacity="0.1" />
        
        {/* Bottom-left corner elements */}
        <circle cx="170" cy="900" r="60" fill="#1e78c1" opacity="0.1" />
        <circle cx="100" cy="850" r="40" fill="#f75821" opacity="0.1" />
      </g>
      
      {/* Additional 3D objects scattered around the edges */}
      <g transform="translate(150, 300)">
        <polygon points="0,-40 40,-20 40,20 0,40 -40,20 -40,-20" fill="#1e78c1" stroke="#0e68b1" strokeWidth="1" opacity="0.15" />
      </g>
      
      <g transform="translate(1750, 700)">
        <polygon points="0,-40 40,-20 40,20 0,40 -40,20 -40,-20" fill="#f75821" stroke="#e74811" strokeWidth="1" opacity="0.15" />
      </g>
      
      {/* Subtle overlay for better text readability */}
      <rect x="0" y="0" width="1920" height="1080" fill="white" opacity="0.3" />
    </svg>
  );
  
  