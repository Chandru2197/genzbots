"use client";

import Image from 'next/image';
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
}) => (
  <motion.div
    className="relative group cursor-pointer h-full"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    {/* Glowing background */}
    <div 
      className="absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
      style={{
        background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`
      }}
    ></div>
    
    {/* Main card */}
    <div className="relative h-full bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 p-6 shadow-2xl overflow-hidden">
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`
        }}
      ></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <h4 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-200 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-white/80 text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        {/* Decorative icon */}
        <div className="mt-4 flex justify-end">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`
            }}
          >
            <Star className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white mb-8 shadow-lg">
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
                <button className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative flex items-center justify-center">
                    <IconHandFingerRight size={24} className="mr-3" />
                    Free Audit
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                
                <button className="flex-1 py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <span className="relative flex items-center justify-center">
                    <IconPhoneCall size={24} className="mr-3" />
                    Schedule Call
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
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
      `}</style>
    </section>
  );
}