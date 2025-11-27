"use client";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const awards = [
  {
    title: "Best PCD Pharma Franchise Company 2024",
    description: "Recognized for quality standards, innovation, and national distribution excellence.",
    image: "/awards/excellence-award.webp",
  },
  {
    title: "Top 10 Fastest Growing Pharma Company in India",
    description: "Awarded for rapid growth, strong market presence, and ethical business practices.",
    image: "/awards/15.webp",
  },
  {
    title: "ISO 9001:2015 Certified",
    description: "Certified for maintaining world-class quality and GMP-WHO manufacturing processes.",
    image: "/images/awards/iso-certified.webp",
  },
  {
    title: "Excellence in Customer Trust Award",
    description: "Honored for consistent client satisfaction & transparent franchise support.",
    image: "/images/awards/award-trust.webp",
  },
];

export default function AwardsPage() {
  return (
    <>
    
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-40 pb-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#048DB7]">
            Our Awards & Achievements
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We take pride in delivering world-class pharmaceutical solutions and maintaining
            excellence across all operations. Our achievements represent our commitment to quality,
            innovation, and trust.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 mt-16 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#048DB7]">{award.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Banner */}
        <div className="mt-24 mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-linear-to-b from-[#1BA3CD] to-[#090A69] text-white p-10 rounded-2xl shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              Trusted by Hundreds of Pharma Professionals Across India
            </h2>
            <p className="mt-3 text-blue-100">
              These achievements strengthen our vision to deliver the highest quality medicines
              and empower PCD franchise partners nationwide.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
