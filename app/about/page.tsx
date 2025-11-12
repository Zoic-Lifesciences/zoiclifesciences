"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Image from "next/image";


export default function AboutPage() {

    const handleScrollToLegacy = () => {
        const section = document.getElementById("legacy-section");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };


  return (
    <main className="bg-gradient-to-b from-[#f9fbfd] to-white text-gray-800 overflow-hidden">

      {/* ===== Hero Section ===== */}
       <section
        className="relative flex flex-col items-center justify-center h-[95vh] text-center text-white 
        bg-fit bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/logo.png')",
        }}
        >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#022542]/70"></div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>

        {/* ===== Hero Text ===== */}
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-5xl md:text-6xl font-bold tracking-tight"
        >
            25 Years of Global Healthcare Innovation
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10 mt-6 max-w-2xl text-lg text-blue-100"
        >
            For over two decades, ZOIC has transformed lives through science — driven by ethics,
            powered by innovation, and committed to global wellness.
        </motion.p>

        {/* ===== Scroll Down Animation ===== */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="relative z-10 mt-10 flex flex-col items-center"
        >
            {/* Scroll text or arrow */}
            <div
            // animate={{ opacity: [1, 0.4, 1] }}
            // transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            onClick={handleScrollToLegacy}
            className="cursor-pointer text-sm tracking-wide text-blue-100 rounded-full bg-[#048DB7] p-2"
            >
            Explore Our Journey
            </div>
            {/* Mouse Icon */}
            <div
            onClick={handleScrollToLegacy} 
            className="mt-4 w-6 h-10 cursor-pointer border-2 border-white rounded-full flex justify-center items-start p-1">
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
            </div>
            <motion.span
                initial={{opacity:1}}
                animate={{ opacity:0 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 text-white"
            >&#11247;</motion.span>
        </motion.div>
        </section>



      {/* ===== Legacy Section ===== */}
      <section id='legacy-section' className="py-28 px-10 md:px-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zoicTeal to-zoicBlue"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold font-[cursive] mb-6 text-center  text-[#048DB7]"
        >
          Our Legacy
        </motion.h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 mb-14">
          Established in 2000, ZOIC has grown from a single facility to a global pharmaceutical network. We’ve expanded across continents, introducing world-class healthcare solutions that meet international quality standards.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { year: "2000", text: "ZOIC founded with a focus on ethical pharma solutions." },
            { year: "2010", text: "Expanded to 15+ countries with advanced R&D centers." },
            { year: "2020", text: "Launched global biotech and sustainability initiatives." },
          ].map((milestone, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#048DB7] border border-gray-100 rounded-xl shadow-sm p-8 text-center text-white"
            >
              <h3 className="text-white font-bold text-xl mb-2">{milestone.year}</h3>
              <p className="text-white text-sm">{milestone.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Leadership Section ===== */}
      <section className="py-28 px-10 md:px-32 bg-gray-100 shadow-inner">
        <h2 className="text-4xl md:text5xl font-[cursive] font-semibold  text-[#048DB7] text-center mb-12">Our Leadership</h2>

        {/* MD */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          <div className="w-[150%] h-72 bg-gray-200 rounded-xl">
            <Image src={"/md.png"} alt="MD ZOIC" width={500} height={150} 
            className="w-full h-full rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#1BA3CD]">Mr. Sanjay Gupta</h3>
            <p className="text-gray-600 mb-4 text-sm">Managing Director & Founder</p>
            <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-3xl text-[#048DB7]">&#8220;</span> 
                Our vision is a world where quality medicines are accessible to everyone. We combine scientific rigor with compassion to create a healthier, sustainable future.
                {/* <span className="font-bold text-3xl text-[#048DB7]">&#8221;</span>  */}
                
            </p>
          </div>
        </motion.div>

        {/* Team */}
        <div className="grid md:grid-cols-3 gap-12">
          {["Arindam Gupta", "Rohit Mamgain", "Sophia Kim"].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
              <h4 className="text-lg font-semibold text-zoicBlue">{name}</h4>
              <p className="text-gray-500 text-sm">
                {i === 0
                  ? "Chief Executing Officer (CEO)"
                  : i === 1
                  ? "Chief Operating Officer (COO)"
                  : "VP – International Markets"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Philosophy Section ===== */}
        <section className="py-28 bg-[#f6f9fc] px-10 md:px-32">
        <div className="max-w-6xl mx-auto flex flex-row gap-10 items-center">
            
            {/* ===== Left Side: Heading & Tagline ===== */}
            <div className="md:col-span-1 text-left flex flex-col items-start">
                <div className="flex items-center mb-4">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse mr-3"></div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#048DB7] font-[cursive]">
                    Our Philosophy
                    </h2>
                </div>
                <p className="text-gray-600 italic text-base md:text-lg leading-relaxed">
                    “Where innovation meets compassion — shaping the future of care.”
                </p>
            </div>

            {/* ===== Right Side: Philosophy Cards ===== */}
            <div className="md:col-span-3 grid md:grid-cols-2 gap-8">
            {[
                { title: "Innovation", desc: "Relentless research to redefine healthcare possibilities." },
                { title: "Integrity", desc: "Ethics and transparency guide every discovery." },
                { title: "Impact", desc: "Empowering lives through accessible, advanced therapies." },
            ].map((item, i) => (
                <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-10 rounded-xl bg-white shadow-lg backdrop-blur-sm border border-gray-100 text-center"
                >
                <div className="h-16 w-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-zoicTeal to-zoicBlue opacity-80"></div>
                <h3 className="text-xl font-bold text-zoicTeal mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
            ))}
            </div>
        </div>
        </section>


      

      {/* ===== Global Presence Section ===== */}
      <section className="py-28 bg-[#f6f9fc] text-center relative px-10 md:px-32">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#048DB7] mb-10 font-[cursive]">Global Presence</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Our network spans across 40+ countries with state-of-the-art research, manufacturing, and distribution facilities serving millions worldwide.
        </p>
        <div className="relative w-full max-w-5x  bg-fit bg-center bg-no-repeat  mx-auto h-[400px] bg-gray-100 rounded-xl shadow-inner "
        style={{
            backgroundImage: "url('/global-cover.png')",
        }}
        >
          <div className="absolute w-5 h-5 rounded-full bg-black top-1/3 left-1/3 animate-ping"></div>
          <div className="absolute w-5 h-5 rounded-full bg-black top-1/4 left-2/3 animate-ping"></div>
          <div className="absolute w-5 h-5 rounded-full bg-black bottom-1/3 left-1/2 animate-ping"></div>
        </div>
      </section>

      {/* ===== Future Section ===== */}
      <section className="py-28 px-10 md:px-32 bg-white relative flex flex-row gap-1 items-center">
        {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#048DB7] to-black"></div> */}
        <div>
            <h2 className="text-4xl font-semibold text-[#048DB7] mb-6 md:text-5xl font-[cursive]">The Future of Pharma with ZOIC</h2>
            <p className="max-w-2xl mx-auto text-gray-700 mb-12 leading-relaxed">
            <b>ZOIC</b> is harnessing AI, biotechnology, and digital therapeutics to redefine patient care. Our future is built on sustainability, precision, and innovation — ensuring a healthier tomorrow.
            </p>
        </div>
        <div className="w-full rounded-2xl ">
            <Image src={"/aicover.png"} alt="AI COVER IMG" height={315} width={500} 
            className="mx-auto"
            />
        </div>
      </section>

      {/* ===== Footer ===== */}
      <Footer />
    </main>
  );
}
