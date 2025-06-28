import React, { useState, useEffect } from 'react';
import { ArrowLeft, Building2, Scale, Users, DollarSign, FileText, Shield, CheckCircle, Clock, BarChart3, AlertCircle, TrendingUp, Flag, Globe, Landmark, Gavel, UserCheck, MessageSquare, Star, Eye, Activity, Calendar, Award, Zap, Brain, Sparkles, ArrowRight, Bell, Vote, BookOpen, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GovService {
  id: string;
  name: string;
  description: string;
  tools: string[];
  aiFeature: string;
  icon: React.ReactNode;
  primaryColor: string;
  accentColor: string;
  gradient: string;
  lightBg: string;
  metrics: {
    efficiency: number;
    accuracy: string;
    timeReduction: string;
    citizenSatisfaction: string;
  };
  processFlow: string[];
  compliance: string[];
  status: 'operational' | 'processing' | 'reviewing';
}

const GovernmentServicesPart1: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [citizenServiceLevel, setCitizenServiceLevel] = useState<number>(0);
  const [complianceRate, setComplianceRate] = useState<number>(97.8);
  const [transparencyIndex, setTransparencyIndex] = useState<number>(0);
  const [govFlag, setGovFlag] = useState<boolean>(false);
  const [liveMetrics, setLiveMetrics] = useState({
    grievancesProcessed: 1247,
    pensionsApproved: 892,
    documentsVerified: 3456,
    transparencyScore: 94.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCitizenServiceLevel(prev => prev >= 100 ? 0 : prev + 2.8);
      setComplianceRate(prev => Math.min(prev + Math.random() * 0.1, 99.9));
      setTransparencyIndex(prev => prev >= 100 ? 0 : prev + 3.2);
      setGovFlag(prev => !prev);
      setLiveMetrics(prev => ({
        grievancesProcessed: prev.grievancesProcessed + Math.floor(Math.random() * 4),
        pensionsApproved: prev.pensionsApproved + Math.floor(Math.random() * 2),
        documentsVerified: prev.documentsVerified + Math.floor(Math.random() * 8),
        transparencyScore: Math.min(prev.transparencyScore + Math.random() * 0.2, 98)
      }));
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const services: GovService[] = [
    {
      id: 'grievance-redressal',
      name: 'Grievance Redressal',
      description: 'Route complaints → Send updates using AI text classification for efficient citizen service',
      tools: ['Text Classification AI', 'Workflow Engine', 'SMS Gateway', 'Citizen Portal'],
      aiFeature: 'Text classification for complaint routing',
      icon: <MessageSquare className="w-8 h-8" />,
      primaryColor: 'text-blue-700',
      accentColor: 'text-blue-500',
      gradient: 'from-blue-600 via-indigo-700 to-blue-800',
      lightBg: 'from-blue-50 to-indigo-50',
      metrics: {
        efficiency: 92,
        accuracy: '96.4%',
        timeReduction: '78%',
        citizenSatisfaction: '91.2%'
      },
      processFlow: [
        'Complaint Registration',
        'AI Category Classification',
        'Department Routing',
        'Progress Tracking',
        'Resolution Notification'
      ],
      compliance: [
        'Right to Information Act',
        'Citizen Charter Guidelines',
        'Service Level Agreements',
        'Data Protection Norms'
      ],
      status: 'operational'
    },
    {
      id: 'pension-processing',
      name: 'Pension Processing',
      description: 'Verify eligibility → Disburse payments with RPA and Aadhaar API integration',
      tools: ['RPA Automation', 'Aadhaar API', 'Banking Integration', 'Document Verification'],
      aiFeature: 'Smart eligibility verification',
      icon: <DollarSign className="w-8 h-8" />,
      primaryColor: 'text-emerald-700',
      accentColor: 'text-emerald-500',
      gradient: 'from-emerald-600 via-green-700 to-teal-800',
      lightBg: 'from-emerald-50 to-green-50',
      metrics: {
        efficiency: 89,
        accuracy: '98.7%',
        timeReduction: '85%',
        citizenSatisfaction: '94.8%'
      },
      processFlow: [
        'Application Submission',
        'Document Verification',
        'Eligibility Assessment',
        'Approval Workflow',
        'Payment Processing'
      ],
      compliance: [
        'Pension Fund Regulations',
        'KYC Requirements',
        'Audit Guidelines',
        'Financial Transparency'
      ],
      status: 'processing'
    },
    {
      id: 'digital-governance',
      name: 'Digital Governance',
      description: 'Transparent service delivery with automated document processing and citizen engagement',
      tools: ['Digital Platform', 'OCR Technology', 'Blockchain', 'Analytics Dashboard'],
      aiFeature: 'Predictive service analytics',
      icon: <Globe className="w-8 h-8" />,
      primaryColor: 'text-purple-700',
      accentColor: 'text-purple-500',
      gradient: 'from-purple-600 via-violet-700 to-indigo-800',
      lightBg: 'from-purple-50 to-violet-50',
      metrics: {
        efficiency: 95,
        accuracy: '97.9%',
        timeReduction: '82%',
        citizenSatisfaction: '93.5%'
      },
      processFlow: [
        'Service Request',
        'Digital Verification',
        'Automated Processing',
        'Real-time Updates',
        'Digital Delivery'
      ],
      compliance: [
        'Digital India Guidelines',
        'e-Governance Standards',
        'Cybersecurity Framework',
        'Accessibility Norms'
      ],
      status: 'reviewing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Government/Civic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Constitutional Pillars */}
        <div className="absolute top-32 right-20 opacity-8">
          <div className="flex space-x-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-6 h-40 bg-gradient-to-b from-amber-300 to-orange-600 rounded-t-xl shadow-lg"></div>
                <div className="w-16 h-8 bg-orange-600 rounded-sm shadow-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Seal Pattern */}
        <div className="absolute top-1/4 left-10 opacity-15">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 border-8 border-amber-400 rounded-full"></div>
            <div className="absolute inset-4 border-4 border-orange-500 rounded-full"></div>
            <div className="absolute inset-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
              <Landmark className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* National Flag Waving */}
        <div className="absolute top-20 left-1/3 opacity-20">
          <div className={`w-32 h-20 bg-gradient-to-b from-orange-500 via-white to-green-500 rounded-sm shadow-lg transform ${govFlag ? 'rotate-2' : '-rotate-1'} transition-transform duration-1000`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
          <div className="w-2 h-32 bg-amber-600 -mt-20 ml-0"></div>
        </div>

        {/* Floating Civic Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-civic-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {i % 6 === 0 && <Building2 className="w-7 h-7 text-amber-500" />}
            {i % 6 === 1 && <Scale className="w-6 h-6 text-orange-500" />}
            {i % 6 === 2 && <Gavel className="w-8 h-8 text-yellow-600" />}
            {i % 6 === 3 && <Shield className="w-5 h-5 text-blue-500" />}
            {i % 6 === 4 && <Vote className="w-6 h-6 text-green-500" />}
            {i % 6 === 5 && <BookOpen className="w-7 h-7 text-purple-500" />}
          </div>
        ))}

        {/* Democratic Process Flow */}
        <div className="absolute bottom-20 right-10 opacity-15">
          <svg width="200" height="120" viewBox="0 0 200 120">
            <path 
              d="M20 100 L50 80 L80 60 L120 40 L160 20 L180 30" 
              stroke="url(#civicGradient)" 
              strokeWidth="4" 
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="civicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Citizen Service Network */}
        <div className="absolute bottom-32 left-32 opacity-12">
          <div className="grid grid-cols-4 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white border-amber-300 shadow-lg mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-full text-white mb-8 shadow-2xl">
              <Landmark className={`w-7 h-7 mr-3 ${govFlag ? 'scale-110' : 'scale-100'} transition-all`} />
              <span className="font-bold text-xl">Government & Public Sector</span>
              <Sparkles className="w-6 h-6 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Governance
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12">
              Modernize public service delivery with transparent automation that streamlines citizen services,
              ensures compliance, and builds trust through efficient, accountable governance systems.
            </p>

            {/* Citizen Service Command Center */}
            <Card className="max-w-6xl mx-auto bg-gradient-to-r from-white via-amber-50 to-orange-50 border-0 shadow-2xl mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center">
                  <Building2 className="w-8 h-8 mr-3 text-amber-700" />
                  Citizen Service Command Center
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Real-time public service delivery and transparency monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Service Level & Transparency Tracking */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-700" />
                        Citizen Service Level:
                      </span>
                      <span className="text-blue-700 font-bold text-xl">{Math.round(citizenServiceLevel)}%</span>
                    </div>
                    
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${citizenServiceLevel}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <div className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <CheckCircle className="w-2 h-2 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-amber-700" />
                        Transparency Index:
                      </span>
                      <span className="text-amber-700 font-bold text-xl">{Math.round(transparencyIndex)}%</span>
                    </div>
                    
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${transparencyIndex}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <div className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <Shield className="w-2 h-2 text-amber-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Government Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-lg">
                    <MessageSquare className="w-10 h-10 text-blue-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-800">{liveMetrics.grievancesProcessed.toLocaleString()}</div>
                    <div className="text-sm text-blue-700 font-medium">Grievances Resolved</div>
                    <div className="text-xs text-blue-600 mt-1">+{Math.floor(Math.random() * 5) + 2}% satisfaction</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 shadow-lg">
                    <DollarSign className="w-10 h-10 text-emerald-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-emerald-800">{liveMetrics.pensionsApproved.toLocaleString()}</div>
                    <div className="text-sm text-emerald-700 font-medium">Pensions Approved</div>
                    <div className="text-xs text-emerald-600 mt-1">Timely disbursement</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 shadow-lg">
                    <Globe className="w-10 h-10 text-purple-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-800">{liveMetrics.documentsVerified.toLocaleString()}</div>
                    <div className="text-sm text-purple-700 font-medium">Documents Verified</div>
                    <div className="text-xs text-purple-600 mt-1">Digital processing</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border border-amber-200 shadow-lg">
                    <Award className="w-10 h-10 text-amber-700 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-amber-800">{liveMetrics.transparencyScore.toFixed(1)}%</div>
                    <div className="text-sm text-amber-700 font-medium">Transparency Score</div>
                    <div className="text-xs text-amber-600 mt-1">Public accountability</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section - First Service Only */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Public Services Overview</h2>
            <p className="text-lg text-gray-600">Comprehensive automation solutions for government operations</p>
          </div>

          <div className="space-y-10">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-101 cursor-pointer group overflow-hidden">
              {/* Official Header Strip */}
              <div className={`h-2 bg-gradient-to-r ${services[0].gradient}`}></div>
              
              <div className="p-10">
                <div className="grid xl:grid-cols-4 gap-8">
                  {/* Service Overview */}
                  <div className="xl:col-span-3 space-y-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-8">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${services[0].gradient} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform border-4 border-white`}>
                          {services[0].icon}
                        </div>
                        <div>
                          <h3 className="text-4xl font-bold text-gray-800 mb-4">{services[0].name}</h3>
                          <p className="text-gray-600 text-xl leading-relaxed max-w-4xl">
                            {services[0].description}
                          </p>
                        </div>
                      </div>
                      
                      <Badge className="bg-green-100 text-green-800 border-green-300 font-semibold px-6 py-3 text-base flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Operational
                      </Badge>
                    </div>

                    {/* Process Flow Visualization */}
                    <div className="space-y-6">
                      <h4 className="font-bold text-gray-800 text-2xl flex items-center">
                        <MapPin className={`w-6 h-6 mr-3 ${services[0].primaryColor}`} />
                        Service Process Flow:
                      </h4>
                      <div className="grid md:grid-cols-5 gap-6">
                        {services[0].processFlow.map((step, stepIndex) => (
                          <div key={stepIndex} className="text-center group/step">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${services[0].gradient} text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-xl group-hover/step:scale-110 transition-transform border-4 border-white`}>
                              {stepIndex + 1}
                            </div>
                            <div className="text-sm text-gray-700 font-semibold leading-tight">{step}</div>
                            <div className="text-xs text-gray-500 mt-1">Automated</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Compliance Framework */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-800 text-2xl flex items-center">
                        <Scale className={`w-6 h-6 mr-3 ${services[0].primaryColor}`} />
                        Compliance Framework:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services[0].compliance.map((compliance, complianceIndex) => (
                          <div key={complianceIndex} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
                            <Shield className={`w-5 h-5 ${services[0].primaryColor}`} />
                            <span className="text-gray-700 font-medium">{compliance}</span>
                            <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Enhancement */}
                    <div className={`flex items-center space-x-6 p-8 bg-gradient-to-r ${services[0].lightBg} rounded-2xl border-l-8 border-blue-700`}>
                      <Brain className={`w-12 h-12 ${services[0].primaryColor}`} />
                      <div>
                        <div className={`font-bold ${services[0].primaryColor} text-2xl`}>AI-Powered Enhancement:</div>
                        <div className="text-gray-700 text-xl mt-2">{services[0].aiFeature}</div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics & Status Panel */}
                  <div className="space-y-8">
                    <h4 className="font-bold text-gray-800 text-2xl">Service Metrics</h4>
                    
                    <div className="space-y-6">
                      <div className={`text-center p-6 rounded-2xl bg-gradient-to-br ${services[0].lightBg} border-4 border-opacity-30 shadow-lg`}>
                        <div className={`text-4xl font-bold ${services[0].primaryColor}`}>{services[0].metrics.efficiency}%</div>
                        <div className="text-sm text-gray-600 font-medium mt-2">Efficiency Rate</div>
                      </div>
                      <div className={`text-center p-6 rounded-2xl bg-gradient-to-br ${services[0].lightBg} border-4 border-opacity-30 shadow-lg`}>
                        <div className={`text-4xl font-bold ${services[0].primaryColor}`}>{services[0].metrics.accuracy}</div>
                        <div className="text-sm text-gray-600 font-medium mt-2">Accuracy Rate</div>
                      </div>
                      <div className={`text-center p-6 rounded-2xl bg-gradient-to-br ${services[0].lightBg} border-4 border-opacity-30 shadow-lg`}>
                        <div className={`text-4xl font-bold ${services[0].primaryColor}`}>{services[0].metrics.timeReduction}</div>
                        <div className="text-sm text-gray-600 font-medium mt-2">Time Reduction</div>
                      </div>
                      <div className={`text-center p-6 rounded-2xl bg-gradient-to-br ${services[0].lightBg} border-4 border-opacity-30 shadow-lg`}>
                        <div className={`text-4xl font-bold ${services[0].primaryColor}`}>{services[0].metrics.citizenSatisfaction}</div>
                        <div className="text-sm text-gray-600 font-medium mt-2">Citizen Satisfaction</div>
                      </div>
                    </div>

                    {/* Technology Infrastructure */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-gray-700 flex items-center text-lg">
                        <Globe className="w-5 h-5 mr-2" />
                        Technology Stack:
                      </h5>
                      <div className="space-y-3">
                        {services[0].tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="flex items-center justify-between p-4 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                            <span className="text-gray-700 font-medium">{tool}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-green-600 text-sm font-medium">Active</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${services[0].gradient} hover:opacity-90 text-white shadow-xl text-xl py-8 font-bold rounded-2xl`}>
                      Deploy Service
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes civic-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
        }
        .animate-civic-float {
          animation: civic-float 15s ease-in-out infinite;
        }
        .hover\\:scale-101:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
};

export default GovernmentServicesPart1;