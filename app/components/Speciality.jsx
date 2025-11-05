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
    <div className="flex flex-col items-center mt-10 mb-12">
      {/* Heading slides in from left */}
      <h1
        className="text-5xl text-center my-10"
        data-aos="fade-right"
      >
        Experiences build specialities - 25 Years of Experience
      </h1>

      {/* Paragraph slides in from right */}
      <p
        className="w-[80vw] mb-10 text-center"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        At ZOIC Life Sciences, we are committed to empowering pharma professionals, distributors, and
        entrepreneurs with profitable franchise opportunities backed by trust, quality, and innovation.
        With years of industry experience, we deliver everything you need to succeed in the PCD Pharma business.
      </p>

      {/* Image flips in */}
      <div
        className="flex justify-center"
        data-aos="flip-left"
        data-aos-delay="300"
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
  );
}
