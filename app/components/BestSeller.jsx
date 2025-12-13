"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import products from "@/data/products.json";

export default function BestSeller() {
  const router = useRouter();

  // ONLY product names to display in the slider
  const bestSellerNames = [
    "FULLFLORA",
    "OM TABLET",
    "RABICLIP-ITR CAP",
    "PASE-AP TABLET",
    "PENTAKOOL-DSR",
    "DOXY-TZ TABLET",
    "PENTAKOOL INJ",
    "ACEMOVE-P TABLET",
    "RIBS TABLET",
    "TRIPT-10 TABLET",
    "BI-CLAV-1000-TABLET",
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  return (
    <section className="md:px-8 px-4 md:py-10 py-0 overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto relative py-12 w-full">
        <h2 className="regulator-nova-alts tracking-wider md:text-5xl text-3xl mb-5">
          Our <span className="text-[#048DB7] font-semibold">Top Selling</span> Products
        </h2>
        <p className="text-gray-500 mb-8">
          At <span className="text-[#048DB7] font-semibold">ZOIC</span> it’s all about continuous innovations.
        </p>

        <div className="relative flex items-center ">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md "
          >
            <FiChevronLeft className="text-2xl text-[#048DB7] " />
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
                  className="md:w-[30vw] w-[80vw] p-4 flex-shrink-0 hover:cursor-pointer
                            transform transition-transform duration-300
                            hover:-translate-y-2"
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
