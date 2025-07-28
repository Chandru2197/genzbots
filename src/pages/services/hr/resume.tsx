import React, { useState, useEffect } from 'react';
import { ArrowLeft, Brain, Users, TrendingUp, Star, CheckCircle, Clock, Eye, Download, Filter, Search, Award, Target, Zap, FileText, User, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigation } from '@/utils/navigation';
import ReadyToTransform from '@/components/ReadyToTransform';

const ResumeScreeningScreen = () => {
  const [totalResumes, setTotalResumes] = useState(567);
  const [parsedResumes, setParsedResumes] = useState(534);
  const [shortlistedCandidates, setShortlistedCandidates] = useState(89);
  const [aiProcessing, setAiProcessing] = useState(0);
  const [matchAccuracy, setMatchAccuracy] = useState(94.7);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalResumes(prev => prev + Math.floor(Math.random() * 3));
      setParsedResumes(prev => prev + Math.floor(Math.random() * 2));
      setShortlistedCandidates(prev => prev + (Math.random() > 0.85 ? 1 : 0));
      setAiProcessing(prev => (prev + 2.5) % 100);
      setMatchAccuracy(prev => Math.max(90, Math.min(98, prev + (Math.random() - 0.5) * 0.8)));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const candidates = [
    {
      id: 'C-001',
      name: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      experience: '5 years',
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
      matchScore: 96,
      status: 'interview',
      avatar: 'SJ',
      education: 'MS Computer Science',
      location: 'San Francisco, CA',
      salary: '$120K',
      rank: 1
    },
    {
      id: 'C-002',
      name: 'Michael Chen',
      position: 'DevOps Engineer',
      experience: '7 years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Python'],
      matchScore: 94,
      status: 'shortlisted',
      avatar: 'MC',
      education: 'BS Software Engineering',
      location: 'Seattle, WA',
      salary: '$135K',
      rank: 2
    },
    {
      id: 'C-003',
      name: 'Emma Davis',
      position: 'UX/UI Designer',
      experience: '4 years',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      matchScore: 91,
      status: 'reviewing',
      avatar: 'ED',
      education: 'BA Design',
      location: 'Austin, TX',
      salary: '$95K',
      rank: 3
    },
    {
      id: 'C-004',
      name: 'James Wilson',
      position: 'Data Scientist',
      experience: '6 years',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
      matchScore: 89,
      status: 'shortlisted',
      avatar: 'JW',
      education: 'PhD Data Science',
      location: 'Boston, MA',
      salary: '$140K',
      rank: 4
    },
    {
      id: 'C-005',
      name: 'Lisa Rodriguez',
      position: 'Product Manager',
      experience: '8 years',
      skills: ['Agile', 'Scrum', 'Roadmapping', 'Analytics'],
      matchScore: 87,
      status: 'reviewing',
      avatar: 'LR',
      education: 'MBA',
      location: 'New York, NY',
      salary: '$150K',
      rank: 5
    }
  ];

  const skillDemand = [
    { skill: 'React', demand: 95, candidates: 23, growth: '+12%' },
    { skill: 'Python', demand: 92, candidates: 31, growth: '+18%' },
    { skill: 'AWS', demand: 89, candidates: 19, growth: '+25%' },
    { skill: 'Machine Learning', demand: 87, candidates: 14, growth: '+35%' },
    { skill: 'TypeScript', demand: 84, candidates: 17, growth: '+22%' },
    { skill: 'Docker', demand: 82, candidates: 12, growth: '+28%' }
  ];

  const aiMetrics = [
    { metric: 'Parse Accuracy', value: '98.7%', trend: '+2.1%', icon: FileText },
    { metric: 'Skill Matching', value: '94.7%', trend: '+1.8%', icon: Target },
    { metric: 'Ranking Precision', value: '91.2%', trend: '+3.2%', icon: Award },
    { metric: 'Processing Speed', value: '2.3s', trend: '-15%', icon: Zap }
  ];

  const { navigateTo } = useNavigation();

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-br from-rose-950 via-pink-900 to-purple-950 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Animated Neural Connections */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {/* Neural Network Nodes */}
            {[...Array(50)].map((_, i) => {
              const x = (i % 10) * 100 + 50;
              const y = Math.floor(i / 10) * 100 + 50;
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="rgba(236, 72, 153, 0.6)"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                  {/* Connection Lines */}
                  {i % 10 < 9 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 100}
                      y2={y + (Math.random() - 0.5) * 40}
                      stroke="rgba(236, 72, 153, 0.3)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Floating HR Icons */}
        {[...Array(15)].map((_, i) => (
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
            {i % 5 === 0 && <Brain className="w-7 h-7 text-pink-400" />}
            {i % 5 === 1 && <Users className="w-6 h-6 text-purple-400" />}
            {i % 5 === 2 && <Award className="w-8 h-8 text-rose-400" />}
            {i % 5 === 3 && <Target className="w-5 h-5 text-pink-300" />}
            {i % 5 === 4 && <Briefcase className="w-6 h-6 text-purple-300" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Innovative Header with Circular Progress */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button 
              onClick={() => navigateTo('/product')}
              variant="outline" className="bg-black/30 backdrop-blur-md text-white border-pink-500/30 hover:bg-pink-500/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to HR
              </Button>
              <div>
                <div className="flex items-center space-x-6 mb-4">
                  {/* Circular AI Progress Indicator */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <Brain className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <svg className="absolute inset-0 w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="rgba(236, 72, 153, 0.3)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="rgb(236, 72, 153)"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${(aiProcessing / 100) * 226.19} 226.19`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-2">Resume Screening</h1>
                    <p className="text-pink-200 text-lg">Parse resumes → Rank candidates with AI NLP + ChatGPT</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Processing Indicator */}
            <div className="text-right">
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{matchAccuracy.toFixed(1)}%</div>
                  <div className="text-purple-200 text-sm">AI Match Accuracy</div>
                  <div className="text-purple-300 text-xs mt-1">NLP + ChatGPT</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Revolutionary Candidate Ranking Flow */}
        <div className="mb-12">
          <Card className="bg-black/50 backdrop-blur-md border-pink-500/30 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-pink-600/20 to-purple-600/20">
              <CardTitle className="text-white flex items-center">
                <Award className="w-6 h-6 mr-3 text-pink-400" />
                AI-Powered Candidate Ranking Pipeline
              </CardTitle>
              <CardDescription className="text-pink-200">Real-time candidate evaluation and scoring</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* Horizontal Candidate Flow */}
              <div className="relative">
                {/* Flow Line */}
                <div className="absolute top-16 left-8 right-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                
                {/* Candidates in Flow */}
                <div className="flex justify-between items-start relative">
                  {candidates.slice(0, 5).map((candidate, index) => (
                    <div key={candidate.id} className="relative group">
                      {/* Rank Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                          index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                          index === 2 ? 'bg-gradient-to-br from-orange-600 to-red-600' :
                          'bg-gradient-to-br from-purple-500 to-pink-500'
                        }`}>
                          #{candidate.rank}
                        </div>
                      </div>

                      {/* Candidate Card */}
                      <div className={`w-48 p-4 rounded-xl backdrop-blur-md border-2 transition-all duration-300 group-hover:scale-105 group-hover:z-30 ${
                        candidate.status === 'interview' ? 'bg-green-500/20 border-green-500' :
                        candidate.status === 'shortlisted' ? 'bg-blue-500/20 border-blue-500' :
                        'bg-yellow-500/20 border-yellow-500'
                      }`}>
                        {/* Avatar */}
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {candidate.avatar}
                          </div>
                        </div>
                        
                        {/* Candidate Info */}
                        <div className="text-center mb-3">
                          <h3 className="text-white font-bold text-sm mb-1">{candidate.name}</h3>
                          <p className="text-gray-300 text-xs mb-2">{candidate.position}</p>
                          
                          {/* Match Score */}
                          <div className="mb-3">
                            <div className="flex items-center justify-center space-x-2 mb-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-white font-bold">{candidate.matchScore}%</span>
                            </div>
                            <Progress value={candidate.matchScore} className="h-2" />
                          </div>
                          
                          {/* Status Badge */}
                          <Badge className={`mb-3 ${
                            candidate.status === 'interview' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                            candidate.status === 'shortlisted' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                            'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          }`}>
                            {candidate.status === 'interview' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {candidate.status === 'shortlisted' && <Eye className="w-3 h-3 mr-1" />}
                            {candidate.status === 'reviewing' && <Clock className="w-3 h-3 mr-1" />}
                            {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                          </Badge>
                        </div>
                        
                        {/* Skills Preview */}
                        <div className="space-y-1">
                          <div className="text-gray-400 text-xs">Key Skills:</div>
                          <div className="flex flex-wrap gap-1">
                            {candidate.skills.slice(0, 2).map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="outline" className="text-xs border-pink-500/30 text-pink-300">
                                {skill}
                              </Badge>
                            ))}
                            {candidate.skills.length > 2 && (
                              <Badge variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                                +{candidate.skills.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Hover Details Panel */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40">
                        <div className="bg-black/90 backdrop-blur-md border border-pink-500/30 rounded-lg p-4 text-sm whitespace-nowrap">
                          <div className="space-y-2">
                            <div><span className="text-gray-400">Experience:</span> <span className="text-white">{candidate.experience}</span></div>
                            <div><span className="text-gray-400">Education:</span> <span className="text-white">{candidate.education}</span></div>
                            <div><span className="text-gray-400">Location:</span> <span className="text-white">{candidate.location}</span></div>
                            <div><span className="text-gray-400">Expected:</span> <span className="text-green-400">{candidate.salary}</span></div>
                            <div><span className="text-gray-400">All Skills:</span> <span className="text-pink-400">{candidate.skills.join(', ')}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Multi-Panel Analytics Layout */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Skill Demand Heatmap */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 backdrop-blur-md border-purple-500/30 h-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-purple-400" />
                  Skill Demand Heatmap
                </CardTitle>
                <CardDescription className="text-purple-200">Market trends and candidate availability</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {skillDemand.map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${
                            skill.demand > 90 ? 'bg-red-500 animate-pulse' :
                            skill.demand > 80 ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}></div>
                          <span className="text-white font-medium">{skill.skill}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-400 text-sm">{skill.candidates} candidates</span>
                          <Badge className={`text-xs ${
                            skill.growth.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}>
                            {skill.growth}
                          </Badge>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1000 ${
                              skill.demand > 90 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                              skill.demand > 80 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                              'bg-gradient-to-r from-green-500 to-green-600'
                            }`}
                            style={{ width: `${skill.demand}%` }}
                          ></div>
                        </div>
                        <div className="absolute right-2 top-0 bottom-0 flex items-center">
                          <span className="text-white text-xs font-bold">{skill.demand}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Metrics & Quick Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Performance Metrics */}
            <Card className="bg-black/40 backdrop-blur-md border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-pink-400" />
                  AI Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-pink-400" />
                        <span className="text-white font-medium text-sm">{metric.metric}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold">{metric.value}</div>
                        <div className={`text-xs ${
                          metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.trend}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Processing Stats */}
            <Card className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-white">Processing Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">{totalResumes}</div>
                    <div className="text-pink-200 text-sm">Total Resumes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{parsedResumes}</div>
                    <div className="text-purple-200 text-sm">Parsed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{shortlistedCandidates}</div>
                    <div className="text-gray-200 text-sm">Shortlisted</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Control Panel */}
        <Card className="bg-black/40 backdrop-blur-md border-rose-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-3 text-rose-400" />
                Recruitment Control Panel
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="bg-white/10 text-white border-white/20">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filter
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/20">
                  <Download className="w-4 h-4 mr-2" />
                  Export Results
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Schedule Interviews
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

{/* Ready to Transform Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <ReadyToTransform />
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.08; 
          }
          50% { 
            transform: translateY(-50px) rotate(180deg); 
            opacity: 0.2; 
          }
        }
        .animate-float {
          animation: float 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ResumeScreeningScreen;