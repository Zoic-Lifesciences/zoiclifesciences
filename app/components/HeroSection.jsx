"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Abhaya_Libre, Inter } from "next/font/google";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const abhaya = Abhaya_Libre({
  weight: "500",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-row overflow-x-hidden">
      {/* Left Text Section */}
      <div className="flex flex-col items-start justify-between w-[60%] h-screen bg-[url('/Rectangle1.png')] bg-cover bg-center">
      <div className="w-[2px] h-[2px]"></div>
        <div className="text-white w-[80%] ml-10 mt-10">
          <h1
            className={`${montserrat.className} text-6xl leading-none mb-4`}
          >
            Pioneering <br /> Excellence In Pharma
          </h1>

          <p className={` text-sm mt-10 text-gray-200 max-w-md tracking-wide`}>
            Zoic Life Sciences is a trusted ISO 9001:2008, WHO, GMP, and
            FDI-certified pharma company based in Dehradun. 
            <br />
            Explore a partnership that promotes better health and brighter
            business growth.
          </p>

          <button className="mt-10 px-6 py-3 bg-[#14A5C9] text-white font-medium rounded-full shadow-md hover:bg-[#048DB7] transition">
            Apply for Franchise
          </button>
        </div>

        <div className="text-white text-xl gap-8 flex flex-row ml-10 w-full mb-5">
          <a href="tel:+1234567890" className="flex items-center">
            <Phone className="w-6 h-6 mr-2" /> Phone
          </a>

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <MessageCircle className="w-6 h-6 mr-2" /> Whatsapp
          </a>

          <a href="/enquire" className="flex items-center">
            <Mail className="w-6 h-6 mr-2" /> Enquire
          </a>
        </div>
      </div>

      {/* Right Product Cards Section */}
      <div className="flex flex-col w-[40%] h-screen ">
        <div className="flex flex-col items-start">
          <div className="h-[80vh] w-[40vw] mt-10 ml-[-120px] flex justify-center items-center relative">
            <div className="w-[22vw] h-[55vh] bg-black rounded-4xl bg-[url('/moisturizer.png')] bg-cover bg-center absolute z-5"></div>

            {/* Right tilted card */}
            <motion.div
              initial={{ rotate: 0, marginLeft: "0px", marginTop: "0px" }}
              whileInView={{ rotate: 12, marginLeft: "300px", marginTop: "-20px" }}
              transition={{ duration: 2, ease: "easeInOut" , delay: 2.2 }}
              viewport={{ once: true }}
              className="w-[22vw] h-[55vh] ml-[300px] origin-bottom-left bg-[url('/Aloevera.jpeg')] bg-cover bg-center rounded-4xl absolute"
            ></motion.div>

            {/* Left tilted card */}
            <motion.div
              initial={{ rotate: 0, marginRight: "0px", marginTop: "0px" }}
              whileInView={{ rotate: -12, marginRight: "300px", marginTop: "-20px" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 2.2  }}
              viewport={{ once: true }}
              className="w-[22vw] h-[55vh] mr-[300px] origin-bottom-right bg-[url('/haldi.jpeg')] bg-cover bg-center rounded-4xl absolute"
            ></motion.div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="w-[200%] -z-10 ml-[-60%] overflow-hidden pl-10">
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
