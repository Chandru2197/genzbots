import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const isInView = useInView(featuresTitle, { once: true });

  useEffect(() => {
    if (featuresTitle.current) addToRefs(featuresTitle.current);
    if (featuresCards.current) addToRefs(featuresCards.current);
  }, [addToRefs]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      [featuresTitle.current, featuresCards.current].forEach((element) => {
        if (!element) return;

        const speed = element.dataset.speed || '0.1';
        const yPos = -scrollY * parseFloat(speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        element.style.willChange = 'transform';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: Feature[] = [
    {
      title: "Process Assessment & Optimization",
      description: "Streamline repetitive tasks and workflows to save time and reduce errors.",
      icon: "🔄"
    },
    {
      title: "Custom Bot Development",
      description: "Connect your systems and applications for seamless data flow.",
      icon: "🔌"
    },
    {
      title: "Intelligent Workflow Automation",
      description: "Tailored automation solutions designed specifically for your business needs.",
      icon: "⚙️"
    },
    {
      title: "Implementation & Training",
      description: "Gain insights from your data with automated analytics and reporting tools.",
      icon: "📊"
    },
    {
      title: "Support & Continuous Improvement",
      description: "Gain insights from your data with automated analytics and reporting tools.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={featuresTitle}
          data-speed="0.08"
          className="parallax text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our automation solutions can transform your business operations
            and drive efficiency across your organization.
          </p>
        </motion.div>
        
        <div ref={featuresCards} data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl text-center shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
