"use client";

import Footer from "@/app/components/Footer";
import { useState } from "react";
import Image from "next/image";


export default function PcdFranchise() {
  return (
    <div className="regulator-nova-alts-straight text-white w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-50">
        <div className="absolute inset-0  bg-linear-to-tr from-[#1BA3CD] to-[#090A69] opacity-90"></div>

        <div className="max-w-7xl relative z-10 mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold drop-shadow-lg">
            PCD Pharma Franchise
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Zoic Life Sciences – India’s Leading Monopoly Based PCD Franchise Provider
          </p>

          <button className="mt-10 bg-white text-[#1BA3CD] px-10 py-4 font-semibold rounded-full shadow-2xl hover:bg-blue-100 transition">
            Get Franchise
          </button>
        </div>

        {/* Floating animated pills */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24 text-[#090A69]/20" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39 56.44C175.45 34.35 98.07 86.17 0 106.16V0h1200v27.35c-95.19 36.49-167.69 
            29.50-321.39 29.09-168.63-.44-182.94 42.54-371.64 42.54-188.7 0-188.7-50.54-282.58-42.54z"></path>
          </svg>
        </div>
      </section>

      {/* =================== MARQUEE =================== */}
      <section className="max-w-6xl mx-auto  bg-white text-[#090A69] py-4 border-y">
        <div className="animate-marquee whitespace-nowrap text-lg font-semibold">
            <span className="mx-10">Anti-Hypertensives</span>
            <span className="mx-10">Hypolipidemic</span>
            <span className="mx-10">Anti-Diabetic</span>
            <span className="mx-10">Anti-Epileptic</span>
            <span className="mx-10">Derma Care</span>
            <span className="mx-10">Gynae Care</span>
            <span className="mx-10">Nutraceuticals</span>
            <span className="mx-10">Ayurvedic</span>
            <span className="mx-10">Dental Care</span>
            <span className="mx-10">Psychotropic</span>
        </div>
      </section>

      {/* =================== INTRO =================== */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 text-[#090A69]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Fancy card */}
          <div className="bg-white shadow-2xl rounded-3xl p-10 border border-blue-200 bg-opacity-80 backdrop-blur">
            <h2 className="text-4xl font-bold mb-6">Why We Are No. 1</h2>
            <p className="leading-relaxed mb-4">
              Zoic Life Sciences is the top PCD pharma company offering monopoly rights across India.
            </p>
            <p className="leading-relaxed">
              Our values—Integrity, Respect, Collaboration, Innovation—drive our excellence.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="rounded-3xl bg-blue-300 shadow-2xl h-80 flex items-center justify-center text-white text-3xl font-semibold">
            IMAGE / GRAPHIC
          </div>

        </div>
      </section>

      {/* =================== PRODUCT CAROUSEL =================== */}
      <section className="py-24 bg-white text-[#090A69]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">Our Product Segments</h2>

          <div className="flex overflow-x-auto space-x-6 pb-4 snap-x">
            {[
              "Anti-Hypertensives",
              "Hypolipidemic",
              "Anti-Diabetic",
              "Anti-Epileptic",
              "Derma Care",
              "Gynae Care",
              "Nutraceuticals",
              "Ayurvedic",
              "Dental Care",
              "Psychotropic",
            ].map((item, idx) => (
              <div
                key={idx}
                className="min-w-[240px] snap-start bg-[#1BA3CD] text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================== ALTERNATING SECTIONS =================== */}
      <section className="py-24 bg-gray-100 text-[#090A69]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* LEFT IMAGE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className=" h-90 relative">
              <Image
    src="/quality.avif"
    alt="Product"
    fill
    className="object-contain rounded-3xl"
  />
              
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Quality Assurance</h3>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Dedicated QA & QC department</li>
                <li>Premium pharmaceutical packaging</li>
                <li>Advanced manufacturing with cutting-edge technology</li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4">Documents Required</h3>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Drug License</li>
                <li>GST Certificate</li>
                <li>PAN Card</li>
                <li>Business Plan</li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-3xl  h-90 relative ">
              <Image
    src="/documents.avif"
    alt="Product"
    fill
    className="object-contain rounded-3xl"
  />
            </div>
          </div>

        </div>
      </section>

      {/* =================== REGIONS GRID =================== */}
      <section className="py-24 bg-blue-50 text-[#090A69]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Available Across All Indian States
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
              "Goa", "Gujarat", "Haryana", "Kerala", "Maharashtra", "Punjab",
              "Rajasthan", "Tamil Nadu", "Uttar Pradesh", "West Bengal", "Delhi",
              "Jammu & Kashmir", "Ladakh", "Puducherry", "Chandigarh",
            ].map((state, idx) => (
              <div
                key={idx}
                className="bg-white p-4 text-center rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition"
              >
                {state}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================== FANCY CONTACT FORM =================== */}
      <section className="py-24 bg-white text-[#090A69]">
        <div className="max-w-4xl mx-auto px-6">
          <div className=" p-10 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Get PCD Franchise</h2>

            <form className="grid grid-cols-1 gap-6">
              <input className="p-3 border border-gray-200 rounded-lg text-[#090A69]" placeholder="Your Name" />
              <input className="p-3 border border-gray-200 rounded-lg text-[#090A69]" placeholder="Email" />
              <input className="p-3 border border-gray-200 rounded-lg text-[#090A69]" placeholder="City" />
              <input className="p-3 border border-gray-200 rounded-lg text-[#090A69]" placeholder="Phone Number" />
              <textarea className="p-3 border border-gray-200 rounded-lg text-[#090A69] h-32" placeholder="Message" />
              <input className="p-3 border border-gray-200 rounded-lg text-[#090A69]" placeholder="What is 4 + 9?" />

              <button className="bg-[#090A69] text-white py-3 rounded font-semibold hover:bg-blue-100 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      
            <Footer />
    </div>
  );
}

/* Tailwind Animation */
<style jsx global>{`
  .animate-marquee {
    display: inline-block;
    animation: marquee 15s linear infinite;
  }
  @keyframes marquee {
    from { transform: translateX(0%); }
    to { transform: translateX(-50%); }
  }
`}</style>
