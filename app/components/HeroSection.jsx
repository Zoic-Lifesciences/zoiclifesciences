"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import NavBar from "./NavBar";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Herosection() {
  const slides = [
    {
      img: "/aiims.png",
      ref: "/about#legacy",
      title: "A Legacy that AIIMS relies on",
      desc: "For 25+ years, ZOIC has stood for uncompromising quality in Indian healthcare.",
      button: "Explore Our Legacy",
    },
    {
      img: "/army.webp",
      ref: "/about#legacy",
      title: "Trusted by the INDIAN ARMY",
      desc: "Strength That Matches the Indian Army.",
      button: "Explore Our Legacy",
    },
    {
      img: "/innovation.gif",
      ref: "/about#mission",
      title: "Precision powered by Innovation",
      desc: "ZOIC’s advanced systems for smarter, safer healing.",
      button: "Join Our Mission",
    },
    {
      img: "/biclav1000.jpg",
      ref: "/products",
      title: "A Healthcare network that covers India",
      desc: "From metros to remote frontiers ZOIC delivers reliability everywhere.",
      button: "View Products",
    },
    {
      img: "/sultab.jpg",
      ref: "/contact",
      title: "Pioneering excellence in Pharma",
      desc: "From metros to remote frontiers ZOIC delivers reliability everywhere.",
      button: "Contact Us",
    },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] bg-white text-white overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full relative overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="h-full relative">
            <div
              className="relative w-full h-full bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#1BA3CD]/20 to-[#090A69]"></div>
              <div className="w-full h-40 absolute inset-0 bg-linear-to-b from-[#090A69]/80 via-[#090A69]/10 to-transparent" ></div>

              {/* Animated Text Content */}
              <div className="relative z-10 flex flex-col items-start justify-top pt-28 md:pt-0 md:justify-center h-full px-6  max-w-sm md:max-w-7xl mx-auto">
                <h1
                  key={slide.title}
                  className="regulator-nova-alts tracking-wider text-3xl sm:text-4xl md:text-6xl lg:text-6xl mb-4 w-150"
                >
                  {slide.title}
                </h1>

                <p
                  key={slide.desc}
                  className="regulator-nova-alts max-w-lg text-gray-300 text-base sm:text-lg md:text-xl mb-8"
                >
                  {slide.desc}
                </p>

                <a
                  href={slide.ref}
                  className="inline-block bg-[#1BA3CD] hover:bg-[#090A69] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  {slide.button}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-teal-400 text-2xl sm:text-3xl"
        >
          <FaChevronDown />
        </div>
        <span className="text-gray-300 text-xs sm:text-sm mt-1 tracking-wider ">
          Scroll Down
        </span>
      </div>
    </section>
  );
}


