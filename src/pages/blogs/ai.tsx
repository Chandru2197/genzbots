"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Brain,
  Zap,
  TrendingUp,
  Cpu,
  Database,
  Eye,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Target,
  Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AIBlogPost = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Self-improving algorithms that learn from data patterns and make predictions"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis for object recognition and classification"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Understanding and generating human language for better communication"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "Forecasting future trends and outcomes based on historical data"
    }
  ];

  const industryApplications = [
    {
      industry: "Healthcare",
      applications: ["Medical imaging analysis", "Drug discovery", "Patient diagnosis support"]
    },
    {
      industry: "Finance",
      applications: ["Fraud detection", "Risk assessment", "Algorithmic trading"]
    },
    {
      industry: "Retail",
      applications: ["Personalized recommendations", "Inventory optimization", "Customer service automation"]
    },
    {
      industry: "Manufacturing",
      applications: ["Quality control", "Predictive maintenance", "Supply chain optimization"]
    }
  ];

  const futureTrends = [
    "Edge AI for real-time processing",
    "Explainable AI for transparency",
    "AI-powered automation at scale",
    "Ethical AI frameworks",
    "Quantum-enhanced machine learning",
    "Augmented human intelligence"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <Brain className="w-6 h-6 text-purple-400" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="pt-8 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pt-12 pb-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full mb-6 shadow-lg">
              <Brain className="w-5 h-5 mr-2" />
              <span className="font-semibold">AI</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AI: The Future
              </span>
              <br />
              <span className="text-white">is Now</span>
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-purple-200 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>July 8, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>7 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>By Sarah Johnson</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/assets/images/artificial-intelligence.jpg"
                alt="AI Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <Share2 className="w-5 h-5" />
                <span>Share Article</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-20"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              
              {/* Introduction */}
              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-xl text-purple-100 leading-relaxed mb-6">
                  Artificial Intelligence (AI) has transcended from science fiction to everyday reality, fundamentally transforming how we work, communicate, and solve complex problems. What once seemed impossible is now not just possible – it's becoming essential for business success.
                </p>
                
                <p className="text-lg text-purple-200 leading-relaxed mb-8">
                  From predictive analytics that forecast market trends to conversational AI that enhances customer service, AI is no longer a futuristic concept. It's here, it's powerful, and it's reshaping industries at an unprecedented pace. The organizations that embrace AI today will be the leaders of tomorrow.
                </p>
              </div>

              {/* Understanding AI */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-purple-400" />
                  Understanding AI Today
                </h2>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30 mb-6">
                  <p className="text-purple-100 leading-relaxed">
                    Modern AI encompasses a broad range of technologies that enable machines to perform tasks typically requiring human intelligence. This includes learning from data, recognizing patterns, making decisions, and even understanding natural language.
                  </p>
                </div>
                
                <p className="text-purple-200 leading-relaxed mb-6">
                  Unlike traditional software that follows pre-programmed rules, AI systems can adapt, learn, and improve over time. This capability makes them incredibly powerful for handling complex, variable, and evolving challenges that would be impossible to solve with conventional approaches.
                </p>
              </div>

              {/* AI Capabilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <Cpu className="w-8 h-8 mr-3 text-indigo-400" />
                  Core AI Capabilities
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aiCapabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                          <capability.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                          <p className="text-purple-200 leading-relaxed">{capability.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Industry Applications */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-8 h-8 mr-3 text-green-400" />
                  AI Across Industries
                </h2>
                
                <p className="text-purple-200 leading-relaxed mb-8">
                  AI is revolutionizing virtually every industry, creating new opportunities and solving long-standing challenges. Here's how different sectors are leveraging AI to drive innovation:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industryApplications.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Target className="w-6 h-6 mr-2 text-purple-400" />
                        {item.industry}
                      </h3>
                      <ul className="space-y-2">
                        {item.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                            <span className="text-purple-200">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AI Implementation Strategy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                  Implementing AI Successfully
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
                    <h3 className="text-xl font-semibold text-white mb-3">1. Data Foundation</h3>
                    <p className="text-purple-100 leading-relaxed">
                      AI is only as good as the data it learns from. Ensure you have clean, relevant, and sufficient data to train your AI models effectively.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-semibold text-white mb-3">2. Start Small, Scale Smart</h3>
                    <p className="text-purple-100 leading-relaxed">
                      Begin with pilot projects that demonstrate clear value, then gradually expand AI capabilities across your organization.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-500/30">
                    <h3 className="text-xl font-semibold text-white mb-3">3. Human-AI Collaboration</h3>
                    <p className="text-purple-100 leading-relaxed">
                      The most successful AI implementations augment human capabilities rather than replace them entirely. Focus on creating synergies between human creativity and AI efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Trends */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-cyan-400" />
                  The Future of AI
                </h2>
                
                <p className="text-purple-200 leading-relaxed mb-6">
                  As AI continues to evolve, several key trends are shaping its future development and application:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {futureTrends.map((trend, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                      className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-purple-100 font-medium">{trend}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-8 border border-purple-500/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-8 h-8 mr-3 text-purple-400" />
                  Embracing the AI Revolution
                </h2>
                
                <p className="text-purple-100 leading-relaxed mb-6">
                  The AI revolution is not a distant future – it's happening right now. Organizations that embrace AI today will have a significant competitive advantage tomorrow. The key is to approach AI implementation strategically, focusing on real business value rather than just technological novelty.
                </p>
                
                <p className="text-purple-100 leading-relaxed mb-8">
                  As we stand at the threshold of an AI-powered future, the question isn't whether your organization should adopt AI – it's how quickly you can do so effectively. The future belongs to those who can harness the power of artificial intelligence to augment human potential and drive innovation.
                </p>
                
                <div className="flex items-center justify-center">
                  <Link
                    href="/contactus"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-2xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    Explore AI Solutions
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </div>
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
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIBlogPost;