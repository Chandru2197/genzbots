import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ReadyToTransformProps {
  title?: string;
  description?: string;
  productName: string;
}

const ReadyToTransform = ({ 
  title = "Ready to Transform Your Business?",
  description = "Schedule a consultation with our experts to learn how our AI solutions can revolutionize your operations",
  productName 
}: ReadyToTransformProps) => {
  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/20 mt-8">
      <CardHeader>
        <CardTitle className="text-white text-center">{title}</CardTitle>
        <CardDescription className="text-center text-blue-200">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center space-x-4">
        <Button
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8"
          onClick={() => window.open(`/schedule-demo?product=${encodeURIComponent(productName)}`, '_blank')}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule a Demo
        </Button>
        <Button
          variant="outline"
          className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
          onClick={() => window.open(`/contact?product=${encodeURIComponent(productName)}`, '_blank')}
        >
          <Phone className="w-4 h-4 mr-2" />
          Contact Sales
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReadyToTransform;
