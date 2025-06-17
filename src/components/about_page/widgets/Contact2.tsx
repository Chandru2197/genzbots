// import Form from '../common/Form';
// import Headline from '../common/Headline';
// import { ContactProps } from '../../../shared/types';
// import WidgetWrapper from '../common/WidgetWrapper';

// const Contact2 = ({ header, form, id, hasBackground = false }: ContactProps) => (
//   <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl mx-auto">
//     {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
//     <div className="flex items-stretch justify-center">
//       <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="right" />
//     </div>
//   </WidgetWrapper>
// );

// export default Contact2;

import React from 'react';
import { motion } from 'framer-motion';
import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '../../../shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact2 = ({ header, form, items, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-7xl mx-auto">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Contact Information Cards */}
      {items && items.length > 0 && (
        <div className="lg:col-span-1 space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get in Touch
          </motion.h3>
          
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <div className="space-y-1">
                    {Array.isArray(item.description) ? (
                      item.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Additional Contact Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Why Choose Us?
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Free consultation & assessment
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                24/7 support & maintenance
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ROI-focused solutions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Proven track record
              </li>
            </ul>
          </motion.div>
        </div>
      )}
      
      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 dark:border-gray-700">
          <Form 
            {...form} 
            containerClass="w-full" 
            btnPosition="left" 
          />
        </div>
      </div>
    </div>
    
    {/* Trust Indicators */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
      </div>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
      </div>
    </motion.div>
  </WidgetWrapper>
);

export default Contact2;