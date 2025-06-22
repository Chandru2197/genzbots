import React, { useState, useEffect } from 'react';
import { ArrowLeft, Rocket, Users, TrendingUp, Zap, BarChart3, Activity, Globe, Clock, Star, Play, ChevronRight, Target, Award, Shield, Bot, Sparkles, ArrowUp, Calendar, Phone, MessageCircle, CheckCircle, Timer, DollarSign, Eye, Brain, Settings, Gauge, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, RadialBarChart, RadialBar, PieChart, Cell } from 'recharts';
import { useRouter } from 'next/router';

interface ScalingMetric {
  category: string;
  current: number;
  projected: number;
  color: string;
  icon: React.ReactNode;
  description: string;
  unit: string;
}

interface CapacityLevel {
  level: string;
  capacity: number;
  cost: number;
  efficiency: number;
  timeframe: string;
  features: string[];
  color: string;
}

interface AutomationBot {
  name: string;
  function: string;
  capacity: string;
  uptime: number;
  tasksCompleted: number;
  efficiency: number;
  status: 'active' | 'optimizing' | 'scaling';
  color: string;
}

const GrowthAccelerator: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number>(0);
  const [selectedCapacity, setSelectedCapacity] = useState<number>(1);
  const [animatedCapacity, setAnimatedCapacity] = useState<number>(0);
  const [liveMetrics, setLiveMetrics] = useState({
    activeUsers: 0,
    tasksProcessed: 0,
    efficiency: 0,
    costSavings: 0
  });

  // Animate capacity counter
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedCapacity(prev => prev < 1000 ? prev + 25 : 1000);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Simulate live metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        activeUsers: Math.min(prev.activeUsers + Math.floor(Math.random() * 5), 247),
        tasksProcessed: prev.tasksProcessed + Math.floor(Math.random() * 12),
        efficiency: Math.min(prev.efficiency + Math.random() * 2, 98.7),
        costSavings: prev.costSavings + Math.floor(Math.random() * 50)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % scalingMetrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scalingMetrics: ScalingMetric[] = [
    {
      category: 'Customer Support Capacity',
      current: 50,
      projected: 500,
      color: '#3b82f6',
      icon: <Users className="w-6 h-6" />,
      description: 'Simultaneous customer conversations handled 24/7',
      unit: 'conversations'
    },
    {
      category: 'Lead Processing Speed',
      current: 25,
      projected: 1000,
      color: '#10b981',
      icon: <Zap className="w-6 h-6" />,
      description: 'Qualified leads processed per hour automatically',
      unit: 'leads/hour'
    },
    {
      category: 'Response Time',
      current: 240,
      projected: 15,
      color: '#f59e0b',
      icon: <Timer className="w-6 h-6" />,
      description: 'Average customer response time in seconds',
      unit: 'seconds'
    },
    {
      category: 'Operational Efficiency',
      current: 65,
      projected: 97,
      color: '#ef4444',
      icon: <Target className="w-6 h-6" />,
      description: 'Overall business process efficiency rating',
      unit: '%'
    }
  ];

  const capacityLevels: CapacityLevel[] = [
    {
      level: 'Small Business Scale',
      capacity: 300,
      cost: 7997,
      efficiency: 85,
      timeframe: '1-2 weeks',
      features: [
        'Customer service automation (24/7)',
        'Lead qualification system', 
        'Email campaign automation',
        'Basic analytics dashboard',
        'Standard integrations (CRM, Email)',
        '8x5 technical support'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      level: 'Enterprise Growth',
      capacity: 800,
      cost: 19997,
      efficiency: 93,
      timeframe: '3-5 days',
      features: [
        'Multi-channel customer support',
        'Advanced lead nurturing workflows',
        'Sales pipeline automation',
        'AI-powered analytics & insights',
        'Custom workflow development',
        'Premium integrations (Salesforce, HubSpot)',
        '24/7 priority support',
        'Performance optimization'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      level: 'Enterprise Scale',
      capacity: 1500,
      cost: 49997,
      efficiency: 98,
      timeframe: '24-48 hours',
      features: [
        'Unlimited automation capacity',
        'AI-powered predictive analytics',
        'Custom bot development',
        'White-label solutions',
        'Advanced security & compliance',
        'Dedicated success manager',
        'Priority development queue',
        'Custom API development',
        'Advanced reporting suite'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const automationBots: AutomationBot[] = [
    {
      name: 'Customer Service AI',
      function: 'Handles customer inquiries, complaints, and support tickets across all channels',
      capacity: '24/7 unlimited conversations',
      uptime: 99.9,
      tasksCompleted: 24780,
      efficiency: 96.8,
      status: 'active',
      color: '#3b82f6'
    },
    {
      name: 'Lead Qualification Bot',
      function: 'Automatically qualifies leads, schedules demos, and nurtures prospects',
      capacity: '1000+ leads per day',
      uptime: 99.7,
      tasksCompleted: 18950,
      efficiency: 94.2,
      status: 'optimizing',
      color: '#10b981'
    },
    {
      name: 'Sales Pipeline Manager',
      function: 'Manages entire sales process from lead to close automatically',
      capacity: 'Unlimited pipeline management',
      uptime: 100,
      tasksCompleted: 12680,
      efficiency: 98.5,
      status: 'active',
      color: '#f59e0b'
    },
    {
      name: 'Performance Analytics AI',
      function: 'Real-time business intelligence and automated reporting',
      capacity: 'Continuous monitoring',
      uptime: 99.8,
      tasksCompleted: 35240,
      efficiency: 97.1,
      status: 'scaling',
      color: '#8b5cf6'
    },
    {
      name: 'Invoice & Billing Bot',
      function: 'Automated invoice generation, payment processing, and follow-ups',
      capacity: '500+ invoices per hour',
      uptime: 99.6,
      tasksCompleted: 15420,
      efficiency: 95.3,
      status: 'active',
      color: '#ef4444'
    },
    {
      name: 'Social Media Manager',
      function: 'Content scheduling, engagement monitoring, and response automation',
      capacity: 'Multi-platform management',
      uptime: 99.9,
      tasksCompleted: 28900,
      efficiency: 93.7,
      status: 'active',
      color: '#06b6d4'
    }
  ];

  const growthProjection = [
    { month: 'Month 1', capacity: 100, team: 10, costs: 100, revenue: 100 },
    { month: 'Month 2', capacity: 200, team: 12, costs: 95, revenue: 150 },
    { month: 'Month 3', capacity: 350, team: 15, costs: 88, revenue: 220 },
    { month: 'Month 6', capacity: 600, team: 18, costs: 75, revenue: 380 },
    { month: 'Month 9', capacity: 850, team: 20, costs: 65, revenue: 520 },
    { month: 'Month 12', capacity: 1000, team: 22, costs: 60, revenue: 650 }
  ];

  const realTimeData = [
    { name: 'Customer Support', value: 98, color: '#3b82f6' },
    { name: 'Sales Pipeline', value: 85, color: '#10b981' },
    { name: 'Analytics', value: 94, color: '#f59e0b' },
    { name: 'Infrastructure', value: 90, color: '#8b5cf6' }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechScale Inc',
      role: 'CEO',
      quote: 'We scaled from 50 to 500 customers without adding a single team member. The Growth Accelerator literally transformed our business model.',
      growth: '10x capacity',
      timeframe: '6 months',
      avatar: 'MC'
    },
    {
      name: 'Sarah Williams',
      company: 'CloudBoost',
      role: 'Operations Director',
      quote: 'Our customer support went from 9-5 to 24/7 overnight. Response times dropped from hours to seconds.',
      growth: '24/7 operations',
      timeframe: '2 weeks',
      avatar: 'SW'
    },
    {
      name: 'David Rodriguez',
      company: 'ScaleMax',
      role: 'CTO',
      quote: 'The automation bots handle everything - from lead qualification to customer onboarding. Our team focuses on innovation.',
      growth: '300% efficiency',
      timeframe: '4 months',
      avatar: 'DR'
    }
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-40 right-1/3 opacity-20 animate-bounce">
          <Rocket className="w-12 h-12 text-purple-500" />
        </div>
        <div className="absolute bottom-40 left-1/3 opacity-15 animate-bounce delay-1000">
          <Zap className="w-10 h-10 text-blue-500" />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-20 animate-bounce delay-2000">
          <TrendingUp className="w-14 h-14 text-green-500" />
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <Button variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white border-purple-200 cursor-pointer" onClick={()=>router.push('/solutions')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Button>
      </div>

      {/* Hero Section - Futuristic Dashboard */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 text-lg mb-8 shadow-lg">
            <Rocket className="w-6 h-6 mr-2" />
            Growth Accelerator
          </Badge>
          
          <h1 className="text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Scale Without
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Hiring Anyone
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
            Deploy software robots to handle high-volume tasks 24/7, freeing your human talent 
            to focus on strategic growth and innovation.
          </p>

          {/* Live Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{liveMetrics.activeUsers}</div>
                <div className="text-sm text-gray-600">Active Users</div>
                <div className="text-xs text-green-600 mt-1">+12% today</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <Activity className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{liveMetrics.tasksProcessed.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Tasks Today</div>
                <div className="text-xs text-green-600 mt-1">Real-time</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <Gauge className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{liveMetrics.efficiency.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Efficiency</div>
                <div className="text-xs text-green-600 mt-1">↗ Trending up</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">${liveMetrics.costSavings.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Saved Today</div>
                <div className="text-xs text-green-600 mt-1">Auto-calculating</div>
              </CardContent>
            </Card>
          </div>

          {/* Capacity Visualizer */}
          <Card className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-md border-0 shadow-2xl max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Current Scale Capacity
              </CardTitle>
              <CardDescription className="text-lg">Watch your business scale in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {animatedCapacity}%
                  </div>
                  <div className="text-xl text-gray-600 mt-2">Scaling Capacity Achieved</div>
                </div>
                
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-6">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full transition-all duration-1000 relative"
                    style={{ width: `${animatedCapacity / 10}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-purple-700">Operations</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">10x</div>
                    <div className="text-sm text-blue-700">Capacity</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">&lt;1min</div>
                    <div className="text-sm text-green-700">Response</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Tabbed Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <Tabs defaultValue="metrics" className="w-full">
          {/* Premium Tab Navigation */}
          <div className="relative mb-16">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-4 max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-2xl border-0 rounded-3xl p-3 h-auto">
                <TabsTrigger 
                  value="metrics" 
                  className="flex flex-col items-center py-6 px-8 rounded-2xl text-center transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-xl hover:bg-purple-50"
                >
                  <BarChart3 className="w-8 h-8 mb-2" />
                  <span className="font-bold text-lg">Scaling Metrics</span>
                  <span className="text-xs opacity-80">Performance Analysis</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="capacity" 
                  className="flex flex-col items-center py-6 px-8 rounded-2xl text-center transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-xl hover:bg-blue-50"
                >
                  <Gauge className="w-8 h-8 mb-2" />
                  <span className="font-bold text-lg">Capacity Levels</span>
                  <span className="text-xs opacity-80">Scale Options</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="bots" 
                  className="flex flex-col items-center py-6 px-8 rounded-2xl text-center transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-xl hover:bg-cyan-50"
                >
                  <Bot className="w-8 h-8 mb-2" />
                  <span className="font-bold text-lg">AI Workforce</span>
                  <span className="text-xs opacity-80">Automation Bots</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="growth" 
                  className="flex flex-col items-center py-6 px-8 rounded-2xl text-center transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-xl hover:bg-green-50"
                >
                  <TrendingUp className="w-8 h-8 mb-2" />
                  <span className="font-bold text-lg">ROI Calculator</span>
                  <span className="text-xs opacity-80">Growth Projections</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="metrics" className="space-y-12">
            {/* Scaling Metrics Visualization */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Interactive Metrics Cards */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Scaling Performance
                </h2>
                {scalingMetrics.map((metric, index) => (
                  <Card 
                    key={index}
                    className={`cursor-pointer transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 ${
                      activeMetric === index ? 'ring-4 ring-purple-400 shadow-2xl -translate-y-2' : ''
                    }`}
                    onClick={() => setActiveMetric(index)}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg"
                            style={{ backgroundColor: metric.color }}
                          >
                            {metric.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{metric.category}</h3>
                            <p className="text-gray-600">{metric.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-red-50 rounded-xl">
                          <div className="text-sm text-red-600 mb-1">Current</div>
                          <div className="text-2xl font-bold text-red-700">
                            {metric.current} {metric.unit}
                          </div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-xl">
                          <div className="text-sm text-green-600 mb-1">With Automation</div>
                          <div className="text-2xl font-bold text-green-700">
                            {metric.projected} {metric.unit}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Improvement</span>
                          <span className="font-bold text-green-600">
                            {metric.category === 'Response Time' || metric.category === 'Cost Efficiency' 
                              ? `${((metric.current - metric.projected) / metric.current * 100).toFixed(0)}% reduction`
                              : `${((metric.projected - metric.current) / metric.current * 100).toFixed(0)}% increase`
                            }
                          </span>
                        </div>
                        <Progress 
                          value={metric.category === 'Response Time' || metric.category === 'Cost Efficiency' 
                            ? ((metric.current - metric.projected) / metric.current * 100)
                            : Math.min(((metric.projected - metric.current) / metric.current * 100), 100)
                          } 
                          className="h-3" 
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Real-time Performance Chart */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Activity className="w-6 h-6 mr-3 text-purple-500" />
                    Real-time Performance
                  </CardTitle>
                  <CardDescription>Live automation bot performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart data={realTimeData} innerRadius="30%" outerRadius="90%">
                        <RadialBar dataKey="value" cornerRadius={10} fill="#8b5cf6" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e5e7eb', 
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                          }}
                          formatter={(value: number) => [`${value}%`, 'Performance']}
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {realTimeData.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
                        <div 
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.value}% efficiency</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="capacity" className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-12">
              Choose Your Scale Level
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {capacityLevels.map((level, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-4 ${
                    selectedCapacity === index ? 'ring-4 ring-purple-400 shadow-2xl -translate-y-4 scale-105' : ''
                  }`}
                  onClick={() => setSelectedCapacity(index)}
                >
                  <div className={`h-3 bg-gradient-to-r ${level.color}`}></div>
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{level.level}</CardTitle>
                    <div className="text-5xl font-bold my-4">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {level.capacity}%
                      </span>
                    </div>
                    <div className="text-xl text-gray-600">Scale Capacity</div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 rounded-xl">
                        <div className="text-lg font-bold text-purple-600">${level.cost.toLocaleString()}</div>
                        <div className="text-xs text-purple-700">Investment</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-xl">
                        <div className="text-lg font-bold text-green-600">{level.efficiency}%</div>
                        <div className="text-xs text-green-700">Efficiency</div>
                      </div>
                    </div>
                    
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-lg font-bold text-blue-600">{level.timeframe}</div>
                      <div className="text-xs text-blue-700">Implementation Time</div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Features Included:</h4>
                      {level.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button className={`w-full bg-gradient-to-r ${level.color} hover:opacity-90 text-white shadow-lg`}>
                      Start Scaling
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bots" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Meet Your AI Workforce
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deploy specialized AI agents that work 24/7 to handle every aspect of your business operations
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {automationBots.map((bot, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div 
                          className="w-16 h-16 rounded-3xl flex items-center justify-center text-white mr-4 shadow-lg group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: bot.color }}
                        >
                          <Bot className="w-8 h-8" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900">{bot.name}</CardTitle>
                          <CardDescription className="text-gray-600 leading-relaxed">{bot.function}</CardDescription>
                        </div>
                      </div>
                      <Badge 
                        className={`${
                          bot.status === 'active' ? 'bg-green-100 text-green-800 border-green-300' :
                          bot.status === 'optimizing' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                          'bg-blue-100 text-blue-800 border-blue-300'
                        } animate-pulse px-3 py-1 font-semibold`}
                      >
                        {bot.status.charAt(0).toUpperCase() + bot.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">{bot.uptime}%</div>
                        <div className="text-xs text-gray-600 font-medium">Uptime</div>
                        <div className="text-xs text-green-600 mt-1">Excellent</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">{bot.tasksCompleted.toLocaleString()}</div>
                        <div className="text-xs text-gray-600 font-medium">Tasks Done</div>
                        <div className="text-xs text-blue-600 mt-1">This month</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                        <div className="text-2xl font-bold text-gray-900">{bot.efficiency}%</div>
                        <div className="text-xs text-gray-600 font-medium">Efficiency</div>
                        <div className="text-xs text-purple-600 mt-1">AI-optimized</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span className="font-medium">Processing Capacity:</span>
                        <span className="font-bold" style={{ color: bot.color }}>
                          {bot.capacity}
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={bot.efficiency} className="h-4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl border-2" style={{ 
                      backgroundColor: `${bot.color}08`, 
                      borderColor: `${bot.color}30`
                    }}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-3 animate-pulse"
                            style={{ backgroundColor: bot.color }}
                          ></div>
                          <span className="text-sm font-semibold" style={{ color: bot.color }}>
                            {bot.status === 'active' ? 'Processing tasks in real-time' :
                             bot.status === 'optimizing' ? 'Optimizing performance algorithms' :
                             'Scaling capacity automatically'}
                          </span>
                        </div>
                        <Eye className="w-4 h-4" style={{ color: bot.color }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="w-full" style={{ borderColor: bot.color, color: bot.color }}>
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button className="w-full text-white" style={{ backgroundColor: bot.color }}>
                        <Activity className="w-4 h-4 mr-2" />
                        View Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bot Performance Summary */}
            <Card className="bg-gradient-to-br from-white/95 to-purple-50/90 backdrop-blur-md border-0 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">AI Workforce Performance</CardTitle>
                <CardDescription className="text-lg">Combined impact of your automation team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Globe className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">135K+</div>
                    <div className="text-sm text-gray-600">Total Tasks Completed</div>
                    <div className="text-xs text-green-600 mt-1">+18% this month</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">99.8%</div>
                    <div className="text-sm text-gray-600">Average Uptime</div>
                    <div className="text-xs text-green-600 mt-1">Industry leading</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Target className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">96.1%</div>
                    <div className="text-sm text-gray-600">Average Efficiency</div>
                    <div className="text-xs text-purple-600 mt-1">AI-optimized</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Award className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Continuous Operation</div>
                    <div className="text-xs text-orange-600 mt-1">Never sleeps</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth" className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-12">
              Your Growth Journey
            </h2>
            
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">12-Month Scaling Projection</CardTitle>
                <CardDescription className="text-lg">Watch your capacity grow while costs decrease</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={growthProjection}>
                      <defs>
                        <linearGradient id="capacityGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#6b7280" fontSize={14} />
                      <YAxis stroke="#6b7280" fontSize={14} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb', 
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="capacity" 
                        stroke="#8b5cf6" 
                        fillOpacity={1} 
                        fill="url(#capacityGradient)" 
                        strokeWidth={3}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#10b981" 
                        fillOpacity={1} 
                        fill="url(#revenueGradient)" 
                        strokeWidth={3}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="costs" 
                        stroke="#ef4444" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-purple-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600">1000%</div>
                    <div className="text-sm text-purple-700">Capacity Increase</div>
                    <div className="text-xs text-gray-600 mt-2">10x your current scale</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600">650%</div>
                    <div className="text-sm text-green-700">Revenue Growth</div>
                    <div className="text-xs text-gray-600 mt-2">6.5x return potential</div>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-2xl">
                    <div className="text-3xl font-bold text-red-600">-40%</div>
                    <div className="text-sm text-red-700">Cost Reduction</div>
                    <div className="text-xs text-gray-600 mt-2">Lower per-unit costs</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.company}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-purple-50 rounded-xl">
                        <div className="text-lg font-bold text-purple-600">{testimonial.growth}</div>
                        <div className="text-xs text-purple-700">Achievement</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <div className="text-lg font-bold text-blue-600">{testimonial.timeframe}</div>
                        <div className="text-xs text-blue-700">Timeline</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl font-bold mb-8 leading-tight">
              Ready to Scale Beyond Limits?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              Join innovative companies scaling 10x without hiring. Deploy your automation workforce 
              today and watch your business grow exponentially.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all px-10 py-6 text-xl font-semibold">
                <Rocket className="w-6 h-6 mr-3" />
                Start Scaling Now
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-600 shadow-xl px-10 py-6 text-xl font-semibold">
                <Calendar className="w-6 h-6 mr-3" />
                Book Strategy Call
              </Button>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-blue-200">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-300" />
                <span className="text-lg">24/7 automation</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-300" />
                <span className="text-lg">10x scale capacity</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-300" />
                <span className="text-lg">No hiring needed</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-300" />
                <span className="text-lg">Instant deployment</span>
              </div>
            </div>
            
            <div className="mt-12 text-blue-200">
              <p className="text-lg">
                🚀 Scale instantly • ⚡ 99.9% uptime • 🎯 10x capacity • 💰 40% cost reduction
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default GrowthAccelerator;