// import { FeaturesProps } from '../../../shared/types';
// import Headline from '../common/Headline';
// import ItemGrid from '../common/ItemGrid';

// const Features2 = ({ header, items, columns = 3, id }: FeaturesProps) => (
//   <section className="relative mx-auto py-12 md:py-16 lg:py-20" id="features2">
//     <div className="pointer-events-none absolute inset-0 mb-36 bg-primary-50 dark:bg-slate-800"></div>
//     <div className="relative mx-auto -mb-12 max-w-6xl px-4 sm:px-6">
//       {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
//       <ItemGrid
//         id={id}
//         items={items}
//         columns={columns}
//         defaultColumns={3}
//         panelClass="card flex flex-start min-w-screen-sm items-stretch h-full"
//         iconClass="h-8 w-8 mr-4 text-primary-800 dark:text-primary-600"
//         titleClass="text-xl font-bold"
//         descriptionClass="text-md text-gray-500 dark:text-gray-400"
//         actionClass="justify-start"
//       />
//     </div>
//   </section>
// );

// export default Features2;
import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesProps } from '../../../shared/types';
import Headline from '../common/Headline';

const Features2 = ({ header, items, columns = 3, id }: FeaturesProps) => (
  <section className="relative mx-auto py-16 md:py-20 lg:py-24 bg-gray-100 dark:bg-gray-800" id="features2">
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      {header && (
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {header.title}
          </motion.h2>
          {header.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {header.subtitle}
            </motion.p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items?.map((item, index) => {
          const Icon = item.icon;
          
          // Define icon colors based on index
          const getIconColor = (index: number) => {
            switch (index) {
              case 0:
                return 'text-blue-600'; // Question mark - blue
              case 1:
                return 'text-blue-600'; // Chat - blue
              case 2:
                return 'text-blue-600'; // Headset - blue
              default:
                return 'text-blue-600';
            }
          };

          const getIconBg = (index: number) => {
            switch (index) {
              case 0:
                return 'bg-blue-50 dark:bg-blue-900/20'; // Question mark
              case 1:
                return 'bg-blue-50 dark:bg-blue-900/20'; // Chat
              case 2:
                return 'bg-blue-50 dark:bg-blue-900/20'; // Headset
              default:
                return 'bg-blue-50 dark:bg-blue-900/20';
            }
          };

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`w-12 h-12 ${getIconBg(index)} rounded-xl flex items-center justify-center mb-6`}>
                <Icon className={`w-6 h-6 ${getIconColor(index)}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              {item.callToAction && (
                <motion.a
                  href={item.callToAction.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {item.callToAction.text}
                </motion.a>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features2;