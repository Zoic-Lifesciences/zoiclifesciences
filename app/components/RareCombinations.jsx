"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import products from "@/data/products.json";
import { useRouter } from "next/navigation";

export default function RareCombinations() {
  const router = useRouter();
  const bestSellerNames = [

    "ASTHARIL-LS SYRUP",
    "BIG-B6 TABLET",
    "DOXWAY-AM TABLET",
    "DURAFLEX TABLET",
    "DOXY-TZ TABLET",
    "PHYTOFLEX",
    "SEEZONE 2gm INJ.",
    "HERPIRID CREAM"
  ];
  // CLICK HANDLER
  const openProduct = (name) => {
    // find product from products.json
    const product = products.find((p) => p.title === name);
    if (!product) return;

    const imageName = product.title.trim().split(" ")[0];
    const encodedImageName = encodeURIComponent(imageName);

   router.push(
  `/products/${encodeURIComponent(product.title)}?composition=${encodeURIComponent(
    product.composition
  )}`
);

  };


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
    <section className="md:px-8 px-5 py-10 overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto relative md:py-12 w-full flex md:flex-row flex-col">
        <div className="mr-10 flex flex-col justify-center">
            <h2 className="regulator-nova-alts-straight tracking-wider text-4xl mb-5">
           <span className="text-[#048DB7] md:text-5xl text-3xl font-semibold">Rare</span> <br></br>Combinations
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
        

        <div className="relative flex items-center md:w-[80%] w-[95%]">
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
            {bestSellerNames.map((name, index) => {
              
              const product = products.find((p) => p.title === name);
              if (!product) return null;

  const imageName = product.title.trim().split(" ")[0];
  const encodedImage = encodeURIComponent(imageName);

              return (
                <div
                  key={index}
                  onClick={() => openProduct(name)}
                  className="md:w-[30vw] w-[80vw] p-4 flex-shrink-0 cursor-pointer"
                >
                  <div className="md:h-[350px] md:w-[350px] h-[250px] w-[250px] bg-contain bg-no-repeat bg-center relative">
                    <Image
          src={`/productImages/${encodedImage}.jpg`}
          alt="Image Not found"
          fill
          className="h-76 mx-auto object-cover"
          onError={() => {
            if (src.endsWith(".jpg")) {
              setSrc(`/productImages/${encodedImage}.jpeg`);
            } else {
              setSrc("/productImages/default.avif");
            }
          }}
        />
                  </div>
                  <h3 className="text-xl text-[#048DB7] font-bold mt-3">{product.title}</h3>
                  <p className="text-gray-600">{product.pack}</p>
                  <p className="font-semibold mt-1">{product.description}</p>
                </div>
              );
            })}
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
