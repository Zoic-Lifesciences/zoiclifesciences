"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-screen h-screen flex flex-row">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center items-center w-[60%] h-screen bg-linear-to-b from-[#04A0D1] to-[#03045E]">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            India&apos;s Leading <br />
            <span className="text-[#32A0C3] font-semibold">PCD Pharma</span>{" "}
            Franchise Company
          </h1>

          <p className="text-sm md:text-base text-gray-200 max-w-md">
            Zoic Life Sciences is a trusted ISO 9001:2008, WHO, GMP, and
            FDI-certified pharma company based in Dehradun. We deliver
            high-quality, affordable medicines across major therapeutic segments
            and offer India’s most reliable and profitable PCD Pharma Franchise
            opportunities.
            <br />
            Explore a partnership that promotes better health and brighter
            business growth.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#14A5C9] text-white font-medium rounded-full shadow-md hover:bg-[#048DB7] transition">
            Apply for Franchise
          </button>
        </div>
      </div>

      {/* Right Product Cards Section */}
      <div className="flex flex-col w-[40%] h-screen ">
        <div className="flex flex-col items-start">
            <div className=" h-[80vh] w-[40vw] mt-10 ml-[-120px] flex justify-center items-center">
                <div className="w-[340px] h-[460px] bg-black rounded-4xl bg-[url('/product.png')] bg-cover bg-center absolute z-5"></div>
                {/* Right tilted card */}
    <motion.div
      initial={{ rotate: 0, marginLeft: "150px", marginTop: "0px" }}
      whileInView={{ rotate: 12, marginLeft: "300px", marginTop: "-20px" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="w-[340px] h-[460px] ml-[300px] origin-bottom-left bg-[url('/product.png')] bg-cover bg-center rounded-4xl absolute"
    ></motion.div>

    {/* Left tilted card */}
    <motion.div
      initial={{ rotate: 0, marginRight: "150px", marginTop: "0px" }}
      whileInView={{ rotate: -12, marginRight: "300px", marginTop: "-20px" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="w-[340px] h-[460px] mr-[300px] origin-bottom-right bg-[url('/product.png')] bg-cover bg-center rounded-4xl absolute"
    ></motion.div>
            
            </div>
   
        </div>
        <div className="w-full overflow-hidden">
  <div className="whitespace-nowrap animate-marquee">
    <h1 className="inline-block text-8xl text-gray-400 font-extrabold px-10">
      ZOIC LIFESCIENCES
    </h1>
    <h1 className="inline-block text-8xl text-gray-400 font-extrabold px-10">
      ZOIC LIFESCIENCES
    </h1>
  </div>
</div>
        
  
</div>

      </section>
  );
}
