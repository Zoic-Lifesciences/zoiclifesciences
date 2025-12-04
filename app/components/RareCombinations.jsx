"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function RareCombinations() {
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

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2; // scroll half container width
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="px-8 py-10 overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto relative py-12 w-full flex">
        <div className="mr-10 flex flex-col justify-center">
            <h2 className="regulator-nova-alts-straight tracking-wider text-4xl mb-5">
           <span className="text-[#048DB7] text-5xl font-semibold">Rare</span> <br></br>Combinations
        </h2>
        <p className="text-gray-500 mb-8">
          At <span className="text-[#048DB7] font-semibold">ZOIC</span> it’s all about continuous innovations.
        </p>
       <a href="/products">
  <button className="text-white w-fit p-4 rounded-2xl bg-[#048DB7]">
    Explore more
  </button>
</a>

        </div>
        

        <div className="relative flex items-center w-[80%]">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md"
          >
            <FiChevronLeft className="text-2xl text-[#048DB7]" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth w-full"
          >
            {products.map((p) => (
              <div key={p.id} className="w-[30vw]  p-4 flex-shrink-0">
                <div
                  className="h-[40vh] w-full bg-contain bg-no-repeat bg-center "
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
                <h3 className="text-xl text-[#048DB7] font-bold mt-3">{p.name}</h3>
                <p className="text-gray-600">{p.pack}</p>
                <p className="font-semibold mt-1">{p.price}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md"
          >
            <FiChevronRight className="text-2xl text-[#048DB7]" />
          </button>
        </div>
      </div>
    </section>
  );
}
