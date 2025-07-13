import React, { useState, useEffect } from 'react';
import { ArrowLeft, Settings, Cpu, Thermometer, Zap, TrendingUp, AlertTriangle, CheckCircle, Activity, Gauge, Wrench, Calendar, BarChart3, Radio, Wifi, Battery, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const PredictiveMaintenanceScreen = () => {
  const [totalMachines, setTotalMachines] = useState(89);
  const [activeSensors, setActiveSensors] = useState(89);
  const [predictedFailures, setPredictedFailures] = useState(3);
  const [aiAccuracy, setAiAccuracy] = useState(94.7);
  const [sensorPulse, setSensorPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalMachines(prev => prev + (Math.random() > 0.98 ? 1 : 0));
      setActiveSensors(prev => Math.max(85, prev + Math.floor(Math.random() * 3) - 1));
      setPredictedFailures(prev => Math.max(0, prev + (Math.random() > 0.9 ? 1 : 0) - (Math.random() > 0.95 ? 1 : 0)));
      setAiAccuracy(prev => Math.max(90, Math.min(98, prev + (Math.random() - 0.5) * 0.8)));
      setSensorPulse(prev => (prev + 1) % 100);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const machineGrid = [
    { id: 'M-001', name: 'CNC Lathe Alpha', status: 'optimal', temp: 68, vibration: 0.3, efficiency: 94.2, nextMaint: '14 days', x: 2, y: 1 },
    { id: 'M-002', name: 'Hydraulic Press Beta', status: 'warning', temp: 85, vibration: 0.8, efficiency: 87.1, nextMaint: '3 days', x: 4, y: 1 },
    { id: 'M-003', name: 'Conveyor System Gamma', status: 'optimal', temp: 72, vibration: 0.4, efficiency: 96.8, nextMaint: '21 days', x: 6, y: 1 },
    { id: 'M-004', name: 'Welding Robot Delta', status: 'critical', temp: 92, vibration: 1.2, efficiency: 78.3, nextMaint: 'NOW', x: 8, y: 1 },
    { id: 'M-005', name: 'Assembly Line Epsilon', status: 'optimal', temp: 70, vibration: 0.5, efficiency: 92.7, nextMaint: '18 days', x: 2, y: 3 },
    { id: 'M-006', name: 'Quality Scanner Zeta', status: 'maintenance', temp: 64, vibration: 0.1, efficiency: 0, nextMaint: 'In Progress', x: 4, y: 3 },
    { id: 'M-007', name: 'Paint Booth Eta', status: 'optimal', temp: 76, vibration: 0.6, efficiency: 89.4, nextMaint: '9 days', x: 6, y: 3 },
    { id: 'M-008', name: 'Packaging Unit Theta', status: 'warning', temp: 81, vibration: 0.9, efficiency: 83.6, nextMaint: '5 days', x: 8, y: 3 }
  ];

  const sensorMetrics = [
    { type: 'Temperature', value: 74.5, unit: '°C', threshold: 85, status: 'normal', trend: '+2%' },
    { type: 'Vibration', value: 0.67, unit: 'mm/s', threshold: 1.0, status: 'normal', trend: '+5%' },
    { type: 'Pressure', value: 2.3, unit: 'bar', threshold: 3.0, status: 'normal', trend: '-1%' },
    { type: 'Current', value: 12.8, unit: 'A', threshold: 15.0, status: 'normal', trend: '+3%' },
    { type: 'Efficiency', value: 91.2, unit: '%', threshold: 80, status: 'optimal', trend: '+1%' },
    { type: 'Runtime', value: 847, unit: 'hrs', threshold: 1000, status: 'normal', trend: '+12%' }
  ];

  const aiPredictions = [
    {
      machine: 'Welding Robot Delta',
      component: 'Motor Bearing',
      failureProbability: 87,
      timeToFailure: '2-4 hours',
      recommendedAction: 'Immediate inspection required',
      severity: 'critical'
    },
    {
      machine: 'Hydraulic Press Beta',
      component: 'Hydraulic Seal',
      failureProbability: 65,
      timeToFailure: '3-5 days',
      recommendedAction: 'Schedule maintenance',
      severity: 'warning'
    },
    {
      machine: 'Packaging Unit Theta',
      component: 'Drive Belt',
      failureProbability: 42,
      timeToFailure: '1-2 weeks',
      recommendedAction: 'Monitor closely',
      severity: 'low'
    }
  ];

  const maintenanceSchedule = [
    { date: '2024-01-16', machine: 'Quality Scanner Zeta', type: 'Scheduled', technician: 'John Smith', duration: '4h' },
    { date: '2024-01-17', machine: 'Welding Robot Delta', type: 'Emergency', technician: 'Sarah Connor', duration: '6h' },
    { date: '2024-01-18', machine: 'Hydraulic Press Beta', type: 'Preventive', technician: 'Mike Johnson', duration: '3h' },
    { date: '2024-01-20', machine: 'Paint Booth Eta', type: 'Scheduled', technician: 'Lisa Wong', duration: '2h' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 relative overflow-hidden">
      {/* Futuristic IoT Network Background */}
      <div className="absolute inset-0">
        {/* IoT Network Nodes */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {/* Network Grid */}
            {[...Array(10)].map((_, i) => 
              [...Array(8)].map((_, j) => (
                <g key={`${i}-${j}`}>
                  <circle
                    cx={100 + i * 80}
                    cy={100 + j * 100}
                    r="3"
                    fill="rgba(6, 182, 212, 0.6)"
                    className="animate-pulse"
                    style={{ animationDelay: `${(i + j) * 0.2}s` }}
                  />
                  {/* Connection Lines */}
                  {i < 9 && (
                    <line
                      x1={100 + i * 80}
                      y1={100 + j * 100}
                      x2={180 + i * 80}
                      y2={100 + j * 100}
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  )}
                  {j < 7 && (
                    <line
                      x1={100 + i * 80}
                      y1={100 + j * 100}
                      x2={100 + i * 80}
                      y2={200 + j * 100}
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  )}
                </g>
              ))
            )}
          </svg>
        </div>

        {/* Floating IoT Sensors */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${30 + Math.random() * 15}s`
            }}
          >
            {i % 6 === 0 && <Cpu className="w-6 h-6 text-cyan-400" />}
            {i % 6 === 1 && <Radio className="w-7 h-7 text-teal-400" />}
            {i % 6 === 2 && <Wifi className="w-5 h-5 text-emerald-400" />}
            {i % 6 === 3 && <Thermometer className="w-8 h-8 text-cyan-300" />}
            {i % 6 === 4 && <Gauge className="w-6 h-6 text-teal-300" />}
            {i % 6 === 5 && <Battery className="w-7 h-7 text-emerald-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Futuristic Header */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="bg-black/30 backdrop-blur-md text-white border-cyan-500/30 hover:bg-cyan-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Manufacturing
              </Button>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    {/* Sensor Pulse Ring */}
                    <div 
                      className="absolute inset-0 rounded-lg border-2 border-cyan-400"
                      style={{
                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                        opacity: sensorPulse / 100
                      }}
                    />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-2">Predictive Maintenance</h1>
                    <p className="text-cyan-200 text-lg">IoT sensors → Forecast machine failures with AI time-series</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Brain Status */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-6 h-6 text-white animate-pulse" />
                  </div>
                  <div className="text-3xl font-bold text-white">{aiAccuracy.toFixed(1)}%</div>
                  <div className="text-purple-200 text-sm">AI Accuracy</div>
                  <div className="text-purple-300 text-xs mt-1">Neural Network</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Factory Floor Layout */}
        <div className="mb-12">
          <Card className="bg-black/50 backdrop-blur-md border-cyan-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20">
              <CardTitle className="text-white flex items-center">
                <Radio className="w-6 h-6 mr-3 text-cyan-400" />
                IoT Factory Floor - Live Sensor Network
              </CardTitle>
              <CardDescription className="text-cyan-200">Real-time machine monitoring with predictive analytics</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative h-96">
                {/* Factory Floor Grid */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg border border-cyan-500/20">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <div key={i}>
                        <div 
                          className="absolute h-full w-px bg-cyan-400"
                          style={{ left: `${(i + 1) * 10}%` }}
                        />
                        <div 
                          className="absolute w-full h-px bg-cyan-400"
                          style={{ top: `${(i + 1) * 10}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Machine Nodes */}
                  {machineGrid.map((machine, index) => (
                    <div
                      key={machine.id}
                      className="absolute group cursor-pointer"
                      style={{
                        left: `${machine.x * 10}%`,
                        top: `${machine.y * 20}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Machine Icon */}
                      <div className={`relative w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        machine.status === 'critical' ? 'bg-red-500/30 border-2 border-red-500 animate-pulse' :
                        machine.status === 'warning' ? 'bg-yellow-500/30 border-2 border-yellow-500' :
                        machine.status === 'maintenance' ? 'bg-purple-500/30 border-2 border-purple-500' :
                        'bg-green-500/30 border-2 border-green-500'
                      }`}>
                        <Settings className={`w-8 h-8 ${
                          machine.status === 'critical' ? 'text-red-400' :
                          machine.status === 'warning' ? 'text-yellow-400' :
                          machine.status === 'maintenance' ? 'text-purple-400' :
                          'text-green-400'
                        }`} />
                        
                        {/* Sensor Pulse */}
                        <div className={`absolute inset-0 rounded-lg animate-ping ${
                          machine.status === 'critical' ? 'bg-red-500/20' :
                          machine.status === 'warning' ? 'bg-yellow-500/20' :
                          machine.status === 'maintenance' ? 'bg-purple-500/20' :
                          'bg-green-500/20'
                        }`} />
                      </div>
                      
                      {/* Machine ID */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-cyan-300 text-xs font-mono">
                        {machine.id}
                      </div>
                      
                      {/* Hover Info Panel */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                        <div className="bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 text-sm whitespace-nowrap">
                          <h3 className="text-white font-semibold mb-2">{machine.name}</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-300">Temp:</span>
                              <span className="text-cyan-400">{machine.temp}°C</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Vibration:</span>
                              <span className="text-cyan-400">{machine.vibration} mm/s</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Efficiency:</span>
                              <span className="text-green-400">{machine.efficiency}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Next Maint:</span>
                              <span className="text-yellow-400">{machine.nextMaint}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Optimal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-yellow-400 text-sm">Warning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 text-sm">Critical</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-purple-400 text-sm">Maintenance</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Sensor Metrics */}
          <div className="space-y-6">
            <Card className="bg-black/40 backdrop-blur-md border-teal-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Gauge className="w-6 h-6 mr-3 text-teal-400" />
                  Live Sensor Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sensorMetrics.map((sensor, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{sensor.type}</span>
                      <Badge className={`text-xs ${
                        sensor.status === 'optimal' ? 'bg-green-500/20 text-green-400' :
                        sensor.status === 'normal' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {sensor.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-white font-bold text-lg">{sensor.value}</span>
                        <span className="text-gray-400 text-sm ml-1">{sensor.unit}</span>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm ${
                          sensor.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {sensor.trend}
                        </div>
                        <div className="text-gray-400 text-xs">Max: {sensor.threshold}{sensor.unit}</div>
                      </div>
                    </div>
                    <Progress 
                      value={(sensor.value / sensor.threshold) * 100} 
                      className="h-2 mt-2" 
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* AI Predictions */}
          <div className="space-y-6">
            <Card className="bg-black/40 backdrop-blur-md border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-purple-400" />
                  AI Failure Predictions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiPredictions.map((prediction, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    prediction.severity === 'critical' ? 'bg-red-500/10 border-red-500/30' :
                    prediction.severity === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    'bg-blue-500/10 border-blue-500/30'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-white font-semibold text-sm">{prediction.machine}</h3>
                        <p className="text-gray-400 text-xs">{prediction.component}</p>
                      </div>
                      <Badge className={`${
                        prediction.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        prediction.severity === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {prediction.failureProbability}%
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Time to failure:</span>
                        <span className="text-white">{prediction.timeToFailure}</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-300">Action: </span>
                        <span className={`${
                          prediction.severity === 'critical' ? 'text-red-400' :
                          prediction.severity === 'warning' ? 'text-yellow-400' :
                          'text-blue-400'
                        }`}>
                          {prediction.recommendedAction}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Maintenance Schedule */}
          <div className="space-y-6">
            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-cyan-400" />
                  Maintenance Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {maintenanceSchedule.map((schedule, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-white font-semibold text-sm">{schedule.machine}</h3>
                        <p className="text-gray-400 text-xs">{schedule.technician}</p>
                      </div>
                      <Badge className={`text-xs ${
                        schedule.type === 'Emergency' ? 'bg-red-500/20 text-red-400' :
                        schedule.type === 'Preventive' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {schedule.type}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-cyan-400">{schedule.date}</span>
                      <span className="text-gray-300">{schedule.duration}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400">{totalMachines}</div>
              <div className="text-cyan-200 text-sm">Total Machines</div>
              <div className="text-cyan-300 text-xs mt-1">Monitored 24/7</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border-teal-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Radio className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-teal-400">{activeSensors}</div>
              <div className="text-teal-200 text-sm">Active Sensors</div>
              <div className="text-teal-300 text-xs mt-1">IoT Network</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="text-3xl font-bold text-red-400">{predictedFailures}</div>
              <div className="text-red-200 text-sm">Predicted Failures</div>
              <div className="text-red-300 text-xs mt-1">Next 48 hours</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">87%</div>
              <div className="text-purple-200 text-sm">Uptime</div>
              <div className="text-purple-300 text-xs mt-1">This month</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1; 
          }
          50% { 
            transform: translateY(-80px) rotate(360deg); 
            opacity: 0.25; 
          }
        }
        .animate-float {
          animation: float 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PredictiveMaintenanceScreen;