import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

interface TestimonialsSectionProps {
  addToRefs: (el: HTMLElement | null) => void;
}

interface Testimonial {
  name: string;
  position: string;
  testimonial: string;
  avatar: string;
  initials: string;
}

export default function TestimonialsSection({ addToRefs }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Michael Chen",
      position: "CTO, FinanceHub",
      testimonial: "The custom automation solution developed by GenZBot has been a game-changer for our finance operations. We've seen significant improvements in efficiency and data accuracy.",
      avatar: "bg-[#C8F7D0]",
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Marketing, BrandX",
      testimonial: "Working with GenZBot to automate our marketing workflows was one of the best decisions we made. Their expertise and innovative approach delivered results beyond our expectations.",
      avatar: "bg-[#E9D5FF]",
      initials: "ER"
    },
    {
      name: "David Smith",
      position: "CEO, InnovateNow",
      testimonial: "The implementation of GenZBot's automation solutions has revolutionized our operational efficiency. Their expertise and dedication to excellence are truly remarkable.",
      avatar: "bg-[#FFE4C8]",
      initials: "DS"
    },
    {
      name: "Lisa Wong",
      position: "Head of Operations, TechGrowth",
      testimonial: "GenZBot's solutions have helped us scale our operations seamlessly. Their team's technical expertise and customer support are outstanding.",
      avatar: "bg-[#FFD5D5]",
      initials: "LW"
    }
  ];

  return (
    <div className="relative w-full">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          {/* Header with blur effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 -inset-x-24 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/30 to-[#FF5722]/20 blur-3xl"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-[#FF5722] z-10">
              What Our Clients Say
            </h2>
          </div>
          
          {/* Description without blur effect */}
          <p className="text-gray-600 mt-8 text-center max-w-2xl mx-auto">
            Discover why businesses trust us with their automation needs
          </p>
        </div>
        
        <div className="relative px-4 py-8 max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.swiper-pagination'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            className="testimonials-swiper !pb-16 relative z-20"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-12">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 p-8 min-h-[300px] w-full max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-full ${testimonial.avatar} flex items-center justify-center text-lg font-semibold shadow-lg`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">{testimonial.testimonial}</p>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom navigation and pagination */}
            <div className="swiper-pagination absolute bottom-0 !w-full flex justify-center z-20"></div>
            <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-30 text-[#FF5722]"></div>
            <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-30 text-[#FF5722]"></div>
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding: 20px 0 40px;
          position: relative;
          overflow: visible !important;
        }
        .swiper-wrapper {
          z-index: 1;
        }
        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 1rem 0;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #D1D5DB;
          opacity: 0.5;
          transition: all 0.3s ease;
          cursor: pointer;
          border-radius: 50%;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #FF5722;
          transform: scale(1.5);
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #FF5722 !important;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px !important;
          height: 44px !important;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(5px);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          z-index: 30;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next {
          right: -60px !important;
        }
        .swiper-button-prev {
          left: -60px !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: translateY(-50%) scale(1.1);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .swiper-button-next {
            right: 10px !important;
          }
          .swiper-button-prev {
            left: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
