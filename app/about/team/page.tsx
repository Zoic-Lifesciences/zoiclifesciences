"use client";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const team = [
  {
    name: "Mr. Sanjay Gupta",
    role: "Founder & Managing Director",
    image: "/team/sanjaygupta.jpg",
    bio: "Visionary leader with 25+ years of experience in the pharma & healthcare industry.",
  },
  {
    name: "Rohit Mamgain",
    role: "Chief Operating Officer",
    image: "/images/team/priya.webp",
    bio: "Ensures smooth nationwide distribution with high operational efficiency.",
  },
  {
    name: "Rohit Sharma",
    role: "Cheif Marketing Officer",
    image: "/images/team/rohit.webp",
    bio: "Expert in brand building, strategy, and pharma franchise expansion.",
  },
  {
    name: "Neha Verma",
    role: "VP Sales & Marketing",
    image: "/images/team/neha.webp",
    bio: "Maintains strict GMP-WHO standards and ensures product quality excellence.",
  },
  {
    name: "Neha Verma",
    role: "Quality Assurance Manager",
    image: "/images/team/neha.webp",
    bio: "Maintains strict GMP-WHO standards and ensures product quality excellence.",
  },
  {
    name: "Neha Verma",
    role: "Store Head",
    image: "/images/team/neha.webp",
    bio: "Maintains strict GMP-WHO standards and ensures product quality excellence.",
  },
  {
    name: "Neha Verma",
    role: "Purchase Head",
    image: "/images/team/neha.webp",
    bio: "Maintains strict GMP-WHO standards and ensures product quality excellence.",
  },
  {
    name: "Neha Verma",
    role: "Senior Sales Manager",
    image: "/images/team/neha.webp",
    bio: "Maintains strict GMP-WHO standards and ensures product quality excellence.",
  },
];

export default function TeamPage() {
  return (
    <>
    
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-40">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-[#048DB7]"
            >
              Meet Our Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-gray-600 text-lg"
            >
              At <span className="font-semibold text-[#048DB7]">ZOIC</span>, we grow together as one family.  
              Our leadership & team bring passion, innovation, and excellence to every step.
            </motion.p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 mt-16 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-[#048DB7] font-medium text-sm">{member.role}</p>
                <p className="text-gray-600 mt-3 text-sm">{member.bio}</p>

                <div className="mt-4 flex justify-center gap-4 text-blue-600">
                  <i className="ri-linkedin-fill text-xl hover:text-blue-800 cursor-pointer"></i>
                  <i className="ri-mail-fill text-xl hover:text-blue-800 cursor-pointer"></i>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership Highlight Section */}
          <div className="max-w-6xl mx-auto mt-24 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-linear-to-b from-[#1BA3CD] to-[#090A69] text-white p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-10"
            >
              <img
                src="/team/sanjaygupta.jpg"
                alt="Leader"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md"
              />

              <div>
                <h2 className="text-3xl font-semibold">Leadership That Inspires Excellence</h2>
                <p className="mt-3 text-blue-100 text-md leading-relaxed">
                  Under the guidance of our leadership team, ZOIC has become a trusted name 
                  in pharmaceutical innovation, PCD franchise development, and quality-driven healthcare solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>  
        <Footer />
    </>
  );
}
