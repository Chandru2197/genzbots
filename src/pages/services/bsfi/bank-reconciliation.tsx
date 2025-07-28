import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator, BarChart3, CheckCircle, AlertTriangle, RefreshCw, Database, FileSpreadsheet, Brain, Zap, TrendingUp, Download, Filter, Search, ArrowUpDown, DollarSign, Calendar, Target } from 'lucide-react';
import ReadyToTransform from '@/components/ReadyToTransform';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';

const BankReconciliationScreen = () => {
  const [totalEntries, setTotalEntries] = useState(15247);
  const [matchedEntries, setMatchedEntries] = useState(14814);
  const [exceptions, setExceptions] = useState(433);
  const [reconciliationProgress, setReconciliationProgress] = useState(0);
  const [matchingAccuracy, setMatchingAccuracy] = useState(97.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalEntries(prev => prev + Math.floor(Math.random() * 5));
      setMatchedEntries(prev => prev + Math.floor(Math.random() * 4));
      setExceptions(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 2));
      setReconciliationProgress(prev => prev >= 100 ? 0 : prev + 1.2);
      setMatchingAccuracy(prev => Math.max(95, Math.min(99.9, prev + (Math.random() - 0.5) * 0.3)));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const reconciliationSteps = [
    { name: 'Statement Import', icon: FileSpreadsheet, status: 'completed', time: '5s', accuracy: 100 },
    { name: 'Data Standardization', icon: RefreshCw, status: 'completed', time: '12s', accuracy: 99.8 },
    { name: 'Fuzzy Matching', icon: Brain, status: 'active', time: '30s', accuracy: 97.2 },
    { name: 'Exception Handling', icon: AlertTriangle, status: 'pending', time: '8s', accuracy: 95.5 },
    { name: 'Final Report', icon: BarChart3, status: 'pending', time: '3s', accuracy: 100 }
  ];

  const exceptionTypes = [
    { type: 'Amount Variance', count: 156, percentage: 36, impact: 'medium', trend: '-5%' },
    { type: 'Date Mismatch', count: 89, percentage: 21, impact: 'low', trend: '+2%' },
    { type: 'Missing Records', count: 112, percentage: 26, impact: 'high', trend: '-8%' },
    { type: 'Duplicate Entries', count: 76, percentage: 17, impact: 'medium', trend: '-12%' }
  ];

  const recentReconciliations = [
    {
      id: 'REC-001',
      account: 'Business Checking - 8721',
      period: 'Jan 2024',
      entries: 2847,
      matched: 2798,
      exceptions: 49,
      status: 'completed',
      accuracy: 98.3,
      completedAt: '2 hours ago'
    },
    {
      id: 'REC-002',
      account: 'Savings Account - 3492',
      period: 'Jan 2024',
      entries: 1256,
      matched: 1234,
      exceptions: 22,
      status: 'processing',
      accuracy: 98.2,
      completedAt: null
    },
    {
      id: 'REC-003',
      account: 'Investment Fund - 7856',
      period: 'Dec 2023',
      entries: 3421,
      matched: 3298,
      exceptions: 123,
      status: 'review',
      accuracy: 96.4,
      completedAt: null
    }
  ];

  const performanceMetrics = [
    { metric: 'Processing Speed', value: '30s', target: '45s', status: 'excellent' },
    { metric: 'Match Accuracy', value: '99.7%', target: '95%', status: 'excellent' },
    { metric: 'Exception Rate', value: '2.8%', target: '5%', status: 'good' },
    { metric: 'Cost Reduction', value: '90%', target: '70%', status: 'excellent' }
  ];

    const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-900 relative overflow-hidden mt-16">
      {/* Financial Data Visualization Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,19,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(75,0,130,0.15),transparent_50%)]"></div>
        
        {/* Data Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {[...Array(400)].map((_, i) => (
              <div key={i} className="border border-purple-400/20"></div>
            ))}
          </div>
        </div>

        {/* Floating Calculator & Chart Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${18 + Math.random() * 12}s`
            }}
          >
            {i % 4 === 0 && <Calculator className="w-8 h-8 text-purple-400" />}
            {i % 4 === 1 && <BarChart3 className="w-7 h-7 text-indigo-400" />}
            {i % 4 === 2 && <Database className="w-9 h-9 text-violet-400" />}
            {i % 4 === 3 && <DollarSign className="w-6 h-6 text-purple-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button 
              onClick={()=> navigateTo('/product')} 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to BFSI
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Bank Reconciliation
              </h1>
              <p className="text-purple-200 text-lg">Match statements with ERP entries using AI fuzzy matching</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2">
              <Brain className="w-4 h-4 mr-1" />
              AI Matching
            </Badge>
            <div className="text-3xl font-bold text-white">{matchingAccuracy.toFixed(1)}%</div>
            <div className="text-purple-200">Match Accuracy</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400">{matchedEntries.toLocaleString()}</div>
              <div className="text-green-200 text-sm">Entries Matched</div>
              <div className="text-green-400 text-xs mt-1">
                {((matchedEntries / totalEntries) * 100).toFixed(1)}% success rate
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400">{totalEntries.toLocaleString()}</div>
              <div className="text-blue-200 text-sm">Total Entries</div>
              <div className="text-blue-400 text-xs mt-1">Daily processing volume</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-400">{exceptions}</div>
              <div className="text-orange-200 text-sm">Exceptions</div>
              <div className="text-orange-400 text-xs mt-1">Requiring manual review</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">30s</div>
              <div className="text-purple-200 text-sm">Avg Process Time</div>
              <div className="text-green-400 text-xs mt-1">33% faster than target</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Processing Monitor */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-purple-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30">
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-purple-400" />
                  AI Fuzzy Matching Engine
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Real-time statement matching with machine learning
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {reconciliationProgress.toFixed(0)}%
                    </div>
                    <div className="text-purple-200 mb-4">Current Batch Progress</div>
                    <Progress value={reconciliationProgress} className="h-4" />
                  </div>

                  {/* Process Steps */}
                  <div className="space-y-6">
                    {reconciliationSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-purple-500/20 border-2 border-purple-500' :
                            isActive ? 'bg-blue-500/20 border-2 border-blue-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-purple-400' :
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
                                isCompleted ? 'text-purple-400' :
                                isActive ? 'text-blue-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-purple-500/50 text-purple-400' :
                                  isActive ? 'border-blue-500/50 text-blue-400' :
                                  'border-gray-500/50 text-gray-400'
                                }`}>
                                  {step.time}
                                </Badge>
                                <Badge variant="outline" className={`${
                                  step.accuracy > 98 ? 'border-green-500/50 text-green-400' :
                                  step.accuracy > 95 ? 'border-yellow-500/50 text-yellow-400' :
                                  'border-red-500/50 text-red-400'
                                }`}>
                                  {step.accuracy}%
                                </Badge>
                              </div>
                            </div>
                            {isActive && (
                              <Progress value={reconciliationProgress} className="h-2" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Exception Analysis */}
          <div className="space-y-6">
            {/* Exception Types */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Exception Analysis</CardTitle>
                <CardDescription className="text-purple-200">Breakdown of unmatched entries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {exceptionTypes.map((exception, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{exception.type}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold text-sm">{exception.count}</span>
                        <Badge className={`text-xs ${
                          exception.trend.startsWith('+') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {exception.trend}
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          exception.impact === 'high' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                          exception.impact === 'medium' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                          'bg-gradient-to-r from-yellow-500 to-yellow-600'
                        }`}
                        style={{ width: `${exception.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Performance */}
            <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/30">
              <CardHeader>
                <CardTitle className="text-white">Performance Metrics</CardTitle>
                <CardDescription className="text-indigo-200">System efficiency indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-white font-medium text-sm">{metric.metric}</div>
                      <div className="text-indigo-200 text-xs">Target: {metric.target}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${
                        metric.status === 'excellent' ? 'text-green-400' :
                        metric.status === 'good' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {metric.value}
                      </div>
                      <div className={`text-xs ${
                        metric.status === 'excellent' ? 'text-green-300' :
                        metric.status === 'good' ? 'text-yellow-300' :
                        'text-red-300'
                      }`}>
                        {metric.status}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integration Tools */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">SAP Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-200 text-sm">Connection</span>
                <Badge className="bg-green-500/20 text-green-400 text-xs">Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200 text-sm">Data Sync</span>
                <span className="text-blue-400 font-bold text-sm">Real-time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200 text-sm">Last Update</span>
                <span className="text-blue-300 text-sm">2 sec ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Excel Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-green-200 text-sm">Files Processed</span>
                <span className="text-green-400 font-bold text-sm">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200 text-sm">Success Rate</span>
                <span className="text-green-400 font-bold text-sm">99.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200 text-sm">Avg Size</span>
                <span className="text-green-300 text-sm">2.4 MB</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">AI Matching</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-purple-200 text-sm">Algorithm</span>
                <span className="text-purple-400 font-bold text-sm">Fuzzy Logic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-200 text-sm">Confidence</span>
                <span className="text-purple-400 font-bold text-sm">97.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-200 text-sm">Learning</span>
                <Badge className="bg-purple-500/20 text-purple-400 text-xs">Adaptive</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg">Data Quality</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-orange-200 text-sm">Validation</span>
                <span className="text-orange-400 font-bold text-sm">98.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-200 text-sm">Standardization</span>
                <span className="text-orange-400 font-bold text-sm">99.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-200 text-sm">Clean Records</span>
                <span className="text-orange-300 text-sm">14,814</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reconciliations */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-purple-400" />
                Recent Reconciliations
              </CardTitle>
              <CardDescription className="text-purple-200">Account reconciliation status and results</CardDescription>
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
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReconciliations.map((rec) => (
                <div key={rec.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="grid grid-cols-6 gap-6 items-center">
                    <div>
                      <div className="text-white font-medium">{rec.id}</div>
                      <div className="text-purple-200 text-sm">{rec.account}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{rec.period}</div>
                      <div className="text-purple-200 text-sm">Period</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{rec.entries.toLocaleString()}</div>
                      <div className="text-purple-200 text-sm">Total Entries</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-green-400 font-bold">{rec.matched.toLocaleString()}</div>
                      <div className="text-green-300 text-sm">Matched</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-orange-400 font-bold">{rec.exceptions}</div>
                      <div className="text-orange-300 text-sm">Exceptions</div>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`mb-2 ${
                        rec.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        rec.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        {rec.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {rec.status === 'processing' && <RefreshCw className="w-3 h-3 mr-1 animate-spin" />}
                        {rec.status === 'review' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {rec.status.charAt(0).toUpperCase() + rec.status.slice(1)}
                      </Badge>
                      <div className="text-white text-sm font-bold">{rec.accuracy}%</div>
                      {rec.completedAt && (
                        <div className="text-gray-400 text-xs">{rec.completedAt}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ready to Transform Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ReadyToTransform 
          productName="Bank Reconciliation" 
          description="Discover how our AI-powered reconciliation can streamline your financial operations"
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-60px) rotate(360deg); opacity: 0.4; }
        }
        .animate-float {
          animation: float 30s ease-in-out infinite;
        }
        .grid-cols-20 {
          grid-template-columns: repeat(20, minmax(0, 1fr));
        }
        .grid-rows-20 {
          grid-template-rows: repeat(20, minmax(0, 1fr));
        }
      `}</style>
    </div>
  );
};

export default BankReconciliationScreen;