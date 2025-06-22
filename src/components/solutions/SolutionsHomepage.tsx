import React, { useState, useEffect } from 'react';
import { Clock, BarChart3, ChevronRight, Shield, Settings, CheckCircle, Sparkles, Rocket, Timer, TrendingUp, DollarSign, Globe, Award, Activity, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart as RechartsPieChart, Cell } from 'recharts';
import { useRouter } from 'next/router';

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  savings: string;
  roi: string;
  color: string;
  darkColor: string;
  icon: React.ReactNode;
  features: string[];
  automations: string[];
  highlight: string;
  link?: string;
  stats: {
    accuracy: string;
    clients?: string;
    satisfaction?: string;
    saved?: string;
    errors?: string;
    uptime?: string;
    scale?: string;
    response?: string;
    flexibility?: string;
    integration?: string;
    support?: string;
  };
  chartData: any[];
  chartType: 'line' | 'area' | 'bar' | 'pie';
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
  trend: number;
}

const SolutionsHomePage: React.FC = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState<boolean>(false);
  const router = useRouter();
  // Trigger stats animation
  useEffect(() => {
    setTimeout(() => setAnimatedStats(true), 1000);
  }, []);

  const solutions: Solution[] = [
    {
      id: 'time-liberation',
      title: 'Time Liberation Package',
      link:"/solutions/time-liberation",
      subtitle: 'Get Back 15+ Hours Weekly',
      description: 'Eliminate repetitive tasks and reclaim your time with intelligent process automation that learns and adapts to your workflow patterns.',
      price: 'From $2,997',
      savings: '15+ hours/week',
      roi: '2-3 months',
      color: 'from-blue-600 to-cyan-500',
      darkColor: 'from-blue-700 to-cyan-600',
      icon: <Clock className="w-8 h-8" />,
      features: ['AI-Powered Invoice Processing', 'Smart Data Entry Automation', 'Intelligent Report Generation', '24/7 Proactive Support'],
      automations: ['Email workflow automation', 'Document processing pipeline', 'Database synchronization', 'Multi-system integration'],
      highlight: 'Most Popular',
      stats: { accuracy: '99.5%', clients: '200+', satisfaction: '98%' },
      chartData: [
        { month: 'Jan', hours: 40, automated: 5 },
        { month: 'Feb', hours: 40, automated: 12 },
        { month: 'Mar', hours: 40, automated: 18 },
        { month: 'Apr', hours: 40, automated: 22 },
        { month: 'May', hours: 40, automated: 25 },
        { month: 'Jun', hours: 40, automated: 25 }
      ],
      chartType: 'area'
    },
    {
      id: 'profit-rescue',
      title: 'Profit Rescue Kit',
      link:"/solutions/profit-rescue",
      subtitle: 'Stop Losing Money to Errors',
      description: 'Advanced AI-driven error detection and financial reconciliation system that prevents costly mistakes before they impact your bottom line.',
      price: 'From $4,997',
      savings: '$2,400/month',
      roi: '1-2 months',
      color: 'from-red-500 to-orange-500',
      darkColor: 'from-red-600 to-orange-600',
      icon: <Shield className="w-8 h-8" />,
      features: ['Real-time Error Detection', 'Automated Financial Reconciliation', 'Compliance Monitoring Suite', 'Instant Alert System'],
      automations: ['Payment verification system', 'Billing accuracy checks', 'Regulatory compliance automation', 'Financial anomaly detection'],
      highlight: 'High ROI',
      stats: { accuracy: '99.8%', saved: '$50K+', errors: '95% reduction' },
      chartData: [
        { name: 'Overpayments', value: 35, color: '#ef4444' },
        { name: 'Missed Billings', value: 28, color: '#f97316' },
        { name: 'Compliance Gaps', value: 22, color: '#eab308' },
        { name: 'Data Errors', value: 15, color: '#22c55e' }
      ],
      chartType: 'pie'
    },
    {
      id: 'growth-accelerator',
      title: 'Growth Accelerator',
      link:"/solutions/growth-accelerator",
      subtitle: 'Scale Without Hiring',
      description: 'Enterprise-grade automation platform that scales your operations 10x without additional headcount, powered by advanced AI and machine learning.',
      price: 'From $7,997',
      savings: '24/7 operations',
      roi: '1 month',
      color: 'from-purple-600 to-pink-500',
      darkColor: 'from-purple-700 to-pink-600',
      icon: <Rocket className="w-8 h-8" />,
      features: ['24/7 Autonomous Operations', 'Intelligent Team Scaling', 'AI-Powered Customer Service', 'Predictive Analytics Engine'],
      automations: ['Multi-channel customer support', 'Lead qualification pipeline', 'Sales process automation', 'Performance optimization'],
      highlight: 'Enterprise Ready',
      stats: { uptime: '99.9%', scale: '10x capacity', response: '<1 min' },
      chartData: [
        { quarter: 'Q1', capacity: 100, cost: 100 },
        { quarter: 'Q2', capacity: 250, cost: 120 },
        { quarter: 'Q3', capacity: 500, cost: 140 },
        { quarter: 'Q4', capacity: 1000, cost: 160 }
      ],
      chartType: 'bar'
    },
    {
      id: 'custom-development',
      title: 'Custom Bot Development',
      link:"/solutions/custom-development",
      subtitle: 'Tailor-Made Solutions',
      description: 'Fully customized automation solutions built from the ground up to match your exact business requirements and integrate with any system.',
      price: 'Custom Quote',
      savings: 'Unlimited',
      roi: 'Variable',
      color: 'from-emerald-600 to-teal-500',
      darkColor: 'from-emerald-700 to-teal-600',
      icon: <Settings className="w-8 h-8" />,
      features: ['Bespoke Architecture Design', 'Agile Development Process', 'Full System Integration', 'Dedicated Support Team'],
      automations: ['Custom workflow engines', 'Legacy system integration', 'API development suite', 'Specialized process automation'],
      highlight: 'Fully Customizable',
      stats: { flexibility: '100%', integration: 'Any system', support: '24/7' },
      chartData: [
        { phase: 'Analysis', weeks: 2, progress: 100 },
        { phase: 'Design', weeks: 3, progress: 85 },
        { phase: 'Development', weeks: 8, progress: 60 },
        { phase: 'Testing', weeks: 2, progress: 30 },
        { phase: 'Deployment', weeks: 1, progress: 10 }
      ],
      chartType: 'line'
    }
  ];

  const stats: Stat[] = [
    { value: '500+', label: 'Businesses Automated', icon: <Globe className="w-6 h-6" />, trend: 23 },
    { value: '10,000+', label: 'Hours Saved Monthly', icon: <Clock className="w-6 h-6" />, trend: 45 },
    { value: '99.5%', label: 'Accuracy Rate', icon: <Award className="w-6 h-6" />, trend: 12 },
    { value: '$2M+', label: 'Cost Savings Generated', icon: <TrendingUp className="w-6 h-6" />, trend: 78 }
  ];

  const growthData = [
    { month: 'Jan', efficiency: 45, costs: 100, revenue: 120 },
    { month: 'Feb', efficiency: 52, costs: 95, revenue: 135 },
    { month: 'Mar', efficiency: 68, costs: 88, revenue: 158 },
    { month: 'Apr', efficiency: 75, costs: 82, revenue: 182 },
    { month: 'May', efficiency: 89, costs: 76, revenue: 215 },
    { month: 'Jun', efficiency: 95, costs: 72, revenue: 248 }
  ];

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];

  const renderChart = (solution: Solution) => {
    const commonProps = {
      width: '100%',
      height: 200,
      data: solution.chartData
    };

    switch (solution.chartType) {
      case 'area':
        return (
          <ResponsiveContainer {...commonProps}>
            <AreaChart data={solution.chartData}>
              <defs>
                <linearGradient id={`gradient-${solution.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <Area type="monotone" dataKey="automated" stroke="#3b82f6" fillOpacity={1} fill={`url(#gradient-${solution.id})`} strokeWidth={2} />
              <Area type="monotone" dataKey="hours" stroke="#e5e7eb" fill="#f1f5f9" strokeWidth={1} />
            </AreaChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer {...commonProps}>
            <RechartsPieChart>
              <Tooltip contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <RechartsPieChart data={solution.chartData} cx="50%" cy="50%" innerRadius={40} outerRadius={80}>
                {solution.chartData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                ))}
              </RechartsPieChart>
            </RechartsPieChart>
          </ResponsiveContainer>
        );
      
      case 'bar':
        return (
          <ResponsiveContainer {...commonProps}>
            <BarChart data={solution.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="quarter" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <Bar dataKey="capacity" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="cost" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
      default:
        return (
          <ResponsiveContainer {...commonProps}>
            <RechartsLineChart data={solution.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="phase" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="progress" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-3000"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-8 py-3 mb-8 shadow-lg backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-blue-600 mr-2 animate-pulse" />
              <span className="text-blue-800 font-semibold">AI-Powered Automation Solutions</span>
              <Badge className="ml-3 bg-green-500 text-white text-xs animate-pulse">Live</Badge>
            </div>
            
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Transform Your Business<br />
              <span className="text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">with Smart Automation</span>
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
              From eliminating repetitive tasks to scaling operations without hiring, our AI-powered automation solutions 
              are designed to unlock your business potential and accelerate exponential growth.
            </p>

            {/* Enhanced Stats with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 mb-3">{stat.label}</div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-600 font-semibold">+{stat.trend}%</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Growth Visualization */}
      <div className="relative max-w-7xl mx-auto px-4 mb-20">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2 mb-4">
              <Activity className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold">Real-Time Business Impact</span>
            </div>
            <CardTitle className="text-4xl font-bold text-gray-900">See Your Growth Trajectory</CardTitle>
            <CardDescription className="text-xl text-gray-600">Efficiency gains and cost reductions achieved by our clients</CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" fontSize={14} />
                  <YAxis stroke="#6b7280" fontSize={14} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                  <Area type="monotone" dataKey="efficiency" stroke="#10b981" fillOpacity={1} fill="url(#efficiencyGradient)" strokeWidth={3} />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#revenueGradient)" strokeWidth={3} />
                  <Line type="monotone" dataKey="costs" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-green-50 rounded-2xl">
                <div className="text-2xl font-bold text-green-600">+95%</div>
                <div className="text-sm text-green-700">Efficiency Increase</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-2xl">
                <div className="text-2xl font-bold text-blue-600">+248%</div>
                <div className="text-sm text-blue-700">Revenue Growth</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-2xl">
                <div className="text-2xl font-bold text-red-600">-28%</div>
                <div className="text-sm text-red-700">Cost Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Solutions Grid */}
      <div className="relative max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Choose Your Automation Journey</h2>
          <p className="text-2xl text-gray-600">Tailored solutions with real-time analytics and proven ROI</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className="group cursor-pointer transition-all duration-700 hover:shadow-3xl transform hover:-translate-y-4"
              onMouseEnter={() => setHoveredSolution(index)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <Card className="border-0 bg-white/95 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                <div className={`h-3 bg-gradient-to-r ${solution.color} transition-all duration-500 ${hoveredSolution === index ? 'h-4' : ''}`}></div>
                
                <CardHeader className="pb-6 flex-shrink-0">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-3xl flex items-center justify-center text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                      {solution.icon}
                    </div>
                    {solution.highlight && (
                      <Badge className={`bg-gradient-to-r ${solution.color} text-white border-0 shadow-lg animate-pulse`}>
                        {solution.highlight}
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-3">{solution.title}</CardTitle>
                  <div className="text-xl font-semibold text-blue-600 mb-4">{solution.subtitle}</div>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">{solution.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-8">
                  {/* Chart Visualization */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Performance Analytics
                    </h4>
                    {renderChart(solution)}
                  </div>

                  {/* Enhanced Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
                      <div className="text-xl font-bold text-gray-900">{solution.savings}</div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg">
                      <div className="text-xl font-bold text-gray-900">{solution.roi}</div>
                      <div className="text-xs text-gray-600">ROI Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg">
                      <div className="text-xl font-bold text-blue-600">{solution.price}</div>
                      <div className="text-xs text-gray-600">Starting Price</div>
                    </div>
                  </div>

                  {/* Enhanced Features List */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Display */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                    {Object.entries(solution.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-8 flex-shrink-0">
                  <Button onClick={()=>router.push(solution?.link)} className={`w-full cursor-pointer bg-gradient-to-r ${solution.color} hover:${solution.darkColor} text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all group-hover:scale-105 py-4 text-lg font-semibold`}>
                    Learn More & Get Quote
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsHomePage;