"use client";

import { motion } from "framer-motion";
import Header from "../components/NavBar";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-[#f9fbfd] to-white text-gray-800 overflow-hidden">
      {/* ===== Navbar ===== */}
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative flex flex-col items-center justify-center h-[95vh] text-center text-white bg-gradient-to-br from-[#022542] via-[#04385e] to-[#075173]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          25 Years of Global Healthcare Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 max-w-2xl text-lg text-blue-100"
        >
          For over two decades, ZOIC has transformed lives through science — driven by ethics, powered by innovation, and committed to global wellness.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="mt-10 bg-zoicTeal px-8 py-3 rounded-full text-white text-sm tracking-wide shadow-lg hover:bg-[#029f8c]"
        >
          Explore Our Journey
        </motion.button>
      </section>

      {/* ===== Legacy Section ===== */}
      <section className="py-28 px-10 md:px-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zoicTeal to-zoicBlue"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-zoicBlue mb-6 text-center"
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
              className="bg-gradient-to-br from-white to-[#f2f7f9] border border-gray-100 rounded-xl shadow-sm p-8 text-center"
            >
              <h3 className="text-zoicTeal font-bold text-xl mb-2">{milestone.year}</h3>
              <p className="text-gray-600 text-sm">{milestone.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Leadership Section ===== */}
      <section className="py-28 px-10 md:px-32 bg-white">
        <h2 className="text-3xl font-semibold text-zoicBlue text-center mb-12">Leadership</h2>

        {/* MD */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          <div className="w-56 h-56 bg-gray-200 rounded-xl"></div>
          <div>
            <h3 className="text-2xl font-bold text-zoicTeal">Mr. Sanjay Gupta</h3>
            <p className="text-gray-600 mb-4 text-sm">Managing Director & Founder</p>
            <p className="text-gray-700 leading-relaxed">
              “Our vision is a world where quality medicines are accessible to everyone. We combine scientific rigor with compassion to create a healthier, sustainable future.”
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
      <section className="py-28 bg-[#f6f9fc] text-center px-10 md:px-32">
        <h2 className="text-3xl font-semibold text-zoicBlue mb-10">Our Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Innovation", desc: "Relentless research to redefine healthcare possibilities." },
            { title: "Integrity", desc: "Ethics and transparency guide every discovery." },
            { title: "Impact", desc: "Empowering lives through accessible, advanced therapies." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-10 rounded-xl bg-white shadow-lg backdrop-blur-sm border border-gray-100"
            >
              <div className="h-16 w-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-zoicTeal to-zoicBlue opacity-80"></div>
              <h3 className="text-xl font-bold text-zoicTeal mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      

      {/* ===== Global Presence Section ===== */}
      <section className="py-28 bg-[#f6f9fc] text-center relative px-10 md:px-32">
        <h2 className="text-3xl font-semibold text-zoicBlue mb-10">Global Presence</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Our network spans across 40+ countries with state-of-the-art research, manufacturing, and distribution facilities serving millions worldwide.
        </p>
        <div className="relative w-full max-w-5xl mx-auto h-[400px] bg-gray-100 rounded-xl shadow-inner">
          <div className="absolute w-5 h-5 rounded-full bg-zoicTeal top-1/3 left-1/4 animate-ping"></div>
          <div className="absolute w-5 h-5 rounded-full bg-zoicTeal top-1/4 left-2/3 animate-ping"></div>
          <div className="absolute w-5 h-5 rounded-full bg-zoicTeal bottom-1/3 left-1/3 animate-ping"></div>
        </div>
      </section>

      {/* ===== Future Section ===== */}
      <section className="py-28 px-10 md:px-32 bg-white text-center relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zoicBlue to-zoicTeal"></div>
        <h2 className="text-3xl font-semibold text-zoicBlue mb-6">The Future of Pharma, Today</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12 leading-relaxed">
          ZOIC is harnessing AI, biotechnology, and digital therapeutics to redefine patient care. Our future is built on sustainability, precision, and innovation — ensuring a healthier tomorrow.
        </p>
        <div className="w-full h-64 bg-gradient-to-r from-zoicTeal/20 to-zoicBlue/20 rounded-2xl"></div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-zoicBlue text-gray-200 text-center py-12">
        <div className="font-semibold text-xl text-white mb-2">ZOIC Pharmaceuticals</div>
        <p className="text-sm">Science. Integrity. Life. | © 2025 All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </main>
  );
}
