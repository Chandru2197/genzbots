import { useRef, useEffect } from 'react';

interface FeaturesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function FeaturesSection({ addToRefs }: FeaturesSectionProps) {
  const featuresTitle = useRef<HTMLDivElement>(null);
  const featuresCards = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresTitle.current) addToRefs(featuresTitle.current);
    if (featuresCards.current) addToRefs(featuresCards.current);
  }, [addToRefs]);

  const features: Feature[] = [
    {
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows to save time and reduce errors.",
      icon: "🔄"
    },
    {
      title: "Data Integration",
      description: "Connect your systems and applications for seamless data flow.",
      icon: "🔌"
    },
    {
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your business needs.",
      icon: "⚙️"
    },
    {
      title: "Analytics & Reporting",
      description: "Gain insights from your data with automated analytics and reporting tools.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={featuresTitle} data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our automation solutions can transform your business operations
            and drive efficiency across your organization.
          </p>
        </div>
        
        <div ref={featuresCards} data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
