"use client";

import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Manufacturing() {
  return (
    <div className="regulator-nova-alts-straight tracking-wider bg-[#090A69] text-white w-full overflow-hidden">

        {/* ================= HERO (FACTORY DRONE SHOT) ================= */}
        <section className="relative h-[100vh] w-full flex items-center justify-center">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                backgroundImage:
                    "url('/factory.jpg')"
                // replace with your factory drone shot
                }}
            />

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-blue-900/60"></div>

            {/* Floating Glare Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-48 h-48 bg-white/10 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#1BA3CD]/10 blur-3xl rounded-full animate-ping"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-7xl md:w-full w-[90%] mx-auto px-6 text-center">
                <h1 className="regulator-nova-alts tracking-wider text-4xl md:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight">
                India’s Leading  
                <span className="block md:text-6xl text-4xl text-[#1BA3CD] mt-2">Pharma Manufacturing Company</span>
                </h1>

                <p className="tracking-wider mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                World-class pharmaceutical production powered by advanced technology, 
                expert chemists, and state-of-the-art manufacturing infrastructure.
                </p>
                <a href="#manufacturing">
                  <button className="regulator-nova-alts mt-10 bg-white text-[#090A69] px-10 py-4 font-semibold rounded-full shadow-2xl hover:bg-blue-100 transition">
                Explore Our Manufacturing Facility
                </button>
                </a>
                
            </div>
        </section>


      {/* ================= INTRO ================= */}
      <section className="py-24 bg-gray-50 text-blue-900" id="manufacturing">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Intro Card */}
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-200">
              <h2 className="text-4xl font-bold mb-6">Top Pharma Manufacturer in India</h2>
              <p className="leading-relaxed mb-4">
                Zoic Life Sciences is one of India’s leading WHO-GMP, ISO-certified
                pharma manufacturers delivering high-quality & reliable formulations.
              </p>
              <p className="leading-relaxed">
                We specialize in large-scale production with cutting-edge machinery, expert chemists, and strict quality standards.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-3xl bg-[#1BA3CD] shadow-xl h-[85vh] flex items-center justify-center text-2xl font-bold text-white">
              <Image src={'/plant1.jpeg'} 
                alt="Zoic Manufacturing Plant Image " 
                width={1000} height={500}
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= CAPABILITIES CAROUSEL ================= */}
      <section className="py-24 bg-white text-blue-900">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">Our Manufacturing Capabilities</h2>

          <div className="flex overflow-x-auto gap-6 pb-6 snap-x">
            {[
              "Tablets Manufacturing",
              "Capsules Manufacturing",
              "Syrups & Suspensions",
              "Injections (Dry & Liquid)",
              "Derma & Ointments",
              "Nutraceutical Manufacturing",
              "Ayurvedic Manufacturing",
              "Eye/Ear Drops",
            ].map((item, idx) => (
              <div
                key={idx}
                className="min-w-[260px] snap-start bg-gradient-to-br from-[#090A69] to-blue-900 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ALTERNATING SECTIONS ================= */}
      <section className="py-24 bg-blue-50 text-blue-900">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* LEFT IMAGE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl bg-[#1BA3CD] h-[40vh] shadow-2xl">
              <Image src={'/advanced-infrastructure.webp'} 
                alt="Zoic Advanced Infrastructure " 
                width={1000} height={500}
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Advanced Infrastructure</h3>
              <p className="leading-relaxed text-lg mb-4">
                Our state-of-the-art facility is equipped with advanced machinery & validated equipment to ensure precise formulation.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Automated filling lines</li>
                <li>Dust-free processing zones</li>
                <li>Separate sterile & non-sterile blocks</li>
                <li>Temperature-controlled storage</li>
              </ul>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4">Quality Control & Testing</h3>
              <p className="leading-relaxed text-lg mb-4">
                Every batch undergoes multiple levels of quality checks in our in-house analytical & microbiology laboratories.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li>Raw material testing</li>
                <li>In-process quality checks</li>
                <li>Finished product testing</li>
                <li>Stability studies</li>
              </ul>
            </div>

            <div className="order-1 md:order-2 rounded-3xl bg-[#1BA3CD] h-[40vh] shadow-2xl">
              <Image src={'/quality.webp'} 
                alt="Zoic Quality" 
                width={1000} height={500}
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="py-24 bg-white text-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">Our Manufacturing Process</h2>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              { step: "01", title: "Raw Material Procurement", desc: "Sourced from trusted & certified vendors" },
              { step: "02", title: "Formulation Development", desc: "Lab-tested & optimized compositions" },
              { step: "03", title: "Production & Filling", desc: "Automatic machines ensure accuracy" },
              { step: "04", title: "Packaging & Dispatch", desc: "Tamper-proof, export-grade packaging" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#090A69] text-white p-8 rounded-3xl shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-5xl font-extrabold opacity-30">{item.step}</div>
                <h3 className="text-2xl font-bold mt-2">{item.title}</h3>
                <p className="text-blue-100 mt-3">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
        <section className="py-24 bg-blue-50 text-blue-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-10 tracking-wider">Certifications</h2>

            <div className="grid md:grid-cols-3 gap-10">
            {[
                {
                name: "WHO-GMP Certified",
                img: "/who-cert.jpg" // place your image in public/certifications/
                },
                {
                name: "ISO 9001:2015 Certified",
                img: "/iso-cert.jpg"
                },
                {
                name: "GMP Certified",
                img: "/gmp-cert.jpg"
                }
            ].map((item, idx) => (
                <div
                key={idx}
                className="bg-white shadow-xl p-10 rounded-3xl font-bold text-xl hover:scale-105 transition flex flex-col items-center"
                >
                <div className="font-bold text-2xl tracking-wider">{item.name}</div>
                <img
                    src={item.img}
                    alt={item.name}
                    className="mt-4 w-full h-full rounded-xl mt-10 object-contain"
                />
                </div>
            ))}
            </div>
        </div>
        </section>


      {/* ================= CONTACT CTA ================= */}
      <section className="py-24 bg-white text-blue-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#090A69] text-white p-14 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Partner With Us for Manufacturing</h2>
            <p className="text-blue-100 text-lg mb-10">
              Build your brand with world-class pharmaceutical manufacturing.
            </p>

            <a href="/about/team">
              <button className="bg-white text-[#090A69] px-10 py-4 font-semibold rounded-full shadow-lg hover:bg-blue-100 transition">
              View Our Team
            </button>
            </a>

            
          </div>
        </div>
      </section>
            <Footer />
    </div>
  );
}
