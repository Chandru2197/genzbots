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
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 relative">
            <div className="relative">
              <h2 className="text-label font-label text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
                Our Services
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
            </div>
            <p className="text-desc font-desc text-gray-600 mb-8 max-w-2xl mx-auto text-center">
              Discover our comprehensive range of automation and development solutions.
            </p>
          </div>
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
                  <h3 className="text-label font-label mb-3">{service.title}</h3>
                  <p className="text-desc font-desc text-gray-600 mb-4">{service.description}</p>
                  <button className="text-btn font-btn bg-[var(--color-secondary)] text-white px-6 py-3 rounded-none transition-all duration-300 inline-flex items-center transform hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent cursor-pointer">
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

