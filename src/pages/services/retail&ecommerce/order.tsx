import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Warehouse, CheckCircle, Clock, AlertTriangle, BarChart3, Truck, Package, Users, Calendar, Database, ArrowUpDown, Search, Filter, Download, RefreshCw, Target } from 'lucide-react';
import { BackToParent } from '@/components/ui/BackToParent';
import { ROUTES } from '@/utils/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ReadyToTransform from '@/components/ReadyToTransform';

const OrderReconciliationScreen = () => {
  const [totalOrders, setTotalOrders] = useState(8900);
  const [matchedOrders, setMatchedOrders] = useState(8756);
  const [fulfilledOrders, setFulfilledOrders] = useState(8234);
  const [reconciliationProgress, setReconciliationProgress] = useState(0);
  const [matchAccuracy, setMatchAccuracy] = useState(98.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalOrders(prev => prev + Math.floor(Math.random() * 4));
      setMatchedOrders(prev => prev + Math.floor(Math.random() * 3));
      setFulfilledOrders(prev => prev + Math.floor(Math.random() * 2));
      setReconciliationProgress(prev => prev >= 100 ? 0 : prev + 1.5);
      setMatchAccuracy(prev => Math.max(96, Math.min(99.5, prev + (Math.random() - 0.5) * 0.4)));
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const reconciliationSteps = [
    { name: 'Order Import', icon: ShoppingBag, status: 'completed', time: '12s', accuracy: 99.8 },
    { name: 'Marketplace Sync', icon: Database, status: 'completed', time: '18s', accuracy: 98.5 },
    { name: 'Warehouse Matching', icon: Warehouse, status: 'active', time: '25s', accuracy: 98.4 },
    { name: 'Inventory Check', icon: Package, status: 'pending', time: '15s', accuracy: 97.9 },
    { name: 'Fulfillment Sync', icon: Truck, status: 'pending', time: '8s', accuracy: 99.2 }
  ];

  const marketplaceChannels = [
    { marketplace: 'Amazon', orders: 4256, matched: 4189, fulfilled: 3987, rate: '98.4%', color: 'from-orange-500 to-orange-600' },
    { marketplace: 'Flipkart', orders: 2890, matched: 2834, fulfilled: 2698, rate: '98.1%', color: 'from-blue-500 to-blue-600' },
    { marketplace: 'eBay', orders: 1124, matched: 1098, fulfilled: 1045, rate: '97.7%', color: 'from-green-500 to-green-600' },
    { marketplace: 'Etsy', orders: 630, matched: 635, fulfilled: 504, rate: '98.8%', color: 'from-purple-500 to-purple-600' }
  ];

  const warehouseLocations = [
    { location: 'North Warehouse', orders: 3245, capacity: '85%', efficiency: '96.8%', avgTime: '4.2h' },
    { location: 'South Warehouse', orders: 2567, capacity: '72%', efficiency: '94.5%', avgTime: '5.1h' },
    { location: 'East Warehouse', orders: 1890, capacity: '68%', efficiency: '97.2%', avgTime: '3.8h' },
    { location: 'West Warehouse', orders: 1198, capacity: '43%', efficiency: '98.1%', avgTime: '3.2h' }
  ];

  const recentReconciliations = [
    {
      id: 'ORD-2024-9801',
      marketplace: 'Amazon',
      customer: 'Sarah Johnson',
      product: 'Gaming Headset Pro',
      orderValue: '$189.99',
      warehouse: 'North WH',
      status: 'fulfilled',
      orderDate: '2024-01-15 14:23',
      matchedAt: '2024-01-15 14:25',
      fulfilledAt: '2024-01-15 18:45',
      trackingId: 'AMZ789456123'
    },
    {
      id: 'ORD-2024-9802',
      marketplace: 'Flipkart',
      customer: 'Raj Patel',
      product: 'Wireless Mouse',
      orderValue: '$29.99',
      warehouse: 'South WH',
      status: 'processing',
      orderDate: '2024-01-15 16:12',
      matchedAt: '2024-01-15 16:14',
      fulfilledAt: null,
      trackingId: 'FLK654321789'
    },
    {
      id: 'ORD-2024-9803',
      marketplace: 'eBay',
      customer: 'Emma Davis',
      product: 'Bluetooth Speaker',
      orderValue: '$79.99',
      warehouse: 'East WH',
      status: 'shipped',
      orderDate: '2024-01-15 11:45',
      matchedAt: '2024-01-15 11:47',
      fulfilledAt: '2024-01-15 15:30',
      trackingId: 'EBY987654321'
    },
    {
      id: 'ORD-2024-9804',
      marketplace: 'Etsy',
      customer: 'James Wilson',
      product: 'Handmade Case',
      orderValue: '$24.99',
      warehouse: 'West WH',
      status: 'exception',
      orderDate: '2024-01-15 09:30',
      matchedAt: null,
      fulfilledAt: null,
      trackingId: null
    }
  ];

  const performanceMetrics = [
    { metric: 'Match Accuracy', value: '98.4%', target: '95%', status: 'excellent', trend: '+0.8%' },
    { metric: 'Processing Speed', value: '2.3min', target: '5min', status: 'excellent', trend: '-15%' },
    { metric: 'Error Rate', value: '1.6%', target: '<5%', status: 'good', trend: '-0.3%' },
    { metric: 'Fulfillment Rate', value: '94.1%', target: '90%', status: 'excellent', trend: '+2.1%' }
  ];

  const orderCategories = [
    { category: 'Electronics', orders: 3456, percentage: 39, avgValue: '$145.67', topWarehouse: 'North' },
    { category: 'Fashion', orders: 2234, percentage: 25, avgValue: '$89.43', topWarehouse: 'South' },
    { category: 'Home & Garden', orders: 1789, percentage: 20, avgValue: '$67.89', topWarehouse: 'East' },
    { category: 'Sports', orders: 1021, percentage: 11, avgValue: '$123.45', topWarehouse: 'West' },
    { category: 'Books', orders: 400, percentage: 5, avgValue: '$23.12', topWarehouse: 'North' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-fuchsia-900 relative overflow-hidden">
      {/* Order Flow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(217,70,239,0.15),transparent_50%)]"></div>
        
        {/* Order Flow Network */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {/* Central Hub */}
            <circle cx="500" cy="500" r="50" fill="rgba(147,51,234,0.3)" />
            
            {/* Connecting Lines to Warehouses */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x = 500 + Math.cos(angle) * 200;
              const y = 500 + Math.sin(angle) * 200;
              return (
                <g key={i}>
                  <line
                    x1="500"
                    y1="500"
                    x2={x}
                    y2={y}
                    stroke="rgba(147,51,234,0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                  <circle cx={x} cy={y} r="15" fill="rgba(217,70,239,0.4)" className="animate-ping" style={{ animationDelay: `${i * 0.5}s` }} />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Floating Order & Warehouse Icons */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${18 + Math.random() * 8}s`
            }}
          >
            {i % 4 === 0 && <ShoppingBag className="w-6 h-6 text-purple-400" />}
            {i % 4 === 1 && <Warehouse className="w-7 h-7 text-violet-400" />}
            {i % 4 === 2 && <Package className="w-5 h-5 text-fuchsia-400" />}
            {i % 4 === 3 && <Truck className="w-8 h-8 text-purple-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <BackToParent 
              text="Back to Products"
              route={ROUTES.PRODUCT.INDEX}
              variant="retail"
            />
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Order Reconciliation
              </h1>
              <p className="text-purple-200 text-lg">Match Amazon/Flipkart orders with warehouses</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-2">
              <Database className="w-4 h-4 mr-1" />
              SQL + RPA
            </Badge>
            <div className="text-3xl font-bold text-white">{matchAccuracy.toFixed(1)}%</div>
            <div className="text-purple-200">Match Accuracy</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">{totalOrders.toLocaleString()}</div>
              <div className="text-purple-200 text-sm">Total Orders</div>
              <div className="text-green-400 text-xs mt-1">+7% today</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-500/20 to-violet-600/20 border-violet-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-violet-400">{matchedOrders.toLocaleString()}</div>
              <div className="text-violet-200 text-sm">Matched</div>
              <div className="text-violet-400 text-xs mt-1">{((matchedOrders / totalOrders) * 100).toFixed(1)}% success</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 border-fuchsia-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-fuchsia-400">{fulfilledOrders.toLocaleString()}</div>
              <div className="text-fuchsia-200 text-sm">Fulfilled</div>
              <div className="text-fuchsia-400 text-xs mt-1">{((fulfilledOrders / matchedOrders) * 100).toFixed(1)}% shipped</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-pink-400">144</div>
              <div className="text-pink-200 text-sm">Exceptions</div>
              <div className="text-red-400 text-xs mt-1">Require attention</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Reconciliation Engine */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-purple-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-purple-600/30 to-violet-600/30">
                <CardTitle className="text-white flex items-center">
                  <RefreshCw className="w-6 h-6 mr-3 text-purple-400" />
                  SQL + RPA Reconciliation Engine
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Real-time order matching across marketplaces and warehouses
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {reconciliationProgress.toFixed(0)}%
                    </div>
                    <div className="text-purple-200 mb-4">Current Reconciliation Cycle</div>
                    <Progress value={reconciliationProgress} className="h-4" />
                  </div>

                  {/* Reconciliation Steps */}
                  <div className="space-y-6">
                    {reconciliationSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-purple-500/20 border-2 border-purple-500' :
                            isActive ? 'bg-violet-500/20 border-2 border-violet-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-purple-400' :
                              isActive ? 'text-violet-400' :
                              'text-gray-400'
                            }`} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-2xl bg-violet-500/30 animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-purple-400' :
                                isActive ? 'text-violet-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-purple-500/50 text-purple-400' :
                                  isActive ? 'border-violet-500/50 text-violet-400' :
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

          {/* Performance Metrics & System Stats */}
          <div className="space-y-6">
            {/* Performance Metrics */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Performance Metrics</CardTitle>
                <CardDescription className="text-purple-200">System efficiency indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{metric.metric}</span>
                      <Badge className={`text-xs ${
                        metric.status === 'excellent' ? 'bg-green-500/20 text-green-400' :
                        metric.status === 'good' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {metric.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xl font-bold text-white">{metric.value}</div>
                        <div className="text-purple-200 text-xs">Target: {metric.target}</div>
                      </div>
                      <div className={`text-sm font-medium ${
                        metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Statistics */}
            <Card className="bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border-violet-500/30">
              <CardHeader>
                <CardTitle className="text-white">System Overview</CardTitle>
                <CardDescription className="text-violet-200">Real-time statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400">2.3min</div>
                    <div className="text-purple-200 text-sm">Avg Match Time</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-violet-400">99.1%</div>
                    <div className="text-violet-200 text-sm">Uptime</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-purple-500/20 rounded-xl border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400">4</div>
                  <div className="text-purple-200 text-sm">Active Marketplaces</div>
                  <div className="text-purple-300 text-xs mt-1">24/7 monitoring</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Marketplace Channels */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="w-6 h-6 mr-3 text-purple-400" />
              Marketplace Performance
            </CardTitle>
            <CardDescription className="text-purple-200">
              Order processing across e-commerce platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              {marketplaceChannels.map((marketplace, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-3">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r ${marketplace.color}`}>
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">{marketplace.marketplace}</div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">{marketplace.orders.toLocaleString()}</div>
                    <div className="text-purple-200 text-xs">Orders</div>
                    <div className="text-lg font-bold text-purple-400">{marketplace.matched.toLocaleString()}</div>
                    <div className="text-purple-300 text-xs">Matched</div>
                    <div className="text-green-400 text-sm font-bold">{marketplace.rate}</div>
                  </div>
                  
                  <div className="mt-3">
                    <Progress value={(marketplace.matched / marketplace.orders) * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Warehouse Performance & Order Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Warehouse Performance */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Warehouse className="w-6 h-6 mr-3 text-violet-400" />
                Warehouse Performance
              </CardTitle>
              <CardDescription className="text-purple-200">Fulfillment center metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {warehouseLocations.map((warehouse, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{warehouse.location}</h3>
                      <Badge className={`${
                        parseFloat(warehouse.capacity) > 80 ? 'bg-red-500/20 text-red-400' :
                        parseFloat(warehouse.capacity) > 60 ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {warehouse.capacity} capacity
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-white font-bold">{warehouse.orders.toLocaleString()}</div>
                        <div className="text-purple-200 text-xs">Orders</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{warehouse.efficiency}</div>
                        <div className="text-purple-200 text-xs">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-bold">{warehouse.avgTime}</div>
                        <div className="text-purple-200 text-xs">Avg Time</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Order Categories */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-fuchsia-400" />
                Order Categories
              </CardTitle>
              <CardDescription className="text-purple-200">Distribution by product type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {orderCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">{category.category}</span>
                    <div className="text-right">
                      <span className="text-white font-bold text-sm">{category.orders.toLocaleString()}</span>
                      <div className="text-green-400 text-xs">{category.avgValue}</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 bg-gradient-to-r from-purple-500 to-fuchsia-500"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-purple-200 text-xs">Top warehouse: {category.topWarehouse}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Reconciliations */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <ArrowUpDown className="w-6 h-6 mr-3 text-purple-400" />
                Recent Order Reconciliations
              </CardTitle>
              <CardDescription className="text-purple-200">Latest matching and fulfillment activity</CardDescription>
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
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReconciliations.map((order) => (
                <div key={order.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="grid grid-cols-7 gap-4 items-center">
                    <div>
                      <div className="text-white font-medium">{order.id}</div>
                      <div className="text-purple-200 text-sm">{order.marketplace}</div>
                    </div>
                    
                    <div>
                      <div className="text-white font-bold">{order.customer}</div>
                      <div className="text-purple-200 text-sm">{order.product}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{order.orderValue}</div>
                      <div className="text-purple-200 text-sm">Order Value</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{order.warehouse}</div>
                      <div className="text-purple-200 text-sm">Warehouse</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white text-sm">{order.orderDate}</div>
                      <div className="text-purple-200 text-xs">Ordered</div>
                    </div>
                    
                    <div className="text-center">
                      {order.trackingId ? (
                        <div>
                          <div className="text-white font-mono text-xs">{order.trackingId}</div>
                          <div className="text-purple-200 text-xs">Tracking ID</div>
                        </div>
                      ) : (
                        <div className="text-gray-400 text-sm">No tracking</div>
                      )}
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`${
                        order.status === 'fulfilled' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        order.status === 'shipped' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        order.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {order.status === 'fulfilled' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {order.status === 'shipped' && <Truck className="w-3 h-3 mr-1" />}
                        {order.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                        {order.status === 'exception' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                      {order.fulfilledAt && (
                        <div className="text-green-400 text-xs mt-1">
                          Fulfilled: {order.fulfilledAt.split(' ')[1]}
                        </div>
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
              <ReadyToTransform />
            </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.08; }
          50% { transform: translateY(-45px) rotate(360deg); opacity: 0.18; }
        }
        .animate-float {
          animation: float 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OrderReconciliationScreen;