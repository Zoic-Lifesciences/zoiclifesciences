"use client";
import Image from "next/image";

export default function Certifications() {
  return (
    <section className="bg-[#EFFBFF] py-16 px-6 flex flex-col items-center text-center">
      <div className="w-[90vw] text-center flex justify-center flex-col items-center h-[70vh]">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Certifications That Define Excellence
        </h2>
        <p className="text-gray-600 max-w-3xl text-center">
          At <span className="text-[#04A0D1] font-semibold">ZOIC</span> we adhere to the highest
          standards with WHO-GMP, ISO, GMP, and CDSCO certifications ensuring every product meets
          the strongest quality requirements.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 w-full max-w-7xl">
          {/* ISO Certified */}
          <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/iso.png"
              alt="ISO Certified"
              width={250}
              height={250}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">ISO Certified</h3>
            <p className="text-gray-500 text-start text-sm max-w-[250px]">
              Compliant with rigorous quality management standards, guaranteeing consistent
              excellence in all our products and processes.
            </p>
          </div>

          {/* WHO-GMP Certified */}
          <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/who.png"
              alt="WHO-GMP Certified"
              width={250}
              height={250}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">WHO-GMP Certified</h3>
            <p className="text-gray-500 text-start text-sm max-w-[250px]">
              Ensuring products meet the highest global standards for Good Manufacturing Practices,
              safeguarding patient health.
            </p>
          </div>

          {/* CDSCO Approved */}
          <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/cdsco.png"
              alt="CDSCO Approved"
              width={250}
              height={250}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">CDSCO Approved</h3>
            <p className="text-gray-500 text-start text-sm max-w-[250px]">
              Certified by the Central Drugs Standard Control Organization, ensuring our commitment
              to pharmaceutical quality and safety in India.
            </p>
          </div>

          {/* GMP Compliant */}
          <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/gmp.png"
              alt="GMP Compliant"
              width={250}
              height={250}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg text-black mb-2">GMP Compliant</h3>
            <p className="text-gray-500 text-start text-sm max-w-[250px]">
              Adhering to strict Good Manufacturing Practices to maintain product safety, efficacy,
              and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
