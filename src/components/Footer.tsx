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
  Shield
} from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    { label: 'Bot Blueprint', href: '/services/bot-blueprint' },
    { label: 'Build & Test', href: '/services/build-and-test' },
    { label: 'Discovery Call', href: '/services/discovery-call' },
    { label: 'Hyper Care', href: '/services/hyper-care' },
    { label: 'Scale & Optimize', href: '/services/scale-optimize' }
  ];

  const solutions = [
    { label: 'Time Liberation', href: '/solutions/time-liberation' },
    { label: 'Growth Accelerator', href: '/solutions/growth-accelerator' },
    { label: 'Profit Rescue', href: '/solutions/profit-rescue' },
    { label: 'Custom Bot Development', href: '/solutions/custombot-development' }
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
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Clients', gradient: 'from-blue-500 to-cyan-500' },
    { icon: <Award className="w-6 h-6" />, value: '1000+', label: 'Projects Completed', gradient: 'from-green-500 to-emerald-500' },
    { icon: <Globe className="w-6 h-6" />, value: '15+', label: 'Countries Served', gradient: 'from-purple-500 to-indigo-500' },
    { icon: <Shield className="w-6 h-6" />, value: '99.9%', label: 'Uptime Guarantee', gradient: 'from-orange-500 to-red-500' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-white via-blue-50 to-orange-50 text-white overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
        {[...Array(15)].map((_, i) => (
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
            {i % 4 === 0 && <Sparkles className="w-4 h-4 text-blue-400" />}
            {i % 4 === 1 && <Zap className="w-6 h-6 text-cyan-400" />}
            {i % 4 === 2 && <Users className="w-5 h-5 text-green-400" />}
            {i % 4 === 3 && <Award className="w-7 h-7 text-purple-400" />}
          </div>
        ))}
      </div>

      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info - Enhanced */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 transition-opacity duration-300"></div>
                  <Image
                    src={'/assets/svgs/GenZBotLogo.svg'}
                    alt="GenZBot Logo"
                    width={280}
                    height={200}
                    priority
                    className="relative z-10 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Enhanced description */}
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Pioneering the future of automation with AI-driven solutions. We transform 
                manual processes into intelligent workflows, empowering businesses to scale 
                efficiently and focus on what matters most.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      {social.icon}
                      <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links - Enhanced */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-gray-500 hover:text-orange-400 transition-all duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li 
                      key={service.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={service.href} 
                        className="text-gray-500 hover:text-orange-400 transition-all duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{service.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </h4>
                <ul className="space-y-3">
                  {solutions.map((solution, index) => (
                    <motion.li 
                      key={solution.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={solution.href} 
                        className="text-gray-500 hover:text-orange-400 transition-all duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{solution.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="py-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-black mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Contact Section */}
        <motion.div 
          className="py-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">Email Us</h5>
                  <a href="mailto:info@genzbots.com" className="text-gray-500 hover:text-orange-500 transition-colors">
                    info@genzbots.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">Call Us</h5>
                  <a href="tel:+15085016411" className="text-gray-500 hover:text-orange-500 transition-colors">
                    +1 (508) 501 6411
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-black mb-1">Visit Us</h5>
                  <div className="text-gray-500 hover:text-orange-500 text-sm leading-relaxed">
                    8 The Green, Suite A<br />
                    Dover, Delaware 19901<br />
                    United States
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Footer Bottom */}
        <motion.div 
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-black">
              <span>© 2025 GenZBot. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-600 animate-pulse" />
              <span>Made with passion for automation</span>
            </div>
            
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-black hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-black hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-black hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </Link>
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
    </footer>
  );
}