import React, { useState } from 'react';
import { Clock, CheckCircle, ArrowRight, TrendingUp, Zap, Target, BarChart3, Phone, MessageCircle, ArrowLeft, Star, Users, DollarSign, Play, Calculator, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Progress } from '../../ui/progress';
import { Alert, AlertDescription } from '../../ui/alert';
import DotPatternCircle from '../../ui/DotPatternCircle';

export default function TimeLiberation() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '15+ Hours Saved Weekly',
      description: 'Guaranteed time savings through intelligent automation of repetitive tasks',
      value: '15+ hours',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      progress: 85
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'ROI Within 30 Days',
      description: 'See immediate returns on your automation investment',
      value: '30 days',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      progress: 95
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '99.9% Accuracy Rate',
      description: 'Eliminate human errors in data processing and workflows',
      value: '99.9%',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      progress: 99
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Satisfaction',
      description: 'Free your team from mundane tasks to focus on strategic work',
      value: '98% satisfaction',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      progress: 98
    }
  ];

  const automatedProcesses = [
    {
      category: 'Invoice Processing',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      tasks: [
        'Automatic invoice data extraction',
        'Vendor verification and matching',
        'Approval workflow routing',
        'Payment processing automation',
        'Exception handling and alerts'
      ],
      timeSaved: '8 hours/week',
      accuracy: '99.5%',
      complexity: 'Medium',
      roi: '$2,400/month'
    },
    {
      category: 'Data Entry',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      tasks: [
        'CRM data synchronization',
        'Lead information processing',
        'Customer record updates',
        'Database maintenance',
        'Data quality validation'
      ],
      timeSaved: '12 hours/week',
      accuracy: '99.8%',
      complexity: 'Low',
      roi: '$3,600/month'
    },
    {
      category: 'Report Generation',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      tasks: [
        'Automated dashboard updates',
        'Weekly performance reports',
        'Monthly analytics compilation',
        'KPI tracking and alerts',
        'Executive summary creation'
      ],
      timeSaved: '6 hours/week',
      accuracy: '100%',
      complexity: 'High',
      roi: '$1,800/month'
    }
  ];

  const implementation = [
    {
      phase: 'Week 1',
      title: 'Process Analysis',
      description: 'Deep dive into current workflows and identify automation opportunities',
      icon: <Target className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      progress: 100,
      activities: [
        'Workflow mapping session',
        'Time tracking analysis',
        'Pain point identification',
        'ROI calculation'
      ],
      deliverables: [
        'Process analysis report',
        'Automation roadmap',
        'Time savings projection'
      ]
    },
    {
      phase: 'Week 2-3',
      title: 'Bot Development',
      description: 'Custom automation bot creation and testing',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      progress: 75,
      activities: [
        'Bot design and architecture',
        'Development and coding',
        'Initial testing phase',
        'Performance optimization'
      ],
      deliverables: [
        'Working automation bot',
        'Testing documentation',
        'Performance benchmarks'
      ]
    },
    {
      phase: 'Week 4',
      title: 'Deployment & Training',
      description: 'Go-live with comprehensive team training',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      progress: 25,
      activities: [
        'Production deployment',
        'Team training sessions',
        'Documentation delivery',
        'Support setup'
      ],
      deliverables: [
        'Live automation system',
        'Training materials',
        'Support documentation'
      ]
    }
  ];

  const pricing = {
    starter: {
      name: 'Starter Package',
      price: '$2,999',
      duration: 'one-time',
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
      features: [
        'Up to 3 automated processes',
        '2 weeks implementation',
        '30 days support',
        'Basic reporting dashboard',
        'Email support'
      ],
      savings: '5-10 hours/week',
      roi: '2-3 months'
    },
    professional: {
      name: 'Professional Package',
      price: '$4,999',
      duration: 'one-time',
      popular: true,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Up to 6 automated processes',
        '3 weeks implementation',
        '60 days premium support',
        'Advanced analytics dashboard',
        'Priority phone & email support',
        '3 free optimization tweaks'
      ],
      savings: '15-20 hours/week',
      roi: '1-2 months'
    },
    enterprise: {
      name: 'Enterprise Package',
      price: '$9,999',
      duration: 'one-time',
      popular: false,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Unlimited automated processes',
        '4-6 weeks implementation',
        '90 days premium support',
        'Custom reporting & analytics',
        'Dedicated account manager',
        'Unlimited optimization tweaks',
        'Integration with existing systems'
      ],
      savings: '25+ hours/week',
      roi: '< 1 month'
    }
  };

  const successStories = [
    {
      company: 'TechStart Inc.',
      industry: 'Technology',
      author: 'Sarah Johnson',
      role: 'CFO',
      avatar: 'SJ',
      timeSaved: '20 hours/week',
      cost: 'Saved $45K annually',
      quote: "GenZBots transformed our invoice processing completely. What used to take our team 20 hours per week now runs automatically. The ROI was immediate.",
      rating: 5,
      processes: ['Invoice Processing', 'Data Entry', 'Reporting']
    },
    {
      company: 'GrowthCorp',
      industry: 'Consulting',
      author: 'Michael Chen',
      role: 'Operations Manager',
      avatar: 'MC',
      timeSaved: '18 hours/week',
      cost: 'ROI in 3 weeks',
      quote: "The automation reduced our reporting time from 2 days to 2 hours. Our team can now focus on strategic initiatives instead of manual tasks.",
      rating: 5,
      processes: ['Report Generation', 'CRM Updates']
    },
    {
      company: 'ServicePro',
      industry: 'Professional Services',
      author: 'Lisa Rodriguez',
      role: 'Director',
      avatar: 'LR',
      timeSaved: '15 hours/week',
      cost: '95% error reduction',
      quote: "We eliminated almost all data entry errors and freed up our team to focus on customer relationships. The investment paid for itself in the first month.",
      rating: 5,
      processes: ['Data Entry', 'Customer Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 opacity-90"></div>
        <DotPatternCircle className="opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <Button variant="ghost" className="text-blue-200 hover:text-white mb-6 p-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mr-6 backdrop-blur-sm">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    Time Liberation Package
                  </h1>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-cyan-100 border-white/30">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Back 15 Hours/Week
                    </Badge>
                    <Badge variant="outline" className="bg-green-500/20 text-green-100 border-green-300/30">
                      Guaranteed
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform your business operations with intelligent automation that eliminates repetitive tasks, 
                reduces errors, and frees your team to focus on strategic growth initiatives.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl">
                  <Calculator className="w-5 h-5 mr-2" />
                  Free Time Calculator
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Guaranteed Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { label: 'Time Saved Weekly', value: '15+ Hours', icon: <Clock className="w-5 h-5" /> },
                  { label: 'ROI Timeline', value: '30 Days', icon: <DollarSign className="w-5 h-5" /> },
                  { label: 'Accuracy Rate', value: '99.9%', icon: <Target className="w-5 h-5" /> },
                  { label: 'Success Rate', value: '100%', icon: <CheckCircle className="w-5 h-5" /> }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </div>
                    <span className="text-2xl font-bold">{item.value}</span>
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
            <TabsTrigger value="processes">Processes</TabsTrigger>
            <TabsTrigger value="implementation">Timeline</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Benefits Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Time Liberation?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Proven automation solutions that deliver measurable results for your business operations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                          {benefit.value}
                        </div>
                      </div>
                      <Progress value={benefit.progress} className="h-2" />
                      <div className="text-xs text-gray-500 mt-2 text-center">{benefit.progress}% achievement rate</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-100 border-0 overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800">Success Stories</CardTitle>
                <CardDescription className="text-lg">Real results from real businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-6">
                  {successStories.map((story, index) => (
                    <Card key={index} className="border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                              {story.avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">{story.author}</div>
                              <div className="text-sm text-gray-600">{story.role}</div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(story.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <Badge variant="secondary" className="w-fit">{story.company} - {story.industry}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{story.timeSaved}</div>
                            <div className="text-xs text-green-700">Time Saved</div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-sm font-bold text-blue-600">{story.cost}</div>
                            <div className="text-xs text-blue-700">Value</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {story.processes.map((process, pIndex) => (
                            <Badge key={pIndex} variant="outline" className="text-xs">
                              {process}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ROI Calculator */}
            <Alert className="border-blue-200 bg-blue-50">
              <Calculator className="h-4 w-4" />
              <AlertDescription className="text-blue-800">
                <strong>Quick ROI Calculation:</strong> If you're spending 15 hours/week on manual tasks at $50/hour, 
                that's $39,000 annually. Our solution typically pays for itself within the first month.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="processes" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Automate</h2>
              <p className="text-xl text-gray-600">Comprehensive automation across your key business processes</p>
            </div>
            
            <div className="space-y-6">
              {automatedProcesses.map((process, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    activeProcess === index ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setActiveProcess(activeProcess === index ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${process.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                          {process.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{process.category}</CardTitle>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              <Clock className="w-3 h-3 mr-1" />
                              {process.timeSaved}
                            </Badge>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              <Target className="w-3 h-3 mr-1" />
                              {process.accuracy}
                            </Badge>
                            <Badge variant="outline">
                              {process.complexity} complexity
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{process.roi}</div>
                        <div className="text-sm text-gray-600">Monthly savings</div>
                      </div>
                    </div>
                  </CardHeader>
                  {activeProcess === index && (
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Automated Tasks:</h4>
                          <div className="space-y-2">
                            {process.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                            <h5 className="font-semibold text-green-800 mb-2">Time Impact</h5>
                            <p className="text-green-700 text-sm">Saves {process.timeSaved} of manual work</p>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                            <h5 className="font-semibold text-blue-800 mb-2">Quality Impact</h5>
                            <p className="text-blue-700 text-sm">Achieves {process.accuracy} accuracy rate</p>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                            <h5 className="font-semibold text-purple-800 mb-2">Financial Impact</h5>
                            <p className="text-purple-700 text-sm">Generates {process.roi} in savings</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Implementation Timeline</h2>
              <p className="text-xl text-gray-600">From analysis to automation in just 4 weeks</p>
            </div>
            
            <div className="space-y-8">
              {implementation.map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${phase.color}`}></div>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-4 gap-8 items-center">
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
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <Progress value={phase.progress} className="h-2" />
                        <div className="text-xs text-gray-500 mt-1">{phase.progress}% Complete</div>
                      </div>
                      
                      <div className="lg:col-span-1">
                        <h4 className="font-semibold text-gray-800 mb-3">Activities:</h4>
                        <div className="space-y-2">
                          {phase.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-800 mb-3">Deliverables:</h4>
                        <div className="grid gap-3">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Package</h2>
              <p className="text-xl text-gray-600">Flexible pricing options to fit your business needs</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([key, plan]) => (
                <Card 
                  key={key}
                  className={`border-0 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer ${
                    plan.popular ? 'ring-2 ring-blue-500' : ''
                  } ${selectedPlan === key ? 'ring-2 ring-blue-400' : ''}`}
                  onClick={() => setSelectedPlan(key)}
                >
                  <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2">
                      <Badge variant="secondary" className="bg-white text-blue-600">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="my-4">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.duration}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <div className="font-semibold text-green-800">Time Saved</div>
                        <div className="text-green-600">{plan.savings}</div>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <div className="font-semibold text-blue-800">ROI</div>
                        <div className="text-blue-600">{plan.roi}</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        plan.popular || selectedPlan === key
                          ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl`
                          : 'variant-outline'
                      }`}
                      size="lg"
                    >
                      {selectedPlan === key ? 'Selected' : 'Get Started'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 mt-20">
        <DotPatternCircle className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Reclaim Your Time?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who have already transformed their operations with our Time Liberation Package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl">
              <Calculator className="w-5 h-5 mr-2" />
              Free Time Calculator
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

