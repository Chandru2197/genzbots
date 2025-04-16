// File: components/ContactSection.tsx
import { useRef, useEffect } from 'react';

interface ContactSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

export default function ContactSection({ addToRefs }: ContactSectionProps) {
  const contactTitle = useRef<HTMLDivElement>(null);
  const contactForm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactTitle.current) addToRefs(contactTitle.current);
    if (contactForm.current) addToRefs(contactForm.current);
  }, [addToRefs]);

  return (
    <section id="contact" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contactTitle} data-speed="0.08" className="parallax text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Automate Your Business Processes?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Contact us today for a free consultation and discover how GenZbots can transform your operations.
          </p>
        </div>
        
        <div ref={contactForm} data-speed="0.05" className="parallax">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 btn-secondary text-white rounded-md text-lg font-medium transition-colors"
                >
                  Schedule a Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}