import React, { useState, useEffect } from 'react';
import { ArrowLeft, Package, ShoppingCart, TrendingDown, TrendingUp, CheckCircle, Clock, AlertTriangle, Truck, Users, Calendar, Pill, Building, BarChart3, Bell, RefreshCw } from 'lucide-react';
import { BackToParent } from '@/components/ui/BackToParent';
import ReadyToTransform from '@/components/ReadyToTransform';
import { ROUTES } from '@/utils/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const PharmacyInventoryScreen = () => {
  const [totalItems, setTotalItems] = useState(2340);
  const [pendingOrders, setPendingOrders] = useState(67);
  const [deliveredOrders, setDeliveredOrders] = useState(52);
  const [syncProgress, setSyncProgress] = useState(0);
  const [inventoryAccuracy, setInventoryAccuracy] = useState(97.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalItems(prev => prev + Math.floor(Math.random() * 5) - 2);
      setPendingOrders(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
      setDeliveredOrders(prev => prev + (Math.random() > 0.9 ? 1 : 0));
      setSyncProgress(prev => prev >= 100 ? 0 : prev + 1.5);
      setInventoryAccuracy(prev => Math.max(95, Math.min(99.9, prev + (Math.random() - 0.5) * 0.3)));
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const inventorySteps = [
    { name: 'Inventory Check', icon: Package, status: 'completed', time: '5s', level: 'low' },
    { name: 'Demand Analysis', icon: BarChart3, status: 'completed', time: '8s', level: 'medium' },
    { name: 'Order Generation', icon: ShoppingCart, status: 'active', time: '12s', level: 'high' },
    { name: 'Supplier Selection', icon: Building, status: 'pending', time: '6s', level: 'optimal' },
    { name: 'Order Dispatch', icon: Truck, status: 'pending', time: '3s', level: 'confirmed' }
  ];

  const medicationCategories = [
    { category: 'Prescription Drugs', stock: 1245, reorderLevel: 200, color: 'from-blue-500 to-blue-600', status: 'adequate' },
    { category: 'OTC Medications', stock: 789, reorderLevel: 150, color: 'from-green-500 to-green-600', status: 'adequate' },
    { category: 'Emergency Supplies', stock: 156, reorderLevel: 100, color: 'from-red-500 to-red-600', status: 'low' },
    { category: 'Specialty Drugs', stock: 98, reorderLevel: 50, color: 'from-purple-500 to-purple-600', status: 'critical' },
    { category: 'Vaccines', stock: 52, reorderLevel: 30, color: 'from-orange-500 to-orange-600', status: 'adequate' }
  ];

  const recentOrders = [
    {
      id: 'PO-2024-8901',
      medication: 'Amoxicillin 500mg',
      supplier: 'MedSupply Corp',
      quantity: 500,
      status: 'delivered',
      orderDate: '2 days ago',
      deliveryDate: '1 hour ago',
      category: 'Prescription',
      urgency: 'normal'
    },
    {
      id: 'PO-2024-8902',
      medication: 'Insulin Pens',
      supplier: 'Pharma Distributors',
      quantity: 200,
      status: 'in-transit',
      orderDate: '3 days ago',
      deliveryDate: 'Expected today',
      category: 'Specialty',
      urgency: 'high'
    },
    {
      id: 'PO-2024-8903',
      medication: 'Ibuprofen 200mg',
      supplier: 'Global Pharmaceuticals',
      quantity: 1000,
      status: 'processing',
      orderDate: '1 day ago',
      deliveryDate: 'Expected tomorrow',
      category: 'OTC',
      urgency: 'normal'
    },
    {
      id: 'PO-2024-8904',
      medication: 'COVID-19 Vaccine',
      supplier: 'BioPharma Solutions',
      quantity: 50,
      status: 'urgent-order',
      orderDate: '6 hours ago',
      deliveryDate: 'Emergency delivery',
      category: 'Vaccine',
      urgency: 'critical'
    }
  ];

  const supplierMetrics = [
    { supplier: 'MedSupply Corp', orders: 23, deliveryTime: '24h', reliability: 98.5, rating: 'excellent' },
    { supplier: 'Pharma Distributors', orders: 18, deliveryTime: '36h', reliability: 96.2, rating: 'good' },
    { supplier: 'Global Pharmaceuticals', orders: 15, deliveryTime: '48h', reliability: 94.8, rating: 'good' },
    { supplier: 'BioPharma Solutions', orders: 11, deliveryTime: '12h', reliability: 99.1, rating: 'excellent' }
  ];

  const alertsData = [
    { medication: 'Epinephrine Auto-injector', currentStock: 8, reorderLevel: 25, severity: 'critical' },
    { medication: 'Morphine 10mg', currentStock: 45, reorderLevel: 100, severity: 'high' },
    { medication: 'Acetaminophen 500mg', currentStock: 180, reorderLevel: 200, severity: 'medium' },
    { medication: 'Aspirin 81mg', currentStock: 150, reorderLevel: 150, severity: 'low' }
  ];

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-teal-950 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Pharmacy Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        
        {/* Medicine Capsule Pattern */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${(i % 5) * 20 + 10}%`,
                top: `${Math.floor(i / 5) * 20 + 5}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              <div className="w-8 h-16 bg-gradient-to-b from-cyan-400/20 to-blue-400/20 rounded-full border border-cyan-400/30"></div>
              <div className="w-8 h-8 bg-cyan-400/30 rounded-full absolute top-0 left-0"></div>
            </div>
          ))}
        </div>

        {/* Floating Pharmacy Icons */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 8}s`
            }}
          >
            {i % 4 === 0 && <Pill className="w-7 h-7 text-cyan-400" />}
            {i % 4 === 1 && <Package className="w-6 h-6 text-blue-400" />}
            {i % 4 === 2 && <ShoppingCart className="w-5 h-5 text-teal-400" />}
            {i % 4 === 3 && <Truck className="w-8 h-8 text-cyan-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <BackToParent 
              text="Back to Products"
              route={ROUTES.PRODUCT.INDEX}
              variant="healthcare"
            />
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Pharmacy Inventory Sync
              </h1>
              <p className="text-cyan-200 text-lg">Auto-generate purchase orders with SAP integration</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-2">
              <Package className="w-4 h-4 mr-1" />
              SAP + RPA
            </Badge>
            <div className="text-3xl font-bold text-white">{inventoryAccuracy.toFixed(1)}%</div>
            <div className="text-cyan-200">Inventory Accuracy</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400">{totalItems.toLocaleString()}</div>
              <div className="text-cyan-200 text-sm">Total Items</div>
              <div className="text-green-400 text-xs mt-1">Inventory managed</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400">{pendingOrders}</div>
              <div className="text-blue-200 text-sm">Pending Orders</div>
              <div className="text-blue-400 text-xs mt-1">Auto-generated</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400">{deliveredOrders}</div>
              <div className="text-green-200 text-sm">Delivered Today</div>
              <div className="text-green-400 text-xs mt-1">On-time delivery</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 border-teal-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-teal-400">{alertsData.filter(a => a.severity === 'critical' || a.severity === 'high').length}</div>
              <div className="text-teal-200 text-sm">Active Alerts</div>
              <div className="text-red-400 text-xs mt-1">Requires attention</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Inventory Management Process */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30">
                <CardTitle className="text-white flex items-center">
                  <RefreshCw className="w-6 h-6 mr-3 text-cyan-400" />
                  SAP + RPA Inventory Management
                </CardTitle>
                <CardDescription className="text-cyan-200">
                  Automated inventory tracking and purchase order generation
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {syncProgress.toFixed(0)}%
                    </div>
                    <div className="text-cyan-200 mb-4">Current Sync Progress</div>
                    <Progress value={syncProgress} className="h-4" />
                  </div>

                  {/* Inventory Steps */}
                  <div className="space-y-6">
                    {inventorySteps.map((step, index) => {
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
                                  step.level === 'critical' ? 'border-red-500/50 text-red-400' :
                                  step.level === 'high' || step.level === 'low' ? 'border-yellow-500/50 text-yellow-400' :
                                  'border-green-500/50 text-green-400'
                                }`}>
                                  {step.level}
                                </Badge>
                              </div>
                            </div>
                            {isActive && (
                              <Progress value={syncProgress} className="h-2" />
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

          {/* Inventory Alerts & Stock Status */}
          <div className="space-y-6">
            {/* Critical Alerts */}
            <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-red-400" />
                  Stock Alerts
                </CardTitle>
                <CardDescription className="text-red-200">Items requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {alertsData.map((alert, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{alert.medication}</span>
                      <Badge className={`text-xs ${
                        alert.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        alert.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-300">Stock: {alert.currentStock}</span>
                      <span className="text-gray-300">Reorder: {alert.reorderLevel}</span>
                    </div>
                    <Progress 
                      value={(alert.currentStock / alert.reorderLevel) * 100} 
                      className="h-2 mt-2" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Statistics */}
            <Card className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-teal-500/30">
              <CardHeader>
                <CardTitle className="text-white">System Statistics</CardTitle>
                <CardDescription className="text-teal-200">Real-time metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-cyan-400">15s</div>
                    <div className="text-cyan-200 text-sm">Avg Sync Time</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-teal-400">99.1%</div>
                    <div className="text-teal-200 text-sm">Uptime</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400">$125K</div>
                  <div className="text-cyan-200 text-sm">Inventory Value</div>
                  <div className="text-cyan-300 text-xs mt-1">Current stock</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Medication Categories */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Pill className="w-6 h-6 mr-3 text-cyan-400" />
              Medication Categories
            </CardTitle>
            <CardDescription className="text-cyan-200">
              Stock levels across different medication types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-6">
              {medicationCategories.map((category, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-3">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r ${category.color}`}>
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">{category.category}</div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">{category.stock}</div>
                    <div className="text-cyan-200 text-xs">Current Stock</div>
                    <div className="text-lg font-bold text-cyan-400">{category.reorderLevel}</div>
                    <div className="text-cyan-300 text-xs">Reorder Level</div>
                    
                    <Badge className={`text-xs ${
                      category.status === 'critical' ? 'bg-red-500/20 text-red-400' :
                      category.status === 'low' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {category.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supplier Performance & Recent Orders */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Supplier Performance */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Building className="w-6 h-6 mr-3 text-teal-400" />
                Supplier Performance
              </CardTitle>
              <CardDescription className="text-cyan-200">Delivery metrics and reliability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supplierMetrics.map((supplier, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-semibold">{supplier.supplier}</h3>
                      <Badge className={`${
                        supplier.rating === 'excellent' ? 'bg-green-500/20 text-green-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {supplier.rating}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-white font-bold">{supplier.orders}</div>
                        <div className="text-cyan-200 text-xs">Orders</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold">{supplier.deliveryTime}</div>
                        <div className="text-cyan-200 text-xs">Avg Delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{supplier.reliability}%</div>
                        <div className="text-cyan-200 text-xs">Reliability</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3 text-cyan-400" />
                Recent Orders
              </CardTitle>
              <CardDescription className="text-cyan-200">Latest purchase order activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-white font-medium">{order.medication}</div>
                        <div className="text-cyan-200 text-sm">{order.supplier}</div>
                      </div>
                      <Badge className={`${
                        order.status === 'delivered' ? 'bg-green-500/20 text-green-400' :
                        order.status === 'in-transit' ? 'bg-blue-500/20 text-blue-400' :
                        order.status === 'processing' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {order.status === 'delivered' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {order.status === 'in-transit' && <Truck className="w-3 h-3 mr-1" />}
                        {order.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                        {order.status === 'urgent-order' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {order.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-cyan-200">Qty: </span>
                        <span className="text-white font-bold">{order.quantity}</span>
                      </div>
                      <div>
                        <span className="text-cyan-200">Ordered: </span>
                        <span className="text-white">{order.orderDate}</span>
                      </div>
                      <div>
                        <span className="text-cyan-200">Delivery: </span>
                        <span className="text-white">{order.deliveryDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <ReadyToTransform  />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.2; }
        }
        .animate-float {
          animation: float 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PharmacyInventoryScreen;