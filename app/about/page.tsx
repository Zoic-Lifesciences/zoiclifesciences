"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MissionSection from "../components/Mission";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { height: "0vh" },       // start height
      {
        height: "20vh",       // end height
        ease: "none",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          markers: true,
        },
      }
    );
    gsap.fromTo(
      boxRef2.current,
      { height: "0vh" },       // start height
      {
        height: "20vh",       // end height
        ease: "none",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          markers: true,
        },
      }
    );
    gsap.fromTo(
      boxRef3.current,
      { height: "0vh" },       // start height
      {
        height: "20vh",       // end height
        ease: "none",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

 const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const fadeDown = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
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
      
      <div className="h-[50vh] w-[100vw] mt-[10vh] flex flex-col items-center justify-center relative bg-linear-to-l from-[#1BA3CD] to-[#090A69] text-white">
        <h1 className="text-6xl text-center font-semibold mt-10">Our mission:Keeping<br></br>Patients Healthy</h1>
        <p className="w-[35vw] text-lg text-center mt-5">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p>
        <div className="absolute w-[20vw] h-[50vh] bg-green-300 bottom-0 right-0 rounded-2xl mb-[-10vh] z-10 "
        
        >
          <Image
    src="/heart.png"
    alt="Heart"
    fill
    className="object-contain p-4"
  />
        </div>
      </div>
      <div className="h-[100vh] w-[100vw] bg-gray-100 relative flex items-center justify-center">
        <div className="absolute w-[20vw] h-[50vh] top-0 left-0 rounded-2xl mt-[-22vh] bg-amber-200">
          <Image
    src="/medicine.png"
    alt="Heart"
    fill
    className="object-contain p-4"
  />
        </div>
        <div className="flex w-[85%] justify-between">
          <div className="w-[50%] z-10 flex flex-col justify-center ">
            <h1 className="text-5xl text-start ">Our Director<br></br> Mr.Sanjay Gupta</h1>
          <p className="w-[90%] mt-5 text-lg">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum duis aute irure dolor in reprehendert in voluptate velit esse cillumsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</p>
          </div>
          
          <div className="w-[40vw] h-[60vh] mt-[10vh] bg-amber-200 rounded-2xl bg-cover bg-center bg-no-repeat"
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
      <section className="py-28 px-10 md:px-32 bg-[#1BA3CD]/10 relative">
        <h2 className="text-5xl font-[cursive] font-semibold text-center  mb-20">Our Legacy</h2>
        <div className="w-[80vw] gap-12 flex flex-col justify-between relative">
          
          <div className="flex flex-row-reverse  justify-between h-[35vh]">
            <div className="w-[40%] relative">
              <h1 className="text-6xl absolute left-[-25%] ">01</h1>
              <div className="w-[10px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]">
              </div>
          <div ref={boxRef} className="w-[10px] h-[20vh] absolute bg-blue-300 left-[-20%] top-[10vh] flex">
          </div>
              <h1>heading</h1>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
            <div className="w-[40%] "></div>
          </div>

          <div className="flex flex-row h-[35vh] justify-between">
            <div className="w-[40%] relative">
            
              <h1>heading</h1>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
            <div className="w-[40%] relative">
              <h1 className="text-6xl absolute left-[-25%] ">02</h1>
              <div className="w-[10px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]">
              </div>
          <div ref={boxRef2} className="w-[10px] h-[20vh] absolute bg-blue-300 left-[-20%] top-[10vh] flex">
          </div>
            </div>
          </div>

          <div className="flex flex-row-reverse h-[35vh]  justify-between">
            <div className="w-[40%] relative">
              <h1 className="text-6xl absolute left-[-25%] ">03</h1>
              <div className="w-[10px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]">
              </div>
          <div ref={boxRef3} className="w-[10px] h-[20vh] absolute bg-blue-300 left-[-20%] top-[10vh] flex">
          </div>
              <h1>heading</h1>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
            <div className="w-[40%] "></div>
          </div>
        </div>
      </section>

      <section className="h-[100vh]">
        <MissionSection/>
      </section>

      <section className="w-[100vw] flex justify-center items-center pb-10">
        <div className="w-[85%]  flex flex-col items-center ">
          <h1 className="text-6xl text-center">The dream team of<br></br> Marketing</h1>
          <p className="text-center text-gray-500 text-lg mt-5"> We grow business Online</p>
          <div className="flex w-full justify-between gap-12">
            <div className="h-[65vh] w-[22vw] bg-blue-100 rounded-2xl">
              <div className="h-[60%] w-full bg-cover bg-center bg-no-repeat  rounded-t-2xl"
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
            <div className="h-[70vh] w-[27vw] bg-blue-100 rounded-2xl mt-[8vh]">
              <div className="h-[65%] w-full bg-cover bg-center bg-no-repeat  rounded-t-2xl"
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
            <div className="h-[65vh] w-[22vw] bg-blue-100 rounded-2xl">
              <div className="h-[60%] w-full bg-cover bg-center bg-no-repeat  rounded-t-2xl"
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
