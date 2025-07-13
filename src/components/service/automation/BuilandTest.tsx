import React, { useState } from 'react';
import { Zap, CheckCircle, ArrowRight, Clock, Users, BarChart3, MessageCircle, ArrowLeft, Star, Settings, Code, Play, Shield, GitBranch, Monitor, TestTube, Video, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 px-4 py-8">
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: `url(${bgPattern})` }}
        />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Build & Test Phase
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Where your automation dreams become reality through agile development and rigorous testing
            </p>
          </div>
        </div>
      </div>

      {/* Development Approach */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentApproach.map((approach, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${approach.color}`} />
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${approach.color} text-white`}>
                  {approach.icon}
                </div>
                <CardTitle className="mt-4">{approach.title}</CardTitle>
                <CardDescription>{approach.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {approach.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
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
