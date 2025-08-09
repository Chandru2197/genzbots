import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Wrench, 
  Users, 
  Shield, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import SafeLink from '@/components/ui/SafeLink';
import Head from 'next/head';

const ServicesPage = () => {
  const services = [
    {
      id: 'bot-blueprint',
      title: 'Bot Blueprint',
      description: 'Strategic planning and architecture design for your automation infrastructure.',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      features: ['Strategic Planning', 'Architecture Design', 'ROI Analysis', 'Risk Assessment'],
      href: '/services/bot-blueprint'
    },
    {
      id: 'build-test',
      title: 'Build & Test',
      description: 'Development, testing, and quality assurance for robust automation solutions.',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      features: ['Development', 'Testing', 'Quality Assurance', 'Performance Optimization'],
      href: '/services/build-and-test'
    },
    {
      id: 'discovery-call',
      title: 'Discovery Call',
      description: 'Consultation session to identify automation opportunities and requirements.',
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      features: ['Process Analysis', 'Opportunity Assessment', 'Custom Solutions', 'Expert Consultation'],
      href: '/services/discovery-call'
    },
    {
      id: 'hyper-care',
      title: 'Hyper Care',
      description: 'Comprehensive support, monitoring, and continuous optimization services.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: ['24/7 Monitoring', 'Proactive Support', 'Performance Tuning', 'Issue Resolution'],
      href: '/services/hyper-care'
    },
    {
      id: 'scale-optimize',
      title: 'Scale & Optimize',
      description: 'Performance enhancement and scalability solutions for growing businesses.',
      icon: TrendingUp,
      color: 'from-orange-500 to-yellow-500',
      features: ['Scalability Planning', 'Performance Enhancement', 'Cost Optimization', 'Growth Strategy'],
      href: '/services/scale-optimize'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - GenZBots</title>
        <meta name="description" content="Comprehensive automation services from strategic planning to ongoing support and optimization." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
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
              {i % 3 === 0 && <Sparkles className="w-6 h-6 text-blue-400" />}
              {i % 3 === 1 && <Zap className="w-8 h-8 text-cyan-400" />}
              {i % 3 === 2 && <CheckCircle className="w-5 h-5 text-green-400" />}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white mb-8 shadow-lg">
              <Sparkles className="w-6 h-6 mr-3" />
              <span className="font-semibold text-lg">Our Services</span>
              <Zap className="w-5 h-5 ml-3" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Automation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              From strategic planning to ongoing optimization, we provide comprehensive automation services tailored to your business needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SafeLink href={service.href}>
                    <div 
                      className="h-full rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-2 cursor-pointer"
                      style={{
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                      }}
                    >
                      {/* Header */}
                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div 
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${service.color} shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-white/85 text-base leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-white/90 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-6 border-t border-white/20">
                          <span className="text-white/80 text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </SafeLink>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div 
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our automation services can transform your business operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                    Get Started Today
                  </button>
                </SafeLink>
                
                <SafeLink href="/services/discovery-call">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                    Schedule Discovery Call
                  </button>
                </SafeLink>
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
      </div>
    </>
  );
};

export default ServicesPage;