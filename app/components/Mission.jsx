"use client";
import { Target, Eye, Gem, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MissionSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-screen mt-10 py-12 flex items-center justify-center bg-linear-to-br">
      <div className="flex md:flex-row flex-col-reverse justify-between md:items-start items-center md:w-[80%] w-[95%]">
        {/* Left Section - Cards */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:w-[70%] w-[80%] md:mt-0 mt-10">
          {/* Mission */}
          <div
            className="group bg-[#04A0D1] text-white p-6 rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
            data-aos="fade-up"
          >
            <Target className="w-10 h-10 mb-3 group-hover:text-white transition-colors duration-300" />
            <h2 className="text-4xl mb-2 ">Our Mission</h2>
            <p className="text-md mt-5">
              We at Zoic Life Sciences believe that complete customer
              satisfaction is the key to expanding business everywhere.
            </p>
          </div>

          {/* Vision */}
          <div
            className="group bg-white text-gray-800 p-6 rounded-2xl shadow-xl transform hover:bg-[#04A0D1] hover:text-white transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Eye className="w-10 h-10 mb-3 text-[#090A69] group-hover:text-white transition-colors duration-300" />
            <h2 className="text-4xl mb-2 group-hover:text-white text-[#090A69]">Our Vision</h2>
            <p className="text-md mt-5">
              To uphold our social responsibilities by delivering the highest
              standard of healthcare services.
            </p>
          </div>

          {/* Value */}
          <div
            className="group bg-white text-gray-800 p-6 rounded-2xl shadow-xl transform hover:bg-[#04A0D1] hover:text-white transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Gem className="w-10 h-10 mb-3 text-[#090A69] group-hover:text-white transition-colors duration-300" />
            <h2 className="text-4xl mb-2 group-hover:text-white text-[#090A69]">Our Value</h2>
            <p className="text-md mt-5">
              Our business values with clients are as simple as lifelong
              “business relations”.
            </p>
          </div>

          {/* Quality Control */}
          <div
            className="group bg-white text-gray-800 p-6 rounded-2xl shadow-xl transform hover:bg-[#04A0D1] hover:text-white transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ShieldCheck className="w-10 h-10 mb-3 text-[#090A69] group-hover:text-white transition-colors duration-300" />
            <h2 className="text-4xl mb-2 group-hover:text-white text-[#090A69]">Quality Control</h2>
            <p className="text-md mt-5">
              Our medicines are developed under the strict guidance of renowned
              healthcare professionals.
            </p>
          </div>
        </div>

        {/* Right Section - Heading */}
        <div
          className="bg-[url('/Rectangle3.png')] bg-cover bg-center h-[90vh] w-[30vw] right-0 absolute md:flex hidden"
          data-aos="fade-left"
        ></div>

        <div className="md:w-[45%] w-[80%] md:pl-12 relative" data-aos="fade-right">
          <h1 className="md:text-6xl text-5xl text-[#090A69] mb-4 leading-tight">
            Our Mission, Vision, <br /> and Values
          </h1>
          <p className="text-gray-600">
            We strive to deliver excellence in every aspect of healthcare,
            combining integrity, innovation, and compassion.
          </p>
        </div>
      </div>
    </section>
  );
}
