import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Package, Truck, CheckCircle, Clock, AlertTriangle, FileText, Users, DollarSign, TrendingDown, BarChart3, Zap, MapPin, Calendar, Shield, Search, Filter, Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ReturnsProcessingScreen = () => {
  const [totalReturns, setTotalReturns] = useState(234);
  const [processedReturns, setProcessedReturns] = useState(198);
  const [shippedReturns, setShippedReturns] = useState(156);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [automationRate, setAutomationRate] = useState(94.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalReturns(prev => prev + Math.floor(Math.random() * 3));
      setProcessedReturns(prev => prev + Math.floor(Math.random() * 2));
      setShippedReturns(prev => prev + (Math.random() > 0.8 ? 1 : 0));
      setProcessingProgress(prev => prev >= 100 ? 0 : prev + 1.8);
      setAutomationRate(prev => Math.max(90, Math.min(98, prev + (Math.random() - 0.5) * 0.5)));
    }, 2800);
    
    return () => clearInterval(interval);
  }, []);

  const returnsSteps = [
    { name: 'Return Request Validation', icon: FileText, status: 'completed', time: '8s', accuracy: 97.5 },
    { name: 'Eligibility Check', icon: Shield, status: 'completed', time: '12s', accuracy: 96.8 },
    { name: 'Label Generation', icon: Package, status: 'active', time: '15s', accuracy: 99.2 },
    { name: 'USPS API Integration', icon: Truck, status: 'pending', time: '6s', accuracy: 98.9 },
    { name: 'Tracking Setup', icon: MapPin, status: 'pending', time: '4s', accuracy: 99.7 }
  ];

  const returnReasons = [
    { reason: 'Defective Product', count: 89, percentage: 38, color: 'from-red-500 to-red-600', refundRate: '95%' },
    { reason: 'Wrong Item Sent', count: 52, percentage: 22, color: 'from-orange-500 to-orange-600', refundRate: '100%' },
    { reason: 'Not as Described', count: 43, percentage: 18, color: 'from-yellow-500 to-yellow-600', refundRate: '78%' },
    { reason: 'Changed Mind', count: 31, percentage: 13, color: 'from-blue-500 to-blue-600', refundRate: '85%' },
    { reason: 'Size Issues', count: 19, percentage: 9, color: 'from-purple-500 to-purple-600', refundRate: '92%' }
  ];

  const recentReturns = [
    {
      id: 'RET-2024-5671',
      customer: 'Sarah Johnson',
      product: 'Wireless Headphones',
      orderDate: '2024-01-10',
      returnDate: '2024-01-15',
      reason: 'Defective',
      status: 'label-generated',
      refundAmount: '$149.99',
      trackingNumber: 'USPS-789456123',
      platform: 'Shopify'
    },
    {
      id: 'RET-2024-5672',
      customer: 'Michael Chen',
      product: 'Gaming Mouse',
      orderDate: '2024-01-08',
      returnDate: '2024-01-14',
      reason: 'Wrong Item',
      status: 'in-transit',
      refundAmount: '$79.99',
      trackingNumber: 'USPS-654321789',
      platform: 'Amazon'
    },
    {
      id: 'RET-2024-5673',
      customer: 'Emma Davis',
      product: 'Bluetooth Speaker',
      orderDate: '2024-01-05',
      returnDate: '2024-01-12',
      reason: 'Not as Described',
      status: 'received',
      refundAmount: '$89.99',
      trackingNumber: 'USPS-987654321',
      platform: 'eBay'
    },
    {
      id: 'RET-2024-5674',
      customer: 'James Wilson',
      product: 'Smart Watch',
      orderDate: '2024-01-03',
      returnDate: '2024-01-11',
      reason: 'Changed Mind',
      status: 'refund-processed',
      refundAmount: '$299.99',
      trackingNumber: 'USPS-123789456',
      platform: 'Shopify'
    }
  ];

  const carrierMetrics = [
    { carrier: 'USPS Priority', returns: 89, avgTime: '2-3 days', cost: '$8.95', reliability: 96.5 },
    { carrier: 'USPS Ground', returns: 67, avgTime: '5-7 days', cost: '$5.95', reliability: 94.2 },
    { carrier: 'UPS Return', returns: 45, avgTime: '3-5 days', cost: '$12.50', reliability: 98.1 },
    { carrier: 'FedEx Return', returns: 33, avgTime: '2-4 days', cost: '$11.25', reliability: 97.8 }
  ];

  const platformMetrics = [
    { platform: 'Shopify', returns: 98, processed: 92, rate: '4.2%', avgTime: '18min' },
    { platform: 'Amazon', returns: 76, processed: 71, rate: '3.8%', avgTime: '22min' },
    { platform: 'eBay', returns: 41, processed: 35, rate: '5.1%', avgTime: '25min' },
    { platform: 'Etsy', returns: 19, processed: 0, rate: '2.9%', avgTime: '15min' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Returns Processing Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        
        {/* Return Path Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <path
                  d={`M ${i * 125 + 50},100 Q ${i * 125 + 100},300 ${i * 125 + 150},500 Q ${i * 125 + 200},700 ${i * 125 + 250},900`}
                  stroke="rgba(6,182,212,0.3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                <circle
                  cx={i * 125 + 100}
                  cy={200 + i * 50}
                  r="3"
                  fill="rgba(99,102,241,0.4)"
                  className="animate-ping"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating Returns & Shipping Icons */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${16 + Math.random() * 6}s`
            }}
          >
            {i % 6 === 0 && <RotateCcw className="w-6 h-6 text-cyan-400" />}
            {i % 6 === 1 && <Package className="w-7 h-7 text-blue-400" />}
            {i % 6 === 2 && <Truck className="w-5 h-5 text-indigo-400" />}
            {i % 6 === 3 && <FileText className="w-6 h-6 text-cyan-300" />}
            {i % 6 === 4 && <MapPin className="w-8 h-8 text-blue-300" />}
            {i % 6 === 5 && <Shield className="w-6 h-6 text-indigo-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Retail
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Returns Processing
              </h1>
              <p className="text-cyan-200 text-lg">Validate requests → Generate labels with USPS API</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-2">
              <RotateCcw className="w-4 h-4 mr-1" />
              UiPath + USPS
            </Badge>
            <div className="text-3xl font-bold text-white">{automationRate.toFixed(1)}%</div>
            <div className="text-cyan-200">Automation Rate</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400">{totalReturns}</div>
              <div className="text-cyan-200 text-sm">Return Requests</div>
              <div className="text-green-400 text-xs mt-1">+5% from last week</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400">{processedReturns}</div>
              <div className="text-blue-200 text-sm">Processed</div>
              <div className="text-blue-400 text-xs mt-1">{((processedReturns / totalReturns) * 100).toFixed(1)}% success rate</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border-indigo-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-indigo-400">{shippedReturns}</div>
              <div className="text-indigo-200 text-sm">Labels Generated</div>
              <div className="text-indigo-400 text-xs mt-1">{((shippedReturns / processedReturns) * 100).toFixed(1)}% shipped</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">$45K</div>
              <div className="text-purple-200 text-sm">Refund Value</div>
              <div className="text-purple-400 text-xs mt-1">This month</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Returns Processing Pipeline */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30">
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-cyan-400" />
                  UiPath + USPS API Processing
                </CardTitle>
                <CardDescription className="text-cyan-200">
                  Automated return validation and shipping label generation
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {processingProgress.toFixed(0)}%
                    </div>
                    <div className="text-cyan-200 mb-4">Current Return Processing</div>
                    <Progress value={processingProgress} className="h-4" />
                  </div>

                  {/* Processing Steps */}
                  <div className="space-y-6">
                    {returnsSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-cyan-500/20 border-2 border-cyan-500' :
                            isActive ? 'bg-blue-500/20 border-2 border-blue-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-cyan-400' :
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
                                isCompleted ? 'text-cyan-400' :
                                isActive ? 'text-blue-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-cyan-500/50 text-cyan-400' :
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
                              <Progress value={processingProgress} className="h-2" />
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

          {/* Return Reasons & Quick Stats */}
          <div className="space-y-6">
            {/* Return Reasons */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Return Reasons</CardTitle>
                <CardDescription className="text-cyan-200">Distribution of return categories</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {returnReasons.map((reason, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{reason.reason}</span>
                      <div className="text-right">
                        <span className="text-white font-bold text-sm">{reason.count}</span>
                        <div className="text-green-400 text-xs">{reason.refundRate}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${reason.color}`}
                        style={{ width: `${reason.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Statistics */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Processing Stats</CardTitle>
                <CardDescription className="text-blue-200">System performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-cyan-400">18min</div>
                    <div className="text-cyan-200 text-sm">Avg Process Time</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400">96.8%</div>
                    <div className="text-blue-200 text-sm">Success Rate</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400">$8.95</div>
                  <div className="text-cyan-200 text-sm">Avg Shipping Cost</div>
                  <div className="text-cyan-300 text-xs mt-1">USPS integrated</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Platform Performance */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-cyan-400" />
              Platform Performance
            </CardTitle>
            <CardDescription className="text-cyan-200">
              Return processing across e-commerce platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              {platformMetrics.map((platform, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">{platform.platform}</div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">{platform.returns}</div>
                    <div className="text-cyan-200 text-xs">Returns</div>
                    <div className="text-lg font-bold text-cyan-400">{platform.processed}</div>
                    <div className="text-cyan-300 text-xs">Processed</div>
                    <div className="flex justify-between text-xs">
                      <span className="text-red-400">{platform.rate}</span>
                      <span className="text-blue-400">{platform.avgTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Carrier Performance & Recent Returns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Carrier Performance */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Truck className="w-6 h-6 mr-3 text-blue-400" />
                Carrier Performance
              </CardTitle>
              <CardDescription className="text-cyan-200">Shipping partner metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carrierMetrics.map((carrier, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{carrier.carrier}</h3>
                      <Badge className={`${
                        carrier.reliability > 97 ? 'bg-green-500/20 text-green-400' :
                        carrier.reliability > 95 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {carrier.reliability}% reliable
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-white font-bold">{carrier.returns}</div>
                        <div className="text-cyan-200 text-xs">Returns</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold">{carrier.avgTime}</div>
                        <div className="text-cyan-200 text-xs">Delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{carrier.cost}</div>
                        <div className="text-cyan-200 text-xs">Cost</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Returns */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                  Recent Returns
                </CardTitle>
                <CardDescription className="text-cyan-200">Latest processing activity</CardDescription>
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
                {recentReturns.map((returnItem) => (
                  <div key={returnItem.id} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-white font-medium text-sm">{returnItem.product}</div>
                        <div className="text-cyan-200 text-xs">{returnItem.customer} • {returnItem.platform}</div>
                      </div>
                      <Badge className={`${
                        returnItem.status === 'refund-processed' ? 'bg-green-500/20 text-green-400' :
                        returnItem.status === 'received' ? 'bg-blue-500/20 text-blue-400' :
                        returnItem.status === 'in-transit' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {returnItem.status === 'refund-processed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {returnItem.status === 'received' && <Package className="w-3 h-3 mr-1" />}
                        {returnItem.status === 'in-transit' && <Truck className="w-3 h-3 mr-1" />}
                        {returnItem.status === 'label-generated' && <FileText className="w-3 h-3 mr-1" />}
                        {returnItem.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-cyan-200">Reason: </span>
                        <span className="text-white">{returnItem.reason}</span>
                      </div>
                      <div>
                        <span className="text-cyan-200">Refund: </span>
                        <span className="text-white font-bold">{returnItem.refundAmount}</span>
                      </div>
                      <div>
                        <span className="text-cyan-200">Tracking: </span>
                        <span className="text-white font-mono text-xs">{returnItem.trackingNumber}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.08; }
          50% { transform: translateY(-35px) rotate(180deg); opacity: 0.15; }
        }
        .animate-float {
          animation: float 16s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ReturnsProcessingScreen;