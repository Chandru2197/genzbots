import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Zap, 
  Users, 
  Award,
  ExternalLink,
  Heart,
  Globe,
  Shield,
  Send,
  Calendar,
  Star,
  Rocket,
  Target,
  TrendingUp,
  Code,
  Database,
  Layers,
  MessageSquare,
  CheckCircle,
  Clock,
  Brain,
  Settings,
  Lightbulb,
  Building
} from 'lucide-react';

const ModernCard = ({ 
  children, 
  className = '',
  gradient = 'from-white/90 to-white/95',
  hoverable = true 
}: { 
  children: React.ReactNode; 
  className?: string;
  gradient?: string;
  hoverable?: boolean;
}) => (
  <div className={`
    relative bg-gradient-to-br ${gradient} backdrop-blur-2xl rounded-3xl border-2 border-blue-200/30 shadow-2xl
    ${hoverable ? 'hover:bg-white/95 hover:scale-[1.02] hover:border-blue-300/50 hover:shadow-[0_25px_70px_-12px_rgba(59,130,246,0.3)]' : ''}
    transition-all duration-500 ease-out overflow-hidden
    ${className}
  `}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-orange-50/60 rounded-3xl"></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/', icon: <Target className="w-4 h-4" /> },
    { label: 'About', href: '/about', icon: <Users className="w-4 h-4" /> },
    { label: 'Services', href: '/services', icon: <Settings className="w-4 h-4" /> },
    { label: 'Solutions', href: '/solutions', icon: <Lightbulb className="w-4 h-4" /> },
    { label: 'Blog', href: '/blog', icon: <MessageSquare className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <Send className="w-4 h-4" /> }
  ];

  const services = [
    { label: 'Bot Blueprint', href: '/services/bot-blueprint', icon: <Code className="w-4 h-4" /> },
    { label: 'Build & Test', href: '/services/build-and-test', icon: <Database className="w-4 h-4" /> },
    { label: 'Discovery Call', href: '/services/discovery-call', icon: <Phone className="w-4 h-4" /> },
    { label: 'Hyper Care', href: '/services/hyper-care', icon: <Shield className="w-4 h-4" /> },
    { label: 'Scale & Optimize', href: '/services/scale-optimize', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const solutions = [
    { label: 'Time Liberation', href: '/solutions/time-liberation', icon: <Clock className="w-4 h-4" /> },
    { label: 'Growth Accelerator', href: '/solutions/growth-accelerator', icon: <Rocket className="w-4 h-4" /> },
    { label: 'Profit Rescue', href: '/solutions/profit-rescue', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'Custom Bot Development', href: '/solutions/custombot-development', icon: <Brain className="w-4 h-4" /> }
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-blue-700 to-indigo-700',
      bgGradient: 'from-blue-600/10 to-indigo-600/10'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      gradient: 'from-gray-700 to-gray-900',
      bgGradient: 'from-gray-600/10 to-gray-800/10'
    }
  ];

  const stats = [
    { 
      icon: <Users className="w-8 h-8" />, 
      value: '500+', 
      label: 'Happy Clients', 
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      description: 'Businesses transformed'
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: '1000+', 
      label: 'Projects Completed', 
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      description: 'Successful automations'
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      value: '25+', 
      label: 'Countries Served', 
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      description: 'Global presence'
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      value: '99.9%', 
      label: 'Uptime Guarantee', 
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      description: 'Reliability promise'
    }
  ];

  const companyInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email Us",
      subtitle: "Get in touch for inquiries",
      value: "info@genzbots.com",
      link: "mailto:info@genzbots.com",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Call Us",
      subtitle: "Monday to Friday, 9AM-6PM EST",
      value: "+1 (508) 501 6411",
      link: "tel:+15085016411",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <Building className="w-7 h-7" />,
      title: "Visit Us",
      subtitle: "Our headquarters",
      value: "8 The Green, Suite A, Dover, Delaware 19901, United States",
      link: "#",
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-500/10 to-indigo-500/10"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Revolutionary Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-orange-100/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.1),transparent_70%)]"></div>
        
        {/* Animated geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.05)_2px,transparent_2px)] bg-[size:120px_120px] animate-grid-flow"></div>
        
        {/* Floating tech-themed elements */}
        {[...Array(30)].map((_, i) => {
          const icons = [Code, Database, Layers, Brain, Settings, Rocket, Target, Star];
          const IconComponent = icons[i % icons.length];
          const colors = [
            'text-blue-600', 'text-cyan-600', 'text-purple-600', 
            'text-indigo-600', 'text-orange-600', 'text-red-600',
            'text-emerald-600', 'text-teal-600'
          ];
          const sizes = ['w-5 h-5', 'w-6 h-6', 'w-7 h-7', 'w-8 h-8'];
          
          return (
            <div
              key={i}
              className="absolute opacity-15 animate-geometric-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${20 + Math.random() * 15}s`
              }}
            >
              <IconComponent 
                className={`${sizes[Math.floor(Math.random() * sizes.length)]} ${colors[Math.floor(Math.random() * colors.length)]}`}
              />
            </div>
          );
        })}
        
        {/* Wave effect at top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Revolutionary Hero Section */}
        <motion.div
          className="py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ModernCard className="p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-orange-600/5 rounded-3xl"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="relative group inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={'/assets/svgs/GenZBotLogo.svg'}
                    alt="GenZBot Logo"
                    width={400}
                    height={280}
                    priority
                    className="relative z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900">
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Join the automation revolution with GenZBot. We're pioneering the future of intelligent 
                business processes, transforming manual workflows into smart, scalable solutions that 
                drive real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-xl rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 border-2 border-transparent hover:border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center">
                    Get Started Today
                    <Rocket className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </button>
                
                <button className="group px-12 py-5 bg-white/80 backdrop-blur-xl text-gray-800 font-black text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white">
                  <span className="flex items-center justify-center">
                    <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                    Schedule Demo
                  </span>
                </button>
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Revolutionary Stats Section */}
        <motion.div 
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself - delivering exceptional results across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <ModernCard className="p-8 text-center h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl opacity-50`}></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {stat.icon}
                    </div>
                    <div className="text-5xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-900 font-bold text-lg mb-2">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revolutionary Navigation Links */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ModernCard className="p-8 h-full" gradient="from-blue-500/5 to-cyan-500/5">
                <h4 className="text-3xl font-black mb-8 text-gray-900 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                    Quick Links
                  </span>
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <Link 
                        href={link.href} 
                        className="flex items-center p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group border border-blue-200/30 hover:border-blue-300/50"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                        <span className="text-gray-800 font-semibold group-hover:text-gray-900">{link.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </ModernCard>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ModernCard className="p-8 h-full" gradient="from-emerald-500/5 to-teal-500/5">
                <h4 className="text-3xl font-black mb-8 text-gray-900 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                    Services
                  </span>
                </h4>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <motion.li 
                      key={service.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <Link 
                        href={service.href} 
                        className="flex items-center p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group border border-emerald-200/30 hover:border-emerald-300/50"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <span className="text-gray-800 font-semibold group-hover:text-gray-900">{service.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </ModernCard>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ModernCard className="p-8 h-full" gradient="from-purple-500/5 to-indigo-500/5">
                <h4 className="text-3xl font-black mb-8 text-gray-900 flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h4>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.li 
                      key={solution.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <Link 
                        href={solution.href} 
                        className="flex items-center p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 group border border-purple-200/30 hover:border-purple-300/50"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                          {solution.icon}
                        </div>
                        <span className="text-gray-800 font-semibold group-hover:text-gray-900">{solution.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </ModernCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Revolutionary Contact Section */}
        <motion.div 
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your automation journey? We're here to help you transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <ModernCard className="p-8 text-center h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-3xl opacity-50`}></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${info.gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {info.icon}
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 mb-2">{info.title}</h4>
                    <p className="text-gray-600 mb-4">{info.subtitle}</p>
                    <a 
                      href={info.link}
                      className={`text-transparent bg-gradient-to-r ${info.gradient} bg-clip-text font-bold hover:underline transition-all duration-300`}
                    >
                      {info.value}
                    </a>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revolutionary Social Media Section */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ModernCard className="p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Connect With Us
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Follow our journey and stay updated with the latest in automation technology, 
                industry insights, and company news.
              </p>

              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ y: -8, scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-4 border-white/50`}>
                      {social.icon}
                      <ExternalLink className="absolute -top-2 -right-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-700 rounded-full p-1" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-gray-700 font-bold text-sm bg-white/80 backdrop-blur-xl px-3 py-1 rounded-full border border-gray-200">
                        {social.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Revolutionary Newsletter Section */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ModernCard className="p-16" gradient="from-orange-500/5 to-red-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-red-600/5 to-pink-600/5 rounded-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center text-white shadow-2xl">
                <Send className="w-12 h-12" />
              </div>
              
              <h3 className="text-4xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                  Stay Ahead of the Curve
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Subscribe to our newsletter for the latest automation trends, case studies, 
                and exclusive insights from industry experts.
              </p>

              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/80 border-2 border-orange-200/50 text-gray-800 placeholder-gray-500 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-400/20 outline-none transition-all duration-300 shadow-lg font-medium"
                />
                <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative flex items-center">
                    <Send className="w-5 h-5" />
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Industry Insights", desc: "Latest automation trends" },
                  { icon: <Lightbulb className="w-6 h-6" />, title: "Expert Tips", desc: "Best practices & strategies" },
                  { icon: <Star className="w-6 h-6" />, title: "Case Studies", desc: "Real success stories" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-orange-200/30">
                      <div className="text-orange-600">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Revolutionary Footer Bottom */}
        <motion.div 
          className="py-12 border-t-2 border-blue-200/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ModernCard className="p-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="text-lg font-semibold">© 2025 GenZBot. All rights reserved.</span>
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="text-lg font-semibold">Made with passion for automation excellence</span>
              </div>
              
              <div className="flex items-center gap-8">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Cookie Policy', href: '/cookies' }
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-semibold relative group"
                    >
                      {link.label}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </ModernCard>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 z-50 group flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <svg 
            className="w-8 h-8 relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes geometric-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.15;
          }
          25% { 
            transform: translateY(-30px) rotate(90deg) scale(1.1); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-60px) rotate(180deg) scale(1.2); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-30px) rotate(270deg) scale(1.1); 
            opacity: 0.3;
          }
        }
        
        .animate-geometric-float {
          animation: geometric-float 30s ease-in-out infinite;
        }
        
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(120px, 120px); }
        }
        
        .animate-grid-flow {
          animation: grid-flow 30s linear infinite;
        }
        
        /* Enhanced glassmorphism */
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
        
        /* Custom gradient animations */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        /* Enhanced button effects */
        .btn-holographic {
          position: relative;
          overflow: hidden;
        }
        
        .btn-holographic::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.6s;
        }
        
        .btn-holographic:hover::before {
          animation: shimmer 1s ease-in-out;
        }
        
        @keyframes shimmer {
          0% { transform: rotate(45deg) translateX(-200%); }
          100% { transform: rotate(45deg) translateX(200%); }
        }
        
        /* Enhanced shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.3);
        }
        
        /* Scroll animation */
        @keyframes float-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-float-up {
          animation: float-up 0.6s ease-out;
        }
        
        /* Responsive optimizations */
        @media (max-width: 768px) {
          .text-6xl {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
          }
          
          .text-5xl {
            font-size: clamp(2rem, 7vw, 3rem);
          }
          
          .text-4xl {
            font-size: clamp(1.75rem, 6vw, 2.5rem);
          }
        }
        
        /* Performance optimizations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Custom focus styles */
        .focus-visible\\:ring-modern:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.6);
        }
        
        /* Light theme gradient text */
        .light-gradient-text {
          background: linear-gradient(135deg, #1e40af, #7c3aed, #dc2626);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Enhanced hover states */
        .hover\\:scale-\\[1\\.02\\]:hover {
          transform: scale(1.02);
        }
        
        /* Newsletter input focus animation */
        input:focus {
          transform: translateY(-1px);
        }
        
        /* Social link hover effects */
        .social-hover:hover {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
        }
      `}</style>
    </footer>
  );
}