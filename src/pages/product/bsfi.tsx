import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Shield, TrendingDown, Database, CheckCircle, Clock, Users, Zap, BarChart3, AlertTriangle, DollarSign, FileText, Scan, Brain, Lock, Sparkles, ArrowRight, Play, Pause, Activity } from 'lucide-react';
import { useNavigation } from '@/utils/navigation';
import { ROUTES } from '@/utils/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BFSIService {
  id: string;
  name: string;
  description: string;
  tools: string[];
  aiFeature: string;
  icon: React.ReactNode;
  color: string;
  metrics: {
    accuracy: number;
    speed: string;
    savings: string;
    volume: string;
  };
  process: string[];
  status: 'active' | 'processing' | 'optimizing';
}

const BFSIServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [processingProgress, setProcessingProgress] = useState<number>(0);
  const [liveStats, setLiveStats] = useState({
    loansProcessed: 2847,
    fraudDetected: 156,
    disputes: 89,
    reconciliations: 1245
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProcessingProgress(prev => prev >= 100 ? 0 : prev + 2);
      setLiveStats(prev => ({
        loansProcessed: prev.loansProcessed + Math.floor(Math.random() * 3),
        fraudDetected: prev.fraudDetected + (Math.random() > 0.9 ? 1 : 0),
        disputes: prev.disputes + (Math.random() > 0.8 ? 1 : 0),
        reconciliations: prev.reconciliations + Math.floor(Math.random() * 2)
      }));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const services: BFSIService[] = [
    {
      id: 'loan-processing',
      name: 'Loan Application Processing',
      description: 'Automated KYC data extraction, credit scoring, and approval workflows',
      tools: ['UiPath', 'Abbyy OCR', 'Credit APIs'],
      aiFeature: 'ML-powered document verification',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      metrics: {
        accuracy: 98.5,
        speed: '15 seconds',
        savings: '75%',
        volume: '500+ daily'
      },
      process: [
        'Document Upload & OCR Scanning',
        'KYC Data Extraction',
        'Credit Score Analysis',
        'Risk Assessment',
        'Automated Approval/Rejection'
      ],
      status: 'active'
    },
    {
      id: 'aml-monitoring',
      name: 'AML Monitoring',
      description: 'Real-time transaction scanning and suspicious activity detection',
      tools: ['AI Anomaly Detection', 'Python', 'Real-time APIs'],
      aiFeature: 'Behavioral pattern recognition',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      metrics: {
        accuracy: 99.2,
        speed: 'Real-time',
        savings: '60%',
        volume: '10K+ transactions'
      },
      process: [
        'Transaction Stream Analysis',
        'Pattern Recognition',
        'Risk Scoring',
        'Alert Generation',
        'Compliance Reporting'
      ],
      status: 'processing'
    },
    {
      id: 'dispute-resolution',
      name: 'Card Dispute Resolution',
      description: 'Automated dispute form completion from transaction logs',
      tools: ['Blue Prism', 'SQL Database', 'Banking APIs'],
      aiFeature: 'Smart form filling',
      icon: <CreditCard className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      metrics: {
        accuracy: 96.8,
        speed: '2 minutes',
        savings: '85%',
        volume: '200+ daily'
      },
      process: [
        'Dispute Request Analysis',
        'Transaction Log Retrieval',
        'Form Auto-completion',
        'Evidence Compilation',
        'Submission & Tracking'
      ],
      status: 'optimizing'
    },
    {
      id: 'reconciliation',
      name: 'Bank Reconciliation',
      description: 'Intelligent matching of statements with ERP entries',
      tools: ['Fuzzy Matching AI', 'SAP Integration', 'Excel Processing'],
      aiFeature: 'Smart matching algorithms',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      metrics: {
        accuracy: 99.7,
        speed: '30 seconds',
        savings: '90%',
        volume: '1000+ entries'
      },
      process: [
        'Statement Import',
        'Data Standardization',
        'Fuzzy Matching',
        'Exception Handling',
        'Final Reconciliation'
      ],
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Financial Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        {/* Floating Financial Icons */}
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
            {i % 4 === 0 && <DollarSign className="w-8 h-8 text-blue-400" />}
            {i % 4 === 1 && <Lock className="w-6 h-6 text-cyan-400" />}
            {i % 4 === 2 && <TrendingDown className="w-10 h-10 text-green-400" />}
            {i % 4 === 3 && <Database className="w-7 h-7 text-purple-400" />}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white mb-8">
              <Shield className="w-6 h-6 mr-3" />
              <span className="font-semibold text-lg">Banking & Financial Services</span>
              <Sparkles className="w-5 h-5 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
              Secure Financial
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your financial operations with AI-powered automation that ensures compliance, 
              reduces risk, and accelerates processing while maintaining the highest security standards.
            </p>

            {/* Live Statistics Dashboard */}
            <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">{liveStats.loansProcessed.toLocaleString()}</div>
                <div className="text-blue-200 text-sm">Loans Processed</div>
                <div className="text-green-400 text-xs mt-1">+{Math.floor(Math.random() * 5) + 1}% today</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-red-400">{liveStats.fraudDetected}</div>
                <div className="text-blue-200 text-sm">Fraud Detected</div>
                <div className="text-yellow-400 text-xs mt-1">Real-time alerts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400">{liveStats.disputes}</div>
                <div className="text-blue-200 text-sm">Disputes Resolved</div>
                <div className="text-green-400 text-xs mt-1">Auto-processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400">{liveStats.reconciliations.toLocaleString()}</div>
                <div className="text-blue-200 text-sm">Reconciliations</div>
                <div className="text-blue-400 text-xs mt-1">Daily average</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/10 backdrop-blur-md mb-12">
              <TabsTrigger value="services" className="text-white data-[state=active]:bg-white/20">
                Service Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-white/20">
                Live Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card 
                    key={service.id}
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedService(index)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                          {service.icon}
                        </div>
                        <Badge className={`${
                          service.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          service.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                          'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        } animate-pulse`}>
                          {service.status === 'active' && <Activity className="w-3 h-3 mr-1" />}
                          {service.status === 'processing' && <Play className="w-3 h-3 mr-1" />}
                          {service.status === 'optimizing' && <Zap className="w-3 h-3 mr-1" />}
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-2xl text-white">{service.name}</CardTitle>
                      <CardDescription className="text-blue-200 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-xl font-bold text-green-400">{service.metrics.accuracy}%</div>
                          <div className="text-xs text-blue-200">Accuracy</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-xl font-bold text-cyan-400">{service.metrics.speed}</div>
                          <div className="text-xs text-blue-200">Avg Time</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-xl font-bold text-yellow-400">{service.metrics.savings}</div>
                          <div className="text-xs text-blue-200">Cost Savings</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="text-xl font-bold text-purple-400">{service.metrics.volume}</div>
                          <div className="text-xs text-blue-200">Daily Volume</div>
                        </div>
                      </div>

                      {/* Process Flow */}
                      <div className="space-y-3">
                        <h4 className="text-white font-semibold">Process Flow:</h4>
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-sm font-bold`}>
                              {stepIndex + 1}
                            </div>
                            <span className="text-blue-100 flex-1">{step}</span>
                            {stepIndex < service.process.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-blue-400" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Tools & AI Feature */}
                      <div className="space-y-4">
                        <div>
                          <span className="text-blue-300 font-semibold">Tools: </span>
                          <span className="text-blue-100">{service.tools.join(', ')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Brain className="w-5 h-5 text-purple-400" />
                          <span className="text-purple-300 font-semibold">AI Enhancement: </span>
                          <span className="text-purple-100">{service.aiFeature}</span>
                        </div>
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}>
                        Configure Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Processing Monitor */}
                <Card className="bg-white/10 backdrop-blur-md border-white/20 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Activity className="w-6 h-6 mr-3 text-cyan-400" />
                      Real-time Processing Monitor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-200">Current Processing:</span>
                        <span className="text-cyan-400 font-bold">{processingProgress}%</span>
                      </div>
                      <Progress value={processingProgress} className="h-3" />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                          <div className="flex items-center justify-between">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-400">1,247</div>
                              <div className="text-green-300 text-sm">Completed Today</div>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                          <div className="flex items-center justify-between">
                            <Clock className="w-8 h-8 text-blue-400" />
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-400">23</div>
                              <div className="text-blue-300 text-sm">In Queue</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* System Status */}
                <Card className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white">System Health</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {services.map((service, index) => (
                      <div key={service.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            service.status === 'active' ? 'bg-green-400' :
                            service.status === 'processing' ? 'bg-blue-400' : 'bg-yellow-400'
                          } animate-pulse`}></div>
                          <span className="text-blue-100 text-sm">{service.name.split(' ')[0]}</span>
                        </div>
                        <span className="text-xs text-blue-300">{service.metrics.accuracy}%</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BFSIServices;