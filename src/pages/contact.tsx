// import React, { useMemo } from "react";
// import Image from "next/image";
// // import ButtonPrimary from "./misc/ButtonPrimary";
// import {motion} from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "../components/layout/ScrollAnimationWrapper";
// import { Button } from "@mantine/core";
// import ContactSection from "@/components/ContactSection";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const ContactUs = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div
//       className="max-w-screen-xl mx-auto overflow-hidden"
//       id="contact-us"
//     >
//       <Navbar/>
//       <ScrollAnimationWrapper>
//           <ContactSection/>
//       </ScrollAnimationWrapper>
//       <Footer/>
//     </div>
//   );
// };

// export default ContactUs;

import type { Metadata } from 'next';

import Contact2 from '../components/about_page/widgets/Contact2';
import Features2 from '../components/about_page/widgets/Features2';
import Hero from '../components/about_page/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '../shared/data/contact.data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact2 {...contact2Contact} />
      <Features2 {...features2Contact} />
    </>
  );
};

export default Page;
