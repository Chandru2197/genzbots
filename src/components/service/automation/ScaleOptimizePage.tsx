import React, { useState } from 'react';
import { TrendingUp, CheckCircle, ArrowRight, Clock, BarChart3, MessageCircle, ArrowLeft, Star, Users, Zap, Calendar, Settings, Target, Phone, Lightbulb, Repeat, ChartColumnIncreasing, ChartBar, Cog } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/router';

const ScaleOptimizePage: React.FC = () => {
  const router = useRouter();
  const [selectedOpportunity, setSelectedOpportunity] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(null);

  const ongoingServices = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'New Automation Suggestions',
      description: 'Proactive identification of additional automation opportunities',
      color: 'from-yellow-500 to-orange-500',
      frequency: 'Monthly reviews',
      deliverables: ['Process analysis reports', 'ROI projections', 'Implementation roadmaps']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Quarterly Health Checks',
      description: 'Comprehensive system performance and optimization reviews',
      color: 'from-blue-500 to-cyan-500',
      frequency: 'Every 3 months',
      deliverables: ['Performance reports', 'Health assessments', 'Optimization recommendations']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Continuous improvements to existing automation systems',
      color: 'from-green-500 to-emerald-500',
      frequency: 'Ongoing monitoring',
      deliverables: ['Speed improvements', 'Efficiency gains', 'Cost reductions']
    },
    {
      icon: <ChartColumnIncreasing className="w-6 h-6" />,
      title: 'Time Savings Celebration',
      description: 'Track and celebrate your automation success milestones',
      color: 'from-purple-500 to-pink-500',
      frequency: 'Milestone-based',
      deliverables: ['Success metrics', 'ROI reports', 'Achievement recognition']
    }
  ];

  const automationOpportunities = [
    {
      category: 'Customer Service',
      currentState: 'Manual ticket routing and basic responses',
      opportunity: 'AI-powered chatbot with intelligent ticket classification',
      potentialSavings: '25 hours/week',
      roi: '300% in 6 months',
      complexity: 'Medium',
      implementation: '4-6 weeks',
      benefits: [
        '24/7 customer support availability',
        'Instant response to common queries',
        'Automatic ticket prioritization',
        'Sentiment analysis and escalation'
      ]
    },
    {
      category: 'Sales Process',
      currentState: 'Manual lead qualification and follow-up',
      opportunity: 'Automated lead scoring and nurturing workflows',
      potentialSavings: '20 hours/week',
      roi: '250% in 4 months',
      complexity: 'Low-Medium',
      implementation: '3-4 weeks',
      benefits: [
        'Automatic lead scoring',
        'Personalized email sequences',
        'CRM integration and updates',
        'Sales pipeline optimization'
      ]
    },
    {
      category: 'HR & Onboarding',
      currentState: 'Paper-based onboarding with manual tracking',
      opportunity: 'Digital onboarding with automated workflows',
      potentialSavings: '15 hours/week',
      roi: '200% in 5 months',
      complexity: 'Medium',
      implementation: '5-7 weeks',
      benefits: [
        'Digital document management',
        'Automated task assignments',
        'Progress tracking dashboards',
        'Compliance monitoring'
      ]
    },
    {
      category: 'Inventory Management',
      currentState: 'Manual stock checks and reorder processes',
      opportunity: 'Smart inventory automation with predictive ordering',
      potentialSavings: '18 hours/week',
      roi: '280% in 3 months',
      complexity: 'Medium-High',
      implementation: '6-8 weeks',
      benefits: [
        'Real-time inventory tracking',
        'Predictive reorder alerts',
        'Supplier integration',
        'Cost optimization analysis'
      ]
    }
  ];

  const optimizationAreas = [
    {
      area: 'Performance Enhancement',
      description: 'Improve speed and efficiency of existing automations',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      metrics: [
        { metric: 'Processing Speed', improvement: '+45%', timeframe: 'Last quarter' },
        { metric: 'Error Reduction', improvement: '-60%', timeframe: 'Last quarter' },
        { metric: 'Resource Usage', improvement: '-30%', timeframe: 'Last quarter' }
      ],
      recentUpdates: [
        'Database query optimization implemented',
        'Memory usage reduced by 25%',
        'Response time improved to <1.2s average'
      ]
    },
    {
      area: 'Scale Expansion',
      description: 'Extend automation to handle increased volume and complexity',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      metrics: [
        { metric: 'Volume Capacity', improvement: '+200%', timeframe: 'Last quarter' },
        { metric: 'Concurrent Users', improvement: '+150%', timeframe: 'Last quarter' },
        { metric: 'System Reliability', improvement: '+99.9%', timeframe: 'Current uptime' }
      ],
      recentUpdates: [
        'Load balancing infrastructure added',
        'Horizontal scaling capabilities enabled',
        'Failover systems implemented'
      ]
    },
    {
      area: 'Integration Expansion',
      description: 'Connect with additional systems and platforms',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      metrics: [
        { metric: 'Connected Systems', improvement: '+8 new', timeframe: 'Last quarter' },
        { metric: 'Data Sync Speed', improvement: '+80%', timeframe: 'Last quarter' },
        { metric: 'Integration Uptime', improvement: '99.95%', timeframe: 'Current average' }
      ],
      recentUpdates: [
        'Salesforce integration completed',
        'Slack workflow automation added',
        'API rate limiting optimized'
      ]
    }
  ];

  const quarterlyReviews = [
    {
      quarter: 'Q1 2024',
      focus: 'Foundation Optimization',
      status: 'Completed',
      achievements: [
        'Baseline performance metrics established',
        'Initial optimization opportunities identified',
        'First round of improvements implemented'
      ],
      metrics: {
        timeSaved: '15.2 hours/week',
        costReduction: '$18,500',
        efficiency: '+35%'
      }
    },
    {
      quarter: 'Q2 2024',
      focus: 'Scale & Performance',
      status: 'Completed',
      achievements: [
        'System capacity doubled',
        'Response times improved by 45%',
        'Two new automation workflows added'
      ],
      metrics: {
        timeSaved: '23.8 hours/week',
        costReduction: '$31,200',
        efficiency: '+58%'
      }
    },
    {
      quarter: 'Q3 2024',
      focus: 'Integration Expansion',
      status: 'In Progress',
      achievements: [
        'CRM integration completed',
        'Marketing automation connected',
        'Advanced reporting implemented'
      ],
      metrics: {
        timeSaved: '28.5 hours/week',
        costReduction: '$42,800',
        efficiency: '+72%'
      }
    },
    {
      quarter: 'Q4 2024',
      focus: 'AI Enhancement',
      status: 'Planned',
      achievements: [
        'Machine learning models integration',
        'Predictive analytics implementation',
        'Smart decision-making automation'
      ],
      metrics: {
        timeSaved: '35+ hours/week (projected)',
        costReduction: '$55,000+ (projected)',
        efficiency: '+90%+ (projected)'
      }
    }
  ];

  const successMetrics = [
    {
      metric: 'Total Time Saved',
      current: '156 hours/month',
      growth: '+280%',
      target: '200 hours/month',
      status: 'On Track'
    },
    {
      metric: 'Cost Reduction',
      current: '$42,800/quarter',
      growth: '+185%',
      target: '$50,000/quarter',
      status: 'Exceeding'
    },
    {
      metric: 'Process Efficiency',
      current: '72% improvement',
      growth: '+42%',
      target: '75% improvement',
      status: 'On Track'
    },
    {
      metric: 'System Reliability',
      current: '99.95% uptime',
      growth: '+0.15%',
      target: '99.9% uptime',
      status: 'Exceeding'
    }
  ];

  const handleBackToProcess = () => {
    router.push('/#automation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <Button
            variant="outline"
            className="p-1 text-white border-white bg-tansparent hover:text-emerald-600 hover:bg-white mb-6"
            onClick={handleBackToProcess}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Process
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mr-6 backdrop-blur-sm">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                    Scale & Optimize
                  </h1>
                  <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-emerald-100 border-white/30">
                    <Repeat className="w-4 h-4 mr-2" />
                    Ongoing optimization
                  </Badge>
                </div>
              </div>
              
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                We suggest new automations, provide quarterly health checks, and celebrate your time savings 
                while continuously optimizing your systems for maximum efficiency.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Growth Dashboard
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-emerald-600">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Suggest New Automation
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <ChartBar className="w-6 h-6 mr-2" />
                  Current Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: 'Time Saved This Month', value: '156 hrs', icon: <Clock className="w-5 h-5" /> },
                  { label: 'Cost Reduction', value: '$42.8K', icon: <TrendingUp className="w-5 h-5" /> },
                  { label: 'Active Automations', value: '12', icon: <Cog className="w-5 h-5" /> },
                  { label: 'Efficiency Gain', value: '+72%', icon: <Target className="w-5 h-5" /> }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
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
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Ongoing Services */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Ongoing Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Continuous support and optimization to maximize your automation investment and drive ongoing success.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {quarterlyReviews.map((review, index) => (
                  <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{review.quarter}</CardTitle>
                      <Badge 
                        variant={review.status === 'Completed' ? 'default' : review.status === 'In Progress' ? 'secondary' : 'outline'}
                        className={
                          review.status === 'Completed' ? 'bg-emerald-500' : 
                          review.status === 'In Progress' ? 'bg-blue-500' : 
                          'border-orange-500 text-orange-700'
                        }
                      >
                        {review.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg font-medium">{review.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <div className="space-y-2">
                          {review.achievements.map((achievement, aIndex) => (
                            <div key={aIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-emerald-50 rounded-lg">
                          <div className="text-lg font-bold text-emerald-600">{review.metrics.timeSaved}</div>
                          <div className="text-xs text-emerald-700">Time Saved</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{review.metrics.costReduction}</div>
                          <div className="text-xs text-blue-700">Cost Reduction</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-lg font-bold text-purple-600">{review.metrics.efficiency}</div>
                          <div className="text-xs text-purple-700">Efficiency</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                ))}
              </div>
              <Alert className="border-emerald-200 bg-emerald-50">
                <Calendar className="h-4 w-4" />
                <AlertDescription className="text-emerald-800">
                  <strong>Next Review:</strong> Q4 2024 health check scheduled for December 15th. 
                  We'll analyze your current performance and identify new optimization opportunities for the coming year.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">New Automation Opportunities</h2>
              <p className="text-xl text-gray-600">Potential areas for expanding your automation capabilities</p>
            </div>
            
            <div className="space-y-6">
              {automationOpportunities.map((opportunity, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedOpportunity === index ? 'ring-2 ring-emerald-500' : ''
                  }`}
                  onClick={() => setSelectedOpportunity(selectedOpportunity === index ? null : index)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{opportunity.category}</CardTitle>
                        <CardDescription className="mt-2">{opportunity.currentState}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{opportunity.complexity}</Badge>
                        <div className="text-2xl font-bold text-emerald-600">{opportunity.potentialSavings}</div>
                        <div className="text-sm text-gray-600">potential savings</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-gray-800 mb-3">Automation Opportunity:</h4>
                        <p className="text-gray-700 mb-4">{opportunity.opportunity}</p>
                        
                        {selectedOpportunity === index && (
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {opportunity.benefits.map((benefit, bIndex) => (
                                <div key={bIndex} className="flex items-center text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-gray-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="text-sm font-semibold text-green-800">ROI</div>
                          <div className="text-lg font-bold text-green-600">{opportunity.roi}</div>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm font-semibold text-blue-800">Timeline</div>
                          <div className="text-lg font-bold text-blue-600">{opportunity.implementation}</div>
                        </div>
                        {selectedOpportunity === index && (
                          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                            <Lightbulb className="w-4 h-4 mr-2" />
                            Request Analysis
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Optimization Areas</h2>
              <p className="text-xl text-gray-600">Continuous improvements to your existing automation systems</p>
            </div>
            
            <div className="space-y-8">
              {optimizationAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="text-center lg:text-left">
                        <div className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-3xl flex items-center justify-center text-white mx-auto lg:mx-0 mb-4`}>
                          {area.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{area.area}</h3>
                        <p className="text-gray-600 mb-6">{area.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Performance Metrics:</h4>
                        <div className="space-y-3">
                          {area.metrics.map((metric, mIndex) => (
                            <div key={mIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-gray-800 text-sm">{metric.metric}</div>
                                <div className="text-gray-600 text-xs">{metric.timeframe}</div>
                              </div>
                              <div className="text-lg font-bold text-emerald-600">{metric.improvement}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Recent Updates:</h4>
                        <div className="space-y-3">
                          {area.recentUpdates.map((update, uIndex) => (
                            <div key={uIndex} className="flex items-center p-3 bg-emerald-50 rounded-lg">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{update}</span>
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

          <TabsContent value="quarterly" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Quarterly Health Checks</h2>
              <p className="text-xl text-gray-600">Comprehensive reviews and performance tracking over time</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quarterlyReviews.map((review, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{review.quarter}</CardTitle>
                        <CardDescription className="mt-2">{review.focus}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={review.status === 'Completed' ? 'default' : review.status === 'In Progress' ? 'secondary' : 'outline'}
                          className={
                            review.status === 'Completed' ? 'bg-emerald-500' : 
                            review.status === 'In Progress' ? 'bg-blue-500' : 
                            'border-orange-500 text-orange-700'
                          }
                        >
                          {review.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <div className="space-y-2">
                          {review.achievements.map((achievement, aIndex) => (
                            <div key={aIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-emerald-50 rounded-lg">
                          <div className="text-lg font-bold text-emerald-600">{review.metrics.timeSaved}</div>
                          <div className="text-xs text-emerald-700">Time Saved</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-600">{review.metrics.costReduction}</div>
                          <div className="text-xs text-blue-700">Cost Reduction</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-lg font-bold text-purple-600">{review.metrics.efficiency}</div>
                          <div className="text-xs text-purple-700">Efficiency</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="border-emerald-200 bg-emerald-50">
              <Calendar className="h-4 w-4" />
              <AlertDescription className="text-emerald-800">
                <strong>Next Review:</strong> Q4 2024 health check scheduled for December 15th. 
                We'll analyze your current performance and identify new optimization opportunities for the coming year.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 mt-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Success?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Let's continue optimizing your automation systems and identify new opportunities for growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-xl">
              <BarChart3 className="w-5 h-5 mr-2" />
              Schedule Health Check
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-emerald-600">
              <Lightbulb className="w-5 h-5 mr-2" />
              Suggest New Automation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleOptimizePage;