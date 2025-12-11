"use client";
import Image from "next/image";
import products from "@/data/products.json";
import { useRouter } from "next/navigation";

export default function NewlyLaunched() {
  const router = useRouter();
  const bestSellerNames = [

    "FASTNEM-200",
    "FUSISTAR-F",
    "ZOTHASYL TABLETS",
    "SALVUS",
    "BILLU TAB",
    "PIKU SYRUP",
    "URIKOOL-100 SYP",
    "LAX PEG"
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
  

  return (
    <section className="px-8 md:py-32 py-16 overflow-hidden">
      <h2 className="regulator-nova-alts-straight tracking-wider md:text-7xl text-3xl text-center mb-5">Newly Launched</h2>
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
              {bestSellerNames.map((name, index) => {
  const product = products.find((p) => p.title === name);
  if (!product) return null;

  const imageName = product.title.trim().split(" ")[0];
  const encodedImage = encodeURIComponent(imageName);

  return (
    <div
      key={product.id + index}
      onClick={() => openProduct(name)}
      className="md:w-[20vw] w-[80vw] shrink-0 bg-white shadow-xl border border-gray-200 rounded-t-[10%] mx-5"
    >
      <div className="h-[28vh] w-full bg-contain bg-no-repeat bg-center overflow-hidden rounded-t-[10%] relative">
        <img
          src={`/productImages/${encodedImage}.jpg`}
          alt="Image Not found"
          onError={(e) => {
            if (e.target.src.endsWith(".jpg")) {
              e.target.src = `/productImages/${encodedImage}.jpeg`;
            } else {
              e.target.src = "/productImages/default.avif";
            }
          }}
          className="h-76 mx-auto object-contain"
        />
      </div>
      <div className="p-4 h-48">
        <h3 className="regulator-nova-alts tracking-wider font-semibold text-[#048DB7] text-2xl">
          {product.title}
        </h3>
        <p className="regulator-nova-alts-straight tracking-wider text-sm font-bold text-gray-700 mt-2">
          Packaging: {product.pack}
        </p>
        <p className="regulator-nova-alts-straight text-[10px] text-gray-500 mt-2">
          <b>Composition:</b> {product.description}
        </p>
        <p className="regulator-nova-alts-straight text-[10px] text-gray-500 mt-2">
          <b>Usage:</b> {product.productPacking}
        </p>
      </div>
    </div>
  );
})}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
