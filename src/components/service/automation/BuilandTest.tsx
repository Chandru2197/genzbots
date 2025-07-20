import React, { useState } from 'react';
import { Zap, CheckCircle, ArrowRight, Clock, Users, BarChart3, MessageCircle, ArrowLeft, Star, Settings, Code, Play, Shield, GitBranch, Monitor, TestTube, Video, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouter } from 'next/router';

interface DevelopmentApproach {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
}

interface DevelopmentWeek {
  week: string;
  title: string;
  focus: string;
  progress: number;
  activities?: string[];
  deliverables?: string[];
}

interface Demo {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const bgPattern = `data:image/svg+xml,${encodeURIComponent(
  `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>`
)}`;

export default function BuildAndTest() {
  const router = useRouter();
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

    const testingApproach = [
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Functional Testing',
      description: 'Comprehensive testing of all automation features',
      color: 'from-purple-500 to-pink-500',
      metrics: { coverage: '100%', testCases: '50+', automatedTests: true }
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Performance Testing',
      description: 'Ensuring optimal speed and reliability',
      color: 'from-blue-500 to-cyan-500',
      metrics: { loadTests: true, stressTests: true, benchmarks: true }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Acceptance',
      description: 'Real-world validation with your team',
      color: 'from-green-500 to-emerald-500',
      metrics: { userFeedback: true, realWorldScenarios: '10+', satisfaction: '98%' }
    }
  ];

  const scheduleSlots = [
    {
      day: 'Monday',
      times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
    },
    {
      day: 'Tuesday',
      times: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']
    },
    {
      day: 'Wednesday',
      times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
    },
    {
      day: 'Thursday',
      times: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']
    },
    {
      day: 'Friday',
      times: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
    }
  ];

  const developmentApproach: DevelopmentApproach[] = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Agile Development',
      description: 'Iterative development with regular feedback and adjustments',
      color: 'from-blue-500 to-cyan-500',
      features: ['Sprint planning', 'Daily standups', 'Continuous integration', 'Rapid iterations']
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Weekly Demo Videos',
      description: 'See your automation come to life with weekly progress updates',
      color: 'from-green-500 to-emerald-500',
      features: ['Screen recordings', 'Feature walkthroughs', 'Progress updates', 'Feedback sessions']
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Discord Collaboration',
      description: 'Real-time communication and feedback through dedicated channels',
      color: 'from-purple-500 to-pink-500',
      features: ['Real-time chat', 'Screen sharing', 'File sharing', 'Instant feedback']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Training',
      description: 'Comprehensive training to ensure your team is ready to use the system',
      color: 'from-orange-500 to-red-500',
      features: ['Live training sessions', 'Documentation', 'Q&A support', 'Best practices']
    }
  ];

  const developmentWeeks: DevelopmentWeek[] = [
    {
      week: 'Week 1',
      title: 'Foundation & Setup',
      focus: 'Building the core infrastructure and basic automation',
      progress: 100,
      activities: [
        'Environment setup',
        'Core automation framework',
        'Basic workflow implementation',
        'Initial testing'
      ],
      deliverables: [
        'Development environment',
        'Base automation script',
        'Initial demo video',
        'Progress report'
      ]
    },
    // Add other weeks here...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: `url(${bgPattern})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <Button
            variant="outline"
            className="p-1 text-white border-white bg-transparent hover:text-blue-600 mb-6"
            onClick={() => router.push('/#automation')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Process
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Build & Test Phase
                  </h1>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-lg px-4 py-1 bg-white/20 text-blue-100 border-white/30">
                      <Clock className="w-4 h-4 mr-2" />
                      1-3 Weeks Development
                    </Badge>
                    <Badge variant="outline" className="bg-green-500/20 text-green-100 border-green-300/30">
                      Agile Process
                    </Badge>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Where your automation dreams become reality through agile development, rigorous testing,
                and continuous collaboration with your team.
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Demo Videos
                </Button>
              </div>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Development Guarantees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { label: 'Quality Assurance', value: '100%', icon: <CheckCircle className="w-5 h-5" /> },
                  { label: 'Test Coverage', value: '95%+', icon: <TestTube className="w-5 h-5" /> },
                  { label: 'Code Reviews', value: 'Daily', icon: <GitBranch className="w-5 h-5" /> },
                  { label: 'Demo Updates', value: 'Weekly', icon: <Monitor className="w-5 h-5" /> }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </div>
                    <span className="text-2xl font-bold">{item.value}</span>
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
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-16">
            {/* Development Approach */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Development Approach</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Agile methodology combined with cutting-edge tools and practices to deliver exceptional automation solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {developmentApproach.map((approach, index) => (
                  <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${approach.color}`}></div>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${approach.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        {approach.icon}
                      </div>
                      <CardTitle className="text-lg">{approach.title}</CardTitle>
                      <CardDescription>{approach.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {approach.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="development">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Development Timeline</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Track our progress week by week as we build your automation solution
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {developmentWeeks.map((week, index) => (
                <Card key={index} className={`transition-all duration-300 ${selectedWeek === week.week ? 'ring-2 ring-blue-500' : ''}`}>
                  <CardHeader className="cursor-pointer" onClick={() => setSelectedWeek(selectedWeek === week.week ? null : week.week)}>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{week.title}</CardTitle>
                        <CardDescription>{week.focus}</CardDescription>
                      </div>
                      <Badge variant="outline">{week.week}</Badge>
                    </div>
                    <Progress value={week.progress} className="mt-4" />
                  </CardHeader>
                  {selectedWeek === week.week && (
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Activities</h4>
                          <ul className="space-y-2">
                            {week.activities?.map((activity, i) => (
                              <li key={i} className="flex items-center text-sm text-gray-600">
                                <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Deliverables</h4>
                          <ul className="space-y-2">
                            {week.deliverables?.map((deliverable, i) => (
                              <li key={i} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testing">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Testing Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Rigorous testing methodology to ensure your automation works flawlessly
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testingApproach.map((approach, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${approach.color}`}></div>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${approach.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {approach.icon}
                    </div>
                    <CardTitle className="text-lg">{approach.title}</CardTitle>
                    <CardDescription>{approach.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(approach.metrics).map(([key, value], i) => (
                        <div key={i} className="flex items-center justify-between text-sm text-gray-600 p-2 bg-gray-50 rounded">
                          <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <Badge variant="secondary">{String(value)}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Schedule a Demo</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose a convenient time for a live demonstration of our automation capabilities
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-6">
                {scheduleSlots.map((slot, dayIndex) => (
                  <Card key={dayIndex} className="group">
                    <CardHeader className="text-center pb-2">
                      <CardTitle className="text-lg">{slot.day}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 p-2">
                      {slot.times.map((time, timeIndex) => (
                        <Button
                          key={timeIndex}
                          variant={selectedTimeSlot === `${slot.day}-${time}` ? "default" : "outline"}
                          className="w-full text-sm"
                          onClick={() => setSelectedTimeSlot(`${slot.day}-${time}`)}
                        >
                          {time}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
              {selectedTimeSlot && (
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    Book Demo for {selectedTimeSlot.split('-')[1]} on {selectedTimeSlot.split('-')[0]}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Development Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Development Timeline</h2>
          <div className="space-y-6">
            {developmentWeeks.map((week, index) => (
              <Card key={index} className={`transition-all duration-300 ${selectedWeek === week.week ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="cursor-pointer" onClick={() => setSelectedWeek(selectedWeek === week.week ? null : week.week)}>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{week.title}</CardTitle>
                      <CardDescription>{week.focus}</CardDescription>
                    </div>
                    <Badge variant="outline">{week.week}</Badge>
                  </div>
                  <Progress value={week.progress} className="mt-4" />
                </CardHeader>
                {selectedWeek === week.week && (
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Activities</h4>
                        <ul className="space-y-2">
                          {week.activities?.map((activity, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Deliverables</h4>
                        <ul className="space-y-2">
                          {week.deliverables?.map((deliverable, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 mt-20">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: `url(${bgPattern})` }}
        />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Building Your Automation?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's transform your workflow into an efficient, automated system
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
