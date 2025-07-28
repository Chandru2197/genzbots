import React, { useState, useEffect } from 'react';
import { ArrowLeft, Truck, MapPin, Radio, Satellite, Bell, Activity, Globe, Navigation, Target, Radar, Phone, Calendar, Package, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';
import ReadyToTransform from '@/components/ReadyToTransform';

const ShipmentTrackingScreen = () => {
  const [activeShipments, setActiveShipments] = useState(2340);
  const [trackedShipments, setTrackedShipments] = useState(2298);
  const [deliveredToday, setDeliveredToday] = useState(2156);
  const [radarSweep, setRadarSweep] = useState(0);
  const [alertCount, setAlertCount] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShipments(prev => prev + Math.floor(Math.random() * 4) - 1);
      setTrackedShipments(prev => prev + Math.floor(Math.random() * 3));
      setDeliveredToday(prev => prev + Math.floor(Math.random() * 2));
      setRadarSweep(prev => (prev + 3) % 360);
      setAlertCount(prev => Math.random() > 0.95 ? prev + 1 : prev);
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  const courierAPIs = [
    { name: 'FedEx API', status: 'online', shipments: 856, responseTime: '0.8s', reliability: 99.2 },
    { name: 'UPS API', status: 'online', shipments: 723, responseTime: '1.2s', reliability: 98.7 },
    { name: 'DHL API', status: 'online', shipments: 634, responseTime: '0.9s', reliability: 97.9 },
    { name: 'USPS API', status: 'maintenance', shipments: 127, responseTime: '2.1s', reliability: 94.5 }
  ];

  const globalRegions = [
    { region: 'North America', shipments: 1245, x: 25, y: 35, status: 'normal', alerts: 2 },
    { region: 'Europe', shipments: 567, x: 50, y: 25, status: 'normal', alerts: 1 },
    { region: 'Asia Pacific', shipments: 423, x: 75, y: 40, status: 'warning', alerts: 3 },
    { region: 'South America', shipments: 89, x: 30, y: 70, status: 'normal', alerts: 0 },
    { region: 'Africa', shipments: 16, x: 55, y: 60, status: 'critical', alerts: 1 }
  ];

  const liveShipments = [
    {
      id: 'SHP-2024-8901',
      carrier: 'FedEx',
      origin: 'New York, NY',
      destination: 'Los Angeles, CA',
      status: 'in-transit',
      progress: 65,
      eta: '2024-01-16 14:30',
      customer: 'TechCorp Inc',
      value: '$12,450'
    },
    {
      id: 'SHP-2024-8902',
      carrier: 'UPS',
      origin: 'Chicago, IL',
      destination: 'Miami, FL',
      status: 'delivered',
      progress: 100,
      eta: '2024-01-15 16:45',
      customer: 'Global Industries',
      value: '$8,750'
    },
    {
      id: 'SHP-2024-8903',
      carrier: 'DHL',
      origin: 'Seattle, WA',
      destination: 'Denver, CO',
      status: 'delayed',
      progress: 45,
      eta: '2024-01-17 10:20',
      customer: 'ManuTech Solutions',
      value: '$15,620'
    }
  ];

  const radarBlips = [
    { id: 1, angle: 45, distance: 60, type: 'truck', status: 'normal' },
    { id: 2, angle: 120, distance: 80, type: 'plane', status: 'warning' },
    { id: 1, angle: 45, distance: 60, type: 'truck', status: 'normal' },
    { id: 2, angle: 120, distance: 80, type: 'plane', status: 'warning' },
    { id: 3, angle: 200, distance: 40, type: 'ship', status: 'normal' },
    { id: 4, angle: 300, distance: 70, type: 'truck', status: 'critical' },
    { id: 5, angle: 15, distance: 90, type: 'plane', status: 'normal' }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Control Room Background */}
      <div className="absolute inset-0">
        {/* Radar Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {/* Concentric Circles */}
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx="500"
                cy="500"
                r={50 + i * 50}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            {/* Cross Lines */}
            <line x1="100" y1="500" x2="900" y2="500" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
            <line x1="500" y1="100" x2="500" y2="900" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
            
            {/* Diagonal Lines */}
            <line x1="146" y1="146" x2="854" y2="854" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
            <line x1="854" y1="146" x2="146" y2="854" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          </svg>
        </div>

        {/* Floating Control Room Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${25 + Math.random() * 10}s`
            }}
          >
            {i % 5 === 0 && <Radar className="w-8 h-8 text-blue-400" />}
            {i % 5 === 1 && <Satellite className="w-7 h-7 text-cyan-400" />}
            {i % 5 === 2 && <Radio className="w-6 h-6 text-indigo-400" />}
            {i % 5 === 3 && <Navigation className="w-9 h-9 text-blue-300" />}
            {i % 5 === 4 && <Globe className="w-8 h-8 text-cyan-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Mission Control Header */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <Button 
                onClick={() => navigateTo('/product')}
                variant="outline" className="bg-black/40 backdrop-blur-md text-white border-blue-500/30 hover:bg-blue-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Manufacturing
              </Button>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Radar className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '4s' }} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-2">Shipment Tracking</h1>
                    <p className="text-blue-200 text-lg">Monitor courier APIs → Alert customers via Python + Twilio</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Alert Panel */}
            <div className="relative">
              <Card className="bg-red-500/20 border-red-500/30 backdrop-blur-md">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Bell className="w-5 h-5 text-red-400 animate-pulse" />
                    <span className="text-red-400 font-semibold">ALERTS</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{alertCount}</div>
                  <div className="text-red-200 text-sm">Active Warnings</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Control Dashboard */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Central Radar Display */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-black/60 backdrop-blur-md border-blue-500/30">
              <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
                <CardTitle className="text-white flex items-center">
                  <Target className="w-6 h-6 mr-3 text-blue-400" />
                  Global Tracking Radar
                </CardTitle>
                <CardDescription className="text-blue-200">Real-time shipment monitoring</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="relative w-full h-80 flex items-center justify-center">
                  {/* Radar Screen */}
                  <div className="relative w-72 h-72 bg-black/80 rounded-full border-2 border-green-500/50 flex items-center justify-center">
                    {/* Radar Circles */}
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute border border-green-500/30 rounded-full"
                        style={{
                          width: `${(i + 1) * 25}%`,
                          height: `${(i + 1) * 25}%`,
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}
                    
                    {/* Radar Sweep */}
                    <div 
                      className="absolute w-36 h-0.5 bg-gradient-to-r from-green-500 to-transparent"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 50%',
                        transform: `translate(0, -50%) rotate(${radarSweep}deg)`,
                        transition: 'transform 0.1s linear'
                      }}
                    />
                    
                    {/* Cross Lines */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-green-500/30 transform -translate-y-1/2" />
                    <div className="absolute top-0 left-1/2 w-px h-full bg-green-500/30 transform -translate-x-1/2" />
                    
                    {/* Radar Blips */}
                    {radarBlips.map((blip) => {
                      const x = Math.cos((blip.angle - 90) * Math.PI / 180) * (blip.distance * 1.2);
                      const y = Math.sin((blip.angle - 90) * Math.PI / 180) * (blip.distance * 1.2);
                      
                      return (
                        <div
                          key={blip.id}
                          className={`absolute w-3 h-3 rounded-full animate-pulse ${
                            blip.status === 'critical' ? 'bg-red-500' :
                            blip.status === 'warning' ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          {/* Blip Type Icon */}
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                            {blip.type === 'truck' && <Truck className="w-3 h-3 text-green-400" />}
                            {blip.type === 'plane' && <Navigation className="w-3 h-3 text-blue-400" />}
                            {blip.type === 'ship' && <Globe className="w-3 h-3 text-cyan-400" />}
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Center Point */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  
                  {/* Radar Info - Positioned at bottom */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="text-green-400 text-sm font-mono">
                      SWEEP: {radarSweep.toFixed(0)}° | RANGE: 500km | TARGETS: {radarBlips.length}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Control Panel */}
            <Card className="bg-black/60 backdrop-blur-md border-green-500/30">
              <CardHeader className="bg-gradient-to-r from-green-600/20 to-emerald-600/20">
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-green-400" />
                  Mission Control
                </CardTitle>
                <CardDescription className="text-green-200">System operations and tracking status</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-400">{activeShipments.toLocaleString()}</div>
                    <div className="text-green-200 text-sm">Active Shipments</div>
                    <div className="text-green-300 text-xs mt-1">Real-time tracking</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Satellite className="w-6 h-6 text-white animate-pulse" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{trackedShipments.toLocaleString()}</div>
                    <div className="text-blue-200 text-sm">GPS Tracked</div>
                    <div className="text-blue-300 text-xs mt-1">Satellite network</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-400">{deliveredToday.toLocaleString()}</div>
                    <div className="text-purple-200 text-sm">Delivered Today</div>
                    <div className="text-purple-300 text-xs mt-1">On schedule</div>
                  </div>
                </div>
                
                {/* System Status Indicators */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">System Status</span>
                      </div>
                      <span className="text-green-400 font-bold text-sm">OPERATIONAL</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Network Health</span>
                      </div>
                      <span className="text-blue-400 font-bold text-sm">OPTIMAL</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Status Panels */}
          <div className="lg:col-span-2 space-y-6">
            {/* API Status Grid */}
            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Radio className="w-6 h-6 mr-3 text-cyan-400" />
                  Courier API Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {courierAPIs.map((api, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium text-sm">{api.name}</span>
                        <div className={`w-3 h-3 rounded-full ${
                          api.status === 'online' ? 'bg-green-500 animate-pulse' :
                          api.status === 'maintenance' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">Shipments:</span>
                          <span className="text-white">{api.shipments}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">Response:</span>
                          <span className="text-cyan-400">{api.responseTime}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">Reliability:</span>
                          <span className="text-green-400">{api.reliability}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Global Regions */}
            <Card className="bg-black/40 backdrop-blur-md border-indigo-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-indigo-400" />
                  Regional Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {globalRegions.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${
                          region.status === 'critical' ? 'bg-red-500 animate-pulse' :
                          region.status === 'warning' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`} />
                        <span className="text-white font-medium">{region.region}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{region.shipments}</div>
                        <div className="text-gray-400 text-xs">{region.alerts} alerts</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Metrics */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Mission Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{activeShipments.toLocaleString()}</div>
                    <div className="text-blue-200 text-sm">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{trackedShipments.toLocaleString()}</div>
                    <div className="text-cyan-200 text-sm">Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{deliveredToday.toLocaleString()}</div>
                    <div className="text-green-200 text-sm">Delivered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Live Shipment Console */}
        <Card className="bg-black/40 backdrop-blur-md border-green-500/30 mb-8">
          <CardHeader className="bg-gradient-to-r from-green-600/20 to-blue-600/20">
            <CardTitle className="text-white flex items-center">
              <Activity className="w-6 h-6 mr-3 text-green-400" />
              Live Shipment Console
            </CardTitle>
            <CardDescription className="text-green-200">Real-time tracking with Python + Twilio integration</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {liveShipments.map((shipment, index) => (
                <div key={index} className="relative">
                  {/* Shipment Row */}
                  <div className={`p-4 rounded-xl border transition-all duration-300 ${
                    shipment.status === 'delivered' 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : shipment.status === 'delayed'
                      ? 'bg-red-500/10 border-red-500/30'
                      : 'bg-blue-500/10 border-blue-500/30'
                  }`}>
                    <div className="grid grid-cols-8 gap-4 items-center">
                      <div>
                        <div className="text-white font-bold">{shipment.id}</div>
                        <div className="text-gray-400 text-sm">{shipment.carrier}</div>
                      </div>
                      
                      <div>
                        <div className="text-white text-sm">{shipment.origin}</div>
                        <div className="text-gray-400 text-xs">Origin</div>
                      </div>
                      
                      <div>
                        <div className="text-white text-sm">{shipment.destination}</div>
                        <div className="text-gray-400 text-xs">Destination</div>
                      </div>
                      
                      <div>
                        <div className="text-white font-bold">{shipment.customer}</div>
                        <div className="text-gray-400 text-xs">Customer</div>
                      </div>
                      
                      <div>
                        <div className="text-white font-bold">{shipment.value}</div>
                        <div className="text-gray-400 text-xs">Value</div>
                      </div>
                      
                      <div>
                        <div className="text-white text-sm">{shipment.eta}</div>
                        <div className="text-gray-400 text-xs">ETA</div>
                      </div>
                      
                      <div>
                        <Progress value={shipment.progress} className="h-2 mb-1" />
                        <div className="text-white text-xs">{shipment.progress}%</div>
                      </div>
                      
                      <div>
                        <Badge className={`${
                          shipment.status === 'delivered' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                            : shipment.status === 'delayed'
                            ? 'bg-red-500/20 text-red-400 border-red-500/30'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {shipment.status === 'delivered' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {shipment.status === 'delayed' && <AlertTriangle className="w-3 h-3 mr-1" />}
                          {shipment.status === 'in-transit' && <Clock className="w-3 h-3 mr-1" />}
                          {shipment.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-black/50 border-white/20 text-white">
                        <MapPin className="w-3 h-3 mr-1" />
                        Track
                      </Button>
                      <Button size="sm" variant="outline" className="bg-black/50 border-white/20 text-white">
                        <Phone className="w-3 h-3 mr-1" />
                        Alert
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Communication Panel */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="bg-black/40 backdrop-blur-md border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Phone className="w-6 h-6 mr-3 text-purple-400" />
                Twilio Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">SMS Sent</span>
                  <span className="text-purple-400 font-bold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Calls Made</span>
                  <span className="text-purple-400 font-bold">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-green-400 font-bold">98.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="w-6 h-6 mr-3 text-yellow-400" />
                Alert System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Active Alerts</span>
                  <span className="text-red-400 font-bold">{alertCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Resolved Today</span>
                  <span className="text-green-400 font-bold">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-blue-400 font-bold">2.3min</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-md border-green-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Satellite className="w-6 h-6 mr-3 text-green-400" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-green-400 font-bold">99.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">API Health</span>
                  <span className="text-green-400 font-bold">Optimal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Last Update</span>
                  <span className="text-blue-400 font-bold">2s ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ready to Transform Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
              <ReadyToTransform />
            </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1; 
          }
          50% { 
            transform: translateY(-70px) rotate(360deg); 
            opacity: 0.2; 
          }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
        .group:hover .opacity-0 {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ShipmentTrackingScreen;