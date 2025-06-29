import React, { useState, useEffect } from 'react';
import { ArrowLeft, Briefcase, DollarSign, Calculator, TrendingUp, Users, Calendar, CreditCard, Building, CheckCircle, Clock, AlertTriangle, PieChart, BarChart3, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const PayrollProcessingScreen = () => {
  const [totalEmployees, setTotalEmployees] = useState(1234);
  const [processedPayroll, setProcessedPayroll] = useState(1234);
  const [transferredPayments, setTransferredPayments] = useState(1234);
  const [payrollCycle, setPayrollCycle] = useState(0);
  const [totalPayrollAmount, setTotalPayrollAmount] = useState(2847560);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalEmployees(prev => prev + (Math.random() > 0.98 ? 1 : 0));
      setProcessedPayroll(prev => prev + (Math.random() > 0.95 ? 1 : 0));
      setTransferredPayments(prev => prev + (Math.random() > 0.95 ? 1 : 0));
      setPayrollCycle(prev => (prev + 1.8) % 100);
      setTotalPayrollAmount(prev => prev + Math.floor(Math.random() * 5000));
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const payrollSteps = [
    { step: 'Time Tracking Import', icon: Clock, status: 'completed', duration: '5m', amount: '$847K' },
    { step: 'Salary Calculation', icon: Calculator, status: 'completed', duration: '12m', amount: '$1.2M' },
    { step: 'Deduction Processing', icon: FileText, status: 'active', duration: '8m', amount: '$340K' },
    { step: 'Tax Calculation', icon: BarChart3, status: 'pending', duration: '15m', amount: '$280K' },
    { step: 'Bank Transfer', icon: CreditCard, status: 'pending', duration: '3m', amount: '$2.1M' }
  ];

  const departments = [
    { name: 'Engineering', employees: 342, avgSalary: '$95K', totalPay: '$32.5M', budget: '$35M', utilization: 93 },
    { name: 'Sales', employees: 186, avgSalary: '$75K', totalPay: '$14.0M', budget: '$15M', utilization: 93 },
    { name: 'Marketing', employees: 124, avgSalary: '$68K', totalPay: '$8.4M', budget: '$9M', utilization: 93 },
    { name: 'Operations', employees: 298, avgSalary: '$62K', totalPay: '$18.5M', budget: '$20M', utilization: 93 },
    { name: 'HR', employees: 89, avgSalary: '$71K', totalPay: '$6.3M', budget: '$7M', utilization: 90 },
    { name: 'Finance', employees: 67, avgSalary: '$82K', totalPay: '$5.5M', budget: '$6M', utilization: 92 }
  ];

  const recentPayrolls = [
    {
      id: 'PR-2024-001',
      period: 'January 2024',
      employees: 1234,
      gross: '$2,847,560',
      deductions: '$456,780',
      net: '$2,390,780',
      status: 'completed',
      processedAt: '2024-01-31 23:59',
      transferredAt: '2024-02-01 09:00'
    },
    {
      id: 'PR-2024-002',
      period: 'February 2024',
      employees: 1238,
      gross: '$2,891,340',
      deductions: '$463,120',
      net: '$2,428,220',
      status: 'processing',
      processedAt: '2024-02-29 18:45',
      transferredAt: 'Pending'
    },
    {
      id: 'PR-2024-003',
      period: 'March 2024',
      employees: 1241,
      gross: '$2,923,180',
      deductions: '$467,890',
      net: '$2,455,290',
      status: 'scheduled',
      processedAt: 'Scheduled for 2024-03-31',
      transferredAt: 'Scheduled for 2024-04-01'
    }
  ];

  const payrollMetrics = [
    { metric: 'Processing Time', value: '2.3 hours', trend: '-35%', icon: Clock },
    { metric: 'Accuracy Rate', value: '99.7%', trend: '+0.3%', icon: CheckCircle },
    { metric: 'Cost Per Employee', value: '$2.40', trend: '-18%', icon: DollarSign },
    { metric: 'Compliance Score', value: '100%', trend: '+0%', icon: Building }
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'processing': return 'bg-blue-500';
      case 'active': return 'bg-orange-500';
      case 'pending': return 'bg-gray-400';
      case 'scheduled': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Financial Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-16 grid-rows-12 gap-2 h-full p-4">
          {[...Array(192)].map((_, i) => (
            <div
              key={i}
              className={`border border-blue-400 ${
                Math.random() > 0.85 ? 'bg-blue-400 animate-pulse' : ''
              } rounded`}
              style={{ animationDelay: `${Math.random() * 4}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Financial Icons */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-payroll-float opacity-15"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${25 + Math.random() * 15}s`
          }}
        >
          {i % 5 === 0 && <DollarSign className="w-8 h-8 text-green-400" />}
          {i % 5 === 1 && <Calculator className="w-7 h-7 text-blue-400" />}
          {i % 5 === 2 && <CreditCard className="w-8 h-8 text-purple-400" />}
          {i % 5 === 3 && <BarChart3 className="w-7 h-7 text-orange-400" />}
          {i % 5 === 4 && <Briefcase className="w-8 h-8 text-cyan-400" />}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Professional Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="bg-black/30 backdrop-blur-md text-white border-blue-500/30 hover:bg-blue-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to HR
              </Button>
              
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center border-4 border-blue-400/30 shadow-2xl">
                    <Calculator className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div>
                  <h1 className="text-5xl font-bold text-white mb-2">Payroll Processing</h1>
                  <p className="text-blue-200 text-lg">Calculate salaries → Bank transfers (Tools: Tally + RPA)</p>
                  <div className="flex items-center space-x-6 mt-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm">Tally Integration Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-300 text-sm">RPA Processing: {Math.round(payrollCycle)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Payroll Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-green-500/20 border-green-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold text-white">${(totalPayrollAmount / 1000000).toFixed(1)}M</div>
                  <div className="text-green-200 text-sm">Total Payroll</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/20 border-blue-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">{totalEmployees.toLocaleString()}</div>
                  <div className="text-blue-200 text-sm">Employees</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Payroll Processing Pipeline */}
        <div className="mb-12">
          <Card className="bg-black/50 backdrop-blur-md border-blue-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
              <CardTitle className="text-white flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-blue-400" />
                Automated Payroll Processing Pipeline
              </CardTitle>
              <CardDescription className="text-blue-200">End-to-end payroll automation with Tally integration</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                {/* Pipeline Flow Line */}
                <div className="absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
                
                <div className="flex justify-between items-start relative">
                  {payrollSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="relative text-center group">
                        {/* Step Circle */}
                        <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center border-4 transition-all duration-300 group-hover:scale-110 ${
                          step.status === 'completed' ? 'bg-green-500 border-green-400 shadow-green-500/50 shadow-2xl' :
                          step.status === 'active' ? 'bg-orange-500 border-orange-400 shadow-orange-500/50 shadow-2xl animate-pulse' :
                          'bg-gray-500 border-gray-400'
                        }`}>
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        
                        {/* Step Info */}
                        <div className="mt-4 max-w-32">
                          <h4 className="text-white font-semibold text-sm mb-2">{step.step}</h4>
                          <p className="text-gray-300 text-xs mb-1">{step.duration}</p>
                          <Badge className={`text-xs ${
                            step.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            step.status === 'active' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {step.amount}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Analysis & Recent Payrolls */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Department Breakdown */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-indigo-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Building className="w-6 h-6 mr-3 text-indigo-400" />
                  Department Payroll Analysis
                </CardTitle>
                <CardDescription className="text-indigo-200">Budget utilization and salary distribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 border border-gray-700 rounded-lg bg-gray-800/30">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">{dept.name}</h3>
                        <p className="text-gray-300 text-sm">{dept.employees} employees • {dept.avgSalary} avg</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold text-lg">{dept.totalPay}</p>
                        <p className="text-gray-400 text-sm">Budget: {dept.budget}</p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Budget Utilization</span>
                        <span className="text-white">{dept.utilization}%</span>
                      </div>
                      <Progress value={dept.utilization} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold">{dept.employees}</div>
                        <div className="text-gray-400">Employees</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-semibold">{dept.avgSalary}</div>
                        <div className="text-gray-400">Avg Salary</div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-400 font-semibold">{dept.utilization}%</div>
                        <div className="text-gray-400">Budget Used</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Payroll Runs */}
          <div>
            <Card className="bg-black/40 backdrop-blur-md border-green-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-green-400" />
                  Recent Payroll Runs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPayrolls.map((payroll, index) => (
                  <div key={payroll.id} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${getStatusColor(payroll.status)} text-white`}>
                        {payroll.status.charAt(0).toUpperCase() + payroll.status.slice(1)}
                      </Badge>
                      <span className="text-gray-400 text-xs">{payroll.id}</span>
                    </div>
                    
                    <h4 className="text-white font-semibold mb-2">{payroll.period}</h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Employees:</span>
                        <span className="text-white">{payroll.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Gross:</span>
                        <span className="text-green-400">{payroll.gross}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Net:</span>
                        <span className="text-blue-400">{payroll.net}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        <p>Processed: {payroll.processedAt}</p>
                        <p>Transferred: {payroll.transferredAt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Live Processing Status */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Live Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Current Cycle</span>
                    <span className="text-white font-bold">March 2024</span>
                  </div>
                  <Progress value={payrollCycle} className="h-3" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{Math.round(payrollCycle)}%</div>
                    <div className="text-blue-200 text-sm">Processing {totalEmployees} employees</div>
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
              <TrendingUp className="w-6 h-6 mr-3 text-gray-400" />
              Payroll Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {payrollMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="text-center p-4 border border-gray-700 rounded-lg bg-gray-800/20">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-gray-300 text-sm mb-2">{metric.metric}</div>
                    <Badge className={`text-xs ${
                      (metric.trend.startsWith('+') && !metric.metric.includes('Time') && !metric.metric.includes('Cost')) || 
                      (metric.trend.startsWith('-') && (metric.metric.includes('Time') || metric.metric.includes('Cost')))
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
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
        @keyframes payroll-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.15; 
          }
          25% { 
            transform: translateY(-35px) rotate(90deg) scale(1.1); 
            opacity: 0.25; 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg) scale(0.9); 
            opacity: 0.2; 
          }
          75% { 
            transform: translateY(-45px) rotate(270deg) scale(1.05); 
            opacity: 0.3; 
          }
        }
        .animate-payroll-float {
          animation: payroll-float 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PayrollProcessingScreen;