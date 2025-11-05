"use client";
import Image from "next/image";
import { ShieldCheck, Cog, Users, Package, Scale } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out", once: false });
  }, []);
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
    <section className="relative w-screen h-screen flex items-center justify-center bg-linear-to-b from-[#F0F9FF] to-[#DCF1FF] py-20">
      <div className="flex flex-col w-[70%] h-[90vh]">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Us?
        </h2>
        <div className="flex flex-row h-full items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-5 w-[55%]">
            {items.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"          // slide in from left
          data-aos-delay={index * 100}   // stagger effect
                className="flex items-center gap-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 h-full w-3 bg-[#03045E] rounded-l-xl"></div>
                <div className="flex items-center justify-center bg-[#E6F4FA] rounded-full w-14 h-14 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-[40%] h-full flex justify-center items-center">
            <div
              className="w-[350px] h-[90%] bg-cover bg-center overflow-hidden"
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
