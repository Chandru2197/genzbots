import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Scan, Calendar, FileText, CheckCircle, Clock, AlertCircle, Heart, Shield, Camera, UserCheck, Phone, MapPin, CreditCard, Stethoscope } from 'lucide-react';
import { BackToParent } from '@/components/ui/BackToParent';
import ReadyToTransform from '@/components/ReadyToTransform';
import { ROUTES } from '@/utils/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const PatientOnboardingScreen = () => {
  const [totalPatients, setTotalPatients] = useState(456);
  const [processedToday, setProcessedToday] = useState(423);
  const [scheduledAppointments, setScheduledAppointments] = useState(398);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ehrAccuracy, setEhrAccuracy] = useState(98.7);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPatients(prev => prev + Math.floor(Math.random() * 2));
      setProcessedToday(prev => prev + Math.floor(Math.random() * 2));
      setScheduledAppointments(prev => prev + Math.floor(Math.random() * 2));
      setOcrProgress(prev => prev >= 100 ? 0 : prev + 2.5);
      setEhrAccuracy(prev => Math.max(96, Math.min(99.9, prev + (Math.random() - 0.5) * 0.2)));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const onboardingSteps = [
    { name: 'ID Document Scan', icon: Camera, status: 'completed', time: '3s', accuracy: 99.2 },
    { name: 'OCR Data Extraction', icon: Scan, status: 'active', time: '8s', accuracy: 98.7 },
    { name: 'EHR Population', icon: FileText, status: 'pending', time: '12s', accuracy: 97.5 },
    { name: 'Insurance Verification', icon: Shield, status: 'pending', time: '15s', accuracy: 96.8 },
    { name: 'Appointment Scheduling', icon: Calendar, status: 'pending', time: '5s', accuracy: 99.5 }
  ];

  const patientCategories = [
    { category: 'New Patients', count: 156, percentage: 34, color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { category: 'Follow-up Visits', count: 189, percentage: 41, color: 'from-green-500 to-green-600', trend: '+8%' },
    { category: 'Emergency Admissions', count: 78, percentage: 17, color: 'from-red-500 to-red-600', trend: '-5%' },
    { category: 'Routine Check-ups', count: 33, percentage: 8, color: 'from-purple-500 to-purple-600', trend: '+15%' }
  ];

  const recentPatients = [
    {
      id: 'PT-2024-8947',
      name: 'Sarah Johnson',
      age: 34,
      type: 'New Patient',
      insurance: 'Blue Cross',
      status: 'completed',
      appointment: '2:30 PM Today',
      department: 'Cardiology',
      priority: 'routine'
    },
    {
      id: 'PT-2024-8948',
      name: 'Michael Chen',
      age: 45,
      type: 'Follow-up',
      insurance: 'Aetna',
      status: 'processing',
      appointment: '3:15 PM Today',
      department: 'Orthopedics',
      priority: 'normal'
    },
    {
      id: 'PT-2024-8949',
      name: 'Emma Davis',
      age: 28,
      type: 'Emergency',
      insurance: 'Medicare',
      status: 'urgent',
      appointment: 'Immediate',
      department: 'Emergency',
      priority: 'urgent'
    },
    {
      id: 'PT-2024-8950',
      name: 'James Wilson',
      age: 52,
      type: 'Routine',
      insurance: 'Cigna',
      status: 'completed',
      appointment: '1:45 PM Today',
      department: 'General Medicine',
      priority: 'routine'
    }
  ];

  const systemMetrics = [
    { metric: 'OCR Accuracy', value: '99.2%', target: '95%', status: 'excellent' },
    { metric: 'Processing Speed', value: '28s', target: '45s', status: 'excellent' },
    { metric: 'EHR Integration', value: '98.7%', target: '95%', status: 'excellent' },
    { metric: 'Patient Satisfaction', value: '96.4%', target: '90%', status: 'excellent' }
  ];

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Medical Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.15),transparent_50%)]"></div>
        
        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${(i % 5) * 20 + 10}%`,
                top: `${Math.floor(i / 5) * 25 + 10}%`,
                transform: 'rotate(45deg)'
              }}
            >
              <div className="w-8 h-2 bg-blue-400"></div>
              <div className="w-2 h-8 bg-blue-400 absolute top-0 left-3 -mt-3"></div>
            </div>
          ))}
        </div>

        {/* Floating Medical Icons */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {i % 4 === 0 && <Heart className="w-6 h-6 text-red-400" />}
            {i % 4 === 1 && <Stethoscope className="w-7 h-7 text-blue-400" />}
            {i % 4 === 2 && <User className="w-5 h-5 text-green-400" />}
            {i % 4 === 3 && <Shield className="w-6 h-6 text-purple-400" />}
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
                Patient Onboarding
              </h1>
              <p className="text-blue-200 text-lg">Scan IDs → Populate EHR → Schedule appointments</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-2">
              <Heart className="w-4 h-4 mr-1" />
              Live Processing
            </Badge>
            <div className="text-3xl font-bold text-white">{totalPatients}</div>
            <div className="text-blue-200">Patients Today</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400">{totalPatients}</div>
              <div className="text-blue-200 text-sm">Total Patients</div>
              <div className="text-green-400 text-xs mt-1">+8% from yesterday</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-400">{processedToday}</div>
              <div className="text-green-200 text-sm">Processed Today</div>
              <div className="text-green-400 text-xs mt-1">{((processedToday / totalPatients) * 100).toFixed(1)}% completion</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">{scheduledAppointments}</div>
              <div className="text-purple-200 text-sm">Appointments Scheduled</div>
              <div className="text-purple-400 text-xs mt-1">{((scheduledAppointments / processedToday) * 100).toFixed(1)}% scheduled</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400">{ehrAccuracy.toFixed(1)}%</div>
              <div className="text-cyan-200 text-sm">EHR Accuracy</div>
              <div className="text-green-400 text-xs mt-1">Above target</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Processing Monitor */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-blue-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30">
                <CardTitle className="text-white flex items-center">
                  <Scan className="w-6 h-6 mr-3 text-blue-400" />
                  UiPath + OCR Processing Pipeline
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Real-time patient data extraction and EHR integration
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {ocrProgress.toFixed(0)}%
                    </div>
                    <div className="text-blue-200 mb-4">Current Patient Processing</div>
                    <Progress value={ocrProgress} className="h-4" />
                  </div>

                  {/* Process Steps */}
                  <div className="space-y-6">
                    {onboardingSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-blue-500/20 border-2 border-blue-500' :
                            isActive ? 'bg-cyan-500/20 border-2 border-cyan-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-blue-400' :
                              isActive ? 'text-cyan-400' :
                              'text-gray-400'
                            }`} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-2xl bg-cyan-500/30 animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-blue-400' :
                                isActive ? 'text-cyan-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-blue-500/50 text-blue-400' :
                                  isActive ? 'border-cyan-500/50 text-cyan-400' :
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
                              <Progress value={ocrProgress} className="h-2" />
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

          {/* Patient Categories & System Performance */}
          <div className="space-y-6">
            {/* Patient Categories */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Patient Categories</CardTitle>
                <CardDescription className="text-blue-200">Today's patient distribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {patientCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{category.category}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold text-sm">{category.count}</span>
                        <Badge className={`text-xs ${
                          category.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {category.trend}
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Performance */}
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white">System Performance</CardTitle>
                <CardDescription className="text-green-200">Key efficiency metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-white font-medium text-sm">{metric.metric}</div>
                      <div className="text-green-200 text-xs">Target: {metric.target}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${
                        metric.status === 'excellent' ? 'text-green-400' :
                        metric.status === 'good' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {metric.value}
                      </div>
                      <div className={`text-xs ${
                        metric.status === 'excellent' ? 'text-green-300' :
                        metric.status === 'good' ? 'text-yellow-300' :
                        'text-red-300'
                      }`}>
                        {metric.status}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integration Tools */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg flex items-center">
                <Scan className="w-5 h-5 mr-2" />
                UiPath RPA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-200 text-sm">Bot Status</span>
                <Badge className="bg-green-500/20 text-green-400 text-xs">Active</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200 text-sm">Patients/Hour</span>
                <span className="text-blue-400 font-bold text-sm">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200 text-sm">Success Rate</span>
                <span className="text-blue-300 text-sm">98.7%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                OCR Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-purple-200 text-sm">Recognition</span>
                <span className="text-purple-400 font-bold text-sm">99.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-200 text-sm">Speed</span>
                <span className="text-purple-400 font-bold text-sm">3s avg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-200 text-sm">Documents</span>
                <span className="text-purple-300 text-sm">ID, Insurance</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                EHR System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-green-200 text-sm">Integration</span>
                <Badge className="bg-green-500/20 text-green-400 text-xs">Connected</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200 text-sm">Records Updated</span>
                <span className="text-green-400 font-bold text-sm">423</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200 text-sm">Data Quality</span>
                <span className="text-green-300 text-sm">98.7%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Scheduling
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-cyan-200 text-sm">Auto-Scheduled</span>
                <span className="text-cyan-400 font-bold text-sm">398</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-200 text-sm">Success Rate</span>
                <span className="text-cyan-400 font-bold text-sm">94.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-200 text-sm">Avg Wait Time</span>
                <span className="text-cyan-300 text-sm">12 min</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Patients */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-blue-400" />
                Recent Patient Onboarding
              </CardTitle>
              <CardDescription className="text-blue-200">Latest processed patients and appointments</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule View
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <FileText className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient) => (
                <div key={patient.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="grid grid-cols-6 gap-6 items-center">
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-white font-medium">{patient.name}</div>
                          <div className="text-blue-200 text-sm">Age: {patient.age}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{patient.type}</div>
                      <div className="text-blue-200 text-sm">Patient Type</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{patient.insurance}</div>
                      <div className="text-blue-200 text-sm">Insurance</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{patient.department}</div>
                      <div className="text-blue-200 text-sm">Department</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{patient.appointment}</div>
                      <div className="text-blue-200 text-sm">Appointment</div>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`mb-2 ${
                        patient.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        patient.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {patient.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {patient.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                        {patient.status === 'urgent' && <AlertCircle className="w-3 h-3 mr-1" />}
                        {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                      </Badge>
                      <div className={`text-xs ${
                        patient.priority === 'urgent' ? 'text-red-400' :
                        patient.priority === 'normal' ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {patient.priority} priority
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <ReadyToTransform productName="Patient Onboarding" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PatientOnboardingScreen;