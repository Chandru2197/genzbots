import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, ArrowLeft, Clock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import SafeLink from '@/components/ui/SafeLink';
import Head from 'next/head';

const MaintenancePage = () => {
  return (
    <>
      <Head>
        <title>Under Maintenance - GenZBots</title>
        <meta name="description" content="This page is currently under maintenance. We'll be back soon!" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
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
              <Wrench className="w-6 h-6 text-blue-400" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Content */}
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-white/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 197, 253, 0.8))',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Wrench className="w-12 h-12 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Under
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Maintenance
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We're currently working on improving this page to bring you a better experience. 
              Our team is hard at work implementing new features and enhancements.
            </motion.p>

            {/* Status Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Expected Duration</h3>
                <p className="text-blue-200 text-sm">We'll be back soon</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Wrench className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">What We're Doing</h3>
                <p className="text-blue-200 text-sm">Enhancing features</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <AlertTriangle className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Status</h3>
                <p className="text-blue-200 text-sm">Temporary downtime</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <SafeLink href="/">
                <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group">
                  <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Home
                </button>
              </SafeLink>
              
              <SafeLink href="/contact">
                <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                  Contact Support
                </button>
              </SafeLink>
            </motion.div>

            {/* Footer Message */}
            <motion.div
              className="mt-8 pt-6 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="text-blue-200 text-sm">
                Thank you for your patience. We appreciate your understanding while we make improvements.
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
        `}</style>
      </div>
    </>
  );
};

export default MaintenancePage;