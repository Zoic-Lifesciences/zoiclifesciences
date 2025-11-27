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
          className="relative w-[50%] mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        //   data-aos="fade-right"
          style={{ height: "520px" }}
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
            src="/v1.mp4"
            controls={isPlaying}
            loop
            playsInline
            className="w-full h-full object-contain"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] font-['Plus_Jakarta_Sans'] tracking-tight">
            Transforming Enterprises  
            <span className="text-blue-600"> Through Innovation</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We build intelligent, scalable systems for enterprise-grade digital
            transformation. Our teams combine strategy, design, and engineering
            to deliver world-class outcomes.
          </p>

          <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
            This video captures the essence of our mission: empowering businesses
            with next-generation digital solutions backed by global expertise.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-10 px-8 py-4 bg-gray-900 text-white rounded-xl shadow-lg text-sm tracking-wide font-semibold hover:bg-gray-800 transition-all"
          >
            Explore Our Capabilities
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
