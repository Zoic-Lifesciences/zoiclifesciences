import Link from "next/link";
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import MissionSection from "./components/Mission"
import ChooseUs from "./components/ChooseUs"
import NewlyLaunched from "./components/NewlyLaunched"
import Certifications from "./components/Certifications"
import WhatWeOffer from "./components/WhatWeOffer"
import NewsRoom from "./components/NewsRoom"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <div className="flex justify-center bg-white"><NavBar/></div>
      <HeroSection></HeroSection>
      <MissionSection></MissionSection>
      <ChooseUs/>
      <NewlyLaunched/>
      <Certifications/>
      <WhatWeOffer/>
      <NewsRoom/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
