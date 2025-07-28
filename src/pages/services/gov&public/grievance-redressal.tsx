import React, { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, Send, Users, MapPin, Clock, CheckCircle, AlertTriangle, Building, Flag, BookOpen, Zap, TrendingUp, Star, BarChart3, Shield } from 'lucide-react';
import { BackToParent } from '@/components/ui/BackToParent';
import { useNavigation } from '@/utils/navigation';
import { ROUTES } from '@/utils/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ReadyToTransform from '@/components/ReadyToTransform';

const GrievanceRedressalScreen = () => {
  const { navigateTo } = useNavigation();
  const [totalGrievances, setTotalGrievances] = useState(8947);
  const [todayReceived, setTodayReceived] = useState(142);
  const [resolved, setResolved] = useState(7823);
  const [pending, setPending] = useState(1124);
  const [classificationProgress, setClassificationProgress] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalGrievances(prev => prev + (Math.random() > 0.93 ? Math.floor(Math.random() * 3) + 1 : 0));
      setTodayReceived(prev => prev + (Math.random() > 0.95 ? 1 : 0));
      setResolved(prev => prev + (Math.random() > 0.96 ? 1 : 0));
      setPending(prev => Math.max(0, prev + (Math.random() > 0.97 ? (Math.random() > 0.6 ? 1 : -1) : 0)));
      setClassificationProgress(prev => (prev + 1.2) % 100);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  const grievanceCategories = [
    {
      category: 'Public Services',
      icon: Building,
      count: 2847,
      avgResolutionTime: '5.2 days',
      satisfaction: 87,
      priority: 'high',
      subcategories: ['Water Supply', 'Electricity', 'Roads', 'Waste Management'],
      trend: '+12%'
    },
    {
      category: 'Healthcare',
      icon: Shield,
      count: 1923,
      avgResolutionTime: '3.8 days',
      satisfaction: 91,
      priority: 'critical',
      subcategories: ['Hospital Services', 'Medicine Availability', 'Staff Behavior'],
      trend: '+8%'
    },
    {
      category: 'Education',
      icon: BookOpen,
      count: 1456,
      avgResolutionTime: '6.1 days',
      satisfaction: 84,
      priority: 'medium',
      subcategories: ['School Infrastructure', 'Teacher Availability', 'Scholarships'],
      trend: '+5%'
    },
    {
      category: 'Transportation',
      icon: MapPin,
      count: 1287,
      avgResolutionTime: '4.5 days',
      satisfaction: 79,
      priority: 'medium',
      subcategories: ['Public Transport', 'Traffic Issues', 'Road Safety'],
      trend: '+18%'
    },
    {
      category: 'Administration',
      icon: Flag,
      count: 1034,
      avgResolutionTime: '7.3 days',
      satisfaction: 76,
      priority: 'low',
      subcategories: ['Document Processing', 'Corruption', 'Staff Behavior'],
      trend: '-3%'
    },
    {
      category: 'Others',
      icon: MessageSquare,
      count: 400,
      avgResolutionTime: '4.9 days',
      satisfaction: 82,
      priority: 'low',
      subcategories: ['General Complaints', 'Suggestions', 'Feedback'],
      trend: '+2%'
    }
  ];

  const recentGrievances = [
    {
      id: 'GRV-2024-8947',
      category: 'Public Services',
      subcategory: 'Water Supply',
      description: 'Irregular water supply in Sector 15, affecting 200+ households',
      location: 'Chandigarh, Sector 15',
      submittedBy: 'Resident Welfare Association',
      priority: 'high',
      status: 'in_progress',
      assignedTo: 'Water Department',
      submittedAt: '2024-02-15 09:30',
      deadline: '2024-02-20',
      updates: 3,
      satisfaction: null
    },
    {
      id: 'GRV-2024-8946',
      category: 'Healthcare',
      subcategory: 'Hospital Services',
      description: 'Long waiting times and inadequate facilities at District Hospital',
      location: 'Delhi, Rohini District',
      submittedBy: 'Anonymous Citizen',
      priority: 'critical',
      status: 'escalated',
      assignedTo: 'Health Ministry',
      submittedAt: '2024-02-14 14:22',
      deadline: '2024-02-18',
      updates: 5,
      satisfaction: null
    },
    {
      id: 'GRV-2024-8945',
      category: 'Education',
      subcategory: 'School Infrastructure',
      description: 'Damaged classroom roof causing safety concerns for students',
      location: 'Mumbai, Bandra East',
      submittedBy: 'Parent Committee',
      priority: 'high',
      status: 'resolved',
      assignedTo: 'Education Department',
      submittedAt: '2024-02-10 11:15',
      deadline: '2024-02-17',
      updates: 4,
      satisfaction: 4.2
    },
    {
      id: 'GRV-2024-8944',
      category: 'Transportation',
      subcategory: 'Traffic Issues',
      description: 'Traffic signal malfunction causing daily congestion',
      location: 'Bangalore, MG Road Junction',
      submittedBy: 'Traffic Police',
      priority: 'medium',
      status: 'pending_review',
      assignedTo: 'Traffic Department',
      submittedAt: '2024-02-13 16:45',
      deadline: '2024-02-19',
      updates: 1,
      satisfaction: null
    }
  ];

  const aiInsights = [
    { insight: 'Peak complaint time', value: '10 AM - 12 PM', icon: Clock },
    { insight: 'Most affected area', value: 'Urban Districts', icon: MapPin },
    { insight: 'Auto-routing accuracy', value: '94.8%', icon: Zap },
    { insight: 'Sentiment analysis', value: '68% Urgent', icon: TrendingUp }
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'resolved': return 'bg-green-500';
      case 'in_progress': return 'bg-blue-500';
      case 'escalated': return 'bg-red-500';
      case 'pending_review': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority:any) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 relative overflow-hidden">
      {/* Government Building Silhouettes */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex justify-between items-end h-full px-8 pb-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white"
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${200 + Math.random() * 300}px`,
                clipPath: 'polygon(0 100%, 20% 80%, 20% 60%, 40% 60%, 40% 40%, 60% 40%, 60% 20%, 80% 20%, 80% 0%, 100% 0%, 100% 100%)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Government Icons */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-gov-float opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}
        >
          {i % 4 === 0 && <Building className="w-8 h-8 text-blue-400" />}
          {i % 4 === 1 && <Flag className="w-7 h-7 text-red-400" />}
          {i % 4 === 2 && <Shield className="w-6 h-6 text-yellow-400" />}
          {i % 4 === 3 && <Users className="w-7 h-7 text-green-400" />}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Government Header */}
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <BackToParent
                text="Back to Dashboard"
                route="/product"
                variant="gov"
              />
              
              <div className="flex items-center space-x-8 py-16">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center border-4 border-white/20">
                    <Flag className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">{todayReceived}</span>
                  </div>
                </div>
                
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">Grievance Redressal</h1>
                  <p className="text-blue-200 text-lg">Route complaints → Send updates (AI: Text classification)</p>
                  <div className="flex items-center space-x-6 mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm">AI Classification Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-300 text-sm">{Math.round(classificationProgress)}% Processed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Government Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-green-500/20 border-green-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold text-white">{resolved.toLocaleString()}</div>
                  <div className="text-green-200 text-sm">Resolved Cases</div>
                </CardContent>
              </Card>
              <Card className="bg-orange-500/20 border-orange-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                  <div className="text-2xl font-bold text-white">{pending.toLocaleString()}</div>
                  <div className="text-orange-200 text-sm">Pending Cases</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* AI-Powered Classification Dashboard */}
        <div className="mb-12">
          <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
              <CardTitle className="text-white flex items-center">
                <Zap className="w-6 h-6 mr-3 text-blue-400" />
                AI Grievance Classification & Routing
              </CardTitle>
              <CardDescription className="text-blue-200">Automated categorization and department assignment</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Category Distribution */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-6">Department-wise Distribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {grievanceCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index} className="p-4 border border-gray-600 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                category.priority === 'critical' ? 'bg-red-500/20 border border-red-500' :
                                category.priority === 'high' ? 'bg-orange-500/20 border border-orange-500' :
                                category.priority === 'medium' ? 'bg-yellow-500/20 border border-yellow-500' :
                                'bg-green-500/20 border border-green-500'
                              }`}>
                                <IconComponent className={`w-5 h-5 ${
                                  category.priority === 'critical' ? 'text-red-400' :
                                  category.priority === 'high' ? 'text-orange-400' :
                                  category.priority === 'medium' ? 'text-yellow-400' :
                                  'text-green-400'
                                }`} />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold text-sm">{category.category}</h4>
                                <p className="text-gray-400 text-xs">{category.count.toLocaleString()} cases</p>
                              </div>
                            </div>
                            <Badge className={`text-xs ${
                              category.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                            }`}>
                              {category.trend}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 mb-3">
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Avg Resolution</span>
                              <span className="text-white">{category.avgResolutionTime}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-400">Satisfaction</span>
                              <span className="text-yellow-400">{category.satisfaction}%</span>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <Progress value={category.satisfaction} className="h-2" />
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-gray-400 text-xs">Sub-categories:</p>
                            {category.subcategories.slice(0, 2).map((sub, subIndex) => (
                              <Badge key={subIndex} variant="outline" className="text-xs mr-1 border-gray-600 text-gray-300">
                                {sub}
                              </Badge>
                            ))}
                            {category.subcategories.length > 2 && (
                              <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                                +{category.subcategories.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Insights */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">AI Insights</h3>
                  <div className="space-y-4">
                    {aiInsights.map((insight, index) => {
                      const IconComponent = insight.icon;
                      return (
                        <div key={index} className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg">
                          <div className="flex items-center space-x-3 mb-2">
                            <IconComponent className="w-5 h-5 text-purple-400" />
                            <span className="text-purple-200 text-sm">{insight.insight}</span>
                          </div>
                          <p className="text-white font-bold text-lg">{insight.value}</p>
                        </div>
                      );
                    })}
                    
                    {/* Classification Progress */}
                    <div className="p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-200 text-sm">AI Processing</span>
                        <span className="text-white font-bold">{Math.round(classificationProgress)}%</span>
                      </div>
                      <Progress value={classificationProgress} className="h-3" />
                      <p className="text-blue-300 text-xs mt-2">Batch #247 • 89 grievances</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Grievances Timeline */}
        <div className="mb-8">
          <Card className="bg-black/40 backdrop-blur-md border-indigo-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-indigo-400" />
                Recent Grievances & Real-time Updates
              </CardTitle>
              <CardDescription className="text-indigo-200">Live tracking of citizen complaints</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentGrievances.map((grievance, index) => (
                  <div key={grievance.id} className="p-6 border border-gray-700 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={`${getPriorityColor(grievance.priority)} border`}>
                            {grievance.priority.charAt(0).toUpperCase() + grievance.priority.slice(1)} Priority
                          </Badge>
                          <Badge className={`${getStatusColor(grievance.status)} text-white`}>
                            {grievance.status.replace('_', ' ').charAt(0).toUpperCase() + grievance.status.replace('_', ' ').slice(1)}
                          </Badge>
                          <span className="text-gray-400 text-sm">#{grievance.id}</span>
                        </div>
                        
                        <h3 className="text-white font-semibold text-lg mb-2">{grievance.description}</h3>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                          <div>
                            <span className="text-gray-400">Category:</span>
                            <p className="text-white font-medium">{grievance.category}</p>
                            <p className="text-gray-300 text-xs">{grievance.subcategory}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Location:</span>
                            <p className="text-white font-medium">{grievance.location}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Submitted by:</span>
                            <p className="text-white font-medium">{grievance.submittedBy}</p>
                            <p className="text-gray-300 text-xs">{grievance.submittedAt}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Assigned to:</span>
                            <p className="text-white font-medium">{grievance.assignedTo}</p>
                            <p className="text-gray-300 text-xs">Due: {grievance.deadline}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <Send className="w-4 h-4 text-blue-400" />
                          <span className="text-blue-400 text-sm">{grievance.updates} updates sent</span>
                        </div>
                        {grievance.satisfaction && (
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm">{grievance.satisfaction}/5.0</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="bg-white/10 text-white border-white/20">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          Send Update
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/10 text-white border-white/20">
                          <Users className="w-3 h-3 mr-1" />
                          Escalate
                        </Button>
                      </div>
                      
                      {grievance.status === 'resolved' && (
                        <div className="flex items-center space-x-2 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Citizen Satisfied</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Dashboard */}
        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="bg-blue-500/20 border-blue-500/30 backdrop-blur-md">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <div className="text-3xl font-bold text-white mb-2">{totalGrievances.toLocaleString()}</div>
              <div className="text-blue-200 text-sm">Total Grievances</div>
              <Badge className="mt-2 bg-blue-500/30 text-blue-300">+{todayReceived} today</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-green-500/20 border-green-500/30 backdrop-blur-md">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold text-white mb-2">87.4%</div>
              <div className="text-green-200 text-sm">Resolution Rate</div>
              <Badge className="mt-2 bg-green-500/30 text-green-300">+2.1% this month</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-500/20 border-yellow-500/30 backdrop-blur-md">
            <CardContent className="p-6 text-center">
              <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-400" />
              <div className="text-3xl font-bold text-white mb-2">4.8 days</div>
              <div className="text-yellow-200 text-sm">Avg Resolution</div>
              <Badge className="mt-2 bg-yellow-500/30 text-yellow-300">-0.7 days improved</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-500/20 border-purple-500/30 backdrop-blur-md">
            <CardContent className="p-6 text-center">
              <Star className="w-10 h-10 mx-auto mb-3 text-purple-400" />
              <div className="text-3xl font-bold text-white mb-2">4.2/5</div>
              <div className="text-purple-200 text-sm">Satisfaction Score</div>
              <Badge className="mt-2 bg-purple-500/30 text-purple-300">+0.3 improved</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
{/* Ready to Transform Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ReadyToTransform />
      </div>
      <style jsx>{`
        @keyframes gov-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.15; 
          }
          33% { 
            transform: translateY(-25px) rotate(120deg) scale(1.1); 
            opacity: 0.25; 
          }
          66% { 
            transform: translateY(-15px) rotate(240deg) scale(0.9); 
            opacity: 0.3; 
          }
        }
        .animate-gov-float {
          animation: gov-float 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GrievanceRedressalScreen;