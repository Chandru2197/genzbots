import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, FileText, CheckCircle, Clock, AlertCircle, Zap, Search, Filter, Download, Upload, MessageSquare, Calendar, User, DollarSign, MapPin, Phone } from 'lucide-react';
import ReadyToTransform from '@/components/ReadyToTransform';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigation } from '@/utils/navigation';

const CardDisputeScreen = () => {
  const [activeDisputes, setActiveDisputes] = useState(89);
  const [processingTime, setProcessingTime] = useState(95);
  const [autoResolved, setAutoResolved] = useState(156);
  const [formProgress, setFormProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDisputes(prev => prev + Math.floor(Math.random() * 3) - 1);
      setProcessingTime(prev => Math.max(60, Math.min(120, prev + (Math.random() - 0.5) * 5)));
      setAutoResolved(prev => Math.random() > 0.98 ? prev + 1 : prev);
      setFormProgress(prev => prev >= 100 ? 0 : prev + 3);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const disputeCategories = [
    { category: 'Unauthorized Transaction', count: 34, percentage: 38, color: 'from-red-500 to-red-600', trend: '+5%' },
    { category: 'Merchant Error', count: 28, percentage: 31, color: 'from-orange-500 to-orange-600', trend: '-2%' },
    { category: 'Service Not Received', count: 18, percentage: 20, color: 'from-yellow-500 to-yellow-600', trend: '+8%' },
    { category: 'Duplicate Charge', count: 9, percentage: 11, color: 'from-blue-500 to-blue-600', trend: '-12%' }
  ];

  const recentDisputes = [
    {
      id: 'CD-2024-1234',
      customer: 'Sarah Johnson',
      cardLast4: '8721',
      amount: '$245.67',
      merchant: 'Online Store XYZ',
      category: 'Unauthorized',
      status: 'auto-resolved',
      submittedAt: '2 hours ago',
      resolvedAt: '45 minutes ago',
      priority: 'high'
    },
    {
      id: 'CD-2024-1235',
      customer: 'Michael Chen',
      cardLast4: '3492',
      amount: '$89.99',
      merchant: 'Tech Solutions Inc',
      category: 'Service Not Received',
      status: 'processing',
      submittedAt: '4 hours ago',
      resolvedAt: null,
      priority: 'medium'
    },
    {
      id: 'CD-2024-1236',
      customer: 'Emma Davis',
      cardLast4: '7856',
      amount: '$156.40',
      merchant: 'Restaurant ABC',
      category: 'Duplicate Charge',
      status: 'investigation',
      submittedAt: '1 day ago',
      resolvedAt: null,
      priority: 'low'
    },
    {
      id: 'CD-2024-1237',
      customer: 'James Wilson',
      cardLast4: '9123',
      amount: '$67.25',
      merchant: 'Gas Station 24/7',
      category: 'Merchant Error',
      status: 'auto-resolved',
      submittedAt: '6 hours ago',
      resolvedAt: '2 hours ago',
      priority: 'medium'
    }
  ];

  const formSteps = [
    { step: 'Transaction Analysis', icon: Search, status: 'completed', time: '15s' },
    { step: 'Log Retrieval', icon: Download, status: 'completed', time: '8s' },
    { step: 'Form Generation', icon: FileText, status: 'active', time: '12s' },
    { step: 'Evidence Compilation', icon: Upload, status: 'pending', time: '18s' },
    { step: 'Submission', icon: CheckCircle, status: 'pending', time: '5s' }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden px-4 py-10">
      {/* Modern Financial Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        
        {/* Flowing Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <path
              d="M 0,300 Q 250,100 500,300 T 1000,300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M 0,600 Q 250,400 500,600 T 1000,600"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Credit Card Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <CreditCard className="w-10 h-10 text-emerald-400" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <Button 
              onClick={() => navigateTo('/product')}
              variant="outline" 
              className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to BFSI
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Card Dispute Resolution
              </h1>
              <p className="text-emerald-200 text-lg">Auto-fill dispute forms from transaction logs</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-2">
              <Zap className="w-4 h-4 mr-1" />
              Auto-Processing
            </Badge>
            <div className="text-3xl font-bold text-white">{activeDisputes}</div>
            <div className="text-emerald-200">Active Disputes</div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-white/10 backdrop-blur-md">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-white/20">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="processing" className="text-white data-[state=active]:bg-white/20">
              Live Processing
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-white/20">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">{autoResolved}</div>
                  <div className="text-emerald-200 text-sm">Auto-Resolved Today</div>
                  <div className="text-green-400 text-xs mt-1">+12% from yesterday</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-400">{processingTime.toFixed(0)}s</div>
                  <div className="text-blue-200 text-sm">Avg Processing Time</div>
                  <div className="text-green-400 text-xs mt-1">-25% improvement</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-400">23</div>
                  <div className="text-yellow-200 text-sm">Manual Review</div>
                  <div className="text-yellow-400 text-xs mt-1">Complex cases</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400">$45K</div>
                  <div className="text-purple-200 text-sm">Disputed Amount</div>
                  <div className="text-purple-400 text-xs mt-1">This week</div>
                </CardContent>
              </Card>
            </div>

            {/* Dispute Categories & Recent Cases */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Dispute Categories */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Dispute Categories</CardTitle>
                  <CardDescription className="text-emerald-200">Distribution of dispute types</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {disputeCategories.map((category, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{category.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-bold">{category.count}</span>
                          <Badge className={`text-xs ${
                            category.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}>
                            {category.trend}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-emerald-200 text-sm">{category.percentage}% of total disputes</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Disputes */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Recent Disputes</CardTitle>
                    <CardDescription className="text-emerald-200">Latest case submissions</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentDisputes.slice(0, 4).map((dispute) => (
                      <div key={dispute.id} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {dispute.customer.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-white font-medium">{dispute.customer}</div>
                              <div className="text-emerald-200 text-sm">****{dispute.cardLast4}</div>
                            </div>
                          </div>
                          <Badge className={`${
                            dispute.status === 'auto-resolved' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                            dispute.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          }`}>
                            {dispute.status === 'auto-resolved' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {dispute.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                            {dispute.status === 'investigation' && <AlertCircle className="w-3 h-3 mr-1" />}
                            {dispute.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-emerald-200">Amount</div>
                            <div className="text-white font-bold">{dispute.amount}</div>
                          </div>
                          <div>
                            <div className="text-emerald-200">Category</div>
                            <div className="text-white">{dispute.category}</div>
                          </div>
                          <div>
                            <div className="text-emerald-200">Submitted</div>
                            <div className="text-white">{dispute.submittedAt}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="processing" className="space-y-8">
            {/* Live Processing Flow */}
            <Card className="bg-black/40 backdrop-blur-md border-emerald-500/30">
              <CardHeader className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30">
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-emerald-400" />
                  Live Form Generation Process
                </CardTitle>
                <CardDescription className="text-emerald-200">
                  Blue Prism + SQL automation in action
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Process Steps */}
                  <div className="space-y-6">
                    {formSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-emerald-500/20 border-2 border-emerald-500' :
                            isActive ? 'bg-blue-500/20 border-2 border-blue-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-emerald-400' :
                              isActive ? 'text-blue-400' :
                              'text-gray-400'
                            }`} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-2xl bg-blue-500/30 animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-emerald-400' :
                                isActive ? 'text-blue-400' :
                                'text-gray-400'
                              }`}>
                                {step.step}
                              </h3>
                              <Badge variant="outline" className={`${
                                isCompleted ? 'border-emerald-500/50 text-emerald-400' :
                                isActive ? 'border-blue-500/50 text-blue-400' :
                                'border-gray-500/50 text-gray-400'
                              }`}>
                                {step.time}
                              </Badge>
                            </div>
                            {isActive && (
                              <Progress value={formProgress} className="h-2" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Live Form Preview */}
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h3 className="text-white font-semibold mb-4">Generated Dispute Form</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-3 rounded-lg">
                          <div className="text-emerald-200 text-sm">Case ID</div>
                          <div className="text-white font-mono">CD-2024-{Math.floor(Math.random() * 9999)}</div>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg">
                          <div className="text-emerald-200 text-sm">Card Number</div>
                          <div className="text-white font-mono">****-****-****-8721</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-emerald-200 text-sm">Transaction Details</div>
                        <div className="text-white">$245.67 - Online Store XYZ</div>
                        <div className="text-emerald-200 text-xs">2024-01-15 14:32:18 UTC</div>
                      </div>
                      
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-emerald-200 text-sm">Dispute Reason</div>
                        <div className="text-white">Unauthorized transaction - Card not present</div>
                      </div>
                      
                      <div className="bg-emerald-500/20 p-3 rounded-lg border border-emerald-500/30">
                        <div className="text-emerald-200 text-sm">Evidence Compiled</div>
                        <div className="text-emerald-400">✓ Transaction logs retrieved</div>
                        <div className="text-emerald-400">✓ Customer verification complete</div>
                        <div className="text-emerald-400">✓ Merchant notification sent</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Integration */}
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Blue Prism RPA</CardTitle>
                  <CardDescription className="text-blue-200">Process automation engine</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white">Bot Status</span>
                    <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Forms Processed</span>
                    <span className="text-blue-400 font-bold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Success Rate</span>
                    <span className="text-green-400 font-bold">96.8%</span>
                  </div>
                  <Progress value={96.8} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-white">SQL Database</CardTitle>
                  <CardDescription className="text-purple-200">Transaction log access</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white">Connection</span>
                    <Badge className="bg-green-500/20 text-green-400">Connected</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Queries/min</span>
                    <span className="text-purple-400 font-bold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Response Time</span>
                    <span className="text-green-400 font-bold">0.3s</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-white">Smart Forms</CardTitle>
                  <CardDescription className="text-green-200">AI-powered form filling</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white">Accuracy</span>
                    <span className="text-green-400 font-bold">98.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Avg Fill Time</span>
                    <span className="text-green-400 font-bold">2 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Auto-Submit</span>
                    <span className="text-green-400 font-bold">85%</span>
                  </div>
                  <Progress value={98.5} className="h-2" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-8">
            {/* Analytics Dashboard */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Metrics */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Performance Analytics</CardTitle>
                  <CardDescription className="text-emerald-200">System efficiency metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-emerald-500/20 rounded-xl">
                      <div className="text-3xl font-bold text-emerald-400">85%</div>
                      <div className="text-emerald-200 text-sm">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/20 rounded-xl">
                      <div className="text-3xl font-bold text-blue-400">2 min</div>
                      <div className="text-blue-200 text-sm">Avg Process Time</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white">Resolution Rate</span>
                      <span className="text-emerald-400">96.8%</span>
                    </div>
                    <Progress value={96.8} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white">Customer Satisfaction</span>
                      <span className="text-blue-400">94.2%</span>
                    </div>
                    <Progress value={94.2} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white">Automation Rate</span>
                      <span className="text-green-400">78.5%</span>
                    </div>
                    <Progress value={78.5} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Trend Analysis */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Trend Analysis</CardTitle>
                  <CardDescription className="text-emerald-200">Weekly performance trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-400 mb-2">+23%</div>
                      <div className="text-emerald-200">Processing Speed Improvement</div>
                      <div className="text-emerald-300 text-sm">vs last month</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-xl font-bold text-green-400">↗ 15%</div>
                        <div className="text-green-200 text-sm">Auto-Resolutions</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-xl font-bold text-red-400">↘ 8%</div>
                        <div className="text-red-200 text-sm">Manual Reviews</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg">
                        <div className="text-xl font-bold text-blue-400">↗ 12%</div>
                        <div className="text-blue-200 text-sm">Customer Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Dispute History */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Complete Dispute History</CardTitle>
                  <CardDescription className="text-emerald-200">All processed disputes with outcomes</CardDescription>
                </div>
                <Button variant="outline" className="bg-white/10 text-white border-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDisputes.map((dispute) => (
                    <div key={dispute.id} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                      <div className="grid grid-cols-6 gap-4 items-center">
                        <div>
                          <div className="text-white font-medium">{dispute.id}</div>
                          <div className="text-emerald-200 text-sm">{dispute.customer}</div>
                        </div>
                        <div>
                          <div className="text-white">{dispute.amount}</div>
                          <div className="text-emerald-200 text-sm">****{dispute.cardLast4}</div>
                        </div>
                        <div>
                          <div className="text-white">{dispute.merchant}</div>
                          <div className="text-emerald-200 text-sm">{dispute.category}</div>
                        </div>
                        <div>
                          <Badge className={`${
                            dispute.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            dispute.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {dispute.priority} priority
                          </Badge>
                        </div>
                        <div>
                          <div className="text-white">{dispute.submittedAt}</div>
                          {dispute.resolvedAt && (
                            <div className="text-emerald-400 text-sm">Resolved: {dispute.resolvedAt}</div>
                          )}
                        </div>
                        <div>
                          <Badge className={`${
                            dispute.status === 'auto-resolved' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                            dispute.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          }`}>
                            {dispute.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Ready to Transform Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ReadyToTransform 
                  />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-50px) rotate(180deg); opacity: 0.3; }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CardDisputeScreen;