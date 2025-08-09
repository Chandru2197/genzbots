import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Hammer, ArrowRight, Code, AlertTriangle } from 'lucide-react';
import SafeLink from '@/components/ui/SafeLink';
import FallbackLink from '@/components/ui/FallbackLink';
import Head from 'next/head';

const DemoFallbacksPage = () => {
  return (
    <>
      <Head>
        <title>Fallback Pages Demo - GenZBots</title>
        <meta name="description" content="Demo page showing different fallback page types" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fallback Pages Demo
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Test different fallback page types for broken links and features under development
            </p>
          </motion.div>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Maintenance Page Demo */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Maintenance Page</h3>
                  <p className="text-gray-300">For broken or unavailable links</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Use this for pages that are temporarily down, broken links, or features that need fixing.
              </p>
              
              <div className="space-y-4">
                <SafeLink href="/non-existent-page" context="maintenance">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Test Maintenance Page
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </SafeLink>
                
                <FallbackLink href="/broken-link" fallbackType="maintenance">
                  <button className="w-full py-3 px-6 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Broken Link Example
                  </button>
                </FallbackLink>
              </div>
            </motion.div>

            {/* Work in Progress Page Demo */}
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Work in Progress</h3>
                  <p className="text-gray-300">For features under development</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Use this for new features being developed, beta features, or upcoming functionality.
              </p>
              
              <div className="space-y-4">
                <SafeLink href="/new-feature" context="development">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    Test Work in Progress
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </SafeLink>
                
                <FallbackLink href="/beta-feature" fallbackType="work-in-progress">
                  <button className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center">
                    <Code className="w-5 h-5 mr-2" />
                    Beta Feature Example
                  </button>
                </FallbackLink>
              </div>
            </motion.div>
          </div>

          {/* Usage Examples */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Usage Examples</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Maintenance Page - Use for:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Broken or non-existent pages</li>
                  <li>• Temporarily disabled features</li>
                  <li>• Server maintenance periods</li>
                  <li>• Error fallbacks</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Work in Progress - Use for:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Features under active development</li>
                  <li>• Beta or preview functionality</li>
                  <li>• Upcoming product launches</li>
                  <li>• Planned enhancements</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SafeLink href="/">
              <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Back to Home
              </button>
            </SafeLink>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DemoFallbacksPage;