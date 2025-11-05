"use client"; 

import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/Mission";
import ChooseUs from "./components/ChooseUs";
import NewlyLaunched from "./components/NewlyLaunched";
import Certifications from "./components/Certifications";
import WhatWeOffer from "./components/WhatWeOffer";
import NewsRoom from "./components/NewsRoom";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import AnimatedText from "./components/FrontPage"; // import the component
import Category from "./components/Category"
import Speciality from "./components/Speciality"
import Awards from "./components/Awards"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000); // show intro for 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 bg-linear-to-b from-[#4244CB] to-[#070865] flex justify-center items-center z-50 transition-transform duration-700 ease-in-out">
          <AnimatedText text="ZOIC" />
        </div>
      )}

      <main className={`overflow-x-hidden transition-all duration-700 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        <div className="flex justify-center bg-white">
          <NavBar />
        </div>
        <HeroSection />
        <NewlyLaunched />
        <MissionSection />
        <ChooseUs />
        <Category/>
        <Certifications />
        <WhatWeOffer />
        <Speciality/>
        <Awards/>
        <NewsRoom />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}
