"use client";

import React,{ useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Lightbulb,
  Code,
  Rocket,
  Server,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import SafeLink from '@/components/ui/SafeLink';

interface AutomationCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  technologies?: string[];
  delay?: number;
  customImage?: string;
  servicePath?: string;
}

// const AutomationCard = ({
//   title,
//   description,
//   icon: Icon,
//   technologies = [],
//   delay = 0,
//   customImage,
//   servicePath,
// }: AutomationCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, { once: true, margin: "-100px" });

//   const cardColors = ["from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-purple-500 to-indigo-500", "from-orange-500 to-red-500", "from-pink-500 to-rose-500", "from-yellow-500 to-orange-500"];
//   const colorIndex = delay % cardColors.length;

//   const handleButtonClick = (e: React.MouseEvent) => {
//     console.log('Button clicked!', servicePath);
//     // Don't prevent default - let Next.js Link handle it
//   };
//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 30, rotateY: -15 }}
//       animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
//       transition={{ duration: 0.8, delay: delay * 0.1 }}
//       className="h-full perspective-1000"
//     >
//       <div
//         className={`relative h-full group cursor-pointer transform-gpu transition-all duration-500 hover:scale-105 ${
//           isHovered ? 'rotate-y-12' : ''
//         }`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Glowing background */}
//         <div className={`absolute inset-0 bg-gradient-to-r ${cardColors[colorIndex]} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-105`}></div>
        
//         {/* Main card */}
//         <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
//           {/* Animated gradient overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[colorIndex]} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
          
//           {/* Content */}
//           <div className="relative h-full flex flex-col p-8">
//             {/* Header with icon */}
//             <div className="flex items-center justify-between mb-6">
//               {customImage ? (
//                 <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
//                   <Image
//                     src={customImage}
//                     alt={title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ) : Icon ? (
//                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cardColors[colorIndex]} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
//                   <Icon size={28} />
//                 </div>
//               ) : null}
              
//               {/* Floating status indicator */}
//               <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
//             </div>
            
//             {/* Title */}
//             <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
//               {title}
//             </h3>
            
//             {/* Description */}
//             <p className="text-blue-200 text-base mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
//               {description}
//             </p>
            
//             {/* Technologies/Features */}
//             <div className="flex-1 space-y-3 mb-6">
//               {technologies.map((tech, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-center p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 hover:scale-105"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: (delay * 0.1) + (index * 0.1) }}
//                 >
//                   <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardColors[colorIndex]} mr-3 shadow-lg`}></div>
//                   <span className="text-white/90 font-medium">{tech}</span>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* CTA Button */}
//             <Link
//               href={servicePath ?? "/"}
//               className={`w-full py-4 px-6 bg-gradient-to-r ${cardColors[colorIndex]} text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center`}
//               style={{ textDecoration: "none" }}
//             >
//               <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none"></div>
//               <span className="relative flex items-center justify-center">
//                 Learn More
//                 <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
//               </span>
//             </Link>
//           </div>

//           {/* Decorative elements */}
//           <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
//             <Sparkles className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
//           </div>
          
//           {/* Animated border */}
//           <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const AutomationCard = ({
  title,
  description,
  icon: Icon,
  technologies = [],
  delay = 0,
  customImage,
  servicePath,
}: AutomationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const cardColors = ["from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-purple-500 to-indigo-500", "from-orange-500 to-red-500", "from-pink-500 to-rose-500", "from-yellow-500 to-orange-500"];
  const colorIndex = delay % cardColors.length;

  // Handle button click for debugging
  const handleButtonClick = (e: React.MouseEvent) => {
    console.log('Button clicked!', servicePath);
    // Don't prevent default - let Next.js Link handle it
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: delay * 0.1 }}
      className="h-full perspective-1000"
    >
      <div
        className={`relative h-full group transition-all duration-500 hover:scale-105 ${
          isHovered ? 'rotate-y-12' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glowing background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${cardColors[colorIndex]} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-105`}></div>
        
        {/* Main card */}
        <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Animated gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[colorIndex]} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col p-8">
            {/* Header with icon */}
            <div className="flex items-center justify-between mb-6">
              {customImage ? (
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={customImage}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : Icon ? (
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cardColors[colorIndex]} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <Icon size={28} />
                </div>
              ) : null}
              
              {/* Floating status indicator */}
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-blue-200 text-base mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
              {description}
            </p>
            
            {/* Technologies/Features */}
            <div className="flex-1 space-y-3 mb-6">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: (delay * 0.1) + (index * 0.1) }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cardColors[colorIndex]} mr-3 shadow-lg`}></div>
                  <span className="text-white/90 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button - Fixed version */}
            <SafeLink
              href={servicePath ?? "/"}
              onClick={handleButtonClick}
              className={`relative w-full py-4 px-6 bg-gradient-to-r ${cardColors[colorIndex]} text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center z-10 cursor-pointer`}
              style={{ textDecoration: "none" }}
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none"></div>
              <span className="relative flex items-center justify-center z-10">
                Learn More
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              </span>
            </SafeLink>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm pointer-events-none">
            <Sparkles className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
          </div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AutomationCards({ addToRefs }: { addToRefs?: (el: HTMLElement | null) => void }) {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  useEffect(() => {
    if (addToRefs && headingRef.current) addToRefs(headingRef.current);
  }, [addToRefs]);

  const services = [
    {
      title: "Discovery Call (Free, 30 mins)",
      description: "We analyze your pain points via:",
      icon: Search,
      customImage: "/assets/images/customer-service.png",
      technologies: ["Process audit", "ROI estimation", "Bot recommendation"],
      servicePath: "/automation-process/discovery-call"
    },
    {
      title: "Bot Blueprint (48 hrs)",
      description: "You receive",
      icon: Lightbulb,
      customImage: "/assets/images/prototype.png",
      technologies: ["Custom workflow diagram", "Timeline & pricing", "Integration checklist"],
      servicePath: "/automation-process/bot-blueprint"
    },
    {
      title: "Build & Test (1-3 weeks)",
      description: "We:",
      icon: Code,
      customImage: "/assets/images/quality-control.png",
      technologies: ["Develop in agile sprints", "Share weekly demo videos", "Train your team via Discord"],
      servicePath: "/automation-process/build-and-test"
    },
    {
      title: "Hypercare Launch (2 weeks)",
      description: "Includes:",
      icon: Rocket,
      customImage: "/assets/images/healthcare.png",
      technologies: ["24/7 priority support", "Performance analytics", "3 free tweaks"],
      servicePath: "/automation-process/hyper-care"
    },
    {
      title: "Scale & Optimize (Ongoing)",
      description: "We:",
      icon: Server,
      customImage: "/assets/images/optimization.png",
      technologies: [
        "Suggest new automations",
        "Provide quarterly health checks",
        "Celebrate your time savings!"
      ],
      servicePath: "/automation-process/scale-optimize"
    },
    {
      title: "Contact Us",
      description: "Ready to transform your business processes? Get a complimentary assessment.",
      customImage: "/assets/images/operator.png",
      icon: MessageSquare,
      technologies: ["AI/ML Integration", "Custom Solutions"],
      servicePath: "/contact"
    },
  ];

  return (
    <section id="automation" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <Clock className="w-6 h-6 text-blue-400" />}
            {i % 4 === 1 && <TrendingUp className="w-8 h-8 text-cyan-400" />}
            {i % 4 === 2 && <Zap className="w-5 h-5 text-green-400" />}
            {i % 4 === 3 && <Sparkles className="w-7 h-7 text-purple-400" />}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white mb-8 shadow-lg">
            <Rocket className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Our Automation Process</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Business Process
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Automation is a journey, not a destination. Our ongoing support ensures your solutions 
            evolve with your business, delivering continuous value and innovation.
          </p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <AutomationCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              customImage={service.customImage}
              technologies={service.technologies}
              delay={index}
              servicePath={service.servicePath}
            />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Transformation?</h3>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking businesses that have revolutionized their operations with our proven automation process.
            </p>
            <SafeLink href="/contact">
              <button className="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]">
                Contact Us Today
                <ArrowRight className="w-6 h-6 ml-3 inline" />
              </button>
            </SafeLink>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
}