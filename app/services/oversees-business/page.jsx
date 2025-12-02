"use client";
import dynamic from "next/dynamic";
import WorldMap from "../../components/WorldMap";
import Footer from "../../components/Footer";

export default function OverseasPage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      <section
  className="h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black/80 to-black/20 text-white text-center px-6 relative"
  style={{ backgroundImage: "url('/overseas.jpg')" }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50" />

  <div className="relative">
    <h1 className="text-5xl font-bold mb-4">Overseas Business & Global Growth</h1>
    <p className="text-lg max-w-2xl mx-auto">
      Delivering trusted pharmaceutical solutions to global markets.
    </p>
  </div>
</section>


      <section className="py-16 px-6 w-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-[80%]">
            <h2 className="text-5xl font-bold mb-6">Our International Expansion</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We are expanding globally with strategic partnerships, strong supply chains,
          and product registrations across regulated and semi-regulated markets. Our focus is on
          delivering high-quality healthcare worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-[#1BA3CD]/80 text-white text-2xl rounded-xl">
            <h3 className="font-semibold mb-2">Entered Overseas Markets</h3>
            <p className="text-lg text-gray-100 mt-5">
              Exporting branded generics and specialty medicines.
            </p>
          </div>
          <div className="p-6 bg-[#1BA3CD]/80 text-white text-2xl rounded-xl">
            <h3 className="font-semibold mb-2">Growing Distribution Network</h3>
            <p className="text-lg text-gray-100 mt-5">
              Local distributors and long-term trade partnerships.
            </p>
          </div>
          <div className="p-6 bg-[#1BA3CD]/80 text-white text-2xl rounded-xl">
            <h3 className="font-semibold mb-2">Compliance & Registrations</h3>
            <p className="text-lg text-gray-100 mt-5">
              Country-wise documentation, dossiers, and certifications.
            </p>
          </div>
        </div>
        </div>
        
      </section>

     

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
          <p className="text-gray-600 mb-8">
            Explore markets where our products are currently available.
          </p>

          <div className=" overflow-hidden ">
            <WorldMap />
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
