"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Speciality() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col w-screen items-center my-10 py-10 max-w-7xl mx-auto">
      <div className="w-[100%] flex md:flex-col flex-col items-center justify-around px-6 md:px-20 gap-10">
        {/* Heading slides in from left */}
        <div className="flex flex-col w-full">
          <h1
            className="regulator-nova-alts-straight tracking-wider md:text-6xl text-5xl text-center my-10 text-[#090A69]"
          >
            25 Years of Excellency
          </h1>

        {/* Paragraph slides in from right */}
        <p
          className="mb-10 text-start"
        >
          At ZOIC Life Sciences, we are committed to empowering pharma professionals, distributors, and
          entrepreneurs with profitable franchise opportunities backed by trust, quality, and innovation.
          With years of industry experience, we deliver everything you need to succeed in the PCD Pharma business.
        </p>
          </div>
        

        {/* Image flips in */}
        <div
          className="flex justify-center w-[100%] md:max-w-7xl"
          data-aos="fade-right"
        >
          <Image
            src="/onezoic.png"
            alt="Speciality"
            width={800}
            height={800}
            className="object-contain w-[90%] mx-auto"
          />
        </div>
      </div>
      
    </div>
  );
}
