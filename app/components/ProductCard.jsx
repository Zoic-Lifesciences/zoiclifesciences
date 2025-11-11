"use client";
import { useRouter } from "next/navigation";

export default function ProductCard({ img, title, description, pack, price, category }) {
  const router = useRouter();

  const handleClick = () => {
    // encode title so it’s URL-safe
    router.push(`/products/${encodeURIComponent(title)}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between hover:shadow-lg transition">
      {img ? (
        <img src={img} alt={title} className="h-32 mx-auto object-contain" />
      ) : (
        <div className="h-32 flex items-center justify-center text-gray-400">
          No Image Available
        </div>
      )}

      <div className="text-center mt-3">
        <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-sm text-gray-600 truncate">{description}</p>
        <p className="text-sm mt-1 text-gray-500">{pack}</p>
        <p className="text-orange-600 font-semibold mt-2">₹ {price}</p>
        <button
          onClick={handleClick}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
        >
          Get Details
        </button>
      </div>
    </div>
  );
}
