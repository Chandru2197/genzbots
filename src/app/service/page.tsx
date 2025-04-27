"use client";

import { useRef, useEffect } from 'react';

interface ServicesSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Service {
  title: string;
  description: string;
  image: string;
  features:any;
  solution:string;
}

export default function ServicesSection() {
  const servicesTitle = useRef<HTMLDivElement>(null);
  const servicesCards = useRef<HTMLDivElement>(null);


  const services: Service[] = [
    {
      title: "Process Assessment & Analysis",
      description: "We begin by thoroughly analyzing your existing workflows to identify ideal automation candidates. Our comprehensive assessment includes:",
      image: "bg-blue-100",
      features:[
        'Business process mapping and documentation',
        'Automation feasibility analysis',
        'ROI calculation and business case development',
        'Process inefficiency identification',
        'Automation priority recommendations'
      ],
      solution:"Our systematic approach ensures we target processes with the highest impact potential, maximizing your automation ROI."
    },
    {
      title: "RPA Strategy & Roadmap",
      description: "Developing a comprehensive automation strategy aligned with your business objectives:",
      image: "bg-green-100",
      features:[
        'Enterprise automation vision and strategy',
        'Technology selection and architecture planning',
        'Governance framework development',
        'Center of Excellence (CoE) design',
        'Multi-year automation roadmap'
      ],
      solution:"A strategic approach ensures sustainable automation success rather than disconnected tactical implementations."
    },
    {
      title: "Custom Bot Development",
      description: "Creating intelligent software robots tailored to your specific requirements:",
      image: "bg-purple-100",
      features:[
        "Process-specific bot design",
        'Robust exception handling',
        'System integration capabilities',
        'Custom workflow orchestration',
        'Comprehensive testing and validation'
      ],
      solution:"Our custom bots are built for reliability, scalability and seamless integration with your existing systems."
    },
    {
      title: "Implementation & Deployment",
      description: "Expert deployment of automation solutions in your production environment:",
      image: "bg-orange-100",
      features:[
        'Controlled production rollout',
        'Performance optimization',
        'Integration with existing systems',
        'Comprehensive documentation',
        'Knowledge transfer'
      ],
      solution:"Smooth implementation minimizes business disruption while maximizing adoption."
    },
    {
      title: "Training & Change Management",
      description: "Ensuring your team is equipped to succeed with automation:",
      image: "bg-red-100",
      features:[
        'RPA tool training',
        'Process redesign workshops',
        'User adoption programs',
        'Change management support',
        'Documentation and best practices'
      ],
      solution:"Successful automation requires both technological and organizational change."
    },
    {
      title: "Support & Continuous Improvement",
      description: "Ongoing optimization to ensure lasting automation success:",
      image: "bg-yellow-100",
      features:[
        '24/7 production support',
        'Performance monitoring',
        'Process optimization',
        'Bot maintenance and updates',
        'Automation expansion opportunities'
      ],
      solution:"Automation is a journey, not a destination. Our ongoing support ensures your solutions evolve with your business."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={servicesTitle} data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comprehensive RPA Solutions to Transform Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             At GenZbots, we deliver end-to-end RPA solutions tailored to your unique business challenges. Our services span from initial assessment through implementation and ongoing optimization, ensuring maximum return on your automation investment.
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
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
                    <ul className="space-y-3 mb-5">
                        {service.features.map((feature:any, index:number) => (
                            <li key={index} className="flex items-center">
                                <svg className="w-5 h-5 text-blue-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-sm font-bold mb-3">{'Why it matters ?'}</h2>
                    <p className="text-sm text-gray-500 mb-4">{service.solution}</p>
                  {/* <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn more →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation solutions designed to optimize your business processes
            and drive digital transformation.
          </p>
        </div>
        
        <div data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div 
                // key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 flex items-center justify-center`}>
                  <div className="text-2xl font-medium">Service Image</div>
                </div>
                <div className="p-6">
                  <h3 className="text-label font-label mb-3">{"service.title"}</h3>
                  <p className="text-desc font-desc text-gray-600 mb-4">{"service.description"}</p>
                  <button className="text-btn font-btn bg-[var(--color-secondary)] text-white px-6 py-3 rounded-none transition-all duration-300 inline-flex items-center transform  hover:bg-white hover:text-[var(--color-secondary)] hover:border-[var(--color-secondary)] border-2 border-transparent transition-colors duration-300">
                    Learn more →
                  </button>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

