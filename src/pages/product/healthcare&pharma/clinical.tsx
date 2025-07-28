import React, { useState, useEffect } from 'react';
import { ArrowLeft, FlaskConical, Database, FileText, CheckCircle, Clock, AlertTriangle, BarChart3, Users, Calendar, Microscope, Activity, TrendingUp, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ReadyToTransform from '@/components/ReadyToTransform';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';

const ClinicalTrialScreen = () => {
  const [totalReports, setTotalReports] = useState(123);
  const [extractedReports, setExtractedReports] = useState(118);
  const [enteredReports, setEnteredReports] = useState(115);
  const [extractionProgress, setExtractionProgress] = useState(0);
  const [dataAccuracy, setDataAccuracy] = useState(96.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalReports(prev => prev + Math.floor(Math.random() * 2));
      setExtractedReports(prev => prev + Math.floor(Math.random() * 2));
      setEnteredReports(prev => prev + Math.floor(Math.random() * 2));
      setExtractionProgress(prev => prev >= 100 ? 0 : prev + 2.2);
      setDataAccuracy(prev => Math.max(94, Math.min(99, prev + (Math.random() - 0.5) * 0.5)));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const extractionSteps = [
    { name: 'Lab Report Upload', icon: FileText, status: 'completed', time: '2s', accuracy: 99.5 },
    { name: 'Document Parsing', icon: Microscope, status: 'completed', time: '8s', accuracy: 97.2 },
    { name: 'Data Extraction', icon: Database, status: 'active', time: '15s', accuracy: 96.8 },
    { name: 'Data Validation', icon: CheckCircle, status: 'pending', time: '12s', accuracy: 98.1 },
    { name: 'Database Entry', icon: BarChart3, status: 'pending', time: '5s', accuracy: 99.7 }
  ];

  const trialPhases = [
    { phase: 'Phase I', reports: 28, percentage: 23, color: 'from-blue-500 to-blue-600', participants: 45 },
    { phase: 'Phase II', reports: 41, percentage: 33, color: 'from-green-500 to-green-600', participants: 120 },
    { phase: 'Phase III', reports: 38, percentage: 31, color: 'from-purple-500 to-purple-600', participants: 350 },
    { phase: 'Phase I', reports: 28, percentage: 23, color: 'from-blue-500 to-blue-600', participants: 45 },
    { phase: 'Phase II', reports: 41, percentage: 33, color: 'from-green-500 to-green-600', participants: 120 },
    { phase: 'Phase III', reports: 38, percentage: 31, color: 'from-purple-500 to-purple-600', participants: 350 },
    { phase: 'Phase IV', reports: 16, percentage: 13, color: 'from-orange-500 to-orange-600', participants: 280 }
  ];

  const recentReports = [
    {
      id: 'LAB-2024-CT891',
      trial: 'Cardio Drug X',
      phase: 'Phase III',
      participant: 'P-00347',
      testType: 'Blood Panel',
      status: 'completed',
      extractedAt: '1 hour ago',
      investigator: 'Dr. Sarah Chen',
      facility: 'Metro Research Center'
    },
    {
      id: 'LAB-2024-CT892',
      trial: 'Neuro Therapy Y',
      phase: 'Phase II',
      participant: 'P-00248',
      testType: 'Brain Scan',
      status: 'processing',
      extractedAt: '2 hours ago',
      investigator: 'Dr. Michael Torres',
      facility: 'Central Medical Institute'
    },
    {
      id: 'LAB-2024-CT893',
      trial: 'Cancer Treatment Z',
      phase: 'Phase I',
      participant: 'P-00156',
      testType: 'Biopsy Analysis',
      status: 'validation',
      extractedAt: '3 hours ago',
      investigator: 'Dr. Emily Watson',
      facility: 'University Hospital'
    },
    {
      id: 'LAB-2024-CT894',
      trial: 'Diabetes Study A',
      phase: 'Phase IV',
      participant: 'P-00523',
      testType: 'Glucose Monitoring',
      status: 'completed',
      extractedAt: '4 hours ago',
      investigator: 'Dr. James Liu',
      facility: 'Clinical Research Lab'
    }
  ];

  const dataMetrics = [
    { metric: 'Extraction Speed', value: '15s', target: '30s', status: 'excellent' },
    { metric: 'Data Accuracy', value: '96.8%', target: '90%', status: 'excellent' },
    { metric: 'Database Sync', value: '99.2%', target: '95%', status: 'excellent' },
    { metric: 'Error Rate', value: '0.8%', target: '<5%', status: 'excellent' }
  ];

  const therapeuticAreas = [
    { area: 'Oncology', trials: 15, reports: 45, color: 'from-red-500 to-red-600' },
    { area: 'Cardiology', trials: 8, reports: 28, color: 'from-blue-500 to-blue-600' },
    { area: 'Neurology', trials: 6, reports: 22, color: 'from-purple-500 to-purple-600' },
    { area: 'Endocrinology', trials: 4, reports: 18, color: 'from-green-500 to-green-600' },
    { area: 'Immunology', trials: 3, reports: 10, color: 'from-yellow-500 to-yellow-600' }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Scientific Research Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,69,255,0.15),transparent_50%)]"></div>
        
        {/* DNA Helix Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <path
                  d={`M ${i * 125},200 Q ${i * 125 + 62.5},100 ${(i + 1) * 125},200 T ${(i + 2) * 125},200`}
                  stroke="rgba(99,102,241,0.3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                <path
                  d={`M ${i * 125},800 Q ${i * 125 + 62.5},700 ${(i + 1) * 125},800 T ${(i + 2) * 125},800`}
                  stroke="rgba(139,69,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2 + 1}s` }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Floating Scientific Icons */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${25 + Math.random() * 10}s`
            }}
          >
            {i % 6 === 0 && <FlaskConical className="w-7 h-7 text-indigo-400" />}
            {i % 6 === 1 && <Microscope className="w-6 h-6 text-purple-400" />}
            {i % 6 === 2 && <Database className="w-8 h-8 text-violet-400" />}
            {i % 6 === 3 && <BarChart3 className="w-5 h-5 text-blue-400" />}
            {i % 6 === 4 && <Activity className="w-6 h-6 text-purple-300" />}
            {i % 6 === 5 && <Users className="w-7 h-7 text-indigo-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            <Button 
              onClick={() => navigateTo('/product')}
              variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Healthcare
            </Button>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">
                Clinical Trial Data Entry
              </h1>
              <p className="text-indigo-200 text-lg">Extract lab report data → Trial databases</p>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 mb-2">
              <FlaskConical className="w-4 h-4 mr-1" />
              Python + AA
            </Badge>
            <div className="text-3xl font-bold text-white">{dataAccuracy.toFixed(1)}%</div>
            <div className="text-indigo-200">Data Accuracy</div>
          </div>
        </div>

        {/* Key Performance Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border-indigo-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-indigo-400">{totalReports}</div>
              <div className="text-indigo-200 text-sm">Lab Reports</div>
              <div className="text-green-400 text-xs mt-1">+12% this week</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-400">{extractedReports}</div>
              <div className="text-purple-200 text-sm">Data Extracted</div>
              <div className="text-purple-400 text-xs mt-1">{((extractedReports / totalReports) * 100).toFixed(1)}% processed</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-violet-500/20 to-violet-600/20 border-violet-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-violet-400">{enteredReports}</div>
              <div className="text-violet-200 text-sm">Database Entries</div>
              <div className="text-violet-400 text-xs mt-1">{((enteredReports / extractedReports) * 100).toFixed(1)}% entered</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-400">795</div>
              <div className="text-blue-200 text-sm">Participants</div>
              <div className="text-blue-400 text-xs mt-1">Across all trials</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Live Data Extraction Process */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-indigo-500/30 h-full">
              <CardHeader className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30">
                <CardTitle className="text-white flex items-center">
                  <FlaskConical className="w-6 h-6 mr-3 text-indigo-400" />
                  Python + Automation Anywhere Pipeline
                </CardTitle>
                <CardDescription className="text-indigo-200">
                  Automated lab report data extraction and trial database integration
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {/* Current Progress */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-indigo-400 mb-2">
                      {extractionProgress.toFixed(0)}%
                    </div>
                    <div className="text-indigo-200 mb-4">Current Report Processing</div>
                    <Progress value={extractionProgress} className="h-4" />
                  </div>

                  {/* Extraction Steps */}
                  <div className="space-y-6">
                    {extractionSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      const isActive = step.status === 'active';
                      const isCompleted = step.status === 'completed';
                      
                      return (
                        <div key={index} className="flex items-center space-x-6">
                          <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isCompleted ? 'bg-indigo-500/20 border-2 border-indigo-500' :
                            isActive ? 'bg-purple-500/20 border-2 border-purple-500 animate-pulse' :
                            'bg-gray-500/20 border-2 border-gray-500/30'
                          }`}>
                            <IconComponent className={`w-8 h-8 ${
                              isCompleted ? 'text-indigo-400' :
                              isActive ? 'text-purple-400' :
                              'text-gray-400'
                            }`} />
                            {isActive && (
                              <div className="absolute inset-0 rounded-2xl bg-purple-500/30 animate-ping"></div>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className={`font-semibold ${
                                isCompleted ? 'text-indigo-400' :
                                isActive ? 'text-purple-400' :
                                'text-gray-400'
                              }`}>
                                {step.name}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className={`${
                                  isCompleted ? 'border-indigo-500/50 text-indigo-400' :
                                  isActive ? 'border-purple-500/50 text-purple-400' :
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
                              <Progress value={extractionProgress} className="h-2" />
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

          {/* Trial Phases & System Performance */}
          <div className="space-y-6">
            {/* Trial Phases Distribution */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Trial Phases</CardTitle>
                <CardDescription className="text-indigo-200">Reports by study phase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {trialPhases.map((phase, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm font-medium">{phase.phase}</span>
                      <div className="text-right">
                        <span className="text-white font-bold text-sm">{phase.reports}</span>
                        <div className="text-indigo-300 text-xs">{phase.participants} patients</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${phase.color}`}
                        style={{ width: `${phase.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Performance */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">System Performance</CardTitle>
                <CardDescription className="text-purple-200">Data processing metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {dataMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-white font-medium text-sm">{metric.metric}</div>
                      <div className="text-purple-200 text-xs">Target: {metric.target}</div>
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

        {/* Therapeutic Areas */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BarChart3 className="w-6 h-6 mr-3 text-purple-400" />
              Therapeutic Areas
            </CardTitle>
            <CardDescription className="text-indigo-200">
              Research focus distribution across medical specialties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-6">
              {therapeuticAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-3">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r ${area.color}`}>
                      <FlaskConical className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">{area.area}</div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">{area.trials}</div>
                    <div className="text-indigo-200 text-xs">Active Trials</div>
                    <div className="text-lg font-bold text-indigo-400">{area.reports}</div>
                    <div className="text-indigo-300 text-xs">Reports</div>
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

        {/* Recent Lab Reports */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <Microscope className="w-6 h-6 mr-3 text-indigo-400" />
                Recent Lab Report Processing
              </CardTitle>
              <CardDescription className="text-indigo-200">Latest extracted data and trial entries</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Phase
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="grid grid-cols-7 gap-4 items-center">
                    <div>
                      <div className="text-white font-medium">{report.id}</div>
                      <div className="text-indigo-200 text-sm">{report.trial}</div>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`${
                        report.phase === 'Phase I' ? 'bg-blue-500/20 text-blue-400' :
                        report.phase === 'Phase II' ? 'bg-green-500/20 text-green-400' :
                        report.phase === 'Phase III' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {report.phase}
                      </Badge>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{report.participant}</div>
                      <div className="text-indigo-200 text-sm">Participant</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{report.testType}</div>
                      <div className="text-indigo-200 text-sm">Test Type</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{report.investigator}</div>
                      <div className="text-indigo-200 text-sm">{report.facility}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-white font-bold">{report.extractedAt}</div>
                      <div className="text-indigo-200 text-sm">Processed</div>
                    </div>
                    
                    <div className="text-center">
                      <Badge className={`${
                        report.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        report.status === 'processing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }`}>
                        {report.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {report.status === 'processing' && <Clock className="w-3 h-3 mr-1" />}
                        {report.status === 'validation' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
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
          50% { transform: translateY(-50px) rotate(360deg); opacity: 0.2; }
        }
        .animate-float {
          animation: float 35s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ClinicalTrialScreen;