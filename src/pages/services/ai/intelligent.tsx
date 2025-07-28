import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Eye, Scan, Brain, CheckCircle, Clock, AlertTriangle, Image, Type, Zap, TrendingUp, Camera, Search, Download, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ReadyToTransform from '@/components/ReadyToTransform';

const IntelligentDocumentProcessingScreen = () => {
  const [totalDocuments, setTotalDocuments] = useState(45728);
  const [processedToday, setProcessedToday] = useState(1847);
  const [handwritingAccuracy, setHandwritingAccuracy] = useState(94.7);
  const [ocrProgress, setOcrProgress] = useState(67);
  const [extractedFields, setExtractedFields] = useState(289456);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalDocuments(prev => prev + (Math.random() > 0.92 ? Math.floor(Math.random() * 4) + 1 : 0));
      setProcessedToday(prev => prev + (Math.random() > 0.94 ? Math.floor(Math.random() * 2) + 1 : 0));
      setHandwritingAccuracy(prev => Math.max(90, Math.min(98, prev + (Math.random() - 0.5) * 0.5)));
      setOcrProgress(prev => (prev + 1.8) % 100);
      setExtractedFields(prev => prev + (Math.random() > 0.93 ? Math.floor(Math.random() * 10) + 5 : 0));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const documentTypes = [
    {
      type: 'Insurance Forms',
      icon: FileText,
      processed: 12847,
      accuracy: 96.2,
      avgProcessingTime: '3.2s',
      complexity: 'High',
      color: 'from-blue-600 to-blue-700',
      fields: ['Policy Number', 'Claim Amount', 'Date of Incident', 'Beneficiary Details'],
      handwritingSupport: true,
      confidence: 97.8
    },
    {
      type: 'Medical Records',
      icon: Image,
      processed: 8934,
      accuracy: 94.8,
      avgProcessingTime: '4.1s',
      complexity: 'Very High',
      color: 'from-green-600 to-green-700',
      fields: ['Patient ID', 'Diagnosis', 'Prescription', 'Doctor Signature'],
      handwritingSupport: true,
      confidence: 93.4
    },
    {
      type: 'Bank Statements',
      icon: Type,
      processed: 15632,
      accuracy: 98.9,
      avgProcessingTime: '2.1s',
      complexity: 'Medium',
      color: 'from-purple-600 to-purple-700',
      fields: ['Account Number', 'Transaction Amount', 'Date', 'Balance'],
      handwritingSupport: false,
      confidence: 99.1
    },
    {
      type: 'Legal Documents',
      icon: Scan,
      processed: 5847,
      accuracy: 92.3,
      avgProcessingTime: '6.8s',
      complexity: 'Very High',
      color: 'from-red-600 to-red-700',
      fields: ['Case Number', 'Client Name', 'Court Date', 'Legal Terms'],
      handwritingSupport: true,
      confidence: 89.7
    },
    {
      type: 'Tax Returns',
      icon: Brain,
      processed: 9734,
      accuracy: 95.6,
      avgProcessingTime: '3.9s',
      complexity: 'High',
      color: 'from-orange-600 to-orange-700',
      fields: ['SSN', 'Income', 'Deductions', 'Tax Liability'],
      handwritingSupport: true,
      confidence: 96.2
    },
    {
      type: 'Invoices',
      icon: CheckCircle,
      processed: 18234,
      accuracy: 97.4,
      avgProcessingTime: '2.8s',
      complexity: 'Medium',
      color: 'from-teal-600 to-teal-700',
      fields: ['Invoice Number', 'Amount', 'Due Date', 'Vendor Info'],
      handwritingSupport: false,
      confidence: 98.1
    }
  ];

  const recentProcessing = [
    {
      id: 'DOC-2024-45728',
      fileName: 'insurance_claim_form_4571.pdf',
      documentType: 'Insurance Forms',
      status: 'completed',
      confidence: 97.2,
      processingTime: '3.4s',
      extractedFields: 28,
      handwritingDetected: true,
      ocrAccuracy: 96.8,
      aiEnhancements: ['Handwriting Recognition', 'Field Validation', 'Data Normalization'],
      timestamp: '2024-02-15 14:32:18'
    },
    {
      id: 'DOC-2024-45727',
      fileName: 'patient_medical_record_789.jpg',
      documentType: 'Medical Records',
      status: 'processing',
      confidence: 94.1,
      processingTime: '4.2s',
      extractedFields: 22,
      handwritingDetected: true,
      ocrAccuracy: 93.5,
      aiEnhancements: ['Doctor Signature Detection', 'Medical Term Recognition', 'Layout Analysis'],
      timestamp: '2024-02-15 14:31:45'
    },
    {
      id: 'DOC-2024-45726',
      fileName: 'bank_statement_jan_2024.pdf',
      documentType: 'Bank Statements',
      status: 'completed',
      confidence: 99.8,
      processingTime: '2.1s',
      extractedFields: 156,
      handwritingDetected: false,
      ocrAccuracy: 99.2,
      aiEnhancements: ['Table Recognition', 'Amount Validation', 'Date Parsing'],
      timestamp: '2024-02-15 14:30:12'
    },
    {
      id: 'DOC-2024-45725',
      fileName: 'legal_contract_amendment.pdf',
      documentType: 'Legal Documents',
      status: 'review_required',
      confidence: 87.9,
      processingTime: '7.1s',
      extractedFields: 45,
      handwritingDetected: true,
      ocrAccuracy: 91.3,
      aiEnhancements: ['Legal Term Extraction', 'Clause Identification', 'Signature Verification'],
      timestamp: '2024-02-15 14:28:56'
    }
  ];

  const aiCapabilities = [
    {
      capability: 'Handwriting Recognition',
      accuracy: handwritingAccuracy,
      description: 'Advanced neural networks for cursive and print handwriting',
      icon: Type,
      improvements: '+12% this month'
    },
    {
      capability: 'Form Layout Analysis',
      accuracy: 96.8,
      description: 'Intelligent field detection and boundary recognition',
      icon: Scan,
      improvements: '+8% this month'
    },
    {
      capability: 'Data Validation',
      accuracy: 98.2,
      description: 'Context-aware field validation and error detection',
      icon: CheckCircle,
      improvements: '+5% this month'
    },
    {
      capability: 'Multi-language OCR',
      accuracy: 95.4,
      description: 'Support for 25+ languages with cultural context',
      icon: Brain,
      improvements: '+15% this month'
    }
  ];

  const processingStats = [
    { metric: 'Processing Speed', value: '3.2s avg', trend: '-25%', icon: Zap },
    { metric: 'Field Extraction', value: '98.7%', trend: '+3.1%', icon: Search },
    { metric: 'Auto-validation', value: '94.8%', trend: '+7.2%', icon: CheckCircle },
    { metric: 'Error Reduction', value: '89.3%', trend: '+12.4%', icon: TrendingUp }
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'processing': return 'bg-blue-500 animate-pulse';
      case 'review_required': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getComplexityColor = (complexity:any) => {
    switch (complexity) {
      case 'Very High': return 'text-red-400 bg-red-500/20';
      case 'High': return 'text-orange-400 bg-orange-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-zinc-950 relative overflow-hidden">
      {/* Document Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-10 gap-4 h-full p-4">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="border-2 border-gray-400 bg-white/10 rounded transform"
              style={{
                transform: `rotate(${Math.random() * 10 - 5}deg) scale(${0.8 + Math.random() * 0.4})`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <div className="h-full w-full flex flex-col p-1">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-1 bg-gray-500/30 mb-1 rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating AI Processing Icons */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-doc-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${20 + Math.random() * 15}s`
          }}
        >
          {i % 6 === 0 && <FileText className="w-8 h-8 text-blue-400" />}
          {i % 6 === 1 && <Scan className="w-7 h-7 text-green-400" />}
          {i % 6 === 2 && <Brain className="w-9 h-9 text-purple-400" />}
          {i % 6 === 3 && <Eye className="w-6 h-6 text-orange-400" />}
          {i % 6 === 4 && <Camera className="w-8 h-8 text-cyan-400" />}
          {i % 6 === 5 && <Type className="w-7 h-7 text-pink-400" />}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* AI-Enhanced Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="outline" className="bg-black/30 backdrop-blur-md text-white border-gray-500/30 hover:bg-gray-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to AI Services
              </Button>
              
              <div className="flex items-center space-x-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center border-4 border-purple-400/30 shadow-2xl transform rotate-3">
                    <Brain className="w-14 h-14 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-spin">
                    <Scan className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div>
                  <h1 className="text-6xl font-bold text-white mb-2">Intelligent Document Processing</h1>
                  <p className="text-gray-300 text-xl">Reads handwritten forms (Tools: UiPath + Google Vision)</p>
                  <div className="flex items-center space-x-8 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-purple-300 text-lg">AI Vision Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-lg">Handwriting {Math.round(handwritingAccuracy)}% Accurate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Processing Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-purple-500/20 border-purple-500/30 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <Brain className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                  <div className="text-lg font-bold text-white">{extractedFields.toLocaleString()}</div>
                  <div className="text-purple-200 text-sm">Fields Extracted</div>
                </CardContent>
              </Card>
              <Card className="bg-blue-500/20 border-blue-500/30 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                  <div className="text-lg font-bold text-white">{processedToday.toLocaleString()}</div>
                  <div className="text-blue-200 text-sm">Processed Today</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Document Type Analysis */}
        <div className="mb-12">
          <Card className="bg-black/50 backdrop-blur-md border-gray-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-700/20 to-slate-700/20">
              <CardTitle className="text-white flex items-center">
                <Camera className="w-6 h-6 mr-3 text-gray-400" />
                AI Document Type Analysis & Processing
              </CardTitle>
              <CardDescription className="text-gray-300">Advanced OCR with handwriting recognition capabilities</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {documentTypes.map((docType, index) => {
                  const IconComponent = docType.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className={`p-6 rounded-xl bg-gradient-to-br ${docType.color} shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300`}>
                        <div className="flex items-center justify-between mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                          <Badge className={`${getComplexityColor(docType.complexity)} border`}>
                            {docType.complexity}
                          </Badge>
                        </div>
                        
                        <h3 className="text-white font-bold text-lg mb-3">{docType.type}</h3>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-white/70 text-sm">Processed</span>
                            <span className="text-white font-bold">{docType.processed.toLocaleString()}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-white/70 text-sm">Accuracy</span>
                            <span className="text-white font-bold">{docType.accuracy}%</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-white/70 text-sm">Avg Time</span>
                            <span className="text-white font-bold">{docType.avgProcessingTime}</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-white/70 text-sm">Confidence</span>
                            <span className="text-white font-bold">{docType.confidence}%</span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <Progress value={docType.confidence} className="h-2 mb-3" />
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/70 text-xs">Handwriting Support</span>
                            {docType.handwritingSupport ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <AlertTriangle className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          
                          <div className="space-y-1">
                            <p className="text-white/60 text-xs">Key Fields:</p>
                            <div className="flex flex-wrap gap-1">
                              {docType.fields.slice(0, 2).map((field, fieldIndex) => (
                                <Badge key={fieldIndex} variant="outline" className="text-xs border-white/30 text-white/80">
                                  {field}
                                </Badge>
                              ))}
                              {docType.fields.length > 2 && (
                                <Badge variant="outline" className="text-xs border-white/30 text-white/60">
                                  +{docType.fields.length - 2}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Capabilities & Recent Processing */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* AI Capabilities */}
          <div>
            <Card className="bg-black/40 backdrop-blur-md border-purple-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-purple-400" />
                  AI Capabilities
                </CardTitle>
                <CardDescription className="text-purple-200">Advanced machine learning features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiCapabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div key={index} className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-medium text-sm">{capability.capability}</span>
                      </div>
                      <p className="text-gray-300 text-xs mb-3">{capability.description}</p>
                      
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-200 text-sm">Accuracy</span>
                        <span className="text-white font-bold">{capability.accuracy.toFixed(1)}%</span>
                      </div>
                      <Progress value={capability.accuracy} className="h-2 mb-2" />
                      
                      <Badge className="bg-green-500/20 text-green-400 text-xs">
                        {capability.improvements}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Live OCR Progress */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Live OCR Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-200">Current Batch</span>
                    <span className="text-white font-bold">#{Math.floor(ocrProgress/10) + 47}</span>
                  </div>
                  <Progress value={ocrProgress} className="h-3" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{Math.round(ocrProgress)}%</div>
                    <div className="text-blue-200 text-sm">Processing 89 documents</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Processing Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Scan className="w-6 h-6 mr-3 text-green-400" />
                  Recent Document Processing
                </CardTitle>
                <CardDescription className="text-green-200">Real-time processing status with AI enhancements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentProcessing.map((doc, index) => (
                  <div key={doc.id} className="p-5 border border-gray-700 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={`${getStatusColor(doc.status)} text-white`}>
                            {doc.status.replace('_', ' ').charAt(0).toUpperCase() + doc.status.replace('_', ' ').slice(1)}
                          </Badge>
                          <Badge variant="outline" className="border-gray-600 text-gray-300">
                            {doc.documentType}
                          </Badge>
                          <span className="text-gray-500 text-sm">#{doc.id}</span>
                        </div>
                        
                        <h3 className="text-white font-semibold text-lg mb-2">{doc.fileName}</h3>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                          <div>
                            <span className="text-gray-400">Confidence:</span>
                            <p className="text-white font-bold">{doc.confidence}%</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Processing Time:</span>
                            <p className="text-blue-400 font-medium">{doc.processingTime}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Fields Extracted:</span>
                            <p className="text-green-400 font-bold">{doc.extractedFields}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">OCR Accuracy:</span>
                            <p className="text-purple-400 font-medium">{doc.ocrAccuracy}%</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-gray-400 text-sm mb-2">{doc.timestamp}</p>
                        {doc.handwritingDetected && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Type className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 text-sm">Handwriting Detected</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-gray-400 text-sm mb-2">AI Enhancements Applied:</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.aiEnhancements.map((enhancement, enhIndex) => (
                          <Badge key={enhIndex} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                            <Brain className="w-3 h-3 mr-1" />
                            {enhancement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="bg-white/10 text-white border-white/20">
                          <Eye className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/10 text-white border-white/20">
                          <Download className="w-3 h-3 mr-1" />
                          Export Data
                        </Button>
                      </div>
                      
                      {doc.status === 'completed' && (
                        <div className="flex items-center space-x-2 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Processing Complete</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <Card className="bg-black/40 backdrop-blur-md border-gray-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-gray-400" />
              Processing Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processingStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-6 border border-gray-700 rounded-lg bg-gray-800/20 hover:bg-gray-800/40 transition-all">
                    <IconComponent className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm mb-2">{stat.metric}</div>
                    <Badge className={`text-xs ${
                      (stat.trend.startsWith('+') && !stat.metric.includes('Speed')) || 
                      (stat.trend.startsWith('-') && stat.metric.includes('Speed'))
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {stat.trend}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Ready to Transform Section */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
              <ReadyToTransform />
            </div>

      <style jsx>{`
        @keyframes doc-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.1; 
          }
          25% { 
            transform: translateY(-30px) rotate(90deg) scale(1.2); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-10px) rotate(180deg) scale(0.8); 
            opacity: 0.15; 
          }
          75% { 
            transform: translateY(-40px) rotate(270deg) scale(1.1); 
            opacity: 0.25; 
          }
        }
        .animate-doc-float {
          animation: doc-float 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default IntelligentDocumentProcessingScreen;