import { useRef, useEffect } from 'react';

interface TestimonialsSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  avatar: string;
}

export default function TestimonialsSection({ addToRefs }: TestimonialsSectionProps) {
  const testimonialTitle = useRef<HTMLDivElement>(null);
  const testimonialCards = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialTitle.current) addToRefs(testimonialTitle.current);
    if (testimonialCards.current) addToRefs(testimonialCards.current);
  }, [addToRefs]);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "Operations Manager, TechCorp",
      testimonial: "AutomateNow transformed our business processes, reducing manual workload by 70% and improving accuracy across the board. Their team was professional and responsive throughout the implementation.",
      avatar: "bg-blue-200"
    },
    {
      name: "Michael Chen",
      position: "CTO, FinanceHub",
      testimonial: "The custom automation solution developed by AutomateNow has been a game-changer for our finance operations. We've seen significant improvements in efficiency and data accuracy.",
      avatar: "bg-green-200"
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Marketing, BrandX",
      testimonial: "Working with AutomateNow to automate our marketing workflows was one of the best decisions we made. Their expertise and innovative approach delivered results beyond our expectations.",
      avatar: "bg-purple-200"
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={testimonialTitle} data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our automation solutions.
          </p>
        </div>
        
        <div ref={testimonialCards} data-speed="0.05" className="parallax">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${testimonial.avatar} flex items-center justify-center text-lg font-bold`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
