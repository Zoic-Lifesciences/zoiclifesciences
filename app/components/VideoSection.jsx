"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CompanyVideoPremium() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

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

    video.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  return (
    <section className="w-full bg-white py-28 px-6 lg:px-20 font-['Inter']">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* LEFT — VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-[100%] mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        //   data-aos="fade-right"
          style={{ height: "550px" }}
        >
          {/* CYAN PLAY BUTTON */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 m-auto w-[90px] h-[90px] bg-cyan-500 text-white 
                         rounded-full shadow-xl flex items-center justify-center 
                         hover:bg-cyan-400 transition-all z-20"
            >
              {/* Play Icon */}
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
            src="/v2.mp4"
            controls={isPlaying}
            loop
            playsInline
            className="w-full h-full object-cover object-[40%_40%]"
            onPlay={() => setIsPlaying(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* RIGHT — TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        //   data-aos="fade-left"
          className="flex flex-col justify-center"
        >
          <h2 className="regulator-nova-alts-straight text-4xl lg:text-5xl leading-[1.2] font-['Plus_Jakarta_Sans'] tracking-normal">
            A Legacy That Reaches <br/>
            <span className="text-[#048DB7]">  Every Corner of India </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            For over 25 years, ZOIC Lifesciences has built a nationwide network that spans top hospitals, institutions, and healthcare providers. Trusted by giants like AIIMS and the Indian Army, our commitment to quality and excellence has made us a leader in Indian healthcare.
          </p>

          <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
            Today, we celebrate this journey, connecting millions through care, trust, and innovation—just as Arjun Kapoor joins us in honoring our legacy.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="regulator-nova-alts-straight w-[32%] inline-block mt-10 px-2 py-4 bg-[#048DB7] text-white rounded-xl shadow-lg text-sm tracking-wide font-semibold hover:bg-blue-800 transition-all"
          >
            Explore Our Capabilities
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
