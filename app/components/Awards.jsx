"use client";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Awards() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <div className="flex flex-col text-white items-center bg-gradient-to-b from-[#1BA3CD] to-[#090A69] min-h-[320vh] w-screen py-20">

      {/* Title */}
      <div data-aos="fade-down" className="text-center mb-10">
        <h1 className="md:text-7xl text-5xl font-bold drop-shadow-xl">
          Awards & Achievements
        </h1>

        <a className="flex items-center gap-2 cursor-pointer justify-center mt-3 text-lg hover:opacity-80 transition">
          Explore More <ArrowRight size={24} />
        </a>
      </div>

      <div className="w-[90%] flex flex-col gap-16">

        {/* --- ROW 1 --- */}
        <div className="flex md:flex-row flex-col gap-10">
          <div
            data-aos="fade-up"
            className="md:w-2/3 w-full h-[75vh] rounded-3xl shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/awards/9.jpg')" }}
          ></div>

          <div className="flex flex-col md:w-1/3 w-full gap-10">
            <div
              data-aos="fade-left"
              className="w-full h-[35vh] rounded-3xl shadow-xl bg-cover bg-center"
              style={{ backgroundImage: "url('/awards/7.jpg')" }}
            ></div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="w-full h-[35vh] rounded-3xl shadow-xl bg-cover bg-center"
              style={{ backgroundImage: "url('/awards/8.jpg')" }}
            ></div>
          </div>
        </div>

        {/* --- ROW 2 --- */}
        <div className="flex md:flex-row flex-col gap-10">
          <div
            data-aos="fade-right"
            className="md:w-1/3 w-full h-[60vh] rounded-3xl shadow-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/awards/10.jpg')" }}
          ></div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="md:w-2/3 w-full h-[80vh] rounded-3xl shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/awards/11.jpg')" }}
          ></div>
        </div>

        {/* --- ROW 3 (New + Large Immersive Row) --- */}
        <div className="flex md:flex-row flex-col gap-10">
          <div
            data-aos="zoom-in-up"
            className="md:w-2/3 w-full h-[85vh] rounded-3xl shadow-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/awards/12.jpg')" }}
          ></div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:w-1/3 w-full h-[55vh] rounded-3xl shadow-xl bg-cover bg-center"
            style={{ backgroundImage: "url('/awards/13.jpg')" }}
          ></div>
        </div>

      </div>
    </div>
  );
}
