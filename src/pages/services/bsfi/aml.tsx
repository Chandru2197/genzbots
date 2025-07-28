import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, AlertTriangle, Activity, Eye, Zap, Globe, Users, TrendingUp, Search, Filter, Bell, Lock, Database, Radar } from 'lucide-react';
import ReadyToTransform from '@/components/ReadyToTransform';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';

const AMLMonitoringScreen = () => {
  const [transactionVolume, setTransactionVolume] = useState(47832);
  const [suspiciousAlerts, setSuspiciousAlerts] = useState(23);
  const [riskScore, setRiskScore] = useState(7.2);
  const [scanningProgress, setScanningProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactionVolume(prev => prev + Math.floor(Math.random() * 5));
      setSuspiciousAlerts(prev => Math.random() > 0.95 ? prev + 1 : prev);
      setRiskScore(prev => Math.max(0, Math.min(10, prev + (Math.random() - 0.5) * 0.5)));
      setScanningProgress(prev => prev >= 100 ? 0 : prev + 2);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const riskLevels = [
    { level: 'Critical', count: 3, color: 'from-red-500 to-red-600', percentage: 12 },
    { level: 'High', count: 8, color: 'from-orange-500 to-orange-600', percentage: 32 },
    { level: 'Medium', count: 12, color: 'from-yellow-500 to-yellow-600', percentage: 48 },
    { level: 'Low', count: 7, color: 'from-green-500 to-green-600', percentage: 28 }
  ];

  const recentAlerts = [
    { id: 'AML-001', type: 'Unusual Pattern', entity: 'Account #****8721', risk: 'High', time: '2m ago', amount: '$45,000' },
    { id: 'AML-002', type: 'Velocity Check', entity: 'Corporate XYZ', risk: 'Critical', time: '5m ago', amount: '$180,000' },
    { id: 'AML-003', type: 'Geographic Risk', entity: 'Account #****3492', risk: 'Medium', time: '8m ago', amount: '$12,500' },
    { id: 'AML-004', type: 'Cross-Border', entity: 'Trade LLC', risk: 'High', time: '12m ago', amount: '$67,800' }
  ];

  const monitoringRegions = [
    { region: 'North America', transactions: 18500, alerts: 8, status: 'stable' },
    { region: 'Europe', transactions: 12400, alerts: 5, status: 'stable' },
    { region: 'Asia Pacific', transactions: 9800, alerts: 7, status: 'elevated' },
    { region: 'Middle East', transactions: 4200, alerts: 3, status: 'watch' },
    { region: 'Latin America', transactions: 2932, alerts: 0, status: 'stable' }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden mt-16">
      {/* Cybersecurity Network Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,165,0,0.1),transparent_50%)]"></div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"
              style={{
                top: `${(i + 1) * 12.5}%`,
                left: '0',
                right: '0',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        {/* Floating Security Icons */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          >
            {i % 3 === 0 && <Shield className="w-6 h-6 text-red-400" />}
            {i % 3 === 1 && <Lock className="w-5 h-5 text-orange-400" />}
            {i % 3 === 2 && <Radar className="w-7 h-7 text-yellow-400" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 hover:text-white"
              onClick={() => navigateTo('/product')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to BFSI
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                AML Monitoring
              </h1>
              <p className="text-red-200 text-lg">Scan transactions → Flag suspicious activity</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                <Activity className="w-4 h-4 mr-1" />
                Live Monitoring
              </Badge>
            </div>
            <div className="text-3xl font-bold text-white">{transactionVolume.toLocaleString()}</div>
            <div className="text-red-200">Transactions Scanned</div>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Real-time Threat Radar */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-red-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-red-600/30 to-orange-600/30">
                <CardTitle className="text-white flex items-center">
                  <Radar className="w-6 h-6 mr-3 text-red-400" />
                  Threat Detection Radar
                </CardTitle>
                <CardDescription className="text-red-200">
                  AI-powered anomaly detection in real-time
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative">
                  {/* Radar Circle */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-red-500/30"></div>
                    <div className="absolute inset-4 rounded-full border border-red-500/20"></div>
                    <div className="absolute inset-8 rounded-full border border-red-500/10"></div>
                    <div className="absolute inset-12 rounded-full border border-red-500/5"></div>
                    
                    {/* Scanning Line */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-red-500 to-transparent origin-left animate-spin"
                      style={{ animationDuration: '4s' }}
                    />
                    
                    {/* Risk Points */}
                    <div className="absolute top-16 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <div className="absolute bottom-24 left-16 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    <div className="absolute top-32 left-24 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    
                    {/* Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="text-center mt-6">
                    <div className="text-2xl font-bold text-red-400 mb-2">Risk Level: {riskScore.toFixed(1)}</div>
                    <div className="text-red-200">System Status: Monitoring</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Distribution & Scanning Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Risk Distribution */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Risk Distribution</CardTitle>
                <CardDescription className="text-orange-200">Current alert classification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {riskLevels.map((risk, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${risk.color}`}></div>
                      <span className="text-white font-medium">{risk.level}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${risk.color}`}
                          style={{ width: `${risk.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-bold w-8">{risk.count}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Scanning Progress */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-400" />
                  Real-time Scanning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Current Batch</span>
                    <span className="text-green-400">{scanningProgress.toFixed(0)}%</span>
                  </div>
                  <Progress value={scanningProgress} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-500/20 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">{suspiciousAlerts}</div>
                    <div className="text-green-300 text-sm">Alerts Today</div>
                  </div>
                  <div className="text-center p-3 bg-blue-500/20 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">99.2%</div>
                    <div className="text-blue-300 text-sm">Accuracy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Geographic Monitoring */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Globe className="w-6 h-6 mr-3 text-blue-400" />
              Global Transaction Monitoring
            </CardTitle>
            <CardDescription className="text-blue-200">
              Regional risk assessment and transaction volumes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              {monitoringRegions.map((region, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="mb-3">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      region.status === 'stable' ? 'bg-green-500/20 border-2 border-green-500' :
                      region.status === 'elevated' ? 'bg-orange-500/20 border-2 border-orange-500' :
                      'bg-yellow-500/20 border-2 border-yellow-500'
                    }`}>
                      <Globe className={`w-6 h-6 ${
                        region.status === 'stable' ? 'text-green-400' :
                        region.status === 'elevated' ? 'text-orange-400' :
                        'text-yellow-400'
                      }`} />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{region.region}</div>
                  <div className="text-2xl font-bold text-white mb-1">{region.transactions.toLocaleString()}</div>
                  <div className="text-blue-200 text-xs mb-2">Transactions</div>
                  <Badge className={`text-xs ${
                    region.status === 'stable' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    region.status === 'elevated' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  }`}>
                    {region.alerts} alerts
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts & Tools Integration */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />
                    Recent Alerts
                  </CardTitle>
                  <CardDescription className="text-red-200">Suspicious activity detection</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          alert.risk === 'Critical' ? 'bg-red-500/20 border-2 border-red-500' :
                          alert.risk === 'High' ? 'bg-orange-500/20 border-2 border-orange-500' :
                          'bg-yellow-500/20 border-2 border-yellow-500'
                        }`}>
                          <AlertTriangle className={`w-6 h-6 ${
                            alert.risk === 'Critical' ? 'text-red-400' :
                            alert.risk === 'High' ? 'text-orange-400' :
                            'text-yellow-400'
                          }`} />
                        </div>
                        <div>
                          <div className="text-white font-medium">{alert.type}</div>
                          <div className="text-blue-200 text-sm">{alert.entity}</div>
                          <div className="text-gray-400 text-xs">{alert.id}</div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-white font-bold">{alert.amount}</div>
                        <div className="text-blue-200 text-sm">Amount</div>
                      </div>
                      
                      <div className="text-center">
                        <Badge className={`${
                          alert.risk === 'Critical' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                          alert.risk === 'High' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                          'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                        }`}>
                          {alert.risk}
                        </Badge>
                        <div className="text-gray-400 text-xs mt-1">{alert.time}</div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                        <Eye className="w-4 h-4 mr-2" />
                        Investigate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Tools & System Status */}
          <div className="space-y-6">
            {/* AI Detection Engine */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">AI Detection Engine</CardTitle>
                <CardDescription className="text-purple-200">Anomaly detection system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-purple-500/20 rounded-xl">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Pattern Recognition</div>
                    <div className="text-purple-200 text-sm">Active</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-xl">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">ML Models</div>
                    <div className="text-blue-200 text-sm">Behavioral Analysis</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-green-500/20 rounded-xl">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Real-time API</div>
                    <div className="text-green-200 text-sm">Stream Processing</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">System Health</CardTitle>
                <CardDescription className="text-blue-200">Monitoring infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Detection Engine</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white">Database Sync</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-white">Alert System</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.8%</div>
                    <div className="text-green-200 text-sm">System Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Ready to Transform Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ReadyToTransform />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-40px) rotate(360deg); opacity: 0.3; }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AMLMonitoringScreen;