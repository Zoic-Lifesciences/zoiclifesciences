"use client";
import Image from "next/image";

export default function WhatWeOffer() {
  const offers = [
    {
      title: "Monopoly PCD Franchise Rights",
      desc: "Gain exclusive monopoly rights in your preferred location and build your business without market saturation.",
      img: "/Offer.png", // replace with your actual image path
    },
    {
      title: "Extensive Product Portfolio",
      desc: "Explore over 500+ DCGI-approved formulations across various therapeutic segments including general, derma, pediatric, ayurvedic, cardiac-diabetic, and more.",
      img: "/Offer.png",
    },
    {
      title: "WHO-GMP Certified Manufacturing",
      desc: "Our products are manufactured in world-class facilities adhering to strict quality standards, ensuring safety, stability, and efficacy.",
      img: "/Offer.png",
    },
    {
      title: "Complete Promotional Support",
      desc: "Boost your market presence with free promotional materials like MR bags, visual aids, catch covers, samples, and reminder cards.",
      img: "/Offer.png",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#1BA3CD] to-[#090A69] h-[90vh] py-16 px-6 text-white flex flex-col items-center text-center">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">What we offer</h2>
      <p className="max-w-3xl text-gray-200 mb-10">
        At <span className="text-white font-semibold">ZOIC Life Sciences</span>, we are committed to empowering pharma professionals,
        distributors, and entrepreneurs with profitable franchise opportunities backed by trust,
        quality, and innovation. With years of industry experience, we deliver everything you need to
        succeed in the PCD Pharma business.
      </p>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 h-full sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
  {offers.map((offer, index) => (
    <div
      key={index}
      className="relative flex flex-col h-full w-[20vw] overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300"
      style={{
        borderTopRightRadius: "20%",
        borderBottomLeftRadius: "20%",
      }}
    >
      <div
        className="h-full bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${offer.img}')`,
      }}
      ></div>

      <div className="absolute bottom-10 w-full text-white bg-opacity-50 transition duration-300 flex flex-col justify-end text-left p-6">
        <h3 className="font-bold text-lg md:text-xl">{offer.title}</h3>
        <p className="text-gray-200 text-sm mt-2">{offer.desc}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
