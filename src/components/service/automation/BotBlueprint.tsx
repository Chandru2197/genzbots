import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Target, CheckCircle, ArrowRight, Clock, FileText, BarChart3, MessageCircle, ArrowLeft, Star, Users, Zap, Calendar, Settings, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Deliverable {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface BlueprintPhase {
  phase: string;
  title: string;
  description: string;
  activities: string[];
  outcome: string;
}

interface BlueprintComponent {
  component: string;
  description: string;
  includes: string[];
}

interface ReviewProcessStep {
  step: string;
  description: string;
  duration: string;
}

interface SampleBlueprint {
  industry: string;
  process: string;
  challenge: string;
  solution: string;
  timeline: string;
  expectedSavings: string;
}

export default function BotBlueprint() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('overview');

  const deliverables: Deliverable[] = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Custom Workflow Diagram',
      description: 'Visual representation of your automated process flow',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timeline & Pricing',
      description: 'Detailed project schedule and transparent cost breakdown',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Integration Checklist',
      description: 'Technical requirements and system compatibility assessment',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Success Metrics',
      description: 'Key performance indicators and measurement criteria',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const blueprintPhases: BlueprintPhase[] = [
    {
      phase: 'Hour 1-8',
      title: 'Process Analysis',
      description: 'Deep dive into your current workflow and requirements',
      activities: [
        'Review discovery call findings',
        'Document current process steps',
        'Identify automation touchpoints',
        'Map data flows and dependencies'
      ],
      outcome: 'Detailed process documentation'
    },
    {
      phase: 'Hour 9-24',
      title: 'Solution Design',
      description: 'Create the technical blueprint for your automation',
      activities: [
        'Design automation workflow',
        'Select appropriate technologies',
        'Plan system integrations',
        'Define user interactions'
      ],
      outcome: 'Technical architecture plan'
    },
    {
      phase: 'Hour 25-36',
      title: 'Resource Planning',
      description: 'Plan timeline, resources, and implementation approach',
      activities: [
        'Create project timeline',
        'Estimate development effort',
        'Plan testing approach',
        'Define deployment strategy'
      ],
      outcome: 'Project implementation plan'
    },
    {
      phase: 'Hour 37-48',
      title: 'Documentation & Review',
      description: 'Finalize all documentation and prepare for presentation',
      activities: [
        'Complete all deliverable documents',
        'Prepare presentation materials',
        'Review and quality check',
        'Schedule blueprint review call'
      ],
      outcome: 'Complete blueprint package'
    }
  ];

  const blueprintComponents: BlueprintComponent[] = [
    {
      component: 'Workflow Diagram',
      description: 'Visual flowchart showing the complete automation process',
      includes: [
        'Current state vs future state',
        'Process step documentation',
        'Decision points and logic',
        'Integration touchpoints',
        'Error handling procedures'
      ]
    },
    {
      component: 'Technical Specifications',
      description: 'Detailed technical requirements and system architecture',
      includes: [
        'Technology stack recommendations',
        'API integration requirements',
        'Data security protocols',
        'System performance criteria',
        'Scalability considerations'
      ]
    },
    {
      component: 'Implementation Plan',
      description: 'Step-by-step roadmap for building your automation',
      includes: [
        'Development phases and milestones',
        'Resource allocation plan',
        'Testing and quality assurance',
        'Deployment and go-live strategy',
        'Training and support plan'
      ]
    },
    {
      component: 'Cost & Timeline',
      description: 'Transparent pricing and realistic project schedule',
      includes: [
        'Detailed cost breakdown',
        'Payment schedule options',
        'Timeline with key milestones',
        'Risk assessment and mitigation',
        'Change management process'
      ]
    }
  ];

  const reviewProcess: ReviewProcessStep[] = [
    {
      step: 'Blueprint Delivery',
      description: 'Receive your complete blueprint package via email',
      duration: '48 hours after discovery call'
    },
    {
      step: 'Review Period',
      description: 'Take time to review all documents with your team',
      duration: '3-5 business days recommended'
    },
    {
      step: 'Review Call',
      description: 'Schedule a call to discuss the blueprint and ask questions',
      duration: '30-45 minutes'
    },
    {
      step: 'Refinements',
      description: 'Make any necessary adjustments based on your feedback',
      duration: '1-2 business days'
    },
    {
      step: 'Final Approval',
      description: 'Approve the blueprint and move to development phase',
      duration: 'Your timeline'
    }
  ];

  const sampleBlueprints: SampleBlueprint[] = [
    {
      industry: 'Professional Services',
      process: 'Client Onboarding Automation',
      challenge: 'Manual client setup taking 4+ hours per new client',
      solution: 'Automated workflow for document collection, system setup, and initial communication',
      timeline: '3 weeks development',
      expectedSavings: '3.5 hours per client'
    },
    {
      industry: 'E-commerce',
      process: 'Order Processing Automation',
      challenge: 'High volume of orders requiring manual verification and processing',
      solution: 'Automated order validation, inventory updates, and fulfillment coordination',
      timeline: '4 weeks development',
      expectedSavings: '15 hours per week'
    },
    {
      industry: 'Healthcare',
      process: 'Patient Data Management',
      challenge: 'Time-consuming patient record updates and appointment scheduling',
      solution: 'Automated patient data sync and smart scheduling system',
      timeline: '5 weeks development',
      expectedSavings: '8 hours per week'
    }
  ];

  const handleBackToProcess = () => {
    router.push('/#automation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <Button
            variant="outline"
            className="p-1 text-white border-white bg-transparent hover:text-green-600 hover:bg-white mb-6"
            onClick={handleBackToProcess}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Process
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">Bot Blueprint</h1>
                  <p className="text-xl text-green-200">48 hours delivery</p>
                </div>
              </div>
              
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                You receive a comprehensive custom workflow diagram, detailed timeline & pricing, 
                and complete integration checklist for your automation project.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  View Sample Blueprint
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Start Blueprint
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-6">Blueprint Includes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span>Custom Workflow Diagram</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span>Timeline & Pricing</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span>Integration Checklist</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                    <span>Technical Specifications</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {['overview', 'process', 'components', 'examples'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Deliverables Section */}
            <div>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">What You Receive</h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Our blueprint provides everything you need to understand and approve your automation project.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {deliverables.map((deliverable, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${deliverable.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                      {deliverable.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{deliverable.title}</h3>
                    <p className="text-gray-600 text-sm">{deliverable.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Process */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Review Process</h2>
              <div className="grid md:grid-cols-5 gap-6">
                {reviewProcess.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2 text-sm">{step.step}</h3>
                    <p className="text-gray-600 text-xs mb-2">{step.description}</p>
                    <p className="text-green-600 text-xs font-semibold">{step.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why the Blueprint Matters</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Clear Understanding</h3>
                      <p className="text-gray-600 text-sm">Know exactly what will be built and how it will work</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Transparent Pricing</h3>
                      <p className="text-gray-600 text-sm">No surprises - detailed cost breakdown and timeline</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Risk Mitigation</h3>
                      <p className="text-gray-600 text-sm">Identify and address potential challenges upfront</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Team Alignment</h3>
                      <p className="text-gray-600 text-sm">Get everyone on the same page before development starts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Blueprint Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Pages</span>
                    <span className="font-bold text-green-600">15-25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Delivery Time</span>
                    <span className="font-bold text-green-600">48 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Approval Rate</span>
                    <span className="font-bold text-green-600">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Revision Rounds</span>
                    <span className="font-bold text-green-600">0-1 typically</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">48-Hour Process</h2>
              <p className="text-lg text-gray-600">How we create your custom automation blueprint</p>
            </div>
            
            <div className="space-y-8">
              {blueprintPhases.map((phase, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-green-600">{phase.phase}</div>
                          <h3 className="text-lg font-bold text-gray-800">{phase.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-green-800">Outcome:</div>
                        <div className="text-sm text-green-700">{phase.outcome}</div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Activities:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === 'components' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Blueprint Components</h2>
              <p className="text-lg text-gray-600">Detailed breakdown of what's included in your blueprint</p>
            </div>
            
            <div className="space-y-8">
              {blueprintComponents.map((component, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{component.component}</h3>
                      <p className="text-gray-600 mb-6">{component.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4">Includes:</h4>
                      <div className="space-y-3">
                        {component.includes.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center">
                            <Star className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === 'examples' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sample Projects</h2>
              <p className="text-lg text-gray-600">Examples of recent automation blueprints we've created</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {sampleBlueprints.map((sample, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-green-600 mb-1">{sample.industry}</div>
                    <h3 className="text-lg font-bold text-gray-800">{sample.process}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">Challenge:</div>
                      <div className="text-sm text-gray-600">{sample.challenge}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">Solution:</div>
                      <div className="text-sm text-gray-600">{sample.solution}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-xs font-semibold text-gray-800">Timeline</div>
                        <div className="text-sm text-green-600">{sample.timeline}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">Time Saved</div>
                        <div className="text-sm text-green-600">{sample.expectedSavings}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Blueprint?</h2>
          <p className="text-lg text-green-100 mb-6 max-w-2xl mx-auto">
            Get a detailed roadmap for your automation project within 48 hours of your discovery call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Discovery Call
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              View Sample Blueprint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

