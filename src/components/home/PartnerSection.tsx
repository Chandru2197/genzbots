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
  index,
  icon: IconComponent
}: {
  title: string;
  description: string;
  gradientStart: string;
  gradientEnd: string;
  index: number;
  icon: any;
}) => {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <motion.div
      className="relative h-full min-h-[420px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(-1)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
    >
      {/* Colorful background glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-xl transform transition-all duration-500 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
          opacity: 0.6,
        }}
      ></div>

      {/* Glassmorphism card */}
      <div
        className="relative h-full overflow-hidden rounded-3xl transform transition-all duration-500 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255,255,255,0.25), 
            rgba(255,255,255,0.1))`,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: `
            0 8px 32px rgba(0,0,0,0.12),
            0 0 0 1px rgba(255,255,255,0.05),
            inset 0 1px 0 rgba(255,255,255,0.3),
            inset 0 -1px 0 rgba(255,255,255,0.1),
            0 20px 40px ${gradientStart}20
          `
        }}
      >
        {/* Subtle gradient overlay for depth */}
        <div
          className="absolute inset-0 rounded-3xl opacity-30"
          style={{
            background: `linear-gradient(135deg, 
              ${gradientStart}15, 
              transparent 50%, 
              ${gradientEnd}15)`
          }}
        ></div>

        {/* Animated light reflection */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `linear-gradient(105deg, 
              transparent 30%, 
              rgba(255,255,255,0.4) 50%,
              transparent 70%)`,
            transform: isHovered === index ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.8s ease-in-out'
          }}
        ></div>

        {/* Card content */}
        <div className="relative h-full p-6 flex flex-col z-10">
          {/* Header with icon and status */}
          <div className="flex items-center justify-between mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255,255,255,0.4), 
                  rgba(255,255,255,0.2))`,
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.4)',
                boxShadow: `
                  0 8px 32px rgba(0,0,0,0.1),
                  inset 0 1px 0 rgba(255,255,255,0.5),
                  0 4px 12px ${gradientStart}30
                `
              }}
            >
              <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
              <span className="text-white text-sm font-bold tracking-wide"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                }}
              >
                NEW
              </span>
            </div>
          </div>

          {/* Title and description */}
          <div className="mb-6 flex-grow">
            <h3 className="text-2xl font-bold mb-4 text-white leading-tight"
              style={{
                textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
              }}
            >
              {title}
            </h3>
            <p className="text-white text-sm leading-relaxed font-medium"
              style={{
                textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)'
              }}
            >
              {description}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 mt-auto">
            {[
              { value: '99%', label: 'Success', color: '#00ff88' },
              { value: '24/7', label: 'Support', color: '#00d4ff' },
              { value: 'Fast', label: 'Deploy', color: '#ff6b6b' }
            ].map((stat, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl p-3 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255,255,255,0.3), 
                    rgba(255,255,255,0.1))`,
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  boxShadow: `
                    0 4px 12px rgba(0,0,0,0.1),
                    inset 0 1px 0 rgba(255,255,255,0.4)
                  `
                }}
              >
                <div className="text-sm font-bold mb-1"
                  style={{
                    color: stat.color,
                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-white"
                  style={{
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                  }}
                >
                  {stat.label}
                </div>
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
          text: 'Global Expertise',
          gradientStart: "#1e3a8a",
          gradientEnd: "#3b82f6",
          description: "Dual hubs in India and the US provide cost-efficient delivery with cutting-edge technology adoption for optimal results.",
          icon: Globe
        },
        {
          text: 'Tailored Solutions',
          gradientStart: "#dc2626",
          gradientEnd: "#f97316",
          description: "Custom automation workflows designed specifically for your industry, systems, and unique business challenges.",
          icon: IconTarget
        },
        {
          text: 'Proven ROI',
          gradientStart: "#0891b2",
          gradientEnd: "#06b6d4",
          description: "Measurable results from day one with tracked time savings, error reduction, and quantifiable cost impact.",
          icon: TrendingUp
        },
        {
          text: 'Future-Ready Technology',
          gradientStart: "#7c3aed",
          gradientEnd: "#a855f7",
          description: "Platform-agnostic solutions using the best tools for your needs - UiPath, Power Automate, or custom development.",
          icon: IconBulb
        },
        {
          text: 'End-to-End Support',
          gradientStart: "#059669",
          gradientEnd: "#10b981",
          description: "Complete partnership from pilot to scale with 24/7 support, continuous optimization, and change management.",
          icon: IconCircleDashedCheck
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                {activeSolution.features.map((feature: any, index: number) => (
                  <MiniCard
                    key={index}
                    title={feature.text}
                    description={feature.description}
                    gradientStart={feature.gradientStart}
                    gradientEnd={feature.gradientEnd}
                    index={index}
                    icon={feature.icon}
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