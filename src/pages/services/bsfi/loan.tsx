import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Scan, Brain, CheckCircle, Clock, AlertCircle, Zap, Users, TrendingUp, Download, Upload, Eye, Calendar, DollarSign } from 'lucide-react';
import ReadyToTransform from '@/components/ReadyToTransform';
import { useNavigation } from '@/utils/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const LoanProcessingScreen = () => {
  const { navigateTo } = useNavigation();
  const [activeApplications, setActiveApplications] = useState(247);
  const [processingStage, setProcessingStage] = useState(0);
  const [documentProgress, setDocumentProgress] = useState(0);
  const [approvalRate, setApprovalRate] = useState(78.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setDocumentProgress(prev => prev >= 100 ? 0 : prev + 1.5);
      setProcessingStage(prev => (prev + 1) % 5);
      setActiveApplications(prev => prev + Math.floor(Math.random() * 3) - 1);
      setApprovalRate(prev => Math.max(75, Math.min(85, prev + (Math.random() - 0.5) * 2)));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const processStages = [
    { name: 'Document Upload', icon: Upload, status: 'completed', time: '2s' },
    { name: 'OCR Scanning', icon: Scan, status: 'active', time: '8s' },
    { name: 'KYC Extraction', icon: Brain, status: 'pending', time: '12s' },
    { name: 'Credit Analysis', icon: TrendingUp, status: 'pending', time: '15s' },
    { name: 'Final Approval', icon: CheckCircle, status: 'pending', time: '3s' }
  ];

  const todayStats = [
    { label: 'Applications Received', value: '1,847', change: '+12%', trend: 'up' },
    { label: 'Auto-Approved', value: '1,449', change: '+8%', trend: 'up' },
    { label: 'Manual Review', value: '298', change: '-5%', trend: 'down' },
    { label: 'Rejected', value: '100', change: '-15%', trend: 'down' }
  ];

  const recentApplications = [
    { id: 'LA-2024-8947', name: 'Sarah Johnson', amount: '$45,000', status: 'approved', score: 785, time: '2m ago' },
    { id: 'LA-2024-8948', name: 'Michael Chen', amount: '$67,500', status: 'processing', score: 742, time: '5m ago' },
    { id: 'LA-2024-8949', name: 'Emma Davis', amount: '$32,000', status: 'review', score: 698, time: '8m ago' },
    { id: 'LA-2024-8950', name: 'James Wilson', amount: '$89,000', status: 'approved', score: 812, time: '12m ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-hidden mt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Document Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            <FileText className="w-8 h-8 text-white" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white"
              onClick={() => navigateTo('/product')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to BFSI
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Loan Application Processing
              </h1>
              <p className="text-blue-200 text-lg">Auto-extract KYC data → Credit scoring → Approval</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-2">
              <Zap className="w-4 h-4 mr-1" />
              Live Processing
            </Badge>
            <div className="text-3xl font-bold text-white">{activeApplications}</div>
            <div className="text-blue-200">Active Applications</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Processing Pipeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Real-time Processing Flow */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-cyan-400" />
                  AI-Powered Processing Pipeline
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Real-time document processing with UiPath + Abbyy OCR
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {processStages.map((stage, index) => {
                    const IconComponent = stage.icon;
                    const isActive = index === processingStage;
                    const isCompleted = index < processingStage;
                    
                    return (
                      <div key={index} className="flex items-center space-x-6">
                        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isCompleted ? 'bg-green-500/20 border-2 border-green-500' :
                          isActive ? 'bg-blue-500/20 border-2 border-blue-500 animate-pulse' :
                          'bg-gray-500/20 border-2 border-gray-500/30'
                        }`}>
                          <IconComponent className={`w-8 h-8 ${
                            isCompleted ? 'text-green-400' :
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
                              isCompleted ? 'text-green-400' :
                              isActive ? 'text-blue-400' :
                              'text-gray-400'
                            }`}>
                              {stage.name}
                            </h3>
                            <Badge variant="outline" className={`${
                              isCompleted ? 'border-green-500/50 text-green-400' :
                              isActive ? 'border-blue-500/50 text-blue-400' :
                              'border-gray-500/50 text-gray-400'
                            }`}>
                              {stage.time}
                            </Badge>
                          </div>
                          {isActive && (
                            <Progress value={documentProgress} className="h-2" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Today's Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {todayStats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className={`flex items-center space-x-1 ${
                        stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        <TrendingUp className={`w-4 h-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                        <span className="text-sm font-medium">{stat.change}</span>
                      </div>
                    </div>
                    <p className="text-blue-200 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar - Performance Metrics */}
          <div className="space-y-6">
            {/* Current Performance */}
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white">System Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">{approvalRate.toFixed(1)}%</div>
                  <div className="text-green-200">Auto-Approval Rate</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">Processing Speed</span>
                      <span className="text-green-400">15s avg</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">Accuracy Rate</span>
                      <span className="text-green-400">98.5%</span>
                    </div>
                    <Progress value={98.5} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">Cost Reduction</span>
                      <span className="text-green-400">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Integration */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Integration Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-xl">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">UI</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">UiPath</div>
                    <div className="text-blue-200 text-sm">RPA Platform</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-purple-500/20 rounded-xl">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Scan className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Abbyy OCR</div>
                    <div className="text-purple-200 text-sm">Document Processing</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-green-500/20 rounded-xl">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Credit APIs</div>
                    <div className="text-green-200 text-sm">Scoring Engine</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Applications Table */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Recent Applications</CardTitle>
              <CardDescription className="text-blue-200">Live processing status</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                      {app.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-medium">{app.name}</div>
                      <div className="text-blue-200 text-sm">{app.id}</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-white font-bold">{app.amount}</div>
                    <div className="text-blue-200 text-sm">Loan Amount</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-white font-bold">{app.score}</div>
                    <div className="text-blue-200 text-sm">Credit Score</div>
                  </div>
                  
                  <div className="text-center">
                    <Badge className={`${
                      app.status === 'approved' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                      app.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {app.status === 'approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {app.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                      {app.status === 'review' && <AlertCircle className="w-3 h-3 mr-1" />}
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                    <div className="text-blue-200 text-xs mt-1">{app.time}</div>
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
          productName="Loan Processing" 
          description="Transform your loan processing with our AI-powered automation solution"
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.2; }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoanProcessingScreen;