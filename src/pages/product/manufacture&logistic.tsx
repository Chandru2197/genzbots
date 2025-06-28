import React, { useState, useEffect } from 'react';
import { EnhancedGlass3DCard } from '@/components/enhanced/EnhancedGlass3DCard';
import { ArrowLeft, Factory, Truck, Wrench, AlertTriangle, BarChart3, Cog, Package, MapPin, Clock, TrendingUp, Shield, Zap, Brain, Sparkles, ArrowRight, CheckCircle, Timer, Activity, Settings, Database, Gauge, Route, Container, Bell, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ManufacturingService {
  id: string;
  name: string;
  description: string;
  tools: string[];
  aiFeature: string;
  icon: React.ReactNode;
  primaryColor: string;
  secondaryColor: string;
  gradient: string;
  bgPattern: string;
  metrics: {
    efficiency: number;
    accuracy: string;
    reduction: string;
    capacity: string;
  };
  workflow: string[];
  integrations: string[];
  status: 'operational' | 'maintenance' | 'optimizing';
}

const ManufacturingLogistics: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [productionLine, setProductionLine] = useState<number>(0);
  const [shipmentTracking, setShipmentTracking] = useState<number>(0);
  const [maintenanceAlert, setMaintenanceAlert] = useState<boolean>(false);
  const [liveMetrics, setLiveMetrics] = useState({
    bomValidations: 1847,
    shipmentsTracked: 3429,
    maintenanceAlerts: 23,
    productionEfficiency: 94.7
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProductionLine(prev => prev >= 100 ? 0 : prev + 2.5);
      setShipmentTracking(prev => prev >= 100 ? 0 : prev + 4);
      setMaintenanceAlert(prev => !prev);
      setLiveMetrics(prev => ({
        bomValidations: prev.bomValidations + Math.floor(Math.random() * 5),
        shipmentsTracked: prev.shipmentsTracked + Math.floor(Math.random() * 8),
        maintenanceAlerts: 23 + Math.floor(Math.random() * 3),
        productionEfficiency: Math.min(94.7 + Math.random() * 2, 99.9)
      }));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const services: ManufacturingService[] = [
    {
      id: 'bom-validation',
      name: 'BOM Validation',
      description: 'Cross-check supplier invoices vs. CAD designs with SolidWorks and RPA integration',
      tools: ['SolidWorks API', 'RPA Bots', 'ERP Systems', 'CAD Analysis'],
      aiFeature: 'Intelligent design comparison',
      icon: <Wrench className="w-8 h-8" />,
      primaryColor: 'text-slate-600',
      secondaryColor: 'text-slate-400',
      gradient: 'from-slate-500 via-gray-600 to-zinc-700',
      bgPattern: 'bg-gradient-to-br from-slate-50 to-gray-100',
      metrics: {
        efficiency: 96,
        accuracy: '99.3%',
        reduction: '85%',
        capacity: '500+ BOMs'
      },
      workflow: [
        'CAD Design Import',
        'Invoice Data Extraction',
        'Component Comparison',
        'Discrepancy Detection',
        'Approval Workflow'
      ],
      integrations: ['SolidWorks', 'AutoCAD', 'SAP', 'Oracle ERP'],
      status: 'operational'
    },
    {
      id: 'shipment-tracking',
      name: 'Shipment Tracking',
      description: 'Monitor courier APIs → Alert customers with real-time Python and Twilio integration',
      tools: ['Python Scripts', 'Twilio API', 'Courier APIs', 'SMS Gateway'],
      aiFeature: 'Predictive delivery optimization',
      icon: <Truck className="w-8 h-8" />,
      primaryColor: 'text-blue-600',
      secondaryColor: 'text-blue-400',
      gradient: 'from-blue-500 via-indigo-600 to-cyan-700',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      metrics: {
        efficiency: 91,
        accuracy: '97.8%',
        reduction: '70%',
        capacity: '2K+ shipments'
      },
      workflow: [
        'Shipment Registration',
        'Courier API Integration',
        'Status Monitoring',
        'Customer Notifications',
        'Delivery Confirmation'
      ],
      integrations: ['FedEx', 'UPS', 'DHL', 'USPS', 'Custom Couriers'],
      status: 'operational'
    },
    {
      id: 'predictive-maintenance',
      name: 'Predictive Maintenance',
      description: 'IoT sensors → Forecast machine failures with time-series forecasting AI',
      tools: ['IoT Sensors', 'Time-series AI', 'Machine Learning', 'Alert Systems'],
      aiFeature: 'Time-series forecasting',
      icon: <Settings className="w-8 h-8" />,
      primaryColor: 'text-orange-600',
      secondaryColor: 'text-orange-400',
      gradient: 'from-orange-500 via-red-600 to-pink-700',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-100',
      metrics: {
        efficiency: 88,
        accuracy: '94.5%',
        reduction: '60%',
        capacity: '100+ machines'
      },
      workflow: [
        'Sensor Data Collection',
        'Pattern Analysis',
        'Failure Prediction',
        'Maintenance Scheduling',
        'Performance Optimization'
      ],
      integrations: ['Industrial IoT', 'SCADA', 'Manufacturing Execution Systems'],
      status: 'optimizing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 relative overflow-hidden">
      {/* Industrial Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gear System Pattern */}
        <div className="absolute top-32 right-20 opacity-5">
          <div className="relative w-64 h-64">
            <Cog className="absolute w-32 h-32 text-slate-600 animate-spin-slow" style={{ top: '0px', left: '0px' }} />
            <Cog className="absolute w-24 h-24 text-slate-500 animate-reverse-spin" style={{ top: '40px', left: '120px' }} />
            <Cog className="absolute w-20 h-20 text-slate-700 animate-spin-slow" style={{ top: '150px', left: '80px' }} />
          </div>
        </div>

        {/* Factory Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg width="100%" height="200" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <polygon 
              points="0,200 0,150 100,150 100,100 200,100 200,80 300,80 300,120 400,120 400,90 500,90 500,110 600,110 600,70 700,70 700,130 800,130 800,85 900,85 900,125 1000,125 1000,95 1100,95 1100,140 1200,140 1200,200" 
              fill="url(#factoryGradient)"
            />
            <defs>
              <linearGradient id="factoryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Industrial Elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 && <Factory className="w-8 h-8 text-slate-500" />}
            {i % 4 === 1 && <Container className="w-6 h-6 text-blue-500" />}
            {i % 4 === 2 && <Route className="w-7 h-7 text-orange-500" />}
            {i % 4 === 3 && <Package className="w-5 h-5 text-green-500" />}
          </div>
        ))}

        {/* Circuit Board Pattern */}
        <div className="absolute top-1/4 left-20 opacity-10">
          <svg width="150" height="150" viewBox="0 0 150 150">
            <g stroke="#64748b" strokeWidth="2" fill="none">
              <line x1="20" y1="20" x2="130" y2="20" />
              <line x1="20" y1="20" x2="20" y2="130" />
              <line x1="50" y1="20" x2="50" y2="80" />
              <line x1="80" y1="20" x2="80" y2="100" />
              <line x1="110" y1="20" x2="110" y2="60" />
              <line x1="20" y1="50" x2="100" y2="50" />
              <line x1="20" y1="80" x2="120" y2="80" />
              <circle cx="20" cy="20" r="3" fill="#64748b" />
              <circle cx="50" cy="50" r="3" fill="#64748b" />
              <circle cx="80" cy="80" r="3" fill="#64748b" />
              <circle cx="110" cy="20" r="3" fill="#64748b" />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white border-slate-300 shadow-lg mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 via-gray-700 to-zinc-700 rounded-full text-white mb-8 shadow-2xl">
              <Factory className="w-7 h-7 mr-3" />
              <span className="font-bold text-xl">Manufacturing & Logistics</span>
              <Sparkles className="w-6 h-6 ml-3" />
            </div>
            
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
                Industrial
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12">
              Transform your manufacturing and logistics operations with precision automation 
              that validates BOMs, tracks shipments, and predicts maintenance needs with industrial-grade reliability.
            </p>

            {/* Production Control Center */}
            <Card className="max-w-6xl mx-auto bg-gradient-to-r from-white via-slate-50 to-gray-50 border-0 shadow-2xl mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center">
                  <Gauge className="w-8 h-8 mr-3 text-slate-600" />
                  Production Control Center
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Real-time manufacturing and logistics monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Production Line Monitor */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Factory className="w-5 h-5 mr-2 text-slate-600" />
                        Production Line Efficiency:
                      </span>
                      <span className="text-slate-600 font-bold text-xl">{Math.round(productionLine)}%</span>
                    </div>
                    
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-slate-500 via-gray-600 to-zinc-600 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${productionLine}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Shipment Tracking Monitor */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold flex items-center">
                        <Truck className="w-5 h-5 mr-2 text-blue-600" />
                        Shipment Tracking:
                      </span>
                      <span className="text-blue-600 font-bold text-xl">{Math.round(shipmentTracking)}%</span>
                    </div>
                    
                    <div className="relative h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 via-indigo-600 to-cyan-600 rounded-full transition-all duration-1000 relative"
                        style={{ width: `${shipmentTracking}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 shadow-lg">
                    <Wrench className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-700">{liveMetrics.bomValidations.toLocaleString()}</div>
                    <div className="text-sm text-slate-600 font-medium">BOM Validations</div>
                    <div className="text-xs text-green-600 mt-1">+{Math.floor(Math.random() * 5) + 2}% efficiency</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 shadow-lg">
                    <Truck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-700">{liveMetrics.shipmentsTracked.toLocaleString()}</div>
                    <div className="text-sm text-blue-600 font-medium">Shipments Tracked</div>
                    <div className="text-xs text-blue-500 mt-1">Real-time updates</div>
                  </div>
                  
                  <div className={`text-center p-6 bg-gradient-to-br rounded-2xl border shadow-lg ${
                    maintenanceAlert ? 'from-orange-50 to-red-100 border-orange-200' : 'from-green-50 to-green-100 border-green-200'
                  }`}>
                    <Bell className={`w-10 h-10 mx-auto mb-3 ${maintenanceAlert ? 'text-orange-600 animate-bounce' : 'text-green-600'}`} />
                    <div className={`text-3xl font-bold ${maintenanceAlert ? 'text-orange-700' : 'text-green-700'}`}>
                      {liveMetrics.maintenanceAlerts}
                    </div>
                    <div className={`text-sm font-medium ${maintenanceAlert ? 'text-orange-600' : 'text-green-600'}`}>
                      {maintenanceAlert ? 'Alerts Active' : 'Systems OK'}
                    </div>
                    <div className={`text-xs mt-1 ${maintenanceAlert ? 'text-orange-500' : 'text-green-500'}`}>
                      {maintenanceAlert ? 'Requires attention' : 'All systems operational'}
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 shadow-lg">
                    <BarChart3 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-700">{liveMetrics.productionEfficiency.toFixed(1)}%</div>
                    <div className="text-sm text-purple-600 font-medium">Overall Efficiency</div>
                    <div className="text-xs text-purple-500 mt-1">Industry leading</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <Tabs defaultValue="systems" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-2xl mb-12 p-2">
              <TabsTrigger value="systems" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-gray-600 data-[state=active]:text-white font-semibold">
                Systems Overview
              </TabsTrigger>
              <TabsTrigger value="workflow" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-gray-600 data-[state=active]:text-white font-semibold">
                Workflow
              </TabsTrigger>
              <TabsTrigger value="monitoring" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-gray-600 data-[state=active]:text-white font-semibold">
                Monitoring
              </TabsTrigger>
            </TabsList>

            <TabsContent value="systems">
              <div className="grid gap-8">
                {services.map((service, index) => (
                  <div key={service.id}>
                    <EnhancedGlass3DCard
                      title={service.name}
                      description={service.description}
                      icon={service.icon}
                      className="w-full cursor-pointer mb-4"
                      onClick={() => setActiveService(index)}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Badge className={`$ {
                          service.status === 'operational' ? 'bg-green-100 text-green-700 border-green-300' :
                          service.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                          'bg-blue-100 text-blue-700 border-blue-300'
                        } font-semibold px-4 py-2 text-sm flex items-center mb-2`}>
                          {service.status === 'operational' && <CheckCircle className="w-4 h-4 mr-2" />}
                          {service.status === 'maintenance' && <AlertTriangle className="w-4 h-4 mr-2" />}
                          {service.status === 'optimizing' && <Zap className="w-4 h-4 mr-2" />}
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </Badge>
                        <h4 className="font-bold text-gray-800 text-lg flex items-center mb-2">
                          <Route className={`w-5 h-5 mr-2 ${service.primaryColor}`} />
                          Process Workflow:
                        </h4>
                        <div className="grid md:grid-cols-5 gap-4">
                          {service.workflow.map((step, stepIndex) => (
                            <div key={stepIndex} className="text-center">
                              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center font-bold text-lg mx-auto mb-3 shadow-lg`}>
                                {stepIndex + 1}
                              </div>
                              <div className="text-sm text-gray-700 font-medium leading-tight">{step}</div>
                            </div>
                          ))}
                        </div>
                        <div className={`flex items-center space-x-4 p-6 ${service.bgPattern} rounded-2xl border-l-4 mt-4`} style={{borderLeftColor: service.primaryColor.replace('text-', '')}}>
                          <Brain className={`w-10 h-10 ${service.primaryColor}`} />
                          <div>
                            <div className={`font-bold ${service.primaryColor} text-xl`}>AI-Powered Enhancement:</div>
                            <div className="text-gray-700 text-lg">{service.aiFeature}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl mb-2">Performance Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className={`text-center p-4 rounded-2xl ${service.bgPattern} border-2 border-opacity-30`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.efficiency}%</div>
                            <div className="text-sm text-gray-600 font-medium">Efficiency</div>
                          </div>
                          <div className={`text-center p-4 rounded-2xl ${service.bgPattern} border-2 border-opacity-30`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.accuracy}</div>
                            <div className="text-sm text-gray-600 font-medium">Accuracy</div>
                          </div>
                          <div className={`text-center p-4 rounded-2xl ${service.bgPattern} border-2 border-opacity-30`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.reduction}</div>
                            <div className="text-sm text-gray-600 font-medium">Time Reduction</div>
                          </div>
                          <div className={`text-center p-4 rounded-2xl ${service.bgPattern} border-2 border-opacity-30`}>
                            <div className={`text-3xl font-bold ${service.primaryColor}`}>{service.metrics.capacity}</div>
                            <div className="text-sm text-gray-600 font-medium">Daily Capacity</div>
                          </div>
                        </div>
                        <div className="space-y-3 mt-4">
                          <h5 className="font-semibold text-gray-700 flex items-center">
                            <Database className="w-4 h-4 mr-2" />
                            Integrations:
                          </h5>
                          <div className="space-y-2">
                            {service.integrations.map((integration, intIndex) => (
                              <div key={intIndex} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200">
                                <span className="text-gray-700 font-medium">{integration}</span>
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3 mt-4">
                          <h5 className="font-semibold text-gray-700">Technology Stack:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} variant="outline" className="bg-white text-gray-600 border-gray-300">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white shadow-xl text-lg py-6 font-semibold mt-4`}>
                          Initialize System
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workflow">
              <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    {services[activeService]?.name} Production Flow
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Detailed step-by-step manufacturing process automation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {services[activeService]?.workflow.map((step, index) => (
                      <div key={index} className="flex items-center space-x-8 p-8 bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
                        <div className={`w-16 h-16 rounded-3xl bg-gradient-to-r ${services[activeService]?.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="text-xl font-bold text-gray-800 mb-2">{step}</div>
                          <div className="text-gray-600">Automated industrial process step with quality assurance</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 font-semibold">Active</span>
                        </div>
                        {index < services[activeService]?.workflow.length - 1 && (
                          <ArrowRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="monitoring">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Activity className="w-7 h-7 mr-3 text-slate-600" />
                      System Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {services.map((service, index) => (
                      <div key={service.id} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700 flex items-center">
                            {service.icon}
                            <span className="ml-3">{service.name}</span>
                          </span>
                          <span className={`font-bold ${service.primaryColor}`}>
                            {service.metrics.efficiency}%
                          </span>
                        </div>
                        <Progress 
                          value={service.metrics.efficiency} 
                          className="h-4"
                        />
                        <div className="text-sm text-gray-600">
                          Accuracy: {service.metrics.accuracy} | Capacity: {service.metrics.capacity}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                      <Bell className="w-7 h-7 mr-3 text-orange-600" />
                      System Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full ${
                            service.status === 'operational' ? 'bg-green-500' :
                            service.status === 'maintenance' ? 'bg-yellow-500' : 'bg-blue-500'
                          } animate-pulse`}></div>
                          <div>
                            <div className="font-medium text-gray-800">{service.name}</div>
                            <div className="text-sm text-gray-600">{service.status}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${service.primaryColor}`}>
                            {service.metrics.accuracy}
                          </div>
                          <div className="text-xs text-gray-500">Uptime</div>
                        </div>
                      </div>
                    ))}

                    {/* Maintenance Schedule */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-orange-700">Scheduled Maintenance</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Line 1 Calibration</span>
                          <span className="text-orange-600 font-medium">Tomorrow 2:00 AM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Sensor Array Update</span>
                          <span className="text-orange-600 font-medium">Friday 11:00 PM</span>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Protocols */}
                    <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-red-700">Emergency Protocols</span>
                      </div>
                      <div className="text-sm text-gray-700">
                        All systems equipped with automatic failsafe mechanisms and instant alert notifications.
                      </div>
                    </div>
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
          50% { transform: translateY(-12px) rotate(180deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 15s linear infinite reverse;
        }
        .hover\\:scale-101:hover {
          transform: scale(1.01);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ManufacturingLogistics;