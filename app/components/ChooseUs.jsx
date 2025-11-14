"use client";
import Image from "next/image";
import { ShieldCheck, Cog, Users, Package, Scale } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function ChooseUs() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });


  const items = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#048DB7]" />,
      title: "ISO 9001:2008 Certified",
      desc: "Zoic Life Sciences is an ISO certified Pharma company, committed to high quality products. We have also earned the right amount of trust, respect in the market.",
    },
    {
      icon: <Cog className="w-8 h-8 text-[#048DB7]" />,
      title: "Our Quality Approach",
      desc: "We are committed to follow the quality norms for manufacturing products. We formulate all our offered medicines as per the set quality norms.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#048DB7]" />,
      title: "Dedicated Workforce",
      desc: "Our team members are quite diverse to create a comprehensive, high-performance culture in our company, which will affect our business outcome.",
    },
    {
      icon: <Package className="w-8 h-8 text-[#048DB7]" />,
      title: "Packaging",
      desc: "We make use of proven techniques for packaging all medicines. Using advanced methods, we ensure leakage & breakage-proof delivery.",
    },
    {
      icon: <Scale className="w-8 h-8 text-[#048DB7]" />,
      title: "Ethics and Compliance",
      desc: "Our policies and procedures ensure our company and partners conduct business in a legal, ethical, and responsible manner.",
    },
  ];

  return (
    <section
      ref={container}
      className="relative w-screen flex items-center justify-center bg-gradient-to-b from-[#F0F9FF] to-[#DCF1FF] py-20"
    >
      <div className="flex flex-col md:w-[70%] w-[80%] h-full">
        <h2 className="md:text-6xl text-5xl text-[#090A69] mb-12 text-center">
          Why Choose Us?
        </h2>

        <div className="flex md:flex-row flex-col justify-between mt-5">
          {/* Left Content */}
          <div className="flex flex-col h-full gap-5 md:w-[55%] w-full">
            {items.map((item, index) => {
              const targetScale = 1 - (items.length - index) * 0.05;
              const range = [index * 0.2, 1];
              const scale = useTransform(scrollYProgress, range, [1, targetScale]);

              return (
                <motion.div
                  key={index}
                  style={{ scale, top: `${200 + index * 10}px` }}
                  className="flex border-t-2 sticky top-[20vh] items-center gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 px-5 py-10"
                >
                  <div className="absolute left-0 top-0 h-full w-3 bg-[#03045E] rounded-l-xl"></div>
                  <div className="flex items-center justify-center bg-[#E6F4FA] rounded-full w-14 h-14 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-3xl text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="w-[40%] md:flex hidden">
            <div
              className="w-[350px] h-[90vh] sticky top-[20vh] bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: "url('/Drugstore.jpg')",
                borderTopLeftRadius: "20%",
                borderBottomRightRadius: "20%",
                boxShadow: "8px -8px 20px rgba(3, 4, 94, 0.9)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
