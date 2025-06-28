import React, { useState } from 'react';
import { 
  Cookie, 
  Settings, 
  BarChart3, 
  Target, 
  Shield, 
  Eye,
  ArrowLeft,
  Sparkles,
  Clock,
  ToggleLeft,
  ToggleRight,
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  Flame,
  Heart
} from 'lucide-react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const [cookieSettings, setCookieSettings] = useState<any>({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const toggleCookie = (type:any) => {
    if (type === 'essential') return;
    setCookieSettings((prev:any) => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'essential',
      title: 'Essential Cookies',
      icon: <Shield className="w-6 h-6" />,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      purpose: 'Authentication, security, and basic website functionality',
      duration: 'Session / 1 year',
      examples: ['User authentication', 'Security tokens', 'Form submissions', 'Load balancing'],
      canDisable: false,
      color: 'from-emerald-400 to-green-500'
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website performance analysis and improvement',
      duration: '2 years',
      examples: ['Google Analytics', 'Page views', 'User behavior', 'Performance metrics'],
      canDisable: true,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      icon: <Target className="w-6 h-6" />,
      description: 'These cookies track your browsing habits to show you relevant advertisements.',
      purpose: 'Personalized advertising and remarketing',
      duration: '1-2 years',
      examples: ['Ad targeting', 'Conversion tracking', 'Social media pixels', 'Remarketing'],
      canDisable: true,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'preferences',
      title: 'Preference Cookies',
      icon: <Settings className="w-6 h-6" />,
      description: 'These cookies remember your preferences and settings for a better experience.',
      purpose: 'User interface customization and preferences',
      duration: '1 year',
      examples: ['Language settings', 'Theme preferences', 'Layout choices', 'Saved filters'],
      canDisable: true,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const thirdPartyServices = [
    { name: 'Google Analytics', purpose: 'Website analytics', privacy: 'https://policies.google.com/privacy' },
    { name: 'Google Ads', purpose: 'Advertising and remarketing', privacy: 'https://policies.google.com/privacy' },
    { name: 'LinkedIn Analytics', purpose: 'Professional network tracking', privacy: 'https://www.linkedin.com/legal/privacy-policy' },
    { name: 'HubSpot', purpose: 'Customer relationship management', privacy: 'https://legal.hubspot.com/privacy-policy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Warm floating elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 && <Cookie className="w-8 h-8 text-orange-400" />}
            {i % 3 === 1 && <Heart className="w-6 h-6 text-red-400" />}
            {i % 3 === 2 && <Flame className="w-7 h-7 text-amber-500" />}
          </div>
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-red-300 to-pink-300 rotate-45 opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link href={"/"} className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-2xl text-orange-700 hover:bg-white transition-all duration-300 border-2 border-orange-200 shadow-xl hover:scale-105 hover:shadow-2xl">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-semibold">Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header with circular design */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
              <Cookie className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent block">
              Cookie
            </span>
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed mb-12">
            We use cookies and similar technologies to enhance your browsing experience. 
            Manage your preferences with our sweet and simple cookie controls.
          </p>

          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-orange-200 shadow-lg">
            <Clock className="w-6 h-6 text-orange-600 mr-3" />
            <span className="text-orange-800 font-semibold">Last Updated: January 15, 2025</span>
          </div>
        </div>

        {/* Cookie Settings Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Cookie Preferences</h2>
            <p className="text-orange-700 text-lg">Customize your cookie experience below</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {cookieTypes.map((cookie, index) => (
              <div
                key={cookie.id}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cookie.color} rounded-2xl flex items-center justify-center text-white shadow-lg mr-4 transform rotate-3`}>
                      {cookie.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-orange-800">{cookie.title}</h3>
                      <p className="text-orange-600 text-sm">{cookie.purpose}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleCookie(cookie.id)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      !cookie.canDisable ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
                    }`}
                    disabled={!cookie.canDisable}
                  >
                    {cookieSettings[cookie.id] ? (
                      <div className="w-12 h-6 bg-green-400 rounded-full flex items-center justify-end pr-1">
                        <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                      </div>
                    ) : (
                      <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-start pl-1">
                        <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                      </div>
                    )}
                  </button>
                </div>
                
                <p className="text-orange-700 mb-6 leading-relaxed">{cookie.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">Duration:</span>
                    <span className="text-orange-800 bg-orange-100 px-3 py-1 rounded-full text-sm">{cookie.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-600 font-semibold">Status:</span>
                    <span className={`flex items-center font-semibold ${cookieSettings[cookie.id] ? 'text-green-600' : 'text-red-600'}`}>
                      {cookieSettings[cookie.id] ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Enabled
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 mr-1" />
                          Disabled
                        </>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <span className="text-orange-600 font-semibold block mb-3">Examples:</span>
                  <div className="flex flex-wrap gap-2">
                    {cookie.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl text-sm text-orange-700 border border-orange-200 font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
              Save My Preferences
            </button>
            <button className="px-12 py-4 bg-gradient-to-r from-orange-400 to-amber-400 text-white font-bold rounded-2xl hover:from-orange-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
              Accept All Cookies
            </button>
          </div>
        </div>

        {/* Information Section with zigzag layout */}
        <div className="space-y-16">
          {/* What Are Cookies - Left aligned */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-orange-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <Info className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-orange-800">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-orange-700 leading-relaxed">
                  <p>
                    Cookies are small text files that websites store on your device to remember your preferences and improve your browsing experience.
                  </p>
                  <p>
                    Think of them as helpful digital notes that make your next visit smoother and more personalized.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full flex items-center justify-center">
                <Cookie className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>

          {/* Third-Party Services - Right aligned */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-orange-200 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-orange-800">Third-Party Services</h2>
                </div>
                <p className="text-orange-700 mb-6 leading-relaxed">
                  We partner with trusted services to enhance your experience. Each has their own privacy policies.
                </p>
                <div className="space-y-4">
                  {thirdPartyServices.map((service, index) => (
                    <div key={service.name} className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <div>
                        <h3 className="font-bold text-orange-800">{service.name}</h3>
                        <p className="text-orange-600 text-sm">{service.purpose}</p>
                      </div>
                      <a
                        href={service.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors text-sm font-semibold"
                      >
                        Privacy Policy
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center">
                <Target className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Warning Section */}
        <div className="mt-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-3xl p-10 border-2 border-yellow-300">
          <div className="flex items-start">
            <AlertTriangle className="w-12 h-12 text-yellow-600 mr-6 mt-2 flex-shrink-0" />
            <div>
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Browser Cookie Settings</h3>
              <p className="text-orange-700 leading-relaxed text-lg">
                You can also manage cookies through your browser settings. However, blocking all cookies may prevent some features from working properly. We recommend using our preference controls above for the best experience.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-sm rounded-3xl p-12 border-2 border-orange-200 shadow-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-orange-800 mb-6">Questions About Cookies?</h3>
            <p className="text-orange-700 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our friendly team is here to help you understand how we use cookies and assist with any preferences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:privacy@genzbots.com"
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center text-lg"
              >
                <Cookie className="w-6 h-6 mr-3" />
                Cookie Support
              </a>
              <button className="px-10 py-4 bg-white/80 backdrop-blur-sm text-orange-700 font-bold rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 border-2 border-orange-200 shadow-xl flex items-center justify-center text-lg">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}