// import React, { useMemo } from "react";
// import Image from "next/image";
// // import ButtonPrimary from "./misc/ButtonPrimary";
// import {motion} from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "../components/layout/ScrollAnimationWrapper";
// import { Button } from "@mantine/core";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const Hero = ({
//   listUser = [
//     {
//       name: "Users",
//       number: "390",
//       icon: "/assets/svgs/heroicons_sm-user.svg",
//     },
//     {
//       name: "Locations",
//       number: "20",
//       icon: "/assets/svgs/gridicons_location.svg",
//     },
//     {
//       name: "Server",
//       number: "50",
//       icon: "/assets/svgs/bx_bxs-server.svg",
//     },
//   ],
// }) => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div
//       className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto overflow-hidden"
//       id="about"
//     >
//       <Navbar/>
//       <ScrollAnimationWrapper>
//           <motion.div
//             className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
//             variants={scrollAnimation}>
//             <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
//               <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
//                 Want anything to be easy with <strong>GenZBots</strong>.
//               </h1>
//               <p className="text-black-500 mt-4 mb-6">
//                 Provide a network for all your needs with ease and fun using
//                 GenZBots discover interesting features from us.
//               </p>
//               {/* <Button>Get Started</Button> */}
//             </div>
//             <div className="flex w-full">
//               <motion.div className="h-full w-full" variants={scrollAnimation}>
//                 <Image
//                   src="/assets/svgs/Illustration1.png"
//                   alt="VPN Illustrasi"
//                   quality={100}
//                   width={612}
//                   height={383}
//                   layout="responsive"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//       </ScrollAnimationWrapper>
//       <div className="">
//         {/* <ScrollAnimationWrapper
//           className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
//           {listUser.map((listUsers, index) => (
//             <motion.div
//               className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
//               key={index}
//               custom={{duration: 2 + index}}
//               variants={scrollAnimation}
//             >
//               <div className="flex mx-auto w-40 sm:w-auto">
//                 <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
//                   <img src={listUsers.icon} className="h-6 w-6" />
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="text-xl text-black-600 font-bold">
//                     {listUsers.number}+
//                   </p>
//                   <p className="text-lg text-black-500">{listUsers.name}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//        </ScrollAnimationWrapper> */}
//        <ScrollAnimationWrapper>
//         <motion.div
//             className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
//             variants={scrollAnimation}>
//         <div className="relative mb-6">
//                 <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent">
//                   About GenZBot
//                 </h2>
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5722]/20 via-[#FF8A65]/20 to-[#FF5722]/20 blur-lg -z-10 rounded-lg opacity-75"></div>
//               </div>
//               <p className="text-desc font-desc text-gray-600 mb-4 md:mb-6">
//                 Pioneering the Future of Automation, Built for the Next Generation
//               </p>
//               <p className="text-desc font-desc text-gray-600 mb-4 md:mb-6">
//               Founded in 2025, GenZbots is redefining business automation with AI-driven RPA solutions designed for agility,
//               scalability, and the digital-first era. We empower startups and enterprises to break free from repetitive tasks and unlock productivity with smart, intuitive bots that learn and adapt.
//               </p>
//               <p className="text-desc font-desc text-gray-600 mb-6 md:mb-8">
//               Our team of Gen-Z engineers and automation veterans bridges the gap between technical innovation and real-world business needs. We don’t just automate processes—we transform them into competitive advantages.
//               </p>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <div className="text-2xl md:text-4xl font-bold text-blue-600">100+</div>
//                   <div className="text-gray-600">Workflows Automated</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-4xl font-bold text-blue-600">95%</div>
//                   <div className="text-gray-600">Client Retention Rate</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-4xl font-bold text-blue-600">30+</div>
//                   <div className="text-gray-600">RPA specialists</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl md:text-4xl font-bold text-blue-600">8+</div>
//                   <div className="text-gray-600">Industries Optimized</div>
//                 </div>
//               </div>
//               </motion.div>
//        </ScrollAnimationWrapper>
//        <div
//           className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
//           style={{ filter: "blur(114px)" }}
//        ></div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Hero;

import type { Metadata } from 'next';
// import Contact from '~/components/widgets/Contact';

// import FAQs from '~/components/widgets/FAQs';
// import Features from '~/components/widgets/Features';
// import Features3 from '~/components/widgets/Features3';
import AboutUsPage from '../components/about_page/widgets/AboutUsPage';
// import Hero2 from '../components/about_page/widgets/Hero2';
// import Stats from '../components/about_page/widgets/Stats';
// import Steps from '../components/about_page/widgets/Steps';
// import Team2 from '~/components/widgets/Team2';
// import Testimonials2 from '~/components/widgets/Testimonials2';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
  featuresAbout,
  teamAbout,
} from '../shared/data/about.data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: `About us`,
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutUsPage/>
      {/* <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      <Steps {...stepsAbout} /> */}
      {/* <Features3 {...features3About} />
      <Features {...featuresAbout} />
      <Team2 {...teamAbout} />
      <Testimonials2 {...testimonials2About} />
      <FAQs {...faqsAbout} />
      <Contact {...contactAbout} /> */}
      <Footer />
    </>
  );
};

export default AboutPage;