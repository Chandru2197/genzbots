import React from 'react';
import Image from 'next/image';
import { motion, easeOut } from 'framer-motion';
import { HeroProps } from '../../../shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="heroOne" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 dark:from-blue-800/20 dark:to-indigo-800/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60"
        ></motion.div>
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-32 w-6 h-6 bg-indigo-400 rounded-full opacity-40"
        ></motion.div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-16 md:py-24 lg:py-32"
        >
          <div className="mx-auto max-w-5xl pb-12 text-center md:pb-20">
            {tagline && (
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 border border-blue-200 dark:border-blue-700 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {tagline}
                  </p>
                </div>
              </motion.div>
            )}
            
            {title && (
              <motion.h1 
                variants={itemVariants}
                className="leading-tighter font-heading mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              >
                {title}
              </motion.h1>
            )}
            
            <div className="mx-auto max-w-4xl">
              {subtitle && (
                <motion.div variants={itemVariants}>
                  <p className="mb-8 text-xl font-normal text-gray-600 dark:text-slate-400 leading-relaxed">
                    {subtitle}
                  </p>
                </motion.div>
              )}
              
              <motion.div 
                variants={itemVariants}
                className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center"
              >
                {callToAction && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="transform transition-transform"
                  >
                    <CTA 
                      callToAction={callToAction} 
                      linkClass="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" 
                    />
                  </motion.div>
                )}
                {callToAction2 && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="transform transition-transform"
                  >
                    <CTA 
                      callToAction={callToAction2} 
                      linkClass="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50" 
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
          
          {image && (
            <motion.div 
              variants={itemVariants}
              className="relative m-auto max-w-6xl"
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-2xl"></div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    className="mx-auto h-auto w-full rounded-2xl bg-gray-400 dark:bg-slate-700 shadow-2xl border border-gray-200 dark:border-gray-700"
                    src={image.src}
                    alt={image.alt}
                    width={1024}
                    height={607}
                    sizes="(max-width: 64rem) 100vw, 1024px"
                    loading="eager"
                    placeholder="blur"
                    priority
                  />
                </motion.div>
              </div>
              
              {/* Decorative elements around image */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-dashed border-blue-300 dark:border-blue-600 rounded-full opacity-60"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 border-4 border-dashed border-indigo-300 dark:border-indigo-600 rounded-full opacity-40"
              ></motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white dark:text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;