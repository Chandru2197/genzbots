import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingCart, TrendingUp, Package, RefreshCw, DollarSign, BarChart3, Zap, Target, Star, Globe, Clock, Users, Eye, Brain, Sparkles, ArrowRight, Play, Pause, AlertCircle, CheckCircle, Timer, Activity, ShoppingBag, Tag, Truck, MousePointer } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedGlass3DCard } from '@/components/enhanced/EnhancedGlass3DCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface RetailService {
  id: string;
  name: string;
  description: string;
  tools: string[];
  aiFeature: string;
  icon: React.ReactNode;
  primaryColor: string;
  accentColor: string;
  gradient: string;
  metrics: {
    roi: string;
    speed: string;
    accuracy: string;
    volume: string;
  };
  features: string[];
  platforms: string[];
  status: 'optimizing' | 'scaling' | 'monitoring';
}

const RetailECommerceServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [salesPulse, setSalesPulse] = useState<number>(0);
  const [priceUpdates, setPriceUpdates] = useState<number>(0);
  const [liveStats, setLiveStats] = useState({
    priceAdjustments: 1247,
    returnsProcessed: 389,
    ordersMatched: 2156,
    revenueOptimized: 847293
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesPulse(prev => prev >= 100 ? 0 : prev + 3);
      setPriceUpdates(prev => prev + Math.floor(Math.random() * 5));
      setLiveStats(prev => ({
        priceAdjustments: prev.priceAdjustments + Math.floor(Math.random() * 8),
        returnsProcessed: prev.returnsProcessed + Math.floor(Math.random() * 3),
        ordersMatched: prev.ordersMatched + Math.floor(Math.random() * 12),
        revenueOptimized: prev.revenueOptimized + Math.floor(Math.random() * 1000)
      }));
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const services: RetailService[] = [
    {
      id: 'dynamic-pricing',
      name: 'Dynamic Pricing',
      description: 'Scrape competitor prices → Adjust Shopify/Amazon listings with AI-powered regression models',
      tools: ['Web Scraping', 'Shopify API', 'Amazon MWS', 'ML Algorithms'],
      aiFeature: 'Regression models for price optimization',
      icon: <DollarSign className="w-8 h-8" />,
      primaryColor: 'text-emerald-600',
      accentColor: 'text-emerald-400',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      metrics: {
        roi: '+34%',
        speed: '5 min',
        accuracy: '96.8%',
        volume: '10K+ products'
      },
      features: [
        'Real-time competitor monitoring',
        'Smart price recommendations',
        'Margin protection rules',
        'Multi-platform synchronization'
      ],
      platforms: ['Shopify', 'Amazon', 'WooCommerce', 'Magento'],
      status: 'optimizing'
    },
    {
      id: 'returns-processing',
      name: 'Returns Processing',
      description: 'Validate requests → Generate labels automatically with intelligent return validation',
      tools: ['UiPath', 'USPS API', 'Return APIs', 'OCR'],
      aiFeature: 'Smart return validation',
      icon: <RefreshCw className="w-8 h-8" />,
      primaryColor: 'text-blue-600',
      accentColor: 'text-blue-400',
      gradient: 'from-blue-400 via-indigo-500 to-purple-600',
      metrics: {
        roi: '+28%',
        speed: '2 min',
        accuracy: '98.3%',
        volume: '500+ daily'
      },
      features: [
        'Automated return authorization',
        'Smart label generation',
        'Fraud detection',
        'Customer communication'
      ],
      platforms: ['All Major Carriers', 'E-commerce Platforms'],
      status: 'scaling'
    },
    {
      id: 'order-reconciliation',
      name: 'Order Reconciliation',
      description: 'Match Amazon/Flipkart orders with warehouses using SQL and RPA automation',
      tools: ['SQL Database', 'RPA Bots', 'Warehouse APIs', 'ERP Systems'],
      aiFeature: 'Intelligent order matching',
      icon: <Package className="w-8 h-8" />,
      primaryColor: 'text-orange-600',
      accentColor: 'text-orange-400',
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      metrics: {
        roi: '+42%',
        speed: '30 sec',
        accuracy: '99.2%',
        volume: '2K+ orders'
      },
      features: [
        'Multi-marketplace sync',
        'Inventory reconciliation',
        'Shipping optimization',
        'Real-time tracking'
      ],
      platforms: ['Amazon', 'Flipkart', 'eBay', 'Walmart'],
      status: 'monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* E-commerce Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Shopping Cart Trails */}
        <div className="absolute top-20 left-10">
          <div className="flex space-x-4 opacity-10">
            {[...Array(5)].map((_, i) => (
              <ShoppingCart 
                key={i} 
                className={`w-12 h-12 text-orange-400 transform rotate-${i * 12}`} 
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>

        {/* Price Tags Pattern */}
        <div className="absolute top-1/3 right-20 opacity-15">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <Tag 
                key={i} 
                className="w-8 h-8 text-pink-400 animate-pulse" 
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>

        {/* Floating Shopping Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <ShoppingBag className="w-6 h-6 text-emerald-400" />}
            {i % 4 === 1 && <Star className="w-5 h-5 text-yellow-400" />}
            {i % 4 === 2 && <Truck className="w-7 h-7 text-blue-400" />}
            {i % 4 === 3 && <MousePointer className="w-4 h-4 text-purple-400" />}
          </div>
        ))}

        {/* Revenue Growth Chart Pattern */}
        <div className="absolute bottom-20 right-32 opacity-10">
          <svg width="200" height="100" viewBox="0 0 200 100">
            <path 
              d="M10 90 Q50 70 100 40 Q150 10 190 20" 
              stroke="url(#revenueGradient)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white border-orange-200 shadow-lg mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full text-white mb-8 shadow-2xl">
              <ShoppingCart className="w-7 h-7 mr-3 animate-bounce" />
              <span className="font-bold text-xl">Retail & E-Commerce Automation</span>
              <Sparkles className="w-6 h-6 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Commerce
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Acceleration
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12">
              Supercharge your e-commerce operations with intelligent automation that optimizes pricing,
              streamlines returns, and synchronizes orders across all platforms in real-time.
            </p>

            {/* Revenue Pulse Monitor */}
            <Card className="max-w-5xl mx-auto bg-gradient-to-r from-white via-orange-50 to-pink-50 border-0 shadow-2xl mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-orange-500" />
                  Live Revenue Optimization
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Watch your sales performance improve in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700 font-semibold">Sales Optimization Progress:</span>
                    <span className="text-orange-600 font-bold text-2xl">{Math.round(salesPulse)}%</span>
                  </div>
                  
                  <div className="relative h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-full transition-all duration-1000 relative"
                      style={{ width: `${salesPulse}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent animate-pulse rounded-full"></div>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-orange-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200 shadow-lg">
                    <DollarSign className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-emerald-700">{liveStats.priceAdjustments.toLocaleString()}</div>
                    <div className="text-sm text-emerald-600 font-medium">Price Adjustments</div>
                    <div className="text-xs text-emerald-500 mt-1">+{Math.floor(Math.random() * 10) + 5}% revenue</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-lg">
                    <RefreshCw className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-700">{liveStats.returnsProcessed}</div>
                    <div className="text-sm text-blue-600 font-medium">Returns Processed</div>
                    <div className="text-xs text-blue-500 mt-1">Auto-handled</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200 shadow-lg">
                    <Package className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-orange-700">{liveStats.ordersMatched.toLocaleString()}</div>
                    <div className="text-sm text-orange-600 font-medium">Orders Matched</div>
                    <div className="text-xs text-orange-500 mt-1">Multi-platform</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 shadow-lg">
                    <BarChart3 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-700">${(liveStats.revenueOptimized / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-purple-600 font-medium">Revenue Optimized</div>
                    <div className="text-xs text-purple-500 mt-1">This month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl mb-12 p-2">
              <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-semibold">
                Service Overview
              </TabsTrigger>
              <TabsTrigger value="platforms" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-semibold">
                Platforms
              </TabsTrigger>
              <TabsTrigger value="performance" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white font-semibold">
                Performance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={service.id} className="mb-8">
                    <EnhancedGlass3DCard
                      title={service.name}
                      description={service.description}
                      icon={service.icon}
                      className="w-full cursor-pointer"
                      onClick={() => setSelectedService(index)}
                    />
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-gray-800 flex items-center text-lg mb-2">
                          <Target className={`w-5 h-5 mr-2 ${service.primaryColor}`} />
                          Key Features:
                        </h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                        <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-l-4 mt-4" style={{borderLeftColor: service.primaryColor.replace('text-', '')}}>
                          <Brain className={`w-8 h-8 ${service.primaryColor}`} />
                          <div>
                            <div className={`font-bold ${service.primaryColor} text-lg`}>AI Enhancement:</div>
                            <div className="text-gray-700">{service.aiFeature}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl mb-2">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 border-2 border-opacity-20`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.roi}</div>
                            <div className="text-sm text-gray-600 font-medium">ROI Increase</div>
                          </div>
                          <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 border-2 border-opacity-20`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.speed}</div>
                            <div className="text-sm text-gray-600 font-medium">Avg Processing</div>
                          </div>
                          <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 border-2 border-opacity-20`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.accuracy}</div>
                            <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
                          </div>
                          <div className={`text-center p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 border-2 border-opacity-20`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.volume}</div>
                            <div className="text-sm text-gray-600 font-medium">Daily Volume</div>
                          </div>
                        </div>
                        <div className="space-y-3 mt-4">
                          <h5 className="font-semibold text-gray-700">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} variant="outline" className="bg-white text-gray-600 border-gray-300">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-xl text-lg py-6 font-semibold mt-4`}>
                          Activate Service
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="platforms">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Shopify', 'Amazon', 'WooCommerce', 'Magento', 'eBay', 'Walmart'].map((platform, index) => (
                  <Card key={platform} className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        {platform.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{platform}</h3>
                      <p className="text-gray-600 mb-4">Fully integrated automation</p>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-green-600 font-semibold">Connected</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="performance">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Activity className="w-7 h-7 mr-3 text-orange-500" />
                      Real-time Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {services.map((service, index) => (
                      <div key={service.id} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">{service.name}</span>
                          <span className={`font-bold ${service.primaryColor}`}>
                            {service.metrics.accuracy}
                          </span>
                        </div>
                        <Progress 
                          value={parseFloat(service.metrics.accuracy)} 
                          className="h-3"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800">Live Updates</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-700 font-medium">Price Updates</span>
                        <span className="text-emerald-600 font-bold">{priceUpdates}</span>
                      </div>
                      <div className="text-sm text-emerald-600 mt-1">Active optimizations</div>
                    </div>
                    
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            service.status === 'optimizing' ? 'bg-green-500' :
                            service.status === 'scaling' ? 'bg-blue-500' : 'bg-purple-500'
                          } animate-pulse`}></div>
                          <span className="text-sm font-medium text-gray-700">
                            {service.name}
                          </span>
                        </div>
                        <span className={`text-xs font-bold ${service.primaryColor}`}>
                          {service.status}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default RetailECommerceServices;