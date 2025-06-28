import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, FileText, DollarSign, UserMinus, Brain, Heart, Target, Star, TrendingUp, Clock, CheckCircle, AlertCircle, Zap, Sparkles, ArrowRight, Play, Pause, Award, UserCheck, Search, Calendar, MessageCircle, Shield, Eye, Activity, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface HRService {
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
    satisfaction: string;
    timeReduction: string;
    accuracy: string;
  };
  processSteps: string[];
  benefits: string[];
  status: 'active' | 'recruiting' | 'processing';
}

const HumanResourcesServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [candidateFlow, setCandidateFlow] = useState<number>(0);
  const [employeeSatisfaction, setEmployeeSatisfaction] = useState<number>(87);
  const [talentPulse, setTalentPulse] = useState<boolean>(false);
  const [liveMetrics, setLiveMetrics] = useState({
    resumesScreened: 847,
    payrollsProcessed: 1205,
    offboardingTasks: 34,
    employeeEngagement: 92.4
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCandidateFlow(prev => prev >= 100 ? 0 : prev + 3);
      setEmployeeSatisfaction(prev => Math.min(prev + Math.random() * 0.5, 98));
      setTalentPulse(prev => !prev);
      setLiveMetrics(prev => ({
        resumesScreened: prev.resumesScreened + Math.floor(Math.random() * 6),
        payrollsProcessed: prev.payrollsProcessed + Math.floor(Math.random() * 3),
        offboardingTasks: Math.max(34 - Math.floor(Math.random() * 2), 0),
        employeeEngagement: Math.min(prev.employeeEngagement + Math.random() * 0.3, 98)
      }));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const services: HRService[] = [
    {
      id: 'resume-screening',
      name: 'Resume Screening',
      description: 'Parse resumes → Rank candidates using NLP and ChatGPT for intelligent talent matching',
      tools: ['NLP Processing', 'ChatGPT API', 'ATS Integration', 'ML Ranking'],
      aiFeature: 'NLP + ChatGPT candidate analysis',
      icon: <Search className="w-8 h-8" />,
      primaryColor: 'text-indigo-600',
      accentColor: 'text-indigo-400',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      lightBg: 'from-indigo-50 to-purple-50',
      metrics: {
        efficiency: 94,
        satisfaction: '96.2%',
        timeReduction: '88%',
        accuracy: '97.5%'
      },
      processSteps: [
        'Resume Collection',
        'NLP Text Analysis',
        'Skill Extraction',
        'AI-Powered Ranking',
        'Candidate Shortlisting'
      ],
      benefits: [
        'Eliminate bias in initial screening',
        'Identify top talent 10x faster',
        'Comprehensive skill matching'
      ],
      status: 'recruiting'
    },
    {
      id: 'payroll-processing',
      name: 'Payroll Processing',
      description: 'Calculate salaries → Bank transfers with Tally and RPA for seamless financial automation',
      tools: ['Tally Integration', 'RPA Bots', 'Banking APIs', 'Tax Calculations'],
      aiFeature: 'Intelligent payroll optimization',
      icon: <DollarSign className="w-8 h-8" />,
      primaryColor: 'text-emerald-600',
      accentColor: 'text-emerald-400',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      lightBg: 'from-emerald-50 to-teal-50',
      metrics: {
        efficiency: 98,
        satisfaction: '99.1%',
        timeReduction: '92%',
        accuracy: '99.8%'
      },
      processSteps: [
        'Attendance Calculation',
        'Salary Computation',
        'Tax Deductions',
        'Bank Transfer Initiation',
        'Payslip Generation'
      ],
      benefits: [
        'Zero payroll errors',
        'Instant salary processing',
        'Automated compliance reporting'
      ],
      status: 'active'
    },
    {
      id: 'employee-offboarding',
      name: 'Employee Offboarding',
      description: 'Revoke access → Asset recovery using Active Directory and RPA for secure transitions',
      tools: ['Active Directory', 'RPA Automation', 'Asset Management', 'Security Protocols'],
      aiFeature: 'Smart access governance',
      icon: <UserMinus className="w-8 h-8" />,
      primaryColor: 'text-orange-600',
      accentColor: 'text-orange-400',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      lightBg: 'from-orange-50 to-red-50',
      metrics: {
        efficiency: 91,
        satisfaction: '94.7%',
        timeReduction: '85%',
        accuracy: '98.9%'
      },
      processSteps: [
        'Exit Interview Scheduling',
        'Access Revocation',
        'Asset Collection',
        'Knowledge Transfer',
        'Final Documentation'
      ],
      benefits: [
        'Secure access management',
        'Complete asset tracking',
        'Smooth knowledge handover'
      ],
      status: 'processing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
      {/* Human-centric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* People Network Visualization */}
        <div className="absolute top-20 right-32 opacity-10">
          <svg width="300" height="200" viewBox="0 0 300 200">
            <g stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6">
              {/* Network connections */}
              <line x1="50" y1="50" x2="120" y2="80" />
              <line x1="120" y1="80" x2="200" y2="60" />
              <line x1="200" y1="60" x2="250" y2="120" />
              <line x1="120" y1="80" x2="180" y2="140" />
              <line x1="50" y1="50" x2="80" y2="120" />
              <line x1="80" y1="120" x2="180" y2="140" />
              <line x1="200" y1="60" x2="180" y2="140" />
            </g>
            {/* People nodes */}
            <circle cx="50" cy="50" r="12" fill="#8b5cf6" />
            <circle cx="120" cy="80" r="12" fill="#ec4899" />
            <circle cx="200" cy="60" r="12" fill="#06b6d4" />
            <circle cx="250" cy="120" r="12" fill="#10b981" />
            <circle cx="80" cy="120" r="12" fill="#f59e0b" />
            <circle cx="180" cy="140" r="12" fill="#ef4444" />
          </svg>
        </div>

        {/* Floating HR Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-gentle-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {i % 5 === 0 && <Users className="w-6 h-6 text-indigo-400" />}
            {i % 5 === 1 && <Heart className="w-5 h-5 text-pink-400" />}
            {i % 5 === 2 && <Award className="w-7 h-7 text-purple-400" />}
            {i % 5 === 3 && <Star className="w-4 h-4 text-yellow-400" />}
            {i % 5 === 4 && <Target className="w-6 h-6 text-cyan-400" />}
          </div>
        ))}

        {/* Organizational Chart Pattern */}
        <div className="absolute bottom-20 left-10 opacity-15">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="flex space-x-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="mt-4 flex space-x-3">
                    {[...Array(2)].map((_, j) => (
                      <div key={j} className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Talent Growth Curve */}
        <div className="absolute top-1/3 left-20 opacity-10">
          <svg width="180" height="120" viewBox="0 0 180 120">
            <path 
              d="M20 100 Q60 80 100 50 Q140 20 160 30" 
              stroke="url(#talentGradient)" 
              strokeWidth="4" 
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="talentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white border-purple-200 shadow-lg mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full text-white mb-8 shadow-2xl">
              <Heart className={`w-7 h-7 mr-3 ${talentPulse ? 'scale-125 text-pink-200' : 'scale-100'} transition-all`} />
              <span className="font-bold text-xl">Human Resources Excellence</span>
              <Sparkles className="w-6 h-6 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                People-First
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12">
              Transform your HR operations with empathetic AI that streamlines recruitment, 
              perfects payroll, and ensures smooth transitions while keeping human connection at the center.
            </p>

            {/* Talent Intelligence Center */}
            <Card className="max-w-6xl mx-auto bg-gradient-to-r from-white via-purple-50 to-pink-50 border-0 shadow-2xl mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center">
                  <Brain className="w-8 h-8 mr-3 text-purple-600" />
                  Talent Intelligence Center
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Real-time HR insights and employee experience monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Candidate Flow & Employee Satisfaction */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Users className="w-5 h-5 mr-2 text-indigo-600" />
                        Candidate Processing Flow:
                      </span>
                      <span className="text-indigo-600 font-bold text-xl">{Math.round(candidateFlow)}%</span>
                    </div>
                    
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${candidateFlow}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <div className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <Search className="w-2 h-2 text-indigo-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-pink-600" />
                        Employee Satisfaction:
                      </span>
                      <span className="text-pink-600 font-bold text-xl">{employeeSatisfaction.toFixed(1)}%</span>
                    </div>
                    
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${employeeSatisfaction}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <div className="w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <Heart className="w-2 h-2 text-pink-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live HR Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl border border-indigo-200 shadow-lg">
                    <Search className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-indigo-700">{liveMetrics.resumesScreened.toLocaleString()}</div>
                    <div className="text-sm text-indigo-600 font-medium">Resumes Screened</div>
                    <div className="text-xs text-indigo-500 mt-1">+{Math.floor(Math.random() * 8) + 3}% match rate</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 shadow-lg">
                    <DollarSign className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-emerald-700">{liveMetrics.payrollsProcessed.toLocaleString()}</div>
                    <div className="text-sm text-emerald-600 font-medium">Payrolls Processed</div>
                    <div className="text-xs text-emerald-500 mt-1">Zero errors</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 shadow-lg">
                    <UserMinus className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-orange-700">{liveMetrics.offboardingTasks}</div>
                    <div className="text-sm text-orange-600 font-medium">Offboarding Tasks</div>
                    <div className="text-xs text-orange-500 mt-1">In progress</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-700">{liveMetrics.employeeEngagement.toFixed(1)}%</div>
                    <div className="text-sm text-purple-600 font-medium">Engagement Score</div>
                    <div className="text-xs text-purple-500 mt-1">Above industry avg</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl mb-12 p-2">
              <TabsTrigger value="services" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold">
                HR Services
              </TabsTrigger>
              <TabsTrigger value="talent" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold">
                Talent Pipeline
              </TabsTrigger>
              <TabsTrigger value="insights" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold">
                HR Insights
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services">
              <div className="space-y-8">
                {services.map((service, index) => (
                  <Card 
                    key={service.id}
                    className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-101 cursor-pointer group overflow-hidden"
                    onClick={() => setSelectedService(index)}
                  >
                    {/* Gradient Header */}
                    <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                    
                    <div className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Service Information */}
                        <div className="lg:col-span-2 space-y-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-6">
                              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform`}>
                                {service.icon}
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-3">{service.name}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                            
                            <Badge className={`${
                              service.status === 'active' ? 'bg-green-100 text-green-700 border-green-300' :
                              service.status === 'recruiting' ? 'bg-blue-100 text-blue-700 border-blue-300' :
                              'bg-purple-100 text-purple-700 border-purple-300'
                            } font-semibold px-4 py-2 text-sm flex items-center`}>
                              {service.status === 'active' && <CheckCircle className="w-4 h-4 mr-2" />}
                              {service.status === 'recruiting' && <Search className="w-4 h-4 mr-2" />}
                              {service.status === 'processing' && <Activity className="w-4 h-4 mr-2" />}
                              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                            </Badge>
                          </div>

                          {/* Process Steps */}
                          <div className="space-y-4">
                            <h4 className="font-bold text-gray-800 text-lg flex items-center">
                              <Target className={`w-5 h-5 mr-2 ${service.primaryColor}`} />
                              Process Steps:
                            </h4>
                            <div className="grid md:grid-cols-5 gap-4">
                              {service.processSteps.map((step, stepIndex) => (
                                <div key={stepIndex} className="text-center group/step">
                                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center font-bold text-lg mx-auto mb-3 shadow-lg group-hover/step:scale-110 transition-transform`}>
                                    {stepIndex + 1}
                                  </div>
                                  <div className="text-sm text-gray-700 font-medium leading-tight">{step}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Benefits */}
                          <div className="space-y-3">
                            <h4 className="font-bold text-gray-800 text-lg flex items-center">
                              <Award className={`w-5 h-5 mr-2 ${service.primaryColor}`} />
                              Key Benefits:
                            </h4>
                            <div className="grid md:grid-cols-1 gap-3">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                                  <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* AI Enhancement */}
                          <div className={`flex items-center space-x-4 p-6 bg-gradient-to-r ${service.lightBg} rounded-2xl border-l-4`} style={{borderLeftColor: service.primaryColor.replace('text-', '')}}>
                            <Brain className={`w-10 h-10 ${service.primaryColor}`} />
                            <div>
                              <div className={`font-bold ${service.primaryColor} text-xl`}>AI-Powered Enhancement:</div>
                              <div className="text-gray-700 text-lg">{service.aiFeature}</div>
                            </div>
                          </div>
                        </div>

                        {/* Metrics & Tools Panel */}
                        <div className="space-y-6">
                          <h4 className="font-bold text-gray-800 text-xl">Performance Metrics</h4>
                          
                          <div className="space-y-4">
                            <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.lightBg} border-2 border-opacity-30`}>
                              <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.efficiency}%</div>
                              <div className="text-sm text-gray-600 font-medium">Efficiency Rate</div>
                            </div>
                            <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.lightBg} border-2 border-opacity-30`}>
                              <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.satisfaction}</div>
                              <div className="text-sm text-gray-600 font-medium">User Satisfaction</div>
                            </div>
                            <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.lightBg} border-2 border-opacity-30`}>
                              <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.timeReduction}</div>
                              <div className="text-sm text-gray-600 font-medium">Time Reduction</div>
                            </div>
                            <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.lightBg} border-2 border-opacity-30`}>
                              <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.accuracy}</div>
                              <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
                            </div>
                          </div>

                          {/* Technology Stack */}
                          <div className="space-y-3">
                            <h5 className="font-semibold text-gray-700 flex items-center">
                              <GraduationCap className="w-4 h-4 mr-2" />
                              Technology Stack:
                            </h5>
                            <div className="space-y-2">
                              {service.tools.map((tool, toolIndex) => (
                                <div key={toolIndex} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
                                  <span className="text-gray-700 font-medium">{tool}</span>
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-xl text-lg py-6 font-semibold`}>
                            Deploy HR Solution
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="talent">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Users className="w-7 h-7 mr-3 text-indigo-600" />
                      Talent Pipeline
                    </CardTitle>
                    <CardDescription>Active recruitment and candidate management</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Resume Screening</span>
                        <span className="text-indigo-600 font-bold">94%</span>
                      </div>
                      <Progress value={94} className="h-3" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Interview Scheduling</span>
                        <span className="text-purple-600 font-bold">87%</span>
                      </div>
                      <Progress value={87} className="h-3" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">Candidate Communication</span>
                        <span className="text-pink-600 font-bold">96%</span>
                      </div>
                      <Progress value={96} className="h-3" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-indigo-50 rounded-xl">
                        <div className="text-2xl font-bold text-indigo-600">247</div>
                        <div className="text-sm text-indigo-700">Active Candidates</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">38</div>
                        <div className="text-sm text-purple-700">Interviews Today</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Briefcase className="w-7 h-7 mr-3 text-emerald-600" />
                      Employee Lifecycle
                    </CardTitle>
                    <CardDescription>Complete employee journey automation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {['Onboarding', 'Performance Review', 'Training & Development', 'Offboarding'].map((stage, index) => (
                      <div key={stage} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            index === 0 ? 'bg-green-500' :
                            index === 1 ? 'bg-blue-500' :
                            index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                          } animate-pulse`}></div>
                          <span className="font-medium text-gray-700">{stage}</span>
                        </div>
                        <span className="text-sm text-gray-600">Automated</span>
                      </div>
                    ))}

                    <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span className="font-semibold text-emerald-700">Upcoming Events</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">New Employee Orientation</span>
                          <span className="text-emerald-600 font-medium">Tomorrow 9:00 AM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Q4 Performance Reviews</span>
                          <span className="text-emerald-600 font-medium">Next Week</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Activity className="w-7 h-7 mr-3 text-purple-600" />
                      HR Analytics Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {services.map((service, index) => (
                      <div key={service.id} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 flex items-center">
                            {service.icon}
                            <span className="ml-3">{service.name}</span>
                          </span>
                          <span className={`font-bold ${service.primaryColor}`}>
                            {service.metrics.efficiency}%
                          </span>
                        </div>
                        <Progress 
                          value={service.metrics.efficiency} 
                          className="h-4"
                        />
                        <div className="text-sm text-gray-600">
                          Satisfaction: {service.metrics.satisfaction} | Accuracy: {service.metrics.accuracy}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Eye className="w-7 h-7 mr-3 text-pink-600" />
                      Live Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <div className="flex items-center justify-between">
                        <span className="text-green-700 font-medium">Team Productivity</span>
                        <span className="text-green-600 font-bold">+12%</span>
                      </div>
                      <div className="text-sm text-green-600 mt-1">Above monthly target</div>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-700 font-medium">Time to Hire</span>
                        <span className="text-blue-600 font-bold">18 days</span>
                      </div>
                      <div className="text-sm text-blue-600 mt-1">25% faster than industry</div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-700 font-medium">Employee Retention</span>
                        <span className="text-purple-600 font-bold">94.2%</span>
                      </div>
                      <div className="text-sm text-purple-600 mt-1">Industry leading</div>
                    </div>

                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            service.status === 'active' ? 'bg-green-500' :
                            service.status === 'recruiting' ? 'bg-blue-500' : 'bg-purple-500'
                          } animate-pulse`}></div>
                          <span className="text-sm font-medium text-gray-700">
                            {service.name}
                          </span>
                        </div>
                        <span className={`text-xs font-bold ${service.primaryColor}`}>
                          {service.status}
                        </span>
                      </div>
                    ))}

                    <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        <span className="font-semibold text-yellow-700">Action Items</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Update job descriptions</span>
                          <span className="text-yellow-600 font-medium">3 pending</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Schedule team meetings</span>
                          <span className="text-yellow-600 font-medium">2 this week</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        .animate-gentle-float {
          animation: gentle-float 10s ease-in-out infinite;
        }
        .hover\\:scale-101:hover {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
};

export default HumanResourcesServices;