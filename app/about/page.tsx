"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";
import MissionSection from "../components/Mission";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {

 const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const milestones = [
    { year: "2000", text: "ZOIC founded with a focus on ethical pharma solutions." },
    { year: "2002", text: "First international partnership established." },
    { year: "2005", text: "Expanded manufacturing capabilities." },
    { year: "2010", text: "Entered 15+ countries with R&D centers." },
    { year: "2012", text: "Received multiple pharma quality certifications." },
    { year: "2015", text: "Launched biotechnology division." },
    { year: "2017", text: "Introduced sustainable pharma initiatives." },
    { year: "2020", text: "Adopted AI & digital therapeutics in operations." },
    { year: "2022", text: "Global expansion into 40+ countries." },
    { year: "2025", text: "Future-focused initiatives for precision medicine." },
  ];

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <NavBar/>
      
      <section className="relative h-[100vh] flex items-center justify-center text-white">
              <Image src="/logo.png" alt="ZOIC Logo" fill className="object-contain"/>
              <div className="absolute inset-0 bg-black/70"></div>
              <motion.div {...fadeUp} className="relative z-10 text-center px-6">
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-7xl">
                  25 Years of Global Healthcare Innovation
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
                  For over two decades, ZOIC has transformed lives through science — driven by ethics, powered by innovation, and committed to global wellness.
                </p>
              </motion.div>
            </section>
      <div className="h-[100vh] w-[100vw] bg-gray-100 relative flex items-center justify-center">
        <div className="flex w-[85%] justify-between">
          <div className="w-[50%] z-10 flex flex-col justify-center ">
            <h1 className="text-5xl text-start ">Our Director<br></br> Mr.Sanjay Gupta</h1>
          <p className="w-[90%] mt-5 text-lg">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum duis aute irure dolor in reprehendert in voluptate velit esse cillumsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
          </div>
          
          <div className="w-[40vw] h-[60vh] bg-amber-200 rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/md.png')" }}
          ></div>
        </div>
      </div>
      <div className="h-[90vh] w-[100vw] relative flex items-center justify-center">
        <div className="flex w-[85%] justify-between">
          <div className="w-[40vw] h-[60vh] mt-[10vh] bg-amber-200 rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/team/rohit2.jpg')" }}
          ></div>
          <div className="w-[50%] z-10 flex flex-col justify-center ">
            <h1 className="text-5xl text-start ">The Story Behind<br></br> Our Success</h1>
          <p className="w-[90%] mt-5 text-lg">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum duis aute irure dolor in reprehendert in voluptate velit esse cillumsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
          </div>
          
          
        </div>
      </div>

      {/* ===== LEGACY TIMELINE ===== */}
      <Timeline/>

      <section className="h-[100vh]">
        <MissionSection/>
      </section>

      <section className="w-[100vw] bg-gray-100 flex justify-center items-center pb-10 pt-12">
        <div className="w-[85%]  flex flex-col items-center ">
          <h1 className="text-6xl text-center">The dream team of<br></br> Marketing</h1>
          <p className="text-center text-gray-500 text-lg mt-5"> We grow business Online</p>
          <div className="flex w-full justify-between">
            <div className=" w-[22vw] bg-blue-100 rounded-2xl">
              <div className="h-[50vh] w-full bg-cover bg-center bg-no-repeat  rounded-t-2xl"
              style={{ backgroundImage: "url('/md.png')" }}>
              </div>
              <div className="bg-blue-900 text-white">
                <h1  className="ml-5 py-2 text-lg font-semibold">02</h1>
              </div>
              <div className="flex justify-center items-center w-full mt-5">
                <div className="w-[90%]">
                  <h1 className="text-xl font-bold mb-3">SEO Website Design</h1>
                  <p className="text-gray-500">1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and ad</p>
                </div>
                
                
              </div>
              
            </div>
            <div className=" w-[27vw] bg-blue-100 rounded-2xl mt-[8vh] pb-10">
              <div className="h-[50vh] w-full bg-cover bg-center bg-no-repeat  rounded-t-2xl"
              style={{ backgroundImage: "url('/md.png')" }}>
              </div>
              <div className="bg-blue-900 text-white">
                <h1  className="ml-5 py-2 text-lg font-semibold">02</h1>
              </div>
              <div className="flex justify-center items-center w-full mt-5">
                <div className="w-[90%]">
                  <h1 className="text-xl font-bold mb-3">SEO Website Design</h1>
                  <p className="text-gray-500">1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and ad</p>
                </div>
                
                
              </div>
              
            </div>
            <div className=" w-[22vw] bg-blue-100 rounded-2xl">
              <div className="h-[50vh] w-full bg-cover bg-center bg-no-repeat  rounded-t-2xl"
              style={{ backgroundImage: "url('/md.png')" }}>
              </div>
              <div className="bg-blue-900 text-white">
                <h1  className="ml-5 py-2 text-lg font-semibold">02</h1>
              </div>
              <div className="flex justify-center items-center w-full mt-5">
                <div className="w-[90%]">
                  <h1 className="text-xl font-bold mb-3">SEO Website Design</h1>
                  <p className="text-gray-500">1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and ad</p>
                </div>
                
                
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
