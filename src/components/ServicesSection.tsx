import { useRef, useEffect } from 'react';

interface ServicesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Service {
  title: string;
  description: string;
  image: string;
}

export default function ServicesSection({ addToRefs }: ServicesSectionProps) {
  const servicesTitle = useRef<HTMLDivElement>(null);
  const servicesCards = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesTitle.current) addToRefs(servicesTitle.current);
    if (servicesCards.current) addToRefs(servicesCards.current);
  }, [addToRefs]);

  const services: Service[] = [
    {
      title: "Business Process Automation",
      description: "Streamline your operations by automating repetitive tasks and workflows.",
      image: "bg-blue-100"
    },
    {
      title: "RPA Implementation",
      description: "Implement Robotic Process Automation to handle high-volume, rule-based tasks.",
      image: "bg-green-100"
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your specific business requirements.",
      image: "bg-purple-100"
    },
    {
      title: "Integration Services",
      description: "Connect your existing systems and applications for seamless data flow.",
      image: "bg-orange-100"
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage AI and ML technologies to enhance your automation capabilities.",
      image: "bg-red-100"
    },
    {
      title: "Consulting & Strategy",
      description: "Expert guidance on identifying and implementing the right automation solutions.",
      image: "bg-yellow-100"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={servicesTitle} data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation solutions designed to optimize your business processes
            and drive digital transformation.
          </p>
        </div>
        
        <div ref={servicesCards} data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 ${service.image} flex items-center justify-center`}>
                  <div className="text-2xl font-medium">Service Image</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

