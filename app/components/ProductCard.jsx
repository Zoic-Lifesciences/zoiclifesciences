"use client";
import { useRouter } from "next/navigation";

export default function ProductCard({ img, title, description, pack, productPacking, price, category }) {
  const router = useRouter();
  

  
  
  const imageName = title.trim().split(" ")[0];
 const encodedImageName = encodeURIComponent(imageName);

const handleClick = () => {
    // encode title so it’s URL-safe
    router.push(
    `/products/${encodeURIComponent(title)}?composition=${encodeURIComponent(description)}`
  );
  };

  return (
    
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition">
      {img ? (
        <img
  src={`/productImages/${encodedImageName}.jpg`}
  alt={title}
  onError={(e) => {
    if (e.target.src.includes(".jpg")) {
      e.target.src = `/productImages/${encodedImageName}.jpeg`
    } else {
      e.target.src = "/productImages/default.avif"
    }
  }}
  className="h-76 mx-auto object-contain"
/>

      ) : (
        <div className="h-32 flex items-center justify-center text-gray-400">
          No Image Available
        </div>
      )}

      <div className="text-start mt-3 px-5">
        <div className="flex flex-row gap-2">
          <span className="bg-yellow-500 text-white text-sm px-4 py-1 rounded-full">{productPacking} </span>
        </div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-sm text-wrap text-gray-400 truncate h-10">Composition: {description}</p>
        <p className="text-sm mt-1 text-gray-500">{pack}</p>
        <p className="text-orange-600 font-semibold mt-2">₹ {price}</p>
        <button
          onClick={handleClick}
          className="mt-3 bg-[#048DB7] cursor-pointer hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
