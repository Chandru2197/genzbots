import React, { useState } from 'react';
import { Calendar, Phone, Sparkles, CheckCircle, Target, Users, Zap, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DotPattern from '@/components/ui/DotPattern';
import ScheduleCallModal from './ScheduleCallModal';

interface TransformationStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

interface CallBenefit {
  icon: React.ReactNode;
  text: string;
}

const ReadyToTransform: React.FC = () => {
  const transformationSteps: TransformationStep[] = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We analyze your current processes and identify automation opportunities",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a customized automation roadmap tailored to your business needs",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy automation solutions with seamless integration and testing",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500", 
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Monitor performance and continuously improve your automated processes",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  
  const callBenefits: CallBenefit[] = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Free 30-minute consultation" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Process audit and analysis" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "ROI estimation and roadmap" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Custom automation recommendations" }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-10 w-full flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="relative p-6">
          {/* Background gradient and effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.05),transparent)]"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  boxShadow: '0 0 8px rgba(255,255,255,0.3)'
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="relative w-full text-center text-white">
            <div className="max-w-4xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Ready to Transform?
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed px-4">
                Join hundreds of businesses that have automated their processes and reclaimed 15+ hours per week. 
                Start your transformation today with a comprehensive analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button 
                  size="lg" 
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleOpenModal}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Free Analysis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border border-white/10 text-white bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleOpenModal}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Discovery Call
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-blue-200">
                <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free process analysis</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No long-term commitments</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Results guaranteed</span>
                </div>
              </div>
              
              <div className="text-blue-200">
                <p className="text-sm px-4">
                  ⚡ Get started in 24 hours • 🛡️ Risk-free trial • 🏆 98% client satisfaction rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ScheduleCallModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default ReadyToTransform;