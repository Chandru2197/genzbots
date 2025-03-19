import { useRef, useEffect } from 'react';

interface AboutSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function AboutSection({ addToRefs }: AboutSectionProps) {
  const aboutImage = useRef<HTMLDivElement>(null);
  const aboutText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutImage.current) addToRefs(aboutImage.current);
    if (aboutText.current) addToRefs(aboutText.current);
  }, [addToRefs]);

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <div ref={aboutImage} data-speed="0.06" className="parallax">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-blue-100">
                {/* Placeholder for about image */}
                <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-xl font-medium">
                  About Image Placeholder
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div ref={aboutText} data-speed="0.08" className="parallax">
              <h2 className="text-4xl font-bold mb-6">About AutomateNow</h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2018, AutomateNow has been at the forefront of business automation solutions, 
                helping companies of all sizes transform their operations through innovative technology.
              </p>
              <p className="text-xl text-gray-600 mb-6">
                Our team of experts combines deep industry knowledge with technical expertise to deliver
                customized automation solutions that address your specific business challenges.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                We believe in creating long-term partnerships with our clients, providing ongoing support
                and continuously improving solutions to adapt to evolving business needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Automation Experts</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">12+</div>
                  <div className="text-gray-600">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
