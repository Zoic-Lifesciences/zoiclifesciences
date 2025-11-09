"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Speciality() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col w-screen items-center my-10 py-10">
      <div className="w-[80%] flex">
        {/* Heading slides in from left */}
        <div className="flex flex-col w-[30%]">
          <h1
        className="text-6xl text-start my-10 text-[#090A69]"
      >
        Experiences build specialities - 25 Years of Experience
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
        className="flex justify-center w-[70%]"
        data-aos="fade-right"
      >
        <Image
          src="/Speciality.png"
          alt="Speciality"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
      </div>
      
    </div>
  );
}
