import React, { useState } from 'react';
import { Shield, CheckCircle, ArrowRight, Clock, BarChart3, MessageCircle, ArrowLeft, Star, Users, Zap, Calendar, Settings, TrendingUp, Phone, AlertTriangle, Target, Monitor, Activity, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface HypercareFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  responseTime: string;
  benefits?: string[];
}

interface SupportChannel {
  id: string;
  name: string;
  description: string;
  responseTime: string;
  icon: React.ReactNode;
}

interface Metric {
  id: string;
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
}

const bgPattern = `data:image/svg+xml,${encodeURIComponent(
  `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>`
)}`;

export default function HyperCare() {
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [activeSupport, setActiveSupport] = useState<string | null>(null);

  const hypercareFeatures: HypercareFeature[] = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: '24/7 Priority Support',
      description: 'Immediate assistance during the critical launch period',
      color: 'from-red-500 to-pink-500',
      responseTime: '< 1 hour',
      benefits: [
        'Round-the-clock monitoring',
        'Dedicated support team',
        'Priority issue resolution',
        'Proactive maintenance'
      ]
    },
    // Add other features...
  ];
