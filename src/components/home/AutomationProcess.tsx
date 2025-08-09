"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  Server, 
  MessageSquare, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Zap,
  Activity,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Settings,
  FileText,
  Target,
  ChevronRight,
  X
} from 'lucide-react';
import SafeLink from '@/components/ui/SafeLink';

interface NodeDetails {
  duration: string;
  deliverables: string[];
  benefits: string[];
  description: string;
}

interface NodeData {
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  status: 'idle' | 'processing' | 'completed' | 'error';
  details: NodeDetails;
}

interface Node {
  id: string;
  type: 'input' | 'process' | 'output' | 'decision';
  position: { x: number; y: number };
  data: NodeData;
}

interface Connection {
  from: string;
  to: string;
}

interface ReactFlowSectionProps {
  addToRefs?: (el: HTMLElement | null) => void;
}

const ReactFlowSection: React.FC<ReactFlowSectionProps> = ({ addToRefs }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (addToRefs && sectionRef.current) {
      addToRefs(sectionRef.current);
    }
  }, [addToRefs]);

  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'input',
      position: { x: 50, y: 120 },
      data: {
        label: 'Discovery Call',
        description: 'Free 30-min consultation',
        icon: <Search className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500',
        status: 'idle',
        details: {
          duration: '30 minutes',
          deliverables: ['Process Assessment', 'ROI Estimate', 'Custom Roadmap'],
          benefits: ['No commitment required', 'Expert consultation', 'Clear next steps'],
          description: 'In this initial call, we dive deep into your current processes, identify pain points, and explore automation opportunities. Our experts will provide immediate insights and a preliminary automation roadmap.'
        }
      }
    },
    {
      id: '2',
      type: 'process',
      position: { x: 250, y: 70 },
      data: {
        label: 'Process Analysis',
        description: 'Audit current workflows',
        icon: <Activity className="w-5 h-5" />,
        color: 'from-green-500 to-emerald-500',
        status: 'idle',
        details: {
          duration: '3-5 days',
          deliverables: ['Process Maps', 'Inefficiency Report', 'Automation Opportunities'],
          benefits: ['Complete visibility', 'Identified bottlenecks', 'Quantified improvements'],
          description: 'Our team conducts a comprehensive analysis of your existing workflows, documenting every step and identifying automation opportunities that will deliver the highest ROI.'
        }
      }
    },
    {
      id: '3',
      type: 'process',
      position: { x: 250, y: 170 },
      data: {
        label: 'ROI Calculation',
        description: 'Estimate cost savings',
        icon: <DollarSign className="w-5 h-5" />,
        color: 'from-yellow-500 to-orange-500',
        status: 'idle',
        details: {
          duration: '2-3 days',
          deliverables: ['ROI Analysis', 'Cost-Benefit Report', 'Timeline Projection'],
          benefits: ['Clear financial picture', 'Budget planning', 'Executive buy-in'],
          description: 'We provide detailed financial projections showing exactly how much time and money automation will save, with conservative estimates and best-case scenarios.'
        }
      }
    },
    {
      id: '4',
      type: 'decision',
      position: { x: 450, y: 120 },
      data: {
        label: 'Bot Blueprint',
        description: 'Custom workflow design',
        icon: <Code className="w-5 h-5" />,
        color: 'from-purple-500 to-indigo-500',
        status: 'idle',
        details: {
          duration: '1-2 weeks',
          deliverables: ['Technical Specification', 'UI/UX Mockups', 'Integration Plan'],
          benefits: ['Visual workflow preview', 'Technical clarity', 'Reduced development time'],
          description: 'Our architects design the complete automation solution, creating detailed blueprints that serve as the foundation for development and ensure all stakeholders are aligned.'
        }
      }
    },
    {
      id: '5',
      type: 'process',
      position: { x: 650, y: 70 },
      data: {
        label: 'Development',
        description: 'Agile bot building',
        icon: <Zap className="w-5 h-5" />,
        color: 'from-red-500 to-pink-500',
        status: 'idle',
        details: {
          duration: '2-6 weeks',
          deliverables: ['Working Bot', 'Admin Dashboard', 'User Training'],
          benefits: ['Agile methodology', 'Regular updates', 'Flexible changes'],
          description: 'Using agile development principles, we build your automation solution with regular check-ins, allowing for adjustments and ensuring the final product exceeds expectations.'
        }
      }
    },
    {
      id: '6',
      type: 'process',
      position: { x: 650, y: 170 },
      data: {
        label: 'Testing',
        description: 'Quality assurance',
        icon: <CheckCircle className="w-5 h-5" />,
        color: 'from-teal-500 to-cyan-500',
        status: 'idle',
        details: {
          duration: '1-2 weeks',
          deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization'],
          benefits: ['Zero defects', 'Optimal performance', 'User acceptance'],
          description: 'Comprehensive testing ensures your automation works flawlessly under all conditions, with stress testing, edge case validation, and user acceptance testing.'
        }
      }
    },
    {
      id: '7',
      type: 'output',
      position: { x: 850, y: 120 },
      data: {
        label: 'Deployment',
        description: 'Go live with support',
        icon: <Rocket className="w-5 h-5" />,
        color: 'from-orange-500 to-red-500',
        status: 'idle',
        details: {
          duration: '1 week',
          deliverables: ['Live System', 'Documentation', 'Support Package'],
          benefits: ['Smooth transition', 'Ongoing support', 'Continuous optimization'],
          description: 'We handle the complete deployment process, provide comprehensive training, and offer ongoing support to ensure your team maximizes the benefits of automation.'
        }
      }
    }
  ];

  const connections: Connection[] = [
    { from: '1', to: '2' },
    { from: '1', to: '3' },
    { from: '2', to: '4' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '4', to: '6' },
    { from: '5', to: '7' },
    { from: '6', to: '7' }
  ];

  const [nodeStates, setNodeStates] = useState<Node[]>(initialNodes);

  const animateFlow = useCallback(() => {
    if (!isPlaying) return;

    const stepDuration = 1500;
    const totalSteps = initialNodes.length;

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = (prev + 1) % totalSteps;
        
        setNodeStates(prevNodes => 
          prevNodes.map((node, index) => ({
            ...node,
            data: {
              ...node.data,
              status: index === nextStep ? 'processing' : 
                     index < nextStep ? 'completed' : 'idle'
            }
          }))
        );

        return nextStep;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isPlaying, initialNodes.length]);

  useEffect(() => {
    const cleanup = animateFlow();
    return cleanup;
  }, [animateFlow]);

  const toggleAnimation = (): void => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = (): void => {
    setIsPlaying(false);
    setCurrentStep(0);
    setNodeStates(initialNodes);
  };

  const handleNodeClick = (node: Node): void => {
    setSelectedNode(node);
    setShowModal(true);
  };

  const handleTimelineClick = (index: number): void => {
    setCurrentStep(index);
    setSelectedNode(initialNodes[index]);
    setShowModal(true);
    
    setNodeStates(prevNodes => 
      prevNodes.map((node, nodeIndex) => ({
        ...node,
        data: {
          ...node.data,
          status: nodeIndex === index ? 'processing' : 
                 nodeIndex < index ? 'completed' : 'idle'
        }
      }))
    );
  };

  const getNodeStyle = (node: Node): string => {
    const baseClasses = "group relative w-36 h-20 rounded-2xl border-2 transition-all duration-500 transform hover:scale-110 cursor-pointer overflow-hidden";
    
    switch (node.data.status) {
      case 'processing':
        return `${baseClasses} bg-gradient-to-br ${node.data.color} border-white text-white shadow-2xl shadow-blue-500/50 scale-110 animate-pulse`;
      case 'completed':
        return `${baseClasses} bg-gradient-to-br ${node.data.color} border-green-400 text-white shadow-xl shadow-green-500/30`;
      case 'error':
        return `${baseClasses} bg-gradient-to-br from-red-500 to-red-600 border-red-400 text-white shadow-xl`;
      default:
        return `${baseClasses} bg-slate-800/80 border-slate-600 text-slate-300 backdrop-blur-sm hover:bg-slate-700/80 hover:border-slate-500`;
    }
  };

  const getConnectionPath = (from: string, to: string): string => {
    const fromNode = initialNodes.find(n => n.id === from);
    const toNode = initialNodes.find(n => n.id === to);
    if (!fromNode || !toNode) return '';

    const x1 = fromNode.position.x + 72;
    const y1 = fromNode.position.y + 40;
    const x2 = toNode.position.x + 72;
    const y2 = toNode.position.y + 40;

    const midX = (x1 + x2) / 2;
    return `M${x1},${y1} Q${midX},${Math.min(y1, y2) - 30} ${x2},${y2}`;
  };

  const isConnectionActive = (from: string, to: string): boolean => {
    const fromIndex = parseInt(from) - 1;
    const toIndex = parseInt(to) - 1;
    return currentStep > fromIndex && (currentStep >= toIndex || isPlaying);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-900/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white mb-8 shadow-lg">
            <Activity className="w-6 h-6 mr-3" />
            <span className="font-semibold text-lg">Intelligent Process Flow</span>
            <Sparkles className="w-5 h-5 ml-3" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Your Automation
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Journey Visualized
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Watch our streamlined process transform your business operations from manual chaos 
            to intelligent workflows in just weeks, not months.
          </p>

          {/* Enhanced Control Panel */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={toggleAnimation}
              className="group flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/25"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-3" /> : <Play className="w-5 h-5 mr-3" />}
              <span className="font-semibold">{isPlaying ? 'Pause Flow' : 'Start Flow'}</span>
            </button>
            <button
              onClick={resetAnimation}
              className="group flex items-center px-8 py-4 bg-slate-700/50 backdrop-blur-xl text-white rounded-2xl hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 border border-slate-600 shadow-xl"
            >
              <RotateCcw className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-semibold">Reset</span>
            </button>
          </div>
        </div>

        {/* Enhanced Flow Diagram */}
        <div className="relative mb-16">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
            <div className="relative w-full h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-blue-900/30 p-6">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 280">
                {/* Enhanced Connections */}
                {connections.map((conn, index) => {
                  const path = getConnectionPath(conn.from, conn.to);
                  const isActive = isConnectionActive(conn.from, conn.to);
                  
                  return (
                    <g key={`${conn.from}-${conn.to}`}>
                      {/* Background path */}
                      <path
                        d={path}
                        stroke="#374151"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                      />
                      {/* Active path */}
                      {isActive && (
                        <>
                          <path
                            d={path}
                            stroke="url(#flowGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="animate-pulse"
                          />
                          {/* Animated dot */}
                          <circle r="4" fill="#10B981" className="animate-pulse">
                            <animateMotion dur="2s" repeatCount="indefinite" path={path} />
                          </circle>
                        </>
                      )}
                    </g>
                  );
                })}

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>

                {/* Enhanced Nodes */}
                {nodeStates.map((node, index) => (
                  <foreignObject
                    key={node.id}
                    x={node.position.x}
                    y={node.position.y}
                    width="144"
                    height="80"
                    className="cursor-pointer"
                    onClick={() => handleNodeClick(node)}
                  >
                    <div className={getNodeStyle(node)}>
                      {/* Background gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative flex flex-col items-center justify-center h-full p-3">
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${node.data.color} flex items-center justify-center text-white mb-2 shadow-lg ${
                          node.data.status === 'processing' ? 'animate-spin' : ''
                        } group-hover:scale-110 transition-transform`}>
                          {node.data.icon}
                        </div>
                        <h3 className="text-xs font-bold text-center leading-tight">{node.data.label}</h3>
                        <p className="text-xs text-center opacity-70 mt-1 overflow-hidden whitespace-nowrap text-ellipsis">{node.data.description}</p>
                      </div>
                      
                      {/* Enhanced Status indicator */}
                      <div className="absolute -top-1 -right-1 w-6 h-6">
                        {node.data.status === 'processing' && (
                          <div className="w-full h-full bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50"></div>
                        )}
                        {node.data.status === 'completed' && (
                          <div className="w-full h-full bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                        {node.data.status === 'idle' && (
                          <div className="w-full h-full bg-slate-400 rounded-full border-2 border-slate-600"></div>
                        )}
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-300"></div>
                    </div>
                  </foreignObject>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Interactive Process Timeline */}
        <div className="mb-16">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <Clock className="w-6 h-6 mr-3 text-cyan-400" />
              Interactive Process Timeline
              <span className="ml-3 text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                Click to explore
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {nodeStates.map((node, index) => (
                <div
                  key={node.id}
                  onClick={() => handleTimelineClick(index)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    currentStep === index
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-600 border-cyan-400 text-white shadow-xl shadow-blue-500/30'
                      : currentStep > index
                      ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-400 text-green-300 shadow-lg shadow-green-500/20'
                      : 'bg-slate-700/30 border-slate-600 text-slate-300 hover:bg-slate-600/40 hover:border-slate-500'
                  }`}
                >
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                      currentStep === index
                        ? 'bg-white/20 text-white shadow-lg'
                        : currentStep > index
                        ? 'bg-green-400/20 text-green-400'
                        : 'bg-slate-600/50 text-slate-400 group-hover:bg-slate-500/50'
                    }`}>
                      {node.data.icon}
                    </div>
                    
                    <h4 className="font-bold text-sm mb-2">{node.data.label}</h4>
                    <p className="text-xs opacity-80 mb-3">{node.data.description}</p>
                    
                    {/* Duration badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      currentStep === index
                        ? 'bg-white/20 text-white'
                        : currentStep > index
                        ? 'bg-green-400/20 text-green-400'
                        : 'bg-slate-600/50 text-slate-400'
                    }`}>
                      <Clock className="w-3 h-3 mr-1" />
                      {node.data.details.duration}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Real-time Metrics */}
        <div className="mb-16">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
              Real-time Impact Metrics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-200 font-medium">Process Efficiency</span>
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {isPlaying ? `${Math.min(95, currentStep * 15)}%` : '0%'}
                </div>
                <div className="flex items-center text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +{Math.min(15, currentStep * 2)}% from automation
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
                    style={{ width: `${isPlaying ? Math.min(95, currentStep * 15) : 0}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-200 font-medium">Time Saved</span>
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {isPlaying ? `${Math.min(40, currentStep * 6)}hrs` : '0hrs'}
                </div>
                <div className="flex items-center text-green-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  Weekly average saved
                </div>
                <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-1000"
                    style={{ width: `${isPlaying ? Math.min(100, currentStep * 14) : 0}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-200 font-medium">Cost Reduction</span>
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {isPlaying ? `${Math.min(85, currentStep * 12)}%` : '0%'}
                </div>
                <div className="flex items-center text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Operational cost savings
                </div>
                <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                    style={{ width: `${isPlaying ? Math.min(85, currentStep * 12) : 0}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/20 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have revolutionized their operations with our proven automation process. 
              Start your journey today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <SafeLink href="/services/discovery-call">
                <button className="group px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/25">
                  <span className="flex items-center justify-center">
                    <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    Start Your Free Discovery Call
                  </span>
                </button>
              </SafeLink>
              <SafeLink href="/blog">
                <button className="group px-10 py-4 bg-slate-700/50 backdrop-blur-xl text-white font-bold text-lg rounded-2xl hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 border border-slate-600 shadow-xl">
                  <span className="flex items-center justify-center">
                    <FileText className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                    View Case Studies
                  </span>
                </button>
              </SafeLink>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal for Node Details */}
      {showModal && selectedNode && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedNode.data.color} p-6 rounded-t-3xl text-white relative`}>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                  {selectedNode.data.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedNode.data.label}</h2>
                  <p className="text-white/80 text-lg">{selectedNode.data.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{selectedNode.data.details.duration}</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Step {parseInt(selectedNode.id)}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                  Overview
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {selectedNode.data.details.description}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
                  Key Deliverables
                </h3>
                <div className="grid gap-3">
                  {selectedNode.data.details.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-slate-200 font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
                  Key Benefits
                </h3>
                <div className="grid gap-3">
                  {selectedNode.data.details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-blue-200 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                <SafeLink href="/contact">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span className="flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Discuss This Step
                    </span>
                  </button>
                </SafeLink>
                <button 
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-slate-600/50 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-slate-500/50 transition-all duration-300 border border-slate-500"
                >
                  <span className="flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Continue Exploring
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReactFlowSection;