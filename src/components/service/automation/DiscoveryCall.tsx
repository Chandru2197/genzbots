import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle, ArrowRight, Clock, Target, BarChart3, MessageCircle, ArrowLeft, Star, Users, Zap, Calendar, FileText, TrendingUp, Play, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Progress } from '../../ui/progress';
import DotPattern from '../../ui/DotPattern';
import { useRouter } from 'next/router';

// TypeScript Interfaces
interface CallBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  color: string;
  gradient: string;
}

interface AnalysisArea {
  category: string;
  description: string;
  progress: number;
  details: string[];
  timeInvested: string;
  outcome: string;
}

interface CallPhase {
  time: string;
  phase: string;
  icon: React.ReactNode;
  activities: string[];
}

interface TimeSlot {
  day: string;
  times: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  result: string;
  avatar: string;
}

interface PreparationSection {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

const DiscoveryCallPage: React.FC = () => {
  const router = useRouter();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/' || url === '/#automation') {
        setTimeout(() => {
          const el = document.getElementById('automation');
          if (el) {
            window.scrollTo({
              top: el.offsetTop,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const callBenefits: CallBenefit[] = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Process Audit',
      description: 'Review your current workflows and identify areas for improvement',
      details: 'We conduct a thorough analysis of your existing processes, mapping out inefficiencies and bottlenecks that could benefit from automation.',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'ROI Estimation',
      description: 'Calculate potential time and cost savings from automation',
      details: 'Our team provides detailed financial projections showing expected time savings, cost reductions, and return on investment timelines.',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Bot Recommendation',
      description: 'Suggest specific automation solutions for your business',
      details: 'Based on our analysis, we recommend the most suitable automation technologies and approaches for your unique requirements.',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Implementation Roadmap',
      description: 'Clear roadmap of how to move forward with automation',
      details: 'Receive a step-by-step plan with realistic timelines, milestones, and resource requirements for successful implementation.',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const analysisAreas: AnalysisArea[] = [
    {
      category: 'Current Processes',
      description: 'Understanding how your team currently handles tasks',
      progress: 35,
      details: [
        'Daily workflow review',
        'Time-consuming tasks identification',
        'Manual process documentation',
        'Team responsibilities mapping',
        'System integration points'
      ],
      timeInvested: '10 minutes',
      outcome: 'Process overview document'
    },
    {
      category: 'Pain Points',
      description: 'Identifying the biggest challenges in your operations',
      progress: 25,
      details: [
        'Repetitive task analysis',
        'Error-prone activities',
        'Time bottlenecks',
        'Resource allocation issues',
        'Communication gaps'
      ],
      timeInvested: '8 minutes',
      outcome: 'Priority improvement list'
    },
    {
      category: 'Automation Potential',
      description: 'Evaluating which processes can be automated',
      progress: 25,
      details: [
        'Rule-based task identification',
        'System compatibility check',
        'Integration feasibility',
        'Quick win opportunities',
        'Long-term automation goals'
      ],
      timeInvested: '7 minutes',
      outcome: 'Automation recommendations'
    },
    {
      category: 'Business Impact',
      description: 'Estimating the value of proposed automation solutions',
      progress: 15,
      details: [
        'Time savings calculation',
        'Cost reduction estimates',
        'Efficiency improvements',
        'Implementation timeline',
        'Expected ROI'
      ],
      timeInvested: '5 minutes',
      outcome: 'Business case summary'
    }
  ];

  const callAgenda: CallPhase[] = [
    {
      time: '0-5 min',
      phase: 'Getting Started',
      icon: <Users className="w-5 h-5" />,
      activities: ['Brief introductions', 'Understanding your business', 'Call objectives overview']
    },
    {
      time: '5-15 min',
      phase: 'Current State Review',
      icon: <FileText className="w-5 h-5" />,
      activities: ['Discussing current workflows', 'Identifying main challenges', 'Understanding team structure', 'Reviewing existing tools']
    },
    {
      time: '15-25 min',
      phase: 'Opportunity Assessment',
      icon: <Target className="w-5 h-5" />,
      activities: ['Automation possibilities', 'Quick wins identification', 'Integration options', 'Success metrics discussion']
    },
    {
      time: '25-30 min',
      phase: 'Wrap-up & Next Steps',
      icon: <ArrowRight className="w-5 h-5" />,
      activities: ['Initial ROI discussion', 'Implementation approach', 'Timeline overview', 'Q&A session']
    }
  ];

  const timeSlots: TimeSlot[] = [
    { day: 'Monday', times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
    { day: 'Tuesday', times: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
    { day: 'Wednesday', times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
    { day: 'Thursday', times: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
    { day: 'Friday', times: ['9:00 AM', '11:00 AM', '2:00 PM'] }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "The discovery call helped us understand exactly where automation could help our business. The recommendations were practical and well-explained.",
      author: "Sarah Mitchell",
      title: "Operations Manager",
      company: "TechFlow Solutions",
      result: "Implemented 3 automation solutions",
      avatar: "SM"
    },
    {
      quote: "Great initial consultation. They quickly understood our processes and provided clear next steps for automation.",
      author: "David Chen",
      title: "Business Owner",
      company: "DataStream Inc",
      result: "Moved forward with Bot Blueprint",
      avatar: "DC"
    },
    {
      quote: "The process audit was thorough and gave us a good foundation for making automation decisions.",
      author: "Maria Rodriguez",
      title: "Process Manager",
      company: "ServiceMax Pro",
      result: "Started with Time Liberation Package",
      avatar: "MR"
    }
  ];

  const preparationSections: PreparationSection[] = [
    {
      title: 'Before the Call',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Think about your main operational challenges',
        'Note which tasks take the most time',
        'List the tools and systems you currently use',
        'Consider who would be involved in automation decisions',
        'Have examples of typical workflows ready'
      ]
    },
    {
      title: 'During the Call',
      icon: <Users className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        'Be prepared to share your screen if helpful',
        'Have examples of current processes available',
        'Take notes on suggestions and recommendations',
        'Ask questions about the implementation process',
        'Discuss your timeline and any constraints'
      ]
    },
    {
      title: 'After the Call',
      icon: <ArrowRight className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        'Review the analysis and recommendations',
        'Share insights with relevant team members',
        'Consider the proposed approach and timeline',
        'Prepare for the next phase if moving forward',
        'Follow up with any additional questions'
      ]
    }
  ];

  const handleCardExpansion = (index: number): void => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleTimeSlotSelection = (timeSlot: string): void => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleTimeSlotReset = (): void => {
    setSelectedTimeSlot(null);
  };

  const handleBackToProcess = () => {
    router.push('/#automation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 opacity-90"></div>
        <DotPattern className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <Button
            variant="outline"
            className="p-1 text-white border-white bg-tansparent hover:text-blue-600 mb-6"
            onClick={handleBackToProcess}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Process
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Discovery Call
                  </h1>
                  <Badge variant="secondary" className="text-lg px-4 py-1 bg-white/20 text-blue-100 border-white/30">
                    <Clock className="w-4 h-4 mr-2" />
                    Free, 30 minutes
                  </Badge>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We analyze your pain points through a structured process audit, ROI estimation, 
                and provide specific bot recommendations tailored to your business needs.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-xl">What You&apos;ll Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {['Process Analysis', 'ROI Estimation', 'Bot Recommendations', 'Implementation Plan'].map((item: string, index: number) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span>{item}</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="preparation">Preparation</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Benefits Section */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Cover</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our discovery call follows a structured approach to understand your business 
                  and identify the best automation opportunities.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {callBenefits.map((benefit: CallBenefit, index: number) => (
                  <Card 
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
                    onClick={() => handleCardExpansion(index)}
                  >
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription className="text-sm">{benefit.description}</CardDescription>
                    </CardHeader>
                    {expandedCard === index && (
                      <CardContent className="pt-0">
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                          <p className="text-sm text-gray-700">{benefit.details}</p>
                        </div>
                      </CardContent>
                    )}
                    <CardFooter className="pt-0">
                      <Button variant="ghost" size="sm" className="w-full text-gray-600">
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedCard === index ? 'rotate-180' : ''}`} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Analysis Areas */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Analysis Breakdown</h2>
                <p className="text-xl text-gray-600">30-minute structured analysis of your automation potential</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {analysisAreas.map((area: AnalysisArea, index: number) => (
                  <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <CardTitle className="text-xl text-gray-800">{area.category}</CardTitle>
                          <CardDescription>{area.description}</CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {area.timeInvested}
                        </Badge>
                      </div>
                      <Progress value={area.progress} className="h-2" />
                      <div className="text-xs text-gray-500 mt-1">{area.progress}% of call time</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {area.details.map((detail: string, detailIndex: number) => (
                          <div key={detailIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-sm font-semibold text-green-800">Outcome:</div>
                        <div className="text-sm text-green-700">{area.outcome}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-100 border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800">Client Feedback</CardTitle>
                <CardDescription className="text-lg">Real experiences from discovery call participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial: Testimonial, index: number) => (
                    <Card key={index} className="border-0 shadow-lg bg-white">
                      <CardHeader className="pb-4">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {testimonial.avatar}
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i: number) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                        <div className="border-t pt-4">
                          <div className="font-semibold text-gray-800">{testimonial.author}</div>
                          <div className="text-gray-600 text-sm">{testimonial.title}, {testimonial.company}</div>
                          <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">
                            {testimonial.result}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="agenda" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Call Agenda</h2>
              <p className="text-xl text-gray-600">30-minute structured discussion to understand your automation needs</p>
            </div>
            
            <div className="space-y-6">
              {callAgenda.map((phase: CallPhase, index: number) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg">
                        <div className="text-center">
                          <div className="text-sm opacity-80">min</div>
                          <div className="text-lg font-bold">{phase.time}</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                            {phase.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">{phase.phase}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.activities.map((activity: string, actIndex: number) => (
                            <div key={actIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="preparation" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Prepare</h2>
              <p className="text-xl text-gray-600">Simple steps to make our call as productive as possible</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {preparationSections.map((section: PreparationSection, index: number) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.items.map((item: string, itemIndex: number) => (
                        <div key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Schedule Your Call</h2>
              <p className="text-xl text-gray-600">Choose a time that works best for you</p>
            </div>
            
            <Card className="max-w-5xl mx-auto border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-center">Available Time Slots</CardTitle>
                <CardDescription className="text-center">All times shown in your local timezone</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-6">
                  {timeSlots.map((day: TimeSlot, dayIndex: number) => (
                    <div key={dayIndex} className="text-center">
                      <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">{day.day}</h3>
                      <div className="space-y-3">
                        {day.times.map((time: string, timeIndex: number) => (
                          <Button
                            key={timeIndex}
                            variant={selectedTimeSlot === `${day.day}-${time}` ? "default" : "outline"}
                            className="w-full"
                            onClick={() => handleTimeSlotSelection(`${day.day}-${time}`)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedTimeSlot && (
                  <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-gray-800 mb-2">Selected Time:</h4>
                      <p className="text-gray-700 mb-4">{selectedTimeSlot.replace('-', ' at ')}</p>
                      <div className="flex gap-4">
                        <Button className="bg-blue-500 hover:bg-blue-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          Confirm Booking
                        </Button>
                        <Button variant="outline" onClick={handleTimeSlotReset}>
                          Choose Different Time
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 mt-20">
        <DotPattern className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Book your free discovery call today and take the first step toward automating your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCallPage;