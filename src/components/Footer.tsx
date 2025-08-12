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
import { IconBrandFacebook } from '@tabler/icons-react';

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
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      ),
      gradient: 'from-pink-600 to-purple-600'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@genzbots',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      gradient: 'from-red-600 to-red-700'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        {/* Left red radial glow */}
        <div
          className="absolute -bottom-24 -left-40 w-[60rem] h-[60rem] opacity-60 blur-3xl"
          style={{
            background: 'radial-gradient(closest-side, rgba(239,68,68,0.55), rgba(239,68,68,0.35), transparent 70%)'
          }}
        />
        {/* Right red radial glow */}
        <div
          className="absolute -bottom-32 -right-52 w-[62rem] h-[62rem] opacity-70 blur-[80px]"
          style={{
            background: 'radial-gradient(closest-side, rgba(185,28,28,0.65), rgba(185,28,28,0.35), transparent 75%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <Image
                  src={'/assets/svgs/GenZBotLogo.svg'}
                  alt="GenZBot Logo"
                  width={280}
                  height={200}
                  priority
                  className="filter brightness-0 invert"
                />
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Pioneering the future of automation with AI-driven solutions. We transform 
                manual processes into intelligent workflows, empowering businesses to scale 
                efficiently and focus on what matters most.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:border-white/40`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-medium mb-6 text-gray-300 tracking-wide">
                  <span className="text-gray-400 mr-2">//</span> Quick Links
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
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-medium mb-6 text-gray-300 tracking-wide">
                  <span className="text-gray-400 mr-2">//</span> Services
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
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {service.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div> */}

              {/* Solutions */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-medium mb-6 text-gray-300 tracking-wide">
                  <span className="text-gray-400 mr-2">//</span> Solutions
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
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {solution.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div> */}

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-medium mb-6 text-gray-300 tracking-wide">
                  <span className="text-gray-400 mr-2">//</span> Support
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                      Technical Support
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Newsletter and Legal Section */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Never miss an update
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Get all the latest news, blog posts and product updates from GenZBot. 
                Delivered directly to your inbox. We'll rarely send more than one email a month.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                />
                <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Join
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="marketing-consent"
                  className="w-4 h-4 rounded border border-gray-500 bg-gray-800 accent-red-600"
                />
                <span className="w-5 h-px bg-white/30" />
                <label htmlFor="marketing-consent" className="text-gray-400 text-sm">
                  I agree to receive marketing emails from GenZBot
                </label>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:info@genzbots.com" className="text-white hover:text-red-400 transition-colors">
                      info@genzbots.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+15085016411" className="text-white hover:text-red-400 transition-colors">
                      +1 (508) 501 6411
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white text-sm">
                      8 The Green, Suite A<br />
                      Dover, Delaware 19901<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="py-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © 2025 GenZBot, Designed by GenZBot Team
            </div>
            
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}