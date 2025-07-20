import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Shield, CheckCircle, ArrowRight, Clock, BarChart3, MessageCircle, ArrowLeft, Star, Users, Zap, Calendar, Settings, TrendingUp, Phone, AlertTriangle, Target, Monitor, Activity, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Progress } from '../../ui/progress';
import { Alert, AlertDescription } from '../../ui/alert';
import DotPatternCircle from '../../ui/DotPatternCircle';

// TypeScript Interfaces
interface HypercareFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  responseTime: string;
  availability: string;
  channels: string[];
}

interface LaunchPhase {
  phase: string;
  title: string;
  focus: string;
  progress: number;
  icon: React.ReactNode;
  color: string;
  activities: string[];
  supportLevel: string;
  keyMetrics: string[];
  dailyChecks: string[];
}

interface MonitoringMetric {
  metric: string;
  current: string;
  target: string;
  status: string;
  description: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  trend: string;
  lastUpdate: string;
}

interface SupportService {
  service: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  responseTime: string;
  availability: string;
  channels: string[];
  examples: string[];
}

interface TweakExample {
  category: string;
  icon: React.ReactNode;
  color: string;
  examples: string[];
  timeframe: string;
  complexity: string;
}

interface SuccessMetric {
  metric: string;
  target: string;
  current: string;
  status: string;
  measurement: string;
  frequency: string;
}

const HypercareLaunchPage: React.FC = () => {
  const router = useRouter();
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);
  const [activeSupport, setActiveSupport] = useState<number | null>(null);

  const hypercareFeatures: HypercareFeature[] = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: '24/7 Priority Support',
      description: 'Immediate assistance during the critical launch period',
      color: 'from-red-500 to-pink-500',
      responseTime: '< 1 hour',
      availability: '24/7 during launch',
      channels: ['Phone', 'Email', 'Discord', 'Video call']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and performance insights',
      color: 'from-blue-500 to-cyan-500',
      responseTime: 'Real-time',
      availability: 'Continuous monitoring',
      channels: ['Dashboard', 'Alerts', 'Reports']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: '3 Free Tweaks',
      description: 'Adjustments and optimizations based on real usage',
      color: 'from-green-500 to-emerald-500',
      responseTime: '24-48 hours',
      availability: 'As needed',
      channels: ['Scheduled updates', 'Performance reviews']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Support',
      description: 'Dedicated support for your team during transition',
      color: 'from-purple-500 to-indigo-500',
      responseTime: 'Same day',
      availability: 'Business hours',
      channels: ['Training', 'Documentation', 'One-on-one']
    }
  ];

  const launchPhases: LaunchPhase[] = [
    {
      phase: 'Week 1',
      title: 'Go-Live Support',
      focus: 'Smooth transition to production environment',
      progress: 100,
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      activities: [
        'Production deployment monitoring',
        'Initial user onboarding',
        'System performance validation',
        'Issue identification and resolution'
      ],
      supportLevel: '24/7 immediate response',
      keyMetrics: ['System uptime: 99.9%', 'Response times: <2s', 'User adoption: 95%'],
      dailyChecks: [
        'Morning system health review',
        'Midday performance check',
        'Evening usage analysis',
        'Overnight monitoring alerts'
      ]
    },
    {
      phase: 'Week 2',
      title: 'Optimization & Adjustment',
      focus: 'Fine-tuning based on real-world usage',
      progress: 75,
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      activities: [
        'Performance optimization',
        'User feedback integration',
        'Process refinements',
        'Additional training if needed'
      ],
      supportLevel: 'Business hours priority',
      keyMetrics: ['Process efficiency: +85%', 'User satisfaction: 98%', 'Error rates: <0.1%'],
      dailyChecks: [
        'Performance metrics review',
        'User feedback analysis',
        'Optimization opportunities',
        'Training effectiveness'
      ]
    }
  ];

  const monitoringDashboard: MonitoringMetric[] = [
    {
      metric: 'System Uptime',
      current: '99.97%',
      target: '99.9%',
      status: 'Excellent',
      description: 'Track availability and reliability',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: <Activity className="w-5 h-5" />,
      trend: '+0.07%',
      lastUpdate: '2 minutes ago'
    },
    {
      metric: 'Processing Speed',
      current: '1.2s',
      target: '< 2s',
      status: 'Excellent',
      description: 'Monitor automation execution times',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: <Zap className="w-5 h-5" />,
      trend: '-0.3s',
      lastUpdate: '5 minutes ago'
    },
    {
      metric: 'Error Rates',
      current: '0.03%',
      target: '< 0.1%',
      status: 'Excellent',
      description: 'Track and resolve any processing errors',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: <AlertTriangle className="w-5 h-5" />,
      trend: '-0.02%',
      lastUpdate: '1 minute ago'
    },
    {
      metric: 'User Activity',
      current: '94%',
      target: '90%',
      status: 'Great',
      description: 'Monitor team adoption and usage patterns',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: <Users className="w-5 h-5" />,
      trend: '+4%',
      lastUpdate: '10 minutes ago'
    },
    {
      metric: 'Time Savings',
      current: '16.2hrs',
      target: '15hrs',
      status: 'Exceeding',
      description: 'Measure actual time savings achieved',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      icon: <Clock className="w-5 h-5" />,
      trend: '+1.2hrs',
      lastUpdate: 'Hourly update'
    },
    {
      metric: 'Process Efficiency',
      current: '87%',
      target: '80%',
      status: 'Excellent',
      description: 'Track overall process improvement',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      icon: <TrendingUp className="w-5 h-5" />,
      trend: '+7%',
      lastUpdate: '15 minutes ago'
    }
  ];

  const supportServices: SupportService[] = [
    {
      service: 'Immediate Issue Resolution',
      description: 'Fast response to any technical issues or questions',
      icon: <Phone className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      responseTime: '< 1 hour',
      availability: '24/7 during launch period',
      channels: ['Phone', 'Email', 'Discord', 'Video call'],
      examples: [
        'System not responding',
        'Integration failures',
        'Performance issues',
        'User access problems'
      ]
    },
    {
      service: 'Performance Monitoring',
      description: 'Continuous monitoring of system performance and usage',
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      responseTime: 'Real-time',
      availability: 'Continuous monitoring',
      channels: ['Dashboard', 'Automated alerts', 'Daily reports'],
      examples: [
        'Real-time performance tracking',
        'Automated alert notifications',
        'Daily summary reports',
        'Trend analysis'
      ]
    },
    {
      service: 'User Training Support',
      description: 'Additional training and guidance for your team',
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      responseTime: 'Same day',
      availability: 'Business hours',
      channels: ['Video sessions', 'Documentation', 'One-on-one support'],
      examples: [
        'Feature walkthroughs',
        'Best practice sessions',
        'Troubleshooting training',
        'Advanced usage tips'
      ]
    },
    {
      service: 'System Optimization',
      description: 'Fine-tuning and adjustments based on actual usage',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      responseTime: '24-48 hours',
      availability: 'As needed',
      channels: ['Scheduled updates', 'Performance reviews'],
      examples: [
        'Performance improvements',
        'Workflow optimizations',
        'UI/UX adjustments',
        'Integration enhancements'
      ]
    }
  ];

  const tweakExamples: TweakExample[] = [
    {
      category: 'User Interface Adjustments',
      icon: <Monitor className="w-5 h-5" />,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      examples: [
        'Modify dashboard layout for better usability',
        'Adjust notification preferences',
        'Customize report formats',
        'Update user access controls'
      ],
      timeframe: '24-48 hours',
      complexity: 'Low-Medium'
    },
    {
      category: 'Workflow Optimizations',
      icon: <Target className="w-5 h-5" />,
      color: 'bg-green-50 text-green-700 border-green-200',
      examples: [
        'Adjust automation triggers',
        'Modify processing rules',
        'Update integration parameters',
        'Refine error handling'
      ],
      timeframe: '1-2 days',
      complexity: 'Medium'
    },
    {
      category: 'Performance Enhancements',
      icon: <Zap className="w-5 h-5" />,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      examples: [
        'Optimize processing speed',
        'Improve data handling',
        'Enhance system responsiveness',
        'Reduce resource usage'
      ],
      timeframe: '2-3 days',
      complexity: 'Medium-High'
    }
  ];

  const successMetrics: SuccessMetric[] = [
    {
      metric: 'System Stability',
      target: '99.9% uptime',
      current: '99.97%',
      status: 'Exceeding',
      measurement: 'Automated monitoring',
      frequency: 'Continuous'
    },
    {
      metric: 'User Adoption',
      target: '90% team usage',
      current: '94%',
      status: 'Exceeding',
      measurement: 'Activity tracking',
      frequency: 'Daily'
    },
    {
      metric: 'Performance Goals',
      target: 'Blueprint specifications',
      current: '108% of target',
      status: 'Exceeding',
      measurement: 'Performance analytics',
      frequency: 'Weekly'
    },
    {
      metric: 'Issue Resolution',
      target: '< 1 hour response',
      current: '32 minutes avg',
      status: 'Exceeding',
      measurement: 'Support ticket tracking',
      frequency: 'Real-time'
    }
  ];

  const handleMetricSelection = (index: number): void => {
    setSelectedMetric(selectedMetric === index ? null : index);
  };

  const handleSupportSelection = (index: number): void => {
    setActiveSupport(activeSupport === index ? null : index);
  };

  const handleBackToProcess = () => {
    router.push('/#automation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-red-700 opacity-90"></div>
        <DotPatternCircle className="opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
        <Button
          variant="outline"
          className="p-1 text-white border-white bg-tansparent hover:text-blue-600 mb-6"
          onClick={handleBackToProcess}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Process
        </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mr-6 backdrop-blur-sm">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                    Hypercare Launch
                  </h1>
                  <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-pink-100 border-white/30">
                    <HeartHandshake className="w-4 h-4 mr-2" />
                    2 weeks intensive support
                  </Badge>
                </div>
              </div>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Includes 24/7 priority support, performance analytics, and 3 free tweaks 
                to ensure your automation launches successfully and meets your expectations.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 shadow-xl">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Support Dashboard
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Immediate Support
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Activity className="w-6 h-6 mr-2" />
                  Live Support Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: '24/7 Priority Support', status: 'Active', icon: <Shield className="w-5 h-5" /> },
                  { label: 'Performance Monitoring', status: 'Running', icon: <Monitor className="w-5 h-5" /> },
                  { label: 'System Health', status: '99.97%', icon: <Activity className="w-5 h-5" /> },
                  { label: 'Response Time', status: '< 32 min', icon: <Clock className="w-5 h-5" /> }
                ].map((item, index: number) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-300/30">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Hypercare Features */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Hypercare Support</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Intensive support during the critical first two weeks to ensure successful adoption and optimal performance.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hypercareFeatures.map((feature: HypercareFeature, index: number) => (
                  <Card 
                    key={index} 
                    className={`group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer ${
                      activeSupport === index ? 'ring-2 ring-red-500' : ''
                    }`}
                    onClick={() => handleSupportSelection(index)}
                  >
                    <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Response Time:</span>
                          <Badge variant="outline" className="text-xs">{feature.responseTime}</Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Availability:</span>
                          <span className="text-gray-800 font-medium text-xs">{feature.availability}</span>
                        </div>
                      </div>
                      
                      {activeSupport === index && (
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm font-semibold text-gray-800 mb-2">Support Channels:</div>
                          <div className="flex flex-wrap gap-1">
                            {feature.channels.map((channel: string, cIndex: number) => (
                              <Badge key={cIndex} variant="secondary" className="text-xs">
                                {channel}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Launch Phases */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">2-Week Launch Plan</h2>
                <p className="text-lg text-gray-600">Structured support phases for successful automation launch</p>
              </div>
              
              <div className="space-y-8">
                {launchPhases.map((phase: LaunchPhase, index: number) => (
                  <Card key={index} className="border-0 shadow-lg overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${phase.color}`}></div>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-4 gap-8 items-start">
                        <div className="lg:col-span-1">
                          <div className="flex items-center mb-4">
                            <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white mr-4`}>
                              {phase.icon}
                            </div>
                            <div>
                              <Badge variant="outline" className="mb-2">{phase.phase}</Badge>
                              <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{phase.focus}</p>
                          <Progress value={phase.progress} className="h-2" />
                          <div className="text-xs text-gray-500 mt-1">{phase.progress}% Complete</div>
                        </div>
                        
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold text-gray-800 mb-3">Activities:</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity: string, actIndex: number) => (
                              <div key={actIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold text-gray-800 mb-3">Key Metrics:</h4>
                          <div className="space-y-2">
                            {phase.keyMetrics.map((metric: string, metIndex: number) => (
                              <div key={metIndex} className="p-2 bg-green-50 rounded-lg">
                                <span className="text-green-700 text-sm">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                          <h4 className="font-semibold text-gray-800 mb-3">Daily Checks:</h4>
                          <div className="space-y-2">
                            {phase.dailyChecks.map((check: string, checkIndex: number) => (
                              <div key={checkIndex} className="flex items-center text-sm">
                                <Clock className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{check}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <Card className="bg-gradient-to-r from-red-50 to-pink-100 border-0 overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800">Success Metrics</CardTitle>
                <CardDescription className="text-lg">Tracking performance against targets during hypercare period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {successMetrics.map((metric: SuccessMetric, index: number) => (
                    <Card key={index} className="border-0 shadow-lg bg-white text-center">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">{metric.metric}</CardTitle>
                        <div className="text-3xl font-bold text-green-600">{metric.current}</div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {metric.status}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Target:</span>
                            <span className="font-medium">{metric.target}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Measurement:</span>
                            <span className="font-medium">{metric.measurement}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Frequency:</span>
                            <span className="font-medium">{metric.frequency}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Services</h2>
              <p className="text-xl text-gray-600">Comprehensive support coverage during your hypercare period</p>
            </div>
            
            <div className="space-y-8">
              {supportServices.map((service: SupportService, index: number) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="text-center lg:text-left">
                        <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center text-white mx-auto lg:mx-0 mb-4`}>
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.service}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="space-y-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Response: {service.responseTime}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 block">
                            {service.availability}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Support Channels:</h4>
                            <div className="space-y-2">
                              {service.channels.map((channel: string, cIndex: number) => (
                                <div key={cIndex} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{channel}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Common Examples:</h4>
                            <div className="space-y-2">
                              {service.examples.map((example: string, eIndex: number) => (
                                <div key={eIndex} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Monitoring Dashboard</h2>
              <p className="text-xl text-gray-600">Real-time insights into system performance and usage</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monitoringDashboard.map((metric: MonitoringMetric, index: number) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${metric.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center text-white mr-4`}>
                        {metric.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{metric.metric}</h3>
                        <div className="text-sm text-gray-500">{metric.description}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 text-center">
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-gray-800">{metric.current}</div>
                        <div className="text-sm text-gray-500">Current</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-gray-800">{metric.target}</div>
                        <div className="text-sm text-gray-500">Target</div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Progress value={parseFloat(metric.current.replace('%',''))} max={parseFloat(metric.target.replace('%',''))} className="h-2 rounded-full bg-gray-200">
                        <div className={`h-full rounded-full ${metric.bgColor}`} style={{ width: `${parseFloat(metric.current)}%` }}></div>
                      </Progress>
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>Trend:</span>
                        <span className={`font-semibold ${metric.trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.trend}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Update:</span>
                        <span>{metric.lastUpdate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Optimization Opportunities</h2>
              <p className="text-xl text-gray-600">Suggested tweaks and enhancements for your automation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tweakExamples.map((tweak: TweakExample, index: number) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${tweak.color}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tweak.color} rounded-full flex items-center justify-center text-white mr-4`}>
                        {tweak.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{tweak.category}</h3>
                        <div className="text-sm text-gray-500">Suggested Tweaks</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {tweak.examples.map((example: string, eIndex: number) => (
                        <div key={eIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{example}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-xs text-gray-500 mb-2">Estimated Timeframe:</div>
                      <div className="text-sm font-medium text-gray-800">{tweak.timeframe}</div>
                    </div>
                    
                    <div className="mt-2">
                      <div className="text-xs text-gray-500 mb-2">Complexity:</div>
                      <div className="text-sm font-medium text-gray-800">{tweak.complexity}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-red-700 mt-20">
        <DotPatternCircle className="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Launch?</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Schedule a strategy call with our experts to discuss your automation goals and how we can help you achieve them.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 shadow-xl">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HypercareLaunchPage;