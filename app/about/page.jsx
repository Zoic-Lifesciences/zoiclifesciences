"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";
import MissionSection from "../components/Mission";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isPlaying) {
            videoElement.play().catch(() => {});
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(videoElement);
    return () => observer.disconnect();
  }, [isPlaying]);

  const handlePlay = () => {
    const video = videoRef.current;
    video.muted = false;

    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };


  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <NavBar />

      <section className="relative h-[100vh] flex items-center justify-center text-white">
        <Image src="/medworld.jpg" alt="ZOIC Logo" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-7xl">
            25 Years of Global Healthcare Innovation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            For over two decades, ZOIC has transformed lives through science — driven by ethics,
            powered by innovation, and committed to global wellness.
          </p>
        </div>
      </section>

      <div className="h-[90vh] w-[100vw] bg-linear-to-r from-[#1BA3CD] to-[#090A69] relative flex items-end justify-center">
        <div className="flex w-[85%] h-[80%] justify-between items-end ">
          <div className="w-[50%] flex flex-col text-white mb-[10vh] ">
            <div className="w-[90%] text-2xl flex relative ">
              <span className="inline-block">
                <FaQuoteLeft className="text-5xl mr-5" />
              </span>

              <p className="mt-10 relative text-3xl">
                <div className="w-full top-[-20px] bg-white h-[5px] absolute"></div>
                <div className="w-[5px] top-[20px] left-[-40px] bg-white h-full absolute"></div>
                At Zoic, our medicine stands independently, capable of aiding recovery where even
                blessings may falter.
                <span className="inline-block ml-2">
                  <FaQuoteRight className="text-xl" />
                </span>
              </p>
            </div>

            <div className="flex text-white mt-[20vh]">
              <div className="w-24 h-24 relative">
                <Image src="/logo.png" alt="ZOIC Logo" fill className="object-contain" />
              </div>

              <div className="text-center ml-10">
                <h1 className="text-6xl mb-5">SANJAY GUPTA</h1>
                <p className="text-3xl">
                  MANAGING DIRECTOR
                  <br />
                  ZOIC LIFESCIENCES
                </p>
              </div>
            </div>
          </div>

          <div className="w-[40vw] h-[90vh] overflow-hidden relative ">
            <Image
              src="/team/sanjaygupta.png"
              alt="Sanjay Gupta"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-[90vh] w-[100vw] relative flex items-center justify-center">
        <div className="flex w-[85%] justify-between">
          <div
            className="w-[40vw] h-[70vh] bg-amber-200 rounded-2xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/team/rohit2.jpg')" }}
          ></div>

          <div className="w-[50%] z-10 flex flex-col">
            <h1 className="text-5xl text-start">The Story Behind<br /> Our Success</h1>

            <p className="w-[90%] mt-5 text-lg">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum duis aute irure dolor in reprehendert in voluptate velit
              esse cillumsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>

            <div className="w-full flex flex-col relative items-center mt-10">
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 m-auto w-[90px] h-[90px] bg-cyan-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-cyan-400 transition-all z-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 ml-1"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}

              <video
                ref={videoRef}
                src=""
                controls={isPlaying}
                loop
                playsInline
                className="w-[30vw] h-[30vh] mt-10 ml-10 bg-gray-100 object-contain"
                onPlay={() => setIsPlaying(true)}
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <Timeline />

      <section className="h-[100vh]">
        <MissionSection />
      </section>

      <section className="w-[100vw] bg-gray-100 flex justify-center items-center pb-10 pt-12">
        <div className="w-[85%] flex flex-col items-center">
          <h1 className="text-6xl text-center">The dream team of<br /> Marketing</h1>
          <p className="text-center text-gray-500 text-lg mt-5">We grow business Online</p>

          <div className="flex w-full justify-between">
            <div className="w-[22vw] bg-blue-100 rounded-2xl transition-transform duration-300 hover:scale-105">
              <div
                className="h-[50vh] w-full bg-cover bg-center bg-no-repeat rounded-t-2xl"
                style={{ backgroundImage: "url('/team/sanjaygupta.png')" }}
              ></div>

              <div className="bg-blue-900 text-white">
                <h1 className="ml-5 py-2 text-lg font-semibold">02</h1>
              </div>

              <div className="flex justify-center items-center w-full mt-5">
                <div className="w-[90%]">
                  <h1 className="text-xl font-bold mb-3">SEO Website Design</h1>
                  <p className="text-gray-500">
                    1st on the List provides highly effective PPC advertising for every budget
                    including Google PPC Ads, Bing PPC, and ad
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[27vw] bg-blue-100 rounded-2xl mt-[8vh] pb-10 transition-transform duration-300 hover:scale-105">
              <div
                className="h-[50vh] w-full bg-cover bg-center bg-no-repeat rounded-t-2xl"
                style={{ backgroundImage: "url('/md.png')" }}
              ></div>

              <div className="bg-blue-900 text-white">
                <h1 className="ml-5 py-2 text-lg font-semibold">02</h1>
              </div>

              <div className="flex justify-center items-center w-full mt-5">
                <div className="w-[90%]">
                  <h1 className="text-xl font-bold mb-3">SEO Website Design</h1>
                  <p className="text-gray-500">
                    1st on the List provides highly effective PPC advertising for every budget
                    including Google PPC Ads, Bing PPC, and ad
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[22vw] bg-blue-100 rounded-2xl transition-transform duration-300 hover:scale-105">
              <div
                className="h-[50vh] w-full bg-cover bg-center bg-no-repeat rounded-t-2xl"
                style={{ backgroundImage: "url('/md.png')" }}
              ></div>

              <div className="bg-blue-900 text-white">
                <h1 className="ml-5 py-2 text-lg font-semibold">02</h1>
              </div>

              <div className="flex justify-center items-center w-full mt-5">
                <div className="w-[90%]">
                  <h1 className="text-xl font-bold mb-3">SEO Website Design</h1>
                  <p className="text-gray-500">
                    1st on the List provides highly effective PPC advertising for every budget
                    including Google PPC Ads, Bing PPC, and ad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
