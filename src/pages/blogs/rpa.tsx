"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Bot,
  Zap,
  TrendingUp,
  CheckCircle,
  Target,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const RPABlogPost = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and reduce processing time by up to 80%"
    },
    {
      icon: Target,
      title: "Improved Accuracy",
      description: "Eliminate human errors and ensure consistent, reliable results"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce operational costs and maximize return on investment"
    },
    {
      icon: CheckCircle,
      title: "24/7 Operations",
      description: "Bots work around the clock without breaks or downtime"
    }
  ];

  const useCases = [
    "Data Entry and Migration",
    "Invoice Processing",
    "Customer Service Automation",
    "Report Generation",
    "Email Management",
    "Compliance Monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
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
            <Bot className="w-6 h-6 text-cyan-400" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="pt-8 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-cyan-300 hover:text-white transition-colors duration-300 group"
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
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full mb-6 shadow-lg">
              <Bot className="w-5 h-5 mr-2" />
              <span className="font-semibold">RPA</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                RPA: Automation
              </span>
              <br />
              <span className="text-white">Made Simple</span>
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-blue-200 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>July 10, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>By John Smith</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/assets/images/robotic-process-automation.png"
                alt="RPA Automation"
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
                <p className="text-xl text-blue-100 leading-relaxed mb-6">
                  In today's fast-paced business environment, organizations are constantly seeking ways to improve efficiency, reduce costs, and eliminate human error. Robotic Process Automation (RPA) has emerged as a game-changing technology that addresses these challenges head-on.
                </p>
                
                <p className="text-lg text-blue-200 leading-relaxed mb-8">
                  RPA represents a paradigm shift in how businesses approach repetitive, rule-based tasks. By deploying software robots (bots) to handle routine processes, companies can free up their human workforce to focus on higher-value activities that require creativity, critical thinking, and emotional intelligence.
                </p>
              </div>

              {/* What is RPA Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Bot className="w-8 h-8 mr-3 text-cyan-400" />
                  What is RPA?
                </h2>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-cyan-500/30 mb-6">
                  <p className="text-blue-100 leading-relaxed">
                    Robotic Process Automation (RPA) is a technology that uses software robots or "bots" to automate routine, rule-based business processes. These bots can interact with applications, manipulate data, trigger responses, and communicate with other systems just like humans do – but faster, more accurately, and without getting tired.
                  </p>
                </div>
                
                <p className="text-blue-200 leading-relaxed mb-6">
                  Unlike traditional automation solutions that require extensive programming and system integration, RPA bots work at the user interface level. They can be deployed quickly across various applications without disrupting existing IT infrastructure, making RPA an attractive solution for organizations looking to digitize their operations rapidly.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-green-400" />
                  Key Benefits of RPA
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                          <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Common Use Cases */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-purple-400" />
                  Common RPA Use Cases
                </h2>
                
                <p className="text-blue-200 leading-relaxed mb-6">
                  RPA can be applied across various industries and departments. Here are some of the most common use cases where RPA delivers significant value:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100 font-medium">{useCase}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Getting Started */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                  Getting Started with RPA
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-500/30">
                    <h3 className="text-xl font-semibold text-white mb-3">1. Process Identification</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Start by identifying repetitive, rule-based processes that consume significant time and resources. Look for tasks with high volume, low complexity, and minimal exceptions.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-semibold text-white mb-3">2. Process Assessment</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Evaluate the complexity, frequency, and potential ROI of each process. Consider factors like data quality, system stability, and regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <h3 className="text-xl font-semibold text-white mb-3">3. Implementation & Testing</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Develop, test, and deploy RPA bots in a controlled environment. Ensure proper error handling, monitoring, and governance frameworks are in place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-8 h-8 mr-3 text-cyan-400" />
                  The Future of Work
                </h2>
                
                <p className="text-blue-100 leading-relaxed mb-6">
                  RPA is not just about replacing human workers – it's about augmenting human capabilities and creating a more efficient, productive workplace. As businesses continue to embrace digital transformation, RPA will play an increasingly critical role in helping organizations stay competitive and agile.
                </p>
                
                <p className="text-blue-100 leading-relaxed mb-8">
                  The key to successful RPA implementation lies in choosing the right processes, maintaining proper governance, and ensuring seamless integration with existing systems. With the right approach, RPA can deliver significant value while positioning your organization for future growth.
                </p>
                
                <div className="flex items-center justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    Start Your RPA Journey
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

export default RPABlogPost;