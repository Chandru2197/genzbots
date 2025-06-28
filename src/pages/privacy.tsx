import React from 'react';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck, 
  Globe, 
  Mail, 
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Snowflake,
  Zap,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-cyan-400 to-blue-500',
      content: [
        {
          subtitle: 'Personal Information',
          details: 'We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, company information, and communication preferences.'
        },
        {
          subtitle: 'Usage Data',
          details: 'We automatically collect information about how you use our website and services, including your IP address, browser type, operating system, referral URLs, and pages visited.'
        },
        {
          subtitle: 'Cookies and Tracking',
          details: 'We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <UserCheck className="w-6 h-6" />,
      gradient: 'from-indigo-400 to-purple-500',
      content: [
        {
          subtitle: 'Service Provision',
          details: 'We use your information to provide, maintain, and improve our automation services, process transactions, and communicate with you about your account and our services.'
        },
        {
          subtitle: 'Communication',
          details: 'We may use your contact information to send you technical notices, security alerts, support messages, and marketing communications (with your consent).'
        },
        {
          subtitle: 'Analytics and Improvement',
          details: 'We analyze usage patterns to understand how our services are used and to improve functionality, user experience, and develop new features.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-teal-400 to-green-500',
      content: [
        {
          subtitle: 'Service Providers',
          details: 'We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, customer support, and payment processing.'
        },
        {
          subtitle: 'Legal Requirements',
          details: 'We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.'
        },
        {
          subtitle: 'Business Transfers',
          details: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      gradient: 'from-emerald-400 to-teal-500',
      content: [
        {
          subtitle: 'Security Measures',
          details: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Encryption',
          details: 'We use industry-standard encryption protocols to protect data in transit and at rest, ensuring your information remains secure throughout our systems.'
        },
        {
          subtitle: 'Access Controls',
          details: 'We maintain strict access controls and regularly monitor our systems for potential vulnerabilities and threats.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: <Eye className="w-6 h-6" />,
      gradient: 'from-blue-400 to-cyan-500',
      content: [
        {
          subtitle: 'Access and Correction',
          details: 'You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          details: 'You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.'
        },
        {
          subtitle: 'Deletion',
          details: 'You can request deletion of your personal information, subject to certain legal and business requirements.'
        },
        {
          subtitle: 'Marketing Communications',
          details: 'You can opt out of marketing communications at any time by following the unsubscribe links in our emails or contacting us directly.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <Snowflake className="w-6 h-6 text-cyan-400" />}
            {i % 4 === 1 && <Star className="w-4 h-4 text-blue-400" />}
            {i % 4 === 2 && <Zap className="w-5 h-5 text-indigo-400" />}
            {i % 4 === 3 && <Shield className="w-7 h-7 text-cyan-300" />}
          </div>
        ))}
      </div>

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-blue-400"/>
        </svg>
      </div>

      {/* Back Button - Futuristic style */}
      <div className="fixed top-6 left-6 z-50">
        <Link href={"/"} className="group inline-flex items-center px-6 py-3 bg-slate-800/80 backdrop-blur-xl rounded-xl text-cyan-300 hover:bg-slate-700/80 transition-all duration-300 border border-cyan-500/30 shadow-xl hover:shadow-cyan-500/25">
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
        </Link>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header with tech-inspired design */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-12">
            {/* Orbital rings */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
              <div className="w-40 h-40 border-2 border-cyan-400/30 rounded-full"></div>
            </div>
            <div className="absolute inset-4 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
              <div className="w-32 h-32 border-2 border-blue-400/30 rounded-full border-dashed"></div>
            </div>
            
            {/* Center shield */}
            <div className="relative w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
              <Shield className="w-20 h-20 text-white" />
            </div>
            
            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="inline-flex items-center px-6 py-2 bg-cyan-500/20 rounded-full border border-cyan-400/30 text-cyan-300 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              PRIVACY & SECURITY PROTOCOL
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent block">
                PRIVACY
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                POLICY
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-12">
            Your data security is our top priority. This comprehensive policy outlines how GenZBot 
            protects, processes, and manages your personal information with military-grade security.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center bg-slate-800/60 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30">
              <Clock className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-blue-200 font-medium">Updated: January 15, 2025</span>
            </div>
            <div className="flex items-center bg-slate-800/60 backdrop-blur-xl rounded-full px-6 py-3 border border-green-400/30">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-blue-200 font-medium">GDPR & CCPA Compliant</span>
            </div>
          </div>
        </div>

        {/* Content Sections - Card-based layout */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="relative group"
            >
              {/* Section number */}
              <div className="absolute -left-4 top-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                {index + 1}
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
                {/* Section header */}
                <div className={`bg-gradient-to-r ${section.gradient} p-8 text-white`}>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                      {section.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                  </div>
                </div>
                
                {/* Section content */}
                <div className="p-8">
                  <div className="grid gap-6">
                    {section.content.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-slate-700/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-cyan-400/30 transition-all duration-300 group/item"
                      >
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-cyan-300 mb-3 group-hover/item:text-cyan-200 transition-colors">
                              {item.subtitle}
                            </h3>
                            <p className="text-blue-200 leading-relaxed">{item.details}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice - Holographic style */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl p-10 border border-orange-400/30">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">Important Notice</span>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                </h3>
                <p className="text-blue-200 leading-relaxed mb-6 text-lg">
                  This Privacy Policy may be updated from time to time to reflect changes in our practices, 
                  technology, legal requirements, or other factors. We will notify you of any material changes 
                  through our secure notification system.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Futuristic terminal style */}
        <div className="mt-20">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-cyan-400/30 overflow-hidden shadow-2xl shadow-cyan-500/20">
            {/* Terminal header */}
            <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-cyan-300 font-mono text-sm">privacy_contact.exe</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-8">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                <span className="text-cyan-400">&gt;</span> Questions About Privacy?
              </h3>
              
              <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Our security team is standing by to assist with any privacy concerns or questions 
                about our data protection measures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:privacy@genzbots.com"
                  className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25 flex items-center justify-center text-lg"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Contact Privacy Team
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-300"></div>
                </a>
                
                <button className="group px-10 py-4 bg-slate-700/50 backdrop-blur-sm text-cyan-300 font-bold rounded-2xl hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30 flex items-center justify-center text-lg">
                  <Shield className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Security Center
                </button>
              </div>
              
              {/* Terminal cursor */}
              <div className="mt-8 flex justify-center">
                <span className="text-cyan-400 font-mono animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}