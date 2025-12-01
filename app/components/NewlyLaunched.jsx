"use client";

export default function NewlyLaunched() {
  const products = [
    {
      id: 1,
      name: "COMBICEF-XL",
      price: "INR. 249/-",
      desc: "Overnight Moisturising, Softens & Heals Dry Feet",
      image: "/combicef-xl.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
    {
      id: 2,
      name: "FIXCEF- 0",
      price: "INR. 349/-",
      desc: "Broad Spectrum, Protects from UV, Blue Light",
      image: "/fixcef-o1.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
    {
      id: 3,
      name: "SEEZIDE-T",
      price: "INR. 149/-",
      desc: "Natural & Premium Rose Water for Skin",
      image: "/seezidet.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
    {
      id: 4,
      name: "SEEZONE 1000mg",
      price: "INR. 199/-",
      desc: "Removes Dirt, Deep Cleans & Refreshes",
      image: "/seezone1000mg.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
    {
      id: 5,
      name: "SEEZONE SB",
      price: "INR. 149/-",
      desc: "Natural & Premium Rose Water for Skin",
      image: "/SeezoneSB.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
    {
      id: 6,
      name: "SULTAB",
      price: "INR. 199/-",
      desc: "Removes Dirt, Deep Cleans & Refreshes",
      image: "/sultab.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
    {
      id: 7,
      name: "BI-CLAV 1000",
      price: "INR. 199/-",
      desc: "Removes Dirt, Deep Cleans & Refreshes",
      image: "/biclav1000.jpg",
      pack: "10x10 Tablets",
      composition: "Cefixime 200mg + Clavulanic Acid 125mg",
    },
  ];

  return (
    <section className="px-8 py-32 overflow-hidden">
      <h2 className="regulator-nova-alts-straight tracking-wider text-7xl text-center mb-5">Newly Launched</h2>
      <p className="text-center text-gray-500 ">
        At <span className="text-[#048DB7] font-semibold">ZOIC</span> it’s all
        about continuous innovations.
      </p>

      {/* Marquee container */}
      <div className="max-w-7xl mx-auto relative py-12 w-full overflow-hidden">
        {/* Left scroll */}
        <div className="relative overflow-hidden py-12 w-full">
          <div className="scroll-container">
            <div className="scroll-content">
              {[...products, ...products].map((p, index) => (
                <div
                  key={p.id + index}
                  className="md:w-[20vw] w-[80vw] shrink-0 bg-white shadow-xl
                    border border-gray-200 rounded-t-[10%] mx-5"
                >
                  <div
                    className="h-[28vh] w-full bg-contain bg-no-repeat bg-center overflow-hidden rounded-t-[10%]"
                    style={{ backgroundImage: `url(${p.image})` }}
                  ></div>
                  <div className="p-4 h-48">
                    <h3 className="regulator-nova-alts tracking-wider font-semibold text-[#048DB7] text-2xl">
                      {p.name}
                    </h3>
                    <p className="regulator-nova-alts-straight tracking-wider text-sm font-bold text-gray-700 mt-2">
                      Packaging: {p.pack}
                    </p>
                    <p className="regulator-nova-alts-straight text-[10px] text-gray-500 mt-2">
                      <b>Composition:</b> {p.composition}
                    </p>
                    <p className="regulator-nova-alts-straight text-[10px] text-gray-500 mt-2">
                      <b>Usage:</b> {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
