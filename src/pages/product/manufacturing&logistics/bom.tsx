import React, { useState, useEffect } from 'react';
import { ArrowLeft, Boxes, Cog, CheckCircle, AlertTriangle, FileText, Eye, Search, Wrench, Settings, Factory, Layers, ArrowUpRight, ArrowDownLeft, RotateCw, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const BOMValidationScreen = () => {
  const [totalBOMs, setTotalBOMs] = useState(145);
  const [validatedBOMs, setValidatedBOMs] = useState(132);
  const [discrepancies, setDiscrepancies] = useState(13);
  const [validationProgress, setValidationProgress] = useState(0);
  const [cadAccuracy, setCadAccuracy] = useState(96.7);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalBOMs(prev => prev + Math.floor(Math.random() * 2));
      setValidatedBOMs(prev => prev + Math.floor(Math.random() * 2));
      setDiscrepancies(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 2));
      setValidationProgress(prev => prev >= 100 ? 0 : prev + 2.1);
      setCadAccuracy(prev => Math.max(94, Math.min(99, prev + (Math.random() - 0.5) * 0.6)));
    }, 3200);
    
    return () => clearInterval(interval);
  }, []);

  const validationLayers = [
    { layer: 'Invoice Import', depth: 1, status: 'completed', items: 1245, accuracy: 99.1, icon: FileText },
    { layer: 'Data Parsing', depth: 2, status: 'completed', items: 1198, accuracy: 98.3, icon: Search },
    { layer: 'CAD Comparison', depth: 3, status: 'active', items: 1156, accuracy: 96.7, icon: Cog },
    { layer: 'Component Match', depth: 4, status: 'pending', items: 0, accuracy: 0, icon: Boxes },
    { layer: 'Validation Report', depth: 5, status: 'pending', items: 0, accuracy: 0, icon: CheckCircle }
  ];

  const bomComponents = [
    { 
      component: 'Engine Assembly', 
      cadQty: 1, 
      invoiceQty: 1, 
      status: 'match', 
      cost: '$8,450.00',
      supplier: 'PowerTech Industries',
      tolerance: '±0.01mm'
    },
    { 
      component: 'Transmission Unit', 
      cadQty: 1, 
      invoiceQty: 1, 
      status: 'match', 
      cost: '$5,680.00',
      supplier: 'DriveMax Solutions',
      tolerance: '±0.05mm'
    },
    { 
      component: 'Steel Frame', 
      cadQty: 1, 
      invoiceQty: 2, 
      status: 'discrepancy', 
      cost: '$2,340.00',
      supplier: 'MetalWorks Corp',
      tolerance: '±0.1mm'
    },
    { 
      component: 'Electronic Control', 
      cadQty: 3, 
      invoiceQty: 3, 
      status: 'match', 
      cost: '$1,250.00',
      supplier: 'TechControl Ltd',
      tolerance: '±0.001mm'
    },
    { 
      component: 'Hydraulic Pump', 
      cadQty: 2, 
      invoiceQty: 1, 
      status: 'discrepancy', 
      cost: '$3,780.00',
      supplier: 'FluidPower Inc',
      tolerance: '±0.02mm'
    }
  ];

  const supplierMetrics = [
    { supplier: 'PowerTech Industries', accuracy: 98.5, onTime: 96.2, invoices: 45, rating: 'A+' },
    { supplier: 'DriveMax Solutions', accuracy: 97.8, onTime: 94.7, invoices: 38, rating: 'A' },
    { supplier: 'MetalWorks Corp', accuracy: 94.2, onTime: 92.1, invoices: 52, rating: 'B+' },
    { supplier: 'TechControl Ltd', accuracy: 99.1, onTime: 98.4, invoices: 29, rating: 'A+' }
  ];

  const validationStats = [
    { metric: 'CAD Sync Rate', value: '96.7%', trend: '+2.1%', status: 'good' },
    { metric: 'Invoice Accuracy', value: '94.8%', trend: '+0.8%', status: 'good' },
    { metric: 'Component Match', value: '91.0%', trend: '-1.2%', status: 'warning' },
    { metric: 'Processing Speed', value: '45s', trend: '-12%', status: 'excellent' }
  ];

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-tr from-slate-900 via-gray-800 to-zinc-900 relative overflow-hidden">
      {/* Industrial 3D Blueprint Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* 3D Isometric Layers */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-400/30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                width: `${60 - i * 8}%`,
                height: `${50 - i * 6}%`,
                transform: `perspective(1000px) rotateX(60deg) rotateY(${i * 5}deg)`,
                transformStyle: 'preserve-3d',
                animationDelay: `${i * 0.8}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Floating Industrial Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {i % 4 === 0 && <Cog className="w-8 h-8 text-blue-400" />}
            {i % 4 === 1 && <Factory className="w-7 h-7 text-cyan-400" />}
            {i % 4 === 2 && <Boxes className="w-6 h-6 text-slate-400" />}
            {i % 4 === 3 && <Wrench className="w-9 h-9 text-gray-400" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header with Industrial Design */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="bg-black/30 backdrop-blur-md text-white border-blue-500/30 hover:bg-blue-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Manufacturing
              </Button>
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Boxes className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-2">BOM Validation</h1>
                    <p className="text-blue-200 text-lg">Cross-check supplier invoices vs. CAD designs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Circular Progress Indicator */}
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(cadAccuracy / 100) * 339.29} 339.29`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold text-white">{cadAccuracy.toFixed(1)}%</div>
                  <div className="text-blue-200 text-sm">CAD Match</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layered Validation Pipeline */}
        <div className="mb-12">
          <Card className="bg-black/40 backdrop-blur-md border-blue-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-b border-blue-500/20">
              <CardTitle className="text-white flex items-center">
                <Layers className="w-6 h-6 mr-3 text-blue-400" />
                SolidWorks + RPA Validation Pipeline
              </CardTitle>
              <CardDescription className="text-blue-200">
                Multi-layer component verification system
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-80">
                {/* Isometric Layer Visualization */}
                {validationLayers.map((layer, index) => {
                  const isActive = layer.status === 'active';
                  const isCompleted = layer.status === 'completed';
                  const IconComponent = layer.icon;
                  
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-1000 ${
                        isCompleted ? 'text-green-400' :
                        isActive ? 'text-blue-400' :
                        'text-gray-500'
                      }`}
                      style={{
                        left: `${10 + index * 15}%`,
                        top: `${20 + index * 8}%`,
                        transform: `perspective(800px) rotateX(45deg) rotateY(${index * 2}deg)`,
                        zIndex: 5 - index
                      }}
                    >
                      {/* Layer Card */}
                      <div className={`w-48 h-32 rounded-lg border-2 transition-all duration-500 ${
                        isCompleted ? 'bg-green-500/20 border-green-500 shadow-green-500/20' :
                        isActive ? 'bg-blue-500/20 border-blue-500 shadow-blue-500/20 animate-pulse' :
                        'bg-gray-500/10 border-gray-500/30'
                      } shadow-2xl backdrop-blur-sm`}>
                        <div className="p-4 h-full flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <IconComponent className="w-8 h-8" />
                            {isActive && (
                              <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm mb-1">{layer.layer}</h3>
                            <div className="text-xs opacity-80">
                              Items: {layer.items.toLocaleString()}
                            </div>
                            {layer.accuracy > 0 && (
                              <div className="text-xs opacity-80">
                                Accuracy: {layer.accuracy}%
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Line */}
                      {index < validationLayers.length - 1 && (
                        <div 
                          className={`absolute w-16 h-0.5 ${
                            isCompleted ? 'bg-green-400' : 'bg-gray-500/50'
                          }`}
                          style={{
                            left: '100%',
                            top: '50%',
                            transform: 'translateY(-50%)'
                          }}
                        />
                      )}
                    </div>
                  );
                })}
                
                {/* Progress Indicator */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-sm text-blue-200 mb-2">
                    <span>Validation Progress</span>
                    <span>{validationProgress.toFixed(0)}%</span>
                  </div>
                  <Progress value={validationProgress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Split Layout: Components + Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Component Matrix */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                  Component Validation Matrix
                </CardTitle>
                <CardDescription className="text-cyan-200">Real-time CAD vs Invoice comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bomComponents.map((component, index) => (
                    <div key={index} className="group relative">
                      {/* Component Row */}
                      <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                        component.status === 'match' 
                          ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20' 
                          : 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20'
                      }`}>
                        <div className="grid grid-cols-6 gap-4 items-center">
                          <div className="col-span-2">
                            <h3 className="text-white font-semibold">{component.component}</h3>
                            <p className="text-gray-400 text-sm">{component.supplier}</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-white font-bold">{component.cadQty}</div>
                            <div className="text-blue-200 text-xs">CAD Qty</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-white font-bold">{component.invoiceQty}</div>
                            <div className="text-cyan-200 text-xs">Invoice Qty</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-white font-bold">{component.cost}</div>
                            <div className="text-gray-300 text-xs">{component.tolerance}</div>
                          </div>
                          
                          <div className="text-center">
                            <Badge className={`${
                              component.status === 'match' 
                                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                                : 'bg-red-500/20 text-red-400 border-red-500/30'
                            }`}>
                              {component.status === 'match' ? (
                                <CheckCircle className="w-3 h-3 mr-1" />
                              ) : (
                                <AlertTriangle className="w-3 h-3 mr-1" />
                              )}
                              {component.status === 'match' ? 'Match' : 'Mismatch'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover Details */}
                      <div className="absolute left-full top-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                        <div className="bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-3 text-sm text-white whitespace-nowrap">
                          <div>Supplier: {component.supplier}</div>
                          <div>Tolerance: {component.tolerance}</div>
                          <div>Status: {component.status}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics Sidebar */}
          <div className="space-y-6">
            {/* Validation Statistics */}
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Validation Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {validationStats.map((stat, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{stat.metric}</span>
                      <Badge className={`text-xs ${
                        stat.status === 'excellent' ? 'bg-green-500/20 text-green-400' :
                        stat.status === 'good' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {stat.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-white font-bold">{stat.value}</span>
                      <span className={`text-sm ${
                        stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  View CAD Files
                </Button>
                <Button variant="outline" className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20">
                  <FileText className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
                <Button variant="outline" className="w-full border-gray-500/50 text-gray-400 hover:bg-gray-500/20">
                  <RotateCw className="w-4 h-4 mr-2" />
                  Re-sync CAD
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Supplier Performance Dashboard */}
        <Card className="bg-black/40 backdrop-blur-md border-gray-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Factory className="w-6 h-6 mr-3 text-gray-400" />
              Supplier Performance Matrix
            </CardTitle>
            <CardDescription className="text-gray-300">Invoice accuracy and delivery metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              {supplierMetrics.map((supplier, index) => (
                <div key={index} className="relative group">
                  {/* Supplier Card */}
                  <div className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Factory className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-white font-semibold mb-4 text-sm">{supplier.supplier}</h3>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-green-400">{supplier.accuracy}%</div>
                          <div className="text-gray-300 text-xs">Accuracy</div>
                        </div>
                        
                        <div>
                          <div className="text-lg font-bold text-blue-400">{supplier.onTime}%</div>
                          <div className="text-gray-300 text-xs">On-time</div>
                        </div>
                        
                        <div>
                          <div className="text-lg font-bold text-white">{supplier.invoices}</div>
                          <div className="text-gray-300 text-xs">Invoices</div>
                        </div>
                        
                        <Badge className={`${
                          supplier.rating === 'A+' ? 'bg-green-500/20 text-green-400' :
                          supplier.rating === 'A' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          Rating: {supplier.rating}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Performance Indicators */}
                  <div className="absolute -top-2 -right-2">
                    {supplier.accuracy > 98 && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.08; 
          }
          50% { 
            transform: translateY(-60px) rotate(360deg); 
            opacity: 0.15; 
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BOMValidationScreen;