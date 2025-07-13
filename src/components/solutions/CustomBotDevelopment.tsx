import React, { useState, useEffect } from 'react';
import { ArrowLeft, Settings, Code, Layers, GitBranch, Terminal, Database, Cloud, Zap, CheckCircle, Clock, Users, Star, Play, ChevronRight, Target, Award, Shield, Bot, Sparkles, ArrowUp, Calendar, Phone, MessageCircle, Eye, Brain, Activity, Cpu, Monitor, Globe, Puzzle, Lightbulb, Wrench, TestTube, Calculator, BarChart3 } from 'lucide-react';
import { useRouter } from 'next/router';

interface DevelopmentStage {
  id: number;
  title: string;
  description: string;
  duration: string;
  status: 'completed' | 'active' | 'upcoming' | 'planning';
  progress: number;
  icon: React.ReactNode;
  deliverables: string[];
  techStack: string[];
}

interface BotArchetype {
  name: string;
  category: string;
  description: string;
  complexity: 'Basic' | 'Advanced' | 'Enterprise';
  timeline: string;
  price: string;
  features: string[];
  techStack: string[];
  useCases: string[];
  color: string;
  icon: React.ReactNode;
}

interface ProjectShowcase {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  techStack: string[];
  complexity: string;
  image: string;
}

const CustomBotDevelopment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('process');
  const [activeStage, setActiveStage] = useState<number>(1);
  const [selectedArchetype, setSelectedArchetype] = useState<number>(0);
  const [codeAnimation, setCodeAnimation] = useState<number>(0);
  const [devMetrics, setDevMetrics] = useState({
    linesOfCode: 0,
    testsWritten: 0,
    deployments: 0,
    performance: 0
  });

  // Animate development metrics
  useEffect(() => {
    const timer = setInterval(() => {
      setDevMetrics(prev => ({
        linesOfCode: Math.min(prev.linesOfCode + 247, 15420),
        testsWritten: Math.min(prev.testsWritten + 12, 892),
        deployments: Math.min(prev.deployments + 1, 156),
        performance: Math.min(prev.performance + 2.3, 99.7)
      }));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Code animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeAnimation(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const developmentStages: DevelopmentStage[] = [
    {
      id: 1,
      title: 'Requirements Analysis',
      description: 'Deep dive into your business needs and technical requirements',
      duration: '3-5 days',
      status: 'completed',
      progress: 100,
      icon: <Target className="w-6 h-6" />,
      deliverables: ['Requirements Document', 'Technical Specifications', 'Project Roadmap', 'Resource Planning'],
      techStack: ['Business Analysis', 'System Architecture', 'API Documentation']
    },
    {
      id: 2,
      title: 'System Architecture',
      description: 'Design scalable and robust bot architecture',
      duration: '5-7 days',
      status: 'active',
      progress: 75,
      icon: <Layers className="w-6 h-6" />,
      deliverables: ['Architecture Diagrams', 'Database Schema', 'API Design', 'Security Framework'],
      techStack: ['Microservices', 'Cloud Infrastructure', 'API Gateway', 'Security Protocols']
    },
    {
      id: 3,
      title: 'Core Development',
      description: 'Build the bot logic and core functionality',
      duration: '2-4 weeks',
      status: 'upcoming',
      progress: 45,
      icon: <Code className="w-6 h-6" />,
      deliverables: ['Bot Engine', 'ML Models', 'Business Logic', 'Integration Layer'],
      techStack: ['Python/Node.js', 'TensorFlow', 'Natural Language Processing', 'API Integration']
    },
    {
      id: 4,
      title: 'Integration & Testing',
      description: 'Integrate with your systems and comprehensive testing',
      duration: '1-2 weeks',
      status: 'upcoming',
      progress: 20,
      icon: <TestTube className="w-6 h-6" />,
      deliverables: ['System Integration', 'Automated Tests', 'Performance Reports', 'Security Audit'],
      techStack: ['Jest/PyTest', 'Load Testing', 'Security Scanning', 'API Testing']
    },
    {
      id: 5,
      title: 'Deployment & Launch',
      description: 'Deploy to production with monitoring and optimization',
      duration: '3-5 days',
      status: 'planning',
      progress: 0,
      icon: <Cloud className="w-6 h-6" />,
      deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation', 'Training Materials'],
      techStack: ['AWS/Azure', 'Docker', 'Kubernetes', 'Monitoring Tools']
    }
  ];

  const botArchetypes: BotArchetype[] = [
    {
      name: 'Customer Service Bot',
      category: 'Communication',
      description: 'Intelligent customer support automation with natural language understanding',
      complexity: 'Advanced',
      timeline: '4-6 weeks',
      price: '$15,000 - $25,000',
      features: ['24/7 Customer Support', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Logic', 'Knowledge Base Integration'],
      techStack: ['Natural Language Processing', 'Machine Learning', 'Real-time Chat APIs', 'Sentiment Analysis'],
      useCases: ['E-commerce Support', 'SaaS Help Desk', 'Banking Inquiries', 'Healthcare Information'],
      color: '#3b82f6',
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      name: 'Sales Automation Bot',
      category: 'Revenue',
      description: 'End-to-end sales process automation from lead to conversion',
      complexity: 'Enterprise',
      timeline: '6-10 weeks',
      price: '$25,000 - $45,000',
      features: ['Lead Qualification', 'Meeting Scheduling', 'Follow-up Sequences', 'CRM Integration', 'Sales Analytics'],
      techStack: ['CRM APIs', 'Calendar Integration', 'Email Automation', 'Analytics Engine'],
      useCases: ['B2B Sales', 'Real Estate', 'Insurance', 'Consulting Services'],
      color: '#10b981',
      icon: <Target className="w-8 h-8" />
    },
    {
      name: 'Data Processing Bot',
      category: 'Operations',
      description: 'Automated data collection, processing, and reporting system',
      complexity: 'Advanced',
      timeline: '3-5 weeks',
      price: '$12,000 - $22,000',
      features: ['Data Extraction', 'Real-time Processing', 'Custom Reports', 'Data Validation', 'API Integrations'],
      techStack: ['Data Pipeline', 'ETL Processes', 'Database Management', 'Reporting Engine'],
      useCases: ['Financial Reporting', 'Inventory Management', 'Analytics Dashboards', 'Compliance Reporting'],
      color: '#f59e0b',
      icon: <Database className="w-8 h-8" />
    },
    {
      name: 'Workflow Automation Bot',
      category: 'Productivity',
      description: 'Custom business process automation tailored to your workflows',
      complexity: 'Basic',
      timeline: '2-4 weeks',
      price: '$8,000 - $15,000',
      features: ['Process Automation', 'Task Scheduling', 'Notification System', 'Multi-system Integration', 'Custom Logic'],
      techStack: ['Workflow Engine', 'Task Scheduler', 'API Integration', 'Notification Services'],
      useCases: ['HR Processes', 'Invoice Processing', 'Content Management', 'Project Management'],
      color: '#8b5cf6',
      icon: <Settings className="w-8 h-8" />
    }
  ];

  const projectShowcases: ProjectShowcase[] = [
    {
      title: 'AI-Powered Insurance Claims Bot',
      client: 'SecureLife Insurance',
      industry: 'Insurance',
      challenge: 'Manual claims processing taking 2-3 weeks with high error rates',
      solution: 'Custom bot that processes claims in 24 hours with 99.5% accuracy',
      results: ['85% faster processing', '99.5% accuracy rate', '$2M annual savings', '95% customer satisfaction'],
      timeline: '8 weeks',
      techStack: ['Python', 'TensorFlow', 'OCR Technology', 'REST APIs'],
      complexity: 'Enterprise',
      image: '🏢'
    },
    {
      title: 'Multi-channel Support Bot',
      client: 'TechFlow Solutions',
      industry: 'SaaS',
      challenge: 'Scaling customer support across multiple channels',
      solution: 'Unified bot handling chat, email, and social media inquiries',
      results: ['24/7 availability', '70% query resolution', '40% cost reduction', '92% CSAT score'],
      timeline: '6 weeks',
      techStack: ['Node.js', 'Natural Language Processing', 'Multi-API Integration'],
      complexity: 'Advanced',
      image: '💬'
    },
    {
      title: 'Real Estate Lead Bot',
      client: 'PropertyMax Realty',
      industry: 'Real Estate',
      challenge: 'Lead qualification and follow-up consuming too much time',
      solution: 'Smart bot qualifying leads and scheduling property viewings',
      results: ['300% more qualified leads', '50% faster response time', '25% increase in conversions'],
      timeline: '4 weeks',
      techStack: ['Python', 'Calendar APIs', 'CRM Integration', 'WhatsApp API'],
      complexity: 'Advanced',
      image: '🏠'
    }
  ];

  const developmentStats = [
    { month: 'Week 1', backend: 20, frontend: 15, testing: 5, deployment: 0 },
    { month: 'Week 2', backend: 45, frontend: 30, testing: 15, deployment: 0 },
    { month: 'Week 3', backend: 70, frontend: 60, testing: 35, deployment: 10 },
    { month: 'Week 4', backend: 90, frontend: 85, testing: 70, deployment: 30 },
    { month: 'Week 5', backend: 100, frontend: 95, testing: 90, deployment: 70 },
    { month: 'Week 6', backend: 100, frontend: 100, testing: 100, deployment: 100 }
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Matrix-like Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-green-400 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 200 + 50}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-20 opacity-20 font-mono text-green-400 text-xs animate-pulse">
          {`function createBot() {\n  return new AI();\n}`}
        </div>
        <div className="absolute bottom-40 right-20 opacity-20 font-mono text-blue-400 text-xs animate-pulse delay-1000">
          {`const bot = await deploy();\nbot.start();`}
        </div>
        <div className="absolute top-1/2 left-10 opacity-20 font-mono text-purple-400 text-xs animate-pulse delay-2000">
          {`// Custom automation\nif (condition) {\n  execute();\n}`}
        </div>
      </div>


      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <button className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-gray-600 text-white rounded-lg transition-colors cursor-pointer" onClick={()=>router.push('/solutions')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </button>
      </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-lg shadow-lg">
              <Code className="w-5 h-5 mr-2" />
              Custom Bot Development
            </div>
            
            <h1 className="text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Code Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Perfect Bot
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              When off-the-shelf solutions don't fit, we build bespoke automation that perfectly matches 
              your unique business requirements. From concept to deployment, we craft intelligent bots 
              that evolve with your needs.
            </p>

            {/* Live Development Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-xs text-gray-400">LIVE</span>
                </div>
                <div className="text-2xl font-bold text-green-400">{devMetrics.linesOfCode.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Lines of Code Written</div>
              </div>
              
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <TestTube className="w-5 h-5 text-blue-400" />
                  <span className="text-xs text-gray-400">ACTIVE</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">{devMetrics.testsWritten}</div>
                <div className="text-xs text-gray-400">Tests Written</div>
              </div>
              
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Cloud className="w-5 h-5 text-purple-400" />
                  <span className="text-xs text-gray-400">DEPLOYED</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">{devMetrics.deployments}</div>
                <div className="text-xs text-gray-400">Successful Deployments</div>
              </div>
              
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-xs text-gray-400">OPTIMIZED</span>
                </div>
                <div className="text-2xl font-bold text-yellow-400">{devMetrics.performance.toFixed(1)}%</div>
                <div className="text-xs text-gray-400">Performance Score</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg shadow-xl transition-all">
                <Terminal className="w-5 h-5 mr-2" />
                Start Development
              </button>
              <button className="flex items-center px-6 py-3 border border-gray-600 text-white hover:bg-white/10 rounded-lg transition-colors">
                <Play className="w-5 h-5 mr-2" />
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Content - Code Editor Mockup */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-lg">
            <div className="border-b border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400">custom-bot.py</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-green-500/20 text-green-400 border border-green-500 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Building...
                </div>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <div className="text-gray-500"># Custom Bot Development Framework</div>
                <div className="text-blue-400">
                  <span className="text-purple-400">class</span> CustomBot:
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-purple-400">def</span> <span className="text-yellow-400">__init__</span>(self, requirements):
                </div>
                <div className="text-gray-300 ml-8">
                  self.ai_engine = <span className="text-green-400">AIEngine()</span>
                </div>
                <div className="text-gray-300 ml-8">
                  self.integrations = <span className="text-green-400">[]</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-purple-400">def</span> <span className="text-yellow-400">process</span>(self, input):
                </div>
                <div className="text-gray-300 ml-8">
                  result = self.ai_engine.analyze(input)
                </div>
                <div className="text-gray-300 ml-8">
                  <span className="text-purple-400">return</span> self.optimize(result)
                </div>
                <div className="text-gray-500 mt-4"># Performance: {devMetrics.performance.toFixed(1)}% optimized</div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Compilation Progress</span>
                  <span>{Math.floor(codeAnimation)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${codeAnimation}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-4 max-w-4xl bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-2">
            <button 
              onClick={() => setActiveTab('process')}
              className={`flex items-center justify-center py-4 px-6 rounded-xl transition-all duration-300 ${
                activeTab === 'process' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <GitBranch className="w-5 h-5 mr-2" />
              Dev Process
            </button>
            <button 
              onClick={() => setActiveTab('archetypes')}
              className={`flex items-center justify-center py-4 px-6 rounded-xl transition-all duration-300 ${
                activeTab === 'archetypes' 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Bot className="w-5 h-5 mr-2" />
              Bot Types
            </button>
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center justify-center py-4 px-6 rounded-xl transition-all duration-300 ${
                activeTab === 'portfolio' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Award className="w-5 h-5 mr-2" />
              Portfolio
            </button>
            <button 
              onClick={() => setActiveTab('pricing')}
              className={`flex items-center justify-center py-4 px-6 rounded-xl transition-all duration-300 ${
                activeTab === 'pricing' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Target className="w-5 h-5 mr-2" />
              Get Quote
            </button>
          </div>
        </div>

        {/* Development Process Content */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
                Development Pipeline
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our agile development process ensures rapid delivery without compromising quality
              </p>
            </div>

            {/* Interactive Development Stages */}
            <div className="space-y-8">
              {developmentStages.map((stage, index) => (
                <div 
                  key={stage.id}
                  className={`cursor-pointer transition-all duration-500 border-0 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 rounded-lg p-8 ${
                    activeStage === stage.id ? 'ring-2 ring-green-400 bg-gray-700/70' : ''
                  }`}
                  onClick={() => setActiveStage(stage.id)}
                >
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    {/* Stage Icon & Status */}
                    <div className="text-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        stage.status === 'completed' ? 'bg-green-500' :
                        stage.status === 'active' ? 'bg-blue-500 animate-pulse' :
                        stage.status === 'upcoming' ? 'bg-gray-600' : 'bg-gray-700'
                      }`}>
                        {stage.status === 'completed' ? <CheckCircle className="w-8 h-8 text-white" /> : stage.icon}
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm border ${
                        stage.status === 'completed' ? 'bg-green-500/20 text-green-400 border-green-400' :
                        stage.status === 'active' ? 'bg-blue-500/20 text-blue-400 border-blue-400' :
                        stage.status === 'upcoming' ? 'bg-gray-500/20 text-gray-400 border-gray-400' :
                        'bg-gray-600/20 text-gray-500 border-gray-500'
                      }`}>
                        {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                      </div>
                    </div>

                    {/* Stage Details */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{stage.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{stage.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Duration</div>
                          <div className="font-semibold text-white">{stage.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Progress</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-green-400 transition-all duration-1000"
                                style={{ width: `${stage.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-white">{stage.progress}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Deliverables</div>
                          <div className="space-y-1">
                            {stage.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                                <span className="text-gray-300">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Tech Stack</div>
                          <div className="flex flex-wrap gap-2">
                            {stage.techStack.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Visualization */}
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto">
                        <div className="w-24 h-24 rounded-full border-4 border-gray-700"></div>
                        <div 
                          className={`absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-transparent transition-all duration-1000 ${
                            stage.status === 'completed' ? 'border-green-400' :
                            stage.status === 'active' ? 'border-blue-400' :
                            'border-gray-600'
                          }`}
                          style={{
                            borderTopColor: stage.status === 'completed' ? '#10b981' : stage.status === 'active' ? '#3b82f6' : '#6b7280',
                            transform: `rotate(${stage.progress * 3.6}deg)`
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-bold text-white">{stage.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Development Timeline Chart */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-6 h-6 mr-3 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Development Timeline</h3>
              </div>
              <div className="h-80 w-full">
                <div className="grid grid-cols-6 gap-4 h-full">
                  {developmentStats.map((week, index) => (
                    <div key={index} className="flex flex-col justify-end items-center space-y-2">
                      <div className="text-xs text-gray-400 mb-2">{week.month}</div>
                      <div className="flex flex-col space-y-1 h-full justify-end">
                        <div 
                          className="w-8 bg-green-500 rounded-t"
                          style={{ height: `${week.backend}%` }}
                          title={`Backend: ${week.backend}%`}
                        ></div>
                        <div 
                          className="w-8 bg-blue-500 rounded-t"
                          style={{ height: `${week.frontend}%` }}
                          title={`Frontend: ${week.frontend}%`}
                        ></div>
                        <div 
                          className="w-8 bg-purple-500 rounded-t"
                          style={{ height: `${week.testing}%` }}
                          title={`Testing: ${week.testing}%`}
                        ></div>
                        <div 
                          className="w-8 bg-orange-500 rounded-t"
                          style={{ height: `${week.deployment}%` }}
                          title={`Deployment: ${week.deployment}%`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6 space-x-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-300">Backend</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-300">Frontend</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-300">Testing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                    <span className="text-sm text-gray-300">Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bot Archetypes Section */}
        {activeTab === 'archetypes' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Bot Archetypes
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our proven bot templates or let us create something entirely custom
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {botArchetypes.map((archetype, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer transition-all duration-500 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 ${
                    selectedArchetype === index ? 'ring-2 ring-blue-400 bg-gray-700/70' : ''
                  }`}
                  onClick={() => setSelectedArchetype(index)}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: `${archetype.color}20`, color: archetype.color }}
                    >
                      {archetype.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{archetype.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm border ${
                          archetype.complexity === 'Enterprise' ? 'bg-red-500/20 text-red-400 border-red-400' :
                          archetype.complexity === 'Advanced' ? 'bg-orange-500/20 text-orange-400 border-orange-400' :
                          'bg-green-500/20 text-green-400 border-green-400'
                        }`}>
                          {archetype.complexity}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{archetype.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Timeline</div>
                          <div className="font-semibold text-white">{archetype.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Investment</div>
                          <div className="font-semibold text-white">{archetype.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Key Features</div>
                      <div className="grid grid-cols-1 gap-2">
                        {archetype.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {archetype.techStack.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                      <div className="flex flex-wrap gap-2">
                        {archetype.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button 
                    className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all"
                  >
                    <ChevronRight className="w-5 h-5 inline mr-2" />
                    Customize This Bot
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {activeTab === 'portfolio' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real projects, real results. See how we've transformed businesses with custom automation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projectShowcases.map((project, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{project.image}</div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.industry}</span>
                        <span>•</span>
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Challenge</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.challenge}</p>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Solution</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Results</div>
                      <div className="space-y-1">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-400 mb-2">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span className={`px-3 py-1 rounded-full text-sm border ${
                        project.complexity === 'Enterprise' ? 'bg-red-500/20 text-red-400 border-red-400' :
                        'bg-orange-500/20 text-orange-400 border-orange-400'
                      }`}>
                        {project.complexity}
                      </span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                        View Case Study →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Get Quote Section */}
        {activeTab === 'pricing' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                Get Your Custom Quote
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every bot is unique. Tell us about your needs and we'll provide a detailed proposal
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Quote Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Project Requirements</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                    <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                      <option>Customer Service Bot</option>
                      <option>Sales Automation Bot</option>
                      <option>Data Processing Bot</option>
                      <option>Workflow Automation Bot</option>
                      <option>Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Size</label>
                    <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                      <option>Startup (1-10 employees)</option>
                      <option>Small Business (11-50 employees)</option>
                      <option>Medium Business (51-200 employees)</option>
                      <option>Enterprise (200+ employees)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Expected Volume</label>
                    <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                      <option>Low {"(< 1,000 interactions/month)"}</option>
                      <option>Medium (1,000 - 10,000 interactions/month)</option>
                      <option>High (10,000 - 100,000 interactions/month)</option>
                      <option>Enterprise (100,000+ interactions/month)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                    <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent">
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $30,000</option>
                      <option>$30,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Description</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      placeholder="Describe your automation needs, current challenges, and desired outcomes..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Contact Information</label>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg transition-all text-lg font-semibold">
                    <Calculator className="w-5 h-5 inline mr-2" />
                    Get Custom Quote
                  </button>
                </div>
              </div>

              {/* Pricing Guide */}
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">Pricing Guidelines</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-700">
                      <div>
                        <div className="font-semibold text-white">Basic Automation</div>
                        <div className="text-sm text-gray-400">Simple workflows, basic logic</div>
                      </div>
                      <div className="text-green-400 font-bold">$5K - $15K</div>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-gray-700">
                      <div>
                        <div className="font-semibold text-white">Advanced AI Bot</div>
                        <div className="text-sm text-gray-400">NLP, ML, multi-channel</div>
                      </div>
                      <div className="text-blue-400 font-bold">$15K - $35K</div>
                    </div>
                    
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <div className="font-semibold text-white">Enterprise Solution</div>
                        <div className="text-sm text-gray-400">Complex integrations, high volume</div>
                      </div>
                      <div className="text-purple-400 font-bold">$35K+</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">What's Included</h4>
                  
                  <div className="space-y-3">
                    {[
                      'Complete requirements analysis',
                      'Custom bot development',
                      'System integration',
                      'Comprehensive testing',
                      'Production deployment',
                      'Documentation & training',
                      '3 months support',
                      'Performance optimization'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Quick Start Package</h4>
                  <p className="text-gray-300 mb-4">
                    Get started with a proven bot template customized for your needs
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-400">$8,999</div>
                      <div className="text-sm text-gray-400">2-3 week delivery</div>
                    </div>
                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-12 text-center mt-20">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Custom Bot?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your unique requirements and create an automation solution that perfectly fits your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg shadow-xl transition-all text-lg font-semibold">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
            <button className="flex items-center justify-center px-8 py-4 border border-gray-600 text-white hover:bg-white/10 rounded-lg transition-colors text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-green-400 mx-auto" />
              <div className="font-semibold text-white">100% Custom</div>
              <div className="text-sm text-gray-300">Built specifically for your needs</div>
            </div>
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-blue-400 mx-auto" />
              <div className="font-semibold text-white">Rapid Delivery</div>
              <div className="text-sm text-gray-300">From concept to deployment in weeks</div>
            </div>
            <div className="space-y-2">
              <Users className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="font-semibold text-white">Ongoing Support</div>
              <div className="text-sm text-gray-300">Maintenance and optimization included</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBotDevelopment;