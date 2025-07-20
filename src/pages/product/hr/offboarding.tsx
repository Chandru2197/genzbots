import React, { useState, useEffect } from 'react';
import { ArrowLeft, UserX, Shield, Package, Key, CheckCircle, Clock, AlertTriangle, Building, Laptop, CreditCard, FileText, Settings, Users, Activity, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';

const EmployeeOffboardingScreen = () => {
  const [totalOffboardings, setTotalOffboardings] = useState(89);
  const [activeOffboardings, setActiveOffboardings] = useState(12);
  const [completedToday, setCompletedToday] = useState(7);
  const [assetsRecovered, setAssetsRecovered] = useState(156);
  const [accessRevoked, setAccessRevoked] = useState(847);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalOffboardings(prev => prev + (Math.random() > 0.98 ? 1 : 0));
      setActiveOffboardings(prev => Math.max(0, prev + (Math.random() > 0.96 ? (Math.random() > 0.5 ? 1 : -1) : 0)));
      setCompletedToday(prev => prev + (Math.random() > 0.97 ? 1 : 0));
      setAssetsRecovered(prev => prev + (Math.random() > 0.95 ? 1 : 0));
      setAccessRevoked(prev => prev + (Math.random() > 0.94 ? Math.floor(Math.random() * 3) + 1 : 0));
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const offboardingSteps = [
    {
      category: 'Access Management',
      steps: [
        { task: 'Active Directory Account', status: 'completed', tool: 'AD + RPA', duration: '2m' },
        { task: 'Email & Office 365', status: 'completed', tool: 'Exchange + Graph API', duration: '3m' },
        { task: 'VPN Access', status: 'completed', tool: 'Cisco AnyConnect API', duration: '1m' },
        { task: 'Database Permissions', status: 'active', tool: 'SQL + MongoDB', duration: '5m' },
        { task: 'Cloud Services (AWS/Azure)', status: 'pending', tool: 'IAM APIs', duration: '4m' }
      ]
    },
    {
      category: 'Asset Recovery',
      steps: [
        { task: 'Laptop & Hardware', status: 'completed', tool: 'Asset Management', duration: '15m' },
        { task: 'Mobile Device Wipe', status: 'completed', tool: 'MDM Solution', duration: '3m' },
        { task: 'Corporate Credit Card', status: 'active', tool: 'Banking API', duration: '5m' },
        { task: 'Key Cards & Badges', status: 'pending', tool: 'Physical Security', duration: '2m' },
        { task: 'Software Licenses', status: 'pending', tool: 'License Management', duration: '8m' }
      ]
    },
    {
      category: 'Documentation',
      steps: [
        { task: 'Exit Interview Form', status: 'completed', tool: 'HR System', duration: '20m' },
        { task: 'Knowledge Transfer Doc', status: 'active', tool: 'Confluence + RPA', duration: '30m' },
        { task: 'Final Payroll Processing', status: 'pending', tool: 'Payroll System', duration: '10m' },
        { task: 'COBRA/Benefits Transfer', status: 'pending', tool: 'Benefits Portal', duration: '15m' }
      ]
    }
  ];

  const activeOffboardingCases = [
    {
      id: 'OFF-2024-127',
      employeeName: 'Sarah Mitchell',
      department: 'Engineering',
      role: 'Senior Developer',
      lastWorkDay: '2024-02-15',
      progress: 78,
      status: 'in_progress',
      priority: 'high',
      assetsRemaining: 3,
      accessPointsActive: 2,
      completedTasks: 11,
      totalTasks: 14
    },
    {
      id: 'OFF-2024-128',
      employeeName: 'Michael Chen',
      department: 'Sales',
      role: 'Sales Manager', 
      lastWorkDay: '2024-02-20',
      progress: 45,
      status: 'in_progress',
      priority: 'medium',
      assetsRemaining: 5,
      accessPointsActive: 7,
      completedTasks: 6,
      totalTasks: 13
    },
    {
      id: 'OFF-2024-129',
      employeeName: 'Jennifer Rodriguez',
      department: 'Marketing',
      role: 'Marketing Specialist',
      lastWorkDay: '2024-02-12',
      progress: 92,
      status: 'near_completion',
      priority: 'low',
      assetsRemaining: 1,
      accessPointsActive: 0,
      completedTasks: 12,
      totalTasks: 13
    }
  ];

  const systemIntegrations = [
    { system: 'Active Directory', status: 'connected', lastSync: '2 mins ago', accounts: 847 },
    { system: 'Office 365', status: 'connected', lastSync: '1 min ago', accounts: 823 },
    { system: 'AWS IAM', status: 'connected', lastSync: '5 mins ago', accounts: 234 },
    { system: 'Slack Workspace', status: 'connected', lastSync: '3 mins ago', accounts: 756 },
    { system: 'GitHub Enterprise', status: 'connected', lastSync: '4 mins ago', accounts: 298 },
    { system: 'Jira/Confluence', status: 'connected', lastSync: '7 mins ago', accounts: 567 }
  ];

  const offboardingMetrics = [
    { metric: 'Avg Completion Time', value: '4.2 hours', trend: '-18%', icon: Clock },
    { metric: 'Access Revocation Speed', value: '12 minutes', trend: '-25%', icon: Shield },
    { metric: 'Asset Recovery Rate', value: '97.8%', trend: '+2.1%', icon: Package },
    { metric: 'Compliance Score', value: '99.2%', trend: '+0.8%', icon: CheckCircle }
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'active': return 'bg-blue-500';
      case 'pending': return 'bg-gray-400';
      case 'in_progress': return 'bg-orange-500';
      case 'near_completion': return 'bg-green-400';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority:any) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const { navigateTo } = useNavigation();

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Security Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full p-8">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className={`border border-red-500 ${
                Math.random() > 0.8 ? 'bg-red-500 animate-pulse' : ''
              }`}
              style={{ animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Security Icons */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-security-float opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        >
          {i % 4 === 0 && <Shield className="w-8 h-8 text-red-400" />}
          {i % 4 === 1 && <Key className="w-6 h-6 text-orange-400" />}
          {i % 4 === 2 && <UserX className="w-7 h-7 text-yellow-400" />}
          {i % 4 === 3 && <Package className="w-6 h-6 text-blue-400" />}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Security-Themed Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button 
                onClick={() => navigateTo('/product')}
                variant="outline" className="bg-black/40 backdrop-blur-md text-white border-red-500/30 hover:bg-red-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to HR
              </Button>
              
              {/* Security Status Dashboard */}
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center border-4 border-red-400/30">
                    <Shield className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">Employee Offboarding</h1>
                  <p className="text-red-200 text-lg">Revoke access → Asset recovery (Tools: Active Directory + RPA)</p>
                  <div className="flex items-center space-x-6 mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm">Security Systems Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-orange-300 text-sm">{activeOffboardings} Active Cases</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Security Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-red-500/20 border-red-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <UserX className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <div className="text-2xl font-bold text-white">{accessRevoked}</div>
                  <div className="text-red-200 text-sm">Access Points Revoked</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/20 border-blue-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <Package className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">{assetsRecovered}</div>
                  <div className="text-blue-200 text-sm">Assets Recovered</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Security Checklist Pipeline */}
        <div className="mb-12">
          <Card className="bg-black/60 backdrop-blur-md border-orange-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-600/20 to-orange-600/20">
              <CardTitle className="text-white flex items-center">
                <Shield className="w-6 h-6 mr-3 text-orange-400" />
                Security Offboarding Pipeline
              </CardTitle>
              <CardDescription className="text-orange-200">Automated access revocation and asset recovery</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {offboardingSteps.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      {category.category === 'Access Management' && <Key className="w-5 h-5 mr-2 text-red-400" />}
                      {category.category === 'Asset Recovery' && <Package className="w-5 h-5 mr-2 text-blue-400" />}
                      {category.category === 'Documentation' && <FileText className="w-5 h-5 mr-2 text-green-400" />}
                      {category.category}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {category.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="relative">
                          {/* Connection Line */}
                          {stepIndex < category.steps.length - 1 && (
                            <div className="absolute top-8 left-full w-4 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600 z-0"></div>
                          )}
                          
                          {/* Step Card */}
                          <div className={`relative z-10 p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                            step.status === 'completed' ? 'bg-green-500/20 border-green-500 shadow-green-500/20 shadow-lg' :
                            step.status === 'active' ? 'bg-orange-500/20 border-orange-500 shadow-orange-500/20 shadow-lg animate-pulse' :
                            'bg-gray-500/20 border-gray-500'
                          }`}>
                            {/* Status Icon */}
                            <div className="flex items-center justify-center mb-3">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                step.status === 'completed' ? 'bg-green-500' :
                                step.status === 'active' ? 'bg-orange-500 animate-pulse' :
                                'bg-gray-500'
                              }`}>
                                {step.status === 'completed' && <CheckCircle className="w-6 h-6 text-white" />}
                                {step.status === 'active' && <Clock className="w-6 h-6 text-white" />}
                                {step.status === 'pending' && <AlertTriangle className="w-6 h-6 text-white" />}
                              </div>
                            </div>
                            
                            {/* Step Info */}
                            <div className="text-center">
                              <h4 className="text-white font-semibold text-sm mb-2">{step.task}</h4>
                              <p className="text-gray-300 text-xs mb-2">{step.tool}</p>
                              <Badge className={`text-xs ${
                                step.status === 'completed' ? 'bg-green-500/30 text-green-300' :
                                step.status === 'active' ? 'bg-orange-500/30 text-orange-300' :
                                'bg-gray-500/30 text-gray-300'
                              }`}>
                                {step.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Cases & System Status */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Active Offboarding Cases */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-6 h-6 mr-3 text-red-400" />
                  Active Offboarding Cases
                </CardTitle>
                <CardDescription className="text-red-200">Currently processing departures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeOffboardingCases.map((case_, index) => (
                  <div key={case_.id} className="p-4 border border-gray-700 rounded-lg bg-gray-800/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                          {case_.employeeName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{case_.employeeName}</h3>
                          <p className="text-gray-300 text-sm">{case_.role} • {case_.department}</p>
                          <p className="text-gray-400 text-xs">Last Day: {case_.lastWorkDay}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-2 ${getPriorityColor(case_.priority)}`}>
                          {case_.priority.charAt(0).toUpperCase() + case_.priority.slice(1)} Priority
                        </Badge>
                        <p className="text-white font-bold">{case_.progress}%</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Progress value={case_.progress} className="h-3" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-orange-400 font-semibold">{case_.assetsRemaining}</div>
                        <div className="text-gray-400">Assets Remaining</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-semibold">{case_.accessPointsActive}</div>
                        <div className="text-gray-400">Access Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-semibold">{case_.completedTasks}/{case_.totalTasks}</div>
                        <div className="text-gray-400">Tasks Done</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* System Integrations */}
          <div>
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-blue-400" />
                  System Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {systemIntegrations.map((system, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="text-white font-medium text-sm">{system.system}</div>
                      <div className="text-gray-400 text-xs">{system.lastSync}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 text-xs">Connected</span>
                      </div>
                      <div className="text-gray-300 text-xs">{system.accounts} accounts</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Metrics Summary */}
            <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Today's Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Completed</span>
                    <span className="text-green-400 font-bold">{completedToday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">In Progress</span>
                    <span className="text-orange-400 font-bold">{activeOffboardings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Month</span>
                    <span className="text-white font-bold">{totalOffboardings}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <Card className="bg-black/40 backdrop-blur-md border-gray-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-gray-400" />
              Offboarding Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {offboardingMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="text-center p-4 border border-gray-700 rounded-lg bg-gray-800/20">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-gray-300 text-sm mb-2">{metric.metric}</div>
                    <Badge className={`text-xs ${
                      metric.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 
                      metric.trend.startsWith('-') && metric.metric.includes('Time') ? 'bg-green-500/20 text-green-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {metric.trend}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes security-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.1; 
          }
          25% { 
            transform: translateY(-30px) rotate(90deg) scale(1.1); 
            opacity: 0.3; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(0.9); 
            opacity: 0.2; 
          }
          75% { 
            transform: translateY(-40px) rotate(270deg) scale(1.05); 
            opacity: 0.25; 
          }
        }
        .animate-security-float {
          animation: security-float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EmployeeOffboardingScreen;