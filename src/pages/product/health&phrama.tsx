import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, UserCheck, FileText, Pill, Calendar, ClipboardCheck, Database, Stethoscope, Activity, Users, TrendingUp, Clock, Shield, Zap, Brain, Sparkles, ArrowRight, Play, Pause, AlertCircle, CheckCircle, Timer, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EnhancedGlass3DCard } from '@/components/enhanced/EnhancedGlass3DCard';

interface HealthcareService {
  id: string;
  name: string;
  description: string;
  tools: string[];
  aiFeature: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  metrics: {
    efficiency: number;
    accuracy: string;
    timeReduction: string;
    volume: string;
  };
  workflow: string[];
  benefits: string[];
  status: 'active' | 'processing' | 'scheduled';
}

const HealthcareServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [patientFlow, setPatientFlow] = useState<number>(0);
  const [heartbeat, setHeartbeat] = useState<boolean>(false);
  const [liveMetrics, setLiveMetrics] = useState({
    patientsOnboarded: 342,
    claimsProcessed: 1876,
    trialsActive: 47,
    inventoryUpdates: 689
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPatientFlow(prev => prev >= 100 ? 0 : prev + 1.5);
      setHeartbeat(prev => !prev);
      setLiveMetrics(prev => ({
        patientsOnboarded: prev.patientsOnboarded + Math.floor(Math.random() * 2),
        claimsProcessed: prev.claimsProcessed + Math.floor(Math.random() * 4),
        trialsActive: 47 + Math.floor(Math.random() * 3),
        inventoryUpdates: prev.inventoryUpdates + Math.floor(Math.random() * 3)
      }));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const services: HealthcareService[] = [
    {
      id: 'patient-onboarding',
      name: 'Patient Onboarding',
      description: 'Scan IDs → Populate EHR → Schedule appointments with intelligent document processing',
      tools: ['UiPath', 'OCR Technology', 'EHR APIs'],
      aiFeature: 'Intelligent document processing',
      icon: <UserCheck className="w-8 h-8" />,
      color: 'text-emerald-500',
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      metrics: {
        efficiency: 89,
        accuracy: '98.2%',
        timeReduction: '85%',
        volume: '200+ daily'
      },
      workflow: [
        'Patient ID Scanning',
        'OCR Data Extraction',
        'EHR Record Creation',
        'Insurance Verification',
        'Appointment Scheduling'
      ],
      benefits: [
        'Reduced waiting times by 85%',
        'Error-free data entry',
        'Seamless EHR integration'
      ],
      status: 'active'
    },
    {
      id: 'claims-processing',
      name: 'Claims Processing',
      description: 'Validate insurance claims → Submit to TPAs with AI-powered rule-based validation',
      tools: ['Python', 'Automation Anywhere', 'Insurance APIs'],
      aiFeature: 'Rule-based validation',
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: 'text-blue-500',
      gradient: 'from-blue-400 via-indigo-500 to-purple-500',
      metrics: {
        efficiency: 94,
        accuracy: '99.1%',
        timeReduction: '70%',
        volume: '500+ daily'
      },
      workflow: [
        'Claim Document Intake',
        'Data Validation',
        'Medical Code Verification',
        'TPA Submission',
        'Status Tracking'
      ],
      benefits: [
        'Faster claim approvals',
        'Reduced manual errors',
        'Real-time tracking'
      ],
      status: 'processing'
    },
    {
      id: 'clinical-trials',
      name: 'Clinical Trial Data Entry',
      description: 'Extract lab report data → Trial databases with medical data interpretation AI',
      tools: ['Python', 'Automation Anywhere', 'Lab APIs'],
      aiFeature: 'Medical data interpretation',
      icon: <FileText className="w-8 h-8" />,
      color: 'text-purple-500',
      gradient: 'from-purple-400 via-pink-500 to-rose-500',
      metrics: {
        efficiency: 91,
        accuracy: '97.8%',
        timeReduction: '80%',
        volume: '100+ reports'
      },
      workflow: [
        'Lab Report Analysis',
        'Data Standardization',
        'Quality Checks',
        'Database Entry',
        'Compliance Reporting'
      ],
      benefits: [
        'Accelerated trial timelines',
        'FDA compliance assurance',
        'Data integrity maintenance'
      ],
      status: 'scheduled'
    },
    {
      id: 'pharmacy-inventory',
      name: 'Pharmacy Inventory Sync',
      description: 'Auto-generate purchase orders with predictive inventory management',
      tools: ['SAP Integration', 'RPA Bots', 'Supplier APIs'],
      aiFeature: 'Predictive inventory management',
      icon: <Pill className="w-8 h-8" />,
      color: 'text-orange-500',
      gradient: 'from-orange-400 via-red-500 to-pink-500',
      metrics: {
        efficiency: 96,
        accuracy: '99.5%',
        timeReduction: '90%',
        volume: '1000+ items'
      },
      workflow: [
        'Stock Level Monitoring',
        'Demand Forecasting',
        'Supplier Communication',
        'PO Generation',
        'Delivery Tracking'
      ],
      benefits: [
        'Zero stockouts',
        'Optimized inventory costs',
        'Automated reordering'
      ],
      status: 'active'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 relative overflow-hidden">
      {/* Medical Cross Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Medical Cross */}
        <div className="absolute top-20 right-32 w-64 h-64 opacity-5">
          <div className="absolute top-24 left-0 w-full h-16 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"></div>
          <div className="absolute top-0 left-24 w-16 h-full bg-gradient-to-b from-teal-300 to-cyan-300 rounded-full"></div>
        </div>
        
        {/* DNA Helix Pattern */}
        <div className="absolute bottom-20 left-10 opacity-10">
          <svg width="200" height="400" viewBox="0 0 200 400">
            <defs>
              <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path d="M50 0 Q150 50 50 100 Q-50 150 50 200 Q150 250 50 300 Q-50 350 50 400" 
                  stroke="url(#dnaGradient)" strokeWidth="4" fill="none"/>
            <path d="M150 0 Q50 50 150 100 Q250 150 150 200 Q50 250 150 300 Q250 350 150 400" 
                  stroke="url(#dnaGradient)" strokeWidth="4" fill="none"/>
          </svg>
        </div>

        {/* Floating Medical Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 && <Heart className={`w-8 h-8 text-red-400 ${heartbeat ? 'scale-125' : 'scale-100'} transition-transform`} />}
            {i % 4 === 1 && <Stethoscope className="w-6 h-6 text-teal-400" />}
            {i % 4 === 2 && <Pill className="w-7 h-7 text-blue-400" />}
            {i % 4 === 3 && <Shield className="w-5 h-5 text-green-400" />}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white border-teal-200 shadow-lg mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white mb-8 shadow-2xl">
              <Heart className={`w-7 h-7 mr-3 ${heartbeat ? 'scale-125 text-red-200' : 'scale-100'} transition-all`} />
              <span className="font-bold text-xl">Healthcare & Pharma Automation</span>
              <Sparkles className="w-6 h-6 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Healing Through
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              Revolutionize patient care with AI-powered automation that streamlines operations,
              ensures compliance, and accelerates treatment delivery while maintaining the highest standards of care.
            </p>

            {/* Patient Flow Visualizer */}
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-white/95 to-teal-50/95 backdrop-blur-md border-0 shadow-2xl mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-teal-700 flex items-center justify-center">
                  <Activity className="w-8 h-8 mr-3" />
                  Live Patient Flow Monitor
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">Real-time healthcare automation in action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700 font-semibold">Patient Processing Pipeline:</span>
                    <span className="text-teal-600 font-bold text-xl">{Math.round(patientFlow)}%</span>
                  </div>
                  
                  <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 rounded-full transition-all duration-1000 relative"
                      style={{ width: `${patientFlow}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <UserCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-700">{liveMetrics.patientsOnboarded}</div>
                    <div className="text-sm text-emerald-600">Patients Onboarded</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-200">
                    <ClipboardCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-700">{liveMetrics.claimsProcessed.toLocaleString()}</div>
                    <div className="text-sm text-blue-600">Claims Processed</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-2xl border border-purple-200">
                    <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-700">{liveMetrics.trialsActive}</div>
                    <div className="text-sm text-purple-600">Active Trials</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-2xl border border-orange-200">
                    <Pill className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-700">{liveMetrics.inventoryUpdates}</div>
                    <div className="text-sm text-orange-600">Inventory Updates</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl mb-12">
              <TabsTrigger value="services" className="rounded-xl data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Services
              </TabsTrigger>
              <TabsTrigger value="workflow" className="rounded-xl data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Workflow
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl data-[state=active]:bg-teal-500 data-[state=active]:text-white">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services">
              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={service.id}>
                    <EnhancedGlass3DCard
                      title={service.name}
                      description={service.description}
                      icon={service.icon}
                      className="w-full cursor-pointer mb-4"
                      onClick={() => setActiveService(index)}
                    />
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`$ {
                        service.status === 'active' ? 'bg-green-100 text-green-700 border-green-300' :
                        service.status === 'processing' ? 'bg-blue-100 text-blue-700 border-blue-300' :
                        'bg-orange-100 text-orange-700 border-orange-300'
                      } font-semibold px-3 py-1`}>
                        {service.status === 'active' && <Activity className="w-3 h-3 mr-1" />}
                        {service.status === 'processing' && <Timer className="w-3 h-3 mr-1" />}
                        {service.status === 'scheduled' && <Calendar className="w-3 h-3 mr-1" />}
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="space-y-6">
                      {/* Performance Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border">
                          <div className={`text-2xl font-bold ${service.color}`}>{service.metrics.efficiency}%</div>
                          <div className="text-xs text-gray-600 font-medium">Efficiency</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border">
                          <div className={`text-2xl font-bold ${service.color}`}>{service.metrics.accuracy}</div>
                          <div className="text-xs text-gray-600 font-medium">Accuracy</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border">
                          <div className={`text-2xl font-bold ${service.color}`}>{service.metrics.timeReduction}</div>
                          <div className="text-xs text-gray-600 font-medium">Time Saved</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border">
                          <div className={`text-2xl font-bold ${service.color}`}>{service.metrics.volume}</div>
                          <div className="text-xs text-gray-600 font-medium">Daily Volume</div>
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Key Benefits:
                        </h4>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3 pl-7">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* AI Enhancement */}
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} bg-opacity-10 border-2 border-opacity-20`} style={{borderColor: service.color.replace('text-', '')}}>
                        <div className="flex items-center space-x-3">
                          <Brain className={`w-6 h-6 ${service.color}`} />
                          <div>
                            <div className={`font-semibold ${service.color}`}>AI Enhancement:</div>
                            <div className="text-gray-700 text-sm">{service.aiFeature}</div>
                          </div>
                        </div>
                      </div>

                      {/* Tools */}
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm">Technologies: </span>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="outline" className="text-xs bg-white">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-lg text-base py-6`}>
                        Deploy Service
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div> {/* <-- Add this closing div */}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workflow">
              <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    {services[activeService]?.name} Workflow
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Step-by-step automation process visualization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {services[activeService]?.workflow.map((step, index) => (
                      <div key={index} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${services[activeService]?.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-gray-800">{step}</div>
                          <div className="text-sm text-gray-600">Automated process step</div>
                        </div>
                        {index < services[activeService]?.workflow.length - 1 && (
                          <ArrowRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <BarChart3 className="w-7 h-7 mr-3 text-teal-500" />
                      Performance Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {services.map((service, index) => (
                        <div key={service.id} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">{service.name}</span>
                            <span className={`font-bold ${service.color}`}>{service.metrics.efficiency}%</span>
                          </div>
                          <Progress value={service.metrics.efficiency} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">System Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            service.status === 'active' ? 'bg-green-500' :
                            service.status === 'processing' ? 'bg-blue-500' : 'bg-orange-500'
                          } animate-pulse`}></div>
                          <span className="text-sm font-medium text-gray-700">
                            {service.name.split(' ')[0]}
                          </span>
                        </div>
                        <span className={`text-xs font-bold ${service.color}`}>
                          {service.metrics.accuracy}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;