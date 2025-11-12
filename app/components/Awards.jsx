"use client";
import { useEffect } from "react";
import { ArrowRight } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Awards() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col text-white items-center bg-linear-to-r pb-10 from-[#1BA3CD] to-[#090A69] h-[100vh] w-screen">
      <div className="w-[80%] h-full flex flex-col items-center">
        <h1
          className="text-6xl text-center mt-10 mb-5 "
        >
          Awards and Achievements
        </h1>

        {/* <p
          className="w-[25vw] mb-5 text-center"
        >
          Your Trusted Partner in PCD Pharma Franchise
          <br />
          Pan India Presence | Monopoly Rights | DCGI-Approved Range
        </p> */}

        <a className="flex items-center gap-2 cursor-pointer" >
          Explore More <ArrowRight size={24} color="currentColor" />
        </a>

        <div className="w-full h-[90%] flex justify-between mt-10">
          <div className="w-[65%] h-full flex flex-col justify-between">
            <div className="w-full h-[30%] flex justify-between">
              <div
                className="w-[48%] h-full bg-black rounded-lg bg-cover bg-center"
                style={{ backgroundImage: "url('/image1.png')" }}
               
              ></div>
              <div
                className="w-[48%] h-full bg-black rounded-lg bg-cover bg-center"
                style={{ backgroundImage: "url('/image2.png')" }}

              ></div>
            </div>
            <div
              className="w-full h-[65%] bg-black rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/image4.png')" }}
 
            ></div>
          </div>

          <div className="w-[30%] h-full flex flex-col justify-between">
            <div
              className="w-full h-[65%] bg-black rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/image3.png')" }}

            ></div>
            <div
              className="w-full h-[30%] bg-black rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/image5.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
