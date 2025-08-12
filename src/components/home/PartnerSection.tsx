"use client";

import Image from 'next/image';
import Link from 'next/link';
import SafeLink from '@/components/ui/SafeLink';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  IconCircleDashedCheck, 
  IconHandFingerRight, 
  IconPhoneCall,
  IconTarget,
  IconBulb,
  IconRocket,
  IconShield
} from '@tabler/icons-react';
import { 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

interface PartnerShowcaseProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const MiniCard = ({ 
  title, 
  description, 
  gradientStart, 
  gradientEnd, 
  index 
}: { 
  title: string; 
  description: string; 
  gradientStart: string; 
  gradientEnd: string; 
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(-1);
  
  return (
    <motion.div 
      className="relative h-full min-h-[400px] group cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(-1)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        rotateX: 2,
        rotateY: 2,
      }}
    >
      {/* Enhanced glowing background with stronger blur */}
      <div 
        className="absolute inset-0 rounded-3xl blur-2xl transform transition-all duration-500 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at center, ${gradientStart}40, ${gradientEnd}20)`,
          opacity: isHovered === index ? '0.6' : '0.3'
        }}
      ></div>
      
      {/* Glass card container with enhanced blur and transparency */}
      <div 
        className="relative h-full overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))`,
          backdropFilter: 'blur(8px) saturate(150%)',
          WebkitBackdropFilter: 'blur(8px) saturate(150%)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: isHovered === index 
            ? '0 8px 32px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 32px rgba(0,0,0,0.3)'
            : '0 4px 16px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.08)'
        }}
      >
        {/* Animated light effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(105deg, 
              transparent 20%, 
              rgba(255,255,255,0.1) 40%,
              rgba(255,255,255,0.1) 60%,
              transparent 80%)`,
            transform: isHovered === index ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.75s ease-in-out'
          }}
        ></div>

        {/* Content container with glass effect */}
        <div className="relative h-full flex flex-col p-6 z-10">
          {/* Enhanced header with glass effect */}
          <div className="flex items-center justify-between mb-4">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
              style={{
                background: `linear-gradient(135deg, ${gradientStart}90, ${gradientEnd}90)`,
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: `0 4px 12px ${gradientStart}30`
              }}
            >
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
              <span className="text-green-400 text-xs font-semibold">NEW</span>
            </div>
          </div>
          
          {/* Enhanced content section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 transition-colors duration-300 line-clamp-2"
              style={{
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                WebkitTextStroke: '0.5px rgba(0,0,0,0.1)'
              }}
            >
              {title}
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed line-clamp-4 font-medium tracking-wide" 
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              {description}
            </p>
          </div>
          
          {/* Enhanced stats with glass effect */}
          <div className="grid grid-cols-3 gap-2 mt-auto">
            {[
              { value: '99%', label: 'Success', color: gradientStart },
              { value: '24/7', label: 'Support', color: gradientEnd },
              { value: 'Fast', label: 'Deploy', color: 'white' }
            ].map((stat, i) => (
              <div 
                key={i}
                className="relative overflow-hidden rounded-xl transition-all duration-300 group-hover:shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="p-2 relative z-10">
                  <div className="text-sm font-bold tracking-wide" 
                    style={{ 
                      color: stat.color,
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white font-medium tracking-wide"
                    style={{
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${gradientStart}40, ${gradientEnd}40)`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PartnerShowcase({ addToRefs }: PartnerShowcaseProps) {
  const [activeTab, setActiveTab] = useState('automation');
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true });

  const solutions: any[] = [
    {
      id: 'automation',
      label: 'Process Assessment & Optimization',
      title: 'Why Partner With GenZbots?',
      description: `At GenZbots, we don't just automate tasks—we reimagine workflows to unlock productivity, accuracy, and scalability. Our solutions cut through operational bottlenecks, freeing your team to focus on strategic growth while we handle the rest.`,
      features: [
        {
          text: 'Borderless Innovation',
          gradientStart: "#a1c4fd",
          gradientEnd: "#c2e9fb",
          description: "With dual hubs in India (cost-efficient delivery) and the US (cutting-edge tech adoption), we blend global expertise with localized execution."
        },
        {
          text: 'Hyper-Personalized Automation',
          gradientStart: "#d4fc79", 
          gradientEnd: "#96e6a1",
          description: "No cookie-cutter solutions. We audit, redesign, and deploy workflows tailored to your industry, systems, and pain points."
        },
        {
          text: 'ROI-First Mindset',
          gradientStart: "#fccb90",
          gradientEnd: "#d57eeb",
          description: "We track time saved, error reduction, and cost impact—so you see measurable gains from Day 1."
        },
        {
          text: 'Future-Proof Tech Stack',
          gradientStart: "#d299c2",
          gradientEnd: "#fef9d7",
          description: "Platform-agnostic approach. We recommend only what fits your needs, whether it's UiPath, Power Automate, or custom Python bots."
        },  
        {
          text: 'White-Glove Partnership',
          gradientStart: "#fddb92",
          gradientEnd: "#d1fdff",
          description: "From pilot to scale, we're with you—offering 24/7 support, continuous optimization, and change management."
        },
      ],
      advantage: [
        "Traditional RPA vs GenZbots' Approach",
        "Generic automation → AI-enhanced workflows (OCR, NLP, predictive triggers)",
        "One-time deployment → Continuous improvement cycles",
        "Vendor lock-ins → Best-fit tool selection (no upsell pressure)",
        "Siloed processes → End-to-end process integration"
      ],
      serve: [
        "SMEs needing affordable, quick-win automations",
        "Enterprises scaling complex workflows across teams",
        "Startups leveraging automation for lean operations",
        "Global Teams requiring seamless cross-border execution"
      ],
      image: 'bg-gray-50'
    },
  ];

  const getActiveSolution = () => {
    return solutions.find(solution => solution.id === activeTab) || solutions[0];
  };

  const activeSolution = getActiveSolution();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {[...Array(25)].map((_, i) => (
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
            {i % 5 === 0 && <Globe className="w-6 h-6 text-blue-400" />}
            {i % 5 === 1 && <Users className="w-8 h-8 text-cyan-400" />}
            {i % 5 === 2 && <Award className="w-5 h-5 text-green-400" />}
            {i % 5 === 3 && <TrendingUp className="w-7 h-7 text-purple-400" />}
            {i % 5 === 4 && <Sparkles className="w-4 h-4 text-orange-400" />}
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white mb-8 shadow-lg">
            <Users className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Partnership Excellence</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {activeSolution.title.split(' ').slice(0, 2).join(' ')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              {activeSolution.title.split(' ').slice(2).join(' ')}
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform Your Business with Intelligent Automation—Designed for the Future
          </p>
        </motion.div>

        {/* Enhanced Main Content */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[700px]">
            {/* Enhanced Features Grid */}
            <motion.div
              className="lg:col-span-3 p-8 lg:p-12"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">{activeSolution.title}</h3>
                <p className="text-blue-200 text-lg leading-relaxed mb-8">{activeSolution.description}</p>
              </div>

              {/* Mini Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {activeSolution.features.map((feature: any, index: number) => (
                  <MiniCard
                    key={index}
                    title={feature.text}
                    description={feature.description}
                    gradientStart={feature.gradientStart}
                    gradientEnd={feature.gradientEnd}
                    index={index}
                  />
                ))}
              </div>

              {/* Call to Action Quote */}
              <motion.div 
                className="bg-white/10 rounded-2xl p-6 border border-white/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex items-center mb-3">
                  <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-yellow-400 font-semibold text-lg">Our Promise</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  "Let's turn your operational friction into fuel for growth."
                </h4>
              </motion.div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SafeLink href="/services/discovery-call">
                  <button className="w-full flex-1 py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative flex items-center justify-center">
                      <IconHandFingerRight size={24} className="mr-3" />
                      Free Audit
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </SafeLink>
                
                <SafeLink href="/contact">
                  <button className="w-full flex-1 py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative flex items-center justify-center">
                      <IconPhoneCall size={24} className="mr-3" />
                      Schedule Call
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </SafeLink>
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div
              className="lg:col-span-2 bg-white/5 p-8 lg:p-12 border-l border-white/20"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* What Sets Us Apart */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3" />
                  What Sets Us Apart
                </h4>
                <div className="space-y-4">
                  {activeSolution.features.map((feature: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90 font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Competitive Advantage */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  Competitive Advantage
                </h4>
                <div className="space-y-3">
                  {activeSolution.advantage.map((advantage: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start p-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                    >
                      <Zap className="w-4 h-4 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Who We Serve */}
              <div>
                <h4 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Who We Serve
                </h4>
                <div className="space-y-3">
                  {activeSolution.serve.map((client: any, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start p-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                    >
                      <Globe className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{client}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-8">Partnership Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-blue-200">Global Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-blue-200">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-blue-200">Countries Served</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}