"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const certifications = [
    {
      src: "/iso.png",
      title: "ISO Certified",
      desc: "Compliant with rigorous quality management standards, guaranteeing consistent excellence in all our products and processes.",
    },
    {
      src: "/who.png",
      title: "WHO-GMP Certified",
      desc: "Ensuring products meet the highest global standards for Good Manufacturing Practices, safeguarding patient health.",
    },
    {
      src: "/cdsco.png",
      title: "CDSCO Approved",
      desc: "Certified by the Central Drugs Standard Control Organization, ensuring our commitment to pharmaceutical quality and safety in India.",
    },
    {
      src: "/gmp.png",
      title: "GMP Compliant",
      desc: "Adhering to strict Good Manufacturing Practices to maintain product safety, efficacy, and reliability.",
    },
  ];

  return (
    <section className="bg-[#EFFBFF] py-16 px-6 flex flex-col items-center text-center">
      <div className="w-[90vw] text-center flex justify-center flex-col items-center h-[70vh]">
        <h2 className="text-6xl text-[#090A69] mb-4" data-aos="fade-up">
          Certifications That Define Excellence
        </h2>
        <p className="text-gray-600 max-w-3xl text-center" data-aos="fade-up" data-aos-delay="100">
          At <span className="text-[#04A0D1] font-semibold">ZOIC</span> we adhere to the highest
          standards with WHO-GMP, ISO, GMP, and CDSCO certifications ensuring every product meets
          the strongest quality requirements.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 w-full max-w-7xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150} // staggered animation
            >
              <Image
                src={cert.src}
                alt={cert.title}
                width={250}
                height={250}
                className="mb-4"
              />
              <h3 className="font-semibold text-lg text-black mb-2">{cert.title}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
