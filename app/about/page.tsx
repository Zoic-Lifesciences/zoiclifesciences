"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const fadeDown = {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const milestones = [
    { year: "2000", text: "ZOIC founded with a focus on ethical pharma solutions." },
    { year: "2002", text: "First international partnership established." },
    { year: "2005", text: "Expanded manufacturing capabilities." },
    { year: "2010", text: "Entered 15+ countries with R&D centers." },
    { year: "2012", text: "Received multiple pharma quality certifications." },
    { year: "2015", text: "Launched biotechnology division." },
    { year: "2017", text: "Introduced sustainable pharma initiatives." },
    { year: "2020", text: "Adopted AI & digital therapeutics in operations." },
    { year: "2022", text: "Global expansion into 40+ countries." },
    { year: "2025", text: "Future-focused initiatives for precision medicine." },
  ];

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      
      {/* ===== HERO ===== */}
      <section className="relative h-[100vh] flex items-center justify-center text-white">
        <Image src="/logo.png" alt="ZOIC Logo" fill className="object-contain"/>
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div {...fadeUp} className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-7xl">
            25 Years of Global Healthcare Innovation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
            For over two decades, ZOIC has transformed lives through science — driven by ethics, powered by innovation, and committed to global wellness.
          </p>
        </motion.div>
      </section>

      {/* ===== MD SECTION (VISIONARY) ===== */}
      <section className="relative py-28 px-10 md:px-32 bg-[#f4f7fb] flex flex-col lg:flex-row items-center gap-16">
        <motion.div {...fadeLeft} className="lg:w-1/2">
          <h2 className="text-6xl md:text-7xl font-bold text-blue-800 mb-4">Mr. Sanjay Gupta</h2>
          <p className="text-gray-600 text-lg mb-6">Managing Director & Founder</p>
          <p className="text-3xl md:text-2xl italic text-gray-700 border-l-4 border-blue-800 pl-6 mb-10">
            “Most of us rely on both medicines and blessings for recovery. At Zoic, our medicine works independently where even blessings do not.”
          </p>
        </motion.div>
        <motion.div {...fadeRight} className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/md.png" alt="MD ZOIC" fill className="object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </motion.div>
      </section>

      {/* ===== COO SECTION ===== */}
      <section className="py-28 px-10 md:px-32 bg-white flex flex-col lg:flex-row items-center gap-16">
        <motion.div {...fadeLeft} className="lg:w-1/2">
          <h2 className="text-5xl font-semibold text-blue-800 mb-2">Mr. Rohit Mamgain</h2>
          <p className="text-gray-600 text-sm mb-6 ml-48"> - (Corporate Strategist, IIM Banglore)</p>
          <p className="text-gray-600 text-sm mb-6"><b>Chief Operating Officer (COO)</b></p>
          <p className="text-xl italic text-gray-700 border-l-4 border-blue-800 pl-6 mb-10">
            “Innovation, discipline, and precision are the pillars of ZOIC’s future.”
          </p>
          <div className="w-full h-64 lg:h-96 rounded-xl shadow-lg overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay loop muted src="/coo.mp4" />
          </div>
        </motion.div>
        <motion.div {...fadeRight} className="lg:w-1/2">
          <Image src="/team/rohit2.jpg" alt="COO Rohit Mamgain" width={700} height={500} className="rounded-3xl shadow-2xl object-cover"/>
        </motion.div>
      </section>

      {/* ===== LEGACY TIMELINE ===== */}
      <section className="py-28 px-10 md:px-32 bg-[#f8fbff] relative">
        <h2 className="text-5xl font-[cursive] font-semibold text-center text-blue-800 mb-20">Our Legacy</h2>
        <div className="relative flex flex-col items-start">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-800/30"></div>

          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-center w-full mb-20 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="w-10 h-10 rounded-full bg-blue-800 shadow-lg border-4 border-white z-10"></div>
              </div>
              <div className={`md:w-1/2 bg-white rounded-xl shadow-lg p-8 text-center md:text-left ${i % 2 === 0 ? 'md:ml-10' : 'md:mr-10'}`}>
                <h3 className="text-3xl font-bold text-blue-800">{milestone.year}</h3>
                <p className="mt-2 text-gray-700 text-lg">{milestone.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-28 px-10 md:px-32 bg-white">
        <motion.h2 {...fadeUp} className="text-5xl font-[cursive] font-semibold text-center text-blue-800 mb-16">Meet Our Team</motion.h2>
        <div className="grid md:grid-cols-3 gap-20">
          {["Arindam Gupta", "Rohit Mamgain", "Sophia Kim"].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-52 h-52 rounded-full mx-auto bg-gray-200 overflow-hidden shadow-xl">
                <Image src="/team-placeholder.png" alt={name} width={300} height={300} className="object-cover"/>
              </div>
              <h4 className="text-2xl font-semibold text-blue-800 mt-6">{name}</h4>
              <p className="text-gray-500 text-sm mt-2">
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

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
