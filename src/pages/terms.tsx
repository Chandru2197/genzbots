import React from 'react';
import { 
  FileText, 
  Scale, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  CreditCard, 
  Shield,
  ArrowLeft,
  Sparkles,
  Clock,
  Globe,
  Zap,
  UserX,
  Code,
  Briefcase,
  Award,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-6 h-6" />,
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      accent: 'emerald',
      content: [
        {
          subtitle: 'Agreement to Terms',
          details: 'By accessing or using GenZBot services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.'
        },
        {
          subtitle: 'Legal Capacity',
          details: 'You must be at least 18 years old and have the legal capacity to enter into these terms. If you are using our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these terms.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      accent: 'violet',
      content: [
        {
          subtitle: 'Automation Solutions',
          details: 'GenZBot provides robotic process automation (RPA) solutions, AI-powered workflow automation, custom bot development, and related consulting services to help businesses optimize their operations.'
        },
        {
          subtitle: 'Service Availability',
          details: 'We strive to maintain high availability of our services but do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or technical issues.'
        },
        {
          subtitle: 'Service Modifications',
          details: 'We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to users.'
        }
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <Users className="w-6 h-6" />,
      gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
      accent: 'cyan',
      content: [
        {
          subtitle: 'Account Security',
          details: 'You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access.'
        },
        {
          subtitle: 'Lawful Use',
          details: 'You agree to use our services only for lawful purposes and in compliance with all applicable laws, regulations, and these terms. You will not use our services for any illegal, harmful, or abusive activities.'
        },
        {
          subtitle: 'Data Accuracy',
          details: 'You are responsible for ensuring that any data, information, or content you provide to us is accurate, complete, and up-to-date.'
        },
        {
          subtitle: 'System Integration',
          details: 'When integrating our automation solutions with your systems, you are responsible for ensuring compatibility, security, and proper configuration according to our guidelines.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: <CreditCard className="w-6 h-6" />,
      gradient: 'from-amber-400 via-orange-500 to-red-600',
      accent: 'amber',
      content: [
        {
          subtitle: 'Fees and Billing',
          details: 'Fees for our services are as specified in your service agreement or quote. All fees are non-refundable unless otherwise stated. We reserve the right to change our pricing with 30 days notice.'
        },
        {
          subtitle: 'Payment Methods',
          details: 'We accept various payment methods as specified during the ordering process. Payment is due according to the terms specified in your invoice or service agreement.'
        },
        {
          subtitle: 'Late Payments',
          details: 'Late payments may result in suspension of services and may incur additional fees. We reserve the right to terminate services for non-payment after reasonable notice.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-pink-400 via-rose-500 to-red-600',
      accent: 'pink',
      content: [
        {
          subtitle: 'Our IP Rights',
          details: 'All content, software, automation tools, methodologies, and materials provided by GenZBot are our intellectual property or that of our licensors, protected by copyright, trademark, and other IP laws.'
        },
        {
          subtitle: 'License to Use',
          details: 'We grant you a limited, non-exclusive, non-transferable license to use our services solely for your internal business purposes in accordance with these terms.'
        },
        {
          subtitle: 'Customer Data',
          details: 'You retain ownership of your data and content. By using our services, you grant us a license to process your data solely for the purpose of providing our services.'
        },
        {
          subtitle: 'Custom Solutions',
          details: 'For custom automation solutions developed specifically for you, ownership and licensing terms will be specified in your service agreement.'
        }
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations and Disclaimers',
      icon: <AlertTriangle className="w-6 h-6" />,
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
      accent: 'yellow',
      content: [
        {
          subtitle: 'Service Disclaimers',
          details: 'Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will meet all your requirements or operate without interruption or errors.'
        },
        {
          subtitle: 'Limitation of Liability',
          details: 'Our liability for any damages arising from your use of our services is limited to the amount you paid for the specific service in the 12 months preceding the claim.'
        },
        {
          subtitle: 'Performance Results',
          details: 'While we strive to deliver optimal automation solutions, actual performance results may vary based on your specific systems, data, and implementation factors.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <UserX className="w-6 h-6" />,
      gradient: 'from-slate-400 via-gray-500 to-zinc-600',
      accent: 'slate',
      content: [
        {
          subtitle: 'Termination by You',
          details: 'You may terminate your use of our services at any time by providing written notice according to your service agreement terms.'
        },
        {
          subtitle: 'Termination by Us',
          details: 'We may terminate or suspend your access to our services immediately if you violate these terms, fail to pay fees, or for any other reason with reasonable notice.'
        },
        {
          subtitle: 'Effect of Termination',
          details: 'Upon termination, your access to our services will cease, and we will assist with data retrieval according to our data retention policies and your service agreement.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 relative overflow-hidden">
      {/* Modern grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <div className="w-8 h-8 border-2 border-purple-400 rotate-45"></div>}
            {i % 4 === 1 && <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>}
            {i % 4 === 2 && <div className="w-10 h-10 border-2 border-emerald-400 rounded-full"></div>}
            {i % 4 === 3 && <Scale className="w-6 h-6 text-amber-400" />}
          </div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Back Button - Sleek modern style */}
      <div className="fixed top-8 left-8 z-50">
        <Link href={"/"} className="group flex items-center bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-6 py-3 text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
          <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header - Minimalist modern design */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center mb-8">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full px-6 py-3">
              <Scale className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-gray-300 font-medium">Legal Framework</span>
              <Sparkles className="w-4 h-4 text-purple-400 ml-3" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black leading-tight mb-8">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-white bg-clip-text text-transparent block">
              TERMS
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              OF SERVICE
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            These terms govern your use of GenZBot's automation platform. Please read carefully 
            to understand your rights and responsibilities when using our services.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full px-6 py-3">
              <Clock className="w-5 h-5 text-emerald-400 mr-3" />
              <span className="text-gray-300">Effective: January 15, 2025</span>
            </div>
            <div className="flex items-center bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">Delaware State Law</span>
            </div>
            <div className="flex items-center bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-full px-6 py-3">
              <Award className="w-5 h-5 text-amber-400 mr-3" />
              <span className="text-gray-300">Enterprise Grade</span>
            </div>
          </div>
        </div>

        {/* Content Sections - Masonry-style layout */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="group relative"
            >
              {/* Section container */}
              <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${section.gradient} p-1`}>
                  <div className="bg-gray-900/90 backdrop-blur-xl rounded-t-3xl p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl mr-6`}>
                          {section.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                          <div className="flex items-center mt-2">
                            <span className="text-gray-400 text-sm">Section {index + 1}</span>
                            <ChevronRight className="w-4 h-4 text-gray-500 ml-2" />
                          </div>
                        </div>
                      </div>
                      <div className={`text-${section.accent}-400 text-6xl font-black opacity-20`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="relative group/item"
                      >
                        <div className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300">
                          <div className="flex items-start">
                            <div className={`w-2 h-2 bg-gradient-to-r ${section.gradient} rounded-full mt-3 mr-4 flex-shrink-0`}></div>
                            <div className="flex-1">
                              <h3 className={`text-xl font-bold text-${section.accent}-300 mb-3 group-hover/item:text-${section.accent}-200 transition-colors`}>
                                {item.subtitle}
                              </h3>
                              <p className="text-gray-300 leading-relaxed">{item.details}</p>
                            </div>
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

        {/* Governing Law Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10">
            <div className="flex items-start">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mr-8 flex-shrink-0">
                <Scale className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  Governing Law and Disputes
                  <div className="ml-4 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-300">
                    Legal
                  </div>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  These Terms of Service are governed by the laws of the State of Delaware, United States, 
                  without regard to conflict of law principles. Any disputes arising from these terms or 
                  your use of our services will be resolved through binding arbitration in Delaware.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If any provision of these terms is found to be unenforceable, the remaining provisions 
                  will remain in full force and effect.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates Notice */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10">
            <div className="flex items-start">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mr-8 flex-shrink-0">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  Changes to Terms
                  <div className="ml-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We may update these Terms of Service from time to time to reflect changes in our 
                  services, legal requirements, or business practices. We will provide notice of 
                  material changes and the updated terms will be effective 30 days after posting 
                  unless you object in writing within that period.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section - Corporate style */}
        <div className="mt-20">
          <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl mb-8">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                Legal Questions?
              </h3>
              
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Our legal team is available to clarify any terms or discuss enterprise agreements. 
                We're committed to transparent and fair business relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="mailto:legal@genzbots.com"
                  className="group px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-500/25 flex items-center justify-center text-lg"
                >
                  <FileText className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Contact Legal Team
                </a>
                
                <button className="group px-10 py-4 bg-gray-700/50 backdrop-blur-sm text-gray-300 font-bold rounded-2xl hover:bg-gray-600/50 hover:text-white transition-all duration-300 transform hover:scale-105 border border-gray-600/50 flex items-center justify-center text-lg">
                  <Code className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                  Developer Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Enterprise Security</h4>
            <p className="text-gray-400 text-sm">SOC 2 Type II Compliant</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Global Coverage</h4>
            <p className="text-gray-400 text-sm">Multi-jurisdiction Support</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Industry Leading</h4>
            <p className="text-gray-400 text-sm">Best Practice Standards</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg); 
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}