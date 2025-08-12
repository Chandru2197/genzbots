

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import NavigationOptimizer from '@/components/performance/NavigationOptimizer';
import NavigationMonitor from '@/components/performance/NavigationMonitor';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.css';
import { ParticlesBackground } from '../components/enhanced/ParticlesBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>GenZBots | Next-Gen Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="GenZBots - Modern AI, Automation, and Digital Transformation Solutions" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <div className={inter.className} style={{ minHeight: '100vh', position: 'relative', background: '#0f172a', display: 'flex', flexDirection: 'column' }}>
        {/* Hide Navbar, Footer, and ParticlesBackground on /cookies, /privacy, /terms */}
        {['/cookies', '/privacy', '/terms'].includes(router.pathname) ? null : <ParticlesBackground />}
        {['/cookies', '/privacy', '/terms'].includes(router.pathname) ? null : <Navbar />}
        
        {/* Global Navigation Optimizer */}
        <NavigationOptimizer />
        
        {/* Navigation Performance Monitor (Development) */}
        {process.env.NODE_ENV === 'development' && <NavigationMonitor />}
        
        <MantineProvider theme={{ primaryColor: 'blue' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </MantineProvider>
        {['/cookies', '/privacy', '/terms'].includes(router.pathname) ? null : <Footer />}
        {['/cookies', '/privacy', '/terms'].includes(router.pathname) ? null : <BackToTop />}
      </div>
    </>
  );
}
