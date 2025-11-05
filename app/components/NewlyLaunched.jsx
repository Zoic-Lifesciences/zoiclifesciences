"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewlyLaunched() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-in-out",
      once: true, // animation happens only once
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Hello Foot Care Cream",
      price: "INR. 249/-",
      desc: "Overnight Moisturising, Softens & Heals Dry Feet",
      image: "/footcream.jpeg",
    },
    {
      id: 2,
      name: "Hello Sunscreen",
      price: "INR. 349/-",
      desc: "Broad Spectrum, Protects from UV, Blue Light",
      image: "/suncreen.jpeg",
    },
    {
      id: 3,
      name: "Hello Gulabjal",
      price: "INR. 149/-",
      desc: "Natural & Premium Rose Water for Skin",
      image: "/gulabjal.jpeg",
    },
    {
      id: 4,
      name: "Charcoal Facewash",
      price: "INR. 199/-",
      desc: "Removes Dirt, Deep Cleans & Refreshes",
      image: "/haldi.jpeg",
    },
    {
      id: 5,
      name: "Hello Gulabjal",
      price: "INR. 149/-",
      desc: "Natural & Premium Rose Water for Skin",
      image: "/gulabjal.jpeg",
    },
    {
      id: 6,
      name: "Charcoal Facewash",
      price: "INR. 199/-",
      desc: "Removes Dirt, Deep Cleans & Refreshes",
      image: "/aloevera.jpeg",
    },
  ];

  return (
    <section className="px-8 py-12">
      <h2 className="text-4xl font-bold text-center mb-2" data-aos="fade-up">Newly Launched</h2>
      <p className="text-center text-gray-500 mb-8" data-aos="fade-up" data-aos-delay="100">
        At <span className="text-[#048DB7] font-semibold">ZOIC</span> it’s all about continuous innovations.
      </p>

      <div className="flex overflow-x-auto space-x-10 ml-10 scrollbar-thin">
        {products.map((p, index) => (
          <div
            key={p.id + index} // prevent duplicate keys
            className="h-[60vh] w-[25vw] shrink-0 bg-white shadow-xl border border-gray-200 rounded-t-[50%]"
            data-aos="fade-up"
            data-aos-delay={index * 100} // staggered animation
          >
            <div
              className="h-[70%] w-full bg-cover bg-center overflow-hidden rounded-t-[50%]"
              style={{ backgroundImage: `url(${p.image})` }}
            ></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#048DB7]">{p.name}</h3>
              <p className="text-sm font-bold text-gray-700">{p.price}</p>
              <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
