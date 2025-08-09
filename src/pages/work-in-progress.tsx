import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, 
  ArrowLeft, 
  Clock, 
  Code, 
  Sparkles, 
  Zap, 
  Rocket,
  Settings,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import SafeLink from '@/components/ui/SafeLink';
import Head from 'next/head';

const WorkInProgressPage = () => {
  const progressSteps = [
    { label: 'Planning', status: 'completed', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Development', status: 'in-progress', icon: Code, color: 'text-blue-400' },
    { label: 'Testing', status: 'pending', icon: Settings, color: 'text-gray-400' },
    { label: 'Launch', status: 'pending', icon: Rocket, color: 'text-gray-400' }
  ];

  return (
    <>
      <Head>
        <title>Work in Progress - GenZBots</title>
        <meta name="description" content="This feature is currently under development. Stay tuned for exciting updates!" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
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
              {i % 4 === 0 && <Hammer className="w-6 h-6 text-purple-400" />}
              {i % 4 === 1 && <Code className="w-8 h-8 text-blue-400" />}
              {i % 4 === 2 && <Sparkles className="w-5 h-5 text-cyan-400" />}
              {i % 4 === 3 && <Zap className="w-7 h-7 text-indigo-400" />}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Content */}
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center border-4 border-white/30 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(79, 70, 229, 0.8))',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Animated background */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                      animation: 'spin 3s linear infinite'
                    }}
                  ></div>
                  
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative z-10"
                  >
                    <Hammer className="w-14 h-14 text-white" />
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Code className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
                
                <div className="absolute -bottom-3 -left-3">
                  <motion.div 
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Work in
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Progress
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're crafting something amazing for you! This feature is currently under active development. 
              Our team is working around the clock to bring you cutting-edge automation solutions.
            </motion.p>

            {/* Progress Timeline */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Development Progress</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                {progressSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={step.label} className="flex flex-col items-center">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          step.status === 'completed' 
                            ? 'bg-green-500/20 border-green-400' 
                            : step.status === 'in-progress'
                            ? 'bg-blue-500/20 border-blue-400 animate-pulse'
                            : 'bg-gray-500/20 border-gray-400'
                        }`}
                      >
                        <IconComponent className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <span className={`mt-2 text-sm font-semibold ${step.color}`}>
                        {step.label}
                      </span>
                      {index < progressSteps.length - 1 && (
                        <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mt-8 absolute translate-x-20"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Rocket className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Enhanced Performance</h4>
                <p className="text-purple-200 text-sm">Lightning-fast automation with improved efficiency</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">New Features</h4>
                <p className="text-purple-200 text-sm">Cutting-edge tools and capabilities</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Better Experience</h4>
                <p className="text-purple-200 text-sm">Intuitive interface and seamless workflow</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <SafeLink href="/">
                <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                  <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Home
                </button>
              </SafeLink>
              
              <SafeLink href="/contact">
                <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Get Notified When Ready
                </button>
              </SafeLink>
            </motion.div>

            {/* Footer Message */}
            <motion.div
              className="pt-6 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-purple-200 text-sm mb-2">
                <strong>Estimated Launch:</strong> Coming Soon
              </p>
              <p className="text-purple-200 text-sm">
                Follow our progress and be the first to experience the future of automation.
              </p>
            </motion.div>
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
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default WorkInProgressPage;