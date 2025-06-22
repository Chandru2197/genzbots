import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Zap, Target, Calendar, CheckCircle, Play, Users, TrendingUp, BarChart3, Star, Phone, MessageCircle, Timer, Activity, DollarSign, Award, Shield, Bot, Sparkles, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadialBarChart, RadialBar, PieChart, Cell } from 'recharts';
import { useRouter } from 'next/router';

interface TimeData {
  task: string;
  beforeHours: number;
  afterHours: number;
  savings: number;
  color: string;
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  status: 'completed' | 'active' | 'upcoming';
}

interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar: string;
  timeSaved: string;
  costSaved: string;
  rating: number;
}

const TimeLiberationPackage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [animatedValue, setAnimatedValue] = useState<number>(0);
  const [expandedProcess, setExpandedProcess] = useState<number | null>(null);

  // Animate the time savings counter
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => prev < 15 ? prev + 0.5 : 15);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const timeData: TimeData[] = [
    { task: 'Invoice Processing', beforeHours: 8, afterHours: 0.5, savings: 7.5, color: '#3b82f6' },
    { task: 'Data Entry', beforeHours: 6, afterHours: 0.3, savings: 5.7, color: '#10b981' },
    { task: 'Report Generation', beforeHours: 4, afterHours: 0.2, savings: 3.8, color: '#f59e0b' },
    { task: 'Email Management', beforeHours: 3, afterHours: 0.5, savings: 2.5, color: '#ef4444' },
    { task: 'Document Processing', beforeHours: 5, afterHours: 0.4, savings: 4.6, color: '#8b5cf6' }
  ];

  const weeklyProgress = [
    { week: 'Week 1', automated: 20, manual: 80, efficiency: 25 },
    { week: 'Week 2', automated: 45, manual: 55, efficiency: 50 },
    { week: 'Week 3', automated: 70, manual: 30, efficiency: 75 },
    { week: 'Week 4', automated: 85, manual: 15, efficiency: 90 },
    { week: 'Week 5', automated: 95, manual: 5, efficiency: 98 }
  ];

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Process Discovery',
      description: 'Deep dive into your current workflows and identify automation opportunities',
      icon: <Target className="w-6 h-6" />,
      duration: '3-5 days',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Solution Design',
      description: 'Create custom automation blueprints tailored to your specific needs',
      icon: <Bot className="w-6 h-6" />,
      duration: '5-7 days',
      status: 'active'
    },
    {
      id: 3,
      title: 'Development & Testing',
      description: 'Build and rigorously test your automation solutions',
      icon: <Zap className="w-6 h-6" />,
      duration: '10-14 days',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Deployment & Training',
      description: 'Deploy solutions and train your team for seamless adoption',
      icon: <Users className="w-6 h-6" />,
      duration: '3-5 days',
      status: 'upcoming'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      company: 'TechFlow Solutions',
      role: 'Operations Manager',
      quote: 'The Time Liberation Package completely transformed our operations. We went from spending 20+ hours weekly on manual tasks to having everything automated. Our team can now focus on strategic initiatives.',
      avatar: 'SM',
      timeSaved: '18 hours/week',
      costSaved: '$3,200/month',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'DataStream Inc',
      role: 'CEO',
      quote: 'ROI was achieved in just 6 weeks. The automation solutions are incredibly intuitive and have scaled with our business growth seamlessly.',
      avatar: 'DC',
      timeSaved: '22 hours/week',
      costSaved: '$4,100/month',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'ServiceMax Pro',
      role: 'Process Manager',
      quote: 'What impressed me most was how quickly the team understood our complex workflows and delivered solutions that exceeded our expectations.',
      avatar: 'MR',
      timeSaved: '15 hours/week',
      costSaved: '$2,800/month',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Invoice Processing',
      description: 'Intelligent document processing that learns from your patterns',
      benefit: 'Reduces invoice processing time by 95%'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Smart Data Entry Automation',
      description: 'Seamless data synchronization across multiple platforms',
      benefit: 'Eliminates 99.8% of manual data entry errors'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Intelligent Report Generation',
      description: 'Automated report creation and distribution',
      benefit: 'Generates reports 10x faster than manual methods'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '24/7 Proactive Support',
      description: 'Round-the-clock monitoring and instant issue resolution',
      benefit: 'Maintains 99.9% automation uptime'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,997',
      description: 'Perfect for small teams getting started',
      features: ['Up to 3 automated processes', 'Basic analytics dashboard', '30 days support', 'Email integration'],
      popular: false,
      timeSaved: '8-12 hours/week'
    },
    {
      name: 'Professional',
      price: '$7,997',
      description: 'Comprehensive solution for growing businesses',
      features: ['Unlimited automated processes', 'Advanced analytics & reporting', '90 days priority support', 'Multi-platform integration', 'Custom workflows', 'Team training'],
      popular: true,
      timeSaved: '15-20 hours/week'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full-scale automation for large organizations',
      features: ['Enterprise-wide automation', 'Dedicated account manager', '6 months support', 'Custom integrations', 'Advanced security', 'White-label options'],
      popular: false,
      timeSaved: '25+ hours/week'
    }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <Button variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer" onClick={()=>router.push('/solutions')}> 
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Time Liberation Package
              </Badge>
              
              <h1 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  Get Back
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {animatedValue.toFixed(1)}+ Hours
                </span>
                <br />
                <span className="text-gray-700">Every Week</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business operations with intelligent automation that eliminates repetitive tasks, 
                reduces errors, and frees your team to focus on high-value strategic work.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl">
                <Calendar className="w-5 h-5 mr-2" />
                Start Free Analysis
              </Button>
              <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl font-bold text-blue-600">99.5%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl font-bold text-green-600">2-3</div>
                <div className="text-sm text-gray-600">Months ROI</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Time Savings Visualization */}
          <div className="relative">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Weekly Time Savings Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{item.task}</span>
                        <span className="text-sm font-bold text-green-600">-{item.savings}h</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${(item.savings / item.beforeHours) * 100}%`,
                              backgroundColor: item.color 
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-16 text-right">
                          {item.beforeHours}h → {item.afterHours}h
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">24.1 Hours</div>
                    <div className="text-sm text-green-700">Total Weekly Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-lg py-3">Overview</TabsTrigger>
            <TabsTrigger value="process" className="text-lg py-3">Process</TabsTrigger>
            <TabsTrigger value="pricing" className="text-lg py-3">Pricing</TabsTrigger>
            <TabsTrigger value="results" className="text-lg py-3">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Features Grid */}
            <div>
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 mb-3">{feature.description}</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {feature.benefit}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Weekly Progress Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Your Automation Journey</CardTitle>
                <CardDescription className="text-center text-lg">See how automation adoption progresses over 5 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyProgress}>
                      <defs>
                        <linearGradient id="automatedGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="week" stroke="#6b7280" />
                      <YAxis stroke="#6b7280" />
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
                        dataKey="automated" 
                        stroke="#3b82f6" 
                        fillOpacity={1} 
                        fill="url(#automatedGradient)" 
                        strokeWidth={3}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="efficiency" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Implementation Process
            </h2>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <Card 
                  key={step.id}
                  className={`cursor-pointer transition-all duration-300 border-0 ${
                    step.status === 'active' ? 'bg-blue-50 ring-2 ring-blue-500' :
                    step.status === 'completed' ? 'bg-green-50' : 'bg-white/70'
                  } backdrop-blur-sm hover:shadow-xl`}
                  onClick={() => setExpandedProcess(expandedProcess === index ? null : index)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                        step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'active' ? 'bg-blue-500' : 'bg-gray-400'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle className="w-8 h-8" /> : step.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 text-lg">{step.description}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {step.duration}
                            </Badge>
                            <div className={`text-sm font-medium ${
                              step.status === 'completed' ? 'text-green-600' :
                              step.status === 'active' ? 'text-blue-600' : 'text-gray-500'
                            }`}>
                              {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
                            </div>
                          </div>
                        </div>
                        
                        {expandedProcess === index && (
                          <div className="mt-6 p-4 bg-white/50 rounded-xl">
                            <h4 className="font-semibold mb-2">What happens in this phase:</h4>
                            <ul className="space-y-2 text-gray-600">
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                Detailed analysis and requirements gathering
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                Stakeholder interviews and process mapping
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                Technical feasibility assessment
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${
                        expandedProcess === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Choose Your Package
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={index}
                  className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 ${
                    tier.popular ? 'bg-gradient-to-br from-blue-50 to-purple-50 ring-2 ring-blue-500' : 'bg-white/80'
                  } backdrop-blur-sm`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                    <div className="text-4xl font-bold text-blue-600 my-4">{tier.price}</div>
                    <CardDescription className="text-lg">{tier.description}</CardDescription>
                    
                    <div className="mt-4 p-3 bg-green-50 rounded-xl">
                      <div className="text-lg font-bold text-green-600">{tier.timeSaved}</div>
                      <div className="text-sm text-green-700">Expected Time Savings</div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      } text-white shadow-lg`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                        <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                        <p className="text-sm text-gray-500">{testimonials[currentTestimonial].company}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all ${
                            currentTestimonial === index ? 'bg-blue-500 w-8' : 'bg-gray-300'
                          }`}
                          onClick={() => setCurrentTestimonial(index)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Results Achieved</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-xl text-center">
                        <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-green-600">{testimonials[currentTestimonial].costSaved}</div>
                        <div className="text-sm text-green-700">Monthly Savings</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl text-center">
                        <Timer className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">{testimonials[currentTestimonial].timeSaved}</div>
                        <div className="text-sm text-blue-700">Time Liberated</div>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <h5 className="font-bold text-gray-900 mb-4">Automated Processes:</h5>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">Invoice Processing & Approval</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">Customer Data Management</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">Weekly Report Generation</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">Email Campaign Management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* ROI Calculator */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900">Calculate Your ROI</CardTitle>
                <CardDescription className="text-lg">See how much you could save with automation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Timer className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Time Investment</h4>
                    <div className="text-3xl font-bold text-blue-600">3-4 weeks</div>
                    <p className="text-gray-600 mt-2">Implementation period</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Monthly Savings</h4>
                    <div className="text-3xl font-bold text-green-600">$3,200+</div>
                    <p className="text-gray-600 mt-2">Average client savings</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                    <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">ROI Timeline</h4>
                    <div className="text-3xl font-bold text-purple-600">6-8 weeks</div>
                    <p className="text-gray-600 mt-2">Payback period</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                  <h4 className="text-xl font-bold text-center text-gray-900 mb-6">5-Year Impact Projection</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[
                        { year: 'Year 1', savings: 38400, investment: 7997 },
                        { year: 'Year 2', savings: 76800, investment: 7997 },
                        { year: 'Year 3', savings: 115200, investment: 7997 },
                        { year: 'Year 4', savings: 153600, investment: 7997 },
                        { year: 'Year 5', savings: 192000, investment: 7997 }
                      ]}>
                        <defs>
                          <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="year" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e5e7eb', 
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                          }} 
                          formatter={(value: number) => [`${value.toLocaleString()}`, 'Cumulative Savings']}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="savings" 
                          stroke="#10b981" 
                          fillOpacity={1} 
                          fill="url(#savingsGradient)" 
                          strokeWidth={3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to Liberate Your Time?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join hundreds of businesses that have automated their processes and reclaimed 15+ hours per week. 
              Start your transformation today with a comprehensive analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all px-8 py-4 text-lg font-semibold">
                <Calendar className="w-6 h-6 mr-3" />
                Start Free Analysis
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 shadow-xl px-8 py-4 text-lg font-semibold">
                <Phone className="w-6 h-6 mr-3" />
                Book Discovery Call
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-blue-200 mt-12">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Free process analysis</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">No long-term commitments</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Results guaranteed</span>
              </div>
            </div>
            
            <div className="mt-8 text-blue-200">
              <p className="text-sm">
                ⚡ Get started in 24 hours • 🛡️ Risk-free trial • 🏆 98% client satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLiberationPackage;