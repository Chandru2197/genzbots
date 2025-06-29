import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Users, CheckCircle, Clock, DollarSign, FileText, Shield, Calendar, TrendingUp, AlertTriangle, Database, Fingerprint, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const PensionProcessingScreen = () => {
  const [totalApplications, setTotalApplications] = useState(12847);
  const [verifiedApplications, setVerifiedApplications] = useState(11234);
  const [disbursedAmount, setDisbursedAmount] = useState(847320000);
  const [todayProcessed, setTodayProcessed] = useState(342);
  const [aadhaarVerifications, setAadhaarVerifications] = useState(8734);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalApplications(prev => prev + (Math.random() > 0.94 ? Math.floor(Math.random() * 2) + 1 : 0));
      setVerifiedApplications(prev => prev + (Math.random() > 0.96 ? 1 : 0));
      setDisbursedAmount(prev => prev + (Math.random() > 0.97 ? Math.floor(Math.random() * 50000) + 10000 : 0));
      setTodayProcessed(prev => prev + (Math.random() > 0.95 ? 1 : 0));
      setAadhaarVerifications(prev => prev + (Math.random() > 0.93 ? 1 : 0));
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const pensionCategories = [
    {
      category: 'Central Government',
      beneficiaries: 2847000,
      monthlyAmount: 12840000000,
      avgPension: 45120,
      growth: '+8.2%',
      icon: Shield,
      color: 'from-blue-600 to-blue-700',
      applications: { pending: 234, verified: 1847, disbursed: 1613 }
    },
    {
      category: 'State Government',
      beneficiaries: 1923000,
      monthlyAmount: 8670000000,
      avgPension: 45080,
      growth: '+6.8%',
      icon: FileText,
      color: 'from-green-600 to-green-700',
      applications: { pending: 189, verified: 1456, disbursed: 1267 }
    },
    {
      category: 'Defense Personnel',
      beneficiaries: 856000,
      monthlyAmount: 4230000000,
      avgPension: 49420,
      growth: '+12.4%',
      icon: Shield,
      color: 'from-red-600 to-red-700',
      applications: { pending: 67, verified: 723, disbursed: 656 }
    },
    {
      category: 'Railway Employees',
      beneficiaries: 567000,
      monthlyAmount: 2890000000,
      avgPension: 50980,
      growth: '+9.1%',
      icon: TrendingUp,
      color: 'from-purple-600 to-purple-700',
      applications: { pending: 45, verified: 456, disbursed: 411 }
    }
  ];

  const processingSteps = [
    {
      step: 'Application Received',
      icon: FileText,
      status: 'completed',
      automated: true,
      tool: 'RPA + Document Scanner',
      count: 12847,
      avgTime: '2 mins'
    },
    {
      step: 'Eligibility Verification',
      icon: CheckCircle,
      status: 'active',
      automated: true,
      tool: 'RPA + Government DB',
      count: 11234,
      avgTime: '15 mins'
    },
    {
      step: 'Aadhaar Authentication',
      icon: Fingerprint,
      status: 'active',
      automated: true,
      tool: 'Aadhaar API + RPA',
      count: 8734,
      avgTime: '3 mins'
    },
    {
      step: 'Pension Calculation',
      icon: Calculator,
      status: 'processing',
      automated: true,
      tool: 'RPA + Calculation Engine',
      count: 7892,
      avgTime: '8 mins'
    },
    {
      step: 'Fund Disbursement',
      icon: CreditCard,
      status: 'pending',
      automated: true,
      tool: 'Banking API + RPA',
      count: 6547,
      avgTime: '5 mins'
    }
  ];

  const recentDisbursements = [
    {
      id: 'PEN-2024-12847',
      beneficiaryName: 'Rajesh Kumar Sharma',
      pensionType: 'Central Government',
      serviceYears: 34,
      monthlyAmount: 47850,
      disbursedAmount: 143550,
      lastSalary: 95000,
      retirementDate: '2024-01-31',
      status: 'disbursed',
      aadhaarVerified: true,
      bankAccount: 'SBI-****7832',
      processingTime: '23 mins'
    },
    {
      id: 'PEN-2024-12846',
      beneficiaryName: 'Sunita Devi',
      pensionType: 'State Government',
      serviceYears: 32,
      monthlyAmount: 42100,
      disbursedAmount: 126300,
      lastSalary: 84000,
      retirementDate: '2024-02-15',
      status: 'processing',
      aadhaarVerified: true,
      bankAccount: 'HDFC-****9156',
      processingTime: '18 mins'
    },
    {
      id: 'PEN-2024-12845',
      beneficiaryName: 'Colonel Vikram Singh',
      pensionType: 'Defense Personnel',
      serviceYears: 28,
      monthlyAmount: 52300,
      disbursedAmount: 156900,
      lastSalary: 110000,
      retirementDate: '2024-02-10',
      status: 'verified',
      aadhaarVerified: true,
      bankAccount: 'PNB-****4521',
      processingTime: '31 mins'
    },
    {
      id: 'PEN-2024-12844',
      beneficiaryName: 'Mohan Lal Gupta',
      pensionType: 'Railway Employees',
      serviceYears: 36,
      monthlyAmount: 51200,
      disbursedAmount: 153600,
      lastSalary: 96000,
      retirementDate: '2024-01-25',
      status: 'pending_verification',
      aadhaarVerified: false,
      bankAccount: 'ICICI-****7894',
      processingTime: 'In queue'
    }
  ];

  const systemStats = [
    { metric: 'Processing Speed', value: '3.2 mins/case', trend: '-45%', icon: Clock },
    { metric: 'Aadhaar Success Rate', value: '98.7%', trend: '+1.2%', icon: Fingerprint },
    { metric: 'Auto-disbursement', value: '94.8%', trend: '+8.1%', icon: CreditCard },
    { metric: 'Fraud Detection', value: '99.1%', trend: '+0.5%', icon: Shield }
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'disbursed': return 'bg-green-500';
      case 'processing': return 'bg-blue-500';
      case 'verified': return 'bg-purple-500';
      case 'pending_verification': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const formatCurrency = (amount:any) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 relative overflow-hidden">
      {/* Currency Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="grid grid-cols-8 grid-rows-8 gap-8 h-full p-8">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-green-400 text-6xl font-bold opacity-20"
              style={{ 
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              ₹
            </div>
          ))}
        </div>
      </div>

      {/* Floating Finance Icons */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pension-float opacity-12"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${25 + Math.random() * 15}s`
          }}
        >
          {i % 5 === 0 && <CreditCard className="w-9 h-9 text-green-400" />}
          {i % 5 === 1 && <DollarSign className="w-8 h-8 text-teal-400" />}
          {i % 5 === 2 && <Calculator className="w-7 h-7 text-cyan-400" />}
          {i % 5 === 3 && <Fingerprint className="w-8 h-8 text-emerald-400" />}
          {i % 5 === 4 && <Shield className="w-7 h-7 text-blue-400" />}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Financial Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="bg-black/30 backdrop-blur-md text-white border-emerald-500/30 hover:bg-emerald-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Government
              </Button>
              
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center border-4 border-emerald-400/30 shadow-2xl">
                    <CreditCard className="w-14 h-14 text-white" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div>
                  <h1 className="text-6xl font-bold text-white mb-2">Pension Processing</h1>
                  <p className="text-emerald-200 text-xl">Verify eligibility → Disburse payments (Tools: RPA + Aadhaar API)</p>
                  <div className="flex items-center space-x-8 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-lg">Banking APIs Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-300 text-lg">Aadhaar Verification Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Financial Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-green-500/20 border-green-500/30 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-3 text-green-400" />
                  <div className="text-3xl font-bold text-white">{formatCurrency(disbursedAmount / 1000000)}M</div>
                  <div className="text-green-200 text-sm">Disbursed Today</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/20 border-blue-500/30 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl font-bold text-white">{todayProcessed.toLocaleString()}</div>
                  <div className="text-blue-200 text-sm">Cases Processed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Pension Categories Overview */}
        <div className="mb-12">
          <Card className="bg-black/50 backdrop-blur-md border-emerald-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-600/20 to-green-600/20">
              <CardTitle className="text-white flex items-center">
                <Shield className="w-6 h-6 mr-3 text-emerald-400" />
                Pension Categories & Distribution
              </CardTitle>
              <CardDescription className="text-emerald-200">Automated processing across all government sectors</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {pensionCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className={`p-6 rounded-xl bg-gradient-to-br ${category.color} shadow-2xl transform group-hover:scale-105 transition-all duration-300`}>
                        <div className="flex items-center justify-between mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                          <Badge className="bg-white/20 text-white border-white/30">
                            {category.growth}
                          </Badge>
                        </div>
                        
                        <h3 className="text-white font-bold text-lg mb-3">{category.category}</h3>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-white/70 text-sm">Beneficiaries</p>
                            <p className="text-white font-bold text-xl">{(category.beneficiaries / 1000000).toFixed(2)}M</p>
                          </div>
                          
                          <div>
                            <p className="text-white/70 text-sm">Monthly Disbursement</p>
                            <p className="text-white font-bold text-lg">{formatCurrency(category.monthlyAmount / 1000000000)}B</p>
                          </div>
                          
                          <div>
                            <p className="text-white/70 text-sm">Avg Monthly Pension</p>
                            <p className="text-white font-bold">{formatCurrency(category.avgPension)}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                              <p className="text-white text-sm font-bold">{category.applications.pending}</p>
                              <p className="text-white/60 text-xs">Pending</p>
                            </div>
                            <div>
                              <p className="text-white text-sm font-bold">{category.applications.verified}</p>
                              <p className="text-white/60 text-xs">Verified</p>
                            </div>
                            <div>
                              <p className="text-white text-sm font-bold">{category.applications.disbursed}</p>
                              <p className="text-white/60 text-xs">Disbursed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processing Pipeline */}
        <div className="mb-12">
          <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Automated Processing Pipeline
              </CardTitle>
              <CardDescription className="text-cyan-200">Real-time RPA + Aadhaar API integration</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                {/* Pipeline Flow Line */}
                <div className="absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
                
                <div className="flex justify-between items-start relative">
                  {processingSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="relative text-center group">
                        {/* Step Circle */}
                        <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center border-4 transition-all duration-300 group-hover:scale-110 ${
                          step.status === 'completed' ? 'bg-green-500 border-green-400 shadow-green-500/50 shadow-2xl' :
                          step.status === 'active' ? 'bg-blue-500 border-blue-400 shadow-blue-500/50 shadow-2xl animate-pulse' :
                          step.status === 'processing' ? 'bg-yellow-500 border-yellow-400 shadow-yellow-500/50 shadow-2xl' :
                          'bg-gray-500 border-gray-400'
                        }`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Step Info */}
                        <div className="mt-4 max-w-32">
                          <h4 className="text-white font-semibold text-sm mb-2">{step.step}</h4>
                          <p className="text-gray-300 text-xs mb-2">{step.tool}</p>
                          
                          <div className="space-y-1">
                            <Badge className={`text-xs ${
                              step.automated ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                            }`}>
                              {step.automated ? 'Automated' : 'Manual'}
                            </Badge>
                            
                            <div className="text-xs">
                              <p className="text-white font-bold">{step.count.toLocaleString()}</p>
                              <p className="text-gray-400">processed</p>
                            </div>
                            
                            <p className="text-gray-400 text-xs">{step.avgTime}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Disbursements & System Performance */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Disbursements */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-teal-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-6 h-6 mr-3 text-teal-400" />
                  Recent Pension Disbursements
                </CardTitle>
                <CardDescription className="text-teal-200">Live processing status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentDisbursements.map((pension, index) => (
                  <div key={pension.id} className="p-5 border border-gray-700 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {pension.beneficiaryName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{pension.beneficiaryName}</h3>
                          <p className="text-gray-300 text-sm">{pension.pensionType} • {pension.serviceYears} years service</p>
                          <p className="text-gray-400 text-xs">Retired: {pension.retirementDate}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge className={`mb-2 ${getStatusColor(pension.status)} text-white`}>
                          {pension.status.replace('_', ' ').charAt(0).toUpperCase() + pension.status.replace('_', ' ').slice(1)}
                        </Badge>
                        <p className="text-white font-bold text-lg">{formatCurrency(pension.monthlyAmount)}</p>
                        <p className="text-gray-400 text-sm">Monthly</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-gray-400">Last Salary:</span>
                        <p className="text-white font-medium">{formatCurrency(pension.lastSalary)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">3-Month Disbursement:</span>
                        <p className="text-green-400 font-bold">{formatCurrency(pension.disbursedAmount)}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Bank Account:</span>
                        <p className="text-white font-medium">{pension.bankAccount}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Processing Time:</span>
                        <p className="text-blue-400 font-medium">{pension.processingTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Fingerprint className="w-4 h-4 text-blue-400" />
                          <span className={`text-sm ${pension.aadhaarVerified ? 'text-green-400' : 'text-red-400'}`}>
                            Aadhaar {pension.aadhaarVerified ? 'Verified' : 'Pending'}
                          </span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">ID: {pension.id}</span>
                      </div>
                      
                      {pension.status === 'disbursed' && (
                        <div className="flex items-center space-x-2 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Payment Successful</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* System Performance */}
          <div>
            <Card className="bg-black/40 backdrop-blur-md border-emerald-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-emerald-400" />
                  System Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-200 text-sm">{stat.metric}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-lg">{stat.value}</span>
                        <Badge className={`text-xs ${
                          (stat.trend.startsWith('+') && !stat.metric.includes('Speed')) || 
                          (stat.trend.startsWith('-') && stat.metric.includes('Speed'))
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {stat.trend}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Daily Summary */}
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white">Today's Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Applications Received</span>
                    <span className="text-white font-bold">{totalApplications.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Aadhaar Verifications</span>
                    <span className="text-blue-400 font-bold">{aadhaarVerifications.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Disbursed</span>
                    <span className="text-green-400 font-bold">{formatCurrency(disbursedAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Rate</span>
                    <span className="text-yellow-400 font-bold">87.3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Integration Status */}
        <Card className="bg-black/40 backdrop-blur-md border-gray-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="w-6 h-6 mr-3 text-gray-400" />
              Government System Integrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-green-600 rounded-lg bg-green-500/10">
                <Fingerprint className="w-12 h-12 mx-auto mb-3 text-green-400" />
                <h3 className="text-white font-bold mb-2">Aadhaar API</h3>
                <div className="text-green-400 text-2xl font-bold mb-1">98.7%</div>
                <div className="text-green-300 text-sm">Success Rate</div>
                <Badge className="mt-2 bg-green-500/20 text-green-400">Live</Badge>
              </div>
              
              <div className="text-center p-6 border border-blue-600 rounded-lg bg-blue-500/10">
                <CreditCard className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                <h3 className="text-white font-bold mb-2">Banking APIs</h3>
                <div className="text-blue-400 text-2xl font-bold mb-1">94.2%</div>
                <div className="text-blue-300 text-sm">Auto Transfer</div>
                <Badge className="mt-2 bg-blue-500/20 text-blue-400">Connected</Badge>
              </div>
              
              <div className="text-center p-6 border border-purple-600 rounded-lg bg-purple-500/10">
                <Database className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                <h3 className="text-white font-bold mb-2">Gov Database</h3>
                <div className="text-purple-400 text-2xl font-bold mb-1">99.8%</div>
                <div className="text-purple-300 text-sm">Sync Rate</div>
                <Badge className="mt-2 bg-purple-500/20 text-purple-400">Synced</Badge>
              </div>
              
              <div className="text-center p-6 border border-yellow-600 rounded-lg bg-yellow-500/10">
                <Shield className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                <h3 className="text-white font-bold mb-2">Security Layer</h3>
                <div className="text-yellow-400 text-2xl font-bold mb-1">100%</div>
                <div className="text-yellow-300 text-sm">Secure</div>
                <Badge className="mt-2 bg-yellow-500/20 text-yellow-400">Protected</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes pension-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.12; 
          }
          25% { 
            transform: translateY(-40px) rotate(90deg) scale(1.2); 
            opacity: 0.25; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(0.8); 
            opacity: 0.15; 
          }
          75% { 
            transform: translateY(-50px) rotate(270deg) scale(1.1); 
            opacity: 0.3; 
          }
        }
        .animate-pension-float {
          animation: pension-float 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PensionProcessingScreen;