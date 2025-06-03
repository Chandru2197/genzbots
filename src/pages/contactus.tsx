import React, { useMemo } from "react";
import Image from "next/image";
// import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/layout/ScrollAnimationWrapper";
import { Button } from "@mantine/core";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mx-auto overflow-hidden"
      id="contact-us"
    >
      <Navbar/>
      <ScrollAnimationWrapper>
          <ContactSection/>
      </ScrollAnimationWrapper>
      <Footer/>
    </div>
  );
};

export default ContactUs;