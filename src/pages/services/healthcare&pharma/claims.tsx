import React, { useState, useEffect } from 'react';
import { ArrowLeft, ClipboardCheck, Shield, CheckCircle, Clock, AlertTriangle, FileText, DollarSign, TrendingUp, Download, Filter, Search, Users, Calendar, Building, Receipt } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ReadyToTransform from '@/components/ReadyToTransform';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';

const ClaimsProcessingScreen = () => {
  const [totalClaims, setTotalClaims] = useState(789);
  const [validatedClaims, setValidatedClaims] = useState(734);
  const [submittedClaims, setSubmittedClaims] = useState(698);
  const [validationProgress, setValidationProgress] = useState(0);
  const [approvalRate, setApprovalRate] = useState(88.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalClaims(prev => prev + Math.floor(Math.random() * 3));
      setValidatedClaims(prev => prev + Math.floor(Math.random() * 2));
      setSubmittedClaims(prev => prev + Math.floor(Math.random() * 2));
      setValidationProgress(prev => prev >= 100 ? 0 : prev + 1.8);
      setApprovalRate(prev => Math.max(85, Math.min(95, prev + (Math.random() - 0.5) * 0.8)));
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const validationSteps = [
    { name: 'Document Verification', icon: FileText, status: 'completed', time: '5s', accuracy: 97.8 },
    { name: 'Coverage Analysis', icon: Shield, status: 'completed', time: '12s', accuracy: 96.5 },
    { name: 'Rule-based Validation', icon: ClipboardCheck, status: 'active', time: '18s', accuracy: 98.2 },
    { name: 'Medical Code Review', icon: Receipt, status: 'pending', time: '15s', accuracy: 94.7 },
    { name: 'TPA Submission', icon: Building, status: 'pending', time: '8s', accuracy: 99.1 }
  ];

  const claimTypes = [
    { type: 'Outpatient Care', count: 298, percentage: 38, color: 'from-blue-500 to-blue-600', avgAmount: '$425' },
    { type: 'Emergency Services', count: 156, percentage: 20, color: 'from-red-500 to-red-600', avgAmount: '$2,840' },
    { type: 'Prescription Drugs', count: 189, percentage: 24, color: 'from-green-500 to-green-600', avgAmount: '$185' },
    { type: 'Diagnostic Tests', count: 146, percentage: 18, color: 'from-purple-500 to-purple-600', avgAmount: '$650' }
  ];

  const recentClaims = [
    {
      id: 'CLM-2024-7821',
      patient: 'Sarah Johnson',
      provider: 'City Hospital',
      type: 'Emergency',
      amount: '$3,450',
      status: 'approved',
      submittedAt: '2 hours ago',
      tpa: 'Blue Cross',
      policy: 'Premium Plan'
    },
    {
      id: 'CLM-2024-7822',
      patient: 'Michael Chen',
      provider: 'Metro Clinic',
      type: 'Outpatient',
      amount: '$280',
      status: 'processing',
      submittedAt: '4 hours ago',
      tpa: 'Aetna',
      policy: 'Standard Plan'
    },
    {
      id: 'CLM-2024-7823',
      patient: 'Emma Davis',
      provider: 'Wellness Center',
      type: 'Prescription',
      amount: '$150',
      status: 'review',
      submittedAt: '6 hours ago',
      tpa: 'Cigna',
      policy: 'Basic Plan'
    },
    {
      id: 'CLM-2024-7824',
      patient: 'James Wilson',
      provider: 'Diagnostic Lab',
      type: 'Diagnostic',
      amount: '$720',
      status: 'approved',
      submittedAt: '8 hours ago',
      tpa: 'UnitedHealth',
      policy: 'Comprehensive'
    }
  ];

  const tpaPartners = [
    { name: 'Blue Cross Blue Shield', claims: 245, approved: 218, rate: 89.0, avgTime: '24h' },
    { name: 'Aetna', claims: 189, approved: 172, rate: 91.0, avgTime: '18h' },
    { name: 'Cigna', claims: 156, approved: 142, rate: 91.0, avgTime: '22h' },
    { name: 'UnitedHealth', claims: 199, approved: 178, rate: 89.4, avgTime: '20h' }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-emerald-950 via-green-900 to-teal-900 relative overflow-hidden">
      {/* Healthcare Claims Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(45,212,191,0.15),transparent_50%)]"></div>
        
        {/* Medical Form Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-12 h-full w-full gap-1">
            {[...Array(96)].map((_, i) => (
              <div key={i} className="border border-emerald-400/30 rounded-sm">
                <div className="w-full h-1 bg-emerald-400/20 mt-1"></div>
                <div className="w-3/4 h-1 bg-emerald-400/10 mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Medical & Insurance Icons */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${22 + Math.random() * 8}s`
            }}
          >
            {i % 5 === 0 && <ClipboardCheck className="w-7 h-7 text-emerald-400" />}
            {i % 5 === 1 && <Shield className="w-6 h-6 text-green-400" />}
            {i % 5 === 2 && <DollarSign className="w-5 h-5 text-teal-400" />}
            {i % 5 === 3 && <FileText className="w-6 h-6 text-emerald-300" />}
            {i % 5 === 4 && <Building className="w-8 h-8 text-green-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button 
              onClick={() => navigateTo('/service')}
              variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Healthcare
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Claims Processing
              </h1>
              <p className="text-emerald-200 text-lg">Validate insurance claims → Submit to TPAs</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-2">
              <ClipboardCheck className="w-4 h-4 mr-1" />
              AI Validation
            </Badge>
            <div className="text-3xl font-bold text-white">{approvalRate.toFixed(1)}%</div>
            <div className="text-emerald-200">Approval Rate</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border-emerald-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-400">{totalClaims}</div>
              <div className="text-emerald-200 text-sm">Total Claims</div>
              <div className="text-green-400 text-xs mt-1">+15% from last week</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400">{validatedClaims}</div>
              <div className="text-green-200 text-sm">Validated</div>
              <div className="text-green-400 text-xs mt-1">{((validatedClaims / totalClaims) * 100).toFixed(1)}% processed</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 border-teal-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-teal-400">{submittedClaims}</div>
              <div className="text-teal-200 text-sm">Submitted to TPA</div>
              <div className="text-teal-400 text-xs mt-1">{((submittedClaims / validatedClaims) * 100).toFixed(1)}% submitted</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400">$2.4M</div>
              <div className="text-cyan-200 text-sm">Total Amount</div>
              <div className="text-cyan-400 text-xs mt-1">This month</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Validation Process */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-emerald-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30">
                <CardTitle className="text-white flex items-center">
                  <ClipboardCheck className="w-6 h-6 mr-3 text-emerald-400" />
                  AI Rule-based Validation Engine
                </CardTitle>
                <CardDescription className="text-emerald-200">
                  Automated claims validation and TPA submission
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      {validationProgress.toFixed(0)}%
                    </div>
                    <div className="text-emerald-200 mb-4">Current Claim Validation</div>
                    <Progress value={validationProgress} className="h-4" />
                  </div>

                  {/* Validation Steps */}
                  <div className="space-y-6">
                    {validationSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-emerald-500/20 border-2 border-emerald-500' :
                            isActive ? 'bg-teal-500/20 border-2 border-teal-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-emerald-400' :
                              isActive ? 'text-teal-400' :
                              'text-gray-400'
                            }`} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-2xl bg-teal-500/30 animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-emerald-400' :
                                isActive ? 'text-teal-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-emerald-500/50 text-emerald-400' :
                                  isActive ? 'border-teal-500/50 text-teal-400' :
                                  'border-gray-500/50 text-gray-400'
                                }`}>
                                  {step.time}
                                </Badge>
                                <Badge variant="outline" className={`${
                                  step.accuracy > 97 ? 'border-green-500/50 text-green-400' :
                                  step.accuracy > 94 ? 'border-yellow-500/50 text-yellow-400' :
                                  'border-red-500/50 text-red-400'
                                }`}>
                                  {step.accuracy}%
                                </Badge>
                              </div>
                            </div>
                            {isActive && (
                              <Progress value={validationProgress} className="h-2" />
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

          {/* Claim Types & Statistics */}
          <div className="space-y-6">
            {/* Claim Types Distribution */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Claim Types</CardTitle>
                <CardDescription className="text-emerald-200">Distribution by category</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {claimTypes.map((type, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{type.type}</span>
                      <div className="text-right">
                        <span className="text-white font-bold text-sm">{type.count}</span>
                        <div className="text-emerald-300 text-xs">{type.avgAmount}</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${type.color}`}
                        style={{ width: `${type.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Statistics */}
            <Card className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border-teal-500/30">
              <CardHeader>
                <CardTitle className="text-white">Today's Statistics</CardTitle>
                <CardDescription className="text-teal-200">Processing metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-400">23s</div>
                    <div className="text-emerald-200 text-sm">Avg Processing</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-teal-400">96.5%</div>
                    <div className="text-teal-200 text-sm">Accuracy Rate</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                  <div className="text-3xl font-bold text-emerald-400">$425K</div>
                  <div className="text-emerald-200 text-sm">Claims Value Processed</div>
                  <div className="text-emerald-300 text-xs mt-1">Today</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* TPA Partners Status */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Building className="w-6 h-6 mr-3 text-teal-400" />
              TPA Partner Status
            </CardTitle>
            <CardDescription className="text-emerald-200">
              Third-party administrator performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-6">
              {tpaPartners.map((tpa, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">{tpa.name}</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-emerald-200">Claims</span>
                        <span className="text-white font-bold">{tpa.claims}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-emerald-200">Approved</span>
                        <span className="text-emerald-400 font-bold">{tpa.approved}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-emerald-200">Rate</span>
                        <span className="text-green-400 font-bold">{tpa.rate}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-emerald-200">Avg Time</span>
                        <span className="text-teal-400 font-bold">{tpa.avgTime}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <Progress value={tpa.rate} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ready to Transform Section */}
        <div className="mb-8">
          <ReadyToTransform 
          />
        </div>

        {/* Recent Claims */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <Receipt className="w-6 h-6 mr-3 text-emerald-400" />
                Recent Claims Processing
              </CardTitle>
              <CardDescription className="text-emerald-200">Latest claim submissions and status</CardDescription>
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
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentClaims.map((claim) => (
                <div key={claim.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="grid grid-cols-7 gap-4 items-center">
                    <div>
                      <div className="text-white font-medium">{claim.id}</div>
                      <div className="text-emerald-200 text-sm">{claim.patient}</div>
                    </div>
                    
                    <div>
                      <div className="text-white font-bold">{claim.provider}</div>
                      <div className="text-emerald-200 text-sm">Provider</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{claim.type}</div>
                      <div className="text-emerald-200 text-sm">Type</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{claim.amount}</div>
                      <div className="text-emerald-200 text-sm">Amount</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{claim.tpa}</div>
                      <div className="text-emerald-200 text-sm">{claim.policy}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{claim.submittedAt}</div>
                      <div className="text-emerald-200 text-sm">Submitted</div>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`${
                        claim.status === 'approved' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        claim.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        {claim.status === 'approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {claim.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                        {claim.status === 'review' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.08; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.15; }
        }
        .animate-float {
          animation: float 28s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ClaimsProcessingScreen;