"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import NavBar from "../components/NavBar2";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Herosection() {
  const slides = [
    {
      img: "/army.webp",
      title: "Trusted by the INDIAN ARMY",
      desc: "Strength That Matches the Indian Army.",
      button: "Explore Our Legacy",
    },
    {
      img: "/aiims.png",
      title: "A Legacy that AIIMS relies on",
      desc: "For 25+ years, ZOIC has stood for uncompromising quality in Indian healthcare.",
      button: "Explore Our Legacy",
    },
    {
      img: "/innovation.gif",
      title: "Precision powered by Innovation",
      desc: "ZOIC’s advanced systems for smarter, safer healing.",
      button: "Join Our Mission",
    },
    {
      img: "/biclav1000.jpg",
      title: "A Healthcare network that covers India",
      desc: "From metros to remote frontiers ZOIC delivers reliability everywhere.",
      button: "Contact Us",
    },
    {
      img: "/sultab.jpg",
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#1BA3CD]/20 to-[#090A69]"></div>
              <div className="w-full h-40 absolute inset-0 bg-linear-to-b from-[#090A69]/80 via-[#090A69]/10 to-transparent" ></div>
              {/* <div className="absolute inset-0 bg-red-500 w-[50%] h-[50%]"></div> */}

              {/* Animated Text Content */}
              <div className="relative z-10 flex flex-col items-start justify-top pt-28 md:pt-0 md:justify-center h-full px-6  max-w-sm md:max-w-7xl mx-auto">
                <motion.h1
                  key={slide.title}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  className="regulator-nova-alts-straight tracking-wider text-3xl sm:text-4xl md:text-6xl lg:text-6xl mb-4 w-150"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  key={slide.desc}
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                  className="regulator-nova-alts max-w-lg text-gray-300 text-base sm:text-lg md:text-xl mb-8"
                >
                  {slide.desc}
                </motion.p>

                <motion.a
                  href="#products"
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  {slide.button}
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-teal-400 text-2xl sm:text-3xl"
        >
          <FaChevronDown />
        </motion.div>
        <span className="text-gray-300 text-xs sm:text-sm mt-1 tracking-wider ">
          Scroll Down
        </span>
      </div>
    </section>
  );
}

// return(
//     <>
    
//         <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination]}
//       spaceBetween={10}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//     </>
// );
// }
