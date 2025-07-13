import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, AlertTriangle, DollarSign, TrendingUp, CheckCircle, XCircle, Eye, Brain, Zap, Clock, Award, Phone, MessageCircle, Calculator, BarChart3, PieChart as PieChartIcon, LineChart, Activity, Target, Lightbulb, Bell, Lock, Search, FileX, CreditCard, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as RechartsLineChart, Line, Area, AreaChart, Legend } from 'recharts';
import { useRouter } from 'next/router';

interface ErrorType {
  category: string;
  frequency: number;
  avgCost: number;
  totalLoss: number;
  color: string;
  icon: React.ReactNode;
  examples: string[];
}

interface DetectionMetric {
  type: string;
  current: number;
  improved: number;
  savings: number;
  color: string;
}

interface CaseStudy {
  company: string;
  industry: string;
  problem: string;
  solution: string;
  savings: string;
  timeframe: string;
  errorReduction: string;
  avatar: string;
}

const ProfitRescueKit: React.FC = () => {
  const [animatedSavings, setAnimatedSavings] = useState<number>(0);
  const [selectedError, setSelectedError] = useState<number>(0);
  const [realTimeAlerts, setRealTimeAlerts] = useState<number>(0);
  const [showCalculator, setShowCalculator] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState<number>(0);

  // Animate savings counter
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedSavings(prev => prev < 50000 ? prev + 1000 : 50000);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Simulate real-time alerts
  useEffect(() => {
    const alertTimer = setInterval(() => {
      setRealTimeAlerts(prev => prev + 1);
    }, 3000);
    return () => clearInterval(alertTimer);
  }, []);

  // Trigger chart animation
  useEffect(() => {
    setAnimationKey(1);
  }, []);

  const errorTypes: ErrorType[] = [
    {
      category: 'Duplicate Payments',
      frequency: 35,
      avgCost: 1200,
      totalLoss: 42000,
      color: '#ef4444',
      icon: <CreditCard className="w-6 h-6" />,
      examples: ['Double invoicing', 'System glitches', 'Manual entry errors']
    },
    {
      category: 'Billing Discrepancies',
      frequency: 28,
      avgCost: 850,
      totalLoss: 23800,
      color: '#f97316',
      icon: <FileX className="w-6 h-6" />,
      examples: ['Incorrect rates', 'Missing charges', 'Tax calculation errors']
    },
    {
      category: 'Compliance Violations',
      frequency: 22,
      avgCost: 2500,
      totalLoss: 55000,
      color: '#eab308',
      icon: <AlertTriangle className="w-6 h-6" />,
      examples: ['Regulatory fines', 'Audit penalties', 'Documentation gaps']
    },
    {
      category: 'Data Entry Mistakes',
      frequency: 15,
      avgCost: 300,
      totalLoss: 4500,
      color: '#22c55e',
      icon: <Search className="w-6 h-6" />,
      examples: ['Wrong amounts', 'Incorrect dates', 'Mismatched accounts']
    }
  ];

  const detectionMetrics: DetectionMetric[] = [
    { type: 'Error Detection Rate', current: 65, improved: 99.8, savings: 15000, color: '#3b82f6' },
    { type: 'Response Time', current: 72, improved: 2, savings: 8500, color: '#10b981' },
    { type: 'False Positives', current: 25, improved: 1, savings: 5200, color: '#f59e0b' },
    { type: 'Manual Review Time', current: 80, improved: 5, savings: 12000, color: '#8b5cf6' }
  ];

  const monthlyTrend = [
    { month: 'Jan', errors: 145, savings: 8500, detected: 94 },
    { month: 'Feb', errors: 98, savings: 12300, detected: 96 },
    { month: 'Mar', errors: 67, savings: 18700, detected: 98 },
    { month: 'Apr', errors: 23, savings: 28900, detected: 99.2 },
    { month: 'May', errors: 12, savings: 42100, detected: 99.6 },
    { month: 'Jun', errors: 5, savings: 50000, detected: 99.8 }
  ];

  const caseStudies: CaseStudy[] = [
    {
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      problem: 'Lost $85K annually to billing errors and compliance issues',
      solution: 'Implemented AI-powered error detection across all financial processes',
      savings: '$78,000/year',
      timeframe: '3 months',
      errorReduction: '94%',
      avatar: 'MT'
    },
    {
      company: 'Global Finance Corp',
      industry: 'Financial Services',
      problem: 'Manual reconciliation missing 23% of discrepancies',
      solution: 'Automated reconciliation with real-time anomaly detection',
      savings: '$156,000/year',
      timeframe: '2 months',
      errorReduction: '97%',
      avatar: 'GF'
    },
    {
      company: 'RetailMax Inc',
      industry: 'E-commerce',
      problem: 'Inventory and pricing errors causing customer disputes',
      solution: 'Smart monitoring system with predictive error prevention',
      savings: '$89,000/year',
      timeframe: '4 months',
      errorReduction: '91%',
      avatar: 'RM'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms that identify patterns and anomalies',
      metric: '99.8% accuracy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Real-Time Alerts',
      description: 'Instant notifications when potential errors are detected',
      metric: '<2 min response',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Compliance Monitoring',
      description: 'Continuous surveillance of regulatory requirements and standards',
      metric: '100% compliance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Financial Reconciliation',
      description: 'Automated cross-platform financial data verification',
      metric: '95% faster',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const chartData = errorTypes.map((error, index) => ({
    name: error.category,
    value: error.frequency,
    color: error.color,
    gradient: `url(#gradient${index})`,
    isSelected: selectedError === index,
    isHovered: hoveredIndex === index,
    index: index
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const errorData = errorTypes[data.payload.index];
      return (
        <div className="bg-white p-4 rounded-xl shadow-2xl border-0 backdrop-blur-sm">
          <div className="flex items-center mb-2">
            <div 
              className="w-4 h-4 rounded-full mr-2 shadow-lg"
              style={{ backgroundColor: data.payload.color }}
            ></div>
            <span className="font-bold text-gray-800">{data.name}</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{data.value}%</div>
          <div className="text-sm text-gray-600">of all financial errors</div>
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="text-xs text-red-600 font-medium">
              Avg Cost: ${errorData?.avgCost.toLocaleString()}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="font-bold text-sm drop-shadow-lg"
        style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e'];
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #f97316 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-15 animate-pulse delay-3000"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-1/4 opacity-10 animate-bounce">
          <DollarSign className="w-8 h-8 text-red-500" />
        </div>
        <div className="absolute bottom-32 right-1/3 opacity-10 animate-bounce delay-1000">
          <Shield className="w-6 h-6 text-orange-500" />
        </div>
        <div className="absolute top-2/3 left-1/2 opacity-10 animate-bounce delay-2000">
          <AlertTriangle className="w-7 h-7 text-yellow-500" />
        </div>
      </div>


      {/* Hero Section - Dashboard Style */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <Button variant="outline" className="bg-white/80 backdrop-blur-sm hover:bg-white border-red-200 cursor-pointer" onClick={()=>router.push('/solutions')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Button>
      </div>
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 text-lg mb-6">
            <Shield className="w-5 h-5 mr-2" />
            Profit Rescue Kit
          </Badge>
          
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Stop Bleeding Money
            </span>
            <br />
            <span className="text-gray-700">to Hidden Errors</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Advanced AI-driven error detection and financial reconciliation system that prevents 
            costly mistakes before they impact your bottom line.
          </p>
        </div>

        {/* Real-Time Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Live Error Detection */}
          <Card className="col-span-2 bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-2xl flex items-center">
                <Activity className="w-6 h-6 mr-2 text-red-500" />
                Live Error Detection
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 animate-pulse">
                {realTimeAlerts} alerts today
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyTrend}>
                    <defs>
                      <linearGradient id="errorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
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
                      dataKey="errors" 
                      stroke="#ef4444" 
                      fillOpacity={1} 
                      fill="url(#errorGradient)" 
                      strokeWidth={3}
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
            </CardContent>
          </Card>

          {/* Savings Counter */}
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-2xl overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-4 w-4 h-4 bg-white rounded-full opacity-50 animate-pulse delay-2000"></div>
            </div>
            
            <CardContent className="p-8 text-center relative z-10">
              <DollarSign className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Money Rescued</h3>
              <div className="text-5xl font-bold mb-2">
                ${animatedSavings.toLocaleString()}
              </div>
              <p className="text-green-100 mb-6">Average client savings in first 6 months</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm bg-white/20 rounded-lg p-2">
                  <span>Error Reduction</span>
                  <span className="font-bold">95%</span>
                </div>
                <Progress value={95} className="h-3 bg-green-400/30" />
                
                <div className="flex justify-between items-center text-sm bg-white/20 rounded-lg p-2">
                  <span>Detection Speed</span>
                  <span className="font-bold">99.8%</span>
                </div>
                <Progress value={99.8} className="h-3 bg-green-400/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error Types Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Error Categories Pie Chart */}
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl relative">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl flex items-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                <PieChartIcon className="w-8 h-8 mr-3 text-red-500" />
                Common Error Categories
              </CardTitle>
              <CardDescription className="text-lg">Interactive visualization - Click segments to explore</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="h-80 mb-8 relative" style={{ overflow: 'visible' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <defs>
                      {chartData.map((entry, index) => (
                        <linearGradient key={`gradient${index}`} id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                          <stop offset="100%" stopColor={entry.color} stopOpacity={0.6} />
                        </linearGradient>
                      ))}
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.3)"/>
                      </filter>
                    </defs>
                    <Pie 
                      data={chartData}
                      cx="50%" 
                      cy="50%" 
                      labelLine={false}
                      label={CustomLabel}
                      innerRadius={70} 
                      outerRadius={hoveredIndex !== null ? 140 : 130}
                      paddingAngle={3}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                      animationEasing="ease-out"
                      style={{ filter: 'url(#shadow)' }}
                      onMouseEnter={(_, index) => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={`url(#gradient${index})`}
                          stroke={selectedError === index ? '#ffffff' : 'rgba(255,255,255,0.5)'}
                          strokeWidth={selectedError === index ? 6 : 2}
                          style={{ 
                            cursor: 'pointer',
                            filter: hoveredIndex === index ? 'brightness(1.1)' : 'brightness(1)',
                            transform: selectedError === index ? 'scale(1.05)' : 'scale(1)',
                            transformOrigin: 'center',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => setSelectedError(index)}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      content={<CustomTooltip />}
                      wrapperStyle={{ zIndex: 1000 }}
                      allowEscapeViewBox={{ x: true, y: true }}
                      position={{ x: undefined, y: undefined }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                
                {/* Center Information */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white/90 backdrop-blur-sm rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <DollarSign className="w-6 h-6 text-red-500 mb-1" />
                  <div className="text-lg font-bold text-gray-800">100%</div>
                  <div className="text-xs text-gray-600">Financial<br/>Errors</div>
                </div>
              </div>
              
              {/* Enhanced Legend Cards */}
              <div className="grid grid-cols-2 gap-4">
                {errorTypes.map((error, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-500 transform ${
                      selectedError === index 
                        ? 'bg-gradient-to-br from-white to-gray-50 ring-4 ring-offset-2 shadow-2xl scale-105' 
                        : 'bg-white/80 hover:bg-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                    }`}
                    style={{ 
                    //   ringColor: selectedError === index ? error.color : 'transparent',
                    borderColor: selectedError === index ? error.color : 'transparent',
                      boxShadow: selectedError === index 
                        ? `0 15px 30px rgba(0,0,0,0.15), 0 0 0 4px ${error.color}20`
                        : '0 5px 15px rgba(0,0,0,0.1)'
                    }}
                    onClick={() => setSelectedError(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center mb-3">
                      <div 
                        className="w-6 h-6 rounded-lg mr-3 shadow-lg flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${error.color}, ${error.color}80)`,
                          boxShadow: `0 2px 8px ${error.color}40`
                        }}
                      >
                        <div 
                          className="w-3 h-3 rounded-full bg-white"
                          style={{ backgroundColor: error.color }}
                        ></div>
                      </div>
                      <span className="font-bold text-sm text-gray-800">{error.category}</span>
                    </div>
                    
                    <div className="text-center mb-2">
                      <div className="text-xl font-bold" style={{ color: error.color }}>
                        {error.frequency}%
                      </div>
                      <div className="text-xs text-gray-600">of all errors</div>
                    </div>
                    
                    <div className="text-center text-xs text-red-600 font-medium">
                      Avg cost: ${error.avgCost.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Selected Error Details */}
          <Card className="bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-2xl relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, ${errorTypes[selectedError].color} 2px, transparent 2px),
                                 radial-gradient(circle at 80% 20%, ${errorTypes[selectedError].color} 2px, transparent 2px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mr-4 shadow-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${errorTypes[selectedError].color}, ${errorTypes[selectedError].color}80)`,
                    boxShadow: `0 8px 25px ${errorTypes[selectedError].color}40`
                  }}
                >
                  {errorTypes[selectedError].icon}
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {errorTypes[selectedError].category}
                  </CardTitle>
                  <div className="flex items-center mt-2">
                    <div 
                      className="w-3 h-3 rounded-full mr-2 animate-pulse"
                      style={{ backgroundColor: errorTypes[selectedError].color }}
                    ></div>
                    <span className="text-gray-500 text-sm">Real-time monitoring active</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 space-y-6">
              {/* Enhanced Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl text-center relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-200 rounded-full opacity-50"></div>
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    ${errorTypes[selectedError].avgCost.toLocaleString()}
                  </div>
                  <div className="text-xs text-red-700">Average Cost per Error</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl text-center relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-orange-200 rounded-full opacity-50"></div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    ${errorTypes[selectedError].totalLoss.toLocaleString()}
                  </div>
                  <div className="text-xs text-orange-700">Annual Loss Potential</div>
                </div>
              </div>
              
              {/* Enhanced Examples */}
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                  Common Examples:
                </h4>
                <div className="space-y-2">
                  {errorTypes[selectedError].examples.map((example, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 bg-white rounded-lg shadow-sm border-l-4 hover:shadow-md transition-all"
                      style={{ borderLeftColor: errorTypes[selectedError].color }}
                    >
                      <div 
                        className="w-4 h-4 rounded-full mr-3 flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: errorTypes[selectedError].color }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-sm flex-1">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* AI Protection Info */}
              <Alert className="border-0 p-4" style={{ backgroundColor: `${errorTypes[selectedError].color}10` }}>
                <Shield className="h-5 w-5" style={{ color: errorTypes[selectedError].color }} />
                <AlertDescription className="ml-2">
                  <div className="font-semibold text-gray-900 mb-2">AI Protection Impact</div>
                  <div className="text-sm text-gray-700">
                    Our AI system detects <strong>{errorTypes[selectedError].frequency}% of these errors</strong> automatically, 
                    preventing an average loss of <strong>${errorTypes[selectedError].totalLoss.toLocaleString()}</strong> annually.
                  </div>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          How We Protect Your Profits
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-4">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <Badge className="bg-green-100 text-green-800 font-semibold">
                  {feature.metric}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detection Metrics Comparison */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">Before vs After Implementation</CardTitle>
            <CardDescription className="text-lg">See the dramatic improvement in error detection and response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {detectionMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4">{metric.type}</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-xl">
                      <div className="text-sm text-red-600 mb-1">Before</div>
                      <div className="text-2xl font-bold text-red-700">{metric.current}%</div>
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowLeft className="w-6 h-6 text-gray-400 transform rotate-90" />
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-xl">
                      <div className="text-sm text-green-600 mb-1">After</div>
                      <div className="text-2xl font-bold text-green-700">{metric.improved}%</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                    <div className="text-sm text-blue-600">Monthly Savings</div>
                    <div className="text-lg font-bold text-blue-700">
                      ${metric.savings.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Case Studies */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          Success Stories
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {study.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{study.company}</h3>
                    <p className="text-sm text-gray-600">{study.industry}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-xl">
                  <h4 className="font-semibold text-red-800 mb-2">Problem:</h4>
                  <p className="text-red-700 text-sm">{study.problem}</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-2">Solution:</h4>
                  <p className="text-blue-700 text-sm">{study.solution}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">{study.savings}</div>
                    <div className="text-xs text-green-700">Saved</div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <div className="text-sm font-bold text-blue-600">{study.timeframe}</div>
                    <div className="text-xs text-blue-700">Timeline</div>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <div className="text-sm font-bold text-purple-600">{study.errorReduction}</div>
                    <div className="text-xs text-purple-700">Reduction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ROI Calculator */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-2xl w-full mx-4 bg-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-between">
                <span>ROI Calculator</span>
                <Button variant="ghost" onClick={() => setShowCalculator(false)}>
                  <XCircle className="w-6 h-6" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Revenue</label>
                    <input type="number" className="w-full p-3 border rounded-lg" placeholder="$100,000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Error Rate</label>
                    <input type="number" className="w-full p-3 border rounded-lg" placeholder="2.5%" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Average Error Cost</label>
                    <input type="number" className="w-full p-3 border rounded-lg" placeholder="$1,200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Errors</label>
                    <input type="number" className="w-full p-3 border rounded-lg" placeholder="45" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-green-50 rounded-xl">
                <h4 className="text-xl font-bold text-green-800 mb-4">Projected Savings</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">$8,400</div>
                    <div className="text-sm text-green-700">Monthly</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">$100,800</div>
                    <div className="text-sm text-green-700">Annual</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-green-700">Error Reduction</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
                Get Detailed Analysis
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Stop the Financial Bleeding</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Every day you wait, hidden errors are costing your business money. 
            Start protecting your profits today with our advanced error detection system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-red-50 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all px-8 py-4 text-lg font-semibold"
            >
              <Shield className="w-6 h-6 mr-3" />
              Start Error Analysis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-600 shadow-xl px-8 py-4 text-lg font-semibold"
              onClick={() => setShowCalculator(true)}
            >
              <Calculator className="w-6 h-6 mr-3" />
              Calculate Savings
            </Button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-red-100">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>Free error audit</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>24/7 monitoring</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>Instant ROI</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span>99.8% accuracy</span>
            </div>
          </div>
          
          <div className="mt-8 text-red-200">
            <p className="text-sm">
              🚨 Critical: Hidden errors detected every 3 seconds • 🛡️ Protected: $2M+ rescued to date • ⚡ Response: &lt;2 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitRescueKit;